import React from 'react';
import Head from 'next/head';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import '../styles/index.css';

const App = ({Component, pageProps}) => (
  <>
    <Head>
      <title>XKCDY</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>

      <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;1,700&display=swap" rel="stylesheet"/>
    </Head>

    <Component {...pageProps}/>
  </>
);

export default App;
