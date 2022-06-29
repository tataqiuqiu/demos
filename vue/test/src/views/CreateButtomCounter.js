import Vue from "vue"
import ButtonCounter from "./ButtonCounter.vue"

export const CreateButtomCounter = () => {
  const ButtonCounterCom = Vue.component('button-counter', ButtonCounter)
  const instance = new ButtonCounterCom().$mount()  

  const dom = document.querySelector("#root");
  // const dom = document.querySelector("#app-test");
  
  dom.appendChild(instance.$el)

  // const ButtonCounterCom = Vue.extend(ButtonCounter)
  // const instance = new ButtonCounterCom().$mount()  

  // const dom = document.querySelector("#root");
  // dom.appendChild(instance.$el)
}