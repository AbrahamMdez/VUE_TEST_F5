import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import TestComponent from '@/components/TestComponent.vue'
import OtherTestComponent from '@/components/OtherTestComponent.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('TestComponent.vue', () => {
  it('should be pass when you render slots', () => {
    const title = '<span>Title</span>'
    const wrapper = shallowMount(TestComponent, {
      slots: { title }
    })
    expect(wrapper.html()).toMatch(title)
  })
})

describe('OtherTestComponent.vue', () => {
  it('should be pass if all functions on component works perfectly', async () => {
    const wrapper = shallowMount(OtherTestComponent, {
      data: {
        msg: 'Test practica Vue',
        username: ''
      }
    })

    //Testeamos el mensaje y que exista el error, al no superar el nombre los 7 caracteres
    expect(wrapper.find('.msg').text()).toEqual('Test practica Vue')
    expect(wrapper.find('.error').exists()).toBe(true)

    await wrapper.setData({ username: 'Abraha' })
    expect(wrapper.find('.error').exists()).toBe(false)
  });
});
