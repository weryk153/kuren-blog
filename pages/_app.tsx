import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.scss';

const App = ({ Component }: AppProps): JSX.Element => {
    return <Component />;
};

export default App;
