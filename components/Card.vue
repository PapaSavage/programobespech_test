<template>
    <div class="card">
        <button class="self-end">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                    stroke="#293148" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path
                    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                    stroke="#293148" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path
                    d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                    stroke="#293148" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </button>

        <img v-if="car.preview" class="self-center mb-[24px] h-[135px]" :src="car.preview" alt="">
        <img v-else class="self-center mb-[24px]" :src="'/img/car.png'" alt="">
        <div class="title mb-[12px]">{{ car.name }}</div>
        <div class="flex flex-col gap-[18px]">
            <div class="subtitle text-gray">{{ car.vin }}</div>
            <hr class="solid">
            <div class="flex flex-row justify-between items-center">
                <button v-if="car.left < 30" class="badge_primary">{{ car.left }}/30</button>
                <button v-else class="badge_green">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#7FC75E" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div>30/30</div>
                </button>
                <div class="text-gray days_expired">{{ car.timeleft }} days left</div>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps(['car'])



</script>

<style lang="scss">
.card {
    @apply flex flex-col bg-primary_gray min-w-[260px] lg:min-w-[354px] h-[335px] rounded-[10px] py-[16px] px-[24px];
}

.title {
    font-family: DMSans-Bold;
    @apply text-[20px] leading-[22px];
}

.subtitle {
    font-family: DMSans-Medium;
    @apply text-[15px] leading-[20px];
}

.days_expired {
    font-family: DMSans-Medium;
    @apply text-[15px] leading-[16px];
}
</style>