import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { User } from '../../interfaces';
import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import List from '../../components/List';

type Props = {
    items: User[];
};

const WithStaticProps = ({ items }: Props): JSX.Element => (
    <Layout>
        <h1>還是沒東西</h1>
        <p>正在長東西</p>
        <List items={items || []} />
        <p>
            <Link href="/">
                <a>not Go home</a>
            </Link>
        </p>
    </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items: User[] = sampleUserData;
    return { props: { items } };
};

export default WithStaticProps;