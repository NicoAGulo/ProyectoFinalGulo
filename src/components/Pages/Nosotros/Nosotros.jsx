import './Nosotros.css';
import ListadoHecho from './listado-nosotros';

export default function Nosotros(){
    return(
        <>
            <h1>Nosotros</h1>
                <img className="equipo-droneosfera" src="\assets\img\team-dronosfera.jpg" alt="equipo-droneosfera" />
            <h2>Nombres de cada integrante:</h2>
            <ul>
                <ListadoHecho/>
                
            </ul>

            <div className='agradecimiento'>
                <p>Gracias a todos por formar parte de este maravilloso equipo.</p>
                </div>


        </>
    )
}