import Head from 'next/head';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet
        title="Tips | Progressive Web App | Open Source Tip Component "
        meta={[
          {
            property: 'og:title',
            content: 'Open Source React.js Tip Component',
          },
        ]}
      />

      <main></main>

      <footer></footer>
    </div>
  );
}
