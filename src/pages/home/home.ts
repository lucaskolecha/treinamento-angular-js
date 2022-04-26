import { IOnInit } from 'angular'
import { HomeService } from './services/home.service'

class HomePage implements IOnInit {
  private inputValue: string = ''

  constructor(private homeService: HomeService, private $scope, private $state, private $timeout) {}

  $onInit() {
    this.homeService.log()
    this.$scope.$on('$destroy', () => {
      console.log('Destroy - Home')
    })
  }

  goAboutPage() {
    this.$state.go('about')
  }

  onChange() {
    this.$timeout(() => {
      console.log('onChange', this.inputValue)
    })
  }
}

export { HomePage }
