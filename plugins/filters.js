import Vue from 'vue'

function formatCurrency(value) {
  return '$' + value.toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&,')
}

Vue.filter('formatCurrency', formatCurrency)
