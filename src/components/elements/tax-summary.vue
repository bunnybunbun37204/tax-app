<template>
  <button class="w-72 font-notosansthai h-72 bg-white text-red-500 font-medium rounded-full border-4 border-red-300 shadow-[0_0_15px_rgba(255,0,0,0.4)] flex items-center justify-center text-center transition-shadow duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]">
    คลิกเพื่อเริ่มการคำนวณภาษี
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TaxButton',
});
</script>
