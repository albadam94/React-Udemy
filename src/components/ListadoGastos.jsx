import React from 'react';
import Gasto from './Gasto';

const ListadoGastos =( {gastos, setGastoEditar, eliminarGasto,filtro,gastosFiltrados})=>{
    return (
        <div className="Listado-gastos contenedor">
               
                {filtro ? (
                <>
                <h2>{gastosFiltrados.length? 'gastos'  :  'no hay gastos aun'}</h2>
                {gastosFiltrados.map( gasto=> (
                    <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                    />
                )) }
                </>
                ) : (
                    gastos.map(gasto=>(
                        <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}
                        />
                    ))
                )}
                
        </div>
    )
}

export default ListadoGastos