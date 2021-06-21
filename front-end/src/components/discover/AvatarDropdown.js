import { Dropdown, DropdownButton } from "react-bootstrap";
import userImg from "../../img/user.png";
import "./AvatarDropdown.css";
import { Link } from "react-router-dom";
/* Returns a dropdown menu component, intended to be rendered when the user
   clicks on their profile picture on the top right of the Navbar. */
const AvatarDropdown = () => {
  return (
    <DropdownButton
      id="account-span"
      title={
        <span>
          <img
            src={userImg}
            alt="Account image"
            width="40px"
            height="40px"
            style={{
              marginRight: "20px",
            }}
          />
        </span>
      }
    >
      <Dropdown.Item as="button">
        {" "}
        <Link to="/favourites"> My Profile </Link>{" "}
      </Dropdown.Item>
      <Dropdown.Item as="button">
        {" "}
        <Link to="/my-applications"> My Applications </Link>{" "}
      </Dropdown.Item>
      <Dropdown.Item as="button">
        {" "}
        <Link to="/favourites"> My Favourites </Link>{" "}
      </Dropdown.Item>
      <Dropdown.Item as="button">
        {" "}
        <Link to="/"> Sign Out </Link>{" "}
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default AvatarDropdown;
