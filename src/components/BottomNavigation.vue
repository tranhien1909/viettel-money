<template>
  <section
    class="mt-4 p-4 items-center rounded-lg bg-white d-flex footer">
    <button class="items-center text-red-500 bg-white active">
      <i class="fa-solid fa-house"></i>
      <div class="text-xs mt-1">Trang chủ</div>
    </button>
    <button class="items-center text-gray-500 bg-white">
      <i class="fa-solid fa-ticket"></i>
      <div class="text-xs mt-1">Vé của tôi</div>
    </button>
    <button class="items-center text-gray-500 bg-white">
      <i class="fa-solid fa-comment"></i>
      <div class="text-xs mt-1">Hỗ trợ</div>
    </button>
  </section>
</template>

<script setup></script>

<style scoped>
.footer {
  border-radius: 50px;
  justify-content: space-around;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 24px;
}

.footer button {
  color: #A7ABC3;
}

.footer button:hover,
.footer button.active {
  color: #EE0033;
}
</style>
