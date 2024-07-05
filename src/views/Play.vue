<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Chronometer from '../components/Chronometer.vue';
import TryAgain from '../components/TryAgain.vue';
import Win from '../components/Win.vue';
import GameOver from '../components/GameOver.vue';
import { useRoute } from 'vue-router';

// State variables
const route = useRoute();
const exitCode = ref(route.query.exitCode as string);
const countdownTime = ref(Number(route.query.countdownTime));
const guess = ref<string>('');
const wrongGuess = ref<boolean>(false);
const win = ref<boolean>(false);
const timeUp = ref<boolean>(false);

// Event handlers
function submitGuess(event: Event) {
    event.preventDefault();
    
    if (guess.value !== exitCode.value) {
        wrongGuess.value = true;
        setTimeout(() => {
            wrongGuess.value = false;
        }, 5000);
    } else {
        win.value = true;
    }
}

function timeIsUp() {
    timeUp.value = true;
    console.log("time is up", true)
}

// Lifecycle hook
onMounted(() => {
    console.log('Countdown time:', countdownTime.value, 'Exit code:', exitCode.value, 'Initial timeUp value:', timeUp.value);
});
</script>

<template>
        <Win v-if="win" />
        <TryAgain v-else-if="wrongGuess" />        
        <GameOver v-else-if="timeUp" />
        
        <div v-show="!win && !wrongGuess && !timeUp" class="flex flex-col items-center justify-center h-screen">
            <Chronometer :countdownTime="countdownTime" @timeUp="timeIsUp" />
            
            <h1 class="mt-32 text-4xl font-bold text-yellow-800"> 🔑 Insert exit code... </h1>
            <form @submit.prevent="submitGuess" class="items-center">
                <input v-model="guess" class="h-16 mt-8 text-gray-800 border-4 border-yellow-900 rounded-lg w-80 placeholder:text-center placeholder:text-gray-800"/>
                <button type="submit" class="w-32 h-16 ml-8 text-2xl text-white bg-yellow-900 rounded-lg"> Guess! </button>
            </form>
        </div>
</template>
