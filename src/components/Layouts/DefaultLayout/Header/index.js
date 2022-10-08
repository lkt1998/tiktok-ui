import { faCoins, faEllipsisVertical, faGears, faKeyboard, faLanguage, faPlus, faQuestionCircle, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HasTippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';

import images from '~/assets/img';
import Button from '~/components/Button';
import { InboxIcon, Message } from '~/components/Icons';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import Search from './Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
        to: '/key'
    },
]
const USER_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/hoaa'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coin',
        to: '/coin'
    },
    {
        icon: <FontAwesomeIcon icon={faGears} />,
        title: 'Settings',
        to: '/settings'
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
]

function Header() {


    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to='/' className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button text lefiIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                            <HasTippy
                                delay={[0, 100]}
                                content='Message'>
                                <button className={cx('action-btn')}>
                                    <Message />
                                </button>
                            </HasTippy>
                            <HasTippy
                                delay={[0, 100]}
                                content='Inbox'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </HasTippy>
                        </>
                    ) : (
                        <>
                            <Button text lefiIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? USER_ITEMS : MENU_ITEMS}
                    >
                        {currentUser ? (
                            <img className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/59c584732ddefa00fafa2c21dd967207~c5_100x100.jpeg?x-expires=1665284400&amp;x-signature=puWmyZ%2FHVyLyxiSmGNJYnsZpx%2FI%3D" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header >
    )

}

export default Header;