import React from 'react';
import Link from 'next/link';

const Header = (): JSX.Element => (
    <header>
        <div className="title">K</div>
        <nav className="nav">
            <Link href="/">
                <a>Home</a>
            </Link>{' '}
            |{' '}
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    </header>
);

export default Header;
