<template>
  <section class="mt-4 rounded-lg shadow-md -mt-8 relative z-0 p-4 pt-0">
    <!-- Điểm đến -->
    <div
      class="bg-white mb-4 flex items-center cursor-pointer location-info"
      @click="openCitySelectionModal('destination')"
    >
      <div class="me-3">
        <img src="/ic_svg/location.svg" alt="ic-location" class="w-4 h-8" />
      </div>
      <div>
        <label for="">Điểm đến</label>
        <input
          type="text"
          placeholder="Chọn điểm đến"
          class="flex-grow outline-none text-gray-700 placeholder-gray-400 cursor-pointer"
          readonly
          :value="selectedDestinationCity"
        />
      </div>
    </div>

    <!-- Điểm đi -->
    <div
      class="bg-white mb-4 flex items-center cursor-pointer location-info"
      @click="openCitySelectionModal('departure')"
    >
      <div class="me-3">
        <img src="/ic_svg/location.svg" alt="ic-location" class="w-4 h-8" />
      </div>
      <div>
        <label for="">Điểm đi</label>
        <input
          type="text"
          placeholder="Chọn điểm đi"
          class="flex-grow outline-none text-gray-700 placeholder-gray-400 cursor-pointer"
          readonly
          :value="selectedDepartureCity"
        />
      </div>
    </div>
    <div
      class="bg-white mb-6 flex items-center location-info"
      @click="isDateModalVisible = true"
    >
      <div class="me-3">
        <img src="/ic_svg/calendar.svg" alt="ic-calendar" class="w-4 h-8" />
      </div>
      <div>
        <label for="">Ngày khởi hành</label>
        <input
          type="text"
          placeholder="Chọn ngày khởi hành"
          class="flex-grow outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
    <router-link to="/search-result">
      <button class="mt-3 text-white py-3 rounded-lg btn-search">
        Tìm kiếm
      </button>
    </router-link>
  </section>

  <!-- CitySelectionModal -->
  <CitySelectionModal
    :isVisible="isCitySelectionModalVisible"
    :modalTitle="modalTitle"
    :cities="cities"
    @update:isVisible="isCitySelectionModalVisible = $event"
    @select-city="selectCity"
  />

  <!-- DateSelectionModal -->
  <DateSelectionModal
    :isVisible="isDateModalVisible"
    @update:isVisible="isDateModalVisible = $event"
    @select-date="handleDateSelection"
  />
</template>

<script setup>
import { ref } from "vue";
import CitySelectionModal from "@/components/CitySelectionModal.vue";
import DateSelectionModal from "@/components/DateSelectionModal.vue";

const cities = [
  "Hà Nội",
  "Hồ Chí Minh",
  "Đà Nẵng",
  "Hải Dương",
  "Hải Phòng",
  "Nam Định",
  "An Giang",
  "Bạc Liêu",
  "Bắc Ninh",
  "Bắc Kạn",
  "Cần Thơ",
]; // Danh sách thành phố

const selectedDepartureCity = ref("");
const selectedDestinationCity = ref("");
const isCitySelectionModalVisible = ref(false);
const modalTitle = ref("Chọn điểm đi");

function openCitySelectionModal(type) {
  modalTitle.value = type === "departure" ? "Chọn điểm đi" : "Chọn điểm đến";
  isCitySelectionModalVisible.value = true;
}

function selectCity(city) {
  if (modalTitle.value === "Chọn điểm đi") {
    selectedDepartureCity.value = city;
  } else {
    selectedDestinationCity.value = city;
  }
}

const isDateModalVisible = ref(false);
const selectedDate = ref("");

function handleDateSelection(date) {
  selectedDate.value = date;
}
</script>

<style scoped>
.location-info {
  padding: 18px;
  border-radius: 10px;
  border: 1px solid #e4e5f0;
  display: flex;
}

.location-info label {
  display: block;
  font-size: 12px;
  font-weight: 500;
}

input {
  color: #a7abc3;
}

.btn-search {
  background-color: #ee0033;
  border-radius: 50px;
  width: 100%;
}

.h-8 {
  height: 32px;
}

button {
  width: 100%;
}

label {
  text-align: start;
}

.modal {
  width: 800px;
}
</style>
