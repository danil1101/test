<template>
  <header class="w-full px-[10%] flex items-center bg-white py-[10px] drop-shadow-md z-10">
    <img src="/logo.png" alt="Logo" width="84" height="56" class="w-[40px] lg:w-[84px]">
    <div class="flex items-center gap-3 ml-auto">
      <div
          class="duration-100 absolute lg:static lg:w-auto w-full lg:h-auto h-[100vh] bg-white flex lg:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 lg:p0 py-5 y-  flex-col lg:flex-row"
          :class="{'left-[0%]':isActive}"
      >
        <ul class="flex lg:flex-row flex-col lg:items-center lg:gap-[2vw] gap-8 text-[#505050]">
          <li class="relative max-w-fit pr-3 lg:pr-0 py-1 after:bg-gradient-to-r  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            <a href="#">О нас</a></li>
          <li class="relative max-w-fit pr-3 lg:pr-0 py-1 after:bg-gradient-to-r  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            <a href="#">Наша цель</a></li>
          <li class="relative max-w-fit pr-3 lg:pr-0 py-1 after:bg-gradient-to-r  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            <a href="#">Экосистема продуктов</a></li>
          <li class="relative max-w-fit pr-3 lg:pr-0 py-1 after:bg-gradient-to-r  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            <a href="#">Контакты</a></li>
        </ul>
        <button class="text-white bg-[#5BA8A0] px-[10px] py-[10px] font-light lg:hidden mt-2">
          ЗАПРОСИТЬ ДЕМОНСТРАЦИЮ
        </button>
      </div>
      <div class="flex items-center gap-2">
        <button class="ml-[30px] text-white bg-[#5BA8A0] px-[10px] py-[10px] font-light hidden lg:block">
          ЗАПРОСИТЬ ДЕМОНСТРАЦИЮ
        </button>
        <button class="text-[30px] cursor-pointer lg:hidden" @click="toggle">
          <svg
              v-if="!isActive"
              xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path d="M20 7L4 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M20 12L4 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M20 17L4 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
          </svg>

          <svg
              v-else
              xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path
                d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                fill="#0F0F0F"/>
          </svg>
        </button>
      </div>
    </div>

  </header>
</template>
<script setup lang="ts">
import {ref} from 'vue';

const isActive = ref(false);

const toggle = () => {
  const swiper = document.getElementsByClassName('swiper')
  isActive.value = !isActive.value;

  if (isActive.value) {
    document.body.style.overflow = "hidden";
    for (const swiperElement of swiper) {
      swiperElement.style.zIndex = "-1";
    }
  } else {
    document.body.removeAttribute("style")
    for (const swiperElement of swiper) {
      swiperElement.removeAttribute("style")
    }
  }

};
</script>
