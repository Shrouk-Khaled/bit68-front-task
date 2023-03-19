import classes from "./Input.module.scss";

const Input = ({ placeholder, name, value, onChange, style, icon }) => {
  return (
    <div className={classes.inpuBox}>
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={classes.input}
        style={style}
      />
      {icon && (
        <span>
          {icon}
        </span>
      )}
    </div>
  );
};

export default Input;
