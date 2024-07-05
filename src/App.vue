<script setup lang="ts">
  import {ref} from 'vue'
  import ChronometerVue from './components/Chronometer.vue'
  import InitialScreen from './views/InitialScreen.vue'
  import TryAgain from './components/TryAgain.vue'
  import Win from './components/Win.vue'
  import Chronometer from './components/Chronometer.vue'
  import GameOver from './components/GameOver.vue'

</script>

<template>
  <div>
    <RouterView  />
  </div>
</template>