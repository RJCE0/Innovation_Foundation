const prod = {
  API_URL: "https://innovation-drp.herokuapp.com",
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
