import React from 'react';
import '../../../css/products/Products.css';
class Products extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <section className='wrapper'>
                <div className='filter-wrapper'>Filter</div>
                <div className='products-wrapper'>
                    {
                        this.props.products.map(product => {
                            return (
                                <div key= {product.id} className= "product-item">
                                    <img src= {product.imageUrl} alt= {product.title} />
                                    <div className='product-desc'>
                                        <p> {product.title}</p>
                                        <p> {product.price}</p>
                                    </div>
                                    <button className='AddToCart' type='button' role= "button"> Add To Cart</button>
                                </div>
                                
                            );
                        })
                    }
                    
                </div>
            </section>
        );
    }

    // componentDidMount(){

    // }

    // componentDidUpdate(){

    // }

    // componentWillUnmount(){

    // }
}


export default Products;