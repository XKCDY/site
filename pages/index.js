import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const Page = () => (
  <section className="min-h-screen w-screen flex flex-col align-center">
    <div className="m-auto text-center p-10">
      <h1 className="text-5xl font-bold primary-color">XKCDY</h1>

      <p className="text-3xl">A modern, open source iOS client for XKCD.</p>

      <div className="flex items-center justify-center mt-10 flex-wrap">
        <MobileStoreButton
          store="ios"
          url="https://apps.apple.com/us/app/xkcd-open-source/id995811425"
          linkProps={{title: 'Click to open App Store'}}
          className="mx-6 mb-6"
        />

        <a href="https://github.com/XKCDY/app" target="_blank" rel="noreferrer" className="flex items-center secondary-background p-3 rounded-md shadow-md transform hover:translate-y-1 hover:shadow transition ease-in-out duration-200 mb-6 outline-none">
          <FontAwesomeIcon icon={faGithub} size="3x"/>

          <span className="mx-2 text-xl">Get the code</span>
        </a>
      </div>
    </div>

    <div className="mx-auto" style={{maxWidth: '100rem'}}>
      <img src="/screenshot.png"/>
    </div>
  </section>
);

export default Page;
