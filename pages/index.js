import axios from 'axios';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';

export async function getStaticProps() {
  try {
    const apiUrl = process.env.API_URL || 'http://localhost:1337';

    const [heroRes, servicesRes, footerRes] = await Promise.all([
      axios.get(`${apiUrl}/heroes`),
      axios.get(`${apiUrl}/services`),
      axios.get(`${apiUrl}/footers`),
    ]);

    return {
      props: {
        hero: heroRes.data[0],
        services: servicesRes.data,
        footer: footerRes.data[0],
      },
    };
  } catch (error) {
    console.error('API Error:', error.message);
    return {
      props: {
        hero: null,
        services: [],
        footer: null,
        error: error.message,
      },
    };
  }
}

export default function Home({ hero, services, footer, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <Hero data={hero} />
      <Services data={services} />
      <Footer data={footer} />
    </div>
  );
}
