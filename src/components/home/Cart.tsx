import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart } from '../redux/cartSlice';
import { MdDelete } from "react-icons/md";

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckOut = () => {
        alert("Checkout")
    }

    return (
        <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
            {/* Cart Header */}
            <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
                <h2 className="text-lg font-bold">Your Cart</h2>
                <FaTimes className="text-2xl cursor-pointer" onClick={onClose} />
            </div>

            {/* Cart Items */}
            <div className="p-4 overflow-y-auto h-[calc(100%-110px)]">
                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-600 mt-10">Your cart is empty.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-2 border-b border-gray-300">
                            <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                            <div className="flex flex-row items-center justify-between w-full">
                                <div>
                                    <h4 className="text-lg font-semibold">{item.name}</h4>
                                    <p className="text-gray-600">${item.price} x {item.quantity}</p>
                                </div>
                                <button
                                    onClick={() => dispatch(removeFromCart(item.name))}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <MdDelete className="h-7 w-7" />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Total Price and Checkout Button */}
            <div className="p-4 bg-gray-100 border-t mb-10 border-gray-300 flex justify-between items-center">
                <h3 className="text-lg font-semibold">Total:</h3>
                <span className="text-xl font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
                <button onClick={handleCheckOut} className="text-lg bg-green-500 text-white px-2 border rounded-lg  font-semibold">Checkout</button>
            </div>
        </div>
    );
}
