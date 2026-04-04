import React from "react";
import gitData from "../../assets/github.json";
import MacWindow from "./MacWindow";
import "./github.scss";

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tag: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return <div className="card">
    <img src={data.image} alt="" />
    <h1>{data.title}</h1>
    <p className="description">{data.description}</p>
    <div className="tags">
      {data.tag.map((tag, index) => <span className="tag" key={index}>{tag}</span>)}
    </div>
    <div className="urls">
      <a href={data.repoLink} target="_blank" >
        Repository
      </a>
      <a href={data.demoLink} target="_blank" >
        Demo
      </a>
    </div>
  </div>;
};

const GIthub = ({ windowName, windowState, setWindowState }) => {
  return <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState}>
    <div className="cards">
      {
        gitData.map((project) => {
          return <GitCard key={project.id} data={project} />;
        })
      }
    </div>
  </MacWindow>;
};

export default GIthub;
