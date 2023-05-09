import avatar from "../images/avatar_2.png";

export const Avatar: React.FC<{
    next: (e: any) => void;
    prev: (e: any) => void;
}> = ({ next, prev }) => {
    return (
        <div
            id="defaultModal"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
        >
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative bg-white shadow p-16 ">
                    <div className="flex items-center justify-center mb-4">
                        <h2 className="text-2xl text-center center">
                            You are all set!
                            <br />
                            Your avatar is ready!
                        </h2>
                    </div>

                    <div className="flex items-center justify-center">
                        <div>
                            <div className="flex items-center justify-center p-8">
                                <div
                                    className="camera-body border-blue-600 border-8 overflow-hidden flex flex items-center justify-center"
                                    style={{ height: 530 }}
                                >
                                    <img
                                        src={avatar}
                                        style={{ height: "100%" }}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center mt-2">
                                <button
                                    className="bg-gray-900 h-8 w-96 text-white"
                                    onClick={prev}
                                >
                                    Re-create avatar
                                </button>
                            </div>
                            <div className="flex items-center justify-center mt-2">
                                or
                            </div>
                            <div className="flex items-center justify-center mt-2">
                                <button
                                    className="bg-gray-900 h-8 w-96 text-white"
                                    onClick={next}
                                >
                                    Start shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
