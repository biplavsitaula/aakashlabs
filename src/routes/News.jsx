import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NewsContext } from "../components/store";

const NewsList = () => {
  const {
    currentElements,
    handlePrevious,
    handleNext,
    totalPages,
    currentPage,
  } = useContext(NewsContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/full-news");
  };

  return (
    <div className="news">
      <h1
        style={{ color: "#112d58", display: "flex", justifyContent: "center" }}
      >
        News
      </h1>
      <ul>
        {currentElements.map((element, index) => (
          <li onClick={handleClick} key={index} className="news-list">
            <img src={element.image} alt="" />
            <h4 className="">{element.title}</h4>
            <p>{element.description}</p>
          </li>
        ))}
      </ul>
      <div className="news-control">
        <button
          onClick={() => {
            handlePrevious(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span>
          {currentPage} of {totalPages}
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
