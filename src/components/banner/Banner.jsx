import "./banner.css";

const Banner = () => {
  return (
    <div className="banner space-parent">
      <img className="banner-img" src="./assets/header_img.png" alt="" />

      <div className="banner-text space-children">
        <h1 className="banner-heading">
          Order your <br /> favourite food here.
        </h1>
        <p className="desc hidden-sm">
          Choose a diverse menu featuring a delectable array of dishes crafted
          with te finest ingredient and culinary expetise. Our mission is to
          satisfy your craving and elevate your dining experience, one delicious
          meal at a time.
        </p>

        <button className="btn btn-small">View Menu</button>
      </div>
    </div>
  );
};

export default Banner;
