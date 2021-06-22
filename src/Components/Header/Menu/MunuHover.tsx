import React from "react";
import MenuHeader from "./MenuButtonHover/Index";

import "./MenuHover.scss";

interface MenuHeaderProps {
  url: string;
  text: string;
  path: string;
}

function MenuHover() {
  const menuHeader: MenuHeaderProps[] = [
    {
      url: "https://www.tomatina.ua/wp-content/uploads/2021/02/xyayechnyj_skrembl_z_zapechenym_batatom_ta_bobamy_v_sousi.png.pagespeed.ic.znM7RdsuWK.png",
      text: "СНІДАНКИ",
      path: "/",
    },
    {
      url: "https://www.tomatina.ua/wp-content/uploads/2021/02/xpan-aziya.png.pagespeed.ic.aNvqDpz9o9.png",
      text: "СAЛАТИ ПАСТИ",
      path: "/pasta",
    },
    {
      url: "https://www.tomatina.ua/wp-content/uploads/2021/02/xz-lososem-ta-avokado.png.pagespeed.ic.3wdRQUspKq.png",
      text: "САЛАТИ",
      path: "/salad",
    },
    {
      url: "https://www.tomatina.ua/wp-content/uploads/2021/02/xvega-gryl.png.pagespeed.ic.CuLGsbQema.png",
      text: "ФІТ СЕНДВІЧІ",
      path: "/sandwich",
    },
    {
      url: "https://www.tomatina.ua/wp-content/uploads/2021/02/xtomatnyj-sup-z-sochevyczeyu.png.pagespeed.ic.4Fs9qo2NB5.png",
      text: "СУПИ",
      path: "/soup",
    },
    {
      url: "https://www.tomatina.ua/wp-content/uploads/2021/02/xbluberi-paj.png.pagespeed.ic.Gd7yx7NxAn.png",
      text: "ДЕСЕРТИ",
      path: "/dessert",
    },
    {
      url: "https://www.tomatina.ua/wp-content/uploads/2020/10/xheader_item_six.png.pagespeed.ic.YHDXuPzf2I.png",
      text: "НАПОЇ",
      path: "/drink",
    },
  ];

  return (
    <div className="MenuHover">
      {menuHeader.map((item, index) => {
        return (
          <div key={index}>
            <MenuHeader
              url={item.url}
              text={item.text}
              path={item.path}
            ></MenuHeader>
          </div>
        );
      })}
    </div>
  );
}

export default MenuHover;
