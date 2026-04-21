import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Academic
 * - Professional blue and green color palette
 * - Clear hierarchical structure with separated sections
 * - Arabic RTL layout with proper typography
 * - Emphasis on clarity and accessibility
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-blue-700">دليل دعم الطلبة</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#overview" className="text-gray-700 hover:text-blue-700 transition-colors">
              نظرة عامة
            </a>
            <a href="#strategies" className="text-gray-700 hover:text-blue-700 transition-colors">
              الاستراتيجيات
            </a>
            <a href="#accommodations" className="text-gray-700 hover:text-blue-700 transition-colors">
              التسهيلات
            </a>
            <a href="#resources" className="text-gray-700 hover:text-blue-700 transition-colors">
              الموارد
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                دليل شامل لدعم الطلبة ذوي صعوبات التعلم و ADHD
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                موارد عملية واستراتيجيات فعّالة لأعضاء هيئة التدريس لتوفير بيئة تعليمية شاملة وداعمة لجميع الطلبة
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg">
                  ابدأ الآن
                  <ArrowRight className="w-5 h-5 mr-2" />
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg border-blue-700 text-blue-700 hover:bg-blue-50">
                  تعرف على المزيد
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663543315841/nYeL83E5PYS7tf4CCryHX3/hero-banner-YodUdqMqBHJqVGDVzYJzxn.webp"
                alt="Faculty support"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              فهم احتياجات الطلبة
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              معلومات أساسية عن صعوبات التعلم واضطراب فرط الحركة وتشتت الانتباه
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Learning Disabilities Card */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663543315841/nYeL83E5PYS7tf4CCryHX3/learning-disabilities-icon-WiMnMgpAXBJRY7KXpx2mfH.webp"
                  alt="Learning Disabilities"
                  className="w-20 h-20"
                />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">صعوبات التعلم</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                اضطرابات عصبية تؤثر على قدرة الفرد على اكتساب ومعالجة المعلومات، خاصة في القراءة والكتابة والحساب
              </p>
              <Link href="/learning-disabilities">
                <a className="text-blue-700 font-semibold hover:text-blue-800 flex items-center gap-2">
                  اقرأ المزيد
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </Card>

            {/* ADHD Card */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663543315841/nYeL83E5PYS7tf4CCryHX3/adhd-support-icon-69TNQuva3he7nwgEnjAHyV.webp"
                  alt="ADHD Support"
                  className="w-20 h-20"
                />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">اضطراب فرط الحركة</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                اضطراب نمائي عصبي يتميز بنمط مستمر من عدم الانتباه وفرط النشاط والاندفاعية
              </p>
              <Link href="/adhd-support">
                <a className="text-blue-700 font-semibold hover:text-blue-800 flex items-center gap-2">
                  اقرأ المزيد
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </Card>

            {/* Challenges Card */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663543315841/nYeL83E5PYS7tf4CCryHX3/teaching-strategies-icon-D97gsTwKjnio4ZaTS766kv.webp"
                  alt="Teaching Strategies"
                  className="w-20 h-20"
                />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">التحديات الجامعية</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                التحديات الأكاديمية والاجتماعية والنفسية التي يواجهها الطلبة في البيئة الجامعية
              </p>
              <Link href="/challenges">
                <a className="text-blue-700 font-semibold hover:text-blue-800 flex items-center gap-2">
                  اقرأ المزيد
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaching Strategies Section */}
      <section id="strategies" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              استراتيجيات التدريس الفعّالة
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              بناءً على مبادئ التصميم الشامل للتعلم (UDL)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* UDL Principle 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100">
                  <Lightbulb className="h-6 w-6 text-blue-700" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  توفير طرق متعددة للتمثيل
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  تقديم المعلومات بأشكال متعددة (نصية، صوتية، بصرية) لتلبية احتياجات التعلم المختلفة
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>استخدام الوسائل البصرية والخرائط المفاهيمية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>توفير تسجيلات صوتية للمحاضرات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>شرح المفاهيم بطرق متنوعة</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* UDL Principle 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100">
                  <Users className="h-6 w-6 text-green-700" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  توفير طرق متعددة للعمل والتعبير
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  السماح للطلبة بالتعبير عن فهمهم بطرق متنوعة
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>مشاريع بدلاً من الاختبارات التقليدية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>عروض شفهية وكتابية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>التعلم التعاوني مع الأقران</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* UDL Principle 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100">
                  <Lightbulb className="h-6 w-6 text-blue-700" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  توفير طرق متعددة للانخراط
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  تحفيز الطلبة وزيادة مشاركتهم في عملية التعلم
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>ربط المحتوى باهتمامات الطلبة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>دعم التنظيم الذاتي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>توفير بيئة داعمة وخالية من الخوف</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Assessment */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100">
                  <CheckCircle2 className="h-6 w-6 text-green-700" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  طرق تقييم متنوعة
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  استخدام أساليب تقييم تعكس القدرات الحقيقية للطلبة
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>اختبارات شفهية وكتابية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>مشاريع عملية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>تقييمات تكوينية مستمرة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Accommodations Section */}
      <section id="accommodations" className="py-16 md:py-24 bg-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              التسهيلات الأكاديمية
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              تعديلات معقولة لضمان وصول متكافئ للمحتوى الأكاديمي
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-blue-200 bg-white">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">تسهيلات الوقت</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">وقت إضافي في الاختبارات والامتحانات</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">مرونة في المواعيد النهائية للواجبات</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">فترات راحة منتظمة أثناء الاختبارات</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">جدول دراسي مرن</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border border-blue-200 bg-white">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">تسهيلات البيئة</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">مكان هادئ للاختبارات</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">مقعد في الصفوف الأمامية</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">استخدام أجهزة الحاسوب والأدوات المساعدة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">توفير محتوى رقمي سهل الوصول</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border border-blue-200 bg-white">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">تسهيلات المحتوى</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">توفير شرائح المحاضرات قبل الفصل</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">السماح بتسجيل المحاضرات</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">استخدام خطوط كبيرة وواضحة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">توفير ملخصات ومواد إثرائية</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border border-blue-200 bg-white">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">تسهيلات التقييم</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">اختبارات شفهية بدلاً من الكتابية</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">مشاريع بدلاً من الاختبارات</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">تقييمات مستمرة وتكوينية</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">استخدام برامج تصحيح الإملاء والنحو</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              الموارد والأدوات
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              تقنيات مساعدة وأدوات رقمية لدعم الطلبة
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">أدوات القراءة والكتابة</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• برامج تحويل النص إلى ملاك (Text-to-Speech)</li>
                <li>• برامج تحويل الملاك إلى نص (Speech-to-Text)</li>
                <li>• برامج تصحيح الإملاء والنحو المتقدمة</li>
                <li>• أدوات تنظيم الأفكار والخرائط الذهنية</li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">أدوات إدارة الوقت والمهام</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• تطبيقات تنظيم المهام (Trello, Asana)</li>
                <li>• تطبيقات التقويم الذكية</li>
                <li>• برامج تدوين الملاحظات الرقمية</li>
                <li>• أدوات إدارة الوقت والتنبيهات</li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">معايير الوصول الرقمي</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• نصوص بديلة للصور (Alt Text)</li>
                <li>• ترجمات وشروح للفيديوهات</li>
                <li>• هيكل واضح للمستندات</li>
                <li>• تباين كافٍ بين الألوان</li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">الذكاء الاصطناعي المساعد</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• أدوات تلخيص النصوص</li>
                <li>• برامج تنظيم الأفكار</li>
                <li>• أدوات تحسين الكتابة</li>
                <li>• مع الحفاظ على الأمانة الأكاديمية</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700">
        <div className="container text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            هل تريد معرفة المزيد؟
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تصفح الدليل الكامل واحصل على معلومات تفصيلية عن كيفية دعم الطلبة بشكل فعّال
          </p>
          <Button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
            اقرأ الدليل الكامل
            <ArrowRight className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="text-white font-bold mb-4">عن الدليل</h5>
              <p className="text-sm leading-relaxed">
                دليل شامل لأعضاء هيئة التدريس لدعم الطلبة ذوي صعوبات التعلم واضطراب فرط الحركة
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">الأقسام</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#overview" className="hover:text-white transition-colors">نظرة عامة</a></li>
                <li><a href="#strategies" className="hover:text-white transition-colors">الاستراتيجيات</a></li>
                <li><a href="#accommodations" className="hover:text-white transition-colors">التسهيلات</a></li>
                <li><a href="#resources" className="hover:text-white transition-colors">الموارد</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">الموارد</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">تحميل الدليل</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الاتصال بنا</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">المتابعة</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">البريد الإلكتروني</a></li>
                <li><a href="#" className="hover:text-white transition-colors">وسائل التواصل</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأخبار</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 دليل دعم الطلبة. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
