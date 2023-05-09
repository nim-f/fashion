export const SignIn: React.FC<{ next: (e: any) => void }> = ({ next }) => {
    return (
        <div
            id="defaultModal"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
        >
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative bg-white shadow p-16 ">
                    <div className="flex items-center justify-center mb-4">
                        <h2 className="text-2xl center">
                            Enter your email and password
                        </h2>
                    </div>

                    <div className="flex items-center justify-center">
                        <div>
                            <div className="mb-2">
                                <label htmlFor="">Email address</label>
                                <div>
                                    <input
                                        type="text"
                                        className="border h-8 w-96"
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">Password</label>
                                <div>
                                    <input
                                        type="text"
                                        className="border h-8 w-96"
                                    />
                                </div>{" "}
                            </div>
                            <div className="mb-2">
                                <button
                                    className="bg-gray-900 h-8 w-96 text-white"
                                    onClick={next}
                                >
                                    Continue
                                </button>
                            </div>
                            <div className="flex items-center justify-center">
                                <div>or sign in with</div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div>
                                    <button
                                        className="px-4 py-2"
                                        onClick={next}
                                    >
                                        Google
                                    </button>
                                    <button
                                        onClick={next}
                                        className="px-4 py-2"
                                    >
                                        Apple
                                    </button>
                                    <button
                                        onClick={next}
                                        className="px-4 py-2"
                                    >
                                        Facebook
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
