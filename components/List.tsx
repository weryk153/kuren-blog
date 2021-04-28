import * as React from 'react';
import ListItem from './ListItem';
import { User } from '../interfaces';
import post from '../styles/post.module.scss'
type Props = {
    items: User[];
};

const List = ({ items }: Props) => (
    <ul className={post.postList}>
        {items.map((item) => (
            <li key={item.id}>
                <ListItem data={item} />
            </li>
        ))}
    </ul>
);

export default List;
