/* =====================================================================
   AURORA — محتوى الموقع
   ---------------------------------------------------------------------
   هذا هو الملف الوحيد الذي يحتاج تعديلاً عند تحديث الموقع.
   كل نص مكتوب بلغتين:  ar = العربية   en = English
   لا تحذف الفواصل ( , ) أو علامات التنصيص ( " ) أو الأقواس.
   ===================================================================== */

window.AURORA = {

  /* ---------------------------------------------------------------
     1) الجلسة القادمة  —  Next session
     status:  "open"   = التسجيل مفتوح
              "soon"   = يُعلن قريباً
              "full"   = اكتمل العدد
              "closed" = التسجيل مغلق
     date:    بصيغة سنة-شهر-يوم   مثال: "2026-12-05"
     time:    بصيغة 24 ساعة       مثال: "17:30"
     poster:  مسار صورة البوستر    مثال: "assets/img/sessions/session-2.jpg"
     --------------------------------------------------------------- */
  nextSession: {
    status: "open",
    title:       { ar: "", en: "" },
    topic:       { ar: "", en: "" },
    date: "",
    time: "",
    location:    { ar: "", en: "" },
    description: { ar: "", en: "" },
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScIcWets8NzW5H1UqBI-tXek4wf1j7qGBGFVyKbU8lcGKhNwg/viewform",
    poster: ""
  },

  /* ---------------------------------------------------------------
     2) الجلسات السابقة  —  Previous sessions  (الأحدث أولاً)
     انسخ القالب التالي داخل القوسين [ ] لكل جلسة:
     {
       title:       { ar: "", en: "" },
       date: "2026-10-20",
       topic:       { ar: "", en: "" },
       description: { ar: "", en: "" },
       highlights:  { ar: ["", ""], en: ["", ""] },
       photos: ["assets/img/sessions/s1-1.jpg"]
     },
     --------------------------------------------------------------- */
  previousSessions: [
    {
      title:       { ar: "جلسة بمكتبة كلية الهندسة", en: "Session at the College of Engineering library" },
      date: "",
      topic:       { ar: "", en: "" },
      description: { ar: "جلسة من جلسات أورورا بمكتبة كلية الهندسة، كعدنا ويا بعض وسولفنا بالإنكليزي.", en: "One of our Aurora sessions at the College of Engineering library, where we sat together and talked in English." },
      highlights:  { ar: [], en: [] },
      photos: ["assets/img/sessions/img_7910.jpg", "assets/img/sessions/img_7909.jpg"]
    }
  ],

  /* ---------------------------------------------------------------
     3) الفريق  —  Team
     {
       name:  { ar: "", en: "" },
       role:  { ar: "", en: "" },
       bio:   { ar: "", en: "" },
       photo: "assets/img/team/name.jpg",
       instagram: "https://www.instagram.com/username/"
     },
     --------------------------------------------------------------- */
  team: [],

  /* ---------------------------------------------------------------
     4) المعرض  —  Our moments
     {
       src: "assets/img/gallery/photo-1.jpg",
       title:   { ar: "", en: "" },
       caption: { ar: "", en: "" }
     },
     --------------------------------------------------------------- */
  gallery: [
    {
      src: "assets/img/gallery/img_7864.jpg",
      title:   { ar: "جلسة سوالف بالإنكليزي", en: "Interactive speaking session" },
      caption: { ar: "كعدنا حول الطاولة وسولفنا بالإنكليزي، كل واحد يطرح فكرته ونتدرّب ويا بعض.", en: "A group discussion in English around the table, sharing ideas and practising conversation." }
    },
    {
      src: "assets/img/gallery/img_6031.jpg",
      title:   { ar: "لحظة من عروضنا", en: "From an Aurora presentation" },
      caption: { ar: "هاي لحظة من واحد من عروض أورورا، نشارك بيها أفكارنا ويا الناس.", en: "A moment from one of our presentations, sharing our ideas with the audience." }
    }
  ],

  /* ---------------------------------------------------------------
     5) روابط التواصل  —  Contact links
     اترك الرابط فارغاً "" ليختفي من الموقع.
     --------------------------------------------------------------- */
  links: {
    instagram: "https://www.instagram.com/Aurora._iq/",
    email: "Auroraiq10@gmail.com",
    tiktok: "",
    telegram: "",
    volunteerForm: ""   // رابط نموذج التطوع في الفريق (Google Form)
  },

  /* ---------------------------------------------------------------
     ملاحظاتكم — تُرسل من داخل الموقع إلى نموذج Google خاص بالفريق.
     لا تظهر في الموقع أبداً. تُقرأ من جدول الردود في حساب أورورا.
     formId:  الرمز الطويل من رابط النموذج (بعد /d/e/)
     message: رقم حقل الملاحظة (entry.xxxxx) من "الرابط المعبّأ مسبقاً"
     --------------------------------------------------------------- */
  feedback: {
    formId: "",
    message: ""
  },

  /* ---------------------------------------------------------------
     6) التعريف بأورورا  —  Identity
     --------------------------------------------------------------- */
  slogan: {
    ar: "الإنكليزية مو مجرد مادة دراسية، هي وسيلة حتى نتواصل ويّا العالم.",
    en: "English is not just a subject. It’s a way to connect with the world."
  },
  about: {
    ar: [
      "أورورا (Aurora) هي مجتمع تعليمي حديث يهدف إلى تطوير اللغة الإنكليزية بطريقة تفاعلية، ممتعة، ومختلفة عن أساليب التعليم التقليدية.",
      "نعتمد في أورورا على الجلسات التفاعلية، أنشطة المحادثة، التحديات، العمل الجماعي، والتجارب الإبداعية التي تساعد المشاركين على ممارسة اللغة واكتساب الثقة في استخدامها.",
      "نؤمن بأن اللغة الإنكليزية ليست مجرد كلمات وقواعد، بل هي وسيلة للتواصل مع العالم، واكتشاف ثقافات جديدة، وفتح أبواب الفرص أمام الشباب.",
      "نسعى إلى بناء مجتمع يشعر فيه الجميع بالراحة والثقة للتعبير عن أنفسهم، وتطوير مهاراتهم، والتعلم مع الآخرين ضمن تجربة تعليمية تجمع بين المعرفة، التفاعل، والمتعة."
    ],
    en: [
      "Aurora is a modern English learning community that brings people together to learn, practise, and experience English in a fun and engaging way.",
      "Through interactive sessions, speaking activities, challenges, teamwork, and creative experiences, Aurora aims to make learning English more enjoyable, practical, and accessible.",
      "We believe that language is more than words and grammar; it is a way to connect with people, discover new cultures, and explore new opportunities.",
      "Our mission is to create a supportive environment where everyone feels confident to express themselves, improve their communication skills, and become part of a community that grows together."
    ]
  },
  mission: {
    ar: "جعل تعلم اللغة الإنكليزية تجربة ممتعة تساعد الناس على التواصل، وبناء الثقة، واكتشاف فرص جديدة.",
    en: "To make English learning an enjoyable experience that connects people, builds confidence, and opens new opportunities."
  },
  vision: {
    ar: "بناء مجتمع تعليمي حديث تصبح فيه اللغة الإنكليزية وسيلة للتواصل، والتطور، والانفتاح على العالم.",
    en: "To build a modern learning community where English becomes a way of communication, connection, and personal growth."
  },
  goals: {
    ar: [
      "تطوير مهارات المحادثة والتواصل باللغة الإنكليزية من خلال الأنشطة والتجارب العملية.",
      "بناء الثقة وتشجيع المشاركين على التعبير عن أنفسهم باللغة الإنكليزية دون الخوف من الأخطاء.",
      "تقديم أساليب تعليم حديثة وتفاعلية تعتمد على الأنشطة والتحديات والعمل الجماعي.",
      "تعريف الشباب بالثقافات المختلفة وتشجيع التواصل مع العالم.",
      "تطوير مهارات التواصل والقيادة والعمل الجماعي والتفكير الإبداعي لدى الشباب.",
      "بناء مجتمع تعليمي مستمر يساعد أفراده على ممارسة اللغة والتطور معاً."
    ],
    en: [
      "Develop English communication and speaking skills through practical activities and real-life experiences.",
      "Build confidence and encourage people to express themselves in English without fear of making mistakes.",
      "Introduce modern and interactive learning methods through activities, challenges, games, and teamwork.",
      "Connect people with different cultures and encourage communication with the world.",
      "Develop young people’s communication, leadership, teamwork, and creative thinking skills.",
      "Build a supportive community where people can continue learning, practising, and growing together."
    ]
  },

  /* أنشطة وتحديات — Activities & challenges
     (مسودة مكتوبة من وصف أورورا الرسمي — راجعوها وعدّلوها) */
  activities: [
    { icon: "speak",
      title: { ar: "أنشطة المحادثة", en: "Speaking activities" },
      text:  { ar: "نمارس الإنكليزية في مواقف من الحياة الواقعية، ونبدأ الكلام من أول دقيقة.",
               en: "We practise English in real-life situations and start speaking from the very first minute." } },
    { icon: "bolt",
      title: { ar: "تحديات المحادثة", en: "Speaking challenges" },
      text:  { ar: "تحديات قصيرة تشجّعك على الكلام بثقة، والخطأ فيها جزء من التعلم.",
               en: "Short challenges that get you speaking with confidence. Mistakes are part of the process." } },
    { icon: "dice",
      title: { ar: "ألعاب ومسابقات", en: "Games & competitions" },
      text:  { ar: "نتعلم من خلال اللعب والمنافسة الودية، فتصير اللغة جزءاً من المتعة.",
               en: "Learning through play and friendly competition, so English becomes part of the fun." } },
    { icon: "team",
      title: { ar: "العمل الجماعي", en: "Teamwork" },
      text:  { ar: "مهام نحلّها معاً في فرق، نتواصل ونقود ونتعاون فيها بالإنكليزية.",
               en: "Tasks we solve together in teams, communicating, leading, and collaborating in English." } },
    { icon: "spark",
      title: { ar: "تجارب إبداعية", en: "Creative experiences" },
      text:  { ar: "أفكار ومشاريع إبداعية تستخدم فيها اللغة لتعبّر عن نفسك.",
               en: "Creative ideas and projects where you use English to express yourself." } },
    { icon: "globe",
      title: { ar: "ثقافات العالم", en: "World cultures" },
      text:  { ar: "نكتشف ثقافات جديدة ونتواصل مع العالم من خلال اللغة.",
               en: "Discovering new cultures and connecting with the world through language." } }
  ],

  /* ---------------------------------------------------------------
     7) Ask Aurora — الأسئلة والأجوبة
     keywords: كلمات تساعد البوت على فهم السؤال المكتوب.
     الأسئلة 6 و 9 و 10 تُكمل تلقائياً من بيانات "الجلسة القادمة".
     --------------------------------------------------------------- */
  faq: [
    {
      id: "what",
      q: { ar: "شنو هي أورورا؟", en: "What is Aurora?" },
      a: {
        ar: "أورورا مجتمع تعليمي حديث يساعد الناس على ممارسة اللغة الإنكليزية من خلال الجلسات التفاعلية، أنشطة المحادثة، التحديات، والعمل الجماعي.",
        en: "Aurora is a modern English learning community that helps people practise English through interactive sessions, speaking activities, challenges, teamwork, and creative experiences."
      },
      keywords: ["شنو اورورا", "ما هي", "ماهي", "منو انتم", "تعريف", "what is", "about aurora", "who are you"]
    },
    {
      id: "why",
      q: { ar: "ليش تأسست أورورا؟", en: "Why was Aurora created?" },
      a: {
        ar: "تأسست أورورا حتى نخلي تعلم الإنكليزية أكثر متعة وتفاعلاً، ونساعد الناس يستخدمون اللغة بالحياة الواقعية، مو فقط بالدراسة.",
        en: "Aurora was created to make learning English more enjoyable, practical, and accessible. We want people to experience English beyond traditional lessons and feel confident using it in real life."
      },
      keywords: ["ليش", "لماذا", "سبب", "هدف", "تاسست", "تأسست", "why", "created", "purpose", "goal"]
    },
    {
      id: "who",
      q: { ar: "منو يكدر ينضم لأورورا؟", en: "Who can join Aurora?" },
      a: {
        ar: "أورورا ترحب بكل شخص مهتم بتطوير لغته الإنكليزية والمشاركة بالأنشطة التفاعلية.",
        en: "Aurora welcomes people who are interested in learning English, improving their communication skills, and participating in interactive activities."
      },
      keywords: ["منو يكدر", "من يستطيع", "ينضم", "انضم", "اشترك", "عمر", "العمر", "who can", "join", "age", "eligible"]
    },
    {
      id: "fluent",
      q: { ar: "لازم أكون بطلاقة بالإنكليزي؟", en: "Do I need to be fluent in English?" },
      a: {
        ar: "لا، مو لازم تكون بطلاقة. أورورا مكان حتى تتعلم، تمارس، وتطور نفسك. المهم تكون عندك رغبة بالمشاركة.",
        en: "No! You don't need to be fluent. Aurora is a place to practise, learn, make mistakes, and improve. What matters most is your willingness to participate."
      },
      keywords: ["طلاقة", "مستوى", "مستواي", "ضعيف", "مبتدئ", "ما اعرف", "fluent", "level", "beginner", "weak", "bad english"]
    },
    {
      id: "inside",
      q: { ar: "شنو يصير بجلسات أورورا؟", en: "What happens during Aurora sessions?" },
      a: {
        ar: "جلساتنا تتضمن أنشطة تفاعلية، تحديات للمحادثة، عمل جماعي، وفعاليات إبداعية تساعد المشاركين على ممارسة اللغة.",
        en: "Our sessions include interactive activities, speaking challenges, teamwork, creative tasks, and opportunities to communicate in English."
      },
      keywords: ["يصير", "يحدث", "بالجلسة", "داخل الجلسة", "انشطة", "أنشطة", "فعاليات", "happens", "during", "activities", "inside"]
    },
    {
      id: "register",
      q: { ar: "شلون أسجل؟", en: "How can I register?" },
      a: {
        ar: "تعلن أورورا عن التسجيل من خلال حساباتها الرسمية والموقع، وتُنشر تفاصيل التسجيل مع كل جلسة جديدة.",
        en: "Registration details will be announced through Aurora's official Instagram account and website."
      },
      keywords: ["اسجل", "أسجل", "تسجيل", "التسجيل", "سجل", "حجز", "احجز", "register", "registration", "sign up", "signup", "book"]
    },
    {
      id: "free",
      q: { ar: "جلسات أورورا مجانية؟", en: "Are Aurora sessions free?" },
      a: {
        ar: "بعض فعاليات أورورا ممكن تكون مجانية، وبعضها ممكن تكون برسوم. تفاصيل كل جلسة راح تنعلن قبل التسجيل.",
        en: "Some Aurora activities and events may be free, while others may have registration fees. The cost of each session will be clearly announced before registration."
      },
      keywords: ["مجاني", "مجانية", "ببلاش", "فلوس", "رسوم", "سعر", "شكد", "كم السعر", "اشتراك", "free", "fee", "fees", "cost", "price", "pay"]
    },
    {
      id: "where",
      q: { ar: "وين تقام جلسات أورورا؟", en: "Where does Aurora hold its sessions?" },
      a: {
        ar: "تقام جلسات أورورا بالمواقع اللي يتم الإعلان عنها، وتُنشر تفاصيل المكان مع كل إعلان رسمي.",
        en: "Aurora sessions take place at announced venues in Mosul and other locations when available."
      },
      keywords: ["وين", "أين", "اين", "مكان", "المكان", "موقع الجلسة", "عنوان", "الموصل", "where", "location", "venue", "place", "mosul"]
    },
    {
      id: "when",
      q: { ar: "إمتى الجلسة الجاية؟", en: "When is the next Aurora session?" },
      a: {
        ar: "موعد الجلسة القادمة وتفاصيلها راح تنعلن عبر حسابات أورورا الرسمية.",
        en: "Our next session is coming soon! The date, time, location, and registration details will be announced on our official platforms."
      },
      keywords: ["امتى", "إمتى", "متى", "موعد", "وقت", "تاريخ", "الجاية", "القادمة", "الجايه", "when", "next session", "date", "time", "schedule"]
    },
    {
      id: "topic",
      q: { ar: "عن شنو الجلسة الجاية؟", en: "What is the next session about?" },
      a: {
        ar: "موضوع الجلسة القادمة راح ينعلن قريباً. راح تتضمن الجلسة أنشطة وتحديات ومشاركة جماعية مرتبطة بالموضوع.",
        en: "The topic of our next session will be announced soon. Participants will take part in interactive activities, speaking challenges, and teamwork designed around the session's theme."
      },
      keywords: ["موضوع", "عن شنو", "عن ماذا", "فكرة الجلسة", "topic", "about what", "theme", "subject"]
    },
    {
      id: "team",
      q: { ar: "شلون أصير جزء من فريق أورورا؟", en: "How can I become part of the Aurora team?" },
      a: {
        ar: "إذا مهتم تنضم للفريق أو تساعد بالفعاليات، التصوير، الإعلام، التنظيم، أو غيرها، تكدر تتواصل ويانا من خلال حسابات أورورا الرسمية.",
        en: "If you are interested in volunteering, helping with activities, photography, media, organisation, or other team responsibilities, you can contact Aurora through its official platforms."
      },
      keywords: ["فريق", "الفريق", "تطوع", "متطوع", "اشتغل وياكم", "تصوير", "اعلام", "تنظيم", "team", "volunteer", "staff", "photography", "media", "help"]
    },
    {
      id: "certificates",
      q: { ar: "أورورا تنطي شهادات؟", en: "Does Aurora provide certificates?" },
      a: {
        ar: "ممكن تقدم أورورا شهادات لبعض الفعاليات أو الإنجازات، حسب طبيعة النشاط والإعلان الخاص بيه.",
        en: "Certificates may be provided for selected events, activities, or achievements. Details will be announced with the relevant event."
      },
      keywords: ["شهادة", "شهادات", "تنطي شهادة", "certificate", "certificates", "certification"]
    },
    {
      id: "contact",
      q: { ar: "شلون أتواصل ويا أورورا؟", en: "How can I contact Aurora?" },
      a: {
        ar: "تكدر تتواصل ويانا من خلال حساب أورورا الرسمي، الموقع، أو البريد الإلكتروني.",
        en: "You can contact Aurora through our official Instagram account, website, or email."
      },
      keywords: ["تواصل", "اتواصل", "رقم", "ايميل", "إيميل", "بريد", "انستا", "انستغرام", "contact", "email", "instagram", "reach", "message"]
    },
    {
      id: "suggest",
      q: { ar: "أكدر أقترح نشاط أو فكرة؟", en: "Can I suggest an activity or idea?" },
      a: {
        ar: "أكيد! أورورا ترحب بالأفكار والفعاليات الجديدة اللي تساعد الناس يمارسون الإنكليزية ويتعلمون بطريقة ممتعة.",
        en: "Absolutely! Aurora welcomes creative ideas, activities, and suggestions that help people practise English, communicate, and enjoy learning together."
      },
      keywords: ["اقترح", "اقتراح", "فكرة", "افكار", "suggest", "suggestion", "idea", "ideas", "propose"]
    },
    {
      id: "feedback",
      q: { ar: "شلون أكدر أعطيكم ملاحظة أو رأي؟", en: "How can I share feedback with Aurora?" },
      a: {
        ar: "يسعدنا نسمع رأيك، سواء إيجابي أو ملاحظة نتطور بيها. تكدر تكتبها مباشرة من قسم «ملاحظاتكم» بالموقع بدون ما تكتب اسمك، وملاحظتك توصل لفريق أورورا فقط وما تنشر.",
        en: "We'd love to hear from you, whether it's praise or something we can improve. Write it directly in the “Your feedback” section on this site, no name needed. Only the Aurora team reads it."
      },
      keywords: ["ملاحظه", "ملاحظات", "ملاحظتي", "رأي", "رايي", "تقييم", "شكوى", "انتقاد", "مشكله", "feedback", "review", "opinion", "complaint", "rate"]
    },
    {
      id: "different",
      q: { ar: "شنو اللي يميز أورورا؟", en: "What makes Aurora different?" },
      a: {
        ar: "أورورا مو مجرد تعلم إنكليزي، وإنما تجربة تجمع الناس من خلال الأنشطة، التحديات، العمل الجماعي، والثقافة. نريد التعلم يكون تجربة يعيشها الشخص، مو مجرد درس.",
        en: "Aurora is not just about learning English. It is about experiencing English through people, activities, teamwork, challenges, and culture. We aim to create a community where learning becomes an experience, not just a lesson."
      },
      keywords: ["يميز", "مميز", "الفرق", "مختلف", "ليش اختاركم", "different", "special", "unique", "why aurora"]
    }
  ]
};
