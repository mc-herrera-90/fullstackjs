import { useNavigate } from 'react-router-dom';
import { desafiosM1 } from '../../../data/desafiosM1';

export default () => {

    const navigate = useNavigate();

    const handleRowClick = (slug) => {
        navigate(`/desafios/m1/${slug}`);
    }

    return (
    <div>
        <h2 align="center">Desafíos Java</h2>
        { desafiosM1 ?  (
        <table className='responsive-table'>
            <thead>
                <tr>
                    <th>N°</th>
                     <th>Dificultad</th>
                    <th>Desafío</th>
                </tr>
            </thead>
            <tbody>
                { desafiosM1.map((entry, index) => {
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
