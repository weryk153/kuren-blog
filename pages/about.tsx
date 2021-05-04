import React from 'react';
import Link from 'next/link';

const AboutPage = (): JSX.Element => (
    <>
        <h1>About</h1>
        <p>流愛吃屎</p>
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </>
);

export default AboutPage;
