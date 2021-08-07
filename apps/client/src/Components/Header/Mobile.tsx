import { NavbarProps } from 'Components/Wireframe';
import React, { FC, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Header/plural2_logo2.png';
import './Mobile.css';

const Img = styled.img `
  margin-top: 60px;
  width: 200px;
  height: 105px;
  object-fit: contain;
`;

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`

const NavLink = styled.span`
	cursor: pointer;
`

const Mobile: FC<NavbarProps> = ({
	onClickContato,
	onClickFicha,
	onClickFotografia,
	onClickHome,
	onClickProgramacao,
	onClickTransmissao,	
}) => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);  
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<Nav className="navbar" id="header">
			<div onClick={handleClick} className="nav-icon" id="menuOpen">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<NavLink className="nav-link" onClick={() => { closeMenu(); onClickHome?.(); }}>
				<Img src={logo}/>
			</NavLink>
			<ul className={open ? 'nav-links active' : 'nav-links'} id="menu">
				<li className="nav-item">
					<NavLink className="nav-link" onClick={() => { closeMenu(); onClickHome?.(); }}>
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" onClick={() => { closeMenu(); onClickProgramacao?.() }}>
						Programação
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" onClick={() => { closeMenu(); onClickTransmissao?.() }}>
						Transmissão do Festival
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" onClick={() => { closeMenu(); onClickFotografia?.() }}>
						Mostra de Fotografia
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" onClick={() => { closeMenu(); onClickFicha?.() }}>
						Ficha Técnica
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" onClick={() => { closeMenu(); onClickContato?.() }}>
						Mapeamento e Contatos
					</NavLink>
				</li>
			</ul>
		</Nav>
	);
};

export default Mobile;
