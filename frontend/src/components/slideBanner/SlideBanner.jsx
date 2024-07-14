import "./slideBanner.css";

const SlideBanner = () => {
  return (
    <div className="slide-banner">
      <div className="slide-banner__content margin-space">
        <h1 className="slide-banner__title">Order your favourite food here</h1>
        <p className="slide-banner__desc">
          Choose from a diverse menu featuring a delectable array of crafted
          with the finest ingredient and culinary expertise. Our mission is to
          satisfy your craving and elevate your dining experience, one delicious
          meal at a time.
        </p>
        <button className="btn btn--secondary">View Menu</button>
      </div>
    </div>
  );
};

export default SlideBanner;
