import React from 'react';
import Link from 'next/link';

const Header = (): JSX.Element => (
    <header>
        <Link href="/">
            <div className="title">K</div>
        </Link>
        <nav className="nav">
            <Link href="/about">
                <a>About</a>
            </Link>{' '}
            |{' '}
            <Link href="/posts">
                <a>沒東西</a>
            </Link>
        </nav>
    </header>
);

export default Header;
