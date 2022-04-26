class HomeService {
  constructor(public $http) {}

  get() {
    return this.$http.post(
      `https://api.kigisistemas.com.br/mobiage-api/api/consignment/order/historic-list-form?gumgaToken=395L1603E1650990222534C165098842253400O1601.1602.1603.I`,
      {
        page: 1,
        query: '',
        pageSize: 7,
        startDate: null,
        endDate: null,
        category: 'CONSIGNMENT_ORDER',
        count: 15224,
        fields: [{ name: 'p.name', type: 'VARCHAR' }],
        operator: 'CONTAINING',
      },
    )
  }

  log() {
    console.log('Home - Service')
  }
}

export { HomeService }
