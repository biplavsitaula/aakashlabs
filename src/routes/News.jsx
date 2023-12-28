import { useEffect, useState } from "react";
import { apiKey, url } from "../assets/data/apiData";

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const itemsPerPage = 2;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentElements = newsData.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(url + apiKey);
      const result = await response.json();
      setNewsData(result.articles);
    };

    fetchNews();
  }, [currentPage]);

  const handlePrevious = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleNext = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="news">
      <ul>
        {currentElements.map((element, index) => (
          <li key={index} className="news-list">
            <img src={element.image} alt="" />
            <h4 className="">{element.title}</h4>
            <p>{element.description}</p>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => {
            handlePrevious(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span>
          {currentPage}of{totalPages}
        </span>
        <button
          onClick={() => {
            handleNext(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default NewsList;
