import { IOnInit } from 'angular'
import { AboutService } from './services/about.service'

class AboutPage implements IOnInit {
  constructor(private aboutService: AboutService, private $scope, private $state) {}

  $onInit() {
    this.aboutService.teste()
    this.$scope.$on('$destroy', () => {
      console.log('Destroy - About')
    })
  }

  goHomePage() {
    this.$state.go('home')
  }
}

export { AboutPage }
