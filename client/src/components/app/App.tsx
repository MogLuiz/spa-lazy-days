import { ReactElement } from 'react';

import { Loading } from './Loading';
import { Navbar } from './Navbar';
import { Routes } from './Routes';

import { theme } from '../../theme';

import { ChakraProvider } from '@chakra-ui/react';

import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import queryClient from '../../react-query/queryClient';

export function App(): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Loading />
        <Routes />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
