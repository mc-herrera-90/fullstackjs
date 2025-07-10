import { useNavigate } from 'react-router-dom';
import { desafiosM3 } from '@data/desafiosM3';

export default () => {

    const navigate = useNavigate();

    const handleRowClick = (slug) => {
        navigate(`/desafios/m3/${slug}`);
    }

    return (
    <div>
        <h2>CSS Avanzado</h2>
        { desafiosM3 ?  (
        <table className='responsive-table'>
            <thead>
                <th>N°</th>
                <th>Dificultad</th>
                <th>Desafío</th>
            </thead>
            <tbody>
                { desafiosM3.map((entry, index) => {
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


