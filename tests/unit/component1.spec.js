import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import TestComponent1 from '@/components/TestComponent1.vue'

describe('Component1.vue', () => {
    it('should render Component1, then hide it', async () => {
        const wrapper = mount(TestComponent1)

        await wrapper.setData({
            show: false
        })

        expect(wrapper.text()).not.toMatch('Test Component 1')
    })
})