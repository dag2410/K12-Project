import PropTypes from "prop-types";

export const InputText = ({ type = "text", name, register = () => ({}), message, placeholder = " " }) => {
  return (
    <div>
      <input className="form-control" type={type} {...register(name)} placeholder={placeholder} />
      {message && <p className="text-danger text-center">{message}</p>}
    </div>
  );
};

InputText.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
  message: PropTypes.string,
  placeholder: PropTypes.string,
};
