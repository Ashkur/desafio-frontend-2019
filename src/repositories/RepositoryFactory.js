import BannersRepository from './bannersRepository'
import ProductsRepository from './productsRepository'
import NewsRepository from './newsRepository'
import PartnersRepository from './partnersRepository'

const repositories = {
    banners: BannersRepository,
    products: ProductsRepository,
    news: NewsRepository,
    partners: PartnersRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};