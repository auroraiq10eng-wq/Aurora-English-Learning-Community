/* ==========================================================
   AURORA — app
   Renders the page from content.js and runs Ask Aurora.
   ========================================================== */
(function () {
  "use strict";

  var D = window.AURORA || {};
  var lang = "ar";

  /* ---------- Interface text ---------- */
  var UI = {
    "ui.skip":  { ar: "تخطَّ إلى المحتوى", en: "Skip to content" },
    "ui.menu":  { ar: "القائمة", en: "Menu" },
    "nav.home": { ar: "الرئيسية", en: "Home" },
    "nav.about": { ar: "من نحن", en: "About" },
    "nav.goals": { ar: "أهدافنا", en: "Our goals" },
    "nav.sessions": { ar: "الجلسات", en: "Sessions" },
    "nav.previous": { ar: "جلسات سابقة", en: "Previous sessions" },
    "nav.activities": { ar: "أنشطة وتحديات", en: "Activities" },
    "nav.team": { ar: "الفريق", en: "Team" },
    "nav.gallery": { ar: "لحظاتنا", en: "Our moments" },
    "nav.ask": { ar: "اسأل أورورا", en: "Ask Aurora" },
    "nav.join": { ar: "انضم إلينا", en: "Join us" },
    "nav.contact": { ar: "تواصل معنا", en: "Contact" },
    "nav.feedback": { ar: "ملاحظاتكم", en: "Feedback" },
    "sec.feedback": { ar: "ملاحظاتكم", en: "Your feedback" },
    "fb.text": { ar: "رأيك يهمنا، سواء عجبك شي أو عندك ملاحظة نطوّر بيها جلساتنا. اكتب لنا بصراحة.", en: "Your opinion matters to us, whether something worked for you or there's something we should improve. Tell us honestly." },
    "fb.note": { ar: "ما نطلب اسمك، وملاحظتك تصل لفريق أورورا فقط ولا تُنشر.", en: "We don't ask for your name. Your feedback goes only to the Aurora team and is never published." },
    "fb.see": { ar: "اكتب ملاحظتك", en: "Write your feedback" },
    "fb.msgLabel": { ar: "ملاحظتك", en: "Your feedback" },
    "fb.msgPh": { ar: "اكتب رأيك بصراحة…", en: "Tell us honestly…" },
    "fb.send": { ar: "أرسل ملاحظتك", en: "Send feedback" },
    "fb.sending": { ar: "جارٍ الإرسال…", en: "Sending…" },
    "fb.thanks": { ar: "وصلتنا ملاحظتك. شكراً لأنك تساعدنا نتطور!", en: "We got your feedback. Thank you for helping us improve!" },
    "fb.again": { ar: "أرسل ملاحظة أخرى", en: "Send another" },
    "fb.errMsg": { ar: "اكتب ملاحظتك قبل الإرسال.", en: "Write your feedback before sending." },
    "fb.errNet": { ar: "ما وصلت الملاحظة بسبب مشكلة بالاتصال. تأكد من الإنترنت وجرّب مرة ثانية.", en: "Your feedback didn't send because of a connection problem. Check your internet and try again." },
    "fb.wait": { ar: "انتظر قليلاً قبل إرسال ملاحظة ثانية.", en: "Please wait a moment before sending another." },

    "hero.name": { ar: "مجتمع أورورا لتعلّم اللغة الإنكليزية", en: "Aurora English Learning Community" },
    "hero.register": { ar: "سجّل في الجلسة القادمة", en: "Register for the next session" },
    "hero.next": { ar: "الجلسة القادمة", en: "Next session" },
    "hero.ask": { ar: "اسأل أورورا", en: "Ask Aurora" },

    "sec.about": { ar: "من نحن", en: "About Aurora" },
    "sec.mission": { ar: "رسالتنا", en: "Our mission" },
    "sec.vision": { ar: "رؤيتنا", en: "Our vision" },
    "sec.goals": { ar: "أهدافنا", en: "Our goals" },
    "sec.sessions": { ar: "الجلسة القادمة", en: "Upcoming session" },
    "sec.previous": { ar: "جلسات سابقة", en: "Previous sessions" },
    "sec.activities": { ar: "أنشطة وتحديات", en: "Activities & challenges" },
    "sec.team": { ar: "فريق أورورا", en: "Our team" },
    "sec.gallery": { ar: "لحظاتنا", en: "Our moments" },
    "sec.join": { ar: "انضم إلى أورورا", en: "Join Aurora" },
    "sec.contact": { ar: "تواصل معنا", en: "Contact us" },

    "status.open": { ar: "التسجيل مفتوح", en: "Registration open" },
    "status.soon": { ar: "يُعلن قريباً", en: "Announcing soon" },
    "status.full": { ar: "اكتمل العدد", en: "Fully booked" },
    "status.closed": { ar: "التسجيل مغلق", en: "Registration closed" },
    "s.date": { ar: "التاريخ", en: "Date" },
    "s.time": { ar: "الوقت", en: "Time" },
    "s.place": { ar: "المكان", en: "Place" },
    "s.register": { ar: "سجّل الآن", en: "Register now" },
    "s.soonTitle": { ar: "جلستنا القادمة في الطريق", en: "Our next session is on its way" },
    "s.soonText": { ar: "نعلن الموعد والموضوع ورابط التسجيل على إنستغرام أولاً. تابعنا حتى لا يفوتك الإعلان.", en: "We announce the date, topic, and registration link on Instagram first. Follow us so you don't miss it." },
    "s.closedText": { ar: "التسجيل لهذه الجلسة مغلق. تابعنا على إنستغرام لتعرف موعد الجلسة التي بعدها.", en: "Registration for this session is closed. Follow us on Instagram to hear about the next one." },
    "s.follow": { ar: "تابع أورورا على إنستغرام", en: "Follow Aurora on Instagram" },
    "s.openTitle": { ar: "التسجيل مفتوح للجلسة القادمة", en: "Registration is open for our next session" },
    "s.openText": { ar: "سجّل مكانك الآن. تجد موعد الجلسة ومكانها ورسومها داخل نموذج التسجيل، وننشر كل التفاصيل على إنستغرام.", en: "Save your spot now. The session date, venue, and fee are in the registration form, and we post every detail on Instagram." },
    "form.title": { ar: "التسجيل في جلسة أورورا", en: "Register for an Aurora session" },
    "form.close": { ar: "إغلاق", en: "Close" },
    "form.loading": { ar: "جارٍ تحميل النموذج…", en: "Loading the form…" },
    "form.newTab": { ar: "افتح النموذج في صفحة جديدة", en: "Open the form in a new page" },

    "prev.empty": { ar: "ستظهر هنا جلساتنا السابقة مع صورها وأبرز لحظاتها.", en: "Our previous sessions will appear here, with photos and highlights." },
    "team.empty": { ar: "سنعرّفكم هنا قريباً على الفريق الذي يصنع أورورا.", en: "You'll meet the team behind Aurora here soon." },
    "team.join": { ar: "انضم للفريق", en: "Join the team" },
    "gal.empty": { ar: "صور لحظاتنا في الطريق. شاهد أحدثها على إنستغرام.", en: "Photos of our moments are on their way. See the latest on Instagram." },
    "gal.open": { ar: "شاهد على إنستغرام", en: "View on Instagram" },
    "highlights": { ar: "أبرز اللحظات", en: "Highlights" },

    "ask.sub": { ar: "عندك سؤال؟ جوابك هنا.", en: "Have a question? Find your answer." },
    "ask.label": { ar: "اكتب سؤالك", en: "Type your question" },
    "ask.placeholder": { ar: "اكتب سؤالك هنا…", en: "Type your question…" },
    "ask.send": { ar: "إرسال", en: "Send" },
    "ask.hello": { ar: "أهلاً بيك في أورورا! 👋 اختر سؤالاً من الأسئلة بالأسفل، أو اكتب سؤالك.", en: "Welcome to Aurora! 👋 Pick a question below, or type your own." },
    "ask.miss": { ar: "ما عندي جواب جاهز لهذا السؤال. تكدر تراسلنا مباشرة وراح نرد عليك، أو جرّب واحد من هذه الأسئلة:", en: "I don't have an answer ready for that one. Message us directly and we'll reply, or try one of these:" },
    "ask.when": { ar: "الجلسة القادمة: ", en: "Next session: " },
    "ask.topicIs": { ar: "موضوع الجلسة القادمة هو: ", en: "The next session's topic is: " },
    "ask.regOpen": { ar: "التسجيل مفتوح الآن للجلسة القادمة.", en: "Registration for the next session is open now." },
    "ask.where": { ar: "مكان الجلسة القادمة: ", en: "Next session venue: " },
    "ask.see": { ar: "تفاصيل الجلسة", en: "Session details" },

    "join.attendTitle": { ar: "احضر جلستنا القادمة", en: "Come to our next session" },
    "join.attendText": { ar: "ما تحتاج تكون بطلاقة. تعال تمارس، تتعلم، وتتعرف على ناس يشاركونك نفس الهدف.", en: "You don't need to be fluent. Come to practise, learn, and meet people who share the same goal." },
    "join.attendSoon": { ar: "تابع الإعلان", en: "Follow the announcement" },
    "join.teamTitle": { ar: "كن جزءاً من فريق أورورا", en: "Become part of the Aurora team" },
    "join.teamText": { ar: "تحب تساعد بالفعاليات، التصوير، الإعلام، أو التنظيم؟ نرحب بيك ويانا.", en: "Want to help with activities, photography, media, or organisation? We'd love to have you." },
    "join.teamBtn": { ar: "قدّم للتطوع", en: "Apply to volunteer" },
    "join.teamMsg": { ar: "راسلنا على إنستغرام", en: "Message us on Instagram" },

    "c.instagram": { ar: "إنستغرام", en: "Instagram" },
    "c.email": { ar: "البريد الإلكتروني", en: "Email" },
    "c.tiktok": { ar: "تيك توك", en: "TikTok" },
    "c.telegram": { ar: "تيليغرام", en: "Telegram" },
    "c.copy": { ar: "نسخ", en: "Copy" },
    "c.copied": { ar: "تم النسخ ✓", en: "Copied ✓" },
    "c.copyEmail": { ar: "نسخ البريد الإلكتروني", en: "Copy email address" }
  };

  /* ---------- Small helpers ---------- */
  function t(key) { var v = UI[key]; return v ? (v[lang] || v.ar) : key; }
  function L(obj) { if (!obj) return ""; if (typeof obj === "string") return obj; return obj[lang] || obj.ar || obj.en || ""; }
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function safeUrl(u) {
    u = String(u || "").trim();
    return /^(https?:|mailto:|assets\/|\.\/|#)/i.test(u) ? u : "";
  }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  var ICON = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.4 2.6 2.2 4.4 5 4.6"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M21 4 3 11l6 2.2L18 7l-7 7.4V20l3.3-3.6L18 19z"/></svg>',
    speak: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v10H9l-5 4z"/><path d="M8 9h8M8 12h5"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M13 3 5 13h6l-1 8 8-10h-6z"/></svg>',
    dice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="9" cy="9" r="1.2" fill="currentColor"/><circle cx="15" cy="15" r="1.2" fill="currentColor"/><circle cx="15" cy="9" r="1.2" fill="currentColor"/><circle cx="9" cy="15" r="1.2" fill="currentColor"/></svg>',
    team: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 19c.6-3.3 3-5 6-5s5.4 1.7 6 5M15 14.2c2.6-.3 4.7 1.2 5.4 4.3"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c.8 4.6 2.4 6.2 7 7-4.6.8-6.2 2.4-7 7-.8-4.6-2.4-6.2-7-7 4.6-.8 6.2-2.4 7-7z"/><path d="M19 16c.3 1.8 1 2.5 2.5 2.8-1.5.3-2.2 1-2.5 2.7"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z"/></svg>'
  };

  function btn(href, label, kind, extra) {
    href = safeUrl(href);
    if (!href) return "";
    var ext = /^https?:/i.test(href) ? ' target="_blank" rel="noopener"' : "";
    return '<a class="btn ' + (kind || "btn-primary") + '" href="' + esc(href) + '"' + ext + (extra || "") + ">" + esc(label) + "</a>";
  }

  function regBtn(label, kind) { return btn(S.registrationLink, label, kind, ' data-form="form.title"'); }
  /* ---------- Feedback: private form posted to a Google Form ---------- */
  var FB = D.feedback || {};
  var fbState = { message: "", sent: false };
  var fbLast = 0;
  function fbReady() { return !!(FB.formId && FB.message); }
  function readFb() { var el = $("fb_message"); if (el) fbState.message = el.value; }

  function renderFeedback() {
    var box = $("fbBox");
    if (!fbReady() && !window.AURORA_PREVIEW) { box.innerHTML = btn(links.instagram, t("join.teamMsg"), "btn-primary"); return; }
    if (fbState.sent) {
      box.innerHTML = '<div class="fb-done" role="status"><p>' + t("fb.thanks") + "</p>" +
        '<button type="button" class="btn btn-ghost" id="fbAgain">' + t("fb.again") + "</button></div>";
      $("fbAgain").addEventListener("click", function () { fbState.sent = false; renderFeedback(); $("fb_message").focus(); });
      return;
    }
    box.innerHTML =
      '<form class="fb-form" id="fbForm" novalidate>' +
        '<label class="sr" for="fb_message">' + t("fb.msgLabel") + "</label>" +
        '<textarea id="fb_message" rows="5" maxlength="2000" placeholder="' + esc(t("fb.msgPh")) + '">' + esc(fbState.message) + "</textarea>" +
        '<div class="fb-hp" aria-hidden="true"><label for="fb_website">Website</label><input id="fb_website" type="text" tabindex="-1" autocomplete="off"></div>' +
        '<p class="fb-msg" id="fbMsg" role="alert"></p>' +
        '<button type="submit" class="btn btn-primary fb-send" id="fbSend">' + t("fb.send") + "</button>" +
      "</form>";
    $("fbForm").addEventListener("submit", sendFeedback);
    $("fbForm").addEventListener("input", function () { var m = $("fbMsg"); if (m) m.textContent = ""; });
  }

  function sendFeedback(e) {
    e.preventDefault();
    readFb();
    var msg = $("fbMsg"), sendBtn = $("fbSend");
    msg.textContent = "";
    if (!fbState.message.trim()) { msg.textContent = t("fb.errMsg"); $("fb_message").focus(); return; }
    if (Date.now() - fbLast < 30000) { msg.textContent = t("fb.wait"); return; }
    function done() { fbLast = Date.now(); fbState = { message: "", sent: true }; renderFeedback(); }
    if ($("fb_website").value) { done(); return; } /* bot trap */
    if (window.AURORA_PREVIEW || !fbReady()) { done(); return; }
    var body = new URLSearchParams();
    body.append("entry." + String(FB.message).replace(/^entry\./, ""), fbState.message.trim());
    sendBtn.disabled = true; sendBtn.textContent = t("fb.sending");
    fetch("https://docs.google.com/forms/d/e/" + encodeURIComponent(FB.formId) + "/formResponse", { method: "POST", mode: "no-cors", body: body })
      .then(done, function () { sendBtn.disabled = false; sendBtn.textContent = t("fb.send"); msg.textContent = t("fb.errNet"); });
  }

  /* ---------- Dates ---------- */
  function fmtDate(iso) {
    if (!iso) return "";
    var p = String(iso).split("-");
    if (p.length !== 3) return iso;
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    if (isNaN(d)) return iso;
    try {
      return d.toLocaleDateString(lang === "ar" ? "ar-IQ-u-nu-latn" : "en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    } catch (e) { return iso; }
  }
  function fmtTime(hm) {
    if (!hm) return "";
    var p = String(hm).split(":");
    var h = +p[0], m = +(p[1] || 0);
    if (isNaN(h)) return hm;
    var d = new Date(2000, 0, 1, h, m);
    try {
      return d.toLocaleTimeString(lang === "ar" ? "ar-IQ-u-nu-latn" : "en-GB", { hour: "numeric", minute: "2-digit", hour12: true });
    } catch (e) { return hm; }
  }

  /* ---------- Session helpers ---------- */
  var S = D.nextSession || {};
  var links = D.links || {};
  function sessionOpen() { return S.status === "open" && !!safeUrl(S.registrationLink); }
  function sessionHasDetails() { return !!(L(S.title) || S.date); }

  /* ---------- Render: static copy ---------- */
  function renderCopy() {
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = t(el.getAttribute("data-t")); });
    document.querySelectorAll("[data-tt]").forEach(function (el) { el.setAttribute("title", t(el.getAttribute("data-tt"))); });
    document.querySelectorAll("[data-tp]").forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-tp"))); });
    document.querySelectorAll("[data-c]").forEach(function (el) { el.textContent = L(D[el.getAttribute("data-c")]); });

    $("aboutBody").innerHTML = (D.about && D.about[lang] || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    $("goalList").innerHTML = (D.goals && D.goals[lang] || []).map(function (g) { return "<li>" + esc(g) + "</li>"; }).join("");
    $("actList").innerHTML = (D.activities || []).map(function (a) {
      return '<li class="act"><span class="act-icon">' + (ICON[a.icon] || ICON.spark) + "</span><h3>" + esc(L(a.title)) + "</h3><p>" + esc(L(a.text)) + "</p></li>";
    }).join("");
  }

  /* ---------- Render: hero buttons ---------- */
  function renderHero() {
    var first = sessionOpen()
      ? regBtn(t("hero.register"), "btn-primary")
      : btn("#sessions", t("hero.next"), "btn-primary");
    $("heroActions").innerHTML = first + btn("#ask", t("hero.ask"), "btn-ghost");
  }

  /* ---------- Render: next session ---------- */
  function renderSession() {
    var status = ["open", "soon", "full", "closed"].indexOf(S.status) > -1 ? S.status : "soon";
    var poster = safeUrl(S.poster)
      ? '<img src="' + esc(S.poster) + '" alt="' + esc(L(S.title)) + '" loading="lazy">'
      : '<img class="placeholder" src="assets/img/aurora-mark.png" alt="" width="120" height="120">';

    var body;
    if (!sessionHasDetails() && sessionOpen()) {
      body =
        '<span class="status" data-s="open">' + t("status.open") + "</span>" +
        '<h3 class="session-title">' + t("s.openTitle") + "</h3>" +
        '<p class="session-note">' + t("s.openText") + "</p>" +
        '<div class="session-acts">' + regBtn(t("s.register"), "btn-green") + btn(links.instagram, t("s.follow"), "btn-ghost") + "</div>";
    } else if (!sessionHasDetails()) {
      body =
        '<span class="status" data-s="soon">' + t("status.soon") + "</span>" +
        '<h3 class="session-title">' + t("s.soonTitle") + "</h3>" +
        '<p class="session-note">' + t("s.soonText") + "</p>" +
        btn(links.instagram, t("s.follow"), "btn-ghost");
    } else {
      var facts = "";
      if (S.date) facts += "<div><dt>" + t("s.date") + "</dt><dd>" + esc(fmtDate(S.date)) + "</dd></div>";
      if (S.time) facts += "<div><dt>" + t("s.time") + "</dt><dd>" + esc(fmtTime(S.time)) + "</dd></div>";
      if (L(S.location)) facts += "<div><dt>" + t("s.place") + "</dt><dd>" + esc(L(S.location)) + "</dd></div>";
      var action = "";
      if (sessionOpen()) action = regBtn(t("s.register"), "btn-green");
      else if (status === "full" || status === "closed") action = '<p class="session-note">' + t("s.closedText") + "</p>" + btn(links.instagram, t("s.follow"), "btn-ghost");
      else action = btn(links.instagram, t("s.follow"), "btn-ghost");
      body =
        '<span class="status" data-s="' + status + '">' + t("status." + status) + "</span>" +
        '<h3 class="session-title">' + esc(L(S.title)) + "</h3>" +
        (L(S.topic) ? '<p class="session-topic">' + esc(L(S.topic)) + "</p>" : "") +
        (facts ? '<dl class="facts">' + facts + "</dl>" : "") +
        (L(S.description) ? '<p class="session-note">' + esc(L(S.description)) + "</p>" : "") +
        action;
    }
    $("nextSession").innerHTML = '<article class="session"><div class="session-poster">' + poster + '</div><div class="session-body">' + body + "</div></article>";
  }

  /* ---------- Render: previous, team, gallery ---------- */
  function emptyBlock(textKey, href, labelKey) {
    return '<div class="empty"><p>' + t(textKey) + "</p>" + btn(href, t(labelKey), "btn-ghost") + "</div>";
  }

  function renderPrevious() {
    var list = D.previousSessions || [];
    if (!list.length) { $("previousList").innerHTML = emptyBlock("prev.empty", links.instagram, "s.follow"); return; }
    $("previousList").innerHTML = '<div class="prev-list">' + list.map(function (p) {
      var hl = (p.highlights && p.highlights[lang]) || [];
      var photos = (p.photos || []).filter(safeUrl);
      return '<article class="prev">' +
        "<div>" + (p.date ? '<p class="prev-date">' + esc(fmtDate(p.date)) + "</p>" : "") +
        "<h3>" + esc(L(p.title)) + "</h3>" +
        (L(p.topic) ? '<p class="session-topic">' + esc(L(p.topic)) + "</p>" : "") + "</div>" +
        (L(p.description) ? '<p class="muted">' + esc(L(p.description)) + "</p>" : "") +
        (hl.length ? '<div><h4 class="h3">' + t("highlights") + "</h4><ul>" + hl.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul></div>" : "") +
        (photos.length ? '<div class="prev-photos">' + photos.map(function (src) { return '<div class="ph"><img src="' + esc(src) + '" alt="' + esc(L(p.title)) + '" loading="lazy" draggable="false"></div>'; }).join("") + "</div>" : "") +
        "</article>";
    }).join("") + "</div>";
  }

  function renderTeam() {
    var list = D.team || [];
    var joinHref = links.volunteerForm || "#join";
    if (!list.length) { $("teamList").innerHTML = emptyBlock("team.empty", joinHref, "team.join"); return; }
    $("teamList").innerHTML = '<div class="team-grid">' + list.map(function (m) {
      var ig = safeUrl(m.instagram);
      var handle = ig ? "@" + ig.replace(/\/+$/, "").split("/").pop() : "";
      return '<article class="member">' +
        (safeUrl(m.photo) ? '<img src="' + esc(m.photo) + '" alt="' + esc(L(m.name)) + '" loading="lazy">' : "") +
        "<h3>" + esc(L(m.name)) + '</h3><p class="role">' + esc(L(m.role)) + "</p>" +
        (L(m.bio) ? '<p class="bio">' + esc(L(m.bio)) + "</p>" : "") +
        (ig ? '<a href="' + esc(ig) + '" target="_blank" rel="noopener" dir="ltr">' + esc(handle) + "</a>" : "") +
        "</article>";
    }).join("") + "</div>";
  }

  function renderGallery() {
    var list = (D.gallery || []).filter(function (g) { return safeUrl(g.src); });
    if (!list.length) { $("galleryList").innerHTML = emptyBlock("gal.empty", links.instagram, "gal.open"); return; }
    $("galleryList").innerHTML = '<div class="gal-grid">' + list.map(function (g) {
      return '<figure class="gal"><img src="' + esc(g.src) + '" alt="' + esc(L(g.title)) + '" loading="lazy" draggable="false">' +
        "<figcaption><strong>" + esc(L(g.title)) + "</strong>" + (L(g.caption) ? "<span>" + esc(L(g.caption)) + "</span>" : "") + "</figcaption></figure>";
    }).join("") + "</div>";
  }

  /* ---------- Render: join + contact ---------- */
  function renderJoin() {
    var attendBtn = sessionOpen() ? regBtn(t("s.register"), "btn-primary") : btn(links.instagram, t("join.attendSoon"), "btn-primary");
    var teamBtn = safeUrl(links.volunteerForm) ? btn(links.volunteerForm, t("join.teamBtn"), "btn-green") : btn(links.instagram, t("join.teamMsg"), "btn-green");
    $("joinGrid").innerHTML =
      '<article class="join-card"><h3>' + t("join.attendTitle") + "</h3><p>" + t("join.attendText") + "</p>" + attendBtn + "</article>" +
      '<article class="join-card"><h3>' + t("join.teamTitle") + "</h3><p>" + t("join.teamText") + "</p>" + teamBtn + "</article>";
  }

  function contactItems() {
    var out = [];
    if (links.instagram) out.push({ k: "instagram", href: links.instagram, val: "@" + links.instagram.replace(/\/+$/, "").split("/").pop() });
    if (links.email) out.push({ k: "email", href: "mailto:" + links.email, val: links.email });
    if (links.tiktok) out.push({ k: "tiktok", href: links.tiktok, val: links.tiktok.replace(/^https?:\/\/(www\.)?/, "") });
    if (links.telegram) out.push({ k: "telegram", href: links.telegram, val: links.telegram.replace(/^https?:\/\/(www\.)?/, "") });
    return out;
  }
  function copyBtn(text, label, cls) {
    return '<button type="button" class="' + (cls || "c-copy") + '" data-copy="' + esc(text) + '" data-label="' + esc(label) + '">' + esc(label) + "</button>";
  }
  function renderContact() {
    $("contactList").innerHTML = contactItems().map(function (c) {
      var href = safeUrl(c.href); if (!href) return "";
      var ext = /^https?:/i.test(href) ? ' target="_blank" rel="noopener"' : "";
      var inner = ICON[c.k] + '<span class="c-text"><span class="c-name">' + t("c." + c.k) + '</span><span class="c-val">' + esc(c.val) + "</span></span>";
      if (c.k === "email") {
        var row = window.AURORA_PREVIEW ? '<div class="c-row">' + inner + "</div>" : '<a href="' + esc(href) + '">' + inner + "</a>";
        return '<li class="has-copy">' + row + copyBtn(c.val, t("c.copy")) + "</li>";
      }
      return '<li><a href="' + esc(href) + '"' + ext + ">" + inner + "</a></li>";
    }).join("");
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-copy]");
    if (!b) return;
    var text = b.getAttribute("data-copy"), label = b.getAttribute("data-label");
    function done() { b.textContent = t("c.copied"); setTimeout(function () { b.textContent = label; }, 1800); }
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (err) { /* text stays selectable on the page */ }
      ta.remove();
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
      else fallback();
    } catch (err) { fallback(); }
  });

  /* ==========================================================
     Ask Aurora
     ========================================================== */
  var log = $("chatLog"), chips = $("chatChips"), form = $("chatForm"), input = $("chatInput");
  var FAQ = D.faq || [];
  var busy = false;

  function norm(s) {
    return String(s || "").toLowerCase()
      .replace(/[ً-ٰٟـ]/g, "")
      .replace(/[إأآٱا]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
      .replace(/ؤ/g, "و").replace(/ئ/g, "ي").replace(/گ/g, "ك").replace(/چ/g, "ج")
      .replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
  }

  function score(item, q) {
    var s = 0;
    (item.keywords || []).forEach(function (k) {
      var nk = norm(k);
      if (nk && (" " + q + " ").indexOf(nk.length < 4 ? " " + nk + " " : nk) > -1) s += 2 + nk.length / 4;
    });
    var words = norm(L(item.q) + " " + (item.q.ar || "") + " " + (item.q.en || "")).split(" ");
    q.split(" ").forEach(function (w) { if (w.length > 2 && words.indexOf(w) > -1) s += 1; });
    return s;
  }

  function sessionLine() {
    var bits = [];
    if (L(S.title)) bits.push(L(S.title));
    if (S.date) bits.push(fmtDate(S.date));
    if (S.time) bits.push(fmtTime(S.time));
    if (L(S.location)) bits.push(L(S.location));
    return bits.join("، ").replace(/، /g, lang === "ar" ? "، " : ", ");
  }

  /* Answers 6, 8, 9, 10, 11, 13 use live data from content.js */
  function answer(item) {
    var text = L(item.a), extra = "", acts = "";
    switch (item.id) {
      case "register":
        if (sessionOpen()) { extra = t("ask.regOpen"); acts = regBtn(t("s.register"), "btn-green"); }
        else acts = btn(links.instagram, t("s.follow"), "btn-ghost");
        break;
      case "when":
        if (sessionHasDetails()) { text = t("ask.when") + sessionLine(); acts = btn("#sessions", t("ask.see"), "btn-ghost"); }
        else acts = btn(links.instagram, t("s.follow"), "btn-ghost");
        if (sessionOpen()) acts = regBtn(t("s.register"), "btn-green") + acts;
        break;
      case "topic":
        if (L(S.topic)) text = t("ask.topicIs") + L(S.topic);
        acts = sessionHasDetails() ? btn("#sessions", t("ask.see"), "btn-ghost") : btn(links.instagram, t("s.follow"), "btn-ghost");
        break;
      case "where":
        if (L(S.location)) extra = t("ask.where") + L(S.location);
        break;
      case "team":
        acts = safeUrl(links.volunteerForm) ? btn(links.volunteerForm, t("join.teamBtn"), "btn-green") : btn(links.instagram, t("join.teamMsg"), "btn-ghost");
        break;
      case "feedback":
        acts = btn("#feedback", t("fb.see"), "btn-green");
        break;
      case "contact":
        acts = contactItems().map(function (c) {
          return c.k === "email" ? copyBtn(c.val, t("c.copyEmail"), "btn btn-ghost") : btn(c.href, t("c." + c.k), "btn-ghost");
        }).join("");
        break;
    }
    return "<p>" + esc(text) + "</p>" +
      (extra ? '<p class="extra">' + esc(extra) + "</p>" : "") +
      (acts ? '<div class="acts">' + acts + "</div>" : "");
  }

  function add(cls, html) {
    var el = document.createElement("div");
    el.className = "msg " + cls;
    el.innerHTML = html;
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
    return el;
  }

  function botSay(html) {
    busy = true;
    var dots = add("bot typing", "<i></i><i></i><i></i>");
    setTimeout(function () {
      dots.remove();
      add("bot", html);
      busy = false;
    }, 550);
  }

  function ask(item, typed) {
    if (busy) return;
    add("user", esc(typed || L(item.q)));
    botSay(answer(item));
  }

  function askText(text) {
    if (busy) return;
    var q = norm(text);
    if (!q) return;
    var ranked = FAQ.map(function (f) { return { f: f, s: score(f, q) }; })
      .sort(function (a, b) { return b.s - a.s; });
    if (ranked[0] && ranked[0].s >= 2.5) { ask(ranked[0].f, text); return; }
    add("user", esc(text));
    var sugg = ranked.filter(function (r) { return r.s > 0; }).slice(0, 3).map(function (r) { return r.f; });
    if (sugg.length < 3) FAQ.slice(0, 3 - sugg.length + 3).forEach(function (f) { if (sugg.length < 3 && sugg.indexOf(f) < 0) sugg.push(f); });
    var acts = contactItems().slice(0, 2).map(function (c) {
      return c.k === "email" ? copyBtn(c.val, t("c.copyEmail"), "btn btn-ghost") : btn(c.href, t("c." + c.k), "btn-ghost");
    }).join("");
    var list = sugg.map(function (f) { return '<button type="button" class="chip" data-faq="' + esc(f.id) + '">' + esc(L(f.q)) + "</button>"; }).join("");
    botSay("<p>" + t("ask.miss") + '</p><div class="acts">' + list + "</div>" + (acts ? '<div class="acts">' + acts + "</div>" : ""));
  }

  function renderChat() {
    log.innerHTML = "";
    add("bot", "<p>" + t("ask.hello") + "</p>");
    chips.setAttribute("aria-label", t("nav.ask"));
    chips.innerHTML = FAQ.map(function (f) {
      return '<button type="button" class="chip" data-faq="' + esc(f.id) + '">' + esc(L(f.q)) + "</button>";
    }).join("");
  }

  document.addEventListener("click", function (e) {
    var c = e.target.closest && e.target.closest("[data-faq]");
    if (!c) return;
    var id = c.getAttribute("data-faq");
    var item = FAQ.filter(function (f) { return f.id === id; })[0];
    if (item) ask(item);
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var v = input.value.trim();
    if (!v) return;
    input.value = "";
    askText(v);
  });

  /* ==========================================================
     Registration form popup (Google Forms embed)
     ========================================================== */
  var dlg = $("formDialog"), frame = $("formFrame"), alt = $("formAlt");
  function embedUrl(u) {
    if (!/^https:\/\/docs\.google\.com\/forms\//i.test(u)) return "";
    return u + (u.indexOf("?") > -1 ? "&" : "?") + "embedded=true";
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-form]");
    if (!a) return;
    var src = embedUrl(a.getAttribute("href"));
    if (!src || window.AURORA_NO_EMBED || !dlg || typeof dlg.showModal !== "function") return; /* fall back to opening the link */
    e.preventDefault();
    if (frame.getAttribute("src") !== src) frame.setAttribute("src", src);
    var tk = a.getAttribute("data-form");
    $("formTitle").textContent = t(UI[tk] ? tk : "form.title");
    frame.setAttribute("title", t(UI[tk] ? tk : "form.title"));
    alt.setAttribute("href", a.getAttribute("href"));
    dlg.showModal();
    document.body.style.overflow = "hidden";
  });
  function closeForm() { if (dlg.open) dlg.close(); }
  if (dlg) {
    $("formClose").addEventListener("click", closeForm);
    dlg.addEventListener("click", function (e) { if (e.target === dlg) closeForm(); });
    dlg.addEventListener("close", function () { document.body.style.overflow = ""; });
  }

  /* ==========================================================
     Language, menu, floating button
     ========================================================== */
  function setLang(next) {
    readFb();
    lang = next === "en" ? "en" : "ar";
    var root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = lang === "ar" ? "أورورا | مجتمع لتعلّم اللغة الإنكليزية" : "Aurora | English Learning Community";
    var b = $("langBtn");
    b.textContent = lang === "ar" ? "English" : "العربية";
    b.setAttribute("lang", lang === "ar" ? "en" : "ar");
    b.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    renderAll();
    store("aurora-lang", lang);
  }

  function renderAll() {
    renderCopy(); renderHero(); renderSession(); renderPrevious();
    renderTeam(); renderGallery(); renderJoin(); renderFeedback(); renderContact(); renderChat();
  }

  $("langBtn").addEventListener("click", function () { setLang(lang === "ar" ? "en" : "ar"); });

  var menuBtn = $("menuBtn"), menu = $("menu");
  function closeMenu() { menu.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", function () {
    var open = menu.hidden;
    menu.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  menu.addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  var fab = $("askFab");
  if ("IntersectionObserver" in window) {
    var seen = { home: true, ask: false };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { seen[en.target.id] = en.isIntersecting; });
      fab.classList.toggle("is-hidden", seen.home || seen.ask);
    }, { threshold: 0.15 });
    io.observe($("home")); io.observe($("ask"));
  }

  $("year").textContent = new Date().getFullYear();

  /* Block the long-press / right-click "save image" menu on all pictures and the logo link */
  function isProtected(el) { return el && el.closest && el.closest("img, picture, .brand, .ask-fab, .chat-head, .ripple"); }
  document.addEventListener("contextmenu", function (e) { if (isProtected(e.target)) e.preventDefault(); });
  document.addEventListener("dragstart", function (e) { if (isProtected(e.target)) e.preventDefault(); });
  function lockImages() { document.querySelectorAll("img").forEach(function (i) { i.setAttribute("draggable", "false"); }); }
  lockImages();
  if ("MutationObserver" in window) new MutationObserver(lockImages).observe(document.getElementById("main"), { childList: true, subtree: true });

  var urlLang = (location.search.match(/[?&]lang=(ar|en)/) || [])[1];
  setLang(urlLang || store("aurora-lang") || "ar");
})();
