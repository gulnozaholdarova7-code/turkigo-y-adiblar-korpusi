/*
  TURKIGO‘Y ADIBLAR — KORPUS MAʼLUMOTLARI
  Korpus devonlarning NASHR QILINGAN matnlari asosida tuziladi.
  Har bir matn — bitta obyekt. Yangi matn qo‘shish uchun namunani nusxalab,
  vergul bilan ro‘yxatga qo‘shing.

  adib:   lutfiy | sakkokiy | gadoiy | xorazmiy | atoyi
  id:     takrorlanmas nom (masalan: "lutfiy-001")
  nashr:  matn olingan nashr (MAJBURIY — ilmiy ishonchlilik va iqtibos uchun)
          yozuv: nashrning asl yozuvi ("kirill" yoki "lotin")
  baytlar.lotin:  bayt misralari joriy o‘zbek lotin yozuvida (majburiy)
  baytlar.sahifa: bayt joylashgan sahifa (ixtiyoriy)
  baytlar.lugat:  izohtalab so‘zlar (ixtiyoriy)

  NAMUNA (izoh ichida, saytda ko‘rinmaydi):
  {
    id: "NAMUNA-001",
    adib: "lutfiy",
    nom: "G‘azal (birinchi misrasi yoki radifi)",
    janr: "g‘azal",
    vazn: "",
    taqte: "",
    nashr: {
      tuzuvchi: "Tuzuvchi F.I.Sh.",
      nomi: "Kitob nomi",
      shahar: "Toshkent",
      nashriyot: "Nashriyot nomi",
      yil: "1987",
      sahifa: "B. 45–46",
      yozuv: "kirill"
    },
    izoh: "",
    baytlar: [
      { lotin: ["1-misra", "2-misra"], sahifa: "B. 45", lugat: { "so‘z": "ma’nosi" } }
    ]
  }
*/
window.KORPUS = [
  {
    id: "lutfiy-001",
    adib: "lutfiy",
    nom: "Nortek yangoqing shavqidin jonlar bari afgor erur",
    janr: "gʻazal",
    vazn: "",
    taqte: "",
    nashr: {
      tuzuvchi: "Lutfiy",
      nomi: "Devon / nashrga tayyorlovchi: Sodir Erkinov",
      shahar: "Toshkent",
      nashriyot: "Gʻafur Gʻulom nomidagi nashriyot-matbaa ijodiy uyi",
      yil: "2012",
      sahifa: "B. 75",
      isbn: "978-9943-03-470-9",
      yozuv: "kirill"
    },
    izoh: "Matn nashrning kirill yozuvidagi varianti asosida joriy lotin yozuviga oʻgirildi.",
    baytlar: [
      { lotin: ["Nortek yangoqing shavqidin jonlar bari afgor erur,", "Koʻnglum qachon topsun murod, “Bir noru ming bemor erur”."], sahifa: "B. 75",
        lugat: { "nor": "anor", "yangoq": "yonoq, yuz", "afgor": "yarador" } },
      { lotin: ["Men xud ajaldin ishqingiz yoʻlinda qaygurman vale", "Yuzungni koʻrmay oʻlganim hajringda bas dushvor erur."], sahifa: "B. 75",
        lugat: { "vale": "lekin", "dushvor": "qiyin, ogʻir" } },
      { lotin: ["Irning xayolin gar nihon tutsam koʻngulda, ne ajab,", "Muflis kishi topsa guhar yoshurmogʻi nochor erur."], sahifa: "B. 75",
        lugat: { "ir": "lab", "nihon": "yashirin", "muflis": "kambagʻal", "guhar": "gavhar", "yoshurmoq": "yashirmoq" } },
      { lotin: ["Chu zulfungizdin bogʻladim zunnor tarsolar bikin,", "Imonim ortar dam-badam, bu ne ajab zunnor erur!"], sahifa: "B. 75",
        lugat: { "zunnor": "tarsolar belbogʻi", "tarso": "nasroniy", "bikin": "kabi" } },
      { lotin: ["Koʻrsang eshikingda meni bexud tushub, ayb etmakim,", "Aqlimni gorat qilguchi ul gʻamzai ayyor erur."], sahifa: "B. 75",
        lugat: { "bexud": "hushsiz", "gʻamza": "noz bilan qarash", "ayyor": "hiylakor" } },
      { lotin: ["Iso falakka oshti chun boʻldi labing jon berguchi,", "Sharmandalikdin ketmasa koʻkta anga ne bor erur."], sahifa: "B. 75" },
      { lotin: ["Keldim eshikka, orzum yuzung durur, koʻrguz chiqib,", "Kelginki, Lutfiy hojati uchmoq emas, diydor erur."], sahifa: "B. 75",
        lugat: { "uchmoq": "jannat", "diydor": "yuzni koʻrish, visol" } }
    ]
 },
  {
    id: "atoyi-001",
    adib: "atoyi",
    nom: "Jamoling vasfini qildim chamanda",
    janr: "gʻazal",
    vazn: "",
    taqte: "",
    nashr: {
      tuzuvchi: "Atoyi",
      nomi: "Devon / nashrga tayyorlovchi, soʻzboshi, lugʻat va izohlar muallifi: Sayfiddin Sayfulloh; masʼul muharrir: Ibrohim Haqqul",
      shahar: "Toshkent",
      nashriyot: "OʻzR FA “Fan” nashriyoti",
      yil: "2008",
      sahifa: "B. 24",
      isbn: "978-9943-09-698-1",
      yozuv: "kirill"
    },
    izoh: "Matn nashrning kirill yozuvidagi varianti asosida joriy lotin yozuviga oʻgirildi.",
    baytlar: [
      { lotin: ["Jamoling vasfini qildim chamanda,", "Qizordi gul uyottin anjumanda."], sahifa: "B. 24",
        lugat: { "vasf": "taʼrif, madh", "anjuman": "yigʻin, majlis" } },
      { lotin: ["Tamanno qilgʻali laʼlingni koʻnglum,", "Kishi bilmas anikim, qoldi qanda."], sahifa: "B. 24",
        lugat: { "tamanno": "orzu, istak", "laʼl": "qizil qimmatbaho tosh; majozan: yorning labi" } },
      { lotin: ["Chu jonimdin aziz jonona sensen,", "Kerakmas jon manga sensiz badanda."], sahifa: "B. 24" },
      { lotin: ["Mango ul dunyoda jannat ne hojat,", "Eshiking tupragʻi basdur kafanda."], sahifa: "B. 24",
        lugat: { "bas": "yetarli" } },
      { lotin: ["Solib borma meni, ey Yusufi husn,", "Bu kun Yaʼqubtek baytul-hazanda."], sahifa: "B. 24",
        lugat: { "baytul-hazan": "gʻam uyi; Yaʼqub paygʻambarning Yusuf firoqida qaygʻurgan kulbasi" } },
      { lotin: ["Uzun sochingdin uzmasmen koʻngulni,", "Ayogʻing qanda boʻlsa, boshim anda."], sahifa: "B. 24",
        lugat: { "ayogʻ": "oyoq", "qanda": "qayerda" } },
      { lotin: ["Tilar el mansabi oliy, valekin", "Atoyi sarvi ozodinggʻa banda."], sahifa: "B. 24",
        lugat: { "sarvi ozod": "tik, erkin oʻsgan sarv; majozan: yorning qaddi", "banda": "qul" } }
    ]
  },
  {
    id: "gadoiy-001",
    adib: "gadoiy",
    nom: "Ohkim, devona koʻnglum mubtalo boʻldi yana",
    janr: "gʻazal",
    vazn: "",
    taqte: "",
    nashr: {
      tuzuvchi: "Gadoiy",
      nomi: "Devon / nashrga tayyorlovchi va soʻz boshi muallifi: E. Ahmadxoʻjaev; masʼul muharrir: prof. Hamid Sulaymon",
      shahar: "Toshkent",
      nashriyot: "Adabiyot va sanʼat nashriyoti",
      yil: "1973",
      sahifa: "B. 15",
      isbn: "",
      yozuv: "kirill"
    },
    izoh: "Matn nashrning kirill yozuvidagi varianti asosida joriy lotin yozuviga oʻgirildi.",
    baytlar: [
      { lotin: ["Ohkim, devona koʻnglum mubtalo boʻldi yana,", "Bu koʻngulnung ilkidin jongʻa balo boʻldi yana."], sahifa: "B. 15",
        lugat: { "mubtalo": "giriftor", "ilk": "qoʻl" } },
      { lotin: ["Doʻsttin oyirdi bu charxi jafo gustar yana,", "Ey darigʻo, hojati dushman ravo boʻldi yana."], sahifa: "B. 15",
        lugat: { "charx": "falak, taqdir", "jafo gustar": "jafo yoyuvchi", "darigʻo": "afsus" } },
      { lotin: ["Necha boʻlsun, soqiyo, oxir gʻubori xotirim,", "Tut mayi sofiyki, hangomi safo boʻldi yana."], sahifa: "B. 15",
        lugat: { "soqiy": "may quyuvchi", "gʻubor": "chang; majozan: gʻam", "hangom": "payt, vaqt" } },
      { lotin: ["Xushdurur, oyo pari paykar bila gulgashtkim,", "Boʻstonu bogʻi iramtek dilkusho boʻldi yana."], sahifa: "B. 15",
        lugat: { "pari paykar": "pari qiyofali", "gulgasht": "gul sayri", "bogʻi Iram": "rivoyatlardagi jannatmonand bogʻ", "dilkusho": "koʻngil ochuvchi" } },
      { lotin: ["Oq evindin qoʻymas erding chiqqali, ey shum raqib,", "Shukr lillah, borikim, yuzung qaro boʻldi yana."], sahifa: "B. 15",
        lugat: { "raqib": "oshiqning yor yoʻlidagi gʻanimi" } },
      { lotin: ["Chini zulfindin dam urmogʻliq ne nisbat, ey abir,", "Bu kinoyat bori sendin, bas, xato boʻldi yana."], sahifa: "B. 15",
        lugat: { "abir": "xushboʻy modda", "nisbat": "munosabat, aloqa" } },
      { lotin: ["Shod boʻlgʻil, ey Gadokim, mavsumi navroʻzdin,", "Gulbuni ummid bobargu navo boʻldi yana."], sahifa: "B. 15",
        lugat: { "gulbun": "gul butasi", "barg-u navo": "boylik, obodlik" } }
    ]
  },
  {
    id: "sakkokiy-001",
    adib: "sakkokiy",
    nom: "Yuzungni koʻrsa qilur gul oʻzini yuz pora",
    janr: "gʻazal",
    vazn: "",
    taqte: "",
    nashr: {
      tuzuvchi: "Sakkokiy",
      nomi: "Tanlangan asarlar / nashrga tayyorlovchi: Q. Munirov",
      shahar: "Toshkent",
      nashriyot: "OʻzSSR Davlat badiiy adabiyot nashriyoti",
      yil: "1958",
      sahifa: "B. 12",
      isbn: "",
      yozuv: "kirill"
    },
    izoh: "Matn nashrning kirill yozuvidagi varianti asosida joriy lotin yozuviga oʻgirildi.",
    baytlar: [
      { lotin: ["Yuzungni koʻrsa qilur gul oʻzini yuz pora,", "Xoʻtan yozisida ohu koʻzingdin avvora."], sahifa: "B. 12",
        lugat: { "pora": "boʻlak", "yozi": "dasht, sahro", "avvora": "sargardon" } },
      { lotin: ["Koʻngul shakar bikin ogʻzing koʻrib adam boʻldi,", "Aytmading bir ogʻiz, e faqiri hech kora."], sahifa: "B. 12",
        lugat: { "bikin": "kabi", "adam": "yoʻqlik" } },
      { lotin: ["Bale, bu ranju baloni men ixtiyor etdim,", "Oʻzumga ishni oʻzum qildim, emdi ne chora."], sahifa: "B. 12",
        lugat: { "ranj": "azob, mashaqqat" } },
      { lotin: ["Koʻzum yoshigʻa nazar qil, koʻngul boʻlur ravshan", "E sarvi noz, oqar suvgʻa qilsa nazzora."], sahifa: "B. 12",
        lugat: { "sarvi noz": "nozli sarv; majozan: yor", "nazzora": "tomosha, nazar solish" } },
      { lotin: ["Bu yosh qatralarin koʻr yuzum uza gʻalton,", "Munung bikin yurumas hech falakta sayyora."], sahifa: "B. 12",
        lugat: { "gʻalton": "dumalovchi", "sayyora": "harakatlanuvchi yulduz" } },
      { lotin: ["Kechau kunduz ishim yigʻlamoq kuchum zori,", "Gʻamingdin oʻzga kishi yoʻq qoshimda gʻamxora."], sahifa: "B. 12",
        lugat: { "zori": "nola, yigʻi", "gʻamxora": "gʻamxoʻr" } },
      { lotin: ["Koʻzung balosi bila jonga tegdi, Sakkokiy", "Dagʻi ne qilgʻusi bilmon oxir bu makkora."], sahifa: "B. 12",
        lugat: { "dagʻi": "yana", "makkora": "makkor, hiylakor" } }
    ]
  },
  {
    id: "xorazmiy-001",
    adib: "xorazmiy",
    nom: "Xona purnur boʻlur ul mohitobon kelsa",
    janr: "gʻazal",
    vazn: "",
    taqte: "",
    nashr: {
      tuzuvchi: "Xorazmiy, Hofiz",
      nomi: "Devon [Matn] / nashrga tayyorlovchi: Sirdaryoxon Oʻtanova",
      shahar: "Toshkent",
      nashriyot: "“Oʻzbekiston” nashriyoti",
      yil: "2025",
      sahifa: "B. 37",
      isbn: "978-9910-8193-6-0",
      yozuv: "lotin"
    },
    izoh: "Matn nashrda lotin yozuvida berilgan, shu holicha keltirildi.",
    baytlar: [
      { lotin: ["Xona purnur boʻlur ul mohitobon kelsa,", "Zinda boʻlur tani bejongʻa, bale, jon kelsa."], sahifa: "B. 37",
        lugat: { "purnur": "nurga toʻla", "mohitobon": "porloq oy", "zinda": "tirik" } },
      { lotin: ["Ayshxona boʻlur erdi manga bayt-ul-ahzon,", "Xasta Yaʼqubni soʻra Yusufi Kanʼon kelsa."], sahifa: "B. 37",
        lugat: { "bayt-ul-ahzon": "gʻam uyi; Yaʼqub paygʻambarning Yusuf firoqida qaygʻurgan kulbasi" } },
      { lotin: ["Vaqtimiz xushliqidin jubbayi jon chok boʻlur,", "Guli xandontak oʻshul sarvixiromon kelsa."], sahifa: "B. 37",
        lugat: { "jubba": "ustki kiyim", "guli xandon": "ochilgan, kulib turgan gul", "sarvi xiromon": "nozlanib yurgan sarv; majozan: yor" } },
      { lotin: ["Yuzina qarshu qilur jon-u koʻngul arzi niyoz,", "Xush kelur gulga chu bulbullari nolon kelsa."], sahifa: "B. 37",
        lugat: { "arzi niyoz": "iltijo izhori", "nolon": "nola qiluvchi" } },
      { lotin: ["Koʻrgan oro yuzini igʻlasa koʻz, koʻrma gʻarib,", "Gul choqinda chu gʻarib ermas, boron kelsa."], sahifa: "B. 37",
        lugat: { "gʻarib": "gʻalati, ajablanarli", "boron": "yomgʻir" } },
      { lotin: ["Bagʻrima kirpugi chun emdi tikibdur nashtar,", "Ajab ermas iki koʻzning yoʻlidin qon kelsa."], sahifa: "B. 37",
        lugat: { "nashtar": "nayza, uchli asbob" } },
      { lotin: ["Sari zulfiki, chiqib turar alimdin dushvor,", "Asri xush boʻlgʻay edi ilgima oson kelsa."], sahifa: "B. 37",
        lugat: { "dushvor": "qiyin", "asri": "juda", "ilg": "qoʻl" } },
      { lotin: ["Ulki, savdoyi sari zulfi bilandur mashgʻul,", "Ne ajab boʻlgay, agar soʻzi parishon kelsa."], sahifa: "B. 37",
        lugat: { "savdoyi": "ishq savdosiga mubtalo" } },
      { lotin: ["Jonni Hofiz biki isor etayim anda ravon,", "Bandaning koʻngli uchun lutf ila sulton kelsa."], sahifa: "B. 37",
        lugat: { "isor": "fido qilish", "biki": "kabi", "ravon": "darhol; jon" } }
    ]
  }
];
