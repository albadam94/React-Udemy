const Paciente=()=>{

    const{nombre,propietario,email,fecha,sintomas}=paciente;

    return(
        <div className="m-1 bg-white shadow-md px-3 py-9 mb-5 ml-2 mr-3 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{""}
        <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{""}
        <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email:{""}
        <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:{""}
        <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{""}
        <span className="font-normal normal-case">{sintomas}</span> 
        </p>
    </div>
    )
}
export default Paciente