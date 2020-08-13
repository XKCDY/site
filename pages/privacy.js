import React from 'react';
import TextSection from '../components/text-section';
import Link from '../components/link';
import Paragraph from '../components/paragraph';

const Privacy = () => (
  <div className="mx-8 mt-4">
    <TextSection label="Privacy Policy">
      <TextSection.Content>
        <Paragraph>
          <b className="font-bold">Privacy is a fundamental human right.</b>
        </Paragraph>

        <Paragraph>
          In keeping with that belief, XKCDY collects as little information as possible.
        </Paragraph>

        <Paragraph>
          Your data will never be sold or otherwise exchanged with third-parties.
        </Paragraph>

        <Paragraph>
          When using the app, your IP address may be recorded by Cloudflare in accordance with their <Link href="https://www.cloudflare.com/privacypolicy/">Privacy Policy</Link>.
        </Paragraph>

        <Paragraph>
          If you subscribe to push notifications, an anonymous token will be recorded.
        </Paragraph>

        <Paragraph>
          If you have any questions, please email <Link href="mailto:app@xkcdy.com">app@xkcdy.com</Link>.
        </Paragraph>
      </TextSection.Content>
    </TextSection>
  </div>
);

export default Privacy;
