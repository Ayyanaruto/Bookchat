import React, { useEffect } from "react";
import { Field } from "react-final-form";
import { connect } from "react-redux";
import _ from "lodash";

import AdminForm from "./AdminForm";
import { fields } from "./formfield";
import AdminField from "./AdminField";
import UploadWidget from "../utilities/UploadWidget";
import { fetch_product,edit_product } from "../../../actions";
import "../../../styles/Forms.css";
import { Product, } from "../../../actions/types";
import { useParams } from "react-router-dom";
import { RootState } from "../../../reducers";
import Loading from "../../../utilities/Loading";

interface values {
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  countInStock: number;
  imageId:string;
}
interface AdminUpdateProductsProps {
  fetch_product: (id: string) => void;
  product: {product:Product,isLoading:boolean,error:string};
  edit_product:any;
}

const AdminUpdateProducts = (props: AdminUpdateProductsProps) => {
  const {product}=props.product;
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    props.fetch_product(id as string);
  }, []);

  const [image, setImage] = React.useState<string>("");
  const[imageId,setImageId]=React.useState<string>("")


  const renderFields = () => {
    if (!fields) {
      return <div><Loading/></div>;
    }
    return fields.map((field, index) => {
      return (
        <Field
          type={field.type}
          name={field.name}
          label={field.label}
          component={AdminField}
          key={index}
          className="input-field"
        />
      );
    });
  };
  const handleImageUpload = (image: string,imageId:string) => {
    if (image) {
      setImage(image);
      setImageId(imageId)
    } else {
      return " Not uploaded";
    }
  };


  if(props.product.error){
      return <div>{props.product.error}</div>
    }else if(props.product.product){
    return(<div className="form">
      <UploadWidget handleImageUpload={handleImageUpload} />
      <AdminForm
        header="Updates Products"
        onSubmit={(values: values) => {
          if(!image){
            values.image=product.image
            values.imageId=product.imageId
          }
          else{
          values.image = image;
          values.imageId=imageId
          }

          props.edit_product(values, id as string);
        }}
        initialValues={{
          name: product.name,
          description: product.description,
          price: product.price,
          discount: product.discount,
          image: product.image,
          countInStock: product.countInStock,

        }}
        validate={validate}
      >
        {renderFields()}
      </AdminForm>
    </div>)}
    else{

      return <div>Loading...</div>
    }
  
}
function validate(values: values) {
  const errors: any = {};
if(values.price<0){
  errors.price="Price cannot be negative"
}
if(values.discount<0){
  errors.discount="Discount cannot be negative"
}
if(values.countInStock<0){
  errors.countInStock="Count in stock cannot be negative"
}
if(values.price<values.discount){
  errors.discount="Discount cannot be greater than price"
}
  _.each(fields, ({ name }) => {
    if (!values[name as keyof values]) {
      errors[name] = `You must provide ${name}`;
    }
  });

  return errors;
}
const mapStateToProps = (state: RootState): { product:any} => {
  return { product: state.product };
};

export default connect(mapStateToProps, { fetch_product,edit_product })(AdminUpdateProducts);
