<template>
  <div class="relative w-72 h-72 flex items-center justify-center">
    <!-- Thick Gradient Ring -->
    <div class="absolute inset-0 rounded-full bg-gradient-ring z-0"></div>
    
    <!-- Button -->
    <button @click="navigateUserData"
      class="w-64 h-64 p-8 bg-white rounded-full shadow-[0_0_15px_rgba(255,0,0,0.4)] flex items-center justify-center text-center transition-shadow duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] font-notosansthai relative z-10">
      
      <div class="text-center">
        <div class="text-red-500 font-bold text-3xl">{{ message }}</div>
        <div v-if="animatedTax >= 0" class="text-red-500 font-bold text-3xl relative">
          {{ animatedTax }}฿
        </div>
        <p v-if="totalDeduction !== '0'" class="text-sm font-normal mt-3 text-gray-400">
          ลดหย่อนแล้ว {{ totalDeduction }}฿
        </p>
      </div>
    </button>
  </div>
</template>

<style scoped>
.bg-gradient-ring {
  background: radial-gradient(circle, rgba(255, 255, 255,0.1), rgba(255,0, 0));
  mask: radial-gradient(circle, transparent 50%, black 80%);
}
</style>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';

const navigateUserData = () => {
  window.location.href = '/userdata';
};

const message = ref('คลิกเพื่อเริ่มการคำนวณภาษี');
const animatedTax = ref(0);

const totalIncome = localStorage.getItem('salary') ?? "0";
const totalDeduction = localStorage.getItem('Deduction') ?? "0";
const salaryAfterTax = localStorage.getItem('salaryAfterTax') ?? "0";
const totalTax = ref(Number.parseInt(totalIncome) - Number.parseInt(salaryAfterTax));


if (totalDeduction !== "0" && totalIncome !== "0" && totalTax.value !== 0) {
  message.value = 'ภาษีที่ต้องจ่าย';
}

watch(
  totalTax,
  (newTax) => {
    if (newTax === null || newTax === undefined) {
      animatedTax.value = 0;
      return;
    }

    nextTick(() => {
      const start = animatedTax.value;
      const duration = 700;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        animatedTax.value = Math.floor(start + (newTax - start) * progress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  },
  { immediate: true },
);
</script>
