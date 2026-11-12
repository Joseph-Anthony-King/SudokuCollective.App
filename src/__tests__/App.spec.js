import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'
import vuetify from '../plugins/vuetify'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('You did it!')
  })

  it('renders Vuetify components with the light theme', () => {
    const wrapper = mount({ template: '<v-btn>Play</v-btn>' }, { global: { plugins: [vuetify] } })

    expect(wrapper.get('button').text()).toContain('Play')
    expect(wrapper.get('button').classes()).toContain('v-theme--light')
    wrapper.unmount()
  })
})
