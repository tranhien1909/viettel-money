<template>
  <section class="content-detail">
    <!-- Nội dung -->
    <div class="p-4 flex-1">
      <!-- Tiêu đề + mô tả -->
      <h1 class="text-lg font-semibold">
        COMBO Hà Nội - Bangkok - Pattaya- Chợ nổi 4 mùa - Khao Chee Chan- Muang
        Boaran- Icon Siam - Bangkok- Wat Arun-wat Yannawa – Hà Nội
      </h1>
      <div
        class="flex items-center text-sm text-gray-500 mt-1 space-x-4 duration"
      >
        <div><i class="fa-solid fa-clock"></i> 3 ngày 2 đêm</div>
        <div>Còn lại: 10</div>
      </div>
      <div class="hr"></div>

      <!-- Tabs -->
      <div class="flex mt-4">
        <button
          class="w-1/2 text-center py-2 font-medium border-b-4 nav-tab bg-transparent"
          :class="
            tab === 'detail'
              ? 'text-red-500 border-red-500 active'
              : 'text-gray-500'
          "
          @click="tab = 'detail'"
        >
          Chi tiết
        </button>
        <button
          class="w-1/2 text-center py-2 font-medium border-b-4 nav-tab bg-transparent"
          :class="
            tab === 'policy'
              ? 'text-red-500 border-red-500 active'
              : 'text-gray-500'
          "
          @click="tab = 'policy'"
        >
          Chính sách
        </button>
      </div>

      <!-- Nội dung tab -->
      <div class="mt-4" v-if="tab === 'detail'">
        <h2 class="font-semibold text-base mb-2">Giới thiệu</h2>
        <p class="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Est imperdiet accumsan eget
          facilisi nisl vitae aliquam cursus. Ut aliquam tristique ultrices diam
          ipsum lectus a dolor posuere.
        </p>

        <img
          src="/img/img-gioithieu.png"
          class="rounded-lg mt-4"
          alt="ảnh minh họa"
          width="100%"
        />

        <h2 class="font-semibold text-base mt-6 mb-2">Combo bao gồm</h2>
        <div class="space-y-2 text-sm text-gray-700">
          <div class="mt-3 mb-2">
            <div><strong>Title1:</strong></div>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
          <div class="mt-3 mb-2">
            <div><strong>Title2:</strong></div>
            <span
              >Lorem ipsum dolor sit amet consectetur. Est imperdiet accumsan
              eget facilisi nisl vitae aliquam cursus. Ut aliquam tristique
              ultrices diam ipsum lectus a dolor posuere.</span
            >
          </div>
          <div class="mt-3 mb-2">
            <div><strong>Title3:</strong></div>
            <span
              >Lorem ipsum dolor sit amet consectetur. Sit ut sagittis etiam
              ipsum. Dui sodales hendrerit mauris dolor quisque diam.</span
            >
          </div>
        </div>

        <button
          class="flex items-center gap-2 px-3 py-1.5 border rounded-md bg-gray-50 border-gray-300 text-gray-400 text-sm btn-date"
        >
          <!-- Icon lịch -->
          <img src="/ic_svg/calendar.svg" alt="ic-calendar" class="w-4 h-8" />

          <!-- Ngày -->
          <span>15 / 09 / 2024</span>
        </button>
      </div>

      

      <div v-else class="mt-4 text-sm text-gray-700">
        <h2 class="font-semibold text-base mb-2">Chính sách và điều khoản</h2>
        <div class="space-y-2 text-sm text-gray-700">
          <div class="mt-3 mb-2">
            <div><strong>Title1:</strong></div>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
          <div class="mt-3 mb-2">
            <div><strong>Title2:</strong></div>
            <span
              >Lorem ipsum dolor sit amet consectetur. Est imperdiet accumsan
              eget facilisi nisl vitae aliquam cursus. Ut aliquam tristique
              ultrices diam ipsum lectus a dolor posuere.</span
            >
          </div>
          <div class="mt-3 mb-2">
            <div><strong>Title3:</strong></div>
            <div
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              quas, cumque deserunt provident ab porro consequuntur obcaecati
              aspernatur debitis culpa excepturi dolore quis beatae quibusdam
              molestias numquam reiciendis libero itaque.</div
            >
            <div
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              id consequuntur fuga odit. Quos reiciendis, tempora doloremque
              soluta sint, voluptatibus necessitatibus sequi architecto alias
              libero accusamus! Soluta delectus dicta consequuntur.</div
            >
            <div
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              id consequuntur fuga odit. Quos reiciendis, tempora doloremque
              soluta sint, voluptatibus necessitatibus sequi architecto alias
              libero accusamus! Soluta delectus dicta consequuntur.</div
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="px-4 py-3 bg-white flex items-center justify-between footer">
      <div>
        <div class="text-sm text-gray-500">
          Giá chỉ từ:
          <span class="text-decoration-line-through text-muted"
            >13,863,000₫</span
          >
        </div>

        <div
          class="text-red-600 font-bold fs-4"
          style="color: #ee0033; font-weight: 600"
        >
          1,200,000đ
          <span class="text-sm font-normal fs-6" style="color: #82869e"
            >/ Người lớn</span
          >
        </div>
      </div>
      <button
        class="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold btn-submit"
        @click="isDateModalVisible = true"
      >
        Chọn ngày khởi hành
      </button>
    </div>
  </section>

    <!-- DateSelectionModal -->
  <DateSelectionModal
    :isVisible="isDateModalVisible"
    @update:isVisible="isDateModalVisible = $event"
    @select-date="handleDateSelection"
  />
</template>

<script setup>
import { ref } from "vue";
import DateSelectionModal from "@/components/DateSelectionModal.vue";


const tab = ref("detail");

const isDateModalVisible = ref(false);
const selectedDate = ref("");

function handleDateSelection(date) {
  selectedDate.value = date;
}
</script>

<style scoped>
.duration {
  justify-content: space-between;
  display: flex;
  color: #82869e;
}

.nav-tab {
  color: #fab3c2;
}

.nav-tab.active {
  color: #ee0033;
}

.hr {
  border: none;
  border-top: 2px dashed #e4e5f0;
  margin: 2rem 0;
}

.btn-submit {
  border-radius: 50px;
  background-color: #ee0033;
}

.footer {
  box-shadow: 0 -9px 14px -4px rgba(0, 0, 0, 0.1);
}

.btn-date {
  color: #a7abc3;
  border-radius: 6px;
  background-color: #f8f8fc;
}
</style>
