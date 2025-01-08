import "./globals.css";


export const metadata = {
  title: "Web Wonders",
  description: "Crafting bespoke websites and web applications to empower your digital presence.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
