<template>
  <div class="relative w-full h-[200px]">
    <Swiper
      :modules="[Navigation, Pagination]"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :pagination="{ clickable: true }"
      class="w-full h-full rounded overflow-hidden"
    >
      <SwiperSlide v-for="(img, index) in images" :key="index">
        <img :src="img" class="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>

    <!-- Nút trái -->
    <div class="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white w-6 h-6 flex items-center justify-center rounded-full cursor-pointer">
    </div>

    <!-- Nút phải -->
    <div class="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white w-6 h-6 flex items-center justify-center rounded-full cursor-pointer">
    </div>

    <!-- Đếm ảnh -->
    <div class="count-img absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
      <img src="/ic_svg/ic_picture.svg" width="20px" />
      {{ images.length }}
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.swiper-pagination-bullet {
  background-color: white;
  opacity: 0.6;
}
.swiper-pagination-bullet-active {
  background-color: #fff;
  opacity: 1;
}

.count-img {
    bottom: 30px;
    left: 50px;
    z-index: 100;
    background-color: #00000099;
    color: white;
}
</style>
