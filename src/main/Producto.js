import { useParams } from 'react-router-dom';
import { data_ropa } from './database/data_img'
import { useState, useEffect } from "react";
import style from './Producto.module.css';

import  Navbar  from './Navbar';

function Producto() {
    const params = useParams()
    const text = (params.idropa).split('$')
    const producto = (data_ropa.lista_categorias[text[1]]).lista_productos[text[2]]
    return (
        <>
            <Navbar />
            <Imagen
                detalle={producto.detalle}
                talla={producto.talla}
                color={producto.color}
                precio={producto.precio}
                dataimg={producto.dataimg}
            />
        </>
    );
}

function Imagen(props) {
    const [dataimg_, setDataimg] = useState([])
    useEffect(() => { setDataimg(props.dataimg) }, [])

    return (
        <>
            <div className="container p-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="fs-4 fw-bolder lh-sm">{props.detalle}</div>
                        <div className="mt-3">
                            <Color_talla talla={props.talla} color={props.color} />
                            <div className={style.background + " fw-bolder"}>Bs: {props.precio} BOB</div>
                        </div>
                    </div>
                </div>
                <div className="row  mt-4">
                    {dataimg_.map((data) => (
                        <div className="col-6 col-md-4 col-lg-3 mb-4" key={data}>
                            <DataImg key={data} dataimg__={data} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.pie}></div>


        </>
    );
}

function DataImg(props) {
    return (
        <a href={props.dataimg__[1]} target="_blank">
            <img className={style.imagen_referencia_producto} src={props.dataimg__[0]} />
        </a>
    );
}
function Color_talla(props) {
    const [color, setColor] = useState([])
    useEffect(() => { setColor(props.color) }, [])
    const cl = props.color.length
    if (cl > 0) {
        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td className="fw-bold text-center">Talla</td>
                        {color.map((co) => (
                            <td className="text-center">{co[0]}</td>
                        ))}
                    </tr>
                    <tr>
                        <td className="fw-bold text-center">Color</td>
                        {color.map((co) => (
                            <td><div className={style.color_pro} style={{ background: co[1] }}></div></td>
                            // <Color_estado color={co[1]} estado={co[3]} />
                        ))}
                    </tr>
                    <tr>
                        <td></td>
                        {color.map((co) => (
                            <td className="text-center fs-5">{co[2]}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        );
    } else {
        return (
            <div className={style.background + " fw-bolder mb-2"}>Talla: {props.talla}</div>
        );
    }
}

export default Producto