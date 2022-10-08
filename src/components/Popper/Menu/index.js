import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';


const cx = classNames.bind(styles)
function Menu({ children, items = [] }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderMenu = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children

            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children]);
                }
            }} />
        })
    }
    return (
        <Tippy
            delay={[0, 500]}
            offset={[16, 5]}
            placement='bottom-end'
            interactive
            hideOnClick={false}
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && <Header title='Language' onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}
                        <div className={cx('menu-body')}>{renderMenu()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHidden={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;