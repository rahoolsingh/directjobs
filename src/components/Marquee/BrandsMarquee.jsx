import Marquee from "react-fast-marquee";
import brandLogos from "../../assets/brand_logos";
import checkIsMobile from "../../utils/checkIsMobile";

function BrandsMarquee() {
    const isMobile = checkIsMobile();
    return (
        <div className="relative bg-white">
            <div className="relative mx-auto ">
                <div className="text-center">
                    <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        <Marquee
                            className="space-x-2 md:space-x-4 lg:space-x-8"
                            gradient={!isMobile}
                        >
                            {brandLogos?.map((brand, index) => (
                                <img
                                    key={index}
                                    src={brand}
                                    alt={`Brand ${index + 1}`}
                                    className="h-12 md:h-16"
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandsMarquee;
