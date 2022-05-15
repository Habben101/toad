import * as React from "react";

function SvgProfile(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM7.5 7a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm4.5 6.5c-5.19 0-9.5 3.752-9.5 8.5h1c0-4.088 3.749-7.5 8.5-7.5 4.751 0 8.5 3.412 8.5 7.5h1c0-4.748-4.31-8.5-9.5-8.5z"
            />
        </svg>
    );
}

export default SvgProfile;
