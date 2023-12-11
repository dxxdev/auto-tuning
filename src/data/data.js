// random id library
import { v4 as randomId } from "uuid";

// import images of products
import {
  antiradar1,
  antiradar2,
  antiradar3,
  antiradar4,
  antiradar5,
  antiradar6,
  antiradar7,
  phoneStend1,
  phoneStend2,
  phoneStend3,
  phoneStend4,
  phoneStend5,
  phoneStend6,
  phoneStend21,
  phoneStend22,
  phoneStend23,
  phoneStend24,
  phoneStend25,
  phoneStend26,
  phoneStend31,
  phoneStend32,
  phoneStend33,
  phoneStend34,
  phoneStend35,
  globusliAtir1,
  globusliAtir2,
  globusliAtir3,
  globusliAtir21,
  globusliAtir22,
  globusliAtir23,
  havoNamlagich1,
  havoNamlagich2,
  havoNamlagich3,
  havoNamlagich4,
  havoNamlagich5,
  havoNamlagich6,
  havoNamlagich7,
  havoNamlagich21,
  havoNamlagich22,
  havoNamlagich23,
  havoNamlagich24,
  havoNamlagich25,
  havoNamlagich26,
  havoNamlagich27,
  havoNamlagich31,
  havoNamlagich32,
  havoNamlagich33,
  samolyotliAtir1,
  samolyotliAtir2,
  samolyotliAtir3,
  samolyotliAtir4,
  samolyotliAtir5,
  samolyotliAtir6,
  vertolyotliAtir1,
  vertolyotliAtir2,
  vertolyotliAtir3,
  vertolyotliAtir4,
  vertolyotliAtir21,
  vertolyotliAtir22,
  vertolyotliAtir23,
  vertolyotliAtir24,
  vertolyotliAtir25,
  phoneStend41,
  phoneStend42,
  phoneStend43,
  phoneStend44,
  phoneStend45,
  phoneStend46,
  vertolyotliAtir31,
  vertolyotliAtir32,
  vertolyotliAtir33,
  havoNamlagich41,
  havoNamlagich42,
  havoNamlagich43,
  havoNamlagich44,
  havoNamlagich45,
  rulQoplamasi1,
  rulQoplamasi2,
  rulQoplamasi3,
  rulQoplamasi4,
  rulQoplamasi5,
  rulQoplamasi21,
  rulQoplamasi22,
  rulQoplamasi23,
  rulQoplamasi24,
  rulQoplamasi25,
  rulQoplamasi26,
  rulQoplamasi31,
  rulQoplamasi32,
  rulQoplamasi33,
  rulQoplamasi34,
  rulQoplamasi35,
  rulQoplamasi36,
  rulQoplamasi37,
  rulQoplamasi38,
  rulQoplamasi39,
  rulQoplamasi310,
  antiradar21,
  antiradar22,
  antiradar23,
  antiradar24,
  antiradar25,
} from "../assets/images";

export const products = [
  {
    id: randomId(),
    productName: `Avtomobil rul g'ilofi "Uglerod", ramkasiz`,
    description:
      "O'rnatish oson va eski yoki iflos rulning ko'rinishini bir zumda yaxshilaydi. Klassik ko'rinishga ega, turli uslublar dizayni bilan silliq va bardoshli PU teridan qilingan. Universal qopqoq ko'pchilik avtomobillarga mos keladi. Asl rulni, issiqlikka chidamli va aşınmaya bardoshli himoya qilishda har qanday avtomobilga qulaylik va moda uslubini qo'shadi.",
    category: "Salon jihozlari",
    images: [
      rulQoplamasi1,
      rulQoplamasi2,
      rulQoplamasi3,
      rulQoplamasi4,
      rulQoplamasi5,
    ],
    shortly: [
      "Avtomobil ichki qismiga individual uslub beradi",
      "Rul g'ildiragini chizish va aşınmadan himoya qiladi",
      "Material: ekologik charm",
      "Rulda tutqichni yaxshilaydi",
      "Hajmi: 38 sm",
      "Universal.",
    ],
    price: 110000,
    rating: 2,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
  {
    id: randomId(),
    productName: `Avtomobil telefon ushlagich`,
    description:
      "Qulay, ixcham telefon ushlagichi, haydovchining ko'rishiga xalaqit bermaydi, har qanday avtomobil interyeriga mos keladi, uyda foydalansa ham buladi. Tezda asboblar paneliga yoki boshqa tekis yuzaga o'rnatiladi va harakatlanayotganda sakrab tushmaydi. O'z o'qi atrofida 360 daraja aylanadi. Juda yuqori sifatli materialdan tayyorlangan, deformatsiyaga, tirnalishga va tirnalishga chidamli. Bundan tashqari, u barmoq izlarini qoldirmaydi va chang cho'kmaydi. Sifatli mustahkam mahkamlash tizimi bilan jihozlangan.",
    category: "Suvenirlar",
    images: [
      phoneStend1,
      phoneStend2,
      phoneStend3,
      phoneStend4,
      phoneStend5,
      phoneStend6,
    ],
    price: 77000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
  {
    id: randomId(),
    productName: `Avtomashinalar uchun vertalyotli atir avtomobil o'rindig'ining xushbo'y terapiyasi`,
    description: `Avtomashinalar uchun vertalyotli atir, avtomobil o'rindig'ining xushbo'y terapiyasi, salonga xit beruvchi atir, avtomashina uchun suvener`,
    category: "Suvenirlar",
    images: [
      vertolyotliAtir1,
      vertolyotliAtir2,
      vertolyotliAtir3,
      vertolyotliAtir4,
    ],
    shortly: ["xit beradi salonni,havosini tozalaydi,hushboʻylantiradi"],
    price: 180000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: true,
    saved: false,
  },
  {
    id: randomId(),
    productName: `Radar Neoline X-COP 7500s`,
    description: `Uzoq masofali o'ta sezgir • radio moduli EXD (X, K, Ka, Laser) • Z signatur filtri • 45 mamlakat politsiya radarlari va kameralarining GPS bazasi • (Rossiya federatsiyasi, Evropa Ittifoqi, Belorusiya, Qozog'iston, O'zbekiston, Ozarbayjon, Armaniston, Gruziya va boshqalar) • Politsiyani aniqlash radiosi • strelka radarlari • Yo'l harakati qoidalarini nazorat qilish kameralari haqida ogohlantirish (ajratilgan chiziq, "orqa tomonga" fotofiksatsiya, yo'l cheti, chorraha, svetofor, piyodalar o'tish joyi) • 45 turdagi statsionar radarlar haqida ovozli ogohlantirish • OLED displey • Displeyda politsiya radariga / tezlik / ruxsat etilgan tezlik / o'rtacha tezlikka joriy masofani ko'rsatish/ • signal kuchi / politsiya radarining nomlari • Shahar / Trek / Turbo Rejimlari / Х-СОР • Xavfli va yolg'on zonalarni qo'shish • Xavfli va yolg'on zonalar radiusini o'rnatish • Sukunat Rejimi • GPS ustuvorligi • Maksimal tezlik • Ruxsat etilgan tezlikni oshirish • Rus tilidagi ovozli maslahatlar • Ovozli ogohlantirish • Ovozni avtomatik o'chirish • Ovoz balandligini sozlash • Yorqinlikni sozlash • Demo rejimi • Aniqlash masofasi 2,5 km gacha • VG-2 aniqlashdan himoya / Spectre 4 • Mini USB port orqali dasturiy ta'minotni yangilash • Kirish kuchlanishi 12V • 2 yillik kafolat • Koreyada ishlab chiqarilgan`,
    category: "Antiradarlar",
    images: [
      antiradar1,
      antiradar2,
      antiradar3,
      antiradar4,
      antiradar5,
      antiradar6,
      antiradar7,
    ],
    price: 920000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: true,
    saved: false,
  },
  {
    id: randomId(),
    productName: `Hidli mashina va quyosh energiyasi bilan ishlaydigan Vertolyot`,
    description:
      "Avtomobil saloni uchun zamonaviy aksessuar - bu vertolyot shaklidagi havo spreyi. Helicopter avtomobil xushbo'yligi erkaklar va ayollar uchun sovg'a sifatida mos keladi! Avtomobil havo spreyi quyosh nurlari quyosh paneliga tushganda aylanadigan vint bilan jihozlangan. Vertolyot engil, yoqimli hidli aromatik moy va pipetka bilan birga keladi. Vertolyotning orqa qopqog'i olib tashlanadi, uning ichida yog'ni tomizish kerak bo'lgan dumaloq yog'och blok bor. Siz o'zingizning sevimli xushbo'y moyingizdan bir tomchi qo'shib, maxsus moy tugaganidan keyin ham avtomobil hididan foydalanishingiz mumkin. Havo spreyi uy, ofis, avtomobil uchun mos keladi.",
    category: "Suvenirlar",
    images: [
      vertolyotliAtir21,
      vertolyotliAtir22,
      vertolyotliAtir23,
      vertolyotliAtir24,
      vertolyotliAtir25,
    ],
    shortly: [
      "Quyosh batareyasining mavjudligi batareyalarsiz ishlashga imkon beradi",
      "Har qanday sirtga o'rnatish uchun mavjud",
      "Xushbo'y moy avtomobilingizdagi hidni yaxshilaydi",
      "Havoni xushbo'ylashtiradi",
    ],
    price: 180000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
  {
    id: randomId(),
    productName:
      "Avtomobillar uchun atir,globusli atir,quyoshdan quvvat olip aylanadigan globusli atir",
    category: "Suvenirlar",
    images: [globusliAtir1, globusliAtir2, globusliAtir3],
    shortly: [
      "Globusli atir,quyoshdan quvvat olip aylanadi,avtomashina saloniga chiroyli xit beradi",
      "Globus parfyum",
      "quyosh tomonidan quvvatlanadi",
      "mashina uchun ajoyib parfyum",
    ],
    price: 220000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: true,
    saved: false,
  },
  {
    id: randomId(),
    productName:
      "Mobile holder 360*c aylanadigan telefon ushlagich holder barcha telefonga",
    description:
      "Mobile holder 360*c aylanadigan telefon ushlagich holder barcha telefonga. Asboblar panelidagi avtomobil ushlagichi 360 graduslik sozlanishi egilish burchagiga ega bo‘lib, u g‘ildirak ortidagi haydovchining qulayligi va qulayligini ta’minlaydi. Po‘lat plastinka ushlagichning mahkam joylashishini va strukturasi mustahkam bo‘lishini ta’minlaydi va magnit silkinish vaqtida smartfonning chiqib ketishiga yo‘l qo‘ymaydi.",
    category: "Suvenirlar",
    images: [
      phoneStend21,
      phoneStend22,
      phoneStend23,
      phoneStend24,
      phoneStend25,
      phoneStend26,
    ],
    price: 65000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: true,
    saved: false,
  },
  {
    id: randomId(),
    productName:
      "Batareya bilan ishlaydigan namlagich, metall korpus, ko'p rangli yorug'lik bilan",
    description: `Spray hajmi: 25-40ml/soat: <br />
    Metall korpus <br />
    Namlagich kichik xona yoki avtomobil ichki qismi uchun mo'ljallangan;<br/>
    Nominal kuchlanish: DC5V; <br />
    Nominal oqim: 300mA;<br/>
    Quvvat USB porti (quvvat kabeli bilan birga) orqali ta'minlanadi, u qurilmaga o'rnatilgan batareya yordamida ham ishlashi mumkin.<br/>
    Tank hajmi: 300 ml;<br/>
    Birinchi marta ishlatishdan oldin paxta sumkasini oling, uni 5 daqiqa davomida suvga botiring.`,
    category: "Suvenirlar",
    images: [
      havoNamlagich1,
      havoNamlagich2,
      havoNamlagich3,
      havoNamlagich4,
      havoNamlagich5,
      havoNamlagich6,
      havoNamlagich7,
    ],
    shortly: [
      "Batareya bilan ishlaydigan namlagich",
      "Metall korpus",
      "Ko'p rangli yorug'lik",
    ],
    price: 150000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: true,
    saved: false,
  },
  {
    id: randomId(),
    productName:
      "Avtomobil, uy, ofis uchun o'rnatilgan qayta zaryadlanuvchi batareya va USB bilan namlagich",
    description: `Namlagich kichik xona yoki avtomobil ichki qismi uchun mo'ljallangan;<br/>
    Nominal kuchlanish: DC5V;<br/>
    Nominal oqim: 300mA;<br/>
    Quvvat USB porti (quvvat kabeli bilan birga) orqali ta'minlanadi, u qurilmaga o'rnatilgan batareya yordamida ham ishlashi mumkin.<br/>
    Ish vaqti: taxminan 4 soat (doimiy buzadigan amallar), taxminan 6 soat (intervalli buzadigan amallar);<br/>
    Tank hajmi: 300 ml;<br/>
    Atomizatsiya hajmi: 25-40ml/soat;<br/>
    Materiallar: ABS/PP/silikon; Og'irligi: 150 g.<br/>
    Hajmi: 69*69*152 mm;`,
    category: "Suvenirlar",
    images: [
      havoNamlagich21,
      havoNamlagich22,
      havoNamlagich23,
      havoNamlagich24,
      havoNamlagich25,
      havoNamlagich26,
      havoNamlagich27,
    ],
    shortly: [
      "Batareya bilan namlagich",
      "O'rnatilgan qayta zaryadlanuvchi batareya va USB bilan",
      "Avtomobil, uy, ofis uchun",
    ],
    price: 120000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
  {
    id: randomId(),
    productName: "Havo namlagich USB Aroma Humidifier",
    description: `Havo namlagichi avtomobilda, kichik turar-joy yoki ofis maydonida qulay mikroiqlimni ta'minlaydi.<br/>
    U quvvatni USB porti (quvvat kabeli bilan birga) orqali oladi va qurilmaga o'rnatilgan batareya yordamida ham ishlashi mumkin. Siz uni avtomobilingizning sigaret chiroqiga yoki noutbukingizga ulashingiz mumkin. Mini namlagich ikki rejimda ishlaydi: 4 soat davomida uzluksiz bug' yoki 6 soat davomida qisqa vaqt oralig'ida.<br/>
    Orqa yorug'lik ikkita rejimda taqdim etiladi: oq yoki ko'p rangli ranglar va uni o'chirish ham mumkin. Hosildorlik 40 ml / soat, tank 300 ml ushlab turadi, bu 6 soat ishlash uchun etarli. Suv bo'lmasa, namlagich avtomatik ravishda o'chadi.<br/>
    Namlagich o'zgaruvchan ranglarga ega orqa yorug'likka ega va tanada joylashgan tugmani bosish orqali boshqariladi.<br/>
    Namlagich kichik xona yoki avtomobil ichki qismi uchun mo'ljallangan;<br/>
    Nominal kuchlanish: DC5v;<br/>
    Nominal oqim: 300mA;<br/>
    Ish vaqti: taxminan 4 soat (uzluksiz buzadigan amallar), taxminan 6 soat (intervalli buzadigan amallar);<br/>
    Tank hajmi: 300 ml;<br/>
    Spray hajmi: 25-40 ml/soat;<br/>
    O'lchami: 69 * 69 * 152 mm;<br/>
    Materiallar: ABS/PP/silikon; Og'irligi: 150gr`,
    category: "Suvenirlar",
    images: [havoNamlagich31, havoNamlagich32, havoNamlagich33],
    shortly: [
      "Namlagich kichik xona yoki avtomobil ichki qismi uchun mo'ljallangan",
      "Nominal kuchlanish: DC5v",
      "Ish vaqti: taxminan 4 soat (uzluksiz buzadigan amallar), taxminan 6 soat (intervalli buzadigan amallar)",
      "Tank hajmi: 300 ml",
      "Spray hajmi: 25-40 ml/soat",
      "Materiallar: ABS/PP/silikon; Og'irligi: 150gr",
      "Nominal oqim: 300 mA",
      "O'lchami: 69 * 69 * 152 mm",
    ],
    price: 110000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
  {
    id: randomId(),
    productName: `Avtomobil uchun quyosh energiyasida ishlovchi hushbo'y hid taratuvchi atir`,
    description:
      "Avtomobil uchun quyosh energiyasida ishlaydi. Quyoshda aylanib hushbo'y hid taratadi.",
    category: "Suvenirlar",
    images: [globusliAtir21, globusliAtir22, globusliAtir23],
    price: 127000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
  {
    id: randomId(),
    productName: `Avtomobil uchun havo hushbo'ylagich "Samolyot"`,
    description:
      "Ushbu havo spreyi yuqori qismida quyosh sensori paneli bilan jihozlangan, qiruvchi pichoqlar quyosh porlaganda avtomatik ravishda aylanadi. Quyosh paneli sensori juda sezgir, hatto past nurli qurilma ham ishlashi mumkin va batareyalarni talab qilmaydi, shuning uchun siz uni uyingizga yoki mashinangizga ajoyib qo'shimcha sifatida ishlatishingiz mumkin va u bulutli kunlarda ham tashqarida ishlashi mumkin. . Vertolyot shaklidagi havo spreyi hidni yaxshiroq taqsimlash va bug'lanishni yaxshilash uchun qiruvchi qanotlardan foydalanadi. Agar ishlatilsa, to'plamga kiritilgan efir moyini tomizing. Mahsulot atrof-muhitni ifloslantirmaydi va bolalar va homilador ayollar uchun ishlatilishi mumkin.",
    category: "Suvenirlar",
    images: [
      samolyotliAtir1,
      samolyotliAtir2,
      samolyotliAtir3,
      samolyotliAtir4,
      samolyotliAtir5,
      samolyotliAtir6,
    ],
    price: 110000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
  {
    id: randomId(),
    productName:
      "Avtomobil telefon ushlagichi Car Mobile Phone Bracket H-XP329",
    description: `Bir tugma bilan avtomatik taymer va bir qo'l bilan qisqich! 1 soniya ichida - o'zingiznikini joylashtiring yoki olib tashlang. bilan ishlash juda oson.<br/>
    Ushbu avtomobil telefon ushlagichi 4 dan 6,8 dyuymgacha bo'lgan barcha turdagi smartfonlar uchun javob beradi.<br/>
    Ushbu avtomobil o'rnatish moslamasi qalin silikondan tayyorlangan bo'lib, u chaqaloq terisiga o'xshaydi. Yumshoq yuza haydash paytida tirnamasdan telefonga mahkam yopishadi. mobil telefon beshikdagi chaqaloqqa o'xshaydi.<br/>
    Koptokning boshi kerakli burchak ostida 360 daraja erkin aylanish imkonini beradi. Kengaytiriladigan kronshteyn sizga eng qulay burchakni ta'minlab, avtomobil telefoningiz moslamasini ideal balandlikka moslashtirishga yordam beradi.`,
    category: "Suvenirlar",
    images: [
      phoneStend31,
      phoneStend32,
      phoneStend33,
      phoneStend34,
      phoneStend35,
    ],
    shortly: [
      "Bir tugma bilan avtomatik taymer va bir qo'l bilan qisqich! 1 soniya ichida - o'zingiznikini joylashtiring yoki olib tashlang. bilan ishlash juda oson.",
      "Ushbu avtomobil telefon ushlagichi 4 dan 6,8 dyuymgacha bo'lgan barcha turdagi smartfonlar uchun javob beradi.",
      "Ushbu avtomobil o'rnatish moslamasi qalin silikondan tayyorlangan bo'lib, u chaqaloq terisiga o'xshaydi. Yumshoq yuza haydash paytida tirnamasdan telefonga mahkam yopishadi. mobil telefon beshikdagi chaqaloqqa o'xshaydi.",
      "Koptokning boshi kerakli burchak ostida 360 daraja erkin aylanish imkonini beradi. Kengaytiriladigan kronshteyn sizga eng qulay burchakni ta'minlab, avtomobil telefoningiz moslamasini ideal balandlikka moslashtirishga yordam beradi.",
    ],
    price: 90000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
  {
    id: randomId(),
    productName: "Mobil telefon ushlagich holder 2-xil turdagi mahsulot",
    description:
      "Mobil avtomobil ushlagich, mobil aloqa vositalarini avtomobilda ishonchli o'rnatishni ta'minlaydi. Funksionalligi tufayli mobil avtomobil ushlagichi turli o'lchamdagi smartfonlar uchun mos keladi.",
    category: "Suvenirlar",
    images: [
      phoneStend41,
      phoneStend42,
      phoneStend43,
      phoneStend44,
      phoneStend45,
      phoneStend46,
    ],
    price: 65000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
  {
    id: randomId(),
    productName: `Avtomobil uchun havo xushbo'ylantirgich`,
    description: `Ushbu havo spreyi tepasida quyosh sensorli panel bilan jihozlangan, quyosh porlayotganida, samolyotning tepasidagi eshkak avtomatik ravishda aylanadi. Quyosh sensori paneli yorug'lik kam bo'lsa, juda sezgir va batareyalarni talab qilmaydi, shuning uchun siz uni uyingiz yoki mashinangizga ajoyib qo'shimcha sifatida ishlatishingiz va bulutli kunlarda ochiq havoda ishlashingiz mumkin. hidni yo'q qiladi va bug'lanishni yaxshilaydi. Foydalanishda kiritilgan efir moyini tushiring. Mahsulot ifloslantiruvchi emas va bolalar va homilador ayollar uchun ishlatilishi mumkin.<br/>
    Qayta ishlatiladigan avtomobil havo spreyi. Xushbo'y hidli shisha, mashinada xushbo'y hid uchun ichki membrana. To'plamdagi elita avtomobil parfyum o'zingiz va yaqinlaringiz uchun ajoyib sovg'a bo'ladi. Avtomobil havo spreyi avtomobilning gorizontal yuzasiga ishonchli tarzda o'rnatiladi. Vertolyot bilan birga mashinada 5 ml hajmdagi atir shishasi ham bor. Avtomobilda yoqimli aromaterapiya kafolatlanadi. Vertolyotga yonilg'i quyish uchun har qanday xushbo'y moydan foydalanishingiz mumkin. Bu shunchaki avtomobildagi hid emas, balki avtomobil saloni uchun zamonaviy aksessuar, avtomobil havo spreyi, aromatik bezak, avtomobil parfyumeriyasi, avtomobil havo spreyi. Sevimli insoningiz, do'stingiz, dadangiz, hamkasbingiz uchun noyob va original sovg'a.`,
    category: "Suvenirlar",
    images: [vertolyotliAtir31, vertolyotliAtir32, vertolyotliAtir33],
    shortly: [
      "Quyosh batareyasining mavjudligi batareyalarsiz ishlashga imkon beradi",
      "Yo'lingizni diversifikatsiya qilish uchun ajoyib imkoniyat",
      "Aylanadigan pichoqlar",
      "Har qanday sirt uchun mavjud",
      "Xushbo'y moy avtomobildagi hidni yaxshilaydi",
      "Havoni xushbo'ylashtiradigan aromatizator",
    ],
    price: 110000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
  {
    id: randomId(),
    productName:
      "Havo namlagichi avtomobil, uy, va ofis uchun, o'rnatilgan akkumulyatorli va USB",
    description: `Havo namlagichi avtomobilda, kichik turar-joy yoki ofis maydonida qulay mikroiqlimni ta'minlaydi.<br/>
    Quvvat USB port orqali (quvvat kabeli kiritilgan) ta'minlanadi, u qurilmaga o'rnatilgan batareya yordamida ham ishlashi mumkin. Siz uni avtomobilingizning sigaret chiroqqa yoki noutbukiga ulashingiz mumkin. Mini namlagich ikki rejimda ishlaydi: 4 soat davomida uzluksiz bug 'yoki 6 soat davomida qisqa vaqt oralig'ida.<br/>
    Orqa yorug'lik ikki rejimda amalga oshiriladi: oq yoki ko'p rangli to'lib-toshgan, u ham o'chirilishi mumkin. Imkoniyati 40 ml/soat, tank 300 ml sig'imga ega, bu 6 soatlik ish uchun etarli. Suv yo'q bo'lganda, namlagich avtomatik o'chirishga o'tadi.<br/>
    Namlagich ranglarini o'zgartiradigan orqa yorug'likka ega, boshqaruv korpusda joylashgan tugmani bosish orqali amalga oshiriladi.<br/>
    Namlagichni ishlatish bo'yicha maslahatlar:<br/>
    1. Namlagichning yuqori qopqog'ini oching.<br/>
    2. Birinchi marta ishlatishdan oldin paxta sumkasini olib tashlang, 5 daqiqa davomida suvga botiring.<br/>
    3. Filtrni plastmassaga soling, uni namlagich qopqog'iga mahkam va ehtiyotkorlik bilan burab qo'ying.<br/>
    3. Namlagich idishining ichiga suv qo'shing.<br/>
    4. USB quvvat manbaiga ulang.<br/>
    5. Bundan tashqari, suvga bir-ikki tomchi lazzat qo'shishingiz mumkin.`,
    category: "Suvenirlar",
    images: [
      havoNamlagich41,
      havoNamlagich42,
      havoNamlagich43,
      havoNamlagich44,
      havoNamlagich45,
    ],
    shortly: [
      "Namlagich kichik xona yoki avtomobil ichki qismi uchun mo'ljallangan",
      "Ish vaqti: taxminan 4 soat (doimiy ishlaganda), taxminan 6 soat (interval bilan ishlaganda)",
      "Hajmi: 300 ml",
    ],
    price: 95000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
  {
    id: randomId(),
    productName:
      "Avtomobil ruli uchun issiq mexlik g'ilof, razmeri universal qishki chexol, polik 37-39 sm",
    description: `Avtomobil ruli uchun g'ilof, puxli chexol, polik, torpeda, glam universal o'lcham 37-39 sm`,
    category: "Salon jihozlari",
    images: [
      rulQoplamasi21,
      rulQoplamasi22,
      rulQoplamasi23,
      rulQoplamasi24,
      rulQoplamasi25,
      rulQoplamasi26,
    ],
    shortly: [
      "Avtomobil ruli uchun issiq mexlik g'ilof",
      "Razmeri universal qishki chexol",
      "Qo'lni issiq tutadi",
    ],
    price: 120000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
  {
    id: randomId(),
    productName:
      "Avtomobil ruli uchun g'ilof Kolibri, universal o'lcham, 37-39 sm",
    description: "Avtomobil ruli uchun chexol, g'ilof",
    category: "Salon jihozlari",
    images: [
      rulQoplamasi31,
      rulQoplamasi32,
      rulQoplamasi33,
      rulQoplamasi34,
      rulQoplamasi35,
      rulQoplamasi36,
      rulQoplamasi37,
      rulQoplamasi38,
      rulQoplamasi39,
      rulQoplamasi310,
    ],
    shortly: [
      "Razmer: Barcha turdagi avtomobillarga tushadi (Tiko, Jiguli mustasno)",
      "Material: Teri",
      "Rangi: 2 xil",
      `"Batafsil" tugmasini bosib salondagi ko'rinishini ko'ring`,
    ],
    price: 65000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
  {
    id: randomId(),
    productName:
      "Radar detektori Neoline X-COP 8800 Wi-Fi, sovg'a sifatida Avtomobil zaryadlovchi",
    description: `O'ZBEKISTONNING NOYOB GPS RADAR VA KAMERALAR BAZASI<br/>
    An'anaga ko'ra, NEOLINE qurilmalarida Rossiya federatsiyasi+MDH va xalqaro kameralar va radarlar bazalari mavjud. Hammasi bo'lib 120 mingdan ortiq nuqta. Ammo biz bir qadam oldinga bordik va x-COP 8800 Wi-Fi-da biz O'zbekistonning noyob, eng to'liq GPS bazasini taklif etamiz, bu raqobatchilar orasida o'xshash emas.<br/>
    Saytda haftada bir marta GPS bazasini yangilashni unutmang www.neoline.ru va siz O'zbekiston yo'llarida biron bir yangi kamerani Sog'inmaysiz.`,
    category: "Antiradarlar",
    images: [antiradar21, antiradar22, antiradar23, antiradar24, antiradar25],
    shortly: [
      "Kafolat-2 yil",
      "Aniqlash masofasi-2.5 km gacha",
      "GPS moduli mavjud",
      "Ish rejimlari - imzo, trek, Turbo, X-COP",
      "Wi-Fi moduli mavjud",
      "Displey-OLED",
      "Shovqinlardan himoya qilish-bor",
      "O'zbekiston kameralari bazasi",
      "O'rnatish usuli-old oynada, quyosh niqobi ostida",
      "Ishlab chiqarilgan mamlakat-Janubiy Koreya",
    ],
    price: 2805000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
  },
];

export let options = {
  style: "decimal",
  useGrouping: true,
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

export const filteredProductForId = id => {
  let infoProductArr = products.filter(product => {
    return product.productName == id;
  });
  return infoProductArr[0];
};
