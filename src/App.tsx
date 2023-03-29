import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorWrapper, Layout, Header } from './components';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ErrorWrapper>
        <Header />
        <Layout />
      </ErrorWrapper>
    </BrowserRouter>
  );
}

export default App;
