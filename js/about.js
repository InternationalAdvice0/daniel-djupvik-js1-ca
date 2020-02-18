setTimeout(replaceWords, 4000);

function replaceWords() {
  const heading = document.querySelector(".container h1");
  const headingText = heading.innerText;
  const replaceHeading = headingText.replace("The", "Replaced");
  heading.innerText = replaceHeading;

  const paragraph = document.getElementsByTagName("p");
  for (let index = 0; index < paragraph.length; index++) {
    const paragraphText = paragraph[index].innerText;

    const replaceParagraph = paragraphText
      .replace(/ the /g, " replaced ")
      .replace(/ The /g, " Replaced ");
    paragraph[index].innerText = replaceParagraph;
  }
}
