import { Dropdown, DropdownButton } from "react-bootstrap";
import userImg from "../../img/user.png";
import "./AvatarDropdown.css";
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
      <Dropdown.Item> Profile </Dropdown.Item>
      <Dropdown.Item> My Favourites </Dropdown.Item>
      <Dropdown.Item> Sign Out </Dropdown.Item>
    </DropdownButton>
  );
};

export default AvatarDropdown;
