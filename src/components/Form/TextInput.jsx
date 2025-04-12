import PropTypes from "prop-types";

export const TextInput = ({
  type = "text",
  name,
  register,
  message,
  placeholder = " ",
}) => {
  return (
    <div>
      <input
        className="form-control"
        type={type}
        name={name}
        {...register}
        placeholder={placeholder}
      />
      {message && <p className="text-danger text-center">{message}</p>}
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.ob,
  message: PropTypes.string,
  placeholder: PropTypes.string,
};
