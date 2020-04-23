import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloA from '@/components/hello/helloA'
import HelloB from '@/components/hello/helloB'
import HelloC from '@/components/hello/helloC'
import Error from '@/components/error'
import ElementDemo from '@/components/elementDemo'
import Button from '@/components/elementDemo/button'
import Layout from '@/components/elementDemo/layout'
import Container from '@/components/elementDemo/container'
import Icon from '@/components/elementDemo/Icon'
import ElementButton from '@/components/elementDemo/ElementButton'
import Radio from '@/components/elementDemo/radio'
import Checkbox from '@/components/elementDemo/checkbox'
import Input from '@/components/elementDemo/input'
import InputNumber from '@/components/elementDemo/inputNumber'
import Select from '@/components/elementDemo/select'
import Cascader from '@/components/elementDemo/cascader'
import Tabs from '@/components/elementDemo/tabs'
import Login from '@/components/login/login'
import Register from '@/components/register/register'

Vue.use(Router)

const User = {
  props: ['age'],
  template: '<div>userName(param) age(query) {{$route.query.age}}</div>'
}

export default new Router({
  routes: [{
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld,
    children: [{
      path: 'a/:name',
      component: HelloA,
      beforeEnter: (to, from, next) => { // 钩子
        console.log('enter into HelloA')
        console.log(to)
        console.log(from)
        next()
      }
    }, {
      path: 'b/:name', component: HelloB
    }, {
      path: 'c/:name', component: HelloC
    }]
  }, {
    path: '/', component: Login
  }, {
    path: '/register', component: Register
  }, {
    path: '/user', component: User
  }, {
    path: '/user', component: User, alias: '/goUser'
  }, {
    path: '/goBack', redirect: '/'
  }, {
    path: '*', component: Error
  }, {
    path: '/elementDemo',
    component: ElementDemo,
    children: [{
      path: 'button/:buttonName/:color',
      component: Button
    }, {
      path: 'layout',
      component: Layout
    }, {
      path: 'container',
      component: Container
    }, {
      path: 'icon',
      component: Icon
    }, {
      path: 'elementButton',
      component: ElementButton
    }, {
      path: 'radio',
      component: Radio
    }, {
      path: 'checkbox',
      component: Checkbox
    }, {
      path: 'Input',
      component: Input
    }, {
      path: 'inputNumber',
      component: InputNumber
    }, {
      path: 'select',
      component: Select
    }, {
      path: 'cascader',
      component: Cascader
    }, {
      path: 'tabs', component: Tabs
    }]
  }]
})
