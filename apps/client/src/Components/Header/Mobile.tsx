import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Mobile.css';

const Mobile = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);  
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<Link to="/" className="nav-logo">
				Logo
			</Link>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Programação
					</Link>
				</li>
				<li className="nav-item">
					<Link to="" className="nav-link" onClick={closeMenu}>
						Transmissão do Festival
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Mostra de Fotografia
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Ficha Técnica
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Mapeamento e Contatos
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Mobile;
