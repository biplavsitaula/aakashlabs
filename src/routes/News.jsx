import React, { useEffect, useState } from "react";

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const maxArticlesPerPage = 10;
  const apiKey = "b02eb81a0e890cceaadc9d5bb36fe656";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/top-headlines?lang=en&country=us&apikey=${apiKey}&max=${maxArticlesPerPage}&page=${currentPage}`
        );
        console.log("fetching");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`, error);
        }

        const result = await response.json();
        setNewsData(result.articles);
        setTotalPages(Math.ceil(result.totalArticles / maxArticlesPerPage));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="news">
      <ul>
        {newsData.map((article, index) => (
          <li key={index} className="news-list">
            <p>
              <img src={article.image} alt="" />
            </p>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span>
          {currentPage}of{totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default NewsList;
