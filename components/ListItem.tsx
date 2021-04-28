import React from 'react';
import Link from 'next/link';

import { User } from '../interfaces';

type Props = {
    data: User;
};

const ListItem = ({ data }: Props) => (
    <Link href="/posts/[id]" as={`/posts/${data.id}`}>
        <a>
            {data.id}: {data.name}
        </a>
    </Link>
);

export default ListItem;
