"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import ButtonTextUnderline from '@/components/buttons/ButtonTextUnderline';
import TextboxStandard from '@/components/textbox/TextboxStandard';
import TimelineBase from '@/components/timeline/TimelineBase';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'fun_trendy',
      colorTemplate: 1,
      textAnimation: 'none',
    }}>
      <main>
        <section id="hero">
          <BillboardHero 
            title="Join the Webild Movement!"
            subtitle="Where creativity meets technology in a vibrant SaaS experience."
          />
        </section>
        <section id="features" className="bg-futuristic-card-bg">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <TextboxStandard
              title={<h1 className="text-4xl font-bold">Key Features</h1>}
              description={<p>Discover the tools that will elevate your creativity.</p>}
            />
          </div>
        </section>
        <section id="how-it-works">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <TimelineBase
              items={[
                { title: 'Step 1', description: 'Get started with our intuitive setup.' },
                { title: 'Step 2', description: 'Explore our features and tools.' },
                { title: 'Step 3', description: 'Engage with our community for support.' }
              ]}
              title="How It Works"
            />
          </div>
        </section>
        <section id="about" className="bg-white">
          <TextboxStandard
            title={<h1 className="text-3xl font-semibold">About Us</h1>}
            description={<p>At Webild, we strive to empower creativity through technology.</p>}
          />
        </section>
        <section id="testimonials" className="bg-soft-noise">
          <CentralFAQ
            heading="What do our users say?"
            lead="Read what our satisfied customers are saying about Webild."
            items={[
              { title: 'Great platform', content: 'Webild has transformed the way I work!' },
              { title: 'Fantastic support', content: 'The customer service is incredible!' },
            ]}
          />
        </section>
        <section id="cta" className="bg-[#FFF9F3]">
          <TextboxStandard
            title={<h1 className="text-2xl font-bold">Ready to Get Started?</h1>}
            description={<p>Join us today and elevate your SaaS experience!</p>}
          />
          <ButtonTextUnderline
            text="Sign Up Now"
            onClick={() => { console.log('Sign Up Clicked'); }}
            className="mt-4"
          />
        </section>
      </main>
    </SiteThemeProvider>
  );
}