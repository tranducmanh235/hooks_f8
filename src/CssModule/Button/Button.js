import styles from "./Button.module.scss";

import clsx from "clsx";

// classnames
// clsx

function Button({ primary, disabled }) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        "d-flex": false,
        [styles.disabled]: disabled,
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
