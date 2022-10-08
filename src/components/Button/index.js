import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, primary = false, text = false, rounded = false, outline = false, className, small = false, large = false, lefiIcon, onClick, children, ...passprops }) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        [className]: className
    });
    const props = {
        onClick,
        passprops
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    return (
        <Comp className={classes} {...props}>
            {lefiIcon && <span className={cx('icon')}>{lefiIcon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;