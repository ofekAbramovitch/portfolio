'use client'

import React, { useEffect, useState } from "react"
import Greeting from "./Greeting"
import Skills from "./Skills"
import StartupProject from "./Projects"
import ScrollToTopButton from "./topbutton/Top"
import Profile from "./profile/Profile"
import SplashScreen from "./splashScreen/SplashScreen"
import { splashScreen } from "../portfolio"
import "./Main.scss"
import Header from "./Header"

export default function Main() {
	const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
		useState(true)

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
					<StartupProject />
					<Profile />
					<ScrollToTopButton />
				</>
			)}
		</div>
	)
}