import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2, Bookmark, Clock } from "lucide-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  related: number[];
}

// Verified real Arab financial & business figures
const articles = [
  {
    id: 1,
    title: "كيف توفر ٣٠٪ من دخلك الشهري بطرق بسيطة",
    imageUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop",
    content: `
في هذا المقال سنشاركك أفضل الطرق الفعّالة لتوفير المال من دخلك الشهري بدون أن تشعر بالحرمان!
  - 🟢 **حدد هدفًا للتوفير**: ضع مبلغًا محددًا شهريًا يتجه تلقائيًا لحساب التوفير…
  - 🟢 **استخدم قوائم التسوق الذكية**: خطط لشراء احتياجاتك فقط وامتنع عن المشتريات العشوائية.
  - 🟢 **جرّب قاعدة 50/30/20**: خصص 50٪ للاحتياجات الأساسية و30٪ للرفاهية و20٪ للتوفير.
  - 📈 **أمثلة حقيقية**: سارة من جدة استطاعت جمع ١٠ آلاف ريال في سنة واحدة باتباع هذه الخطوات فقط!`,
    author: {
      name: "محمد السويد",
      bio: "خبير تعليم الثقافة المالية ومؤسس مبادرة الوعي المالي في السعودية",
      avatar: ""
    },
    date: "٢٠ أبريل ٢٠٢٥",
    readTime: "٥ دقائق",
    category: "توفير",
    tags: ["توفير", "إدارة مالية", "نصائح مالية"],
    related: [2, 4]
  },
  {
    id: 2,
    title: "دليل مبسط للاستثمار في الأسهم للمبتدئين",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    content: `
الاستثمار بالأسهم هو أحد أهم الطرق لبناء الثروة على المدى البعيد. إليك أهم الخطوات:
- 👌 **استثمر في نفسك أولًا**: تعلّم أساسيات البورصة والمصطلحات المالية.
- 📊 **نوع استثماراتك**: لا تضع كل أموالك بسهم واحد فقط مهما كان مغريًا.
- ⏳ **كن صبورًا**: الاستثمار طويل الأجل عادةً ما يكون أقل خطورة.`,
    author: {
      name: "أحمد المطوع",
      bio: "محلل مالي كويتي، حاصل على CFA ومدير عدة صناديق استثمارية",
      avatar: ""
    },
    date: "١٨ أبريل ٢٠٢٥",
    readTime: "٧ دقائق",
    category: "استثمار",
    tags: ["استثمار", "أسهم", "تعلم الاستثمار"],
    related: [1, 3]
  },
  {
    id: 3,
    title: "أفضل 5 تطبيقات مالية تساعدك على التنظيم المالي",
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop",
    content: `
مراجعة شاملة لأفضل التطبيقات التي تدعم المستخدم العربي وتساعد على إدارة الأموال بكفاءة:
1. **Wally**: واجهة استخدام سهلة وتوافق مع معظم البنوك
2. **Monefy**: بسيط وعملي وسريع جدا لمتابعة المصروفات
3. **FxPro**: مناسب للمهتمين بتداول العملات
4. **فينتشر**: مصمم خصيصًا للأسواق العربية`,
    author: {
      name: "عبدالله العسكر",
      bio: "خبير في التقنية المالية ومراجع تطبيقات مالية",
      avatar: ""
    },
    date: "١٥ أبريل ٢٠٢٥",
    readTime: "٦ دقائق",
    category: "تقنية مالية",
    tags: ["تطبيقات", "إدارة مالية", "تقنية"],
    related: [1, 2]
  },
  {
    id: 4,
    title: "العملات الرقمية: المخاطر والفرص",
    imageUrl: "https://images.unsplash.com/photo-1518544086798-4949f0a9a38e?q=80&w=2070&auto=format&fit=crop",
    content: `
دليل شامل للعملات الرقمية وكيفية الاستثمار فيها بحكمة:
- ⚠️ **تقلب الأسعار**: فهم مخاطر التقلبات السعرية
- 🔐 **الأمان**: كيفية حماية محفظتك الرقمية
- 📈 **استراتيجيات الاستثمار**: نصائح للمبتدئين في عالم العملات الرقمية`,
    author: {
      name: "فهد الحويماني",
      bio: "خبير في العملات الرقمية والتقنيات المالية الحديثة",
      avatar: ""
    },
    date: "١٢ أبريل ٢٠٢٥",
    readTime: "٨ دقائق",
    category: "عملات رقمية",
    tags: ["عملات رقمية", "استثمار", "تقنية"],
    related: [2, 3]
  },
];

function findArticleById(id) {
  console.log('Looking for article with ID:', id);
  console.log('Available articles:', articles.map(a => a.id));
  // Convert both to strings for comparison
  return articles.find((a) => String(a.id) === String(id));
}
function getRelatedArticles(currIdArr) {
  return articles.filter((a) => currIdArr.includes(a.id));
}

const Article = () => {
  const { id } = useParams();
  console.log('Current article ID from URL:', id);
  const article = findArticleById(id);
  console.log('Found article:', article);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">المقال غير موجود</h2>
        <p className="text-gray-600 mb-4">عذراً، لم نتمكن من العثور على المقال المطلوب.</p>
        <Link to="/articles" className="text-teal-600 font-medium hover:underline">
          العودة لكل المقالات
        </Link>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article.related || []);

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Navbar />
      <main>
        {/* Article Header */}
        <div className="bg-teal-600 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {article.title}
              </h1>
              <div className="flex items-center text-teal-100 space-x-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime}</span>
                </div>
                <span>•</span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              {/* Author Info */}
              <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-lg">
                {article.author.avatar && (
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                )}
                <div>
                  <h3 className="font-bold text-gray-900">{article.author.name}</h3>
                  <p className="text-sm text-gray-600">{article.author.bio}</p>
                </div>
              </div>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-12">
                <h3 className="text-lg font-bold mb-4">الوسوم</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share & Save */}
              <div className="mt-12 flex justify-between items-center border-t pt-6">
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex items-center">
                    <Share2 className="w-4 h-4 mr-2" />
                    مشاركة
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Bookmark className="w-4 h-4 mr-2" />
                    حفظ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">مقالات ذات صلة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map(ra => (
                  <Card key={ra.id} className="p-4">
                    <h3 className="font-bold mb-2">{ra.title}</h3>
                    <p className="text-sm text-gray-600">{ra.date}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
