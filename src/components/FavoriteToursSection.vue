<template>
  <section class="mt-8 p-4 pt-0">
    <div class="d-flex items-center mb-4 mt-4 flashsale">
            <router-link to="/search-result" class="no-underline flashsale-head">
            <div class="">Combo yêu thích</div>

    </router-link>
    </div>
    <!-- Combo Cards -->
    <div
      class="flash-sale-container"
      ref="flashSaleContainer"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
    >
        <router-link to="/search-day" class="text-decoration-none">
      <div class="flash-sale-card">
        <div class="card">
          <img
            src="/img/combo1.png"
            class="card-img-top"
            alt="Tour Image"
          />
          <div class="card-body">
            <h5 class="card-title">
              COMBO Hà Nội - Bangkok - Pattaya - Chợ nổi 4 mùa - Khao Chee Chan
              - Muang Boran
            </h5>
            <div class="d-flex justify-content-between align-items-center">
              <div>Còn lại: 10</div>
              <span
                  class="text-decoration-line-through text-muted price-origin"
                  >13,863,000₫</span
                >
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-start">
                <img
                  src="/ic_svg/calendar.svg"
                  alt="ic-calendar"
                  class="w-4 h-8"
                />
                <div class="date">15/9</div>
                <div class="date">25/9</div>
                <div class="date">30/9</div>
              </div>

              <div>
                <span class="text-danger fw-bold price-sale">12,400,000₫</span>
              </div>
            </div>
            <div class="icon-flashsale">
              <div><img src="/ic_svg/ic_Vemaybay.svg" alt="" /></div>
              <div><img src="/ic_svg/ic_Vemaybay (1).svg" alt="" /></div>
              <div><img src="/ic_svg/ic_Vemaybay (2).svg" alt="" /></div>
              <div><img src="/ic_svg/ic_Vemaybay (3).svg" alt="" /></div>
            </div>
            <div class="discount">- 40%</div>
            <span class="duration">
              <img
                src="/ic_svg/icon time.svg"
                alt=""
                class="icon-duration"
              /><span>3N2Đ</span>
            </span>
          </div>
        </div>
      </div>
    </router-link>


      <!-- Copy this block for more cards -->
        <router-link to="/search-day" class="text-decoration-none">
      <div class="flash-sale-card">
        <div class="card">
          <img
            src="/img/combo1.png"
            class="card-img-top"
            alt="Tour Image"
          />
          <div class="card-body">
            <h5 class="card-title">
              COMBO Hà Nội - Bangkok - Pattaya - Chợ nổi 4 mùa - Khao Chee Chan
              - Muang Boran
            </h5>
            <div class="d-flex justify-content-between align-items-center">
              <div>Còn lại: 10</div>
              <span
                  class="text-decoration-line-through text-muted price-origin"
                  >13,863,000₫</span
                >
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-start">
                <img
                  src="/ic_svg/calendar.svg"
                  alt="ic-calendar"
                  class="w-4 h-8"
                />
                <div class="date">15/9</div>
                <div class="date">25/9</div>
                <div class="date">30/9</div>
              </div>

              <div>
                <span class="text-danger fw-bold price-sale">12,400,000₫</span>
              </div>
            </div>
            <div class="icon-flashsale">
              <div><img src="/ic_svg/ic_Vemaybay.svg" alt="" /></div>
              <div><img src="/ic_svg/ic_Vemaybay (1).svg" alt="" /></div>
              <div><img src="/ic_svg/ic_Vemaybay (2).svg" alt="" /></div>
              <div><img src="/ic_svg/ic_Vemaybay (3).svg" alt="" /></div>
            </div>
            <div class="discount">- 40%</div>
            <span class="duration">
              <img
                src="/ic_svg/icon time.svg"
                alt=""
                class="icon-duration"
              /><span>3N2Đ</span>
            </span>
          </div>
        </div>
      </div>
    </router-link>

        <router-link to="/search-day" class="text-decoration-none">
      <div class="flash-sale-card">
        <div class="card">
          <img
            src="/img/combo1.png"
            class="card-img-top"
            alt="Tour Image"
          />
          <div class="card-body">
            <h5 class="card-title">
              COMBO Hà Nội - Bangkok - Pattaya - Chợ nổi 4 mùa - Khao Chee Chan
              - Muang Boran
            </h5>
            <div class="d-flex justify-content-between align-items-center">
              <div>Còn lại: 10</div>
              <span
                  class="text-decoration-line-through text-muted price-origin"
                  >13,863,000₫</span
                >
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-start">
                <img
                  src="/ic_svg/calendar.svg"
                  alt="ic-calendar"
                  class="w-4 h-8"
                />
                <div class="date">15/9</div>
                <div class="date">25/9</div>
                <div class="date">30/9</div>
              </div>

              <div>
                <span class="text-danger fw-bold price-sale">12,400,000₫</span>
              </div>
            </div>
            <div class="icon-flashsale">
              <div><img src="/ic_svg/ic_Vemaybay.svg" alt="" /></div>
              <div><img src="/ic_svg/ic_Vemaybay (1).svg" alt="" /></div>
              <div><img src="/ic_svg/ic_Vemaybay (2).svg" alt="" /></div>
              <div><img src="/ic_svg/ic_Vemaybay (3).svg" alt="" /></div>
            </div>
            <div class="discount">- 40%</div>
            <span class="duration">
              <img
                src="/ic_svg/icon time.svg"
                alt=""
                class="icon-duration"
              /><span>3N2Đ</span>
            </span>
          </div>
        </div>
      </div>
    </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const flashSaleTours = ref([
  {
    id: 1,
    image: "/img/flashsale1.png",
    discount: 40,
    duration: "3N2Đ",
    title:
      "Tour Hà Nội - Bangkok - Pattaya - Chợ nổi 4 mùa - Khao Chee Chan - Muang Boaran",
    oldPrice: 13863000,
    newPrice: 12400000,
    remaining: null,
    availableDates: ["15/9"],
  },
  // {
  //   id: 2,
  //   image: "/img/flashsale2.png",
  //   discount: null,
  //   duration: "3N2Đ",
  //   title:
  //     "Tour Hà Nội - Bangkok - Pattaya - Chợ nổi 4 mùa - Khao Chee Chan - Muang Boaran",
  //   oldPrice: 13863000,
  //   newPrice: 12400000,
  //   remaining: null,
  //   availableDates: ["15/9"],
  // },
  // Add more tour data as needed
]);

// kéo chuột để xem sản phẩm
const flashSaleContainer = ref(null)

let isDragging = false
let startX = 0
let scrollLeft = 0

const startDrag = (event) => {
  isDragging = true
  startX = event.pageX - flashSaleContainer.value.offsetLeft
  scrollLeft = flashSaleContainer.value.scrollLeft
}

const onDrag = (event) => {
  if (!isDragging) return
  event.preventDefault()
  const x = event.pageX - flashSaleContainer.value.offsetLeft
  const walk = (x - startX) * 3 // Adjust speed of scroll
  flashSaleContainer.value.scrollLeft = scrollLeft - walk
}

const endDrag = () => {
  isDragging = false
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.flashsale {
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
}

.card-img-top {
  width: 100%;
  object-fit: cover;
}

.flash-sale-container {
  display: flex;
  /* overflow-x: auto; */
  overflow: hidden;
    cursor: grab;
  gap: 0.5rem;
  padding-bottom: 10px;
}

.flash-sale-container:active {
  cursor: grabbing; 
}

.flash-sale-card {
  flex-shrink: 0;
  width: 500px;
  overflow: hidden;
  border-radius: 10px;
}

.card {
  width: 100%;
  border: 1px solid transparent;
}

.icon-flashsale {
  display: flex;
  gap: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
}

.icon-flashsale img {
  width: 2rem;
  cursor: pointer;
  position: relative;
}

.discount {
  width: 80px;
  height: 50px;
  border-radius: 50%;
  background-color: #ee0033;
  color: white;
  position: absolute;
  top: -11px;
  right: -11px;
  padding: 20px 0 0 20px;
  font-weight: 600;
  font-size: 11px;
}

.duration {
  position: absolute;
  top: 110px;
  left: 10px;
  background-color: white;
  color: #3a9efc;
  padding: 5px 10px;
  border-radius: 10px;
}

.icon-duration {
  height: 16px;
  width: 16px;
  margin-bottom: 4px;
  margin-right: 5px;
}

.date {
  background-color: #ee00331a;
  color: #ee0033;
  border-radius: 5px;
  margin-left: 5px;
  cursor: pointer;
}

.date:hover, 
.date.active {
  background-color: #EE0033;
}

.price-origin {
  font-size: 14px;
  font-weight: 400;
  margin-right: 5px;
}

.price-sale {
  font-size: 18px;
  font-weight: 600;
}

.sale-remaining {
  background-color: #ee00331a;
  color: white;
  border-radius: 10px;
  font-size: 14px;
  margin-top: 10px;
  justify-items: end;
}

.sale-remaining span {
  width: 40%;
  display: block;
  background-color: #ee0033;
  border-radius: 10px;
  align-content: end;
  text-align: right;
  padding-right: 10px;
}

.flashsale-head {
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 20px;
}
</style>
