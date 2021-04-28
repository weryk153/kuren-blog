import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const AboutPage = (): JSX.Element => (
    <Layout>
        <h1>About</h1>
        <p>流愛吃屎</p>
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
);

export default AboutPage;
