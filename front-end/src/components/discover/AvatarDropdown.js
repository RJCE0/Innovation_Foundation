import { Dropdown } from "react-bootstrap"

/* Returns a dropdown menu component, intended to be rendered when the user
   clicks on their profile picture on the top right of the Navbar. */
const AvatarDropdown = (image_src) => {
    return (
        <Dropdown title={
            <div>
                <img className="avatar-picture"
                    src={image_src}
                    alt="User picture"
                />
            </div>
        }>
            <Dropdown.Menu>
                <Dropdown.Item> Profile </Dropdown.Item>
                <Dropdown.Item> My Favourites </Dropdown.Item>
                <Dropdown.Item> Sign Out </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default AvatarDropdown;