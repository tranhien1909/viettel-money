<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-start bg-black/30 modal"
    @click.self="close"
  >
    <div class="bg-white w-full rounded-t-2xl p-4 max-h-[90vh] overflow-y-auto">
      <!-- Handle bar -->
      <div class="flex justify-center mb-2">
        <div class="w-10 h-1.5 bg-gray-300 rounded-full"></div>
      </div>

      <!-- Header -->
      <div class="flex justify-between items-center mb-3 block">
        <h2 class="text-lg font-semibold">Bộ lọc</h2>
        <button @click="closeModal" class="btn-close-modal">
          <i class="fa-solid fa-circle-xmark"></i>
        </button>
      </div>

      <!-- Sort section -->
      <div class="mb-6 block">
        <h3 class="font-semibold mb-3">Sắp xếp</h3>
        <div class="space-y-2 sort-price">
          <label
            v-for="option in sortOptions"
            :key="option"
            class="flex items-center py-2 px-3 rounded-lg border cursor-pointer option-price"
            :class="{ active: selectedSort === option }"
          >
            <!-- Hidden radio -->
            <input
              type="radio"
              name="sort"
              :value="option"
              v-model="selectedSort"
              class="sr-only"
            />

            <!-- Custom radio style (optional icon or circle) -->
            <div
              class="w-4 h-4 mr-3 rounded-full border border-gray-400 flex items-center justify-center"
              :class="{ 'border-blue-500': selectedSort === option }"
            >
              <div
                v-if="selectedSort === option"
                class="w-2 h-2 bg-blue-500 rounded-full"
              ></div>
            </div>

            <span>{{ option }}</span>
          </label>
        </div>
      </div>

      <!-- Time section -->
      <div class="mb-6 block">
        <div class="flex justify-between items-center">
          <h3 class="font-semibold mb-3">Thời gian</h3>
          <label
            class="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              v-model="allTimesSelected"
              class="accent-red-500 h-4 w-4"
            />
            <span class="text-sm">Tất cả</span>

          </label>
        </div>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="time in timeOptions"
            :key="time"
            class="px-4 py-2 border rounded-full option-time"
            :class="{
              'active': isSelected(time),
            }"
            @click="toggleTime(time)"
          >
            {{ time }}
          </button>
        </div>
      </div>

<!-- Price range -->
<div class="mb-6 mt-5">
  <div class="flex justify-between items-center mb-3">
    <h3 class="font-semibold">Mức giá</h3>
    <label class="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        v-model="isAllPrice"
        class="accent-red-500 h-4 w-4"
      />
      <span class="text-sm">Tất cả</span>
    </label>
  </div>

  <div class="px-2" v-if="!isAllPrice">
    <div class="flex justify-between mb-3">
      <span class="text-xs text-gray-500 span-price">0 đ</span>
      <span class="text-sm span-price">{{ formattedPrice }}</span>
    </div>
    <input
      type="range"
      min="0"
      max="20000000"
      step="100000"
      v-model="priceRange"
      class="w-full h-1 bg-gray-200 rounded-lg cursor-pointer"
    />
  </div>
</div>

      <!-- Places section -->
      <div class="mb-8 mt-5">
        <h3 class="font-semibold mb-3">Địa điểm tham quan</h3>

        <div class="space-y-2">
          <label
            class="flex justify-between py-2 px-3 rounded-lg border-gray-200"
          >
            <span>Tất cả</span>

            <input
              type="checkbox"
              v-model="allPlacesSelected"
              class="mr-3 h-4 w-4 text-blue-600"
            />
          </label>
          <label
            v-for="place in places"
            :key="place"
            class="flex justify-between py-2 px-3 rounded-lg border-gray-200"
          >
            <span>{{ place }}</span>

            <input
              type="checkbox"
              :value="place"
              v-model="selectedPlaces"
              class="mr-3 h-4 w-4 text-blue-600"
            />
          </label>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex gap-4 sticky bottom-0 bg-white pt-4 pb-2">
        <button
          @click="resetFilters"
          class="flex-1 py-3 border border-gray-300 rounded-lg btn"
        >
          Đặt lại
        </button>
        <button
          @click="applyFilters"
          class="flex-1 py-3 bg-blue-500 text-white rounded-lg btn-submit"
        >
          Áp dụng
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  isVisible: Boolean,
});

const emit = defineEmits(["update:isVisible", "apply-filters"]);

// Sort options
const sortOptions = ["Ngày khởi hành gần nhất", "Giá tăng dần", "Giá giảm dần"];
const selectedSort = ref(sortOptions[0]);

// Time options
const timeOptions = ["5 ngày", "10 ngày"];
const selectedTimes = ref([]);
const allTimesSelected = ref(false);

watch(allTimesSelected, (newVal) => {
  selectedTimes.value = newVal ? [...timeOptions] : [];
});

const isSelected = (time) => selectedTimes.value.includes(time)

const toggleTime = (time) => {
  if (selectedTimes.value.includes(time)) {
    selectedTimes.value = selectedTimes.value.filter(t => t !== time)
  } else {
    selectedTimes.value.push(time)
  }

  // Cập nhật trạng thái checkbox "Tất cả"
  allTimesSelected.value = selectedTimes.value.length === timeOptions.length
}

// Price range
const isAllPrice = ref(true); // khi true: ẩn thanh kéo

const priceRange = ref(0);
const formattedPrice = computed(() => {
  if (priceRange.value === 0) return "20.000.000 đ";
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(priceRange.value);
});

// Places
const places = [
  "Làng gốm Bát Tràng",
  "Văn miếu Quốc Tử Giám",
  "Sông Hồng",
  "Khao Chee Chan",
  "Chee Khao Chan",
];
const selectedPlaces = ref([]);
const allPlacesSelected = ref(false);

// Watch for "Tất cả" checkbox
watch(allPlacesSelected, (value) => {
  if (value) {
    selectedPlaces.value = [...places];
  } else {
    selectedPlaces.value = [];
  }
});

// Watch for individual place selections
watch(selectedPlaces, (newValue) => {
  allPlacesSelected.value = newValue.length === places.length;
});

// Reset all filters
function resetFilters() {
  selectedSort.value = sortOptions[0];

  // Reset thời gian
  selectedTimes.value = [];
  allTimesSelected.value = false;

  // Reset giá
  priceRange.value = 0;
  isAllPrice.value = false;

  // Reset địa điểm
  selectedPlaces.value = [];
  allPlacesSelected.value = false;
}

// Apply filters and close
function applyFilters() {
  emit("apply-filters", {
    sort: selectedSort.value,
    time: [...selectedTimes.value],
    price: isAllPrice.value ? 0 : priceRange.value,
    places: [...selectedPlaces.value],
  });
  closeModal();
}

function closeModal() {
  emit("update:isVisible", false);
}
</script>

<style scoped>
.modal {
  color: black;
  width: 800px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  height: 100vh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 1)

}

input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ee0033;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ee0033;
  cursor: pointer;
  border: none;
}

.btn,
.btn-submit,
.option-price {
  border-radius: 50px;
  border: 1px solid #ee0033;
  padding: 10px 0;
}

.option-price, .option-time {
  background-color: #f5f5f5;
  color: #82869e;
  border: none;
}

.btn-submit,
.active {
  background-color: #ee0033;
  color: white;
}

.sort-price {
  display: flex;
  gap: 10px;
}

.block {
  padding: 20px 0;
  border-bottom: 0.1px solid #b7b7b7;
}

.span-price {
  display: block;
    background: #F4F4F4;
    padding: 5px 20px;
    color: #82869E;
}
</style>
