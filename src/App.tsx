import React, { useState } from "react";
import left from "./images/left_2.png";
import right from "./images/right_top.png";
import right2 from "./images/right_btm.png";
import "./App.css";
import { SignIn } from "./components/SignIn";
import { SelfieModal } from "./components/Selfie";
import { BodyModal } from "./components/Body";
import { Avatar } from "./components/Avatar";
import { TryOn } from "./components/TryOn";

function App() {
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSelfieOpen, setIsSelfieOpen] = useState(false);
    const [isBodyOpen, setIsBodyOpen] = useState(false);
    const [isAvatarOpen, setIsAvatarOpen] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isTryOnOpen, setIsTryOnOpen] = useState(false);

    const openSignIn = (e: any) => {
        e.preventDefault();
        setIsSignInOpen(true);
    };
    const openSelfie = (e: any) => {
        e.preventDefault();
        setIsSignInOpen(false);
        setIsAvatarOpen(false);
        setIsSelfieOpen(true);
    };
    const openBody = (e: any) => {
        e.preventDefault();
        setIsSelfieOpen(false);
        setIsBodyOpen(true);
    };
    const openAvatar = (e: any) => {
        e.preventDefault();
        setIsBodyOpen(false);
        setIsAvatarOpen(true);
    };

    const closeAvatar = (e: any) => {
        e.preventDefault();
        setIsAvatarOpen(false);
        setIsSignedIn(true);
    };

    const openTryOn = (e: any) => {
        e.preventDefault();
        setIsTryOnOpen(true);
    };

    const closeTryOn = (e: any) => {
        e.preventDefault();
        setIsTryOnOpen(false);
    };

    return (
        <>
            {isAvatarOpen ? (
                <Avatar next={closeAvatar} prev={openSelfie} />
            ) : null}
            {isBodyOpen ? <BodyModal next={openAvatar} /> : null}
            {isSelfieOpen ? <SelfieModal next={openBody} /> : null}
            {isSignInOpen ? <SignIn next={openSelfie} /> : null}
            {isTryOnOpen ? <TryOn next={closeTryOn} /> : null}
            <div className="tryon flex items-center justify-center mt-8">
                <div className="w-[1024px]">
                    <div className="grid  grid-cols-4 gap-8">
                        <div className="col-span-2">
                            <img src={left} alt="" />
                        </div>
                        <div className="col-span-2">
                            <img src={right} alt="" />
                            {isSignedIn ? (
                                <div className=" mb-4 center text-center">
                                    <div>
                                        <b>OR </b>
                                    </div>

                                    <button
                                        className="bg-gray-900 h-[48px] w-full text-white"
                                        onClick={openTryOn}
                                    >
                                        TRY IT
                                    </button>
                                    <div>on your virtual avatar first!</div>
                                </div>
                            ) : (
                                <div className="mt-4 size-guide-wrapper mb-4">
                                    <b>OR use Virtual TryOn</b>
                                    <p>
                                        <a
                                            href="#"
                                            className="underline"
                                            onClick={openSignIn}
                                        >
                                            Sign in
                                        </a>{" "}
                                        or{" "}
                                        <a
                                            href="#"
                                            className="underline"
                                            onClick={openSignIn}
                                        >
                                            create your avatar
                                        </a>{" "}
                                        to start using our AI driven virtual try
                                        on
                                    </p>
                                </div>
                            )}

                            <img src={right2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
