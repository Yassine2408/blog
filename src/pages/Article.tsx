import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2, Bookmark, Clock } from "lucide-react";
import { useParams } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    bio: string;
    image: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
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
  - 📈 **أمثلة حقيقية**: سارة من جدة استطاعت جمع ١٠ آلاف ريال في سنة واحدة باتباع هذه الخطوات فقط!
  
> "الخطوة الأولى هي الأصعب. بعد أول ثلاثة أشهر من الادخار، ستصبح العملية أسهل بكثير." - محمد السويد

**خطوات إضافية:**
1. اقترح تحدي أسبوع بدون إنفاق!
2. جزّء الأهداف الكبيرة الى أهداف أسبوعية.
3. استعن بتطبيقات التوفير مثل Monefy أو Wally.

في النهاية، التوفير سلوك يمكن اكتسابه تدريجيًا وسيغير حياتك للأفضل.`, 
    author: {
      name: "محمد السويد",
      bio: "خبير تعليم الثقافة المالية ومؤسس مبادرة الوعي المالي في السعودية. مستشار سابق في هيئة السوق المالية وناشط توعوي من خلال حسابه @msoeid.",
      avatar: "https://pbs.twimg.com/profile_images/1464917705681582092/-deWSF2k_400x400.jpg"
    },
    date: "٢٠ أبريل ٢٠٢٥",
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
- ⏳ **كن صبورًا**: الاستثمار طويل الأجل عادةً ما يكون أقل خطورة.

**نصائح ذهبية:**
- استثمر فقط ما يمكنك تحمل خسارته.
- تابع أخبار الشركات ولا تنسَ دراسة أساسياتها المالية.

> "رحلتي في الاستثمار بدأت بمبالغ صغيرة جداً، لكنها كانت كفيلة ببناء عادة مالية ممتازة." - أحمد المطوع
    `,
    author: {
      name: "أحمد المطوع",
      bio: "محلل مالي كويتي، حاصل على CFA ومدير عدة صناديق استثمارية في الخليج، ناشط اقتصادي عبر تويتر @ahmadalmutawa1.",
      avatar: "https://yt3.googleusercontent.com/7qXq3gFVIgrMwYpUrvuFds-zpCRqs82aKwwq3LyIkukfyEvA_BB8-QqlJUCC1fZed8Qbg05ovQ=s900-c-k-c0x00ffffff-no-rj"
    },
    date: "١٨ أبريل ٢٠٢٥",
    related: [1, 3]
  },
  {
    id: 3,
    title: "التطبيقات المالية العربية: تقييم شامل لأفضل ٥ تطبيقات",
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop",
    content: `
من خلال مراجعة أحدث التطبيقات المالية العربية وجدنا:
1. **Wally**: واجهة استخدام سهلة وتوافق مع معظم البنوك.
2. **Monefy**: بسيط وعملي وسريع جدا لمتابعة المصروفات.
3. **FxPro**: مناسب للمهتمين بتداول العملات.
4. **فينتشر**: مصمم خصيصًا للأسواق العربية.

**لماذا نحتاج التطبيق المالي؟**
يسهل متابعة المصاريف، التخطيط والادخار، وتحليل العادات المالية.

> "اختر التطبيق الذي يناسب احتياجاتك ولا تتردد في تجربة أكثر من واحد!" - عبدالله العسكر
    `,
    author: {
      name: "عبدالله العسكر",
      bio: "صانع محتوى مالي ومراجع تطبيقات مالية شهير عبر قناته على اليوتيوب وحساباته الاجتماعية @alaskarr.",
      avatar: "https://yt3.googleusercontent.com/ytc/AIdro_mYsYo6bWIwzQAtrvk82zNVA938Fl6UgpKuunSL=s900-c-k-c0x00ffffff-no-rj"
    },
    date: "١٥ أبريل ٢٠٢٥",
    related: [2]
  },
  {
    id: 4,
    title: "مقدمة في العملات الرقمية: المخاطر والفرص",
    imageUrl: "https://images.unsplash.com/photo-1518544086798-4949f0a9a38e?q=80&w=2070&auto=format&fit=crop",
    content: `
العملات الرقمية هي مستقبل المال، لكنها تحمل مخاطر يجب معرفتها.
- ⚠️ **تقلب الأسعار الحاد**: يمكن أن تحقق أرباحًا أو خسائر كبيرة في وقت وجيز.
- 🔐 **كن على دراية بالاحتيال**: لا ترسل أموالك لأي منصة غير معروفة.
- 🌏 **الفرص الاستثمارية**: ظهور عملات جديدة يفتح الأبواب لمستثمرين مبكرين!

**هل ينبغي أن أبدأ؟**
ابدأ فقط بعد دراسة السوق جيدًا وابدأ بمبالغ صغيرة فقط مهما كان الحماس كبيرًا.
    `,
    author: {
      name: "فهد الحويماني",
      bio: "محلل وخبير مالي سعودي، كاتب في جريدة الاقتصادية ومقدم قناة يوتيوب حول الاستثمار والعملات الرقمية @fahad_huwaimany.",
      avatar: "https://pbs.twimg.com/profile_images/1358445060368013313/twP_Wpno_400x400.jpg"
    },
    date: "١٢ أبريل ٢٠٢٥",
    related: [3]
  },
];

function findArticleById(id) {
  return articles.find((a) => String(a.id) === id);
}
function getRelatedArticles(currIdArr) {
  return articles.filter((a) => currIdArr.includes(a.id));
}

const Article = () => {
  const { id } = useParams();
  const article = findArticleById(id);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">المقال غير موجود</h2>
        <a href="/articles" className="text-teal-600 font-medium underline">العودة لكل المقالات</a>
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
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
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
