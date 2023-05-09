export const Modal: React.FC<{ children: any }> = ({ children }) => {
    return (
        <div
            id="defaultModal"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
        >
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative bg-white shadow p-16 ">
                    <button></button>
                    {children}
                </div>
            </div>
        </div>
    );
};
