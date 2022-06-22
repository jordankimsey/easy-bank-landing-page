import Head from 'next/head';
import Header from './components/Header';
import CallToAction from './components/CallToAction';
import { Container, Box } from '@mui/system';
import Description from './components/Description';
import HeroSection from './components/HeroSection';
import ArticleSection from './components/ArticleSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Easy Bank</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Header />
        <Container
          maxWidth='xl'
          sx={{ textAlign: { xs: 'center', sm: 'left' } }}
        >
          <CallToAction />

          <Description />

          <HeroSection />
          <ArticleSection />
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}