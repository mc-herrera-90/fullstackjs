import { useNavigate } from 'react-router-dom';
import { desafiosM2 } from '../../../data/desafiosM2';

export default () => {

    const navigate = useNavigate();

    const handleRowClick = (slug) => {
        navigate(`/desafios/m2/${slug}`);
    }

    return (
    <div>
        <h2>Introducción al desarrollo web</h2>
        { desafiosM2 ?  (
        <table className='responsive-table'>
            <thead>
                <th>N°</th>
                <th>Dificultad</th>
                <th>Desafío</th>
            </thead>
            <tbody>
                { desafiosM2.map((entry, index) => {
                    return (
                    <tr key={index} onClick={() => handleRowClick(entry.slug)} style={{cursor: "pointer"}}>
                        <td data-label="N°">{index + 1}</td>
                        <td data-label="Dificultad">
                            {entry.difficult}
                        </td>
                        <td data-label="Desafío">
                            {entry.title}
                        </td>
                    </tr>
                    )})
                }
            </tbody>
        </table>) : 
        (<p style={{fontSize: "3rem" }} align="center">No hay entradas</p>)
        }
    </div>
    )
}


