import React from 'react';
import TextSection from '../components/text-section';
import Paragraph from '../components/paragraph';
import Link from '../components/link';

const Support = () => (
  <div className="mx-8 mt-4">
    <TextSection label="General Support">
      <TextSection.Content>
        <Paragraph>
          Email <Link href="mailto:app@xkcdy.com">app@xkcdy.com</Link> for general inquires or support. I might also be willing to send you a promo code for XKCDY Pro if you ask nicely. 😉
        </Paragraph>
      </TextSection.Content>
    </TextSection>

    <TextSection label="Found a bug?">
      <TextSection.Content>
        <Paragraph>
          If you have a GitHub account, please <Link href="https://github.com/XKCDY/app/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">open a new issue</Link>. Otherwise, email the address above.
        </Paragraph>
      </TextSection.Content>
    </TextSection>
  </div>
);

export default Support;
