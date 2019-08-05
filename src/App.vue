<template>
  <div id="app">
    <Navbar />
    <BannerCarousel />
    <Content />
    <PartnersCarousel />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import BannerCarousel from '@/components/BannerCarousel.vue'
import Content from '@/components/Content.vue'
import PartnersCarousel from '@/components/PartnersCarousel.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    BannerCarousel,
    Content,
    PartnersCarousel,
    Contact,
    Footer
  }
}
</script>

<style lang="scss">
</style>
