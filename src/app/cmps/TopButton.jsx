import React from "react"
import { FaHandPointUp } from 'react-icons/fa'

export default function TopButton() {
    function TopEvent() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            document.getElementById("topButton").style.visibility = "visible"
        } else {
            document.getElementById("topButton").style.visibility = "hidden"
        }
    }

    window.onscroll = function () {
        scrollFunction()
    }

    window.onload = function () {
        scrollFunction()
    }

    return (
        <button onClick={TopEvent} id="topButton" title="Go to top">
            <FaHandPointUp aria-hidden="true" />
        </button>
    )
}
