  const millisecondsToDate=(ms)=>{
     const date=new Date(ms)
     const sliced=date.toString().split(" ")
     const newDate1=sliced.slice(1,3).join(" ")
     const newDate2=sliced.slice(4,5).join(" ")
     const convertedDate=`${newDate1} ${newDate2}`
     return convertedDate
  }



export {millisecondsToDate}