import { FaStar } from "react-icons/fa";
import { Pizza } from "../types/types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function Render({ pizzaData }: { pizzaData: Pizza[] }) {
    const dispatch = useDispatch();

    return (
        <div className="pizza-container lg:px-20 px-4 lg:10px ">
            {pizzaData.map((pizza, index) => (
                <div key={index} className="lg:max-w-[300px] hover:scale-102 transition-transform duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-sm">
                    <img className="rounded-t-lg" src={pizza.img} alt={pizza.name} />
                    <div className="px-5 pb-5">
                        <h3 className="text-xl font-semibold tracking-tight">{pizza.name}</h3>
                        <p>{pizza.description}</p>
                        <div className="flex items-center mt-2.5 mb-5">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className="text-yellow-500" />
                            ))}
                            <span className="ms-3">5.0</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold">${pizza.price}</span>
                            <button
                                onClick={() => dispatch(addToCart(pizza))}
                                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-2.5"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
