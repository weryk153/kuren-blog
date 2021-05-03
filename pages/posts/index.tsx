import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { User } from '../../interfaces';
// import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
// import List from '../../components/List';
import { blogFilePaths } from '../../utils/mdxUtils';
type Props = {
    blogFilePaths: any;
    items: User[];
};

const WithStaticProps = ({ blogFilePaths }: Props): JSX.Element => (
    <Layout>
        <h1>還是沒東西</h1>
        <p>正在長東西</p>
        {/* <List items={items || []} /> */}
        {blogFilePaths.map((postPath: string) => (
            <Link key={postPath} href={`post/${postPath}`}>
                <a>
                    <div>
                        {postPath}
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
    </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    // const mdxPaths = blogFilePaths;
    // const items: User[] = sampleUserData;
    // return { props: { items } };

    try {
        // const postID = params?.post;
        // const content = blogFilePaths.find((data) => data === post);
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        console.log(blogFilePaths);

        return { props: { blogFilePaths } };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};

export default WithStaticProps;
