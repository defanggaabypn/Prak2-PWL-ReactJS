import React from "react"
import { useLocation, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Home from "./Home"

import Projects from "./Projects"
import Skills from "./Skills"


const AnimatedRoutes = () => {
	const location = useLocation()
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route exact path="/" element={<Home />} />
			
				<Route exact path="/projects" element={<Projects />} />
				<Route exact path="/skills" element={<Skills />} />
			
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
