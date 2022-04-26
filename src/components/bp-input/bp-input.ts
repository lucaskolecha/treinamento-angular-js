import { IOnInit } from 'angular'
import template from './bp-input.html'

class BpInputController implements IOnInit {
  constructor(private $scope) {}

  $onInit() {
    console.log('OnInit - BpInput')
  }

  $onDestroy() {
    console.log('Destroy - BpInput')
  }
}

const bpInput = {
  bindings: {
    ngModel: '=?',
    ngChange: '&?',
    placeholder: '@?',
  },
  controller: BpInputController,
  template: template,
}

export { bpInput }
