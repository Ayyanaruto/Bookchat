import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetch_products } from "../../../actions";
import { ProductState } from "../../../actions/types";
import { RootState } from "../../../reducers";
import { Link } from "react-router-dom";
import Loading from "../../../utilities/Loading";


import "../../../styles/Cards.css";
interface AdminProductsDashBoardProps {
  fetch_products: () => void;
  products: ProductState;
}

const AdminProductsDashBoard = (props: AdminProductsDashBoardProps) => {
  const { products } = props.products;
  const { isLoading } = props.products;
  const { error } = props.products;

  const discount=(price:number,discount:number)=>{
  const discountPercentage=discount/100;
  const discountPrice=price*discountPercentage;
  return discountPrice + "₹ off";
  }
  

  const renderProducts = () => {
    if (isLoading) {
      return <div><Loading/></div>;
    }
    if (error) {
      return <div>{error}</div>;
    }
    if (products ) {
      return products.map((product) => {
        return (
          <div key={product._id} className="card">
            <div className="card-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="card-content">
              <h1 className="card-header">{product.name}</h1>
              <p className="card-description">{product.description}</p>

              {product.discount ? (
                <span>
                   <p className="card-price">{product.price-product.discount}₹</p><span className="card-offer">{discount(product.price,product.discount)}</span>
                  <s className="card-original-price">{product.price}₹</s>
                </span>
              ) : (
                <span>{product.price}</span>
              )}

              <div className="card-footer">
                <Link
                  to={`/admin/products/update/${product._id}`}
                  className="card-button" 
                >
                  Edit
                </Link>
                <Link to={`/admin/products/delete/${product._id}`} className="card-button">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  useEffect(() => {
    props.fetch_products();
  }, []);
  return <div className="grid">{renderProducts()}</div>;
};

const mapStateToProps = ({
  product,
}: RootState): { products: ProductState } => {
  return { products: product };
};

export default connect(mapStateToProps, { fetch_products })(
  AdminProductsDashBoard
);
