import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';
import Search from '../Search';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="EduFlix logo" />
            </Link>

            <Button as={Link} to="/" className="nav-item nav-link">
                Início
            </Button>

            <Button as={Link} to="/listar" className="nav-item nav-link">
                Listar alunos
            </Button>

            <Search className="nav-item search" />
        </nav>
    );
}

export default Menu;