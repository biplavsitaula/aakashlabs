import { useContext } from "react";
import { NewsContext } from "../components/store";

const NewsDetail = () => {
  const { currentElements } = useContext(NewsContext);
  // const elementDate = currentElements[0].publishedAt.slice("T");
  return (
    <div className="news-detail">
      {currentElements.map((element, index) => (
        <div key={index} className="news-container">
          <h2 className="news-title">{element.title}</h2>
          <div className="news-image">
            <img src={element.image} alt="" />
          </div>
          <p
            style={{
              color: "#626262",
              display: "flex",
              gap: "1rem",
              marginBottom: "20px",
              fontSize: "12px",
            }}
          >
            <span>{element.publishedAt}</span>
            <span>{element.source.name}</span>
          </p>
          <div className="news-description">{element.description}</div>
          <div className="news-content">{element.content}</div>
          <a
            href={element.url}
            target="_blank"
            style={{ marginTop: "10px", color: "#112d58" }}
          >
            Read full news
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsDetail;
