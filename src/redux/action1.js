import ADD from './actiontype';

const add=(item)=>{
   return {
       type:ADD,
       payload:item
         }
}
export default add;