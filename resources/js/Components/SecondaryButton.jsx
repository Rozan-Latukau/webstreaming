import PropTypes from "prop-types";

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["secondary", 'light-outline', 'white-outline']),
    processing: PropTypes.bool,
    children: PropTypes.node,
}

export default function SecondaryButton({ type = 'button', className = '', disabled, processing, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `rounded-2xl py-[13px] text-center w-full ${processing && 'opacity-30'} btn-${variant}
                ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
