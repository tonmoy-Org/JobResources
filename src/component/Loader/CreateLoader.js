import { getShoppingCart } from "../../utilities/fakedb";


const cartProductLoader = async () => {
    const loadedProducts = await fetch('feature.json');
    const jobs = await loadedProducts.json();
    const saveCart = [];
    const storedCart = getShoppingCart();
    
    for(const id in storedCart){
       
        const addedProduct = jobs.find(pd => id === id);
    
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }

    return saveCart;
}
export default cartProductLoader ;