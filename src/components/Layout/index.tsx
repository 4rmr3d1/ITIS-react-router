import React from 'react'
import cn from 'classnames'
import {NavLink, Outlet, useLocation } from 'react-router-dom'
import styles from './index.module.css'

const BACKGROUND_COLOR = {
	"/": "red",
	"/contacts": "blue",
	"/secret-page": "green"
} as const;

export const Layout = () => {
	const { pathname } = useLocation()
	
	const backgrondColor = pathname as keyof typeof BACKGROUND_COLOR
	
	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<nav>
					<NavLink to="/" className={({ isActive }) => cn(styles.link, isActive && styles.activeLink)}>Home</NavLink>
					
					<NavLink to="contacts" className={({ isActive }) => cn(styles.link, isActive && styles.activeLink)}>Contacts</NavLink>
				</nav>
			</header>
			
			<main className={cn(styles.main, styles[BACKGROUND_COLOR[backgrondColor]])}>
				<Outlet />
			</main>
			
			<footer className={styles.footer}>this is footer</footer>
		</div>
	)
}
