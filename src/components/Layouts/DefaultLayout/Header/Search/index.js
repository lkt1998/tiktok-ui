import { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind'

import * as searchService from '~/apiServices/searchService'
import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/components/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [value, setValue] = useState('');
    const [search, setSearch] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // UseDebounce( delay để khi tìm kiếm ko gọi api)
    const debounce = useDebounce(value, 600)



    useEffect(() => {
        if (!debounce.trim()) {
            setSearch([])
            return;
        };
        setLoading(true);

        const fetchApi = async () => {
            const result = await searchService.search(debounce);

            setSearch(result);

            setLoading(false);
        }
        fetchApi();

    }, [debounce]);

    const inputRef = useRef()

    const handleHideSearch = () => {
        setShowResult(false);
    }

    const handleClearSearch = () => {
        setValue('');
        setSearch([])
        inputRef.current.focus();

    }
    const handleSubmit = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setValue(searchValue)
        }
    }

    return (
        // Use <div> tag around Tippy to avoid warning
        <div>
            <Tippy
                interactive
                onClickOutside={handleHideSearch}
                visible={showResult && search.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            {search.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder='Search accounts and videos'
                        value={value}
                        onChange={handleSubmit}
                        onFocus={() => setShowResult(true)}
                        spellCheck={false}
                    />
                    {!!value && !loading && (
                        <button className={cx('clear')} onClick={handleClearSearch}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
