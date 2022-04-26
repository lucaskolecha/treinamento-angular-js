class HomeService {
  constructor(public $http) {}

  log() {
    console.log('Home - Service')
  }
}

HomeService['inject'] = ['$http']

export { HomeService }
