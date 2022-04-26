import { module } from 'angular'
import { bpInput } from './bp-input/bp-input'

const componentsModule = module('app.components', []).component('bpInput', bpInput).name

export { componentsModule }
