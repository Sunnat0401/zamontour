import React from "react";

const FavoiteMap = () => {
  return (
    <div className="favorite-map">
        <iframe
          style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box"
          src="https://yandex.ru/maps-reviews-widget/200807924766?comments"
        ></iframe>
    </div>
  );
};

export default FavoiteMap;
