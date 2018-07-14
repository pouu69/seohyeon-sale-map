<template>
  <div id="map">
    <gmap-map
      :center="center"
      :zoom="18"
      style="width:100%;  height: 100%;"
    >
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        <popup v-bind:info="infoContent"/>
      </gmap-info-window>
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        @click="toggleInfoWindow(m, index)"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  import Popup from './Popup'

  export default {
    name: "MapComponent",
    components: { Popup },
    data() {
      return {
        center: { lat: 37.385179, lng: 127.123583},
        markers: [],
        currentPlace: null,
        infoWinOpen: false,
        infoWindowPos: null,
        infoContent: '',
        currentMidx: null,
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        }
      }
    },
    mounted() {
      this.getPlaceData()
    },
    methods: {
      getPlaceData() {
        this.$http.get('https://s3.ap-northeast-2.amazonaws.com/seohyeon-info/data.json').then((result) => {
          this.markers = result.data
        })
      },
      toggleInfoWindow: function(marker, idx) {
        const sameMarkers = this.markers.filter((m) => {
          if (m.name !== marker.name && m.position.lat === marker.position.lat && m.position.lng === marker.position.lng){
            return m;
          }
        });

        if (sameMarkers.length > 0) {
          this.infoContent = sameMarkers;
        } else {
          this.infoContent = [marker];
        }
        this.infoWindowPos = marker.position;
        if (this.currentMidx === idx) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }
      }
    }
  }
</script>

<style scoped>
  #map {
    height: 100%;
  }
</style>
