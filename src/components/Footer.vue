<template>
    <div class="flex justify-center footer-color footer-height">
        <div class="inline w-full default-width">
            <div class="flex py-8">
                <div class="w-1/3">
                    <div class="flex justify-center">
                        <div class="inline">
                            <img src="../assets/img/logo.png" alt="logo">
                            <div class="flex justify-center brown-light">
                                <div class="p-2"><a href="#"><i class="fab fa-twitter-square"></i></a></div>
                                <div class="p-2"><a href="#"><i class="fab fa-google-plus-square"></i></a></div>
                                <div class="p-2"><a href="#"><i class="fab fa-facebook-square"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-1/3 side-borders">
                    <div class="flex justify-center">
                        <div class="inline white-color text-xs">
                            <div class="py-1">HOME</div>
                            <div class="py-1">SOBRE</div>
                            <div class="py-1">RECEITAS</div>
                            <div class="py-1">NOTÍCIAS</div>
                            <div class="py-1">CONTATO</div>
                        </div>                    
                    </div>
                </div>

                <div class="w-1/3">
                    <div class="flex justify-center">
                        <div class="inline">
                            <div class="flex py-2">
                                <div class="w-1/6">
                                    <div class="brown-light-2">
                                        <i class="fas fa-phone-square-alt"></i>
                                    </div>                                
                                </div>
                                <div class="w-5/6">
                                    <div class="flex">
                                        <div class="white-color text-sm font-bold"> CONTATO</div>
                                    </div>
                                    <div class="flex">
                                        <div class="white-color text-xs">(99) 9999-9999  |  (99) 99999-9999</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex py-2">
                                <div class="w-1/6">
                                    <div class="brown-light-2">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>                                
                                </div>
                                <div class="w-5/6">
                                    <div class="flex">
                                        <div class="white-color text-sm font-bold"> LOCALIZAÇÃO</div>
                                    </div>
                                    <div class="flex">
                                        <div class="white-color text-xs">Nam porttitor diam in eleifend fringilla, 3180</div>
                                    </div>
                                </div>
                            </div>                        
                        </div>                                        
                    </div>
                </div>
            </div>

            <div class="flex">
                <div class="w-1/2">
                    <div class="flex justify-center">
                        <div class="brown-light-2">© Bakery 2017. Todos direitos reservados.</div>
                    </div>
                </div>

                <div class="w-1/2">
                    <div class="flex justify-center">
                        <div class="brown-light-2"><img src="../assets/img/ow.png" alt="ow"></div>
                    </div>
                </div>
            </div>
        </div>
        

    </div>    
</template>

<style lang="scss">
@import '../assets/scss/main.scss';

.footer-color {
    background-color: $brown-dark;
}

.footer-height {
    height: 17.6875rem;
}

.brown-light {
    color: $brown-light;
}

.white-color {
    color: #ffffff;
}

.brown-light-2 {
    color: $brown-light-2;
}

.side-borders {
    border-left: 1px $brown-light-2 solid;
    border-right: 1px $brown-light-2 solid;
}
</style>

