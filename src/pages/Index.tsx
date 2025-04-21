import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedArticles from "@/components/FeaturedArticles";
import CategoriesSection from "@/components/CategoriesSection";
import FinancialTips from "@/components/FinancialTips";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-cairo">
      <Navbar />
      <main>
        <HeroSection />
        <Disclaimer />
        <FeaturedArticles />
        <CategoriesSection />
        <FinancialTips />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
