import classes from "./Navbar.module.scss";
import logo from "../../assets/images/logo.svg";
import { BsFillPersonFill } from "react-icons/bs";
import { RiShoppingCartFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Input from "../ui/Input";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={classes.navbar}>
      <div className={classes.saleNav}>
        <p>White Friday Sales Up To 70% Off</p>
      </div>
      <div className={classes.firstNav}>
        <div className={classes.logo}>
          <img src={logo} alt="logo pic" />
          <p>Store Locator</p>
        </div>
        <div className={classes.searchBox}>
          <Input
            placeholder="Search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={<CiSearch color="var(--primaryColor)" />}
          />
        </div>
        <div className={classes.details}>
          <p className={classes.lang}>العربية</p>
          <BsFillPersonFill size={20}/>
          <RiShoppingCartFill size={20}/>
        </div>
      </div>
      <div className={classes.secondNav}>
        <p>Top Deals</p>
        <p>Deals of the Day</p>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>New</p>
        <p>Brands</p>
        <p>Sports</p>
        <p>Accessories</p>
        <p>Sale</p>
      </div>
    </div>
  );
};

export default Navbar;
