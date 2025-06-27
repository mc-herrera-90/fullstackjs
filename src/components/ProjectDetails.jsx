import ReactMarkdown from "react-markdown";

import "./ProjectDetails.css";

const ProjectDetails = ({ details }) => {
  return (
    <div className="project-container">
      <h2 className="project-title">{details.name}</h2>
      <p className="project-abstract">
        <ReactMarkdown>{details.abstract}</ReactMarkdown>
      </p>
      
      <table className="project-table">
        <tbody>
          <tr>
            <th>Lenguaje usado:</th>
            <td><ReactMarkdown>{details.languages}</ReactMarkdown></td>
          </tr>
          <tr>
            <th>IDE:</th>
            <td>{details.ide}</td>
          </tr>
          <tr>
            <th>Java Version:</th>
            <td><ReactMarkdown>{details.javaVersion}</ReactMarkdown></td>
          </tr>
          <tr>
            <th>Base de Datos:</th>
            <td>{details.database ? details.database : 'No'}</td>
          </tr>
          <tr>
            <th>Tipo:</th>
            <td>{details.type}</td>
          </tr>
          <tr>
            <th>Recomendado para:</th>
            <td>{details.recommended}</td>
          </tr>
          <tr>
            <th>Tiempo de desarrollo:</th>
            <td>{details.time}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectDetails;
