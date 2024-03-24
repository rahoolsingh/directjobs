import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PrimaryButton(props) {
    return (
        <Link
            className={`${props.className} bg-[color:var(--primary-color)] hover:bg-[color:var(--hover-btn-color)] px-8 py-2 font-medium text-white rounded-md transition-colors delay-75 ease-in-out`}
            {...props}
        >
            {props.children}
        </Link>
    );
}

export default PrimaryButton;

PrimaryButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
