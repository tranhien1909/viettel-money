<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-start bg-black/30 modal"
  >
    <div
      class="bg-white w-full rounded-t-2xl p-4 max-h-[90vh] overflow-y-auto modal-container"
    >
      <!-- Handle bar -->
      <div class="flex justify-center mb-2">
        <div class="w-10 h-1.5 bg-gray-300 rounded-full"></div>
      </div>

      <!-- Header -->
      <div class="flex justify-between items-center mb-3">
        <h2 class="text-lg font-semibold">{{ modalTitle }}</h2>
        <button @click="closeModal" class="btn-close-modal">
          <i class="fa-solid fa-circle-xmark"></i>
        </button>
      </div>

      <!-- Search box -->
      <div class="mb-4">
        <input
          v-model="search"
          type="text"
          placeholder="Tìm kiếm"
          class="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <!-- Danh sách tỉnh/thành phố -->
      <div>
        <p class="text-gray-500 font-medium mb-2 head-list">Tỉnh/Thành phố</p>
        <ul class="list-none p-0 m-0">
          <li
            v-for="city in filteredCities"
            :key="city"
            class="py-2 px-1 mt-1 hover:bg-gray-50 cursor-pointer"
            @click="selectCity(city)"
          >
            {{ city }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  isVisible: Boolean,
  modalTitle: String,  // Nhận tiêu đề từ parent
  cities: Array,       // Nhận danh sách các thành phố từ parent
});

const emit = defineEmits(["update:isVisible", "select-city"]);

const search = ref("");
const filteredCities = computed(() => {
  return props.cities.filter((city) =>
    city.toLowerCase().includes(search.value.toLowerCase())
  );
});

function selectCity(city) {
  emit("select-city", city); // Emit giá trị thành phố được chọn
  emit("update:isVisible", false); // Đóng modal
}

function closeModal() {
  emit("update:isVisible", false);
}
</script>

<style scoped>
.modal {
  width: 800px;
  margin: 0 auto;
    position: absolute;
  left: 50%;
  transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.45);
  z-index: 1;
}

.modal-container {
  border-radius: 30px 30px 0 0;
  margin-top: 215px;
  height: 110vh;
  background-color: white;
  z-index: 2;

}

.btn-close-modal {
  background-color: white;
  color: #f0f0f0;
  font-size: 30px;
}

.head-list {
  padding: 12px 0;
    border-bottom: 0.1px solid #b7b7b7;
}

</style>
