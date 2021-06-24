import React from "react";
import PropTypes from "prop-types";

const Input = ({
  name,
  placeholder,
  value,
  error,
  onChange,
  styles,
  area,
  maxLength,
}) => {
  return (
    <div className="">
      {area ? (
        <textarea
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          style={styles ? styles : null}
          maxLength={maxLength}
        />
      ) : (
        <input
          className="inputContainer text"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          style={styles ? styles : null}
        />
      )}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
