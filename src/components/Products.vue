<template>
    <div class="flex w-full justify-center absolute products-conteiner" id="Products">        
        <div class="flex default-width" style="background-color: grey">
            <div 
                v-for="product in products" :key="product.id" 
                class="shadow-effect">

                <img :src="product.image_url" :alt="product.name" style="float: left;">
                <div class="products-name">{{product.name}}</div>

            </div>
        </div>        
    </div>
</template>

<style lang="scss">

.shadow-effect {
    position: relative;
    float: left;    
    opacity: .6;
}

.shadow-effect::before {
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
	position: absolute;
    -webkit-box-shadow: inset -4px -109px 45px -18px rgba(0,0,0,0.81);
    -moz-box-shadow: inset -4px -109px 45px -18px rgba(0,0,0,0.81);
    box-shadow: inset -4px -109px 45px -18px rgba(0,0,0,0.81);
}

.shadow-effect:hover {
    opacity: 1; 
}

.products-name {
    color:#ffff;
    position: absolute;
    font-weight: bold;
    text-transform: uppercase;
    bottom: 1.25rem;
    -webkit-transform: translateX(50%);
    transform: translateX(50%);
}

@media (min-width: 380px) {
    .products-conteiner {
        height: 6.25rem;
        bottom: -1.875rem;
    }
    .products-name {
        display: none;
    }

    .shadow-effect {
        opacity: 1;
    }    
}

@media (min-width: 750px) {
    .products-conteiner {
        height: 13.1875rem;
        bottom: -6rem;
    }

    .products-name {
        display: block;
        -webkit-transform: translateX(20%);
        transform: translateX(20%);
    }

    .shadow-effect {
        opacity: .6;
    }
}

@media (min-width: 1024px) {
    .products-conteiner {
        height: 278px;
        bottom: -40%;
    }

    .products-name {
        -webkit-transform: translateX(30%);
        transform: translateX(30%);
    }
}

</style>


<script>
import { RepositoryFactory } from './../repositories/RepositoryFactory'

const ProductsRepository = RepositoryFactory.get('products')

export default {
    data() {
        return {
            products: []
        }
    },

    methods: {
        async fetchProducts () {
            const { data } = await ProductsRepository.get()
            this.products = data
        }
    },

    mounted() {
        this.fetchProducts()
    }
}
</script>

