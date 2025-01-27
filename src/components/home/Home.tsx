// Home.tsx
import { useState } from "react";
import List from "./List";
import Render from "./Render";
import "./Home.scss";
import CartIcon from "./CartIcon";
import Carousel from "./carousel";
import About from "../about/About";

const TABS = {
    PIZZA: "pizzas",
    DESSERT: "desserts",
};

export default function Home({ pizzaSearch }: { pizzaSearch: string }) {
    const [activeTab, setActiveTab] = useState(TABS.PIZZA);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const [visibleCount, setVisibleCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };

    return (
        <div className="py-5" id="tab">
            {!pizzaSearch && <Carousel />}
            <div className="flex justify-start px-5 lg:px-56 space-x-5 mb-5">
                <button
                    onClick={() => setActiveTab(TABS.PIZZA)}
                    className={`px-5 py-2 rounded-lg ${activeTab === TABS.PIZZA ? "bg-blue-700 text-white" : "bg-gray-200"}`}
                >
                    Pizza
                </button>
                <button
                    onClick={() => setActiveTab(TABS.DESSERT)}
                    className={`px-5 py-2 rounded-lg ${activeTab === TABS.DESSERT ? "bg-blue-700 text-white" : "bg-gray-200"}`}
                >
                    Dessert
                </button>
            </div>

            <List endpoint={activeTab} searchQuery={pizzaSearch} visibleCount={visibleCount} render={(pizzaData) => <Render pizzaData={pizzaData} />} />

            {
                !pizzaSearch && <div className="text-center mt-5">
                    <button
                        onClick={handleLoadMore}
                        className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Load More
                    </button>
                </div>
            }

            {/* Use the CartIcon component */}
            <CartIcon isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
            <div id="about-section" className="py-6">
                <About />
            </div>
        </div>
    );
}
