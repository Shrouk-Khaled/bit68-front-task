import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.mainFooter}>
        <div className={classes.activeTrend}>
          <p>Active Trending</p>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
        </div>
        <div className={classes.aboutUs}>
          <p>About Us</p>
          <p>About Company</p>
          <p>Connect Us</p>
          <p>Our Branches</p>
        </div>
      </div>
      <div className={classes.copyRights}>
        <p>Copyright © 2022 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
