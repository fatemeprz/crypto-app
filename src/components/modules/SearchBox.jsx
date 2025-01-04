
function SearchBox({ coins }) {
  
  return (
    <>
      <ul>
        {coins.map((coin) => (
          <li
            className="flex py-2 border-b items-center border-gray-700"
            key={coin.id}
          >
            <img className="mr-3 h-7" src={coin.thumb} alt="coin-logo" />
            <span>{coin.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchBox;
