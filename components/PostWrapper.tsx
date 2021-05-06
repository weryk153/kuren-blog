import React, { FunctionComponent, ReactNode } from 'react';
import post from '../styles/post.module.scss'

type Props = {
    children?: ReactNode;
};

const PostWrapper: FunctionComponent<Props> = ({ children }: Props): JSX.Element => (
    <div className={post.postWrapper}>
        {children}
        <p>我是</p>
    </div>
);

export default PostWrapper;
