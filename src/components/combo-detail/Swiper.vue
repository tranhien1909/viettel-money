<template>
  <swiper
    :pagination="true"
    :navigation="true"
    class="w-full h-[200px]"
  >
    <swiper-slide v-for="(img, index) in images" :key="index">
      <img :src="img" class="w-full h-[200px] object-cover" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/img/image-detail.png',
  '/img/image-detail.png',
  '/img/image-detail.png'
];
</script>
