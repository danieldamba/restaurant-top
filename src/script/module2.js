import beef from "../assets/images/beef-bour.jpeg";
import salmon from "../assets/images/salmon.jpeg";
import wildMus from "../assets/images/wild-mus.jpeg";
import roastCi from "../assets/images/roast-ci.png";
import mediTart from "../assets/images/medi-tart.jpg";
import cremeB from "../assets/images/creme-b.jpg";

export function meatPresent(content) {

  content.innerHTML = ``;

  const meatPageContainer = document.createElement(`div`);
  meatPageContainer.className = `meats-page`;

  const headingOne = document.createElement(`h1`);
  headingOne.textContent = `Our Dishes`;

  const meatPres = document.createElement(`div`);
  meatPres.className = `meats-pres`;

  const div1 = document.createElement(`div`);
  const div2 = document.createElement(`div`);
  const div3 = document.createElement(`div`);
  const div4 = document.createElement(`div`);
  const div5 = document.createElement(`div`);
  const div6 = document.createElement(`div`);

  const minHeading1 = document.createElement(`h2`);
  const minHeading2 = document.createElement(`h2`);
  const minHeading3 = document.createElement(`h2`);
  const minHeading4 = document.createElement(`h2`);
  const minHeading5 = document.createElement(`h2`);
  const minHeading6 = document.createElement(`h2`);
  [
    minHeading1.textContent , minHeading2.textContent, 
    minHeading3.textContent, minHeading4.textContent, 
    minHeading5.textContent, minHeading6.textContent
  ] = [
    `Beef Bourguignon`, `Herb-Crusted Salmon`,
    `Wild Mushroom Risotto`, `Country-Style Roast Chicken`,
    `Mediterranean Veggie Tart`, `Classic Crème Brulée`
  ]

  const para1 = document.createElement(`p`);
  const para2 = document.createElement(`p`);
  const para3 = document.createElement(`p`);
  const para4 = document.createElement(`p`);
  const para5 = document.createElement(`p`);
  const para6 = document.createElement(`p`);
  [
    para1.textContent, para2.textContent,
    para3.textContent, para4.textContent,
    para5.textContent, para6.textContent
  ] = [
    `Tender chunks of beef slow-cooked for hours in red wine with carrots, pearl onions, and mushrooms. The rich,
    velvety sauce is perfect for sopping up with crusty bread.`,

    `Fresh Atlantic salmon fillet coated in a
    parsley-and-garlic crumb,
    baked until flaky. Served with lemon
    butter sauce and a side of seasonal green vegetables.`,

    `Creamy Arborio rice simmered slowly with porcini
    and button mushrooms, finished with
    Parmesan cheese and a drizzle of truffle oil.
    Earthy, comforting, and utterly indulgent.`,

    `Free-range chicken roasted with thyme and rosemary,
    served with golden roast potatoes, buttery green beans,
    and a rich pan gravy made from the meat juices.`,

    `A crisp puff pastry filled with roasted zucchini,
    bell peppers, cherry tomatoes, and goat cheese.
    Served with a fresh mixed salad and balsamic glaze.
    Light yet satisfying.`,

    `Silky vanilla custard with a brittle caramelized
    sugar crust on top.
    Served chilled with a side of fresh red berries
    – the perfect sweet finish to any meal.`
  ];

  const image1 = document.createElement(`img`);
  const image2 = document.createElement(`img`);
  const image3 = document.createElement(`img`);
  const image4 = document.createElement(`img`);
  const image5 = document.createElement(`img`);
  const image6 = document.createElement(`img`);
  [image1.src, image2.src, image3.src, image4.src, image5.src, image6.src] = [
    beef, salmon, wildMus, roastCi, mediTart, cremeB
  ];
  [image1.alt, image2.alt, image3.alt, image4.alt, image5.alt, image6.alt] = [
    `Beef Bourguignon`, `Herb-Crusted Salmon`, `Wild Mushroom Risotto`,
    `Country-Style Roast Chicken`, `Mediterranean Veggie Tart`,
    `Classic Crème Brulée`
  ];

  div1.append(image1, minHeading1, para1);
  div2.append(image2, minHeading2, para2);
  div3.append(image3, minHeading3, para3);
  div4.append(image4, minHeading4, para4);
  div5.append(image5, minHeading5, para5);
  div6.append(image6, minHeading6, para6);

  const footer = document.createElement(`div`);
  footer.className = `footer`
  const footPara = document.createElement(`p`);
  footPara.textContent = `A DSK Company, est. 1981`
  footer.appendChild(footPara);

  meatPres.append(div1, div2, div3, div4, div5, div6);
  meatPageContainer.append(headingOne, meatPres, footer);
  content.appendChild(meatPageContainer);
}