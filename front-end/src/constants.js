import { FaPlusSquare } from "react-icons/fa";

const prod = {
  API_URL: "https://innovation-server.herokuapp.com",
};

const dev = {
  API_URL: "https://innovation-server.herokuapp.com",
};

const local = {
  API_URL: "http://localhost:5000",
};

function getConfig() {
  if (process.env.REACT_APP_NODE_ENV === "production") {
    return prod;
  } else if (process.env.REACT_APP_NODE_ENV === "development") {
    return dev;
  } else {
    return local;
  }
}

export const config = getConfig();

export const optionsSortBy = [
  { label: "Sort By", value: 0 },
  { label: "Most Recently Posted", value: 1 },
  { label: "Most Popular", value: 2 },
  { label: "Start Date", value: 3 },
];

export const StudentSideNavOptions = [
  { text: "Home", dest: "/discover" },
  { text: "Internships", dest: "/internships" },
  { text: "Mentorships", dest: "/mentorships" },
  { text: "Student Blog", dest: "/student-blog" },
];

export const BusinessSideNavOptions = [
  { text: "Home", dest: "/business-home" },
  { text: "Posted", dest: "/posted" },
  { text: "Review", dest: "/review" },
  {
    text: (
      <div style={{ display: "flex", gap: "10px" }}>
        New
        <FaPlusSquare fontSize="1.5em" />{" "}
      </div>
    ),
    dest: "/new-opportunity",
  },
];

export const StudentSideLinks = [
  { text: "My Profile", dest: "/favourites" },
  { text: "My Applications", dest: "/my-applications" },
  { text: "My Favourites", dest: "/favourites" },
];

export const BusinessSideLinks = [
  { text: "My Profile", dest: "/my-profile" },
  { text: "Analytics", dest: "/analytics" },
];
