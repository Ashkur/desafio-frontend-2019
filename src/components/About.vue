<template>
    <div class="md:flex md:about-height">
        <div class="hidden px-2 py-6 md:block md:w-1/2">
            <img src="../assets/img/massa.png" alt="clip">
        </div>

        <div class="w-full md:w-1/2 md:m-3 p-2">
            <div class="about-title ">
                SOBRE A BAKERY
            </div>

            <div class="">
                <div class="text-sm text-justify py-4">
                    Ut vitae volutpat risus. Nam vitae congue odio, mattis dignissim neque. Nam eros sapien, semper in pellentesque ut, suscipit eu nunc. 
                    Donec malesuada egestas ligula, non malesuada sapien suscipit ut.
                </div>

                <div class="text-sm text-justify py-4">
                    Praesent sed ipsum ullamcorper purus scelerisque laoreet. Nulla lobortis ex eu mi accumsan, non hendrerit ex rhoncus. Etiam auctor libero porttitor tellus imperdiet consequat. Nam porttitor diam in eleifend fringilla.
                </div>
                 
            </div>

            <div class="about-link text-sm">
               <a href="#">Conheça mais <i class="fas fa-arrow-right"></i></a> 
            </div>

        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/main.scss';

    .about-title {
        font-weight: bold;
        color: $brown-dark;
    }
    
    .about-link {
        color: $brown-light;
    }

    .about-height {
        height: 19.375rem;
    }
</style>

