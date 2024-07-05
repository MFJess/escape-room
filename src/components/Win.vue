<script setup lang="ts">
import {onMounted} from 'vue'
import JSConfetti from 'js-confetti'

const confetti = new JSConfetti()

function showConfetti() {
  confetti.addConfetti()
}

onMounted(() => {
  showConfetti();
  showConfetti();
  showConfetti();
});

</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-5xl font-bold text-yellow-900"> 🥳 CONGRATULATIONS! 🎉</h1>
        <h1 class="mt-24 text-5xl font-bold text-yellow-900"> 🚪 YOU ARE FREE! 🏃‍➡️</h1>
    </div>
</template>