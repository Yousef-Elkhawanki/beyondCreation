const Button = ({ text, customClass, type, children, onClick, disabled }) => {
  return (
    <button
      className={`button-container ${customClass && customClass} ${
        disabled && "disabled"
      }`}
      type={type && type}
      onClick={() => {
        onClick && onClick();
        //  window.scroll(0, 0)
      }}
      disabled={disabled}
    >
      <span className="bold">{text}</span>
      {children}
    </button>
  );
};

export default Button;
