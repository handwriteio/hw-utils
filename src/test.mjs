import { constants, utils } from './index.mjs'

const nameValidation = utils.validateContactInfo({
  firstName: 'mcKittreck',
  lastName: 'terry-Gables III',
  street1: '3338 SE thomas Avenue northwest',
  street2: 'Southwestern Sweets',
  company: 'Google',
  state: 'District Of Columbia',
  city: 'Montgomery',
  zip: '10006',
})

const stateValidation = utils.stateAbbr('District of Columbia')

console.log('NAME VALIDATION: ', nameValidation)
