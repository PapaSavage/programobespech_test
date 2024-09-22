<template>
    <div class="m-10">
        <button class="btn_solid_min my-10">
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

        <div class="search-container">
            <input type="text" placeholder="Search VIN" class="input_with_icon">
            <span class="icon"></span>
        </div>
        <br>

        <button class="badge_green ml-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#7FC75E" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <div>30/30</div>
        </button>

        <input class="input_pages" type="text">

        <Card :car="car" />
    </div>
</template>

<script setup>


const car = ref({
    name: 'Toyota Camry',
    vin: 'WDB 1400321A333419',
    left: "5/30",
    timeleft: 3,
})

</script>
