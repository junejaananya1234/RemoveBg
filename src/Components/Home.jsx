import Navbar from "./Navbar";
import HandleUpload from "./HandleUpload";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col min-h-screen w-full items-center">

                <div className="flex w-[80%] items-center justify-center p-4 gap-2">
                    
                </div>
                <div className="flex flex-col items-center mt-4">
                    <p className="text-3xl w-full font-semibold text-slate-600 text-center">
                        Remove Background Image
                    </p>
                    <p className="text-thin text-xl mt-2 text-slate-500 text-center">
                        100% automatically and Free
                    </p>
                </div>
                <div className="w-full flex justify-center mt-4">
                    <HandleUpload />
                </div>
            </div>
        </>
    );
};

export default Home;