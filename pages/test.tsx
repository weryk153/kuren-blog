import React from 'react';
import MDXDocument, { metadata } from './post/test.mdx';
import Layout from '../components/Layout';

const Test = (): JSX.Element => (
    <Layout>
        <MDXDocument />
        <footer>
            <p>By: {metadata.authors}</p>
        </footer>
    </Layout>
)

export default Test