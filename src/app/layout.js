
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Honey Marmalade",
  description: "Official site of Honey Marmalade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-cormorant antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
