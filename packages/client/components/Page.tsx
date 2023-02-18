import React from 'react';
import Head from 'next/head';

import { Navigation } from './Navigation';

type PageProps = {
      title: string;
      navigation: string;
      children: JSX.Element;
}

export const Page: React.FC<PageProps> = ({ title, navigation, children }) => {
      return (
            <>
                  <Head>
                        <title>{`Book Match - ${title}`}</title>
                  </Head>
                  {
                        (() => {
                              switch (navigation) {
                                    case 'home':
                                          return <Navigation type='home' />
                                    case 'result':
                                          return <Navigation type='result' />
                              }
                        })()
                  }
                  <div className='h-screen bg-baby-powder'>
                        {children}
                  </div>

            </>
      )
}