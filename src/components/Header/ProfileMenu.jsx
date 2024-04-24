import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./styles.css";
import Modal from "../Modal/Modal";
import RegisterModal from "../Modal/RegisterModal";
import CardModal from "../Modal/CardModal";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isCardModal, setIsCardModal] = React.useState(false);
  const [isRegModalOpen, setRegModalOpen] = React.useState(false);
  const openRegModal = () => {
    setRegModalOpen(true);
  };
  const openCardModal = () => {
    setIsCardModal(true);
  };
  const closeRegModal = () => {
    setRegModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
      >
        <MenuRoundedIcon />
        <AccountCircleRoundedIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            minWidth: "200px",
            borderRadius: "1rem",
            boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
          },
        }}
      >
        <MenuItem onClick={openModal} className="menu-items">
          Signup
        </MenuItem>
        <MenuItem onClick={openRegModal} className="menu-items">
          Login
        </MenuItem>
        <MenuItem onClick={openCardModal} className="menu-items">
          Add cart
        </MenuItem>
      </Menu>
      {isRegModalOpen && <Modal closeModal={closeModal} />}{" "}
      {isModalOpen && <RegisterModal closeModal={closeModal} />}
      {isCardModal && <CardModal closeModal={closeModal} />}
      {""}
    </div>
  );
}
