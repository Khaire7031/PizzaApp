
export default function About() {
    return (
        <section className="py-3 relative">
            <div className="flex py-9 items-center justify-center">
                <h1 className="text-3xl text-center">About Us</h1>
            </div>

            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                Savor the Taste of Authentic Pizzas Crafted with Passion
                            </h2>
                            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                Our pizzas are made with love, bringing together fresh ingredients and timeless recipes.
                                Every bite is a celebration of flavors, and we strive to deliver the best pizza experience
                                for every pizza lover. Join us on a journey of taste, tradition, and innovation.
                            </p>
                        </div>
                        <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                            <a href="#tab" className="px-1.5 text-white text-sm font-medium leading-6">
                                Order Now
                            </a>
                        </button>
                    </div>
                    {/* Image Placeholder */}
                    <img
                        className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                        src="https://wallcastle.com/wp-content/uploads/2023/04/9-scaled.jpg"
                        alt="About Us Pizza Image"
                    />
                </div>
            </div>
        </section>
    );
}
