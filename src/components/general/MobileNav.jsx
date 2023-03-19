import classes from "./MobileNav.module.scss";
import { TbMenu2 } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { RiShoppingCartFill } from "react-icons/ri";
import Input from "../ui/Input";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {Offcanvas}  from "react-bootstrap";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const MobileNav = () => {
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const linksData = [
    "Top Deals",
    "Deals of the day",
    "Men",
    "Women",
    "Kids",
    "New",
    "Brands",
    "Sports",
    "Accessories",
    "Sale",
  ];

  const handleClose = () => {
    setShowMenu(false);
  };

  return (
    <div className={classes.mobileNav}>
      <div className={classes.saleNav}>
        <p>White Friday sales up to 70% off</p>
      </div>
      <div className={classes.firstNav}>
        <div>
          <TbMenu2 size={40} onClick={() => setShowMenu(true)} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <BsFillPersonFill size={40} />
          <RiShoppingCartFill size={40} />
        </div>
      </div>
      <div className={classes.search}>
        <Input
          placeholder="Search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          icon={<CiSearch color="var(--primaryColor)" />}
        />
      </div>

      <Offcanvas show={showMenu} onHide={handleClose} placement="end">
        <div
          style={{
            padding: 20,
          }}
        >
          <GrClose size={30} onClick={handleClose}/>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "20px",
            gap: 10,
            border: "1px solid #F7F7F7",
            marginBottom: 20
          }}
        >
          <img src={logo} alt='logo pic'/>
          <p className="p-0 m-0">Store Locator</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {linksData.map((link, index) => {
            return (
              <Link
                to="/"
                style={{
                  padding: "10px 20px",
                  textDecoration: "none",
                  color: index === linksData?.length - 1 ? "var(--yellowColor" : "var(--blackColor)",
                }}
                key={index}
              >
                {link}
              </Link>
            );
          })}

          <p style={{
            color: "var(--blueColor)",
            paddingTop: 50,
            padding: 20
          }}>العربية</p>
        </div>
      </Offcanvas>
    </div>
  );
};

export default MobileNav;
