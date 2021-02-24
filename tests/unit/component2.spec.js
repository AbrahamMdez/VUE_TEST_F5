import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import TesComponent2 from '@/components/TestComponent2.vue'

describe('TestComponent2.vue', () => {
    it('Click on button yes call method with argument yes', async () => {
        const spy = sinon.spy()
        const wrapper = mount(TesComponent2, {
            propsData: {
                callMe: spy
            }
        })

        await wrapper.find('button.yes').trigger('click')

        expect(spy.calledWith('yes')).toEqual(true);
    })
})

