import React, { Suspense } from "react"
import Lottie from "lottie-react"
import Loader from "./Loader"

const DisplayLottie = ({ animationData }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    }

    return (
        <Suspense fallback={<Loader />}>
            <Lottie
                animationData={defaultOptions.animationData}
                loop={defaultOptions.loop}
            />
        </Suspense>
    )
}

export default DisplayLottie