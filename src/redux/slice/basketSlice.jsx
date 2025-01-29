import {createSlice} from '@reduxjs/toolkit'

const getBasketFromStorage = () => {
    const basket = localStorage.getItem('basket');
    if (basket) {
      try {
        return JSON.parse(basket);  // Geçerli JSON olup olmadığını kontrol edin
      } catch (error) {
        console.error("Geçersiz JSON formatı:", error);
        return [];  // Geçersiz JSON durumunda varsayılan değer döndürün
      }
    }
    return [];  // `localStorage`'da herhangi bir veri yoksa varsayılan değer döndürün
  };
  

const initialState={
    products:getBasketFromStorage(),
    drawer:false,
    totalAmount:0
}

const writeFromBasketToStorage=(basket)=>{
    localStorage.setItem("basket",JSON.stringify(basket));
}

export const basketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{
        addTobasket:(state,action)=>{
            const findProduct=state.products&&state.products.find((product)=>product.id===action.payload.id);
            if(findProduct){
                const extractedProducts=state.products.filter((product)=>product.id!=action.payload.id);
                findProduct.count+=action.payload.count;
                state.products=[...extractedProducts,findProduct];
                writeFromBasketToStorage(state.products);
            }
            else{
                state.products=[...state.products,action.payload];
                writeFromBasketToStorage(state.products);
            }
        },
        setDrawer:(state)=>{
            state.drawer=!state.drawer;
        },
        calculateBasket:(state)=>{
            state.totalAmount=0;
            state.products&&state.products.map((product)=>{
                state.totalAmount+=(product.price*product.count);
            })
        },
        removeFromBasket: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
            writeFromBasketToStorage(state.products);
        }
    }
})

export const {addTobasket,setDrawer,calculateBasket,removeFromBasket}=basketSlice.actions
export default basketSlice.reducer