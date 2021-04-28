import React from 'react';
import Link from 'next/link';

const Header = (): JSX.Element => (
    <header>
        <Link href="/">
            <div className="title">K</div>
        </Link>
        <nav className="nav">
            <Link href="/about">
                About
            </Link>{' '}
            |{' '}
            <Link href="/posts">
                沒東西
            </Link>
        </nav>
    </header>
);

export default Header;
