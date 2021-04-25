import React, { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

type Props = {
    children?: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }: Props): JSX.Element => (
    <div>
        <Head>
            <title>Kuren</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        {children}
        <Footer />
    </div>
);

export default Layout;
