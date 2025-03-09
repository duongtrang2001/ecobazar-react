import { DropDownIcon, LocationIcon } from '~/components/Icons/Icon';
import { CreateCx } from '~/utils/cxHelper';
import styles from './Header.module.scss';
import TextWithIcon from './TextWithIcon/TextWithIcon';
import { Link } from 'react-router-dom';

const cx = CreateCx(styles);

function Header() {
    return (
        <header>
            <div className={cx('container')}>
                <TextWithIcon>
                    <LocationIcon />
                    <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                </TextWithIcon>
            </div>
            <div className={cx('container')}>
                <TextWithIcon>
                    <span>Eng</span>
                    <span>Eng</span>
                    <DropDownIcon />
                </TextWithIcon>
                <TextWithIcon>
                    <span>USD</span>
                    <DropDownIcon />
                </TextWithIcon>
                <div className="wrapper">
                    {/* <Link to="/login">Sign in</Link>
                    <span>/</span>
                    <Link to="/register">Sign up</Link> */}
                    <span>Sign in</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
