const Listado=[
    {ubicacion:'Fila Superior, Extremo Izquierdo', nombre:"María González", rol: "Trabaja en el departamento de mantenimiento y reposición."},
    {ubicacion:'Fila Superior, Segundo desde la Izquierda', nombre:"David Martínez", rol: "Es uno de los ejecutivos de la compañía."},
    {ubicacion:'Fila Superior, Tercero desde la Izquierda', nombre:"Lucas Kim", rol: "Es un vendedor del equipo de ventas."},
    {ubicacion:'Fila Superior, Cuarto desde la Izquierda', nombre:"Emily Chen", rol: "Trabaja en la oficina como oficinista."},
    {ubicacion:'Fila Superior, Quinto desde la Izquierda', nombre:"John Smith", rol: "Es un vendedor del equipo de ventas."},
    {ubicacion:'Fila Superior, Sexto desde la Izquierda', nombre:"Sarah Johnson", rol: "Trabaja en la oficina como oficinista."},
    {ubicacion:'Fila Superior, Séptimo desde la Izquierda', nombre:"Michael Brown", rol: "Es parte del equipo de mantenimiento y reposición."},
    {ubicacion:'Fila Superior, Extremo Derecho', nombre:"James Williams", rol: "También es parte del equipo de mantenimiento y reposición."},
    {ubicacion:'Fila Inferior, Extremo Izquierdo', nombre:"Ana Rodríguez", rol: "Trabaja en el departamento de mantenimiento y reposición."},
    {ubicacion:'Fila Inferior, Segundo desde la Izquierda', nombre:"Robert Lee", rol: "Es un vendedor del equipo de ventas."},
    {ubicacion:'Fila Inferior, Tercero desde la Izquierda', nombre:"Laura Nguyen", rol: "Trabaja en la oficina como oficinista."},
    {ubicacion:'Fila Inferior, Cuarto desde la Izquierda', nombre:"Thomas García", rol: "Es uno de los ejecutivos de la compañía."},
    {ubicacion:'Fila Inferior, Quinto desde la Izquierda', nombre:"Jessica Patel", rol: "Es una vendedora del equipo de ventas."},
    {ubicacion:'Fila Inferior, Sexto desde la Izquierda', nombre:"Daniel Thompson", rol: "Trabaja en la oficina como oficinista."},
    {ubicacion:'Fila Inferior, Séptimo desde la Izquierda', nombre:"Elizabeth Davis", rol: "Es una vendedora del equipo de ventas."},
    {ubicacion:'Fila Inferior, Extremo Derecho', nombre:"Kevin Wilson", rol: "Es parte del equipo de mantenimiento y reposición."}
  ];

function ListadoHecho(){
    return(
        <div className="listado-nosotros">
            {Listado.map((persona) =>(
                <div key={persona.nombre + persona.rol} className="listado-personal">
                    <h5>Nombre: {persona.nombre}</h5>
                    <h6>Ubicacion: {persona.ubicacion}</h6>
                    <h6>Rol: {persona.rol}</h6>

                    
                </div>

            ))}

        </div>
    )
}

export default ListadoHecho