import './Contacto.css'

export default function Contacto(){
    return(
        <>
            <section className='section-formulario'>
                <h2>Contactate con nosotros rellenando <br /> el siguiente formulario</h2>
            
                <form action="">
                    <label htmlFor="nombre">Ingresa tu Nombre:</label>
                    <input type="text" id="nombre" />
                    <br />
                    <label htmlFor="numero">Ingresa tu numero personal:</label>
                    <input type="number" id="numero" />
                    <br />
                    <label for="mensaje">Ingresa tu mensaje:</label>
                    <br />
                    <textarea id="mensaje" name="mensaje" placeholder='Hola, quiero acceder a una entrevista comercial para...'></textarea>
                    <br />
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </>
    )
}