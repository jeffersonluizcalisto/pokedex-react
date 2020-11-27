import React from 'react';

import GlobalStyle from "./styles/global";
import Main from "./pages/main";
import Header from "./components/Header";

const App: React.FC = () => 
(
    <>
        <Header />
        <Main />
        <GlobalStyle />
    </>
);

export default App;
