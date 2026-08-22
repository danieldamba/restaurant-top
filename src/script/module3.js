
export function aboutContentDisplay(content) {
  content.innerHTML = ``;

  const aboutContainer = document.createElement(`div`);
  aboutContainer.className = `about`;

  const headingOne = document.createElement(`h1`);
  headingOne.textContent = `About Us`;

  const aboutContent = document.createElement(`div`);
  aboutContainer.className = `about-content`;

  const aboutText = document.createElement(`div`);
  aboutText.className = `about-text`;

  const contactDetails = document.createElement(`div`);
  contactDetails.className = `contact-details`;

  aboutContent.append(aboutText, contactDetails);


  // about content
  const minHeading1 = document.createElement(`h2`);
  minHeading1.textContent = `Our Story`;

  const para1 = document.createElement(`p`);
  const para2 = document.createElement(`p`);
  [para1.textContent, para2.textContent] = [
    `Danseo Restaurant is a family-owned restaurant built on a love of
    honest food, warm hospitality, and memorable moments around the table.
    Since 1981, we have prepared comforting dishes with fresh ingredients
    and recipes inspired by home cooking.`,
    `Whether you are joining us for lunch, dinner, or a special celebration,
    our team is happy to make you feel at home.`
  ]
  aboutText.append(minHeading1, para1, para2);

  // contact-details
  const minHeading2 = document.createElement(`h2`);
  minHeading2.textContent = `Contact Us`;

  const minDiv1 = document.createElement(`div`);
  const para3 = document.createElement(`p`);
  const para4 = document.createElement(`p`);
  const para5 = document.createElement(`p`);
  [para3.textContent, para4.textContent, para5.textContent] = [
    `Address: 12 Market Street, Danseo`,
    `Phone: +33 1 23 45 67 89`,
    `Email: hello@danseorestaurant.com`
  ]
  minDiv1.append(para3, para4, para5);

  const minHeading3 = document.createElement(`h2`);
  minHeading3.textContent = `Opening Hours`;

  const minDiv2 = document.createElement(`div`);
  const para6 = document.createElement(`p`);
  const para7 = document.createElement(`p`);
  [para6.textContent, para7.textContent] = [
    `Monday–Saturday: 12:00–22:00`,
    `Sunday: Closed`
  ];
  minDiv2.append(para6, para7);

  contactDetails.append(minHeading2, minDiv1, minHeading3, minDiv2);

  const footer = document.createElement(`div`);
  footer.className = `footer`
  const footPara = document.createElement(`p`);
  footPara.textContent = `A DSK Company, est. 1981`
  footer.appendChild(footPara);

  aboutContainer.append(headingOne, aboutContent, footer);
  content.appendChild(aboutContainer);
}