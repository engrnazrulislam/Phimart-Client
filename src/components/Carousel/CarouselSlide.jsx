
import bgImg from '../../assets/banner-image-bg.jpg';
const CarouselSlide = ({title, subtitle, image}) => {
    return (
        <section className="w-full h-[650px] flex  justify-center items-center bg-cover bg-center px-4 md:px-8"style={{backgroundImage:`url(${bgImg})`}} >
        <div className="max-w-6xl flex flex-col md:flex-row justify-center items-center">
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">{title}</h1>
                <p className=" text-gray-600 my-4">{subtitle}</p>
                <button className="btn btn-secondary btn- px-6 py-6 rounded-full shadow-md">Shop Collection</button>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img className="max-w-full md:max-w-md drop-shadow-lg"src={image} alt="" />
            </div>         
        </div>
        </section>
    );
};

export default CarouselSlide;