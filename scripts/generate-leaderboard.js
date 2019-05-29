const axios = require('axios')
const { orderBy, sumBy } = require('lodash')
const cryptocurrencies = require('cryptocurrencies')
const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

// add missing currencies
cryptocurrencies.XRP = 'Ripple'

// hide these currencies from the leaderboard
const HIDDEN_CURRENCIES = [ 'USD' , 'BCH' ]

async function fetchCoinbasePrimeAccounts() {
  const timestamp = Date.now() / 1000
  const requestPath = '/accounts'
  const body = ''
  const method = 'GET'

  // create the prehash string by concatenating required parts
  const prehash = timestamp + method + requestPath + body

  // decode the base64 secret
  const key = Buffer(process.env.COINBASE_API_SECRET, 'base64')

  // create a sha256 hmac with the secret
  const hmac = crypto.createHmac('sha256', key)

  // sign the require message with the hmac
  // and finally base64 encode the result
  const sig = hmac.update(prehash).digest('base64')

  const { data } = await axios.get('https://api.prime.coinbase.com/accounts', {
    headers: {
      'CB-ACCESS-SIGN': sig,
      'CB-ACCESS-TIMESTAMP': timestamp,
      'CB-ACCESS-KEY': process.env.COINBASE_API_KEY,
      'CB-ACCESS-PASSPHRASE': process.env.COINBASE_API_PASSPHRASE,
      'Content-Type': 'application/json'
    }
  })

  return data.map(({ currency, balance }) => {
    return {
      code: currency,
      name: cryptocurrencies[currency] || currency,
      balance: parseFloat(balance),
      usd_balance: 0.0
    }
  }).filter(a => !HIDDEN_CURRENCIES.includes(a.code))
}

async function fetchKinAccount() {
  const { data } = await axios.get('https://horizon-block-explorer.kininfrastructure.com/accounts/GBJHE4MXYF5YI6VRXRWSFXLJZ5G6YCK44I4VI3MDTMEXT3UQM2R5FSRQ')
  const balance = parseFloat(data.balances[0].balance)

  return {
    code: 'KIN',
    name: 'Kin',
    balance: balance,
    usd_balance: 0.0
  }
}

// This uses cryptocompare instead of Coinbase because it has KIN, etc.
// Coinbase exchange rates are here if we need them: https://api.coinbase.com/v2/exchange-rates
async function addUSDBalances(accounts) {
  const usdBalances = {}
  const { data : rates } = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${accounts.map(a => a.code).join(',')}`)

  Object.keys(rates).forEach(code => {
    const account = accounts.find(a => a.code === code)

    if (account) {
      const conversionRate = 1 / parseFloat(rates[code])
      account.usd_balance = account.balance * conversionRate
    }
  })
}

async function fetchAllAccounts() {
  const [ kin, coinbaseAccounts ] = await Promise.all([
    fetchKinAccount(),
    fetchCoinbasePrimeAccounts()
  ])

  const accounts = [kin, ...coinbaseAccounts]
  await addUSDBalances(accounts)

  return orderBy(accounts, ['usd_balance', a => a.name.toLowerCase()], ['desc', 'asc'])
}

const fetchLeaderboard = async function() {
  const accounts = await fetchAllAccounts()

  return {
    currencies: accounts,
    usd_total: sumBy(accounts, 'usd_balance')
  }
}

async function main() {
  const leaderboard = await fetchLeaderboard()
  const file = path.resolve(__dirname, '..', 'assets', 'data', 'leaderboard.json')
  fs.writeFileSync(file, JSON.stringify(leaderboard, null, 2))
}

main().catch(console.error)
