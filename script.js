const menuItems = [
  {id:1, category:"pasta", price:45000, uz:"Pasta karbonara", ru:"Паста карбонара", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJ_uGM61GYmSwsua0v6KQswf-VHuFRxxfVbijl0G47g&s=10"},
  {id:2, category:"pasta", price:45000, uz:"Tovuqli va qo‘ziqorinli pasta", ru:"Паста с курицей и грибами", image:"https://avatars.mds.yandex.net/get-vertis-journal/4465444/35733a3e-10af-4633-a2cd-de8820a54379.jpeg/1600x1600"},
  {id:3, category:"pasta", price:45000, uz:"Pasta boloneze", ru:"Паста болоньезе", image:"https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=800&q=80"},
  {id:4, category:"fast", price:25000, uz:"Xot-dog", ru:"Хот-дог", image:"https://images.news.ru/2026/07/01/6e518p6Xsh52U8d51X8lW6D5FJEnbrF5NwdPOh8c_1200.png"},
  {id:5, category:"fast", price:40000, uz:"Katta xot-dog", ru:"Хот-дог большой", image:"https://images.news.ru/2025/11/27/h0tUfCb9Cu98UfxGMad7nTW1wtCKvHH78DbQp00w_780.png"},
  {id:6, category:"fast", price:30000, uz:"Tovuqli kesadilla", ru:"Кесадилья с курицей", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwevNCHc5xwEm1XGrA_3gw3c6thtR7H8aLHUs4m-ifnKNDXgT9_ABAy4&s=10"},
  {id:7, category:"fast", price:40000, uz:"Mol go‘shtli kesadilla", ru:"Кесадилья с говядиной", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzrxazpP31mnNWJs43OYLusVRctazUU0UqnZwEWdt5Ajt_QxL0EdTUfsb&s=10"},
  {id:8, category:"burgers", price:65000, uz:"Burger", ru:"Бургер", image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"},
  {id:9, category:"burgers", price:50000, uz:"Kichik burger", ru:"Бургер маленький", image:"https://i.pinimg.com/originals/c3/35/1a/c3351a6caffef93f0a30a920207ccac6.webp?nii=t"},
  {id:27, category:"drinks", price:50000, uz:"Yangi siqilgan multifrukt sharbati (250 ml)", ru:"Свежевыжатый мультифруктовый сок (250 мл)", image:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80"},
  {id:10, category:"drinks", price:15000, uz:"Qora choy", ru:"Чёрный чай", image:"https://www.m24.ru/b/d/nBkSUhL2hFYincqxIL6BrNOp2Z318Ji-miDHnvyDoGuQYX7XByXLjCdwu5tI-BaO-42NvWWBK8AqGfS8kjIzIymM8G1N_xHb1A=dcJXLsSd-nLREL4kdeWOhQ.jpg"},
  {id:11, category:"drinks", price:15000, uz:"Ko‘k choy", ru:"Зелёный чай", image:"https://static.tildacdn.com/tild3232-3461-4638-a362-373161653135/green_tea.png"},
  {id:30, category:"drinks", price:20000, uz:"Mevali choy", ru:"Фруктовый чай", image:"https://thumbs.dreamstime.com/b/none-195581573.jpg?w=992"},
  {id:31, category:"drinks", price:20000, uz:"Sutli choy", ru:"Чай с молоком", image:"https://www.teanadin.ru/upload/webp/100/upload/iblock/303/5psjh8t9oxdbjyusbukuq68w6m7y4f03.webp"},

  {id:32, category:"drinks", price:35000, uz:"Ays Latte", ru:"Айс Латте", image:"https://vkusvill.ru/upload/resize/1321058/1321058_1504x1044x90_c.webp"},
  {id:33, category:"drinks", price:35000, uz:"Ays Kapuchino", ru:"Айс Капучино", image:"https://avatars.mds.yandex.net/get-vertis-journal/4469561/41659866-8506-4f7c-b411-d9bacc71c8d9.jpg/1600x1600"},
  {id:34, category:"drinks", price:20000, uz:"Espresso", ru:"Эспрессо", image:"https://i-coffee.me/wp-content/uploads/2021/08/ChatGPT-Image-25-apr.-2026-g.-19_11_30.png"},
  {id:35, category:"drinks", price:25000, uz:"Kapuchino", ru:"Капучино", image:"https://lungo.by/wp-content/uploads/2025/11/i-1536x1024.jpg"},
  {id:36, category:"drinks", price:30000, uz:"Latte", ru:"Латте", image:"https://www.torrefacto.ru/upload/medialibrary/fb6/wufswbx506htlxuk4qnqwddb8i3w57kp.jpg"},
  {id:37, category:"drinks", price:25000, uz:"Amerikano", ru:"Американо", image:"https://static.vecteezy.com/system/resources/previews/023/010/432/large_2x/the-side-angle-view-of-a-cup-of-coffee-on-the-table-with-ai-generated-free-photo.jpg"},


  {id:12, category:"hot", price:40000, uz:"Gretsiya suvlaki", ru:"Сувлак Греция", image:"https://luding.ru/upload/medialibrary/035/tiyhbaedczpr4ar6nnrtkuvv5od3mzyu.jpg"},
  {id:13, category:"fast", price:35000, uz:"Tortilyadagi shaurma", ru:"Шаурма в тортилье", image:"https://i.ytimg.com/vi/vf8gh9oLmQg/maxresdefault.jpg"},
  {id:14, category:"wok", price:40000, uz:"Tovuqli vetnamcha wok", ru:"Вок вьетнамский с курицей", image:"https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9yZWNpcGVzLzE1NjMyNC9jb3ZlcnMvNEpKdjYzLmpwZWc.jpg"},
  {id:15, category:"wok", price:50000, uz:"Mol go‘shtli wok", ru:"Вок с говядиной", image:"https://www.makfa.ru/upload/iblock/025/6j4suy1m69xtc8bk4os4um0rciibguif.jpg"},
  {id:16, category:"hot", price:30000, uz:"Shirin-nordon sousdagi qovurilgan chuchvara", ru:"Жареные пельмени в кисло-сладком соусе", image:"https://media.ovkuse.ru/images/step_attachments/a865a459-09fc-4ce5-92d4-e9f664772aba/a865a459-09fc-4ce5-92d4-e9f664772aba.jpg"},
  {id:17, category:"sides", price:20000, uz:"Fri kartoshkasi", ru:"Картошка фри", image:"https://e1.edimdoma.ru/data/recipes/0014/9279/149279-ed4_wide.jpg?1759118997"},
  {id:18, category:"sides", price:30000, uz:"Naggets (8 dona)", ru:"Наггетсы 8 шт", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxyBWhY5a0zS6Y0nvrqaTw5FwihHhR0-j5lh-IqeBuQEO-aleFJNvMM1q&s=10"},
  {id:19, category:"sides", price:20000, uz:"Pishloqli tayoqchalar (4 dona)", ru:"Сырные палочки 4 шт", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEN5ztoZ_oMGBhZHjtQXx_GFE3oIhsMzREsYD5bfLXy_5W7wFFeOk28R8&s=10"},
  {id:20, category:"sauces", price:5000, uz:"Koko achchiq firmali sousi (30 g)", ru:"Фирменный соус Коко острый (30 г)", image:"https://i.ytimg.com/vi/hJJAsEcHZHk/maxresdefault.jpg"},
  {id:21, category:"sauces", price:5000, uz:"Tomat ketchup (30 g)", ru:"Томатный кетчуп (30 г)", image:"https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI1MDgxNi9tcWhEOHIuanBlZw.webp"},
  {id:22, category:"sauces", price:5000, uz:"Sarimsoqli sous (30 g)", ru:"Чесночный соус (30 г)", image:"https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MTAyMS8zREtKZ3oucG5n.webp"},
  {id:23, category:"sauces", price:5000, uz:"Pishloqli sous (30 g)", ru:"Соус сырный (30 г)", image:"https://www.koolinar.ru/all_image/life_hacks/0/99/life-hack-5f6fd1f0-9c93-4fe5-9764-7d1d0c460ce4_large.webp"},
  {id:24, category:"salads", price:45000, uz:"Olivye salati (250 g)", ru:"Салат оливье (250 г)", image:"https://avatars.mds.yandex.net/get-vertis-journal/4466156/0102e539-67ae-4992-aa91-303b1d484358.jpg/1600x1600"},
  {id:25, category:"salads", price:40000, uz:"Vinegret salati (250 g)", ru:"Салат винегрет (250 г)", image:"https://static.eldorado.ru/promo/src/klassicheskij-vinegret/img/img9.webp"},
  {id:26, category:"salads", price:70000, uz:"Shiitake salati (250 g)", ru:"Салат шитаки (250 г)", image:"https://i.ytimg.com/vi/R-kmGRRN3Mw/maxresdefault.jpg"},
  
  {id:28, category:"sides", price:20000, uz:"Aydaхо kartoshkasi", ru:"Картофель Айдахо", image:"https://static.tildacdn.com/tild3132-3861-4132-b133-316138393737/1_1.jpg"},
  {id:29, category:"hot", price:40000, uz:"Osma sho‘rva (320 g)", ru:"Осма шурпа (320 г)", image:"https://i.ytimg.com/vi/vAf2rdmsSwo/maxresdefault.jpg"}
  // {id:30, category:'hot, price'}

];

const categories = [
  ["all","Barchasi","Все"],["pasta","Pasta","Паста"],["fast","Fast food","Фастфуд"],
  ["burgers","Burgerlar","Бургеры"],["wok","Wok","Вок"],["hot","Issiq taomlar","Горячее"],
  ["salads","Salatlar","Салаты"],["sides","Gazaklar","Закуски"],["sauces","Souslar","Соусы"],["drinks","Ichimliklar","Напитки"]
];
const translations = {
  uz:{home:"Bosh sahifa",menu:"Menyu",location:"Manzil",eyebrow:"TASTE THE MOMENT",heroDescription:"Har bir lahzada o‘zgacha ta’m va yoqimli muhit.",exploreMenu:"MENYUNI KO‘RISH",scroll:"PASTGA TUSHING",introLeft:"YAXSHI TA’M",introMiddle:"ILIQLIK",introRight:"YOQIMLI LAHZA",ourSelection:"BIZNING TANLOV",menuTitle:"Bizning menyu",menuNote:"O‘zingiz yoqtirgan ta’mni tanlang.",priceNote:"Narxlar so‘mda ko‘rsatilgan. Menyudagi mavjudlik bo‘yicha xodimlarimizdan so‘rang.",findUs:"BIZNI TOPING",visitTitle:"Sizni kutamiz.",visitCopy:"Bizga tashrif buyuring — manzilni xaritadan ko‘rishingiz mumkin.",openMap:"XARITADA KO‘RISH",callUs:"QO‘NG‘IROQ QILING",rights:"Barcha huquqlar himoyalangan.",backTop:"YUQORIGA ↑",search:"Qidirish...",items:"ta mahsulot"},
  ru:{home:"Главная",menu:"Меню",location:"Адрес",eyebrow:"ПОЧУВСТВУЙТЕ МОМЕНТ",heroDescription:"Особенный вкус и приятная атмосфера в каждом моменте.",exploreMenu:"СМОТРЕТЬ МЕНЮ",scroll:"ПРОКРУТИТЕ ВНИЗ",introLeft:"ОТЛИЧНЫЙ ВКУС",introMiddle:"УЮТ",introRight:"ПРИЯТНЫЕ МОМЕНТЫ",ourSelection:"НАШ ВЫБОР",menuTitle:"Наше меню",menuNote:"Выберите вкус по душе.",priceNote:"Цены указаны в сумах. Наличие блюд уточняйте у сотрудников.",findUs:"КАК НАС НАЙТИ",visitTitle:"Мы вас ждём.",visitCopy:"Приходите к нам — адрес можно посмотреть на карте.",openMap:"ПОСМОТРЕТЬ НА КАРТЕ",callUs:"ПОЗВОНИТЕ НАМ",rights:"Все права защищены.",backTop:"НАВЕРХ ↑",search:"Поиск...",items:"позиций"}
};
let language="uz", activeCategory="all";
const grid=document.getElementById("productGrid"), categoryList=document.getElementById("categoryList");
const searchInput=document.getElementById("searchInput");
const money=n=>new Intl.NumberFormat("ru-RU").format(n)+" so‘m";
function renderCategories(){
  categoryList.innerHTML="";
  categories.forEach(([id,uz,ru])=>{
    const b=document.createElement("button"); b.className="category-btn"+(activeCategory===id?" active":"");
    b.textContent=language==="uz"?uz:ru; b.onclick=()=>{activeCategory=id;renderCategories();renderProducts();};
    categoryList.appendChild(b);
  });
}
function renderProducts(){
  const q=searchInput.value.trim().toLocaleLowerCase();
  const shown=menuItems.filter(p=>(activeCategory==="all"||p.category===activeCategory)&&(!q||(p.uz+" "+p.ru).toLocaleLowerCase().includes(q)));
  grid.innerHTML="";
  shown.forEach(p=>{
    const card=document.createElement("article"); card.className="product-card";
    const name=language==="uz"?p.uz:p.ru;
    card.innerHTML=`<div class="product-image-wrap"><img src="${p.image}" alt="${name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'"></div><div class="product-info"><div><h3>${name}</h3><span class="product-category">${categories.find(c=>c[0]===p.category)?.[language==="uz"?1:2]||""}</span></div><span class="product-price">${money(p.price)}</span></div>`;
    grid.appendChild(card);
  });
  document.getElementById("menuCount").textContent=shown.length+" "+translations[language].items;
}
function setLanguage(){
  language=language==="uz"?"ru":"uz";
  document.documentElement.lang=language;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[language][key])el.textContent=translations[language][key];});
  document.getElementById("languageSwitch").textContent=language==="uz"?"РУ":"UZ";
  searchInput.placeholder=translations[language].search;
  renderCategories();renderProducts();
}
document.getElementById("languageSwitch").addEventListener("click",setLanguage);
searchInput.addEventListener("input",renderProducts);
document.getElementById("mobileMenuToggle").addEventListener("click",()=>document.querySelector(".desktop-nav").classList.toggle("open"));
document.querySelectorAll(".desktop-nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".desktop-nav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
renderCategories();renderProducts();
