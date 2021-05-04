import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { blogFilePaths } from '../../utils/mdxUtils';
import path from 'path';
import fs from 'fs';
import matter from "gray-matter";

type Props = {
    blogFilePaths: string[];
    data: { title: string, slug: string }
};

const WithStaticProps = ({ blogFilePaths, data }: Props): JSX.Element => (
    <>
        <h1>還是沒東西</h1>
        <p>正在長東西</p>
        {blogFilePaths.map((postPath: string) => (
            <Link key={postPath} href={`post/${postPath}`}>
                <a>
                    <div>
                        {/* {postPath} */}
                        {data.title}
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
    const folderPath = path.join(process.cwd(), "pages/post");
    const filePath = path.join(folderPath, `test.mdx`);
    const rawFileSource = fs.readFileSync(filePath);
    const { data } = matter(rawFileSource);
    console.log(data);


    return { props: { blogFilePaths, data } };
};

export default WithStaticProps;
