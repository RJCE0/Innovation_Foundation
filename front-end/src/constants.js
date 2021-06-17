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
  { label: "Select Option", value: 0 },
  { label: "Most Recently Posted", value: 1 },
  { label: "Most Popular", value: 2 },
  { label: "Start Date", value: 3 },
];
