import REMOVE from './actiontype2'

const remove=(item)=>{
   return {
       type:REMOVE,
       payload:item
         }
}
export default remove;