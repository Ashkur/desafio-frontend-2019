<template>
    <div class="flex justify-center container-content">
        <div class="flex default-width">
            <div class="md:flex w-full">
                <div class="w-full lg:w-2/3">
                    <About />
                </div>
                <div class="w-full lg:w-1/3">
                    <LastNews/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.container-content {
    margin-bottom: 10vh;
}

@media (max-width: 800px) {
    .container-content {
        margin-bottom: 5vh;
    }
}
</style>


<script>
import About from '@/components/About.vue'
import LastNews from '@/components/LastNews.vue'

export default {
    components: {
        About,
        LastNews
    }
}
</script>

