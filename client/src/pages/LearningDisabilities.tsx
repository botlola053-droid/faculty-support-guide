import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function LearningDisabilities() {
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
          <h1 className="text-xl font-bold text-blue-700">صعوبات التعلم</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            صعوبات التعلم (Learning Disabilities)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            اضطرابات عصبية تؤثر على قدرة الفرد على اكتساب ومعالجة المعلومات، خاصة في مجالات القراءة والكتابة والحساب والتعبير اللغوي
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
                صعوبات التعلم هي اضطرابات عصبية تؤثر على واحدة أو أكثر من العمليات النفسية الأساسية المتعلقة باستقبال أو فهم أو معالجة المعلومات. تظهر هذه الاضطرابات في صعوبات محددة في:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold">•</span>
                  <span>الاستماع والفهم السمعي</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold">•</span>
                  <span>القراءة والفهم القرائي</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold">•</span>
                  <span>الكتابة والتعبير الكتابي</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold">•</span>
                  <span>الحساب والعمليات الرياضية</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold">•</span>
                  <span>التفكير والاستدلال المنطقي</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-100 rounded-lg p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">الخصائص الرئيسية</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">ليست مرتبطة بالذكاء</p>
                    <p className="text-sm text-gray-600">الطلبة ذوو صعوبات التعلم قد يكونون أذكياء جداً</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">محددة ومتخصصة</p>
                    <p className="text-sm text-gray-600">تؤثر على مجالات معينة دون غيرها</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">مستمرة مدى الحياة</p>
                    <p className="text-sm text-gray-600">لا تختفي لكن يمكن إدارتها بفعالية</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Characteristics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            الخصائص الأكاديمية
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">صعوبات القراءة</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• صعوبة في فك رموز الكلمات</li>
                <li>• قراءة بطيئة وغير دقيقة</li>
                <li>• صعوبة في فهم المقروء</li>
                <li>• خلط بين الحروف المتشابهة</li>
                <li>• صعوبة في تتبع الأسطر</li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">صعوبات الكتابة</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• صعوبة في الإملاء والنحو</li>
                <li>• خط غير منتظم وصعب القراءة</li>
                <li>• صعوبة في تنظيم الأفكار كتابياً</li>
                <li>• بطء في الكتابة</li>
                <li>• صعوبة في استخدام علامات الترقيم</li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">صعوبات الحساب</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• صعوبة في فهم المفاهيم الرياضية</li>
                <li>• صعوبة في إجراء العمليات الحسابية</li>
                <li>• صعوبة في حل المسائل الرياضية</li>
                <li>• الخلط بين الأرقام والرموز</li>
                <li>• صعوبة في تذكر الحقائق الرياضية</li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">صعوبات أخرى</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• صعوبة في التنظيم والتخطيط</li>
                <li>• صعوبة في الذاكرة قصيرة الأمد</li>
                <li>• صعوبة في المهارات الحركية الدقيقة</li>
                <li>• صعوبة في التعبير اللغوي</li>
                <li>• صعوبة في الاستدلال المنطقي</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* University Challenges */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            التحديات في البيئة الجامعية
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-r-4 border-blue-700 pr-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">التحديات الأكاديمية</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• صعوبة في متابعة المحاضرات السريعة</li>
                  <li>• صعوبة في تدوين الملاحظات</li>
                  <li>• صعوبة في فهم النصوص المعقدة</li>
                  <li>• صعوبة في التعامل مع كمية كبيرة من المعلومات</li>
                  <li>• صعوبة في الدراسة المستقلة</li>
                </ul>
              </div>
              <div className="border-r-4 border-green-700 pr-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">التحديات النفسية</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• القلق والخوف من الفشل</li>
                  <li>• انخفاض تقدير الذات</li>
                  <li>• الاكتئاب والإحباط</li>
                  <li>• الشعور بالعزلة</li>
                  <li>• الخوف من الحكم الاجتماعي</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-r-4 border-blue-700 pr-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">التحديات الاجتماعية</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• صعوبة في بناء العلاقات الاجتماعية</li>
                  <li>• صعوبة في المشاركة في الأنشطة الطلابية</li>
                  <li>• الشعور بعدم الانتماء</li>
                  <li>• صعوبة في التواصل الفعال</li>
                  <li>• الخوف من الرفض</li>
                </ul>
              </div>
              <div className="border-r-4 border-green-700 pr-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">تحديات إدارة الوقت</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• صعوبة في تنظيم الوقت والمهام</li>
                  <li>• صعوبة في الالتزام بالمواعيد</li>
                  <li>• صعوبة في التخطيط للدراسة</li>
                  <li>• الانتقال من بيئة منظمة إلى جامعة</li>
                  <li>• صعوبة في الاستقلالية</li>
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
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-blue-200 bg-blue-50">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">في المحاضرات</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">→</span>
                  <span>توفير شرائح المحاضرات مسبقاً</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">→</span>
                  <span>السماح بتسجيل المحاضرات</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">→</span>
                  <span>استخدام وسائل بصرية متنوعة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">→</span>
                  <span>إعطاء فترات راحة منتظمة</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border border-green-200 bg-green-50">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">في الواجبات</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">→</span>
                  <span>مرونة في المواعيد النهائية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">→</span>
                  <span>تقسيم المهام الكبيرة إلى أجزاء</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">→</span>
                  <span>توفير قوائم مراجعة وتعليمات واضحة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">→</span>
                  <span>تقديم تغذية راجعة منتظمة</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border border-purple-200 bg-purple-50">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">في الاختبارات</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-700 font-bold">→</span>
                  <span>وقت إضافي</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-700 font-bold">→</span>
                  <span>مكان هادئ ومريح</span>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700">
        <div className="container text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            تعرف على المزيد عن ADHD
          </h3>
          <Link href="/adhd-support">
            <a className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              اقرأ عن اضطراب فرط الحركة
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
