<style lang="scss">
.map-wrapper {
  position: relative;
  min-height: 300px;

  @include respond-to(med) {
    min-height: 400px;
  }
}

.leaflet-container,
.leaflet-container.dark {
  font-family: $sans-serif-stack;
  color: $background-color;

  // Repetition necessary to override mapbox.css
  a {
    color: $white;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: $white;
    }
  }
}

.event-map {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;

  .btn {
    font-weight: $bold-font-weight; // NOTE: overwrites mapbox.css, change if btn style does
    text-decoration: none;
  }

  address {
    font-style: normal;
    white-space: pre-line;
  }

  .address, .date {
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: $gutter*1.5;
    line-height: 1.1;
    font-size: $base-font-size;
    color: $grey-light-color;

    img {
      height: 15px;
      margin-right: $gutter/2;
    }

    &:before {
      content: "";
      background-image: url("~assets/images/map-pin.svg");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      width: 15px;
      height: 15px;
      margin-right: 5px;
      padding: 7.5px;
    }
  }

  .date:before {
    background-image: url("~assets/images/map-calendar.svg");
  }

  .leaflet-popup-close-button {
    color: $white;
    text-decoration: none;
    text-indent: 0;

    &:hover {
      background-color: transparent;
    }
  }

  .leaflet-popup-content-wrapper {
    background-color: transparentize($black, 0.1);
  }

  .leaflet-popup-tip {
    border-top: 10px solid transparentize($black, 0.1);
  }

  .leaflet-popup-content {
    line-height: $base-line-height;
    font-family: $sans-serif-stack;
    color: $text-color;

    h5 {
      margin-bottom: $gutter/2;
      color: $white;
      font-size: $base-font-size; // NOTE: change if h5's are ever used
    }
  }
}
</style>

<template>
  <div class="map-wrapper">
    <div id="js-event-map" class="event-map is-rounded" />
  </div>
</template>

<script>
import settings from '~/config.json'
// the production build breaks when this stuff isn't global
// TODO: figure out why that is
let markers = []
let map
let zoomCount = 0
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.css'
        }
      ],
      script: [
        {
          src: 'https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.js'
        }
      ]
    }
  },
  props: {
    events: {
      type: Array,
      required: true,
      default: null
    }
  },

  data() {
    return {
      mapCreated: false
    }
  },

  computed: {
    zoomLevel: {
      get() {
        return this.$store.state.map.zoom
      },
      set(newVal) {
        this.$store.commit('setMapZoom', newVal)
      }
    },
    currentPin: {
      get() {
        return this.$store.state.map.currentPin
      },
      set(newVal) {
        this.$store.commit('setMapCurrentPin', newVal)
      }
    }
  },

  watch: {
    events(newValue) {
      if (newValue.length) {
        // Create the map the first time events are present
        if (!this.mapCreated) {
          this.createMap()
        }
        // Sync the map any time events are updated
        this.addEventsToMap()
      }
    },
    // Watchers for computed props
    // These do not cause a re-render when the values from the store change
    // because the props are not present in the template, if they were the map
    // tiles would unload
    currentPin(newValue, oldValue) {
      if (oldValue) {
        // Close popup only if the "new" current pin is legitimately different
        if (this.currentPin === null || this.currentPin.id !== oldValue.id) {
          this.closePopup(oldValue)
        }
      }
      if (newValue) {
        this.openPopup(newValue)
      }
    },
    zoomLevel(newValue) {
      if (newValue) {
        this.zoomMap(newValue)
      }
    }
  },

  mounted() {
    // If events are available right away, create the map
    // In the production env only, creating the map too early ends up creating
    // multiple maps whose events compete with eachother
    if (!this.mapCreated && this.events.length) {
      this.createMap()
      this.addEventsToMap()
    }
  },

  /* eslint-disable no-undef */
  methods: {
    createMap() {
      if (!settings.mapboxToken) console.error('Please add a mapboxToken in config.json')
      L.mapbox.accessToken = settings.mapboxToken
      // see https://www.mapbox.com/api-documentation/#introduction
      const mapId = 'mapbox.light'
      const mapboxTiles = L.tileLayer(`https://api.mapbox.com/v4/${mapId}/{z}/{x}/{y}.png?access_token=${L.mapbox.accessToken}`, {
        attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
      map = L.map('js-event-map', {
        scrollWheelZoom: false
      })
        .addLayer(mapboxTiles)
      map.on('zoomend', e => zoomCount++)
      map.on('zoom', this.updateZoomLevel)
      map.on('popupclose', this.handlePopupClose)
      markers = []
      this.mapCreated = true
    },
    addEventsToMap() {
      if (this.events.length === 0) {
        map.setView([42.35, -71.08], 13)
        return
      }
      this.bounds = L.latLngBounds()
      for (const event of this.events) {
        this.addMarker(event)
      }
      map.fitBounds(this.bounds)
    },
    addMarker(event) {
      const ll = [event.latitude, event.longitude]
      let html = `<h5>${event.title}</h5>`
      if (event.category === 'event') {
        html += `<div class="date">${event.formatted_start_date}</div>`
      }
      html += `<div class="address"><address>${event.address}</address></div><a class="btn btn-sml btn-block" href="${event.url}" target="_blank">${event.category === 'facebook_group' ? 'Join Facebook Group' : 'Info & RSVP'}</a>`
      const marker = L.marker(ll)
        .addTo(map)
        .bindPopup(html)
      marker.eventId = event.id
      marker.on('click', this.clickMarker)
      markers.push(marker)
      this.bounds.extend(ll)
    },
    clickMarker(event) {
      this.$store.commit('setMapCurrentPin', {
        id: event.target.eventId,
        latitude: event.latlng.lat,
        longitude: event.latlng.lng,
        type: 'map-marker' // NOTE: to indicate possible incomplete information from map marker
      })
    },
    openPopup({ id }) {
      const marker = markers.find(m => m.eventId === id)
      if (marker) marker.openPopup()
    },
    closePopup({ id }) {
      const marker = markers.find(m => m.eventId === id)
      if (marker) marker.closePopup()
    },
    handlePopupClose(event) {
      // Set the current pin to null, unless the popup close was triggered by
      // this or another component updating the current pin value
      if (this.currentPin && (event.popup._source.eventId === this.currentPin.id)) {
        this.$store.commit('setMapCurrentPin', null)
      }
    },
    updateZoomLevel() {
      this.$store.commit('setMapZoom', map.getZoom())
    },
    zoomMap(newZoom) {
      // Center the map on the current pin (if one is selected) or the current map center
      const ll = this.currentPin ? [this.currentPin.latitude, this.currentPin.longitude] : map.getCenter()
      const zoom = newZoom
      map.setView(ll, zoom)
    }
  }
  /* eslint-enable no-undef */
}
</script>
