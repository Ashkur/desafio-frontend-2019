<template>
    <div class="flex justify-center partner-container">
        <div class="default-width relative">
            <div class="text-center py-8 partiner-label">PARCEIROS</div>
            <div class="relative py-8 h-64">
                <carousel :perPageCustom="[[300, 1], [600, 4]]" :autoplay="true" id="PartnersCarousel"> 
                    <slide v-for="partner in partners" :key="partner.id">
                        <div class="flex justify-center md:block p-2">
                            <img :src="partner.image_url" :alt="partner.title">
                        </div>
                    </slide>
                </carousel>
            </div>            
        </div>        
    </div>    
</template>

<style lang="scss">
@import '../assets/scss/main.scss';

.partiner-label {
    color: $brown-dark;
    font-weight: bold;
}

.partner-container {
    height: 21.5rem;
    background-color: $grey;
}

/*override o estilo do carousel */

#PartnersCarousel .VueCarousel {
    height: 100% !important;
}

#PartnersCarousel .VueCarousel-pagination{
    margin-top: 0px!important; 
    position: absolute!important; 
    bottom: -20px; 
}

#PartnersCarousel .VueCarousel-pagination .VueCarousel-dot {
    background-color: Transparent!important;
    padding: 0!important;
    border: 1px solid $brown-light !important;
    margin-right: 5px!important;
    margin-left: 5px!important;
    outline: none!important;
}

#PartnersCarousel .VueCarousel-pagination .VueCarousel-dot--active {
    background-color: $brown-light !important;
}
</style>


<script>
import { RepositoryFactory } from './../repositories/RepositoryFactory'

const PartnersRepository = RepositoryFactory.get('partners')

export default {
    data() {
        return {
            partners: [ ],
        }
    },

    methods: {
        async fetchPartners () {
            const { data } = await PartnersRepository.get()
            this.partners = data
        }
    },

    mounted() {
        this.fetchPartners()
    }
}
</script>

