import React from 'react';
import TextSection from '../components/text-section';
import Link from '../components/link';
import Paragraph from '../components/paragraph';

const Terms = () => (
  <div className="mx-8 mt-4">
    <TextSection label="Terms of Use">
      <TextSection.Content>
        <Paragraph>
          <b className="font-bold">Effective Date: August 22, 2020</b>
        </Paragraph>

        <Paragraph>
          By using the XKCDY website or app, you accept these terms and conditions.
        </Paragraph>

        <Paragraph>
          In order to use XKCDY, you must be at least 17 years old (per the App Store age rating) and be legally permitted to use the app by the laws of your home country.
        </Paragraph>

        <Paragraph>
          The XKCDY Pro subscription is auto-renewable, meaning that once purchased it will be auto-renewed every year until canceled 24 hours prior to the end of the current period. Duration of the subscription is 1 year. Manage your subscription and auto-renewal by going to your Account Settings.
        </Paragraph>

        <Paragraph>
          If you have any questions, please email <Link href="mailto:app@xkcdy.com">app@xkcdy.com</Link>.
        </Paragraph>
      </TextSection.Content>
    </TextSection>
  </div>
);

export default Terms;
