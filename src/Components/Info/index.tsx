import React from "react";
import { Link } from "react-router-dom";

import "./Info.scss";

const Info = () => {
  return (
    <div className="Info">
      <div className="Info__title">
        <div>
          <span>Найсалатніша </span>
          доставка у будь-який куточок Львова та передмістя
          <Link to='/about'>детальніше</Link>
        </div>
        
      </div>
      <div className="Info__banner">
        <img
          src="https://www.tomatina.ua/wp-content/uploads/2020/10/xbanner_one.jpg.pagespeed.ic.bt-MTZX5l1.webp"
          alt=""
          data-pagespeed-url-hash="923886048"
        />
      </div>
    </div>
  );
};

export default Info;
