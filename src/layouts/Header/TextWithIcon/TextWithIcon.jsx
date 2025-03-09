import PropTypes from 'prop-types';
import { CreateCx } from '~/utils/cxHelper';
import styles from './TextWidthIcon.module.scss';

const cx = CreateCx(styles);

function TextWithIcon({ className, iconLeft, iconRight, children, ...props }) {
    return (
        <>
            <div className={cx('wrapper')} {...props}>
                {iconLeft && (
                    <span className={cx('icon')} {...props}>
                        {iconLeft}
                    </span>
                )}
                {children}
                {iconRight && (
                    <span className={cx('icon')} {...props}>
                        {iconRight}
                    </span>
                )}
            </div>
        </>
    );
}

TextWithIcon.propTypes = {
    className: PropTypes.string,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    children: PropTypes.node,
};

export default TextWithIcon;
