import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import { blogFilePaths } from '../../utils/mdxUtils';
import Link from 'next/link';

type Props = {
    blogFilePaths: string[];
    postMetadata: { title: React.ReactNode }[]
};

const StaticPropsDetail = ({ blogFilePaths, postMetadata }: Props): JSX.Element => {

    return (
        <>
            <h1>還是沒東西</h1>
            <p>正在長東西</p>
            {blogFilePaths.map((postPath: string, index: number) => (
                <Link key={postPath} href={`post/${postPath}`}>
                    <a>
                        <div>
                            {/* {postPath} */}
                            {postMetadata[index].title}
                            {/* <PostBanner {...post.options} className='my-5' contentClassName='p-5' titleClassName='text-xl md:text-3xl' /> */}
                        </div>
                    </a>
                </Link>
            ))}
            <p>
                <Link href="/">
                    <a>not Go home</a>
                </Link>
            </p>
        </>
    );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    // const mdxPaths = blogFilePaths;
    const paths = blogFilePaths.map((post: string) => ({
        params: { post },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async () => {
    const postModules = await Promise.all(
        blogFilePaths.map(async (p: string) => import(`../post/${p}.mdx`))
    );
    const postMetadata = postModules.map((m) => m.meta);

    return { props: { blogFilePaths, postMetadata } };
};
