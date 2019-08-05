<template>
    <div class="p-2 last-news-background-color">
        <div class="last-news-title pt-6">ÚLTIMAS NOTÍCIAS</div>
        
        <div v-for="lastNews in news" :key="lastNews.id"  class="my-4 lg:my-4">
            <div class="last-news-date text-xs">{{ formatDate(lastNews.published_at) }}</div>
            <div class="text-sm">{{ stringTruncate(lastNews.description, 80) }}</div>
            <hr>
        </div>

        <div class="last-news-link text-sm float-right">
            <a href="#">Lista Completa <i class="fas fa-arrow-right"></i></a>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/main.scss';

.last-news-title {
    font-weight: bold;
    color: $brown-light-3;
}

.last-news-date {
    color: $brown-light;
    font-weight: bold;
}

.last-news-link {
    color: $brown-light;
}

.last-news-background-color {
    background-color: $white-2;
}

hr {
    border-color: $white-3;
    border-width: 1px;
}

</style>

<script>
import { RepositoryFactory } from './../repositories/RepositoryFactory'

const NewsRepository = RepositoryFactory.get('news')

export default {
    data() {
        return {
            news: []
        }
    },

    methods: {
        async fetchNews () {
            const { data } = await NewsRepository.get()
            this.news = data
        },

        stringTruncate (str, length) {
            var dots = str.length > length ? '...' : '';
            return str.substring(0, length) + dots;
        },

        formatDate(string) {
            let dateToFormat = new Date(string)
            return new Intl.DateTimeFormat().format(dateToFormat)
        }

    },

    mounted() {
        this.fetchNews()
    }
}
</script>
