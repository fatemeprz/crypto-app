const BASE_URL="https://api.coingecko.com/api/v3"
const API_KEY="x-cg-demo-api-key: CG-yCP9aaMmkJa4sP4MS49iCHoR"

const getCoinList = (page,currency) => {
  return `${BASE_URL}/coins/markets?&per_page=20&page=${page}&${API_KEY}&vs_currency=${currency}` 
  
}
const searchCoin=(query)=>{
  return `${BASE_URL}/search?query=${query}&${API_KEY}`
}

const marketChart=(id)=>{
  return `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=1`
}

export {getCoinList,searchCoin,marketChart}