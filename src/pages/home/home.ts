import { IOnInit } from 'angular'
import { HomeService } from './services/home.service'

class HomePage implements IOnInit {
  constructor(private homeService: HomeService, private $scope, private $state) {}

  $onInit() {
    this.homeService.get().then((response) => {
      console.log(response)
    })
    this.$scope.$on('$destroy', () => {
      console.log('Destroy - Home')
    })
  }

  goAboutPage() {
    this.$state.go('about')
  }

  batata($event) {
    console.log('Executou', $event)
  }
}

export { HomePage }
