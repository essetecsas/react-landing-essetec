// css
import "./globals.css";
// bootstrap import
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./components/BootstrapClient/BootstrapClient";
import { BaseLayout } from "./components/layouts";
import { FloatButton } from "./components/ui";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BaseLayout>{children}</BaseLayout>
        <BootstrapClient />
        <FloatButton />
      </body>
    </html>
  );
}
