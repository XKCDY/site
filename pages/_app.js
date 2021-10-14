import React from 'react';
import Head from 'next/head';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import '../styles/index.css';
import Navbar from '../components/navbar';

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

      <meta property="og:type" content="website"/>
      <meta property="og:title" content="XKCDY"/>
      <meta property="og:description" content="A modern, open source iOS client for XKCD"/>
      <meta property="og:url" content="https://xkcdy.com"/>
      <meta property="og:image" content="https://xkcdy.com/screenshot.png"/>

      <script async defer data-domain="xkcdy.com" src="https://plause.maxisom.me/js/plause.js"/>
    </Head>

    <section className="min-h-screen w-screen flex flex-col align-center">
      <Navbar/>
      <Component {...pageProps}/>
    </section>
  </>
);

export default App;
