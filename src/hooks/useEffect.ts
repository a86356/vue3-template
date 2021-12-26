
import {onMounted,watch} from 'vue'
interface fn{
    ():void
}

function useEffect(cb:fn,arr:Array<any>):void{

   onMounted(()=>{
       cb();
   })
   arr.forEach(item=>{
       watch(item,()=>{
           cb()
       })
   })

}
export default useEffect