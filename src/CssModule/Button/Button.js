import styles from "./Button.module.css";

import clsx from "clsx";

// classnames
// clsx

function Button({ primary }) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        "d-flex": false,
    });

    return (
        <>
            {/* [styles.btn, styles.active].join(' ') */}
            {/* `${styles.active} ${styles.btn}` */}
            <button className={classes}>Click me!</button>
        </>
    );
}

export default Button;
