<template>
  <section class="mt-8">
    <div class="d-flex items-center mb-4 mt-4 flashsale">
      <div class="">Flash sale</div>
      <div class="">
        Kết thúc sau:
        <span class="ml-2 bg-black text-white px-2 py-1 rounded font-mono">{{
          timer.hours
        }}</span>
        :
        <span class="bg-black text-white px-2 py-1 rounded font-mono">{{
          timer.minutes
        }}</span>
        :
        <span class="bg-black text-white px-2 py-1 rounded font-mono">{{
          timer.seconds
        }}</span>
      </div>
    </div>
    <!-- Flash Sale Cards -->
    <div
      class="flash-sale-container"
    >
      <div class="flash-sale-card">
        <div class="card">
          <img
            src="/img/flashsale1.png"
            class="card-img-top"
            alt="Tour Image"
          />
          <div class="card-body">
            <h5 class="card-title">
              COMBO Hà Nội - Bangkok - Pattaya - Chợ nổi 4 mùa - Khao Chee Chan
              - Muang Boran
            </h5>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-start">
                <img
                  src="/ic_svg/calendar.svg"
                  alt="ic-calendar"
                  class="w-4 h-8"
                />
                <div class="date">15/9</div>
              </div>

              <div>
                <span
                  class="text-decoration-line-through text-muted price-origin"
                  >13,863,000₫</span
                >
                <span class="text-danger fw-bold price-sale">12,400,000₫</span>
              </div>
            </div>
            <div class="sale-remaining">
              <span class="fw-bold">Còn: 20</span>
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

      <!-- Copy this block for more cards -->
      <div class="flash-sale-card">
        <div class="card">
          <img
            src="/img/flashsale1.png"
            class="card-img-top"
            alt="Tour Image"
          />
          <div class="card-body">
            <h5 class="card-title">
              COMBO Hà Nội - Bangkok - Pattaya - Chợ nổi 4 mùa - Khao Chee Chan
              - Muang Boran
            </h5>

            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-start">
                <img
                  src="/ic_svg/calendar.svg"
                  alt="ic-calendar"
                  class="w-4 h-8"
                />
                <div class="date">15/9</div>
              </div>

              <div>
                <span
                  class="text-decoration-line-through text-muted price-origin"
                  >13,863,000₫</span
                >
                <span class="text-danger fw-bold price-sale">12,400,000₫</span>
              </div>
            </div>
            <div class="sale-remaining">
              <span
                class="fw-bold"
                style="width: 40%; background-color: #ee0033"
                >Còn: 20</span
              >
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

      <div class="flash-sale-card">
        <div class="card">
          <img
            src="/img/flashsale1.png"
            class="card-img-top"
            alt="Tour Image"
          />
          <div class="card-body">
            <h5 class="card-title">
              COMBO Hà Nội - Bangkok - Pattaya - Chợ nổi 4 mùa - Khao Chee Chan
              - Muang Boran
            </h5>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-start">
                <img
                  src="/ic_svg/calendar.svg"
                  alt="ic-calendar"
                  class="w-4 h-8"
                />
                <div class="date">15/9</div>
              </div>

              <div>
                <span
                  class="text-decoration-line-through text-muted price-origin"
                  >13,863,000₫</span
                >
                <span class="text-danger fw-bold price-sale">12,400,000₫</span>
              </div>
            </div>
            <div class="sale-remaining">
              <span class="fw-bold">Còn: 20</span>
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

const timer = ref({ hours: "15", minutes: "30", seconds: "05" });
let countdownInterval;

const startCountdown = () => {
  // In a real application, you'd calculate the remaining time from a target end date.
  // For this example, we'll just decrement from initial values.
  let totalSeconds =
    parseInt(timer.value.hours) * 3600 +
    parseInt(timer.value.minutes) * 60 +
    parseInt(timer.value.seconds);

  countdownInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      timer.value = { hours: "00", minutes: "00", seconds: "00" };
      return;
    }

    totalSeconds--;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    timer.value = {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  }, 1000);
};

onMounted(() => {
  startCountdown();
});

onUnmounted(() => {
  clearInterval(countdownInterval);
});

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
  /* overflow-x: auto; */
  overflow: hidden;
  padding-bottom: 10px;

}

.flash-sale-container:active {
  cursor: grabbing; 
}

.flash-sale-card {
  flex-shrink: 0;
  overflow: hidden;
  margin-bottom: 10px;
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
  top: 200px;
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
</style>
