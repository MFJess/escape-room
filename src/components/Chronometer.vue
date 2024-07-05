<script setup lang="ts">
    import { ref, defineProps, defineEmits, computed, onMounted, onBeforeUnmount } from 'vue';
    
    const props = defineProps<{
        countdownTime: number
    }>()
    
    const emits = defineEmits(['timeUp'])
    const totalTime = props.countdownTime;  // minutes
    const remainingTime = ref(totalTime); // seconds
    
    let timer: ReturnType<typeof setTimeout> | null = null;
  
    const formattedTime = computed(() => {
        const hours = Math.floor(remainingTime.value / 3600);
        const minutes = Math.floor((remainingTime.value % 3600) / 60);
        const seconds = remainingTime.value % 60;
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    });

    function pad(number: number): string {
        return number < 10 ? '0' + number : number.toString();
    }

    function startCountdown() {
        timer = setInterval(() => {
        if (remainingTime.value > 0) {
            remainingTime.value--;
        } else {
            clearInterval(timer!);
            emits('timeUp')
        }
        }, 1000);
    }

    onMounted(() => {
        startCountdown();
    });

    onBeforeUnmount(() => {
        clearInterval(timer!);
    });
    
</script>
  
  
<template>
    <div class="flex flex-col items-center justify-center">
        <div class="text-9xl">
            {{ formattedTime }}
        </div>        
    </div>
</template>
  