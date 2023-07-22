import React from "react";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    cloudinary?: any;
  }
}

type Props = {
  handleImageUpload: (image: string,imageId:string) => void;
};
const UploadWidget = (props:Props) => {
const cloudianryWidget = useRef();
  const widgetRef = useRef<Window>();

  useEffect(() =>{
    
    cloudianryWidget.current = window.cloudinary 
    widgetRef.current=window.cloudinary.createUploadWidget(
        {
            cloudName: "dcwpxxcd9",
            uploadPreset: "czmulfwq",
            sources: ["local", "url", "camera"],
            multiple: true,
            defaultSource: "local",
            },
            (error: any, result: any) => {
            if (!error && result && result.event === "success") {
                console.log("Done! Here is the image info: ", result.info);
                props.handleImageUpload(result.info.secure_url,result.info.public_id)
            }
            }
        );

  });
 

  return (
    <div>
        <div
        className="upload_widget" 
        style={{ marginLeft: "20px" }}
            onClick={() => widgetRef.current?.open()}
            
        >
            Upload Image
        </div>
    </div>
    );
};

export default UploadWidget;
