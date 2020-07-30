import React from 'react';

function ButtonLink(props) {
    return (
        <a href={props.href} className={props.className} alt="">
            {props.children}
        </a>
    );
}

export default ButtonLink;