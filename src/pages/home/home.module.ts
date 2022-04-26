import { module } from 'angular'
import { StateProvider } from '@uirouter/angularjs'
import { HomePage } from './home'
import { HomeService } from './services/home.service'
import HomeTemplate from './home.html'
import './home.scss'

const homeModule = module('app.page.home', [])
  .service('homeService', HomeService)
  .config(($stateProvider: StateProvider) => {
    $stateProvider.state({
      name: 'home',
      url: '/home',
      controller: HomePage,
      template: HomeTemplate,
      controllerAs: '$ctrl',
    })
  }).name

export { homeModule }
