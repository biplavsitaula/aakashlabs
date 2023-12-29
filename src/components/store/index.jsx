import { createContext, useState, useEffect } from "react";
import { apiKey, url } from "../../assets/data/apiData";

export const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 10;
  const itemsPerPage = 1;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentElements = newsData.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    try {
      const fetchNews = async () => {
        const response = await fetch(url + apiKey);
        const result = await response.json();
        setNewsData(result.articles);
      };
      fetchNews();
    } catch (error) {
      console.log(error);
    }
  }, [currentPage]);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };
  return (
    <NewsContext.Provider
      value={{
        currentPage,
        totalPages,
        currentElements,
        handlePrevious,
        handleNext,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
