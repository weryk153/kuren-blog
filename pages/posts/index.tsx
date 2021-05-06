import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { blogFilePaths } from '../../utils/mdxUtils';
import post from '../../styles/post.module.scss'
type Props = {
    blogFilePaths: string[];
    postMetadata: { title: React.ReactNode }[]
};

const WithStaticProps = ({ blogFilePaths, postMetadata }: Props): JSX.Element => (
    <div className={post.container}>
        <h1>還是沒東西</h1>
        <p>正在長東西</p>
        <div className={post.postList}>
            {blogFilePaths.map((postPath: string, index: number) => (
                <Link key={postPath} href={`post/${postPath}`}>
                    {postMetadata[index].title}
                </Link>
            ))}
        </div>
        <p>
            <Link href="/">
                <a>not Go home</a>
            </Link>
        </p>
    </div>
);

export const getStaticProps: GetStaticProps = async () => {
    const postModules = await Promise.all(
        blogFilePaths.map(async (p: string) => import(`../post/${p}.mdx`))
    );
    const postMetadata = postModules.map((m) => m.meta);

    return { props: { blogFilePaths, postMetadata } };
};

export default WithStaticProps;
