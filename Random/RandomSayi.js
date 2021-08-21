let uretilenSayi =Math.floor((Math.random() * 90) + 10);
let kullanicininGirdigiSayi = parseInt(prompt("iki basamakli bir sayi giriniz:"));

let UretilenSayininBirlerBasamagi = uretilenSayi % 10;
let UretilenSayininOnlarBasamagi = Math.floor(uretilenSayi / 10);

let KullanicininBirlerBasamagi = kullanicininGirdigiSayi % 10;
let kullanicininOnlarBasamagi = Math.floor(kullanicininGirdigiSayi / 10);

console.log(`kullanıcının girdigi sayi : ${kullanicininGirdigiSayi}`);
console.log(`üretilen sayi : ${uretilenSayi}`);

console.log(`kullanıcının girdigi birler basamağı ${KullanicininBirlerBasamagi} kullanıcının girdigi onlar basamagı ${kullanicininOnlarBasamagi}`);
console.log(`üretilen sayinin birler basamagi: ${UretilenSayininBirlerBasamagi} Üretilen sayinin onlar basamagi: ${UretilenSayininOnlarBasamagi}`);

if(uretilenSayi === kullanicininGirdigiSayi){
    console.log("tebrikler İphone 11 kazandınız. Girdiginiz sayi:" +kullanicininGirdigiSayi+ " Üretilen sayi :" +uretilenSayi);
}

else if(KullanicininBirlerBasamagi === UretilenSayininOnlarBasamagi && kullanicininOnlarBasamagi === UretilenSayininBirlerBasamagi){
    console.log("tebrikler Airpods kazandınız üretilen sayi :" +uretilenSayi+ " girdiginiz sayi : " +kullanicininGirdigiSayi);
}

else if(KullanicininBirlerBasamagi === UretilenSayininBirlerBasamagi || kullanicininOnlarBasamagi === UretilenSayininOnlarBasamagi) {
    console.log("tebrikler 100 tl hediye çeki kazandınız üretilen sayi : " +uretilenSayi+ " girdiginiz sayi :" +kullanicininGirdigiSayi);
}
else {
    console.log("Bilemediniz. Tekrar deneyiniz.");
}
