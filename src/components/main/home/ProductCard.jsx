import classes from "./ProductCard.module.scss";

const ProductCard = ({ item }) => {

    return (
    <div className={classes.item}>
      <div className={classes.item_pic}>
        <img src={item.image} alt="featured item pic" className={classes.pic} />
      </div>
      <p
        className={classes.text}
        style={{ fontSize: "13px", color: "#000", fontWeight: "600" }}
      >
        {item.name}
      </p>

      <p
        className={classes.text}
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color:
            item.price_before_sale - item.price_after_sale === 0
              ? "var(--blueColor)"
              : "var(--redColor)",
        }}
      >
        EGP {item.price_after_sale}
        {item.price_before_sale - item.price_after_sale !== 0 && (
          <span style={{ fontSize: "12px" }}>
            {" "}
            Save {item.price_before_sale - item.price_after_sale}{" "}
          </span>
        )}
      </p>
    </div>
  );
};

export default ProductCard;
