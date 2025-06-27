<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-start bg-black/30 modal"
    @click.self="closeModal"
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

      <!-- Calendar navigation -->
      <div class="flex justify-between items-center mb-4">
        <button @click="prevMonth" class="p-2">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <div class="font-semibold" style="color: #EE0033;">
          Tháng {{ currentMonth + 1 }}/{{ currentYear }}
        </div>
        <button @click="nextMonth" class="p-2">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <!-- Calendar -->
      <div class="calendar">
        <!-- Weekday headers -->
        <div class="grid grid-cols-7 text-center font-medium text-gray-500 mb-2">
          <div v-for="day in weekdays" :key="day" class="py-1">
            {{ day }}
          </div>
        </div>

        <!-- Calendar days -->
        <div class="grid grid-cols-7 gap-1">
          <div 
            v-for="(day, index) in calendarDays" 
            :key="index"
            class="text-center py-2 rounded-md cursor-pointer day-cell"
            :class="{
              'text-gray-400': !day.isCurrentMonth,
              'bg-blue-500 text-white': day.isSelected,
              'border border-blue-500': day.isToday && !day.isSelected
            }"
            @click="selectDate(day)"
          >
            {{ day.date.getDate() }}
          </div>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex justify-between mt-8" style="gap: 10px; padding: 30px 0;">
        <button 
          @click="closeModal"
          class="py-2 px-6 border border-gray-300 rounded-md col-md-6 btn"
        >
          Đóng
        </button>
        <button 
          @click="applyDate"
          class="py-2 px-6 bg-blue-500 text-white rounded-md col-md-6 btn-submit"
        >
          Áp dụng
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  isVisible: Boolean,
  modalTitle: {
    type: String,
    default: "Ngày khởi hành"
  },
  initialDate: {
    type: Date,
    default: () => new Date()
  }
});

const emit = defineEmits(["update:isVisible", "select-date"]);

// Weekday labels
const weekdays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

// Calendar state
const currentMonth = ref(props.initialDate.getMonth());
const currentYear = ref(props.initialDate.getFullYear());
const selectedDate = ref(new Date(props.initialDate));

// Generate calendar days
const calendarDays = computed(() => {
  const days = [];
  const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1);
  const lastDayOfMonth = new Date(currentYear.value, currentMonth.value + 1, 0);
  
  // Days from previous month
  const startDayIndex = firstDayOfMonth.getDay();
  const prevMonthDays = startDayIndex === 0 ? 6 : startDayIndex - 1;
  
  for (let i = prevMonthDays; i > 0; i--) {
    const date = new Date(currentYear.value, currentMonth.value, -i + 1);
    days.push({
      date,
      isCurrentMonth: false,
      isToday: false,
      isSelected: false
    });
  }

  // Current month days
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const date = new Date(currentYear.value, currentMonth.value, i);
    const isToday = isSameDate(date, new Date());
    const isSelected = isSameDate(date, selectedDate.value);
    
    days.push({
      date,
      isCurrentMonth: true,
      isToday,
      isSelected
    });
  }

  // Days from next month
  const totalCells = 42; // 6 rows x 7 days
  const remaining = totalCells - days.length;
  
  for (let i = 1; i <= remaining; i++) {
    const date = new Date(currentYear.value, currentMonth.value + 1, i);
    days.push({
      date,
      isCurrentMonth: false,
      isToday: false,
      isSelected: false
    });
  }

  return days;
});

// Navigation functions
function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
}

// Date selection
function selectDate(day) {
  if (day.isCurrentMonth) {
    selectedDate.value = new Date(day.date);
  }
}

// Apply selected date
function applyDate() {
  emit("select-date", selectedDate.value);
  closeModal();
}

// Close modal
function closeModal() {
  emit("update:isVisible", false);
}

// Helper function to compare dates
function isSameDate(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
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

.day-cell {
  transition: all 0.2s ease;
}

.day-cell:hover:not(.bg-blue-500) {
  background-color: #f0f7ff;
}

.btn, .btn-submit {
    border-radius: 50px;
    border: 1px solid #EE0033;
    padding: 10px 0;
}

.btn-submit {
    background-color: #EE0033;
}
</style>