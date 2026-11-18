const I18N = {
  tg: {
    lc: "tg-TJ", coll: "ru", cur: "сомонӣ",
    title: "Идоракунии кормандон", subtitle: "Рӯйхат, маош ва шӯъбаҳо дар як ҷо",
    theme: "Шаб / Рӯз", export: "Содирот ба CSV", add: "+ Корманди нав",
    stCount: "Шумораи кормандон", stTotal: "Маоши умумӣ (сомонӣ)", stAvg: "Маоши миёна (сомонӣ)", stActive: "Кормандони фаъол",
    search: "Ҷустуҷӯ аз рӯи ном, вазифа, телефон ё почта...", allDepts: "Ҳамаи шӯъбаҳо", allStatus: "Ҳамаи ҳолатҳо",
    nameAsc: "Ном: А → Я", nameDesc: "Ном: Я → А", salDesc: "Маош: баланд → паст", salAsc: "Маош: паст → баланд", dateDesc: "Нав қабулшуда", dateAsc: "Қадимтарин",
    hName: "Корманд", hRole: "Вазифа", hDept: "Шӯъба", hPhone: "Телефон", hSalary: "Маош", hDate: "Санаи қабул", hStatus: "Ҳолат", hAct: "Амал",
    emptyT: "Корманд ёфт нашуд", emptyP: "Ҷустуҷӯро тағйир диҳед ё корманди нав илова кунед.",
    lName: "Ному насаб", lRole: "Вазифа", lDept: "Шӯъба", lPhone: "Телефон", lEmail: "Почтаи электронӣ", lSalary: "Маош (сомонӣ)", lDate: "Санаи қабул", lStatus: "Ҳолат",
    phName: "Масалан: Раҳимов Ҷамшед", phRole: "Барномасоз",
    newTitle: "Корманди нав", editTitle: "Таҳрири корманд", cancel: "Бекор кардан", save: "Нигоҳ доштан", edit: "Таҳрир",
    delTitle: "Корманд нест карда шавад?", delText: n => `«${n}» аз система тамоман нест карда мешавад.`, no: "Не", delYes: "Нест кардан", delBtn: "Нест кардан",
    eName: "Ному насабро пурра нависед", eRole: "Вазифаро нависед", ePhone: "Рақами телефон нодуруст аст", eEmail: "Почтаи электронӣ нодуруст аст", eSalary: "Маош бояд аз 0 зиёд бошад", eDate: "Санаро интихоб кунед",
    tAdd: "Корманд илова карда шуд", tSave: "Маълумоти корманд нигоҳ дошта шуд", tDel: "Корманд аз система нест карда шуд", tCsv: "Файли CSV омода шуд",
    shown: (a, b) => `Нишон дода шуд: ${a} аз ${b}`,
    dept: { it: "IT", fin: "Молия", hr: "Кадрҳо", mkt: "Маркетинг", sales: "Фурӯш", prod: "Истеҳсолот" },
    status: { active: "Фаъол", vacation: "Дар таътил", left: "Озод шудааст" }
  },
  ru: {
    lc: "ru-RU", coll: "ru", cur: "сомони",
    title: "Управление сотрудниками", subtitle: "Список, зарплаты и отделы в одном месте",
    theme: "Ночь / День", export: "Экспорт в CSV", add: "+ Новый сотрудник",
    stCount: "Количество сотрудников", stTotal: "Общая зарплата (сомони)", stAvg: "Средняя зарплата (сомони)", stActive: "Активные сотрудники",
    search: "Поиск по имени, должности, телефону или почте...", allDepts: "Все отделы", allStatus: "Все статусы",
    nameAsc: "Имя: А → Я", nameDesc: "Имя: Я → А", salDesc: "Зарплата: по убыванию", salAsc: "Зарплата: по возрастанию", dateDesc: "Недавно принятые", dateAsc: "Самые давние",
    hName: "Сотрудник", hRole: "Должность", hDept: "Отдел", hPhone: "Телефон", hSalary: "Зарплата", hDate: "Дата приёма", hStatus: "Статус", hAct: "Действие",
    emptyT: "Сотрудники не найдены", emptyP: "Измените поиск или добавьте нового сотрудника.",
    lName: "Фамилия и имя", lRole: "Должность", lDept: "Отдел", lPhone: "Телефон", lEmail: "Электронная почта", lSalary: "Зарплата (сомони)", lDate: "Дата приёма", lStatus: "Статус",
    phName: "Например: Рахимов Джамшед", phRole: "Программист",
    newTitle: "Новый сотрудник", editTitle: "Редактирование сотрудника", cancel: "Отмена", save: "Сохранить", edit: "Изменить",
    delTitle: "Удалить сотрудника?", delText: n => `«${n}» будет полностью удалён из системы.`, no: "Нет", delYes: "Удалить", delBtn: "Удалить",
    eName: "Введите фамилию и имя полностью", eRole: "Введите должность", ePhone: "Неверный номер телефона", eEmail: "Неверный адрес почты", eSalary: "Зарплата должна быть больше 0", eDate: "Выберите дату",
    tAdd: "Сотрудник добавлен", tSave: "Данные сотрудника сохранены", tDel: "Сотрудник удалён из системы", tCsv: "Файл CSV готов",
    shown: (a, b) => `Показано: ${a} из ${b}`,
    dept: { it: "IT", fin: "Финансы", hr: "Кадры", mkt: "Маркетинг", sales: "Продажи", prod: "Производство" },
    status: { active: "Активен", vacation: "В отпуске", left: "Уволен" }
  },
  en: {
    lc: "en-US", coll: "en", cur: "TJS",
    title: "Employee Management", subtitle: "Staff, salaries and departments in one place",
    theme: "Dark / Light", export: "Export to CSV", add: "+ New employee",
    stCount: "Total employees", stTotal: "Total salary (TJS)", stAvg: "Average salary (TJS)", stActive: "Active employees",
    search: "Search by name, position, phone or email...", allDepts: "All departments", allStatus: "All statuses",
    nameAsc: "Name: A → Z", nameDesc: "Name: Z → A", salDesc: "Salary: high → low", salAsc: "Salary: low → high", dateDesc: "Recently hired", dateAsc: "Longest serving",
    hName: "Employee", hRole: "Position", hDept: "Department", hPhone: "Phone", hSalary: "Salary", hDate: "Hire date", hStatus: "Status", hAct: "Action",
    emptyT: "No employees found", emptyP: "Change your search or add a new employee.",
    lName: "Full name", lRole: "Position", lDept: "Department", lPhone: "Phone", lEmail: "Email", lSalary: "Salary (TJS)", lDate: "Hire date", lStatus: "Status",
    phName: "For example: Jamshed Rahimov", phRole: "Developer",
    newTitle: "New employee", editTitle: "Edit employee", cancel: "Cancel", save: "Save", edit: "Edit",
    delTitle: "Delete this employee?", delText: n => `"${n}" will be permanently removed from the system.`, no: "No", delYes: "Delete", delBtn: "Delete",
    eName: "Enter the full name", eRole: "Enter a position", ePhone: "Invalid phone number", eEmail: "Invalid email address", eSalary: "Salary must be greater than 0", eDate: "Choose a date",
    tAdd: "Employee added", tSave: "Employee saved", tDel: "Employee removed from the system", tCsv: "CSV file is ready",
    shown: (a, b) => `Showing ${a} of ${b}`,
    dept: { it: "IT", fin: "Finance", hr: "HR", mkt: "Marketing", sales: "Sales", prod: "Production" },
    status: { active: "Active", vacation: "On vacation", left: "Left" }
  }
};


Object.assign(I18N.tg, {
  chAdmin: "Логин ва парол", tAcc: "Маълумоти ворид нигоҳ дошта шуд",
  hLogin: "Логин", lLogin: "Логин", lPass: "Парол", loginTitle: "Ворид шудан ба система", loginSub: "Логин ва паролро ворид кунед",
  signIn: "Ворид шудан", logout: "Баромадан", chPass: "Тағйири парол", curPass: "Пароли ҷорӣ", newPass: "Пароли нав", repPass: "Пароли навро такрор кунед",
  badCreds: "Логин ё парол нодуруст аст", locked: s => `Кӯшишҳо зиёд шуданд. ${s} сония интизор шавед.`, fillAll: "Логин ва паролро ворид кунед",
  eLogin: "Логин: ақаллан 3 аломат (ҳарф, рақам, . _ -)", eLoginTaken: "Ин логин аллакай банд аст", ePass: "Парол бояд ақаллан 6 аломат бошад", passKeep: "Барои тағйир надодан холӣ гузоред",
  ePassCur: "Пароли ҷорӣ нодуруст аст", ePassMatch: "Паролҳо мувофиқат намекунанд", tPass: "Парол иваз карда шуд", tHello: n => `Хуш омадед, ${n}!`,
  roleAdmin: "Администратор", roleEmp: "Корманд", selfNote: "Шумо танҳо маълумоти шахсии худро мебинед. Барои тағйири маълумот ба администратор муроҷиат кунед."
});
Object.assign(I18N.ru, {
  chAdmin: "Логин и пароль", tAcc: "Данные входа сохранены",
  hLogin: "Логин", lLogin: "Логин", lPass: "Пароль", loginTitle: "Вход в систему", loginSub: "Введите логин и пароль",
  signIn: "Войти", logout: "Выйти", chPass: "Сменить пароль", curPass: "Текущий пароль", newPass: "Новый пароль", repPass: "Повторите новый пароль",
  badCreds: "Неверный логин или пароль", locked: s => `Слишком много попыток. Подождите ${s} сек.`, fillAll: "Введите логин и пароль",
  eLogin: "Логин: минимум 3 символа (буквы, цифры, . _ -)", eLoginTaken: "Этот логин уже занят", ePass: "Пароль должен быть не короче 6 символов", passKeep: "Оставьте пустым, чтобы не менять",
  ePassCur: "Неверный текущий пароль", ePassMatch: "Пароли не совпадают", tPass: "Пароль изменён", tHello: n => `Добро пожаловать, ${n}!`,
  roleAdmin: "Администратор", roleEmp: "Сотрудник", selfNote: "Вы видите только свои личные данные. Для изменения данных обратитесь к администратору."
});
Object.assign(I18N.en, {
  chAdmin: "Login & password", tAcc: "Credentials saved",
  hLogin: "Login", lLogin: "Login", lPass: "Password", loginTitle: "Sign in", loginSub: "Enter your login and password",
  signIn: "Sign in", logout: "Log out", chPass: "Change password", curPass: "Current password", newPass: "New password", repPass: "Repeat new password",
  badCreds: "Incorrect login or password", locked: s => `Too many attempts. Wait ${s} s.`, fillAll: "Enter login and password",
  eLogin: "Login: at least 3 characters (letters, digits, . _ -)", eLoginTaken: "This login is already taken", ePass: "Password must be at least 6 characters", passKeep: "Leave empty to keep unchanged",
  ePassCur: "Current password is incorrect", ePassMatch: "Passwords do not match", tPass: "Password changed", tHello: n => `Welcome, ${n}!`,
  roleAdmin: "Administrator", roleEmp: "Employee", selfNote: "You can only see your own personal data. Contact the administrator to change it."
});

const DEPTS = ["it", "fin", "hr", "mkt", "sales", "prod"];
const STATUSES = ["active", "vacation", "left"];
const OLD_DEPT = { "Молия": "fin", "Кадрҳо": "hr", "Маркетинг": "mkt", "Фурӯш": "sales", "Истеҳсолот": "prod" };
const OLD_STAT = { "Фаъол": "active", "Дар таътил": "vacation", "Озод шудааст": "left" };
const PER_PAGE = 8;
const KEY = "employees_v3", ADMIN_KEY = "kmd_admin", SESSION_KEY = "kmd_session";
const DEFAULT_EMP_PASS = "123456";
const $ = id => document.getElementById(id);

let lang = "tg";
try { lang = localStorage.getItem("lang") || "tg"; } catch (e) {}
if (!I18N[lang]) lang = "tg";
const t = () => I18N[lang];

/* ---------- passwords ---------- */
async function sha(str) {
  if (window.crypto && crypto.subtle) {
    const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
  }
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) { const c = str.charCodeAt(i); h1 = Math.imul(h1 ^ c, 2654435761); h2 = Math.imul(h2 ^ c, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return "f" + (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
}
const newSalt = () => Array.from({ length: 4 }, () => Math.random().toString(36).slice(2)).join("");
async function mkPass(pw) { const salt = newSalt(); return { salt, pass: await sha(salt + pw) }; }
async function verify(rec, pw) { return !!rec && !!rec.salt && (await sha(rec.salt + pw)) === rec.pass; }

/* ---------- data ---------- */
const seed = [
  ["Курбонов Мухаммадшариф","Барномасоз","it","+992 900 11 22 33","m.kurbonov@mail.tj",4000,"2022-03-14","active"],
  ["Раҳимова Нигина","Муҳосиби калон","fin","+992 927 45 67 89","n.rahimova@mail.tj",3500,"2020-09-01","active"],
  ["Ҷӯраев Фарруҳ","Менеҷери кадрҳо","hr","+992 918 33 44 55","f.juraev@mail.tj",3200,"2021-06-20","active"],
  ["Саидова Дилрабо","Дизайнер","mkt","+992 935 77 88 99","d.saidova@mail.tj",2800,"2023-01-10","vacation"],
  ["Назаров Умед","Менеҷери фурӯш","sales","+992 907 12 34 56","u.nazarov@mail.tj",3000,"2019-11-05","active"],
  ["Шарипов Сино","Муҳандис","prod","+992 988 65 43 21","s.sharipov@mail.tj",3700,"2018-04-17","active"],
  ["Давлатова Зарина","Тестер","it","+992 931 90 80 70","z.davlatova@mail.tj",2600,"2024-02-12","left"]
].map((a, i) => ({ id: i + 1, name: a[0], role: a[1], dept: a[2], phone: a[3], email: a[4], salary: a[5], date: a[6], status: a[7] }));

function load() {
  try {
    const d = JSON.parse(localStorage.getItem(KEY));
    if (Array.isArray(d)) return d;
    const old = JSON.parse(localStorage.getItem("employees_v2"));
    if (Array.isArray(old)) return old.map(e => ({ ...e, dept: OLD_DEPT[e.dept] || "it", status: OLD_STAT[e.status] || "active" }));
  } catch (e) {}
  return seed;
}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {} };
let data = load(), admin = null, session = null;
let page = 1, editId = null, delId = null;

const loginKey = s => String(s).trim().toLowerCase();
const loginTaken = (lg, exceptId) => loginKey(lg) === loginKey(admin.login) || data.some(e => e.id !== exceptId && e.login && loginKey(e.login) === loginKey(lg));

async function migrate() {
  try { admin = JSON.parse(localStorage.getItem(ADMIN_KEY)); } catch (e) {}
  if (!admin || !admin.pass) {
    admin = { login: "admin", ...(await mkPass("admin123")) };
    try { localStorage.setItem(ADMIN_KEY, JSON.stringify(admin)); } catch (e) {}
  }
  let changed = false;
  for (const e of data) {
    if (!e.login) {
      let base = (e.email || "user").split("@")[0].replace(/[^a-zA-Z0-9._-]/g, "") || "user", lg = base, n = 1;
      while (loginTaken(lg, e.id)) lg = base + ++n;
      e.login = lg; changed = true;
    }
    if (!e.pass) { Object.assign(e, await mkPass(DEFAULT_EMP_PASS)); changed = true; }
  }
  if (changed) save();
}

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmt = n => Number(n).toLocaleString(t().lc);
const initials = n => n.split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
const color = n => `hsl(${[...n].reduce((a, c) => a + c.charCodeAt(0), 0) * 7 % 360} 45% 42%)`;
const isAdmin = () => !!session && session.role === "admin";

function toast(msg, err) {
  const el = document.createElement("div");
  el.className = "toast" + (err ? " err" : "");
  el.textContent = msg;
  $("toasts").appendChild(el);
  setTimeout(() => { el.style.opacity = 0; el.style.transition = ".4s"; setTimeout(() => el.remove(), 400); }, 2800);
}

function countUp(el, to) {
  const from = Number(el.dataset.v || 0); el.dataset.v = to;
  const start = performance.now(), dur = 700;
  (function step(now) {
    const p = Math.min((now - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(from + (to - from) * e));
    if (p < 1) requestAnimationFrame(step);
  })(start);
}

function updateStats() {
  const total = data.reduce((s, e) => s + e.salary, 0);
  countUp($("stCount"), data.length);
  countUp($("stTotal"), total);
  countUp($("stAvg"), data.length ? Math.round(total / data.length) : 0);
  countUp($("stActive"), data.filter(e => e.status === "active").length);
}

function filtered() {
  const q = $("search").value.toLowerCase().trim();
  const d = $("fDept").value, s = $("fStatus").value;
  const [key, dir] = $("sortBy").value.split("-");
  const T = t();
  const list = data.filter(e =>
    (!d || e.dept === d) && (!s || e.status === s) &&
    (!q || [e.name, e.role, e.phone, e.email, e.login, T.dept[e.dept], T.status[e.status]].some(v => String(v).toLowerCase().includes(q))));
  list.sort((a, b) => {
    const r = key === "name" ? a.name.localeCompare(b.name, T.coll) : key === "salary" ? a.salary - b.salary : a.date.localeCompare(b.date);
    return dir === "asc" ? r : -r;
  });
  return list;
}

function render() {
  if (!isAdmin()) { $("tbody").innerHTML = ""; return; }
  const T = t();
  const list = filtered();
  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  if (page > pages) page = pages;
  const slice = list.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  $("tbody").innerHTML = slice.map((e, i) => `
    <tr class="in" style="animation-delay:${i * 40}ms" data-id="${e.id}">
      <td>${(page - 1) * PER_PAGE + i + 1}</td>
      <td><div class="person"><button class="x" data-del="${e.id}" title="${esc(T.delBtn)}" aria-label="${esc(T.delBtn)}">✕</button><span class="av" style="background:${color(e.name)}">${esc(initials(e.name))}</span><div>${esc(e.name)}<small>${esc(e.email)}</small></div></div></td>
      <td>${esc(e.role)}</td><td>${esc(e.login)}</td><td>${esc(T.dept[e.dept])}</td><td>${esc(e.phone)}</td>
      <td><b>${fmt(e.salary)}</b> ${T.cur}</td><td>${e.date.split("-").reverse().join(".")}</td>
      <td><span class="badge b-${STATUSES.indexOf(e.status)}">${esc(T.status[e.status])}</span></td>
      <td><div class="act"><button class="icon" data-edit="${e.id}">${esc(T.edit)}</button></div></td>
    </tr>`).join("");

  $("empty").hidden = list.length > 0;
  $("pageInfo").textContent = list.length ? T.shown(slice.length, list.length) : "";
  $("pageBtns").innerHTML = pages > 1 ? Array.from({ length: pages }, (_, i) =>
    `<button class="${i + 1 === page ? "on" : ""}" data-p="${i + 1}">${i + 1}</button>`).join("") : "";
}

function renderSelf() {
  const e = session && session.role === "emp" ? data.find(x => x.id === session.id) : null;
  if (!e) { $("profile").innerHTML = ""; return; }
  const T = t();
  const item = (l, v) => `<div class="p-item"><span>${esc(l)}</span><b>${esc(v)}</b></div>`;
  $("profile").innerHTML = `
    <div class="p-head"><span class="av big" style="background:${color(e.name)}">${esc(initials(e.name))}</span>
      <div><h2>${esc(e.name)}</h2><p>${esc(e.role)} · ${esc(T.dept[e.dept])}</p></div>
      <span class="badge b-${STATUSES.indexOf(e.status)}">${esc(T.status[e.status])}</span></div>
    <div class="p-grid">${item(T.lLogin, e.login)}${item(T.lEmail, e.email)}${item(T.lPhone, e.phone)}${item(T.lSalary, fmt(e.salary) + " " + T.cur)}${item(T.lDate, e.date.split("-").reverse().join("."))}${item(T.lDept, T.dept[e.dept])}</div>
    <p class="note">${esc(T.selfNote)}</p>`;
}

/* ---------- routing / session ---------- */
function route() {
  if (session && session.role === "emp" && !data.some(x => x.id === session.id)) session = null;
  const T = t();
  document.querySelectorAll("[data-show]").forEach(el => el.hidden = !(el.dataset.show === "admin" ? isAdmin() : !!session));
  $("loginView").hidden = !!session;
  $("adminView").hidden = !isAdmin();
  $("selfView").hidden = !(session && session.role === "emp");
  $("pwBtn").textContent = isAdmin() ? T.chAdmin : T.chPass;
  $("pwTitle").textContent = isAdmin() ? T.chAdmin : T.chPass;
  if (session) {
    const nm = isAdmin() ? admin.login : (data.find(x => x.id === session.id) || {}).name;
    $("userChip").textContent = `${isAdmin() ? T.roleAdmin : T.roleEmp}: ${nm}`;
  }
  if (isAdmin()) { render(); updateStats(); }
  renderSelf();
  if (!session) setTimeout(() => $("lgUser").focus(), 50);
}
function setSession(s) {
  session = s;
  try { s ? sessionStorage.setItem(SESSION_KEY, JSON.stringify(s)) : sessionStorage.removeItem(SESSION_KEY); } catch (e) {}
}

let fails = 0, lockUntil = 0;
$("loginForm").addEventListener("submit", async ev => {
  ev.preventDefault();
  const T = t(), err = $("lgErr"), lg = $("lgUser").value.trim(), pw = $("lgPass").value;
  const wait = Math.ceil((lockUntil - Date.now()) / 1000);
  if (wait > 0) { err.textContent = T.locked(wait); return; }
  if (!lg || !pw) { err.textContent = T.fillAll; return; }
  let s = null;
  if (loginKey(lg) === loginKey(admin.login)) { if (await verify(admin, pw)) s = { role: "admin" }; }
  else {
    const e = data.find(x => x.login && loginKey(x.login) === loginKey(lg));
    if (e && await verify(e, pw)) s = { role: "emp", id: e.id };
  }
  if (!s) {
    if (++fails >= 5) { fails = 0; lockUntil = Date.now() + 30000; err.textContent = T.locked(30); }
    else err.textContent = T.badCreds;
    $("lgPass").value = ""; return;
  }
  fails = 0; err.textContent = ""; $("lgPass").value = ""; $("lgUser").value = "";
  setSession(s); page = 1; route();
  toast(T.tHello(isAdmin() ? admin.login : data.find(x => x.id === s.id).name));
});
$("logoutBtn").onclick = () => { closeAll(); setSession(null); route(); };

/* ---------- language ---------- */
function fillSelect(id, codes, labels, allLabel) {
  const el = $(id), cur = el.value;
  el.innerHTML = (allLabel ? `<option value="">${esc(allLabel)}</option>` : "") +
    codes.map(c => `<option value="${c}">${esc(labels[c])}</option>`).join("");
  el.value = codes.includes(cur) ? cur : "";
  if (!allLabel && !el.value) el.value = codes[0];
}

function applyLang() {
  const T = t();
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = T[el.dataset.i18n]);
  document.querySelectorAll("[data-i18n-ph]").forEach(el => el.placeholder = T[el.dataset.i18nPh]);
  document.title = T.title;
  fillSelect("fDept", DEPTS, T.dept, T.allDepts);
  fillSelect("fStatus", STATUSES, T.status, T.allStatus);
  fillSelect("fDeptSel", DEPTS, T.dept);
  fillSelect("fStat", STATUSES, T.status);
  $("lang").value = lang;
  if (!$("formModal").hidden) { $("formTitle").textContent = editId ? T.editTitle : T.newTitle; $("passHint").textContent = editId ? T.passKeep : ""; }
  if (!$("delModal").hidden && data.find(x => x.id === delId)) $("delText").textContent = T.delText(data.find(x => x.id === delId).name);
  route();
}

/* ---------- employee form (admin only) ---------- */
function openForm(id) {
  if (!isAdmin()) return;
  editId = id || null;
  const e = data.find(x => x.id === id) || { name: "", role: "", dept: "it", phone: "", email: "", salary: "", date: new Date().toISOString().slice(0, 10), status: "active", login: "" };
  $("formTitle").textContent = id ? t().editTitle : t().newTitle;
  $("fName").value = e.name; $("fRole").value = e.role; $("fDeptSel").value = e.dept;
  $("fPhone").value = e.phone; $("fEmail").value = e.email; $("fSalary").value = e.salary;
  $("fDate").value = e.date; $("fStat").value = e.status; $("fLogin").value = e.login; $("fPass").value = "";
  $("passHint").textContent = id ? t().passKeep : "";
  document.querySelectorAll("#empForm label").forEach(l => { l.classList.remove("bad"); const s = l.querySelector("small"); if (s && s.id !== "passHint") s.textContent = ""; });
  $("formModal").hidden = false; $("fName").focus();
}
const closeAll = () => { ["formModal", "delModal", "pwModal"].forEach(id => $(id).hidden = true); };

function check(id, ok, msg) {
  const l = $(id).closest("label"); l.classList.toggle("bad", !ok);
  const s = l.querySelector("small"); s.textContent = ok ? (id === "fPass" && editId ? t().passKeep : "") : msg; return ok;
}

$("empForm").addEventListener("submit", async ev => {
  ev.preventDefault();
  if (!isAdmin()) return;
  const T = t();
  const v = {
    name: $("fName").value.trim(), role: $("fRole").value.trim(), dept: $("fDeptSel").value,
    phone: $("fPhone").value.trim(), email: $("fEmail").value.trim(),
    salary: Number($("fSalary").value), date: $("fDate").value, status: $("fStat").value,
    login: $("fLogin").value.trim()
  };
  const pw = $("fPass").value;
  const ok = [
    check("fName", v.name.split(/\s+/).length >= 2, T.eName),
    check("fRole", v.role.length > 1, T.eRole),
    check("fPhone", /^[+\d][\d\s()-]{6,}$/.test(v.phone), T.ePhone),
    check("fEmail", /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email), T.eEmail),
    check("fSalary", Number.isFinite(v.salary) && v.salary > 0, T.eSalary),
    check("fDate", !!v.date, T.eDate),
    check("fLogin", /^[a-zA-Z0-9._-]{3,}$/.test(v.login) && !loginTaken(v.login, editId), /^[a-zA-Z0-9._-]{3,}$/.test(v.login) ? T.eLoginTaken : T.eLogin),
    check("fPass", editId ? (pw === "" || pw.length >= 6) : pw.length >= 6, T.ePass)
  ].every(Boolean);
  if (!ok) return;
  if (editId) {
    const e = data.find(x => x.id === editId);
    Object.assign(e, v);
    if (pw) Object.assign(e, await mkPass(pw));
    toast(T.tSave);
  } else { data.push({ id: Date.now(), ...v, ...(await mkPass(pw)) }); toast(T.tAdd); }
  save(); closeAll(); updateStats(); render(); route();
});

document.addEventListener("click", e => {
  const el = e.target;
  if (isAdmin()) {
    if (el.dataset.edit) openForm(Number(el.dataset.edit));
    if (el.dataset.del) {
      delId = Number(el.dataset.del);
      $("delText").textContent = t().delText(data.find(x => x.id === delId).name);
      $("delModal").hidden = false;
    }
    if (el.dataset.p) { page = Number(el.dataset.p); render(); }
  }
  if (el.classList.contains("overlay")) closeAll();
});
document.addEventListener("keydown", e => e.key === "Escape" && closeAll());

$("delYes").onclick = () => {
  if (!isAdmin()) return;
  const row = document.querySelector(`tr[data-id="${delId}"]`);
  closeAll();
  if (row) row.className = "out";
  setTimeout(() => { data = data.filter(x => x.id !== delId); save(); updateStats(); render(); toast(t().tDel, true); }, 330);
};
$("delNo").onclick = closeAll;
$("cancelBtn").onclick = closeAll;
$("addBtn").onclick = () => openForm();

["search", "fDept", "fStatus", "sortBy"].forEach(id => $(id).addEventListener("input", () => { page = 1; render(); }));

$("lang").onchange = e => {
  lang = e.target.value;
  try { localStorage.setItem("lang", lang); } catch (err) {}
  applyLang();
};

/* ---------- change password ---------- */
$("pwBtn").onclick = () => {
  ["pwCur", "pwNew", "pwRep"].forEach(id => { $(id).value = ""; const l = $(id).closest("label"); l.classList.remove("bad"); l.querySelector("small").textContent = ""; });
  $("pwLoginRow").hidden = !isAdmin();
  $("pwLogin").value = isAdmin() ? admin.login : "";
  $("pwLogin").closest("label").classList.remove("bad");
  $("pwNew").closest("label").querySelector("small").textContent = isAdmin() ? t().passKeep : "";
  $("pwModal").hidden = false; $("pwCur").focus();
};
$("pwCancel").onclick = closeAll;
$("pwForm").addEventListener("submit", async ev => {
  ev.preventDefault();
  if (!session) return;
  const T = t(), rec = isAdmin() ? admin : data.find(x => x.id === session.id);
  const cur = $("pwCur").value, nw = $("pwNew").value, rep = $("pwRep").value;
  const okCur = await verify(rec, cur);
  let newLogin = rec.login, loginChanged = false, loginOk = true;
  if (isAdmin()) {
    newLogin = $("pwLogin").value.trim();
    loginChanged = loginKey(newLogin) !== loginKey(admin.login);
    loginOk = /^[a-zA-Z0-9._-]{3,}$/.test(newLogin) && (!loginChanged || !loginTaken(newLogin, null));
    check("pwLogin", loginOk, /^[a-zA-Z0-9._-]{3,}$/.test(newLogin) ? T.eLoginTaken : T.eLogin);
  }
  const needPw = !(isAdmin() && loginChanged && nw === "");
  const ok = [loginOk, check("pwCur", okCur, T.ePassCur),
    check("pwNew", needPw ? nw.length >= 6 : true, T.ePass),
    check("pwRep", nw === rep, T.ePassMatch)].every(Boolean);
  if (!ok) return;
  if (nw) Object.assign(rec, await mkPass(nw));
  if (isAdmin()) { admin.login = newLogin; try { localStorage.setItem(ADMIN_KEY, JSON.stringify(admin)); } catch (e) {} } else save();
  route();
  closeAll(); toast(isAdmin() ? T.tAcc : T.tPass); return;
  closeAll(); toast(T.tPass);
});

/* ---------- export / theme ---------- */
$("exportBtn").onclick = () => {
  if (!isAdmin()) return;
  const T = t();
  const rows = [["№", T.hName, T.hRole, T.hLogin, T.hDept, T.hPhone, T.lEmail, T.hSalary, T.hDate, T.hStatus],
    ...filtered().map((e, i) => [i + 1, e.name, e.role, e.login, T.dept[e.dept], e.phone, e.email, e.salary, e.date, T.status[e.status]])];
  const csv = "\ufeff" + rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  a.download = "employees.csv"; a.click(); toast(T.tCsv);
};

$("themeBtn").onclick = () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
};
try { document.documentElement.dataset.theme = localStorage.getItem("theme") || "light"; } catch (e) {}

/* ---------- start ---------- */
(async function init() {
  await migrate();
  try { session = JSON.parse(sessionStorage.getItem(SESSION_KEY)); } catch (e) { session = null; }
  if (session && session.role === "admin" && !admin) session = null;
  applyLang();
})();