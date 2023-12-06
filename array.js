let active = document.querySelector("#active")
let box = document.querySelector(".box")
let theme = document.createElement("h2")
theme.textContent = "YALPI ICHKI MAHSULOT"
box.appendChild(theme)
let sektor = document.querySelector("#sektor")

let osish = document.createElement("p")
osish.textContent = "2022- yilning yanvar-mart oylarida YAIM o‘sishi 2021- yilning yanvar-mart oylaridagi 2,6 % va2020- yilning yanvar-mart oylaridagi 4,8 % ga nisbatan 5,8 % gacha tezlashdi. 2022- yilning yanvar-mart oylarida aholi jon boshiga hisoblangan YAIM hajmi joriy narxlarda 4 604,6 ming so‘mni (yoki 419,9 AQSH dollari ekvivalentida) tashkil etdi va 2021- yilning yanvar-mart oylari bilan taqqoslaganda 3,7 % ga o‘sdi."
let text = document.querySelector(".text")
text.appendChild(osish)
console.log(sektor.value);

active.addEventListener("input", function(e){
    e.preventDefault()

    if (sektor.value === "+") {
        osish.textContent = "2022- yilning yanvar-mart oylarida YAIM o‘sishi 2021- yilning yanvar-mart oylaridagi 2,6 % va2020- yilning yanvar-mart oylaridagi 4,8 % ga nisbatan 5,8 % gacha tezlashdi. 2022- yilning yanvar-mart oylarida aholi jon boshiga hisoblangan YAIM hajmi joriy narxlarda 4 604,6 ming so‘mni (yoki 419,9 AQSH dollari ekvivalentida) tashkil etdi va 2021- yilning yanvar-mart oylari bilan taqqoslaganda 3,7 % ga o‘sdi."
    }
    else if (sektor.value === "-") {
        osish.textContent = "Shu bilan bir vaqtda, YAIM deflyator indeksida 2021- yilning yanvar-mart oylaridagi 111,4 % ga nisbatan 2022- yilning yanvar-mart oylarida 114,9 % gacha o‘sish kuzatildi. 2020- yilning yanvar-mart oylarida YAIM deflyator indeksi 114,3 % ni tashkil etgan. Ma’lumot uchun: 2022- yilning yanvar-mart oylarida AQSH dollarining so‘mga nisbatan o‘rtacha rasmiy kursi 10 965,8 so‘m, 2021- yilning yanvarmart oylarida 10 506,1 so‘m, 2020- yilning yanvar-mart oylarida 9 529,6 so‘mga teng bo‘lgan."
    }
    else if (sektor.value === "/") {
        osish.textContent = "Aholi jon boshiga YAIM joriy narxlardagi YAIM umumiy hajmini mamlakatning hisobot davridagi o‘rtacha aholisi soniga bo‘lish yo‘li bilan aniqlanadi. O‘zbekiston Respublikasi doimiy aholisining o‘rtacha soni 2020- yilning yanvar-martida 33 970,8 ming kishi, 2021- yilning yanvar-martida 34 627,2 ming kishi va 2022- yilning yanvar-martida 35 352,5 ming kishini tashkil etgan. 2022- yilning yanvar-mart oylarida aholi jon boshiga YAIM hajminig real o‘sishi 2021- yilning yanvar-martidagi 0,6 % va 2020- yilning yanvarmartidagi 2,8 % o‘sishga nisbatan 3,7 % ni tashkil etdi. Iqtisodiyotning barcha tarmoqlarida yaratilgan yalpi qo‘shilgan qiymat hajmi YAIM umumiy hajmining 90,5 % ini tashkil etdi va 5,9 % ga o‘sdi (YAIM mutlaq o‘sishiga ta’siri 5,3 foiz punktni tashkil etdi). Mahsulotlarga sof soliqlarning YAIM tarkibidagi ulushi 9,5 % ni tashkil etdi va 2021- yilning yanvar-mart oylari bilan taqqoslaganda 5,5 % ga o‘sdi (YAIM mutlaq o‘sishiga ta’siri – 0,5 f.p.)"
        
    }
    else if (sektor.value === "*") {
        osish.textContent = "2022- yilning yanvarmart oylari yakunlariga ko‘ra, YAIM tarkibida katta bo‘lmagan o‘zgarishlar kuzatildi. YAIM (YAQQ) tarkibida sanoatning ulushi 32,3 % dan 32,5 % ga, qurilish tarmog‘i 6,9 % dan 7,0 % ga, xizmatlar sohasi 46,9 % dan 47,3 % ga oshdi. Shu bilan birga, qishloq, o‘rmon va baliqchilik xo‘jaligining ulushi 13,9 % dan 13,2 % ga kamaydi.2022- yilning yanvar-mart yakunlariga ko‘ra, qishloq, o‘rmon va baliqchilik xo‘jaligida 2,8 % (2021- yilning yanvar-mart oylarida – 2,7 %, 2020- yilning yanvarmart oylarida – 3,2 %) darajasida ijobiy o‘sish qayd etildi. Ushbu ijobiy o‘sish sur’atlari chorvachilik mahsulotlarini ishlab chiqarishning 2,4 % (2021- yilning yanvar-mart oylarida – 2,9 %, 2020- yilning yanvar-mart oylarida – 3,3 %)ga hamda dehqonchilik mahsulotlarini ishlab chiqarishning 8,5 % (2021- yilning yanvar-mart oylarida – 5,0 %, 2020- yilning yanvar-mart oylarida – 2,5 %)ga o‘sishi bilan bog‘liq."
        
    }
    else if (sektor.value === "a") {
        osish.textContent = "2022- yilning yanvar-mart oylarida sanoat tarmog‘i qo‘shilgan qiymatida  5,7 % ga o‘sish kuzatilgan. Ushbu tarmoqdagi  ijobiy dinamika, asosan tog‘-kon sanoati va ochiq konlarni ishlash tarmog‘ining qo‘shilgan qiymati 0,8 % ga (2021- yilning yanvar-mart oylarida 2,3 % ga kamayish, 2020- yilning yanvar-mart oylarida – 13,1 % ga kamayish) hamda ishlab chiqaradigan (qayta ishlash) sanoatning 5,9 % (2021- yilning yanvar-martida – 5,8 %, 2020- yilning yanvar-martida – 6,5 %)ga o‘sishi hisobiga ta’minlandi.Ishlab chiqaradigan (qayta ishlash) sanoatining o‘sishi oziq-ovqat mahsulotlari   ishlab chiqarishning 3,9 % ga, to‘qimachilik sanoati – 3,8 % ga, metallurgiya sanoati – 4,0 % ga ko‘payishi hisobiga ta’minlandi. Elektr, gaz, bug‘ bilan ta’minlash va havoni konditsiyalash tarmog‘ida ham 15,5 %  (2021- yilning yanvar-martida 6,6 % va 2020- yilning yanvar-martida 7,9 %)ga ijobiy  o‘sish qayd etildi. Shuningdek, suv bilan ta’minlash, kanalizatsiya tizimi, chiqindilarni yig‘ish va utilizatsiya qilish tarmog‘i qo‘shilgan qiymatida esa 17,2 % ga kamayish  (2021- yilning yanvar-martida 0,1 % ga ko‘payish, 2020- yilning yanvar-martida 16,2 % ga kamayish) kuzatildi. Kuzatilayotgan davrda tog‘-kon sanoati va ochiq konlarni ishlash tarmog‘inini jami sanoat sektori bo‘yicha yaratilgan qo‘shilgan qiymat tarkibidagi ulushi 2021- yilning yanvar-mart oylaridagi 16,6 % ga nisbatan 17,4 % gacha oshdi. Shu bilan birga, ishlab chiqaradigan (qayta ishlash) sanoat ulushining 74,0 % gacha kamayishi qayd etildi (2021- yilning yanvar-mart oylarida – 74,2 %).2022- yilning yanvar-mart oylari yakunlariga ko‘ra, ishlab chiqaradigan (qayta ishlash) sanoatning qo‘shilgan qiymati tarkibida eng katta ulush metallurgiya va metallni qayta ishlash sanoatiga (mashina va uskunalardan tashqari) to‘g‘ri keldi va 43,2 % ga yetdi. To‘qimachilik mahsulotlari, kiyim, teri va unga tegishli mahsulotlar ishlab chiqarish 14,7 %, oziq-ovqat mahsulotlari, ichimliklar va tamaki mahsulotlarini ishlab chiqarish – 11,8 %, kimyo mahsulotlari ishlab chiqarish – 7,9 %, rezina, plastmassa buyumlar va boshqa nometall mineral mahsulotlar ishlab chiqarish – 6,2 %, avtotransport vositalari, treylerlar, yarim tirkamalar hamda boshqa transport uskunalari ishlab chiqarish – 5,5 %, koks va neftni qayta ishlash mahsulotlari ishlab chiqarish – 2,0 %, asosiy farmatsevtika mahsulotlari va preparatlari ishlab chiqarish – 1,7 % hamda ishlab chiqaradigan (qayta ishlash) sanoatning boshqa mahsulotlarini ishlab chiqarish – 7,0 % ni tashkil qildi."
        
    }
    else if (sektor.value === "b") {
        osish.textContent = " 2021- yilning yanvar-mart oylari bilan taqqoslaganda qurilish ishlari hajmi 6,3 % ga o‘sdi. Jumladan, o‘sish sur’atlari bino va inshootlar qurilishida 107,2 % (2021- yilning yanvar-martida – 94,8 %, 2020- yilning yanvar-martida–107,0 %)ni tashkil etdi. Shuningdek fuqarolik obyektlari qurilishida 105,8 % (2021- yilning yanvar-martida – 124,6 %, 2020- yilning yanvar-martida – 112,0 %) va ixtisoslashtirilgan qurilish ishlarida 102,5 % (2021- yilning yanvar-martida – 141,7 %, 2020- yilning yanvar-martida – 81,4 %)ni tashkil etgan. Ma’lumot uchun: 2022- yilning yanvar-mart oylarida qurilish ishlari hajmi 24 071,6 mlrd. so‘mni tashkil etdi. Qurilish ishlarining umumiy hajmida yirik qurilish tashkilotlarining ulushi 23,5 %, kichik korxonalar va mikrofirmalarning ulushi 58,6 %, jismoniy shaxslarning ulushi 17,9 % ni tashkil etdi. 2022- yilning yanvar-mart oylari yakunlariga ko‘ra, xizmat ko‘rsatish sohasining yalpi qo‘shilgan qiymati hajmi 69 692,6 mlrd. so‘mni tashkil etdi va 2021- yilning yanvar-mart oylariga nisbatan 6,9 % ga o‘sdi. Shu jumladan, savdo xizmatlari 8,6 % ga, yashash va ovqatlanish bo‘yicha xizmatlar 8,2 % ga, tashish va saqlash xizmatlari 10,1 % ga, axborot va aloqa xizmatlari 27,5 % ga, boshqa xizmatlar 4,5 % ga o‘sdi. "

        
    }
    else if (sektor.value === "c") {
        osish.textContent = "2022- yilning yanvar-mart  oylarida savdo tarmog‘ining yalpi  qo‘shilgan qiymati tarkibida eng katta  ulush chakana savdo (avtotransport  vositalari savdosidan tashqari)ga  to‘g‘ri keldi va 67,5 % (2021- yilning yanvar-martida – 69,2 %, 2020- yilning yanvar-martida – 68,7 %)ni tashkil etdi. Ulgurji savdo (avtotransport vositalari savdosidan tashqari)ning ulushi 25,7 % (2021- yilning yanvarmartida – 24,5 %, 2020- yilning yanvar-martida – 24,4 %)ni, avtotransport vositalarining ulgurji va chakana savdosi hamda ularni ta’mirlashning ulushi 6,8 % (2021- yilning yanvar-martida – 6,3 %, 2020- yilning yanvar-martida – 6,9 %)ni tashkil qildi. "
        
    }
    else {
        osish.textContent = "2022- yilning yanvar-mart oylarida AKT xizmatlarining mamlakat iqtisodiyotidagi ulushi 2,0 % (2021- yilning yanvar-martida – 1,8 %, 2020- yilning yanvar-martida – 1,7 %)ni tashkil etdi. Tarmoqda yaratilgan qo‘shilgan qiymat hajmining 72 foizi aloqa xizmatlari, 13,6 foizi kompyuter   dasturlashtirish, maslahat berish va boshqa  yordamchi xizmatlar, 6,0 foizi ma’lumotlarni joylashtirish va ishlov berish bo‘yicha xizmatlar, Web-portallar, 4,8 foizi kompyuterlar va aloqa uskunalarini ta’mirlash xizmatlari, qolgan 2,8 foizi dasturiy ta’minotni chiqarish hissasiga to‘g‘ri keldi. "
    }



})
