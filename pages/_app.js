import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Page from '../component/Page';
import { useState } from 'react';
import { LoginContext } from '../component/context';

function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ChakraProvider>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </LoginContext.Provider>
    </ChakraProvider>
  );
}

App.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};
export default App;
