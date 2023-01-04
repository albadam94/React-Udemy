import {useState, useEffect }from 'react'
import{ CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto ={gastos, presupuesto} =({

    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,

}) => {

    const [disponible, setDisponible] = useState(0)
    const[ gastado, setGastado] = useState(0)

    useEffect(() => {
        
            const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
            const totalDisponible = presupuesto - totalGastado
            const [porcentaje, setPorcentaje] = useState(0)

            const nuevoPorcentaje = (((presupuesto-totalDisponible)/ presupuesto)*100).toFixed(2)
            setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
            }, 1500);
        }, [gastos])
           
            setDisponible(totalDisponible)
            setGastado(totalGastado)
   

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString
        ('es-US', {style: 'currency', currency: 'USD'})
    }

    const handleResetApp = () => {
        const resultado = window.confirm('¿Estas seguro de reiniciar la app?')
        if (resultado) {
            setGastos([])
            setPresupuesto(0)
        }
        setGastos([])
        setPresupuesto(0)
    }

    return(
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: '#3B82F6',
                })}
                value={porcentaje}
                text={`${porcentaje}%"Gastado"`}
                
                />
            </div>

            <div className="contenido-presupuesto">
                <button className='reset-app'
                type='button' 
                 onClick={handleResetApp}>
                 </button>
            <p>
                <span>Presupuesto:</span>{formatearCantidad(presupuesto)}
                
            </p>
            <p className={`${disponible < 0 ? 'negativo': ' ' }`}>
                <span>Disponible:</span>{formatearCantidad(disponible)}
                
            </p>
            <p>
                <span>Gastado:</span>{formatearCantidad(gastado)}
                
            </p>
            </div>
    
            </div>

    )
}

export default ControlPresupuesto