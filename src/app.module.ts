import { module, IModule, bootstrap } from 'angular'
import { appConfig } from './config'
import { pagesModule } from './pages'

import angularTranslate from 'angular-translate'
import ngSanitaze from 'angular-sanitize'
import uiRouter from '@uirouter/angularjs'
import { componentsModule } from './components'
import './app.module.scss'

export const app: IModule = module('app', [
  ngSanitaze,
  uiRouter,
  angularTranslate,
  pagesModule,
  componentsModule,
])

app.config(appConfig)
bootstrap(document.querySelector('#app'), ['app'])
