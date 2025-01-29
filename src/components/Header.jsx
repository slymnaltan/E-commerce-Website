import React, { useState } from 'react'
import '../css/header.css'
import { FaBasketShopping } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slice/basketSlice';
import { setSearchTerm } from '../redux/slice/productSlice';
const Header = () => {
    const [theme, setTheme] = useState(false);
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const {products}=useSelector((store)=>store.basket)

    const changeTheme = () => {
        const root = document.getElementById("root");

        if (theme) {
            root.style.background = "black";
            root.style.color = "#fff"
        } else {
            root.style.background = "#fff";
            root.style.color = "black"
        }
        setTheme(!theme);
    }

    const handleSearchChange = (e) => {
        dispatch(setSearchTerm(e.target.value)); // Arama terimini store'a gönderin
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row'>
            <img onClick={() => navigate("/")} className='logo' src="./src/images/bargain-bazaar.jpeg" alt="" />
            <h2>BARGAİN BAZAAR</h2>
            </div>

            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Search..' onChange={handleSearchChange} />
                <div >
                    {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
                    <Badge onClick={()=>dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <FaBasketShopping style={{marginRight:'5px'}} className='icon' />
                    </Badge>

                </div>
            </div>
        </div>
    )
}

export default Header