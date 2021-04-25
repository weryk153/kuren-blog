import React from 'react';
import { AppProps } from 'next/app';
import './styles/styles.css';

const App = ({ Component }: AppProps): JSX.Element => {
    return <Component />;
};

export default App;
