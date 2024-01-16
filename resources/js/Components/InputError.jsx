export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-md text-red-600 py-4 ' + className}>
            {message}
        </p>
    ) : null;
}
