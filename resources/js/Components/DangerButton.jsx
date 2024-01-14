import PropTypes from "prop-types";

DangerButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["danger", "light-outline", "white-outline"]),
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default function DangerButton({
    type,
    className = "",
    disabled,
    children,
    processing,
    variant = "danger",
    ...props
}) {
    return (
        <button
            {...props}
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
