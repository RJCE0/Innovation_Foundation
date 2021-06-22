import { Dropdown, DropdownButton } from "react-bootstrap";
import userImg from "../../img/user.png";
import "./AvatarDropdown.css";
import { Link } from "react-router-dom";
/* Returns a dropdown menu component, intended to be rendered when the user
   clicks on their profile picture on the top right of the Navbar. */
const AvatarDropdown = (props) => {
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
      {props.links.map(({ text, dest }, index) => (
        <Dropdown.Item as="button" key={index}>
          <Link to={dest} key={index}>
            {text}
          </Link>
        </Dropdown.Item>
      ))}
      <Dropdown.Item as="button">
        <a href="/">Sign Out</a>
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default AvatarDropdown;
