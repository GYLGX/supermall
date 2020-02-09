//导入
import Toast from './Toast';

const obj = {}

obj.install = (Vue) => {
  console.log(Vue);
  //1、创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  //2、new 的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()

  //3、将组件对象，手动挂载到某个元素上  document.createElement('div')通过自己创建出来的一个div
  toast.$mount(document.createElement('div'))

  //4、toast.$el 对应的就是 上面创建出来的 div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;
}

export default obj
