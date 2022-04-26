import { UrlRouterProvider } from '@uirouter/angularjs'

const appConfig = ($urlRouterProvider: UrlRouterProvider) => {
  $urlRouterProvider.otherwise('home')
}

export { appConfig }
