import React from 'react';
import Article2_AR from '../../components/Article2/Article2_AR';
import Article3_AR from '../../components/Article3/Article3_AR';
import { paper_1_color, dark_grey, light_beige, light_blue, medium_blue, medium_purple, very_light_red } from '../../public/colors'

export default function OfficeSolutions_AR() {
  const articleTitle_1 = 'تحليل البنية التحتية';
  const articleImageURL = 'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/images%2Fpp-ta-p-4030d-a-img-data.jpeg?alt=media&token=05ec7010-266b-4b05-b8e9-a14be15e188b';
  //   const articleSecondaryTitle_2 =
  //     'This is a bold text to be another title? shold be interesting';
  const articleParagraphs_1 = [
    {
      heading: 'لماذا البنية التحتية لتكنولوجيا المعلومات مهمة؟',
      text: 'تدعم التكنولوجيا كل جانب من جوانب أعمال اليوم تقريبًا ، من عمل الموظف الفردي إلى العمليات إلى السلع والخدمات. عند الاتصال بالشبكة بشكل صحيح ، يمكن تحسين التكنولوجيا لتحسين الاتصال وخلق الكفاءات وزيادة الإنتاجية',
      // imgURL: null,
    },
    {
      heading: null,
      text: 'إذا كانت البنية التحتية لتكنولوجيا المعلومات مرنة وموثوقة وآمنة ، فيمكنها مساعدة المؤسسة على تحقيق أهدافها وتوفير ميزة تنافسية في السوق. بدلاً من ذلك ، إذا لم يتم تنفيذ البنية التحتية لتكنولوجيا المعلومات بشكل صحيح ، فقد تواجه الشركات مشكلات الاتصال والإنتاجية والأمان - مثل اضطرابات النظام والاختراقات. بشكل عام ، يمكن أن يكون وجود بنية تحتية مطبقة بشكل صحيح عاملاً في تحديد ما إذا كانت الأعمال التجارية مربحة أم لا',
      // imgURL: null,
    },
    {
      heading: 'لماذا أحتاج إلى إلقاء نظرة على البنية التحتية للطباعة الخاصة بي؟',
      text: 'لم تعد طابعة المكتب مجرد الجهاز في الزاوية بعد الآن. بينما أصبح النسخ والإرسال عبر الفاكس أقل شيوعًا ، أصبح مسح المستندات ضوئيًا ومشاركتها مكونين حيويين في استمرار حركة الأعمال. على هذا النحو ، يجب دمج الطابعة في الشبكة الأوسع للأجهزة والأنظمة الأساسية التي يستخدمها الأشخاص ، ويمكن أحيانًا التغاضي عن ذلك',
      // imgURL: null,
    },
    {
      heading: 'هل تتطلع إلى تحسين البنية التحتية للطباعة لشركتك؟',
      // imgURL: null,
      text: `نقوم بتحليل البنية التحتية للمكتب المستخدمة (الطابعات وآلات النسخ والماسحات الضوئية والأجهزة متعددة الوظائف) والبرامج المتصلة من أجلك. هذا هو أهم شرط مسبق لتحسين شامل ومستدام لإدارة الطباعة والوثائق الخاصة بك. نسجل مشهد النظام الخاص بك في الموقع ونضع اقتراحًا للتحسين مصممًا خصيصًا لشركتك`,
      isBullet: true,
      listTitle: ':هذا عنوان قائمة نقطية',
      listItems: ['نقطية 1', 'نقطية 2'],
    },
  ];
  const articleTitle_2 = 'Optimizing resources';
  const articleParagraphs_2 = [
    {
      heading:
        'Managing your print infrastructure to be secure and efficient for the future',
      text: 'Is your company seeking to reduce its printing and related costs, roll out digitisation throughout the workplace, improve efficiency and ensure your employees can print and copy without limitation – even if a printer is unavailable? Or maybe you want a comprehensive overview and control of the print environment, securing that environment and eliminating unauthorised access to confidential documents and sensitive information? With us we will analyse together how to optimize the available resources to minimize down time or costs.',
      imgURL: null,
    },
    {
      heading:
        'So how can I better manage my print infrastructure to support business growth?',
      imgURL: null,
      text: 'Having discrete, disconnected printers from a number of suppliers increases costs, security issues and business efficiency. Often, businesses don’t appreciate how many printers they’re running and the effect of this. In the first instance, a print fleet audit establishes what equipment you have and where. It’s the first step in putting together an integrated print infrastructure that can be proactively managed. This enables you to make tangible process improvements that increase accountability and control.',
    },

    // {
    //   heading: null,
    //   text: 'If an IT infrastructure is flexible, reliable and secure, it can help an enterprise meet its goals and provide a competitive edge in the market. Alternatively, if an IT infrastructure isn’t properly implemented, businesses can face connectivity, productivity and security issues—like system disruptions and breaches. Overall, having a properly implemented infrastructure can be a factor in whether a business is profitable or not.',
    //   imgURL: null,
    // },
  ];
  return (
    <div className="analysis-and-advice-main-div">
      <Article2_AR
        articleTitle={articleTitle_1}
        articleImage={articleImageURL}
        articleImageAltText="triumph adler printer"
        // articleSecondaryTitle={articleSecondaryTitle_2}
        articleParagraphs={articleParagraphs_1}
        paperColor={paper_1_color}
      // bodyTextColor={very_light_red}
      // bulletItemsColor={medium_blue}
      // titleColor={dark_grey}
      // titleColor={light_beige}
      />
      <Article3_AR
        articleTitle={articleTitle_1}
        articleImage={articleImageURL}
        articleImageAltText="triumph adler printer"
        // articleSecondaryTitle={articleSecondaryTitle_2}
        articleParagraphs={articleParagraphs_1}
        paperColor={paper_1_color}
      // bodyTextColor={very_light_red}
      // bulletItemsColor={medium_blue}
      // titleColor={dark_grey}
      // titleColor={light_beige}
      />
      <Article3_AR
        articleTitle={articleTitle_1}
        articleParagraphs={articleParagraphs_1}
      // paperColor={light_beige}
      />
      <Article2_AR
        articleTitle={articleTitle_1}
        articleParagraphs={articleParagraphs_1}
      // paperColor={light_beige}
      />
      <div
        style={{
          width: '100%',
          height: '7vh',
          minHeight: '20px',
          backgroundColor: 'transparent',
        }}
      ></div>
    </div>
  );
}
