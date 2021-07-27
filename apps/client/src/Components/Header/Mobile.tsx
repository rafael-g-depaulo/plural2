import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Header/plural2_logo2.png';
import './Mobile.css';

const Img = styled.img `
  margin-top: 60px;
  width: 200px;
  height: 105px;
  object-fit: contain;
`;

const Mobile = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);  
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar" id="header">
			<div onClick={handleClick} className="nav-icon" id="menuOpen">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<Img src={logo}/>
			<ul className={open ? 'nav-links active' : 'nav-links'} id="menu">
				<li className="nav-item">
					<Link to="/home" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/programacao" className="nav-link" onClick={closeMenu}>
						Programação
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/transmissao" className="nav-link" onClick={closeMenu}>
						Transmissão do Festival
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/fotografias" className="nav-link" onClick={closeMenu}>
						Mostra de Fotografia
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/ficha" className="nav-link" onClick={closeMenu}>
						Ficha Técnica
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contatos" className="nav-link" onClick={closeMenu}>
						Mapeamento e Contatos
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Mobile;
