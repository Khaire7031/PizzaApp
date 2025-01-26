// CartIcon.tsx
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Cart from "./Cart";

interface CartIconProps {
    isCartOpen: boolean;
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CartIcon({ isCartOpen, setIsCartOpen }: CartIconProps) {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);

    return (
        <div className="relative">
            {cartItems.length > 0 && (
                <button
                    className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                    onClick={() => setIsCartOpen(true)}
                >
                    <FaShoppingCart className="fixed bottom-2 right-2 text-white" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {cartItems.length}
                    </span>
                </button>
            )}

            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    );
}
