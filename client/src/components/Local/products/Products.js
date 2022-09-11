import React, { useState, useEffect, useContext } from "react";
import "../../../css/products/Products.css";
import ProductModal from "./ProductModal";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { cartContext } from "../../../contexts/cartContext";
import { categoryContext } from "../../../contexts/categoryContext";
import Filter from "../filter/Filter";
import { changeProducts_SortByRate, changeProducts } from '../../../store/action';
import { changeCategory } from '../../../store/action';
import Cart from "../cart/Cart";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products) || [];
  const [productModal, setProductModal] = useState("");
  // const [cartItems, setCartItems] = useContext(cartContext);
  // const [category, setCategory] = useContext(categoryContext); // means get ALL product
  const [cartItems, setCartItems]= useState( JSON.parse(localStorage.getItem("cartItems"))  || []);
  const category= useSelector((state)=> state.category);

  useEffect(() => {
    // console.log(category)
    dispatch(changeProducts(category));
  }, [category]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  

  const closeModal = () => {
    setProductModal(false);
  };

  const addToCart = (newItem) => {
    const cartItemsClone = [...cartItems];
    var isExist = false;
    cartItemsClone.forEach((item) => {
      if (newItem.id === item.id) {
        item.quantity++;
        isExist = true;
      }
    });

    if (!isExist) {
      cartItemsClone.push({ ...newItem, quantity: 1 });
    }
    setCartItems(cartItemsClone);
  };

  const SetCategory = (ev) => {
    dispatch(changeCategory(ev.target.value === "All" ? "/" : `/category/${ev.target.value}`));
  };

  const sortingByRate= (ev)=>{
    dispatch(changeProducts_SortByRate(products, ev.target.value));
  }

  return (
    <>
      <Bounce bottom cascade>
        <section className="row-products-filter">
          <div className="col-Filter">
            <Filter SetCategory= {SetCategory} sortingByRate= {sortingByRate}/>
          </div>
          <div className="products-wrapper">
            {products &&
              products.map((product) => {
                return (
                  <div key={product.id} className="product-item">
                    <img
                      src={product.image}
                      alt={product.title}
                      onClick={() => setProductModal(product)}
                    />
                    <div className="product-desc">
                      <p> {product.title}</p>
                      <p> ${product.price}</p>
                    </div>
                    <p> rating: {product.rating.rate}</p>

                    <button
                      className="AddToCart"
                      onClick={() => addToCart(product)}
                      type="button"
                      role="button"
                    >
                      {" "}
                      Add To Cart
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
        <ProductModal productInfo={productModal} closeModal={closeModal} />
      </Bounce>
      <Cart cartItems={cartItems} setCartItems= {setCartItems}/>
    </>

  );
  
}

// const mapStateToProps = (state) => {
//   return {
//     products: state.products,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProducts: () => dispatch(changeProducts(category)),
//   };
// };



// export default connect(mapStateToProps, mapDispatchToProps)(Products);


export default Products;
