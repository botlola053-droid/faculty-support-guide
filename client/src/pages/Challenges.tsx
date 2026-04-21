import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Challenges() {
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
          <h1 className="text-xl font-bold text-blue-700">التحديات الجامعية</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            التحديات الجامعية للطلبة ذوي صعوبات التعلم و ADHD
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            فهم عميق للتحديات المتعددة التي يواجهها الطلبة في البيئة الجامعية والطرق الفعّالة للتعامل معها
          </p>
        </div>
      </section>

      {/* Academic Challenges */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            التحديات الأكاديمية
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">صعوبات المحاضرات</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">متابعة المحاضرات السريعة</p>
                    <p className="text-sm text-gray-600">صعوبة في التركيز على محاضرات طويلة بدون فترات راحة</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">تدوين الملاحظات</p>
                    <p className="text-sm text-gray-600">صعوبة في الاستماع والكتابة في نفس الوقت</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">فهم المحتوى المعقد</p>
                    <p className="text-sm text-gray-600">صعوبة في فهم النصوص الأكاديمية المعقدة</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">التعامل مع كمية المعلومات</p>
                    <p className="text-sm text-gray-600">صعوبة في معالجة كمية كبيرة من المعلومات الجديدة</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">صعوبات الدراسة المستقلة</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">تنظيم الدراسة</p>
                    <p className="text-sm text-gray-600">صعوبة في تنظيم وقت الدراسة بشكل فعّال</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">الالتزام بالمواعيد</p>
                    <p className="text-sm text-gray-600">صعوبة في إكمال الواجبات في الوقت المحدد</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">الاستقلالية</p>
                    <p className="text-sm text-gray-600">الانتقال من بيئة منظمة إلى دراسة مستقلة</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">الحفاظ على الدافعية</p>
                    <p className="text-sm text-gray-600">صعوبة في البقاء متحفزاً للدراسة</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">صعوبات التقييم والاختبارات</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">القلق من الاختبارات</p>
                    <p className="text-sm text-gray-600">قلق شديد وتوتر قبل وأثناء الاختبارات</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">إدارة الوقت</p>
                    <p className="text-sm text-gray-600">صعوبة في توزيع الوقت على جميع الأسئلة</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">الأداء تحت الضغط</p>
                    <p className="text-sm text-gray-600">انخفاض الأداء عند التعرض للضغط</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">نسيان المعلومات</p>
                    <p className="text-sm text-gray-600">نسيان المعلومات المدروسة في الاختبار</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">صعوبات أخرى</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-orange-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">التواصل مع الأساتذة</p>
                    <p className="text-sm text-gray-600">صعوبة في التواصل الفعّال مع أعضاء هيئة التدريس</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">المشاركة في الفصل</p>
                    <p className="text-sm text-gray-600">صعوبة في المشاركة والتفاعل في الفصل</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">العمل الجماعي</p>
                    <p className="text-sm text-gray-600">صعوبة في العمل مع مجموعات من الطلبة</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-700 font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">الكتابة الأكاديمية</p>
                    <p className="text-sm text-gray-600">صعوبة في كتابة الأبحاث والمقالات الأكاديمية</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Psychological Challenges */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            التحديات النفسية والعاطفية
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-r-4 border-blue-700 pr-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">القلق والخوف</h4>
                <p className="text-gray-700 mb-3">
                  يعاني الطلبة من قلق مستمر بشأن أدائهم الأكاديمي وخوف من الفشل والحكم السلبي من الآخرين.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• قلق من الاختبارات والامتحانات</li>
                  <li>• خوف من الفشل والرسوب</li>
                  <li>• قلق من الحكم الاجتماعي</li>
                  <li>• توتر مستمر وأرق</li>
                </ul>
              </div>
              <div className="border-r-4 border-green-700 pr-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">انخفاض تقدير الذات</h4>
                <p className="text-gray-700 mb-3">
                  يشعر الطلبة بعدم الكفاءة والقيمة الذاتية المنخفضة بسبب الصعوبات الأكاديمية المستمرة.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• الشعور بعدم الكفاءة</li>
                  <li>• الشعور بالدونية مقارنة بالآخرين</li>
                  <li>• الشك في القدرات الذاتية</li>
                  <li>• الشعور بالعجز</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-r-4 border-purple-700 pr-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">الاكتئاب والإحباط</h4>
                <p className="text-gray-700 mb-3">
                  قد يعاني الطلبة من مشاعر الحزن والإحباط المستمرة بسبب الفشل المتكرر.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• مشاعر الحزن والإحباط</li>
                  <li>• فقدان الاهتمام بالأنشطة</li>
                  <li>• الشعور باليأس</li>
                  <li>• العزلة الاجتماعية</li>
                </ul>
              </div>
              <div className="border-r-4 border-orange-700 pr-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">الوصمة الاجتماعية</h4>
                <p className="text-gray-700 mb-3">
                  يواجه الطلبة وصمة اجتماعية وحكماً سلبياً من الآخرين بسبب صعوباتهم.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• الخوف من الحكم السلبي</li>
                  <li>• الشعور بالعزلة والرفض</li>
                  <li>• الخجل من الصعوبات</li>
                  <li>• عدم الرغبة في طلب المساعدة</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Challenges */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            التحديات الاجتماعية
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">بناء العلاقات</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• صعوبة في تكوين صداقات</li>
                <li>• صعوبة في الحفاظ على العلاقات</li>
                <li>• الشعور بعدم الانتماء</li>
                <li>• صعوبة في فهم الإشارات الاجتماعية</li>
                <li>• الخوف من الرفض</li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">المشاركة في الأنشطة</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• عدم الرغبة في المشاركة</li>
                <li>• الخوف من الحكم من الآخرين</li>
                <li>• صعوبة في التفاعل الاجتماعي</li>
                <li>• الشعور بالقلق في المجموعات</li>
                <li>• العزلة والانسحاب</li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">التواصل الفعّال</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• صعوبة في التعبير عن الآراء</li>
                <li>• صعوبة في الاستماع الفعّال</li>
                <li>• مقاطعة الآخرين</li>
                <li>• صعوبة في الحوار والنقاش</li>
                <li>• الخجل من التحدث في العلن</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Time Management Challenges */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            تحديات إدارة الوقت والاستقلالية
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">صعوبات إدارة الوقت</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">عدم القدرة على التخطيط</p>
                    <p className="text-sm text-gray-600">صعوبة في التخطيط للمستقبل والتنبؤ بالمتطلبات</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">التسويف والتأجيل</p>
                    <p className="text-sm text-gray-600">تأجيل المهام والواجبات حتى اللحظة الأخيرة</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">عدم الالتزام بالمواعيد</p>
                    <p className="text-sm text-gray-600">نسيان المواعيد والالتزامات الأكاديمية</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">عدم توازن الحياة</p>
                    <p className="text-sm text-gray-600">صعوبة في الموازنة بين الدراسة والحياة الشخصية</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">الانتقال إلى الاستقلالية</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">الاعتماد على الآخرين</p>
                    <p className="text-sm text-gray-600">الاعتماد المفرط على الآباء والمعلمين</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">صعوبة في اتخاذ القرارات</p>
                    <p className="text-sm text-gray-600">صعوبة في اتخاذ قرارات مستقلة وتحمل المسؤولية</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">إدارة الموارد</p>
                    <p className="text-sm text-gray-600">صعوبة في إدارة الموارد والمسؤوليات</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">التكيف مع البيئة الجديدة</p>
                    <p className="text-sm text-gray-600">صعوبة في التكيف مع البيئة الجامعية الجديدة</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            الموارد والدعم المتاحة
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-blue-200 bg-white">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">الدعم الأكاديمي</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• مركز دعم الطلبة</li>
                <li>• المرشدون الأكاديميون</li>
                <li>• خدمات الدروس الخصوصية</li>
                <li>• ورش العمل التعليمية</li>
                <li>• مجموعات الدراسة</li>
              </ul>
            </Card>

            <Card className="p-8 border border-blue-200 bg-white">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">الدعم النفسي</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• الاستشارة النفسية</li>
                <li>• خدمات الصحة العقلية</li>
                <li>• مجموعات الدعم</li>
                <li>• برامج إدارة الضغط</li>
                <li>• الخدمات الأزمات</li>
              </ul>
            </Card>

            <Card className="p-8 border border-blue-200 bg-white">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">الدعم الاجتماعي</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• الأنشطة الطلابية</li>
                <li>• مجموعات الأقران</li>
                <li>• البرامج الاجتماعية</li>
                <li>• المنظمات الطلابية</li>
                <li>• فرص التطوع</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700">
        <div className="container text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            ابدأ رحلة الدعم الآن
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تعرف على كيفية توفير الدعم الفعّال للطلبة في بيئة جامعية شاملة وداعمة
          </p>
          <Link href="/">
            <a className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              العودة للرئيسية
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
