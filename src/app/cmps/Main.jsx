'use client'

import React, { useEffect, useState } from "react"
import Greeting from "./Greeting"
import Skills from "./Skills"
import Projects from "./Projects"
import TopButton from "./TopButton"
import Contact from "./Contact"
import SplashScreen from "./SplashScreen"
import { splashScreen } from "../portfolio"
import Header from "./Header"

export default function Main() {
	const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true)

	useEffect(() => {
		if (splashScreen.enabled) {
			const splashTimer = setTimeout(
				() => setIsShowingSplashAnimation(false),
				splashScreen.duration
			)
			return () => {
				clearTimeout(splashTimer)
			}
		}
	}, [])

	return (
		<div className="dark-mode">
			{isShowingSplashAnimation && splashScreen.enabled ? (
				<SplashScreen />
			) : (
				<>
					<Header />
					<Greeting />
					<Skills />
					<Projects />
					<Contact />
					<TopButton />
				</>
			)}
		</div>
	)
}