import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ADHDSupport() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold">
              <ArrowLeft className="w-5 h-5" />
              العودة للرئيسية
            </a>
          </Link>
          <h1 className="text-xl font-bold text-blue-700">اضطراب فرط الحركة</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            اضطراب فرط الحركة وتشتت الانتباه (ADHD)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            اضطراب نمائي عصبي يتميز بنمط مستمر من عدم الانتباه و/أو فرط النشاط والاندفاعية، مما يؤثر على الأداء الأكاديمي والاجتماعي
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">التعريف</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                اضطراب فرط الحركة وتشتت الانتباه (ADHD) هو اضطراب نمائي عصبي يؤثر على قدرة الفرد على التركيز والانتباه والتحكم في السلوك الاندفاعي. يتميز بثلاثة أعراض رئيسية:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold">1</span>
                  <span><strong>عدم الانتباه:</strong> صعوبة في التركيز والانتباه للتفاصيل</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold">2</span>
                  <span><strong>فرط النشاط:</strong> حركة مستمرة وعدم القدرة على الجلوس بهدوء</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold">3</span>
                  <span><strong>الاندفاعية:</strong> التصرف بسرعة دون التفكير في العواقب</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-100 rounded-lg p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">الخصائص الرئيسية</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">اضطراب عصبي حقيقي</p>
                    <p className="text-sm text-gray-600">ليس نتيجة لسوء السلوك أو الكسل</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">يبدأ في الطفولة</p>
                    <p className="text-sm text-gray-600">لكن الأعراض قد تستمر حتى البلوغ</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">قابل للإدارة</p>
                    <p className="text-sm text-gray-600">مع الدعم والاستراتيجيات المناسبة</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms and Characteristics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            الأعراض والخصائص
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">عدم الانتباه</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• صعوبة في التركيز على المهام</li>
                <li>• نسيان التفاصيل والتعليمات</li>
                <li>• سهولة التشتت بالمنبهات الخارجية</li>
                <li>• صعوبة في تنظيم المهام</li>
                <li>• فقدان الأشياء بسهولة</li>
                <li>• صعوبة في الاستماع والانتباه</li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">فرط النشاط</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• الحركة المستمرة والقلق</li>
                <li>• عدم القدرة على الجلوس بهدوء</li>
                <li>• الركض والقفز بشكل مفرط</li>
                <li>• الكلام المفرط</li>
                <li>• الأرق والتململ</li>
                <li>• الانخراط في أنشطة خطرة</li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">الاندفاعية</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• التسرع في الإجابة</li>
                <li>• مقاطعة الآخرين</li>
                <li>• صعوبة في انتظار الدور</li>
                <li>• التصرف بدون تفكير</li>
                <li>• اتخاذ قرارات متسرعة</li>
                <li>• صعوبة في التحكم بالعواطف</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Characteristics */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            التأثيرات الأكاديمية
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-r-4 border-blue-700 pr-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">في المحاضرات</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• صعوبة في التركيز على المحاضرة</li>
                  <li>• سهولة التشتت بالأصوات والحركات</li>
                  <li>• صعوبة في تدوين الملاحظات</li>
                  <li>• نسيان ما تم شرحه</li>
                  <li>• الحاجة للحركة المستمرة</li>
                </ul>
              </div>
              <div className="border-r-4 border-green-700 pr-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">في الواجبات</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• صعوبة في البدء بالمهمة</li>
                  <li>• عدم القدرة على إكمال المهام</li>
                  <li>• نسيان تسليم الواجبات</li>
                  <li>• صعوبة في تنظيم العمل</li>
                  <li>• التسرع والأخطاء الكثيرة</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-r-4 border-blue-700 pr-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">في الاختبارات</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• القلق والتوتر الشديد</li>
                  <li>• صعوبة في قراءة الأسئلة بعناية</li>
                  <li>• التسرع في الإجابة</li>
                  <li>• صعوبة في إدارة الوقت</li>
                  <li>• نسيان المعلومات المدروسة</li>
                </ul>
              </div>
              <div className="border-r-4 border-green-700 pr-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">في التنظيم</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• صعوبة في تنظيم الوقت والمهام</li>
                  <li>• نسيان المواعيد والالتزامات</li>
                  <li>• عدم القدرة على التخطيط طويل الأمد</li>
                  <li>• فوضى في الملفات والأوراق</li>
                  <li>• صعوبة في الالتزام بالروتين</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Strategies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            استراتيجيات الدعم الفعّالة
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-blue-200 bg-blue-50">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">في الفصل الدراسي</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">→</span>
                  <span>مقعد في الصفوف الأمامية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">→</span>
                  <span>بيئة هادئة وخالية من المنبهات</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">→</span>
                  <span>فترات راحة منتظمة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">→</span>
                  <span>تقسيم المحاضرات إلى أجزاء صغيرة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">→</span>
                  <span>استخدام وسائل بصرية وتفاعلية</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border border-green-200 bg-green-50">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">في الواجبات والمشاريع</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">→</span>
                  <span>تقسيم المهام إلى خطوات صغيرة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">→</span>
                  <span>توفير قوائم مراجعة واضحة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">→</span>
                  <span>مرونة في المواعيد النهائية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">→</span>
                  <span>تقديم تغذية راجعة منتظمة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">→</span>
                  <span>تطبيقات تنظيم المهام والوقت</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border border-purple-200 bg-purple-50">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">في الاختبارات</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-700 font-bold">→</span>
                  <span>وقت إضافي (25-50%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-700 font-bold">→</span>
                  <span>مكان هادئ ومنفصل</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-700 font-bold">→</span>
                  <span>فترات راحة منتظمة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-700 font-bold">→</span>
                  <span>أشكال اختبار متنوعة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-700 font-bold">→</span>
                  <span>استخدام أدوات مساعدة</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border border-orange-200 bg-orange-50">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">في إدارة الوقت</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-700 font-bold">→</span>
                  <span>تطبيقات تنظيم المهام</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-700 font-bold">→</span>
                  <span>تنبيهات وتذكيرات منتظمة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-700 font-bold">→</span>
                  <span>جداول زمنية مرئية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-700 font-bold">→</span>
                  <span>تقسيم الدراسة إلى فترات قصيرة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-700 font-bold">→</span>
                  <span>توفير جدول دراسي منظم</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-700">
        <div className="container text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            تعرف على صعوبات التعلم
          </h3>
          <Link href="/learning-disabilities">
            <a className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              اقرأ عن صعوبات التعلم
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container text-center text-sm">
          <p>&copy; 2026 دليل دعم الطلبة. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
