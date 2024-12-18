import React from 'react'

function Pagination({page,setPage}) {
  const getPageNumber = (e) => {
    setPage(e.target.innerText);
  };
  const nextPageHandler = () => {
    setPage((page) => +page + 1);
  };
  const previosPageHandler = () => {
    if (page >= 2) {
      setPage((page) => +page - 1);
    }
  };
  return (
    <div className='flex justify-center mt-12 mb-12'>
        <button onClick={previosPageHandler} disabled={page<=1 ? true : false} className={page<=1 ? "notactive" : "active"} type="button">pervios</button>
        <button onClick={getPageNumber} className={page==1 ? "selected" : "notselected"} type="button">1</button>
        <button onClick={getPageNumber} className={page==2 ? "selected" : "notselected"} type="button">2</button>
        <p className='mx-1'>...</p>
        {page>2&&page<9 && ( <button onClick={getPageNumber} className='selected' type="button">{page}</button>)}
       
        {page>2&&page<9 && (<p className='mx-1'>...</p>)}
        <button onClick={getPageNumber} className={page==9 ? "selected" : "notselected"} type="button">9</button>
        <button onClick={getPageNumber} className={page==10 ? "selected" : "notselected"} type="button">10</button>
        <button onClick={nextPageHandler} disabled={page>=10 ? true : false} className={page>=10 ? "notactive" : "active"} type="button">next</button>

    </div>
  )
}

export default Pagination