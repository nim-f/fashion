import qr from "../images/qr.png";

export const SelfieModal: React.FC<{ next: (e: any) => void }> = ({ next }) => {
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
                            Scan your face using front camera
                        </h2>
                    </div>

                    <div className="flex items-center justify-center">
                        <div>
                            <div className="flex items-center justify-center p-8">
                                <div className="camera border-blue-600 border-8 "></div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div>
                                    or scan QR code below to open it on your
                                    mobile phone
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div>
                                    <img
                                        src={qr}
                                        alt=""
                                        style={{ width: 200 }}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center mt-2">
                                <button
                                    className="bg-gray-900 h-8 w-96 text-white"
                                    onClick={next}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
