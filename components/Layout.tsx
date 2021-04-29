import React, { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

type Props = {
    meta?: { title: string; author: string };
    children?: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children, meta }: Props): JSX.Element => (
    <div>
        <Head>
            <title>Kuren</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <p>{meta && meta.title}</p>
        <p>{meta && meta.author}</p>
        {children}
        <Footer />
    </div>
);

export default Layout;
