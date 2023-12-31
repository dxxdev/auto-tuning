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
  videoRegistrator1,
  videoRegistrator2,
  videoRegistrator3,
  videoRegistrator4,
  videoRegistrator5,
  monitor1,
  monitor2,
  monitor3,
  monitor4,
  monitor5,
  monitor6,
  monitor7,
  monitor21,
  monitor22,
  monitor23,
  monitor24,
  videoRegistrator21,
  videoRegistrator22,
  videoRegistrator23,
  videoRegistrator24,
  videoRegistrator25,
  videoRegistrator26,
  videoRegistrator27,
  videoRegistrator28,
  videoRegistrator31,
  videoRegistrator32,
  videoRegistrator33,
  videoRegistrator34,
  videoRegistrator35,
  videoRegistrator36,
  videoRegistrator37,
  videoRegistrator38,
  videoRegistrator39,
  monitor31,
  monitor32,
  monitor33,
  monitor41,
  monitor42,
  monitor43,
  antiradar31,
  antiradar32,
  antiradar33,
  antiradar34,
  antiradar41,
  antiradar42,
  antiradar43,
  antiradar44,
  antiradar45,
} from "../assets/images";
import { toast } from "react-toastify";

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
    isItNew: false,
    inAction: false,
    recommend: true,
    viewed: false,
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
    isItNew: false,
    inAction: false,
    recommend: false,
    viewed: false,
  },
  {
    id: randomId(),
    productName:
      "Avtomobil monitori Lenovo 10.2 9, 4+64 2+32 Gentra Lasetti Cobalt Nexia3 Spark +Ramka",
    description: `Avtomobil monitori Lenovo 10.2 / 9, 4+64/ 2+32 Gentra, Lasetti Cobalt, Nexia3 ramka bilan fotosurat2 Gb RAM va 32 Gb o'rnatilgan xotira va 1,3 GH 32 bit chastotali 4 yadroli protsessorga ega CC2L Plus bort kompyuteri, mukammal dasturiy ta'minot muvozanatli va muammosiz ishlaydi.



    Qurilmadagi o'rnatilgan WiFi antennalari tufayli Internetga kirish har doim mumkin.
    
    
    
    1280x720 o‘lchamli va IPS+2,5D 16:9 matritsasiga ega 9,0 dyuymli ekranda barcha ranglar va bo‘yoqlar har qanday burchakdan mukammal ko‘rinadi. Displey yorqin orqa yorug‘likka ega va hatto quyosh nurida ham barcha boshqaruv elementlari ko‘rinadi.
    
    
    
    Qurilmada ko'plab ilovalar allaqachon o'rnatilgan (Yandex + Google Play va boshqalar).
    
    
    
    Shuningdek, flesh-disklar, DVR va shinalar bosimi sensorlarini ulashingiz mumkin bo'lgan ikkita USB chiqishi mavjud.
    
    
    
    Qurilma NXP6856+RDS radio moduli, TDA7388 ovoz kuchaytirgichi bilan jihozlangan va 16 diapazonli ekvalayzerga ega. Kutish rejimida radio 10 mA quvvat sarflaydi. Bluetooth sinxronizatsiyasi yordamida siz qo'ng'iroqlarni qabul qilishingiz va qurilmaning o'zida musiqa tinglashingiz mumkin.
    
    
    
    Universal 2DIN (ramka o'lchami 178x102 mm), ko'plab modellarga mos keladi: Kia, Hyundai, Nissan, Honda, Volkswagen, Subaru, Toyota, Lexus, Mitsubishi, Ford, Chevrolet, Citroen, Datsun, Daewoo, Fiat, Opel, Audi, BMW , Mercedes, Peugeot, Mazda, Skoda, Suzuki, Renault, Lifan, SsangYong, Chery, Lada, Lada, VAZ, UAZ, Gazelle, Gaz va boshqalar.`,
    category: "Monitorlar",
    shortly: undefined,
    images: [monitor31, monitor32, monitor33],
    price: 999000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: true,
    saved: false,
    isItNew: false,
    inAction: true,
    recommend: false,
    viewed: false,
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
    isItNew: false,
    inAction: false,
    recommend: true,
    viewed: false,
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
    isItNew: true,
    inAction: false,
    recommend: false,
    viewed: false,
  },
  {
    id: randomId(),
    productName: "Avtomobil radiosi DV-Pioneer ok AH-777",
    description:
      "Avtomobil radiosi DV-Pioneer.ok AH-777 android - da, 2 + 32 Gb, 7 dyuym. Avtomobil radiosi har qanday avtomobil uchun mos keladi, mosligi 99%. Radio sizning haydash vaqtingizni juda yaxshi yoritadi.",
    category: "Monitorlar",
    shortly: [
      "Android Tizimi",
      "2 Gb operativ xotira",
      "32 Gb ichki xotira",
      "Maksimal quvvat 4x60w",
      "Bluetooth",
      "7 dyuym",
      "SIM-kartani qo'llab-quvvatlash mavjud",
      "Kuchaytirgich mavjud",
      "GPS mavjud",
      "Ta'minot kuchlanishi 12V",
      "Radio qabul qilgich mavjud",
      "Raqamli tyuner mavjud",
      "Stantsiyalarni avtomatik qidirish mavjud",
      "RDS / EON / PTY mavjud",
      "Stereo/mono almashtirish mavjud",
      "Ekvalayzer mavjud",
      "Hajmi 2 DIN",
      "O'rnatilgan xotira mavjud",
      "Ichki xotira turi qattiq disk",
      "Ichki xotira hajmi 32 GB",
      "Operativ xotira hajmi 2 GB",
      "Wi-Fi / USB port mavjud",
      "Displey turi ko'p rangli",
      "Rulda joystik ulanishi mumkin",
    ],
    images: [monitor41, monitor42, monitor43],
    price: 1299000,
    rating: 4,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
    isItNew: true,
    inAction: false,
    recommend: true,
    viewed: false,
  },
  {
    id: randomId(),
    productName:
      "Radar detektor SilverStone F1 Hybrid S-Bot Pro+Videoregistrator",
    description:
      "-SilverStone F1 HYBRID S-bot PRO omni Vision 4689 matritsasi Tayvanning taniqli ishlab chiqaruvchisi ait 8339 protsessori bilan birgalikda kunduzi, kechasi, alacakaranlıkta, kam yorug'lik va har qanday ob-havo sharoitida aniq tasvirni taqdim etadi. Olti qavatli shisha linza va 145° ob'ektiv ko'rish burchagi dvrning mukammal kombinatsiyasini to'ldiradi. Superhd 1296p video o'lchamlari avtomobil oldida sodir bo'ladigan barcha voqealarni yozib olishni ta'minlaydi.",
    category: "Antiradarlar",
    shortly: [
      "Yengilangan soxta signallarni filtrlash tizimi",
      "Bir vaqtning o'zida bir nechta kameralarni aniqlash!",
      "Radarlarning asosiy turlarini signatura bilan aniqlash",
      "O'rnatilgan DRAM xotirasi tufayli yuqori ishonchlilik",
      "Katta yorqin 3 dyuymli displey",
      "Z-imzo filtri, ko'r nuqta sensorlaridan noto'g'ri pozitivlarni iloji boricha kamaytirishga imkon beradi",
      "Politsiya radarlarining yangi GPS bazasi (haftalik yangilanish)",
    ],
    images: [antiradar41, antiradar42, antiradar43, antiradar44, antiradar45],
    price: 2875000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
    isItNew: true,
    inAction: true,
    recommend: true,
    viewed: false,
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
    isItNew: true,
    inAction: false,
    recommend: false,
    viewed: false,
  },
  {
    id: randomId(),
    productName: "Radar-detektor SilverStone F1 MONACO S (UZ)",
    description: `SilverStone F1 Monaco S radar detektori eng ilg'or texnologiyalar asosida ishlaydi, u radar qismi, GPS qabul qiluvchisi va maxsus imzo taxtasining funksionalligini birlashtiradi.`,
    category: "Antiradarlar",
    shortly: [
      "O‘zbekistonda barcha turdagi radarlarni qabul qilishga moslashtirilgan",
      "Rasmiy kafolat",
      "O'zbek va rus tillari",
      "Signature radar detektori",
      "Multaradar, lochin, autocon, kordon, hikvision va boshqa mobil radarlarni qabul qilish",
    ],
    images: [antiradar31, antiradar32, antiradar33, antiradar34],
    price: 1168000,
    rating: 3,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
    isItNew: true,
    inAction: true,
    recommend: true,
    viewed: false,
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
    isItNew: false,
    inAction: false,
    recommend: false,
    viewed: false,
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
    isItNew: true,
    inAction: false,
    recommend: false,
    viewed: false,
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
    isItNew: false,
    inAction: false,
    recommend: false,
    viewed: false,
  },
  {
    id: randomId(),
    productName: "Orqa ko'rish kamerasi bilan DVR",
    description: `DVR oyna avtomobil-bu oddiy orqa ko'rinish oynasi va DVR funksiyalarini birlashtirgan mustahkam qurilma. Bu haydash paytida xavfsizlik va qulaylikni ta'minlaydi.



    Ushbu DVR ikkita linzaga ega va yuqori aniqlikdagi Full HD 1080p videolarni yozib olish imkonini beradi. haydash paytida siz aniq va aniq videoni olishingiz va yo'lda muhim daqiqalarni saqlashingiz mumkin.
    
    
    
    Orqa ko'zgu tufayli siz mashinangiz orqasida nima bo'layotganini osongina boshqarishingiz mumkin, bu ayniqsa to'xtash yoki teskari manevrlarda foydalidir.
    
    
    
    Qurilma DVR-ni osongina sozlash va boshqarish imkonini beruvchi qulay interfeysga ega. Katta va yorqin ekran ajoyib ko'rinish va foydalanish qulayligini ta'minlaydi.
    
    
    
    Ushbu qurilma avtomobilingiz uchun ishonchli va funktsional qo'shimcha bo'lib, yo'lda xavfsiz bo'lishingizga yordam beradi va sayohatingizni yanada qulay qiladi.`,
    category: "Videoregistratorlar",
    images: [
      videoRegistrator1,
      videoRegistrator2,
      videoRegistrator3,
      videoRegistrator4,
      videoRegistrator5,
    ],
    shortly: [
      "Loop yozish funktsiyasi: ha",
      "Video o'lchamlari: Full HD (1920 * 1080 piksel)",
      "Kameraning ko'rish burchagi: 170 daraja",
      "32 GB gacha bo'lgan xotira kartasini qo'llab-quvvatlash",
    ],
    price: 250000,
    rating: 3,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
    isItNew: true,
    inAction: true,
    recommend: true,
    viewed: false,
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
    top: true,
    saved: false,
    isItNew: true,
    inAction: true,
    recommend: false,
    viewed: false,
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
    isItNew: false,
    inAction: false,
    recommend: false,
    viewed: false,
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
    isItNew: false,
    inAction: false,
    recommend: false,
    viewed: false,
  },
  {
    id: randomId(),
    productName:
      "Avtomobil monitorlari Teyes CC2L Plus 10.2 2+32 Gentra, Lasetti Cobalt, Nexia3 ramka bilan",
    description: `Avtomobil monitorlari Teyes CC2L Plus 10.2/2+32 Gentra, Lasetti Cobalt, Nexia3 ramka bilan fotosurat2 Gb RAM va 32 Gb o'rnatilgan xotira va 1,3 GH 32 bit chastotali 4 yadroli protsessorga ega CC2L Plus bort kompyuteri, mukammal dasturiy ta'minot muvozanatli va muammosiz ishlaydi.



    Qurilmadagi o'rnatilgan WiFi antennalari tufayli Internetga kirish har doim mumkin.
    
    
    
    1280x720 o‘lchamli va IPS+2,5D 16:9 matritsasiga ega 9,0 dyuymli ekranda barcha ranglar va bo‘yoqlar har qanday burchakdan mukammal ko‘rinadi. Displey yorqin orqa yorug‘likka ega va hatto quyosh nurida ham barcha boshqaruv elementlari ko‘rinadi.
    
    
    
    Qurilmada ko'plab ilovalar allaqachon o'rnatilgan (Yandex + Google Play va boshqalar).
    
    
    
    Shuningdek, flesh-disklar, DVR va shinalar bosimi sensorlarini ulashingiz mumkin bo'lgan ikkita USB chiqishi mavjud.
    
    
    
    Qurilma NXP6856+RDS radio moduli, TDA7388 ovoz kuchaytirgichi bilan jihozlangan va 16 diapazonli ekvalayzerga ega. Kutish rejimida radio 10 mA quvvat sarflaydi. Bluetooth sinxronizatsiyasi yordamida siz qo'ng'iroqlarni qabul qilishingiz va qurilmaning o'zida musiqa tinglashingiz mumkin.
    
    
    
    Universal 2DIN (ramka o'lchami 178x102 mm), ko'plab modellarga mos keladi: Kia, Hyundai, Nissan, Honda, Volkswagen, Subaru, Toyota, Lexus, Mitsubishi, Ford, Chevrolet, Citroen, Datsun, Daewoo, Fiat, Opel, Audi, BMW , Mercedes, Peugeot, Mazda, Skoda, Suzuki, Renault, Lifan, SsangYong, Chery, Lada, Lada, VAZ, UAZ, Gazelle, Gaz va boshqalar.`,
    category: "Monitorlar",
    images: [
      monitor1,
      monitor2,
      monitor3,
      monitor4,
      monitor4,
      monitor5,
      monitor6,
      monitor7,
    ],
    shortly: [
      "Ekran: 9 dyuymli o'lchamlari 1280 * 720 IPS ",
      "Operatsion tizim: ANDROID 8.1. Yangi funksiyalarni qo'llab-quvvatlaydigan Androidning tez va barqaror versiyasi",
      "Protsessor (CPU): 4 yadroli 1,3 gigagertsli 32 bit Spreadtrum UIS8141EI ARM Cortex A7TM 28NM",
      "Video protsessor (GPU): Ha",
      "Tasodifiy kirish xotirasi (ROM): DDR ? 2 Gb",
      "O'rnatilgan xotira: 32 GB",
      "Tashqi diskni qo'llab-quvvatlash: 2 TB gacha",
      "Navigatsiya dasturi: Yandex-Navigator dasturi, Navitel",
      "Google Play Ha, u to'liq ishlaydi. Ro'yxatdan o'tish talab qilinadi va avtomobil radiosida to'g'ri sana va vaqt belgilanishi kerak.",
      "Rulda boshqaruvi: Qo'llab-quvvatlanadi",
      "Radio tugmasi yoritilishi: standart",
      "Orqa ko'rinish kamerasini qo'llab-quvvatlash: ixtiyoriy",
      "Bluetooth - ovozsiz qo'ng'iroq: Ha",
      "Bluetooth - musiqa uzatish: Ha",
      "DVD drayveri: Yo'q",
      "CD/DVDni qo'llab-quvvatlash: Yo'q",
      "Qo'llab-quvvatlanadigan video formatlari: RMVK, MKV, MOV, WMV, AVI, MpeG, TS va boshqalar.",
      "Qo'llab-quvvatlanadigan audio formatlari: MP3/WMA/AAC/WAV/FLAC va boshqalar.",
      "Kuchaytirgich: TDA7388",
      "Audio DSP protsessori: o'rnatilgan DSP algoritmiga ega protsessor",
      "Ovoz kuchaytirgichining chiqish quvvati: 4 x 50 Vt ",
      "Ovoz sifati: zaxiradan yaxshiroq",
      "GPS antennasi: Chastotasi: 1575,42MHz C/A KODU, sun'iy yo'ldosh qidiruvi uchun 66 kanal, kuzatish uchun 22 kanal",
      "Internet: 3G/4G modem (alohida sotiladi)",
      "USB: 3 ta USB 2.0 porti, 2 TB gacha saqlashni qo'llab-quvvatlaydi ",
      "Wi-Fi: o'rnatilgan Wi-Fi moduli",
      "FM/AM tyuneri: NXP6856+RDS radiostansiyasi belgisi",
      "RDS qo'llab-quvvatlash: Ha",
    ],
    price: 1240000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: true,
    saved: false,
    isItNew: true,
    inAction: true,
    recommend: false,
    viewed: false,
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
    isItNew: true,
    inAction: false,
    recommend: false,
    viewed: false,
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
    isItNew: true,
    inAction: false,
    recommend: false,
    viewed: false,
  },
  {
    id: randomId(),
    productName: "Nakamichi avtomobil monitori",
    description: `nakamichi sifatli manitor car play bor usb orqali car playni ishlatsa boladi Jentra, Lacetti,Nexia 3, Cobalt,Spark tushadi

    sensor fleshka bor
    
     
    
    “Elite_tuning” do'koni jamoasi bizning do'konimizni tanlaganingiz uchun sizga minnatdorchilik bildiradi. Biz do'konni yanada qulayroq qilishga harakat qilamiz va har bir mijozni qadrlaymiz. Biz faqat sifatli mahsulotlarni arzon narxlarda olib kelamiz. Mijozlarimizdan fikr-mulohazalarni olish biz uchun juda muhim, agar siz mahsulotni olgan bo'lsangiz va sizga yoqqan bo'lsa, sharhlarda bu haqda bizga yozing.
    
    
    
    Agar biron sababga ko'ra mahsulot tavsifga mos kelmasa, salbiy sharhlar yozishga shoshilmang, ilova chatida biz bilan bog'laning, biz har qanday muammoga imkon qadar tezroq yechim topamiz.
    
    Sotib olish uchun uni savatga qo'shing
    
    
    
    Bizning do'konimizda siz Turli xil gadjetlarning keng assortimenti topishingiz mumkin!
    
    
    
    Haridingiz Xayrli va Barakalibulsin`,
    category: "Monitorlar",
    images: [monitor21, monitor22, monitor23, monitor24],
    shortly: undefined,
    price: 750000,
    rating: 5,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
    isItNew: false,
    inAction: true,
    recommend: false,
    viewed: false,
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
    isItNew: false,
    inAction: false,
    recommend: false,
    viewed: false,
  },
  {
    id: randomId(),
    productName: "Orqa ko'rinish kamerasi bilan DVR oynasi 2 tasi 1 da",
    description:
      "Diktofonning dizayni orqa ko'zgu ko'rinishida yaratilgan, shuning uchun hech kim uni yozib olish moslamasi ekanligiga shubha qilmaydi. Displey o'chirilganda, magnitafon oyna sifatida ishlatilishi mumkin, video yozish esa avtomatik ravishda davom etadi. Rangli LCD displey oynaning o'ng tomonida joylashgan va diagonali 4,3 dyuymga teng.",
    category: "Videoregistratorlar",
    images: [
      videoRegistrator21,
      videoRegistrator22,
      videoRegistrator23,
      videoRegistrator24,
      videoRegistrator25,
      videoRegistrator26,
      videoRegistrator27,
      videoRegistrator28,
    ],
    shortly: [
      "Kamerani ko'rish burchagi - 170 daraja",
      `LCD displey diagonali: 4,3 "TFT/LCD`,
      "Video yozish o'lchamlari: Full HD (1920 * 1080)",
      "Hajmi: 310 x 80 x 0,8 mm",
      "Xotira kartasini qo'llab-quvvatlash: 32 G gacha microSD",
      "O'rnatilgan lityum batareya: 3,7V 200mAh",
      "Orqa ko'rish kamerasi bor",
      "Tungi rejim - bor",
      "Shok sensori G-sensor - bor",
    ],
    price: 269000,
    rating: 4,
    inTheCart: false,
    countProduct: 1,
    top: true,
    saved: false,
    isItNew: true,
    inAction: true,
    recommend: true,
    viewed: false,
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
    isItNew: false,
    inAction: false,
    recommend: false,
    viewed: false,
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
    isItNew: false,
    inAction: false,
    recommend: false,
    viewed: false,
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
    top: true,
    saved: false,
    isItNew: true,
    inAction: false,
    recommend: false,
    viewed: false,
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
    isItNew: false,
    inAction: false,
    recommend: false,
    viewed: false,
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
    isItNew: false,
    inAction: false,
    recommend: false,
    viewed: false,
  },
  {
    id: randomId(),
    productName:
      "Avtomobil videoregistrator- oyna orqani korish kamerasi bilan Full HD 1080P",
    description:
      "Oynadagi ikki kamerali videoregistrator. Qurilma orqa ko'zgu ko'rinishida ishlab chiqarilgan, buning natijasida u begonalar uchun deyarli sezilmaydi va ko'rinishga xalaqit bermaydi. Universal o'rnatish moslamalari deyarli har qanday avtomobilning standart orqa ko'zgusiga shikast etkazmasdan o'rnatishga imkon beradi. Ko'rish burchagi 170 ° bo'lgan shisha linzalar qatnov qismining butun kengligi bo'ylab, shu jumladan piyodalar yo'laklari bo'ylab harakatlanish holatini videoga olish imkonini beradi. Ixtiyoriy kamera 90 ° burchakka ega va u avtomobil ichidagi yoki orqasidagi vaziyatni suratga olish uchun ishlatilishi mumkin.",
    category: "Videoregistratorlar",
    shortly: [
      "Til: rus tili bor",
      "Ko'rish burchagi: 170 daraja.",
      "Ekran diagonali: 4,3 TFT.",
      "Xotira kartasi formati talablari: microSD 10 tezlik klassi (32 GB gacha)",
      "Video yozish formati: Full HD 1080P, 1920×1080, soniyada 30 kadr",
      "Funktsiyalari: o'rnatilgan mikrofon, zarba sensori (G-sensor), kadrdagi harakat sensori",
      "Videoyozuv: Loop (yozuvni 1 soniyalik davrlar orasida tugatish)",
      "Dinamik to'xtash rejimi: ha",
      "To'liq to'plam: videoregistrator 1 dona. orqa ko'rinish kamerasi 1 dona. quvvat kabeli. 1 ta, o'rnatgich 2 dona.",
    ],
    images: [
      videoRegistrator31,
      videoRegistrator32,
      videoRegistrator33,
      videoRegistrator34,
      videoRegistrator35,
      videoRegistrator36,
      videoRegistrator37,
      videoRegistrator38,
      videoRegistrator39,
    ],
    price: 199000,
    rating: 4,
    inTheCart: false,
    countProduct: 1,
    top: false,
    saved: false,
    isItNew: true,
    inAction: false,
    recommend: false,
    viewed: false,
  },
];

export const commentaries = [
  {
    id: randomId(),
    from: "Boburbek Yo'ldoshev",
    comment:
      "Buyurtma qilingan mahsulotimni yetkazib berishdi, menga juda yoqdi, sotib olishga arziydi :) Mashinamga juda mos tushdi.",
    rating: 5,
  },
  {
    id: randomId(),
    from: "Umirzoq Ramazanov",
    comment:
      "Assalomu aleykum mahsulotni qabul qilib oldim juda antiqa Osvejitel ekan",
    rating: 5,
  },
  {
    id: randomId(),
    from: "Jasurbek Ahmedov",
    comment:
      "Ertalab buyurtma qilgandim, kechqurun olib kelishdi. Sifat va yetkazib berishdan mamnunman.Men hali quyoshda ishlashini tekshirmadim. Lekin baribir rahmat 👍",
    rating: 5,
  },
  {
    id: randomId(),
    from: "Zokir Murodov",
    comment:
      "Telefon ushlagich juda zaifdek tuyulgandi, lekin u o'z o'rnida mustahkam turibdi. Umuman olganda, men xariddan mamnunman. Sotuvchiga rahmat.",
    rating: 5,
  },
  {
    id: randomId(),
    from: "Farhod Azizov",
    comment:
      "Raxmat vaqtida yetib keldi, lekin imkoni boʻlsa tumanlargayam yetkazib berishingizni soʻrab qolardim",
    rating: 4,
  },
];

export const questions = [
  {
    id: randomId(),
    question: "Kompaniyangiz qanday avto tuning xizmatlarini taklif qiladi?",
    answer:
      "Biz avto tuning sohasida keng xil xizmatlar taklif qilamiz, jumladan yoritish, yengillik qo'shish, va modifikatsiya qilish. Bizning professional jamoamiz yetkazib berishni ham amalga oshiradi.",
  },
  {
    id: randomId(),
    question: "Yetkazib berish narxlari va muddatlari qanday?",
    answer:
      "Narxlari va muddatlari buyurtma turlariga bog'liq. Biz mijozlarmizga qulay narxlar va tez yetkazib berishni ta'minlaymiz.",
  },
  {
    id: randomId(),
    question: "Qanday avto modifikatsiya mahsulotlari mavjud?",
    answer:
      "Bizning assortimentimizda ko'p turli avto modifikatsiya mahsulotlari mavjud. Sizning talablaringizni qondirib, eng muhim narsalarni taqdim etamiz.",
  },
  {
    id: randomId(),
    question:
      "Kompaniya xizmati haqida ko'proq ma'lumot olish uchun qanday qadamni bosishim mumkin?",
    answer:
      "Bizning rasmiy veb-saytimizda va ijtimoiy tarmoqlarimizda biz haqimizda ko'proq ma'lumot topishingiz mumkin. Shuningdek, biz bilan bog'lanish uchun aloqa formasini to'ldiring va biz sizga tez orada javob beramiz.",
  },
  {
    id: randomId(),
    question: "Qanday usullarda buyurtma berishim mumkin?",
    answer:
      "Siz buyurtmangizni rasmiy veb-saytimiz orqali, telefon orqali yoki bizning ofisimizda murojaat qilgan holda bering. Biz mijozlarmizni qulay va tez xizmatlar bilan ta'minlashga intilamiz.",
  },
];

export let options = {
  style: "decimal",
  useGrouping: true,
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

export const filteredProductForId = (productName) => {
  let infoProductArr = products.filter((product) => {
    return product.productName == productName;
  });
  return infoProductArr[0];
};

function setCategoryToArray(arr) {
  let categoryes = new Set();
  arr.forEach(function (item) {
    let category = item.category;
    categoryes.add(category);
  });
  let categoryArr = Array.from(categoryes);
  return categoryArr;
}

const images = [rulQoplamasi1, vertolyotliAtir1, monitor41, antiradar21, videoRegistrator1];

export const category = setCategoryToArray(products);

export const categoryProduct = category.map((item, index) => {
  let product = {
    id: randomId(),
    category: item,
    image: images[index],
  };
  return product;
});

export const addCartProduct = (product) => {
  product.inTheCart = !product.inTheCart;
  if (product.inTheCart) {
    toast.success("Savatga qo'shildi", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    toast.error("Savatdan o'chirildi", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

export const viewProduct = (product) => {
  product.viewed = true;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
