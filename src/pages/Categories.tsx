import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  Coins, 
  Smartphone, 
  BookText 
} from "lucide-react";

// Updated category data with enhanced descriptions and linked featured articles
const categories = [
  {
    id: 1,
    name: "الاستثمار",
    description: "دليلك الشامل للاستثمار الذكي في الأسهم، السندات، العقارات، والصناديق المتداولة.",
    longDescription: "تعلم كيفية بناء محفظة استثمارية متنوعة تتناسب مع أهدافك ومستوى تحملك للمخاطر. نستعرض استراتيجيات الاستثمار المختلفة، من التحليل الأساسي والفني إلى الاستثمار طويل الأجل، ونقدم شروحات مبسطة لأهم المفاهيم مثل العائد على الاستثمار وتنويع الأصول.",
    icon: TrendingUp,
    color: "bg-blue-500",
    articles: 78,
    featuredArticle: {
      id: 2,
      title: "دليل الاستثمار الآمن في الأسهم للمبتدئين",
      excerpt: "أساسيات الاستثمار والفرص التي يجب أن تعرفها قبل البدء في سوق الأسهم.",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
    }
  },
  {
    id: 2,
    name: "التوفير",
    description: "استراتيجيات عملية وفعالة لزيادة مدخراتك وتحقيق أهدافك المالية.",
    longDescription: "اكتشف طرقًا ذكية لخفض النفقات غير الضرورية، ووضع ميزانية واقعية، وبناء عادات ادخار مستدامة. نقدم نصائح حول كيفية الاستفادة من قاعدة 50/30/20، وتحديات التوفير الممتعة، وأهمية وجود صندوق للطوارئ.",
    icon: DollarSign,
    color: "bg-green-500",
    articles: 65,
    featuredArticle: {
      id: 1,
      title: "طريقة فعالة لتوفير 30٪ من دخلك الشهري",
      excerpt: "استراتيجيات عملية لتوفير المال دون المساس بجودة حياتك أو نمط الإنفاق المعتاد.",
      imageUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop"
    }
  },
  {
    id: 3,
    name: "التقنية المالية",
    description: "استعراض لأحدث التطبيقات والأدوات الرقمية التي تسهل إدارة أموالك.",
    longDescription: "تعرف على عالم الفنتك وكيف يمكن للتكنولوجيا أن تساعدك في تتبع المصاريف، الاستثمار الآلي، تحويل الأموال بسهولة، والحصول على تحليلات دقيقة لوضعك المالي. نراجع أفضل التطبيقات المتاحة للمستخدم العربي.",
    icon: Smartphone,
    color: "bg-purple-500",
    articles: 42,
    featuredArticle: {
      id: 3,
      title: "أفضل 5 تطبيقات مالية تساعدك على التنظيم المالي",
      excerpt: "مراجعة شاملة لأفضل التطبيقات التي تدعم المستخدم العربي وتساعد على إدارة الأموال بكفاءة.",
      imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop"
    }
  },
  {
    id: 4,
    name: "التخطيط المالي",
    description: "وضع خطط مالية شخصية واضحة لتحقيق أهدافك قصيرة وطويلة الأجل.",
    longDescription: "تعلم كيفية تحديد أهدافك المالية بذكاء (SMART)، ووضع خطة عمل للوصول إليها، سواء كان ذلك للتقاعد، شراء منزل، تعليم الأبناء، أو تحقيق الاستقلال المالي. نغطي مواضيع مثل إدارة الديون والتأمين.",
    icon: PieChart,
    color: "bg-yellow-500",
    articles: 58,
    featuredArticle: {
      id: 5,
      title: "كيف تحقق الاستقلال المالي قبل سن الأربعين",
      excerpt: "خطوات عملية لبناء الثروة وتحقيق الحرية المالية مع التخطيط السليم والادخار المنتظم.",
      imageUrl: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop"
    }
  },
  {
    id: 5,
    name: "العملات الرقمية",
    description: "مقدمة شاملة لعالم العملات المشفرة، البلوك تشين، والمخاطر والفرص المرتبطة بها.",
    longDescription: "افهم أساسيات تقنية البلوك تشين، وكيف تعمل العملات الرقمية مثل البيتكوين والإيثيريوم. نناقش طرق الاستثمار والتداول الآمن، وكيفية تقييم المشاريع الجديدة، والتعامل مع التقلبات العالية في هذا السوق الناشئ.",
    icon: Coins,
    color: "bg-orange-500",
    articles: 30,
    featuredArticle: {
      id: 4,
      title: "أساسيات العملات الرقمية: بين المخاطر والفرص",
      excerpt: "فهم العملات الرقمية وكيف تحمي استثماراتك في عالم متغير ومتقلب.",
      imageUrl: "https://images.unsplash.com/photo-1518544086798-4949f0a9a38e?q=80&w=2070&auto=format&fit=crop"
    }
  },
  {
    id: 6,
    name: "المعرفة المالية",
    description: "شرح مبسط للمفاهيم والمصطلحات المالية الأساسية لبناء وعي مالي قوي.",
    longDescription: "أسس معرفتك المالية بفهم واضح للمصطلحات الهامة مثل الفائدة المركبة، التضخم، الأصول والخصوم، وأنواع الحسابات المختلفة. محتوى تعليمي يهدف إلى تمكينك من اتخاذ قرارات مالية مستنيرة في حياتك اليومية.",
    icon: BookText,
    color: "bg-red-500",
    articles: 94,
    featuredArticle: {
      id: 5,
      title: "كيف تحقق الاستقلال المالي قبل سن الأربعين",
      excerpt: "خطوات عملية لبناء الثروة وتحقيق الحرية المالية مع التخطيط السليم والادخار المنتظم.",
      imageUrl: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop"
    }
  }
];

const globalIntro = `
في مال-الثروة، قمنا بتقسيم المحتوى إلى تصنيفات واضحة بحيث تجد كل ما تبحث عنه بسهولة. اختر التصنيف الذي يناسب اهتماماتك واستكشف مقالات وشروحات وأدوات فريدة أعددناها خصيصاً لجمهورنا العربي.

كل تصنيف يحوي مقالات متجددة وأهم النصائح العملية بالإضافة لمقال مميز يُرشح للقراءة أولاً!
`;

const Categories = () => {
  return (
    <div className="min-h-screen bg-white font-cairo">
      <Navbar />
      <main>
        {/* Header */}
        <div className="bg-teal-600 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              تصنيفات المحتوى
            </h1>
            <p className="text-teal-100 md:text-lg max-w-2xl mx-auto">
              استكشف مقالاتنا حسب المواضيع التي تهمك وتساعدك على تحقيق أهدافك المالية
            </p>
          </div>
        </div>
        {/* Intro */}
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="my-12 text-center text-lg text-gray-700 leading-relaxed">
            {globalIntro}
          </div>
        </div>
        {/* Categories List */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-16">
              {categories.map((category) => (
                <div key={category.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Category Info */}
                    <div className="lg:col-span-2 p-6 md:p-8 flex flex-col">
                      <div className={`w-14 h-14 ${category.color} rounded-lg text-white flex items-center justify-center mb-4`}>
                        <category.icon size={28} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                      <p className="text-gray-600 mb-6">{category.longDescription}</p>
                      <div className="mt-auto">
                        <div className="mb-4 text-sm text-gray-500">
                          <span className="font-semibold text-gray-900">{category.articles}</span> مقال في هذا التصنيف
                        </div>
                        <div className="flex gap-4 flex-wrap">
                          <Link 
                            to={`/category/${category.id}`}
                            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors"
                          >
                            تصفح المقالات
                          </Link>
                          <Link 
                            to={`/article/${category.featuredArticle.id}`}
                            className="inline-flex items-center bg-teal-100 hover:bg-teal-200 text-teal-800 px-4 py-2 rounded-md transition-colors border border-teal-200"
                          >
                            قراءة المقال المميز
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Featured Article */}
                    <div className="lg:col-span-3 bg-gray-50">
                      <div className="h-full relative overflow-hidden">
                        <img 
                          src={category.featuredArticle.imageUrl} 
                          alt={category.featuredArticle.title}
                          className="w-full h-full object-cover brightness-[0.85] lg:min-h-[320px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6 md:p-8">
                          <div className="max-w-xl">
                            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white mb-3">
                              مقال مميز
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                              {category.featuredArticle.title}
                            </h3>
                            <p className="text-gray-200 mb-4">
                              {category.featuredArticle.excerpt}
                            </p>
                            <Link 
                              to={`/article/${category.featuredArticle.id}`}
                              className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-md transition-colors"
                            >
                              قراءة المقال
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
