import { module } from 'angular'
import { aboutModule } from './about/about.module'
import { homeModule } from './home/home.module'

const pagesModule = module('app.page', [homeModule, aboutModule]).name

export { pagesModule }
