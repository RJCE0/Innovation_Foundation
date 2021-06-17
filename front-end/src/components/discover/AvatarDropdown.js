import { Dropdown, DropdownButton } from "react-bootstrap"

/* Returns a dropdown menu component, intended to be rendered when the user
   clicks on their profile picture on the top right of the Navbar. */
const AvatarDropdown = (image_src) => {
    return (
        <DropdownButton
        title={
            <span className="account-span">
              <img
                src={image_src}
                alt="Account image"
              />
            </span>
          }>
                <Dropdown.Item> Profile </Dropdown.Item>
                <Dropdown.Item> My Favourites </Dropdown.Item>
                <Dropdown.Item> Sign Out </Dropdown.Item>
            </DropdownButton>
    );
}

export default AvatarDropdown;