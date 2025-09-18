import { FaShoppingCart } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa6";
import { MdOutlineLocalOffer } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";
const Features = () => {
    const features = [
        {
            icon: <FaShoppingCart className="text-red-400 text-4xl" />,
            title: "Free delivery",
            description: "Consectetur adipi elit lorem ipsum dolor sit amet."
        },
        {
            icon: <FaAppStore className="text-red-400 text-4xl" />,
            title: "Quality guarantee",
            description: "Dolor sit amet orem ipsu mcons ectetur adipi elit."
        },
        {
            icon: <MdOutlineLocalOffer className="text-red-400 text-4xl" />,
            title: "Daily offers",
            description: "Amet consectetur adipi elit loreme ipsum dolor sit."
        },
        {
            icon: <GrShieldSecurity  className="text-red-400 text-4xl" />,
            title: "100% secure payment",
            description: "Rem Lopsum dolor sit amet, consectetur adipi elit."
        },
    ]
    return (
        <section className="px-8 py-15">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {
                    features.map((feature,index)=>(
                    <div key={index} className="flex justify-between items-start gap-4">
                        {feature.icon}
                        <div>
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                            <p className="text-gray-500 text-sm">{feature.description}</p>
                        </div>
                    </div>
                    ))
                }
                
            </div>
        </section>
    );
};

export default Features;