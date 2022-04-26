import { module } from 'angular'
import { StateProvider } from '@uirouter/angularjs'
import { AboutPage } from './about'
import { AboutService } from './services/about.service'
import AboutTemplate from './about.html'
import './about.scss'

const aboutModule = module('app.page.about', [])
  .service('aboutService', AboutService)
  .config(($stateProvider: StateProvider) => {
    $stateProvider.state({
      name: 'about',
      url: '/about',
      controller: AboutPage,
      template: AboutTemplate,
      controllerAs: '$ctrl',
    })
  }).name

export { aboutModule }
