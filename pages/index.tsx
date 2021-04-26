import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const IndexPage = (): JSX.Element => (
    <Layout>
        <h1>我的部落格 👋 整修中...</h1>
        <Image src="/public/bg-1.jpg" width={500} height={500}></Image>
    </Layout>
);

export default IndexPage;
