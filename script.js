
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/tap-dash-balloon-edition/id6475288682";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/1f/c6/13/1fc61314-8946-3104-f870-2c9e1e57b3aa/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/7c/3d/02/7c3d02be-a6ae-9f5e-d85b-a9c415b5abbf/4843d56e-ddea-4baa-8f23-dd3ec2fb86a5_ipad__U00283_U0029.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/16/f6/2d/16f62db7-07f9-d800-1875-82e8c181efa1/7487d399-6adc-46c5-9afe-bae5c72cc989_ipad__U00284_U0029.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/db/de/ba/dbdeba59-ae58-28f6-3444-e1313d19a365/e9778597-acda-4866-a863-0a66a27bb2ba_ipad__U00281_U0029.jpg/434x0w.webp",
  appImg4:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/16/2e/a4/162ea446-cfe1-2773-4029-47b8c86da7be/7e473ed1-8f50-4e6c-940c-49587b0de106_ipad__U00282_U0029.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3
document.getElementById('pic4').src = getImg.appImg4

