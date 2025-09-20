
import bgImg from '../../../assets/banner-image-bg-1.jpg';
import banerImage from '../../../assets/banner-image3.png';
import DiscountTimer from './DiscountTimer';
const DiscountSection = () => {
    return (
        <section className="w-full h-[600px] flex  justify-center items-center bg-cover bg-center "style={{backgroundImage:`url(${bgImg})`}} >
        <div className="container w-full flex flex-col md:flex-row justify-center items-center">
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img className="max-w-md md:w-full rounded-lg"
                src={banerImage} 
                alt="Book Image" />
            </div>  
            
            {/* Right Content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">30% Discount On All Items. Hurry UP!!</h1>
            {/* CountDown */}
                <DiscountTimer/>
                <button className="btn btn-secondary btn- px-6 py-6 rounded-full shadow-md">Shop Collection</button>
            </div>    
        </div>
        </section>
    );
};

export default DiscountSection;