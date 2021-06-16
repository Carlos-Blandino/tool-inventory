import React from "react";
import "../../sass/directory.style.scss";
import DirectoryItem from "../directory-item/DirectoryItem";

function Directory() {
  let data = {
    categories: [
      {
        title: "WRENCHES",
        imageUrl:
          "http://www.artwallpaperhi.com/thumbnails/detail/20121018/wrench%20monochrome%20macro%20spanner%204272x2848%20wallpaper_www.artwallpaperhi.com_78.jpg",
        id: 1,
        linkUrl: "shop/wrenches",
      },
      {
        title: "HAMMERS",
        imageUrl: "https://i.ytimg.com/vi/TaVmEn_Bces/maxresdefault.jpg",
        id: 2,
        linkUrl: "shop/hammers",
      },
      {
        title: "SOCKETS",
        imageUrl:
          "http://static.grainger.com/rp/s/is/image/Grainger/12D217_AS01",
        id: 3,
        linkUrl: "shop/sockets",
      },
      {
        title: "PPE",
        imageUrl: "https://www.bu.edu/ehs/files/2010/05/ppe-636x391.jpg",
        size: "large",
        id: 4,
        linkUrl: "shop/ppe",
      },
      {
        title: "RIGGING",
        imageUrl:
          "https://www.unimastershipping.com/store/2018/03/lifting-equipment.png",
        size: "large",
        id: 5,
        linkUrl: "shop/rigging",
      },
    ],
  };

  return (
    <div className="directory-menu">
      {data.categories.map(({ title, imageUrl, id, size }) => (
        <DirectoryItem key={id} title={title} image={imageUrl} size={size} />
      ))}
    </div>
  );
}
export default Directory;
