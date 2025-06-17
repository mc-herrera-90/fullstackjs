import { useParams } from "react-router-dom";

const moduleProjects = {
    '1': ['img1a.jpg', 'img1b.jpg'],
    '2': ['img2a.jpg', 'img2b.jpg'],
    '3': ['img3a.jpg', 'img3b.jpg'],
    '4': ['img4a.jpg', 'img4b.jpg'],
    '5': ['img5a.jpg', 'img5b.jpg'],
    '6': ['img6a.jpg', 'img6b.jpg']
};

export default function ProjectSlider() {
    const { id } = useParams();
    const projects = moduleProjects[id]

    return (
        <div>
            {projects.map((project, idx) => (
                <div key={idx}>
                </div>
            ))}
        </div>
    )
}