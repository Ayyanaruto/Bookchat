import React, { useEffect } from "react";
import { Field } from "react-final-form";
import { connect } from "react-redux";
import _, { set } from "lodash";

import AdminForm from "./AdminForm";
import { fields } from "./formfield";
import AdminField from "./AdminField";
import UploadWidget from "../utilities/UploadWidget";
import { create_product } from "../../../actions";
import "../../../styles/Forms.css";


interface AdminProductsProps{
  create_product:Function
  
}
interface values {
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  imageId:string;
  countInStock: number;
}



const AdminProducts=(props:AdminProductsProps)=>{
  const [image,setImage]=React.useState<string>("")
  const[imageId,setImageId]=React.useState<string>("")

    const renderFields=()=>{
        if(!fields){
            return <div>Loading...</div>
        }
        return fields.map((field,index)=>{
            
           return <Field type={field.type}name={field.name} label={field.label} component={AdminField} key={index} className="input-field"/>
        })

    }
    const handleImageUpload=(image:string,imageId:string)=>{
      if(image){
      setImage(image)
      setImageId(imageId)
    }
      else {
        return " Not uploaded"
      }
    }
    
    return (
      <div className="form">
        <UploadWidget handleImageUpload={handleImageUpload}/>
        <AdminForm
          header="Create Products"
          onSubmit={(values: values) => {
            values.image=image
            values.imageId=imageId
            props.create_product(values);
          }}
          initialValues={{ name: "", price: 0, description: "",image:"",countInStock:0}}
          validate={validate}
        >

          {renderFields()}
        </AdminForm>
      </div>
    );
} 
function validate(values:values) {
  const errors: any = {};

  if (values.price < 0) {
    errors.price = "Price cannot be negative";
  }
  if (values.discount < 0) {
    errors.discount = "Discount cannot be negative";
  }
  if (values.countInStock < 0) {
    errors.countInStock = "Count in stock cannot be negative";
  }
  
  _.each(fields, ({ name }) => {
    if (!values[name as keyof values]) {
      errors[name] = `You must provide ${name}`;
    }
  });

  return errors;
}


export default connect(null,{create_product})(AdminProducts)