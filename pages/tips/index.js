import Head from 'next/head';
import { Helmet } from 'react-helmet';

export default function Index() {
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

      <main>
        <h1 className="text-gray-600">Tips Page</h1>
      </main>

      <footer></footer>
    </div>
  );
}
