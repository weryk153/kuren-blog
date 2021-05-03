import { GetStaticProps, GetStaticPaths } from 'next';

import React from 'react';
import Layout from '../../components/Layout';
import { blogFilePaths } from '../../utils/mdxUtils';
import Link from 'next/link';

type Props = {
    post?: string;
    errors?: string;
};

const StaticPropsDetail = ({ post, errors }: Props): JSX.Element => {
    if (errors) {
        return (
            <Layout>
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </Layout>
        );
    }

    return (
        <div className="max-w-screen-lg mx-auto">
            {blogFilePaths.map((post) => (
                <Link key={post} href={post} replace={true}>
                    <a>
                        {post}
                        {/* <PostBanner {...post.options} className='my-5' contentClassName='p-5' titleClassName='text-xl md:text-3xl' /> */}
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    // const mdxPaths = blogFilePaths;
    const paths = blogFilePaths.map((post) => ({
        params: { post },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const post = params?.post;
        const content = blogFilePaths.find((data) => data === post);
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        console.log(post);

        return { props: { content } };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};
