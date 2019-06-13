import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onButtonDetect})=>{

    return(
      <div>
         <p className="pa2">{"This magic Brain will detect faces in your pictures. Git it a try"}</p>
         <div className="center">
            <div className="center form pa4 br3 shadow-5">
                <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
                <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonDetect}>Detect</button>
            </div>
         </div>
      </div>);
}

export default ImageLinkForm;      