import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from './navbar.module.css'

import {link_what} from './database/data_img';

export default class Navigation extends Component {
    render() {
        const class_name = style.link + ' nav-link active text-center'
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
                <div className="container">
                    <Link className="navbar-brand" to='/'>
                        <img src="https://i.ibb.co/NYSzVtS/logo.png" className={style.logo + " align-middle"} alt="Logo Marca" />
                        DHD Catálogo
                    </Link>
                    <a href={link_what} target='_blank'><div className="btn btn-success fw-bold">Whatsapp</div></a>
                </div>
            </nav>
        );
    }
}