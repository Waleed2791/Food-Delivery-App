import React, { createContext, useState, useEffect } from "react";
import axios from "axios"

export const StoreContext = createContext(null);

const EXPIRY_MS = 30 * 60 * 1000;

const StoreContextProvider = (props) => {

    const [food_list, setFood_list] = useState([]);

    const server_port_url = "http://localhost:4000"

    const get_food_list = async () => {
        const response = await axios.get(`${server_port_url}/api/foodItem/list`)
        setFood_list(response.data.data);
    }

    useEffect(() => {
        get_food_list();
    }, []);

    const [CartItem, setCartItem] = useState(()=>{
        const savedCart = localStorage.getItem('cartItems');
        const savedTime = localStorage.getItem('cartItemsTime');
        if (!savedCart || !savedTime) {
            return {};
        }
        const timePassed = Date.now() - Number(savedTime);
        if (timePassed > EXPIRY_MS) {
            localStorage.removeItem('cartItems');
            localStorage.removeItem('cartItemsTime');
            return {};
        }
        return JSON.parse(savedCart);
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(CartItem));
        localStorage.setItem('cartItemsTime', Date.now().toString());
    }, [CartItem]);


    const add_to_cart = (item_id) => {
        setCartItem(prev => ({
            ...prev, [item_id]: (prev[item_id] || 0) + 1
        }))
    }

    const remove_cart = (item_id) => {
        setCartItem(prev => {
            const newCart = { ...prev };

            if (newCart[item_id] > 1) {
                newCart[item_id] -= 1;
            } else {
                delete newCart[item_id];
            }

            return newCart;
        });
    }

    const TotalCartQuantity = () => {
        let counter = 0
        Object.keys(CartItem).map(()=>{
            counter++;
        })
        return counter;
    }


    const Remove_whole_item_form_cart = (item_id) => {
        setCartItem((prev)=>{
            const getPrevCart = {...prev};
            delete getPrevCart[item_id];
            return getPrevCart;
        })
    }

    const deliveryFee = 2;

    const getGrandTotalAmount = () => {
        let cartAmount = 0;
        Object.entries(CartItem).map(([item_id, qty], index)=>{
            const get_food_item = food_list.find((product)=> {
                return product._id === item_id
            })
            const food_price = get_food_item.price;
            cartAmount += food_price*qty;
        })
        const grandTotal = cartAmount+deliveryFee;
        return {cartAmount, grandTotal};
    }

    const StoreContextValue = {
        server_port_url,
        food_list,
        CartItem,
        add_to_cart,
        remove_cart,
        TotalCartQuantity,
        Remove_whole_item_form_cart,
        getGrandTotalAmount,
        deliveryFee
    }

    return(
        <StoreContext.Provider value={StoreContextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider;