#!/bin/bash

# fetch new code
git fetch
git reset --hard origin/master
npm install

# build site
npm run generate
npm run deploy

# bust cloudflare cache
curl -X DELETE "https://cloudflare.fftf.xyz/zones/b4a655e330bd2305f7758188f24ff663/cache" \
     -H "X-Auth-Key: ${CLOUDFLARE_ZONE_KEY}"

