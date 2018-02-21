import React from 'react';

export const FlashMessage = (props) => (
    <div className="flash-error">
        {props.message}
    </div>
)

Error.defaultProps = {
    message: "An error ocurred"
};
