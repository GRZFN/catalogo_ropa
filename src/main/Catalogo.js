import { data_ropa } from './database/data_img.js';
import style from './Catalogo.module.css';
import Navbar from './Navbar.js';

import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Catalogo() {
    const [categorias, setCategorias] = useState([])
    useEffect(() => { setCategorias(data_ropa.lista_categorias) }, [])

    return (
        <>
        <Navbar/>
        <div className='container'>
            <div className={style.titulo + ' fs-1 fw-bold text-center p-4'}>
                SHEIN
            </div>
            {categorias.map((cate) => (
                <div key={'cat_' + cate.id}>
                    <div className="fs-1 fw-bold mb-2">{cate.detalle}</div>
                    <Categoria lista={cate.lista_productos} pos={cate.id} />
                </div>
            ))}

        </div>
        </>
    );
}

function Categoria(props) {
    const [producto, setProducto] = useState([])
    useEffect(() => { setProducto(props.lista) }, [])

    return (
        <div className={style.tabla + ' row'}>
            {producto.map((data) => (
                <Item
                    pos={props.pos}
                    id={data.id}
                    imagen={data.imagen}
                    talla={data.talla}
                    detalle={data.detalle}
                    precio={data.precio}
                />
            ))}
        </div>
    );
}

function Item(props) {
    return (
        <div className="col-lg-2 col-md-3 col-6 mb-4" key={props.id}>
            <Link className={style.link} to={'/shein$' + props.pos + '$' + props.id}>
                <div className={style.container_img}>
                    <img loading="lazy" className={style.imagen_producto} src={props.imagen} />
                    <div className={style.talla_cont + ' fs-6'}>{props.talla}</div>
                </div>
                <div className={style.container_descripcion}>
                    <div className={style.degrade}></div>
                    <div className={style.descripcion + " fs-6 fw-bolder mt-2"}>{props.detalle}</div>
                </div>
                <div className={style.precio + " fw-bold mt-2"}>Bs. {props.precio} BOB </div>
                <div className={style.button_detalle + " fs-6"}>+ Detalle</div>
            </Link>
        </div >
    );
}

export default Catalogo