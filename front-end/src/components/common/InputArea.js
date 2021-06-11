import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputArea = ({ name, placeholder, value, error, onChange, styles }) => {
  return (
    <div>
      <textarea
        className="inputContainer text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        style={styles ? styles : null}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputArea.defaultProps = {
  type: "text",
};

export default InputArea;
