import Footer from "./components/Footer/Footer";
import Title from "./components/Title/Title";
import Container from "./components/Container/Container"
import "./globals.css";
import Home from "./page";

export const metadata = {
  title: "Moedinhas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Title/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
