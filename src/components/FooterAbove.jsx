import React from "react";
import "./footerabove.css";

export default function FooterAbove() {
  return (
    <div className="footerabovediv">
      <div className="footeraboverow">

        <div className="footerabovecolumn1 gap-5">
            <div className="info-card_icon">
            <i className="fas fa-phone" aria-hidden="true"></i>
            </div>
            <div className="info-card_content">
            <p className="info-card_text">WhatsApp Number</p>
              <p>+91- 6370 995 573</p>
              
            </div>
        </div>

        <div className="footerabovecolumn2 gap-5 bg-orange-500">
                 <div className="info-card_icon">
                 <i className="fas fa-phone" aria-hidden="true"></i>
            </div>
            <div className="info-card_content">
            <p className="info-card_text">Mobile Number</p>
              <p>+91- 6370 995 573</p>
            </div>
        </div>
        <div className="footerabovecolumn3 gap-5">

             <div className="info-card_icon">
             <i className="fas fa-phone" aria-hidden="true"></i>
            </div>
            <div className="info-card_content">
              <p className="info-card_text">Mobile Number</p>
              <p>+91 9518 379 300</p>
            </div>
        </div>
      </div>
    </div>
  );
}
