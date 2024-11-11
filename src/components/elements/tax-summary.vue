<template>
  <div class="relative w-72 h-72 flex items-center justify-center">
    <!-- Thick Gradient Ring -->
    <div class="absolute inset-0 rounded-full bg-gradient-ring z-0 shadow-xl"></div>

    <!-- Button -->
    <button @click="navigateUserData"
      class="w-64  h-64 p-8 bg-white rounded-full shadow-xl flex items-center justify-center text-center transition-shadow duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] font-notosansthai relative z-10">

      <div class="text-center">
        <div :class="['text-blood', 'font-bold', sizeText]">
          {{ message }}</div>
        <div v-if="animatedTax >= 0 && totalDeduction" class="text-blood font-bold text-3xl relative">
          {{ animatedTax.toLocaleString() }}฿
        </div>
        <p v-if="totalDeduction !== null" class="text-sm font-normal mt-3 text-gray-400">
          ลดหย่อนแล้ว {{ totalDeduction.toLocaleString() }}฿
        </p>
      </div>
    </button>
  </div>
</template>

<style scoped>
.bg-gradient-ring {
  background: radial-gradient(circle, rgba(255, 150, 150, 0.3), rgba(139, 0, 0, 0.9));
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

const salaryAfterTax = Number.parseFloat(localStorage.getItem('salaryAfterCal') ?? '0');
const totalDeduction =
  Number.parseFloat(localStorage.getItem('Deduction') ?? '0') +
  Number.parseFloat(localStorage.getItem('TotalDeduction') ?? '0');

console.log(totalDeduction);

const sizeText = ref('text-xl');
const calculatedTax = ref(0);

const calculateTax = () => {
  let taxableIncome = Math.max(salaryAfterTax - totalDeduction, 0);
  console.log(taxableIncome);
  let tax = 0;

  if (taxableIncome > 5000000) {
    tax += (taxableIncome - 5000000) * 0.35;
    taxableIncome = 5000000;
  }
  if (taxableIncome > 2000000) {
    tax += (taxableIncome - 2000000) * 0.3;
    taxableIncome = 2000000;
  }
  if (taxableIncome > 1000000) {
    tax += (taxableIncome - 1000000) * 0.25;
    taxableIncome = 1000000;
  }
  if (taxableIncome > 750000) {
    tax += (taxableIncome - 750000) * 0.2;
    taxableIncome = 750000;
  }
  if (taxableIncome > 500000) {
    tax += (taxableIncome - 500000) * 0.15;
    taxableIncome = 500000;
  }
  if (taxableIncome > 300000) {
    tax += (taxableIncome - 300000) * 0.1;
    taxableIncome = 300000;
  }
  if (taxableIncome > 150000) {
    tax += (taxableIncome - 150000) * 0.05;
  }

  calculatedTax.value = tax;

  if (calculatedTax.value > 0) {
    message.value = 'ภาษีที่ต้องจ่าย';
    sizeText.value = 'text-3xl';
  }
};

const startTaxAnimation = () => {
  const start = animatedTax.value;
  const duration = 700;
  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    animatedTax.value = Math.floor(start + (calculatedTax.value - start) * progress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

// Watch for changes in calculated tax and animate the tax display
watch(
  calculatedTax,
  (newTax) => {
    if (newTax === null || newTax === undefined) {
      animatedTax.value = 0;
      return;
    }

    nextTick(() => {
      startTaxAnimation();
    });
  },
  { immediate: true },
);

// Trigger the tax calculation on component load
calculateTax();
</script>
