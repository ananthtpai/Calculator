import { action } from '@storybook/addon-actions'
import React from 'react'

import NumberInput from '.'

export default {
  title: 'Calculator/Input/Number',
  component: NumberInput
}

export const NumberSeven = () => (
  <NumberInput
    item={'7'}
    onClick={action('on input click')}
  />
)