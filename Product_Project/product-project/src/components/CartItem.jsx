import { MdDelete } from "react-icons/md";
import React from "react"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
    const dispatch = useDispatch()

    const removeFromCart = () => {
        dispatch(remove(item.id))
        toast.success("Item removed from Cart")
    }

  return (
    <div>
        <div>
            <img src={item.image} alt="" />
        </div>
        <div>
            <h1>{item.title}</h1>
            <h1>{item.decription}</h1>
            <div>
                <p>{item.price}</p>
                <div onClick={removeFromCart}>
                    <MdDelete/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem