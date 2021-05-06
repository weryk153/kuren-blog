import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { blogFilePaths } from '../../utils/mdxUtils';

type Props = {
    blogFilePaths: string[];
    postMetadata: { title: React.ReactNode }[]
};

const WithStaticProps = ({ blogFilePaths, postMetadata }: Props): JSX.Element => (
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

export const getStaticProps: GetStaticProps = async () => {
    const postModules = await Promise.all(
        blogFilePaths.map(async (p: string) => import(`../post/${p}.mdx`))
    );
    const postMetadata = postModules.map((m) => m.meta);

    return { props: { blogFilePaths, postMetadata } };
};

export default WithStaticProps;
