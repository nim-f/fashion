import avatar from "../images/try_on.png";

export const TryOn: React.FC<{
    next: (e: any) => void;
}> = ({ next }) => {
    return (
        <div
            id="defaultModal"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
        >
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative bg-white shadow p-16 ">
                    <div className="flex items-center justify-center">
                        <div>
                            <div className="flex items-center justify-center p-8">
                                <div className="overflow-hidden">
                                    <img src={avatar} alt="" />
                                </div>
                            </div>

                            <div className="flex items-center justify-center mt-2">
                                <button
                                    className="bg-gray-900 h-[48px] w-full text-white"
                                    onClick={next}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
