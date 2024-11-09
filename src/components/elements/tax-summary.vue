<template>
  <button
    class="w-72 font-notosansthai h-72 p-4 bg-white rounded-full border-4 border-red-300 shadow-[0_0_15px_rgba(255,0,0,0.4)] flex items-center justify-center text-center transition-shadow duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]">
    <div class="text-center">
      <div class="text-red-500 font-bold text-3xl">{{ message }}</div>
      <div v-if="$totalTax !== null" class="text-red-500 font-bold text-3xl">{{ animatedTax }}฿</div>
      <p v-if="$totalDeduction !== null" class="text-sm font-normal mt-3 text-gray-400">ลดหย่อนแล้ว {{ $totalDeduction }}฿</p>
    </div>
  </button>
</template>

<script setup lang="ts">
import { totalDeduction, totalIncome, totalTax } from '@/stores';
import { useStore } from '@nanostores/vue';
import { ref, watch, nextTick } from 'vue';

const message = ref('คลิกเพื่อเริ่มการคำนวณภาษี');
const animatedTax = ref(0);

// biome-ignore lint/correctness/useHookAtTopLevel: <explanation>
const $totalIncome = useStore(totalIncome);
// biome-ignore lint/correctness/useHookAtTopLevel: <explanation>
const $totalDeduction = useStore(totalDeduction);
// biome-ignore lint/correctness/useHookAtTopLevel: <explanation>
const $totalTax = useStore(totalTax);

if ($totalDeduction.value && $totalIncome.value && $totalTax.value) {
  message.value = 'ภาษีที่ต้องจ่าย';
}

watch(
  $totalTax,
  (newTax) => {
    if (newTax === null || newTax === undefined) {
      animatedTax.value = 0; // Reset if newTax is null
      return;
    }

    nextTick(() => {
      const start = animatedTax.value; // Start from the current animatedTax value
      const duration = 700; // Duration in milliseconds
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        animatedTax.value = Math.floor(start + (newTax - start) * progress);

        if (progress < 1) {
          requestAnimationFrame(animate); // Correctly reference the animate function
        }
      };

      requestAnimationFrame(animate); // Start the animation
    });
  },
  { immediate: true },
);
</script>
