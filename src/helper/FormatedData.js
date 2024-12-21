const formatedData=(data,type)=>{
   const newData=data[type].map(item=>{
    return{
        date:item[0],
        [type]:item[1]
    }
   })
   return newData
}

export default formatedData