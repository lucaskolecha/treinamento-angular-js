import { IOnInit } from 'angular'
import template from './bp-input.html'
import './bp-input.scss'

class BpInputController implements IOnInit {
  constructor(private $scope, private $timeout) {}

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
    onKeypress: '&?',
  },
  controller: BpInputController,
  template: template,
}

export { bpInput }
