import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <ul>

            <Link to="/">Home</Link>
            <Link to="/following">Following</Link>

        </ul>
    </aside>
}

export default Sidebar;