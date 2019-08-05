<template>
    <nav class="flex w-full justify-center ">
        <div class="flex flex-wrap w-full default-width lg:flex-no-wrap">
            <!-- head -->
            <div class="flex w-full justify-between items-center lg:w-64">
                <img src="../assets/img/logo.png" alt="logo" class="w-20 lg:w-40 m-4">

                <div class="lg:hidden brown-dark-color font-bold">BAKERY</div>

                <div 
                    @click="showMenu = !showMenu"
                    class="block lg:hidden mx-8 brown-dark-color">
                    
                    <i 
                        v-if="showMenu"
                        class="fas fa-times"></i>

                    <i 
                        v-else
                        class="fas fa-bars"></i>
                </div>
            </div>

            <!-- menu mobile -->
            <div 
                v-if="showMenu"
                class="block text-center text-sm w-full items-center justify-end">

                <div class="px-6 py-2 brown-light-color"> <a href="#">HOME</a> </div>
                <div class="px-6 py-2"> <a href="#">SOBRE</a> </div>
                <div class="px-6 py-2"> <a href="#">RECEITAS</a> </div>
                <div class="px-6 py-2"> <a href="#">NOTÍCIAS</a> </div>
                <div class="px-6 py-2"> <a href="#">CONTATO</a> </div>
                <div class="px-6 py-2"> <input type="text" name="search" class="input-search"> </div>
            </div>

            <!-- menu lg screens -->
            <div class="hidden text-center text-sm lg:flex w-full font-bold items-center justify-end">
                <div class="px-6 py-2 brown-light-color"> <a href="#">HOME</a> </div>
                <div class="px-6 py-2"> <a href="#">SOBRE</a> </div>
                <div class="px-6 py-2"> <a href="#">RECEITAS</a> </div>
                <div class="px-6 py-2"> <a href="#">NOTÍCIAS</a> </div>
                <div class="px-6 py-2 border-r"> <a href="#">CONTATO</a> </div>
                <div class="px-6 py-2"> <input type="text" name="search" class="input-search"> </div>
            </div>
        </div>

    </nav>
</template>

<style lang="scss">
@import '../assets/scss/main.scss';
    
    .input-search {
        width: 40px;
        line-height: 40px;
        margin-left: 10px;
        border: none;
        background-image: url('../../src/assets/img/icons/search-solid.svg');
        background-repeat: no-repeat;
        background-size: 1.2em;
        background-position: 10px 10px;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
    }

    .input-search:focus {
        width: 100%;
        padding: 0 0 0 40px;
        border-bottom: 1px solid #515151;        
    }

    .brown-dark-color {
        color: $brown-dark;
    }

    .brown-light-color {
        color: $brown-light;
    }
</style>


<script>
export default {
    data() {
        return {
            showMenu: false,
        }
    },

    methods: {
    },

    mounted() {
    }
}
</script>
