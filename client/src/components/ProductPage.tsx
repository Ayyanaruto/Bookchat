import React, { useEffect, useState,useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { fetch_product, fetch_products } from "../actions";
import { RootState } from "../reducers";
import { ProductState } from "../actions/types";
import CheckoutPage from "./CheckoutPage";
import "../styles/ProductPage.css";
import Loading from "../utilities/Loading";
import history from "../history";

interface Props {
  fetch_product: (id: string) => void;
  fetch_products?: () => void;
  product: any;
}

const ProductPage = (props: Props) => {
  const navigate = useNavigate();
  const { product } = props.product;
  const { products } = props.product;
  const { isLoading } = props.product;
  const { error } = props.product;

  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    props.fetch_product(id as string);
    props.fetch_products!();
  }, []);

  const renderProduct = () => {
    if (error) {
      return <div>{error}</div>;
    } else if (product) {
      return (
        <>
        {showModal ? (
          <CheckoutPage open={showModal} product={product} quantity={quantity} />) : (
          <div>
          <div className="details">
            <div className="big-img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="box">
              <div className="row">
                <h2>{product.name}</h2>
                {product.discount ? (
                  <div className="discount-price">
                    Rs. {product.price - product.discount}{" "}
                    <span className="grid-discount">
                      {" "}
                      <s>Rs{product.price}</s>
                    </span>
                  </div>
                ) : (
                  <span>{product.price}</span>
                )}
              </div>
              <div className="quantity">
                <button
                  className="count"
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="count"
                  onClick={() => {
                    if (quantity < product.countInStock) {
                      setQuantity(quantity + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
              <p>{product.description}</p>
              <button
                className="cart"
                onClick={() => {
                  setshowModal(!showModal);
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="related">
            <div className="title">
              <h2>Related Products</h2>
            </div>
            {products.map((product: any) => {
              return (
                <div
                  key={product._id}
                  className="grid-card"
                  onClick={() => {
                    navigate(`/products/${product._id}`);
                    history.go(0);
                  }}
                >
                  <div className="grid-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="grid-content">
                    <h1 className="grid-header">{product.name}</h1>
                    <div className="grid-price">
                      {product.discount ? (
                        <div className="discount-price">
                          Rs. {product.price - product.discount}{" "}
                          <span className="grid-discount">
                            {" "}
                            <s>Rs{product.price}</s>
                          </span>
                        </div>
                      ) : (
                        <span>{product.price}</span>
                      )}
                    </div>

                    <div className="grid-footer"></div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>)}
        </>
      );
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        renderProduct()
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState): { product: ProductState } => {
  return { product: state.product };
};

export default connect(mapStateToProps, { fetch_product, fetch_products })(
  ProductPage
);
