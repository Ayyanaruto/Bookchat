import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";



import { fetch_products } from "../actions";
import { ProductState } from "../actions/types";
import SimpleSlider from "../utilities/SlideShow";
import { RootState } from "../reducers";
import Loading from "../utilities/Loading";
import "../styles/HomePage.css"

interface Props {
  fetch_products(): any;
  products: ProductState;
}

const discount = (price: number, discount: number) => {
  const discountPercentage = discount / 100;
  const discountPrice = price * discountPercentage;
  return discountPrice + "₹ off";
};

const HomePage: (props: Props) => JSX.Element = (props) => {
  const { products } = props.products;
  const { isLoading } = props.products;
  const { error } = props.products;
  const navigate = useNavigate();
  const renderProducts: () => JSX.Element | JSX.Element[] = () => {
    if (isLoading) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else if (error) {
      return <div>{error}</div>;
    } else {
      return products.map((product) => {
        return (
          <div key={product._id} className="grid-card" onClick={()=>navigate(`/products/${product._id}`)}>
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
      });
    }
  };

  useEffect(() => {
    props.fetch_products();
  }, []);

  return (
      <React.Fragment>
        <SimpleSlider/>
        <h1 className="avail_books">Available Books</h1>
        <div className="line"></div>
      <div className="grid">

    {renderProducts()}
  </div>)</React.Fragment>)
}

const mapStateToProps = ({
  product,
}: RootState): { products: ProductState } => {
  return { products: product };
};

export default connect(mapStateToProps, { fetch_products })(HomePage);
