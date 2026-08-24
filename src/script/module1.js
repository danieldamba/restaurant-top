import danseoRestaurantImg from "../assets/images/danseo-resto.jpg";
import warmAndF from "../assets/images/warm.jpg";
import homeMade from "../assets/images/invitin.jpg";
import kindPrice from "../assets/images/prices.png";


export default function homePageLoader(content) {

  content.innerHTML = ``;

  const homePageContainer = document.createElement(`div`);
  homePageContainer.id = `home-page`;

  // hero section 
  const heroSection = document.createElement(`div`);
  heroSection.className = `hero`;

  const divCont1 = document.createElement(`div`);
  const danseoRImage = document.createElement(`img`);
  danseoRImage.src = danseoRestaurantImg;
  danseoRImage.className = `image-main`;

  const headingOne = document.createElement(`h1`);
  headingOne.textContent = `Danseo Restaurant`;

  const para1 = document.createElement(`p`);
  const para2 = document.createElement(`p`);
  para1.textContent = `
  Welcome to Danseo Restaurant, where flavors meet a
  warm and modern dining experience.`
  para2.textContent = `
  Enjoy authentic dishes made with fresh ingredients,
  bold spices.`;

  divCont1.append(headingOne, para1, para2);
  heroSection.append(divCont1, danseoRImage);

  // h-section 
  const hSection = document.createElement(`div`);
  hSection.className = `h-section`;

  const divCont3 = document.createElement(`div`);
  const divCont4 = document.createElement(`div`);
  const divCont5 = document.createElement(`div`);
  [divCont3, divCont4, divCont5].forEach((x) => x.className = `res-text`);

  const warmAndFImage = document.createElement(`img`);
  warmAndFImage.src = warmAndF;
  const homeMadeImage = document.createElement(`img`);
  homeMadeImage.src = homeMade;
  const kindPriceImage = document.createElement(`img`);
  kindPriceImage.src = kindPrice;
  // [warmAndFImage, homeMade, kindPrice].forEach((x) => {
  //   x.width = 300
  //   x.height = 150
  // })

  const minHeading1 = document.createElement(`h2`);
  const minHeading2 = document.createElement(`h2`);
  const minHeading3 = document.createElement(`h2`);
  [minHeading1.textContent, minHeading2.textContent,
  minHeading3.textContent
  ] = [`Warmth & Friendliness`, `Truly homemade`, `Kind Prices`];

  const para3 = document.createElement(`p`);
  const para4 = document.createElement(`p`);
  const para5 = document.createElement(`p`);
  [para3.textContent, para4.textContent, para5.textContent] = [
    `From the moment you step in, the scent of fresh bread
    and simmering stew wraps around you.
    Here, people take time to chat and laugh.
    Servers know regulars by name.`,
    `Everything is prepared on-site, with fresh market
    vegetables and slow-braised meats.
    No reheated dishes – only handmade, honest cooking.`,
    `The lunch menu stays under €15.
    A generous deal that proves a hearty,
    comforting meal doesn't have to break the bank.
    You leave full, satisfied, and smiling.`
  ];

  divCont3.append(warmAndFImage, minHeading1, para3);
  divCont4.append(homeMadeImage, minHeading2, para4);
  divCont5.append(kindPriceImage, minHeading3, para5);
  hSection.append(divCont3, divCont4, divCont5);

  // footer 
  const footer = document.createElement(`div`);
  footer.className = `footer`
  const footPara = document.createElement(`p`);
  footPara.textContent = `A DSK Company, est. 1981`

  footer.appendChild(footPara);

  homePageContainer.append(heroSection, hSection, footer);
  content.appendChild(homePageContainer);
}