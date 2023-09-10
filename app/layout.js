import { CartProvider } from "@/Components/ContextApi";
import "../styles/main.scss";
import { Inter } from "next/font/google";
import SideBar from "@/Components/SideBar";
import Providers from "@/context/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-100 dark:bg-slate-900">
        <Providers>
          <CartProvider>
            <div className="flex w-ful ">
              <div className="w-[50%] mr-1 text-slate-800 ">
                <SideBar />
              </div>
              {children}
            </div>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
