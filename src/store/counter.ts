import { defineStore } from 'pinia'

import apis from "@/api/apis";

export interface StateProps {
    count:number,
    name:string,
    msg:string,
    person:IPerson
}
export interface IPerson{
    age:number
}

export const useCounterStore = defineStore('counter', {
    state: ():StateProps => {
        return {
            count: 22,
            name:'3322',
            person:{age:0},
            msg:''
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    getters:{
      namelength(state){
          return state.name.length
      },
      cc(state){
          return state.count
      },
      msgG: state => state.msg,
    },
    actions: {
        increment() {
            this.count++
        },
        async getAsync(){

            apis.post('dancife/login',{phone:18658771300,password:1}).then((res:any)=>{
                if(res){
                    this.msg = res.msg
                    console.log(res.msg)
                }
            })

        }
    },
})