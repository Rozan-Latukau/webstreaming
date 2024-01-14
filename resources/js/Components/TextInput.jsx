import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import InputError from "./InputError";

const TextInput = forwardRef(
  (
    {
      type = "text",
      name,
      value,
      className = "",
      isFocused = false,
      defaultValue,
      variant = "primary",
      autoComplete,
      required,
      onChange,
      placeholder,
      error, 
      ...props
    },
    ref
  ) => {
    const input = ref ? ref : useRef();

    useEffect(() => {
      if (isFocused) {
        input.current.focus();
      }
    }, [isFocused]);

    return (
      <div className="relative">
        <input
          {...props}
          type={type}
          name={name}
          value={value}
          defaultValue={defaultValue}
          className={
            "rounded-2xl bg-form-bg py-[13px] px-7 w-full" +
            (variant && ` input-${variant}`) +
            (error ? ' border-red-500' : '') + 
            className
          }
          placeholder={placeholder}
          ref={input}
          autoComplete={autoComplete}
          onChange={onChange}
          required={required}
        />
        {error && <InputError message={error} className="absolute bottom-[-20px]" />}
      </div>
    );
  }
);

TextInput.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  isFocused: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string, 
};

export default TextInput;
