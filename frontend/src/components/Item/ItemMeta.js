import ItemActions from "./ItemActions";
import { Link } from "react-router-dom";
import React from "react";

const ItemMeta = (props) => {
  const item = props.item;
  return (
    <div id="item-meta" className="d-flex flex-row align-items-center pt-2">
      <Link to={"../../placeholder.png"}>
        <img
          id="seller-image"
          src={"../../placeholder.png"}
          alt={"placeholder_image"}
          className="user-pic mr-2"
        />
      </Link>

      <div className="flex-grow-1 d-flex flex-column py-2">
        <Link to={`/@${item.seller.username}`} className="seller">
          {item.seller.username}
        </Link>
        <span className="date">{new Date(item.createdAt).toDateString()}</span>
      </div>

      <ItemActions canModify={props.canModify} item={item} />
    </div>
  );
};

export default ItemMeta;
