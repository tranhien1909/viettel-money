<template>
  <div class="">
    <header
      class="bg-red-500 text-white p-4 flex items-center justify-between relative z-10"
    >
      <div class="flex justify-center space-x-4 nav">
        <button class="back">
          <img
            src="/ic_svg/chevron-left.svg"
            alt="Back"
            class="w-10 h-6"
          />
        </button>
        <div class="nav-tab">
          <button
            :class="{ 'tab-active': activeTab === 'combo' }"
            @click="activeTab = 'combo'"
            class="py-2 px-4 rounded-full text-sm font-semibold"
          >
            Combo tiết kiệm
          </button>
          <button
            :class="{ 'tab-active': activeTab === 'package' }"
            @click="activeTab = 'package'"
            class="py-2 px-4 rounded-full text-sm font-semibold"
          >
            Tour trọn gói
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("combo");
</script>

<style scoped>
header {
  background-color: #ee0033;
}

button {
  background-color: #f34c70;
  border-radius: 10px;
  color: white;
}

.nav-tab {
  background-color: #f34c70;
  border-radius: 10px;
  display: flex;
  justify-content: center;  
  align-items: center;     
  position: absolute;
 left: 50%;
  transform: translateX(-50%); 
}

.tab-active {
  background-color: white;
  color: black;
}

.nav {
  display: flex;
  justify-content: space-between;  
  align-items: center;            
  width: 100%;                
  position: relative;    
}

.back {
  background-color: #ee0033;
  padding: 8px;
  z-index: 10;
}

.h-6 {
  height: 24px;
}
</style>
