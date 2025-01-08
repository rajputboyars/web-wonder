const HeroSection = () => {
    return (
        <section id="#" className="text-center min-h-[70vh] relative">
            <div className="w-full h-full absolute">
                <img src="https://www.beamstacks.com/images/inner_banner_4.jpg" alt="" className="w-full h-[70vh]"/>
            </div>
            <div className="absolute container mx-auto flex flex-col justify-center items-center w-full  h-full px-4">
                <div>
                    <h1 className="text-5xl font-bold text-white mb-4">Custom Software Development</h1>
                    <p className="text-white mb-6">Delivering high-quality, tailor-made solutions to meet your business needs.</p>
                    <a href="#services" className="bg-blue-600 text-white px-6 py-3 w-f rounded hover:bg-blue-700">
                        Explore Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
