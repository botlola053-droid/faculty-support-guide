export async function generateGuidePDF() {
  const htmlContent = `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          direction: rtl;
          text-align: right;
          padding: 20px;
        }
        h1 {
          color: #1967d2;
          text-align: center;
          font-size: 28px;
          margin-bottom: 10px;
        }
        h2 {
          color: #1967d2;
          font-size: 20px;
          margin-top: 20px;
          margin-bottom: 10px;
          border-bottom: 2px solid #1967d2;
          padding-bottom: 5px;
        }
        h3 {
          color: #333;
          font-size: 16px;
          margin-top: 15px;
          margin-bottom: 8px;
        }
        p {
          margin-bottom: 10px;
          text-align: justify;
        }
        ul {
          margin-right: 20px;
          margin-bottom: 10px;
        }
        li {
          margin-bottom: 5px;
        }
        .section {
          page-break-inside: avoid;
          margin-bottom: 20px;
        }
        .footer {
          text-align: center;
          color: #999;
          font-size: 12px;
          margin-top: 40px;
          border-top: 1px solid #ddd;
          padding-top: 10px;
        }
      </style>
    </head>
    <body>
      <h1>دليل دعم الطلبة</h1>
      <h2 style="text-align: center; border: none;">ذوو صعوبات التعلم واضطراب فرط الحركة</h2>
      
      <div class="section">
        <h2>مقدمة</h2>
        <p>هذا الدليل يوفر موارد عملية واستراتيجيات فعّالة لأعضاء هيئة التدريس لتوفير بيئة تعليمية شاملة وداعمة لجميع الطلبة، خاصة أولئك الذين يعانون من صعوبات التعلم واضطراب فرط الحركة وتشتت الانتباه (ADHD).</p>
      </div>

      <div class="section">
        <h2>صعوبات التعلم</h2>
        <p>صعوبات التعلم هي اضطرابات عصبية تؤثر على قدرة الفرد على اكتساب ومعالجة المعلومات، خاصة في مجالات القراءة والكتابة والحساب والتعبير اللغوي.</p>
        
        <h3>الخصائص الرئيسية:</h3>
        <ul>
          <li>ليست مرتبطة بالذكاء - الطلبة قد يكونون أذكياء جداً</li>
          <li>محددة ومتخصصة - تؤثر على مجالات معينة دون غيرها</li>
          <li>مستمرة مدى الحياة - لا تختفي لكن يمكن إدارتها بفعالية</li>
        </ul>

        <h3>الخصائص الأكاديمية:</h3>
        <ul>
          <li><strong>صعوبات القراءة:</strong> صعوبة في فك رموز الكلمات، قراءة بطيئة وغير دقيقة</li>
          <li><strong>صعوبات الكتابة:</strong> صعوبة في الإملاء والنحو، خط غير منتظم</li>
          <li><strong>صعوبات الحساب:</strong> صعوبة في فهم المفاهيم الرياضية والعمليات الحسابية</li>
          <li><strong>صعوبات أخرى:</strong> صعوبة في التنظيم والتخطيط، الذاكرة قصيرة الأمد</li>
        </ul>
      </div>

      <div class="section">
        <h2>اضطراب فرط الحركة وتشتت الانتباه (ADHD)</h2>
        <p>اضطراب نمائي عصبي يتميز بنمط مستمر من عدم الانتباه و/أو فرط النشاط والاندفاعية، مما يؤثر على الأداء الأكاديمي والاجتماعي.</p>
        
        <h3>الأعراض الرئيسية:</h3>
        <ul>
          <li><strong>عدم الانتباه:</strong> صعوبة في التركيز والانتباه للتفاصيل، نسيان التفاصيل والتعليمات</li>
          <li><strong>فرط النشاط:</strong> حركة مستمرة وعدم القدرة على الجلوس بهدوء، الكلام المفرط</li>
          <li><strong>الاندفاعية:</strong> التسرع في الإجابة، مقاطعة الآخرين، صعوبة في انتظار الدور</li>
        </ul>

        <h3>التأثيرات الأكاديمية:</h3>
        <ul>
          <li>صعوبة في متابعة المحاضرات السريعة</li>
          <li>صعوبة في تدوين الملاحظات</li>
          <li>صعوبة في إدارة الوقت والمهام</li>
          <li>القلق والتوتر الشديد أثناء الاختبارات</li>
        </ul>
      </div>

      <div class="section">
        <h2>استراتيجيات التدريس الفعّالة</h2>
        
        <h3>توفير طرق متعددة للتمثيل:</h3>
        <ul>
          <li>استخدام الوسائل البصرية والخرائط المفاهيمية</li>
          <li>توفير تسجيلات صوتية للمحاضرات</li>
          <li>شرح المفاهيم بطرق متنوعة</li>
        </ul>

        <h3>توفير طرق متعددة للعمل والتعبير:</h3>
        <ul>
          <li>مشاريع بدلاً من الاختبارات التقليدية</li>
          <li>عروض شفهية وكتابية</li>
          <li>التعلم التعاوني مع الأقران</li>
        </ul>

        <h3>توفير طرق متعددة للانخراط:</h3>
        <ul>
          <li>ربط المحتوى باهتمامات الطلبة</li>
          <li>دعم التنظيم الذاتي</li>
          <li>توفير بيئة داعمة وخالية من الخوف</li>
        </ul>
      </div>

      <div class="section">
        <h2>التسهيلات الأكاديمية</h2>
        
        <h3>تسهيلات الوقت:</h3>
        <ul>
          <li>وقت إضافي في الاختبارات والامتحانات (25-50%)</li>
          <li>مرونة في المواعيد النهائية للواجبات</li>
          <li>فترات راحة منتظمة أثناء الاختبارات</li>
          <li>جدول دراسي مرن</li>
        </ul>

        <h3>تسهيلات البيئة:</h3>
        <ul>
          <li>مكان هادئ للاختبارات</li>
          <li>مقعد في الصفوف الأمامية</li>
          <li>استخدام أجهزة الحاسوب والأدوات المساعدة</li>
          <li>توفير محتوى رقمي سهل الوصول</li>
        </ul>

        <h3>تسهيلات المحتوى:</h3>
        <ul>
          <li>توفير شرائح المحاضرات قبل الفصل</li>
          <li>السماح بتسجيل المحاضرات</li>
          <li>استخدام خطوط كبيرة وواضحة</li>
          <li>توفير ملخصات ومواد إثرائية</li>
        </ul>

        <h3>تسهيلات التقييم:</h3>
        <ul>
          <li>اختبارات شفهية بدلاً من الكتابية</li>
          <li>مشاريع بدلاً من الاختبارات</li>
          <li>تقييمات مستمرة وتكوينية</li>
          <li>استخدام برامج تصحيح الإملاء والنحو</li>
        </ul>
      </div>

      <div class="section">
        <h2>الموارد والأدوات</h2>
        
        <h3>أدوات القراءة والكتابة:</h3>
        <ul>
          <li>برامج تحويل النص إلى ملاك (Text-to-Speech)</li>
          <li>برامج تحويل الملاك إلى نص (Speech-to-Text)</li>
          <li>برامج تصحيح الإملاء والنحو المتقدمة</li>
          <li>أدوات تنظيم الأفكار والخرائط الذهنية</li>
        </ul>

        <h3>أدوات إدارة الوقت والمهام:</h3>
        <ul>
          <li>تطبيقات تنظيم المهام (Trello, Asana)</li>
          <li>تطبيقات التقويم الذكية</li>
          <li>برامج تدوين الملاحظات الرقمية</li>
          <li>أدوات إدارة الوقت والتنبيهات</li>
        </ul>

        <h3>معايير الوصول الرقمي:</h3>
        <ul>
          <li>نصوص بديلة للصور (Alt Text)</li>
          <li>ترجمات وشروح للفيديوهات</li>
          <li>هيكل واضح للمستندات</li>
          <li>تباين كافٍ بين الألوان</li>
        </ul>
      </div>

      <div class="footer">
        <p>&copy; 2026 دليل دعم الطلبة. جميع الحقوق محفوظة.</p>
        <p>تم إنشاء هذا الدليل لدعم أعضاء هيئة التدريس في توفير بيئة تعليمية شاملة وداعمة.</p>
      </div>
    </body>
    </html>
  `;

  // Create a blob from the HTML content
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  // Create an iframe to print the HTML to PDF
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = url;
  document.body.appendChild(iframe);

  // Wait for the iframe to load and then print
  return new Promise<void>((resolve) => {
    iframe.onload = () => {
      setTimeout(() => {
        iframe.contentWindow?.print();
        document.body.removeChild(iframe);
        URL.revokeObjectURL(url);
        resolve();
      }, 500);
    };
  });
}

// Alternative function using html2pdf library
export async function downloadGuidePDF() {
  const html2pdf = (await import('html2pdf.js')).default;

  const element = document.createElement('div');
  element.innerHTML = `
    <div style="font-family: Arial, sans-serif; direction: rtl; text-align: right; padding: 20px;">
      <h1 style="color: #1967d2; text-align: center; font-size: 28px;">دليل دعم الطلبة</h1>
      <h2 style="color: #1967d2; text-align: center; font-size: 20px; margin-bottom: 30px;">ذوو صعوبات التعلم واضطراب فرط الحركة</h2>
      
      <h2 style="color: #1967d2; font-size: 18px; margin-top: 20px;">مقدمة</h2>
      <p>هذا الدليل يوفر موارد عملية واستراتيجيات فعّالة لأعضاء هيئة التدريس لتوفير بيئة تعليمية شاملة وداعمة لجميع الطلبة.</p>

      <h2 style="color: #1967d2; font-size: 18px; margin-top: 20px;">صعوبات التعلم</h2>
      <p>صعوبات التعلم هي اضطرابات عصبية تؤثر على قدرة الفرد على اكتساب ومعالجة المعلومات.</p>
      <ul>
        <li>ليست مرتبطة بالذكاء</li>
        <li>محددة ومتخصصة</li>
        <li>مستمرة مدى الحياة</li>
      </ul>

      <h2 style="color: #1967d2; font-size: 18px; margin-top: 20px;">اضطراب فرط الحركة (ADHD)</h2>
      <p>اضطراب نمائي عصبي يتميز بنمط مستمر من عدم الانتباه و/أو فرط النشاط والاندفاعية.</p>

      <h2 style="color: #1967d2; font-size: 18px; margin-top: 20px;">استراتيجيات التدريس الفعّالة</h2>
      <p>توفير طرق متعددة للتمثيل والعمل والتعبير والانخراط في عملية التعلم.</p>

      <h2 style="color: #1967d2; font-size: 18px; margin-top: 20px;">التسهيلات الأكاديمية</h2>
      <p>تعديلات معقولة لضمان وصول متكافئ للمحتوى الأكاديمي.</p>

      <p style="text-align: center; color: #999; font-size: 12px; margin-top: 40px; border-top: 1px solid #ddd; padding-top: 20px;">
        © 2026 دليل دعم الطلبة. جميع الحقوق محفوظة.
      </p>
    </div>
  `;

  const opt = {
    margin: 10,
    filename: 'دليل_دعم_الطلبة.pdf',
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: 'portrait' as const, unit: 'mm' as const, format: 'a4' as const },
  };

  return html2pdf().set(opt).from(element).save() as Promise<void>;
}
