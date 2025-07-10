import BlogWebsiteName from "@/components/BlogWebsiteName";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>blogs4u</title>
      </Head>

      <main>
        <h1><BlogWebsiteName /></h1>
      </main>
      <Footer />
    </div>
  );
}
