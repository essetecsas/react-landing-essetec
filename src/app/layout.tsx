// css
import "./globals.css";
// bootstrap import
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./components/BootstrapClient/BootstrapClient";
import { BaseLayout } from "./components/layouts";
import { FloatButton } from "./components/ui";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="eLtZVRqL1C2l1RBNKajVytGyQPAGF0pfrW6VWG-w9-A"
        />
      </Head>
      <body>
        <BaseLayout>{children}</BaseLayout>
        <BootstrapClient />
        <FloatButton />
      </body>
    </html>
  );
}
