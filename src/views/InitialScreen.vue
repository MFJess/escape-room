<script setup lang="ts">
  
  import {ref} from 'vue'
  import {useRouter} from 'vue-router'

  const router = useRouter()
  const countdownTime = ref<number>(0)
  const exitCode = ref<string>('')
  
  function submitTime(){
    router.push({ path: "/play", query: { countdownTime: countdownTime.value.toString(), exitCode: exitCode.value } });
    console.log('Submitting time:', countdownTime.value, 'Exit code:', exitCode.value);
  }  
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="mt-48 text-5xl font-bold text-yellow-900"> 🔎 WELCOME TO ESCAPE ROOM 🔍 </h1>
        
        <form @submit.prevent="submitTime" class="flex flex-col items-center">
            <h2 class="mt-32 text-2xl font-bold text-yellow-800"> 👇 Input countdown time </h2>
            <input v-model="countdownTime" type="number" placeholder=" in minutes" class="h-16 mt-4 text-gray-800 border-4 border-yellow-900 rounded-lg w-80 placeholder:text-center placeholder:text-gray-800"/>
            
            <h2 class="mt-12 text-2xl font-bold text-yellow-800"> 👇 Input exit code </h2>
            <input v-model="exitCode" type="password" placeholder=" 👀👀👀" class="h-16 mt-4 text-gray-800 border-4 border-yellow-900 rounded-lg w-80 placeholder:text-center placeholder:text-gray-800"/>
            <button type="submit" class="w-32 h-16 mt-16 text-2xl text-white bg-yellow-900 rounded-lg"> Start </button>
        </form>
    </div>
</template>


