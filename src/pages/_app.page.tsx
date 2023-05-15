import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import { Provider } from '../providers';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';

import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
}
