import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calculator, PieChart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    icon: Calculator,
    title: "حاسبة الاستثمار",
    desc: "أداة لحساب العائد المتوقع من استثمارك بناءً على المبلغ المودع، ومعدل الفائدة المركبة، والادخارات الدورية، مع توضيح قدرتها على تضخيم رأس المال بمرور الوقت.",
    case: "أمثلة:\n- إذا ادخرت 200 ريال شهريًا بمعدل 7% سنويًا، فكم سيكون لديك بعد 10 سنوات؟\n- سجّل استثماراتك وفّر دليلاً تفصيلياً لتنظيم أموالك.",
    cta: "ابدأ الحسبة",
    href: "/tools#investment"
  },
  {
    icon: PieChart,
    title: "حاسبة توزيع الأصول",
    desc: "تساعدك هذه الأداة على توزيع أصولك المالية بين الأسهم، السندات، العقارات، والنقد بطريقة متوازنة تعكس استراتيجيتك المالية الشخصية.",
    case: "أمثلة:\n- كيف يكون توزيع أموالك إذا خصصت 50% للأسهم و30% للعقارات و20% للسندات؟\n- استكشاف تأثيرات التوزيع المختلفة ضمن محفظتك الاستثمارية.",
    cta: "ابدأ الآن",
    href: "/tools#allocation"
  },
  {
    icon: TrendingUp,
    title: "أداة خطة التوفير",
    desc: "حدد هدفًا ماليًا مثل شراء منزل أو تمويل حفل زفاف، واحسب المبلغ الشهري اللازم للوصول إلى هدفك وفقًا للفترة الزمنية المختارة.",
    case: "أمثلة:\n- إذا رغبت بتوفير 20,000 ريال خلال سنتين، كم يلزمك أن تدخر شهريا؟\n- عدّل الأهداف لمعرفة كيفية تعديل مدخراتك الشهرية.",
    cta: "جرب الخطة",
    href: "/tools#saving"
  }
];

export default function Tools() {
  return (
    <div className="min-h-screen bg-white font-cairo">
      <Navbar />
      <main>
        <div className="bg-teal-600 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              أدوات مالية مجانية
            </h1>
            <p className="text-teal-100 md:text-lg max-w-2xl mx-auto">
              استخدم أدواتنا الذكية لتحليل استثمارك، حساب التوفير، وخطط مالية وأكثر!
            </p>
          </div>
        </div>

        {/* Tools Introduction */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                أدوات مصممة خصيصاً لاحتياجاتك المالية
              </h2>
              <p className="text-gray-600 mb-8">
                نقدم لك مجموعة من الأدوات المالية المجانية التي تساعدك على اتخاذ قرارات مالية أفضل.
                جميع حساباتك وبياناتك محفوظة بشكل آمن ولا نشاركها مع أي طرف ثالث.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <tool.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                    <p className="text-gray-600 mb-4">{tool.desc}</p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-700 whitespace-pre-line">{tool.case}</p>
                    </div>
                  </div>
                  <Link 
                    to={tool.href}
                    className="inline-flex items-center justify-center w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors"
                  >
                    {tool.cta}
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">كيف تستخدم أدواتنا المالية؟</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">١</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">اختر الأداة المناسبة</h3>
                    <p className="text-gray-600">حدد الأداة التي تناسب هدفك المالي من القائمة أعلاه.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">٢</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">أدخل بياناتك</h3>
                    <p className="text-gray-600">قم بإدخال المعلومات المطلوبة في الحقول المخصصة.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">٣</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">احصل على النتائج</h3>
                    <p className="text-gray-600">اطلع على النتائج والتوصيات المخصصة لحالتك.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">أسئلة شائعة</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">هل الأدوات مجانية؟</h3>
                  <p className="text-gray-600">نعم، جميع أدواتنا المالية مجانية للاستخدام.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">هل بياناتي محفوظة بأمان؟</h3>
                  <p className="text-gray-600">نعم، نحن نستخدم أحدث تقنيات التشفير لحماية بياناتك.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">هل يمكنني حفظ نتائج حساباتي؟</h3>
                  <p className="text-gray-600">نعم، يمكنك إنشاء حساب مجاني لحفظ جميع حساباتك ونتائجك.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
