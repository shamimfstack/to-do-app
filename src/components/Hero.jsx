import heroImg from "../../src/assets/hero-img.png"

const Hero = () => {
    return (
        <section className="pb-[114px] pt-20 mx-auto bg-gray-800">
            <div className="container lg:px-20 mx-auto">
                <div className="grid items-center gap-6 md:grid-cols-2">
                    <div className="flex justify-center md:order-2">
                        <img className="max-md:w-full" src={heroImg} width="326" height="290" alt="frame" />
                    </div>
                    <div className="p-5">
                        <h1 className="md-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">Tasker</h1>
                        <p className="mt-6 leading-6 text-sm text-white">To track your daily task easily, just use out task management application</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;