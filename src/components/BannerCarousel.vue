<template>
<div class="flex w-full relative banner-container">
    <carousel :per-page="1" id="bannerCarousel"> 
        <slide v-for="banner in banners" :key="banner.id">
            <img :src="banner.image_url" :alt="banner.title" class="banner-image">
        </slide>
    </carousel>
    <Products />          
</div>    
    
</template>

<style lang="scss">

.banner-container {
    position:relative; 
    margin-bottom: 15rem;
}


/*override o estilos do carousel */

#bannerCarousel .VueCarousel-slide {
  visibility: visible!important;
  flex-basis: 100%!important;
  width: 100%!important;
}

#bannerCarousel .VueCarousel-pagination{
    position: absolute;
    bottom: 35%;
}

#bannerCarousel .VueCarousel-pagination .VueCarousel-dot {
    background-color: Transparent!important;
    padding: 0!important;
    border: 1px solid #ffffff!important;
    margin-right: 5px!important;
    margin-left: 5px!important;
    outline: none!important;
}

#bannerCarousel .VueCarousel-pagination .VueCarousel-dot--active {
    background-color: #ffffff !important;
}

@media (min-width: 380px) {
    .VueCarousel-pagination{
        display: none!important; 
    }

    .banner-image {
        height: 15rem;
        width: 100%;
    }

    .banner-container {
        margin-bottom: 5rem;
    }
}

@media (min-width: 750px) {
    .banner-container {
        margin-bottom: 10rem;
    }

    .VueCarousel-pagination{
        display: block !important; 
    }

    .banner-image {
        height: 25rem;;        
    }
}

@media (min-width: 1024px) {
    .banner-container {
        margin-bottom: 15rem;
    }

    .banner-image {
        height: 25rem;;        
    }
}

</style>


<script>
import Products from '@/components/Products.vue'
import { RepositoryFactory } from './../repositories/RepositoryFactory'

const BannersRepository = RepositoryFactory.get('banners')

export default {
    components: {
        Products
    },

    data() {
        return {
            banners: [ ],
        }
    },

    methods: {
        async fetchBanners () {
            const { data } = await BannersRepository.get()
            this.banners = data
        }
    },

    mounted() {
        this.fetchBanners()
    }
}
</script>

