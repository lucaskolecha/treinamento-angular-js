class HomeService {
  constructor(public $http) {}

  teste() {
    console.log('Home - Service')
  }
}

HomeService['inject'] = ['$http']

export { HomeService }
