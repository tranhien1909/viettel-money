<!-- <template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden min-w-[280px] max-w-[300px] flex-shrink-0 mr-4">
    <div class="">
      <img :src="tour.image" :alt="tour.title" class="w-full h-32 object-cover">
      <span v-if="tour.discount" class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        -{{ tour.discount }}%
      </span>
      <span class="absolute bottom-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
        {{ tour.duration }}
      </span>
    </div>
    <div class="p-3">
      <div class="font-semibold text-sm mb-1 line-clamp-2">{{ tour.title }}</div>
      <div class="flex items-center text-yellow-500 text-xs mb-2">
        <span class="mr-1">★★★★★</span> (5)
      </div>
      <div class="flex items-center mb-2">
        <span class="text-gray-500 text-xs line-through mr-2">{{ formatCurrency(tour.oldPrice) }}</span>
        <span class="text-red-500 font-bold">{{ formatCurrency(tour.newPrice) }}</span>
      </div>
      <div v-if="tour.remaining" class="text-xs text-gray-600 mb-2">
        Còn lại: {{ tour.remaining }}
      </div>
      <div class="flex flex-wrap gap-2 text-xs">
        <span v-for="date in tour.availableDates" :key="date" class="bg-gray-100 text-gray-700 px-2 py-1 rounded">
          {{ date }}
        </span>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div class="flash-sale-card">
    <div class="card-image-wrapper">
      <img :src="imageUrl" alt="Travel Destination" class="card-image" />
      <div class="overlay-icons">
        <span class="icon">+</span>
        <span class="icon">🛏️</span>
        <span class="icon">💎</span>
        <span class="icon">🚗</span>
      </div>
      <div class="duration-tag">{{ duration }}</div>
      <div class="discount-tag">-{{ discountPercentage }}%</div>
    </div>

    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-details">
        <p class="remaining-items">Còn lại: {{ remainingItems }}</p>
        <div class="prices">
          <span class="original-price">{{ formatPrice(originalPrice) }}₫</span>
          <span class="flash-sale-price"
            >{{ formatPrice(flashSalePrice) }}₫</span
          >
        </div>
      </div>
      <div class="available-dates">
        <span class="calendar-icon">🗓️</span>
        <div class="date-pills">
          <span v-for="date in dates" :key="date" class="date-pill">{{
            date
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  tour: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};
</script>

<style scoped>
  .flash-sale-card {
    font-family: Arial, sans-serif;
    width: 350px; /* Adjust as needed */
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin: 20px;
  }

  .card-image-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 60%; /* Aspect ratio (e.g., 60% of width for height) */
    background-color: #eee; /* Fallback */
  }

  .card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay-icons {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    gap: 8px;
    z-index: 10;
  }

  .icon {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #333;
  }

  .duration-tag {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: #1a73e8; /* Blue color */
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    z-index: 10;
  }

  .discount-tag {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #ff0000; /* Red */
    color: white;
    padding: 8px 12px;
    border-bottom-left-radius: 10px;
    font-weight: bold;
    font-size: 16px;
    z-index: 10;
  }

  .card-content {
    padding: 15px;
  }

  .card-title {
    font-size: 18px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 10px;
    color: #333;
    line-height: 1.4;
    height: 50px; /* Limit height to prevent excessive title length */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 15px;
  }

  .remaining-items {
    font-size: 14px;
    color: #777;
    margin: 0;
  }

  .prices {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .original-price {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
  }

  .flash-sale-price {
    font-size: 24px;
    font-weight: bold;
    color: #ff0000; /* Red */
  }

  .available-dates {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .calendar-icon {
    font-size: 20px;
    color: #555;
  }

  .date-pills {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .date-pill {
    background-color: #ffe6e6; /* Light red */
    color: #ff0000; /* Red */
    padding: 4px 10px;
    border-radius: 15px;
    font-size: 13px;
    font-weight: bold;
  }
</style>
