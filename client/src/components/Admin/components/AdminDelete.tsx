import React, { useEffect } from "react";
import ConfirmationModal from "../../../utilities/ConfirmationModal";
import { useNavigate, useParams } from "react-router-dom";

import { fetch_product,delete_product } from "../../../actions";
import { connect } from "react-redux";
import { RootState } from "../../../reducers";
import { ProductState } from "../../../actions/types";
import Loading from "../../../utilities/Loading";

interface Props {
  fetch_product(id: string): void;
  delete_product(id: string,imageId:string): void;
  product: any
}

const AdminDelete: (props: Props) => JSX.Element = (props) => {
  const { id } = useParams<{ id: string }>();
  const { product } = props.product;
  const { isLoading } = props.product;
  const { error } = props.product;

  const handleCancel = () => {
    navigate("/admin/products");
    };
    const handleConfirm = () => {
    props.delete_product(id as string,product.imageId);
    navigate("/admin/products");
    };

  useEffect(() => {
    props.fetch_product(id as string);
  }, []);
  const navigate = useNavigate();
  if (isLoading) {
    return <div><Loading/></div>;
  } else if (error) {
    return <div>{error}</div>;
  } else if (product) {
    return (
      <div>
        <ConfirmationModal
          title="Delete Product"
          subtitle={`Are you sure you want to delete this ${product.name} ?`}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      </div>
    );
  } else {
    return <div>Product not found</div>;
  }
};
const mapStateToProps = (state: RootState): { product: ProductState } => {
  return {
    product: state.product,
  };
};

export default connect(mapStateToProps, { fetch_product,delete_product })(AdminDelete);
