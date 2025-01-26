import { useState, useEffect } from "react";

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://elements-resized.envatousercontent.com/elements-cover-images/6df374bc-e288-453f-9b05-02eaca1b7e0b?w=1200&h=630&cf_fit=crop&q=85&format=jpeg&s=b3fbb8d6d04a86a08724e2a94fce7a429b355f4fce990b7e59a82422f3202828",
        "https://static.vecteezy.com/system/resources/previews/035/812/678/non_2x/ai-generated-cream-table-dessert-food-photo.jpg",
        "https://garfunkels.co.zw/wp-content/uploads/2016/04/1604-garfunkels-pizza-slider.jpg",
        "https://images.pexels.com/photos/5175513/pexels-photo-5175513.jpeg?cs=srgb&dl=pexels-shameel-mukkath-3421394-5175513.jpg&fm=jpg",
        "https://static.vecteezy.com/system/resources/previews/035/985/777/non_2x/ai-generated-tcookie-plate-dessert-food-photo.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div id="default-carousel" className="relative w-full lg:px-10 mb-5" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((img, index) => (
                    <div key={index} className={`duration-700 ease-in-out absolute w-full h-full transition-opacity ${currentIndex === index ? "opacity-100" : "opacity-0"}`} data-carousel-item>
                        <img src={img} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
