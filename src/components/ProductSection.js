import React, { Component } from 'react';

class ProductSection extends Component {
    render() {
        return (
            <div>
                <section id="product">
                    <div data-aos="fade-in"className="section-title">
                        <h1>Lorem Ipsum Dolor Lorem Ipsum Dolor Amet.</h1>
                    </div>
                    <div id="product-details">
                        <div id="product-img" data-aos="flip-left">
                            <img src={require("../images/product.png")} alt="ziplyne-product"/>
                        </div>
                        <div id="about-product">
                            <div id="diamond" data-aos="zoom-in">
                                <img src={require("../images/diamond.png")} alt=""/>
                                <p data-aos="fade-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="banner">

                    </div>
                </section>
                
            </div>
        );
    }
}

export default ProductSection;