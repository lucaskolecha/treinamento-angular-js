import { IOnInit } from 'angular'
import { AboutService } from './services/about.service'

class AboutPage implements IOnInit {
  private aboutString: string = 'abc'
  private array: any[]

  constructor(
    private aboutService: AboutService,
    private $scope,
    private $state,
    private $timeout,
  ) {}

  $onInit() {
    this.array = [{ name: 'Primeiro' }, { name: 'Segundo' }, { name: 'Terceiro' }]
    this.aboutService.teste()
    this.$scope.$on('$destroy', () => {
      console.log('Destroy - About')
    })

    this.$timeout(() => {
      this.aboutString = 'VERMELHO'
    }, 1000)
  }

  goHomePage() {
    this.$state.go('home')
  }
}

export { AboutPage }
