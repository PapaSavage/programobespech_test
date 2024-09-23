<template>
  <div class="flex flex-row">
    <div class="hidden w-[256px] bg-primary_dark sticky top-0 left-0 h-screen sm:flex flex-col justify-between">
      <div>
        <div class="mt-[30px] ml-[56px] mr-[76px] mb-[103px] text-white text-[24px] leading-[24px]"
          style="font-family: DMSans-Bold">
          Demo Test
        </div>
        <div class="flex flex-col gap-[16px]">
          <button class="py-[12px] px-[30px] flex flex-row gap-[20px] items-center text-white/45">
            <img src="/img/profileicon.svg" alt="">
            <div>Profile</div>
          </button>
          <button
            class="py-[12px] px-[30px] flex flex-row gap-[20px] items-center bg-white/20 text-white border-l-2 border-primary_red">
            <img src="/img/vechicles.svg" alt="">

            <div>Vechicles</div>
          </button>
          <button class="py-[12px] px-[30px] flex flex-row gap-[20px] items-center text-white/45">
            <img src="/img/setting.svg" alt="">

            <div>Setting</div>
          </button>
        </div>
      </div>
      <img src="/img/vectors.svg" alt="">
    </div>
    <div class="grow">
      <div class="py-[30px] px-[30px] border-b border-primary_gray">
        <div class="flex flex-row justify-between">
          <div class="flex flex-row justify-start items-center gap-[18px]">
            <h1>Vechicles</h1>
            <button class="badge_primary animate__animated animate__fadeIn">{{ total }}</button>
          </div>
          <div class="flex flex-row">
            <button class="btn_outlined_icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z"
                  fill="#E86E84" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                  fill="#E86E84" />
              </svg>
            </button>
            <div class="ml-[36px] flex flex-row items-center">
              <img src="/img/profile.svg" alt="" />
              <div class="user">John Doe</div>
              <img src="/img/en.svg" alt="" />
              <div class="text-font_black ml-[14px] mr-[3px]">
                En
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 10L12 14L8 10" stroke="#293148" stroke-opacity="0.6" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-[30px] mt-[36px] mb-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-[30px]">
          <div class="search-container col-span-1">
            <input type="text" v-model="searchVin" placeholder="Search VIN" class="input_with_icon w-full" />
            <span class="icon"></span>
          </div>
          <div class="flex flex-row items-center gap-2">
            <div>Select vehicles per page:</div>
            <select class="" v-model="perpage" id="">
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </div>
          <div class="col-span-2 sm:col-span-1 flex flex-col  sm:items-end justify-center ">
            <button class="btn_solid_min">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z"
                  fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                  fill="white" />
              </svg>
              <div>Add vechicle</div>
            </button>
          </div>
        </div>
        <Card v-for="car in targetcars.slice(0, perpage)" :car="car" />
      </div>
      <div class="mx-[30px] mb-[45px] flex flex-row justify-between items-center">
        <div>Showing {{ targetcars.slice(0, perpage).length }} out of {{ total }}</div>
        <div class="flex flex-row gap-[12px] items-center">
          <button @click="pageminus()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 16L10 12L14 8" stroke="#293148" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
          <input class="input_pages" type="text" placeholder="1" v-model="page" />
          <div>of</div>
          <input class="input_pages" disabled type="text" placeholder="28" v-model="totalpages" />
          <button @click="pageplus()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 16L14 12L10 8" stroke="#293148" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const page = ref(1);
const perpage = ref(9);
const searchVin = ref("");
const allcars = ref([]);
const targetcars = ref([]);

const filteredCars = ref([])

const total = ref();

const totalpages = ref(1);

await getAllCars();

watch(page, () => {
  updateVisibleCars();
});

watch(perpage, () => {
  updateVisibleCars();
  updateTotalPages();
});

watch(searchVin, async () => {
  await filterCars();
});

function updateVisibleCars() {
  const start = (page.value - 1) * perpage.value;
  const end = start + perpage.value;
  if (filteredCars.value.length == 0) {
    targetcars.value = allcars.value.slice(start, end);
  }
  else {
    targetcars.value = filteredCars.value.slice(start, end);
  }
}

function updateTotalPages() {
  totalpages.value = Math.ceil(filteredCars.value.length / perpage.value);
}

async function filterCars() {
  if (!searchVin.value) {
    filteredCars.value = allcars.value;
    await getAllCars();
  } else {
    const searchVinLower = searchVin.value.toLowerCase();
    filteredCars.value = allcars.value.filter((car) =>
      car.vin.toLowerCase().includes(searchVinLower)
    );

    if (filteredCars.value.length === 0) {
      targetcars.value = [];
    } else {
      targetcars.value = filteredCars.value.map((car) => {
        car.vehicle_name =
          car.vehicle_name == null || car.vehicle_name === "undefined undefined"
            ? "Noname"
            : car.vehicle_name;
        return {
          name: car.vehicle_name,
          preview: car.preview,
          vin: car.vin,
          left: car.left,
          timeleft: 3,
        };
      });
    }

    total.value = filteredCars.value.length;
    // totalpages.value = Math.ceil(total.value / perpage.value);
    updateTotalPages();
    if (page.value > totalpages.value) {
      page.value = totalpages.value;
    }
  }
  if (totalpages.value == 0) {
    page.value = 0;
  }
  else {
    page.value = 1;
  }
}

async function pageminus() {
  if (page.value > 1) {
    page.value--;
    updateVisibleCars();
  }
}

async function pageplus() {
  if (page.value < totalpages.value) {
    page.value++;
    updateVisibleCars();
  }
}

async function getAllCars() {
  let { data, status, error, refresh } = await useFetch(
    `https://api.caiman-app.de/api/cars-test?per_page=1000`
  );

  total.value = data.value.meta.total;

  allcars.value = data.value.data.map((car) => {
    car.vehicle_name =
      car.vehicle_name == null || car.vehicle_name === "undefined undefined"
        ? "Noname"
        : car.vehicle_name;
    return {
      name: car.vehicle_name,
      preview: car.preview,
      vin: car.vin,
      left: car.uploads,
      timeleft: 3,
    };
  })
  filteredCars.value = allcars.value;
  updateVisibleCars();
  updateTotalPages();
}
</script>

<style lang="scss"></style>
