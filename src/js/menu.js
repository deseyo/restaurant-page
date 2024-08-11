export { initMenu };

function initMenu() {
  const menu = document.createElement('div');
  const menuSectOne = document.createElement('div');
  const menuSectOneColOne = document.createElement('div');
  const sushiImgOne = document.createElement('img')
  const menuSectOneColTwo = document.createElement('div');

  const menuSectTwo = document.createElement('div');
  const menuSectTwoColOne = document.createElement('div');
  const sushiImgTwo = document.createElement('img')
  const menuSectTwoColTwo = document.createElement('div');

  const menuSectThree = document.createElement('div');
  const menuSectThreeColOne = document.createElement('div');
  const sushiImgThree = document.createElement('img')
  const menuSectThreeColTwo = document.createElement('div');

  const sushiNameOne = document.createElement('div');
  const sushiDescOne = document.createElement('div');

  const sushiNameTwo = document.createElement('div');
  const sushiDescTwo = document.createElement('div');

  const sushiNameThree = document.createElement('div');
  const sushiDescThree = document.createElement('div');

  menu.classList.add('menu');

  menuSectOne.classList.add('menu-sect-one');
  menuSectOneColOne.classList.add('menu-sect-one-col-one');
  sushiImgOne.setAttribute('class', 'sushi-img-one');
  menuSectOneColTwo.classList.add('menu-sect-one-col-two');

  menuSectTwo.classList.add('menu-sect-two')
  menuSectTwoColOne.classList.add('menu-sect-two-col-one');
  sushiImgTwo.classList.add('sushi-img-two');
  menuSectTwoColTwo.classList.add('menu-sect-two-col-two');

  menuSectThree.classList.add('menu-sect-three');
  menuSectThreeColOne.classList.add('menu-sect-three-col-one');
  sushiImgThree.classList.add('sushi-img-three');
  menuSectThreeColTwo.classList.add('menu-sect-three-col-two');

  sushiNameOne.classList.add('sushi-name');
  sushiDescOne.classList.add('sushi-desc');

  sushiNameTwo.classList.add('sushi-name');
  sushiDescTwo.classList.add('sushi-desc');

  sushiNameThree.classList.add('sushi-name');
  sushiDescThree.classList.add('sushi-desc');

  sushiNameOne.textContent = 'Lorem ipsum';
  sushiDescOne.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et illo repellat ex aliquam dolor nam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus consectetur, fuga modi deserunt neque suscipit. Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, quisquam?';

  sushiNameTwo.textContent = 'Lorem ipsum';
  sushiDescTwo.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et illo repellat ex aliquam dolor nam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus consectetur, fuga modi deserunt neque suscipit. Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, quisquam?';

  sushiNameThree.textContent = 'Lorem ipsum';
  sushiDescThree.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et illo repellat ex aliquam dolor nam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus consectetur, fuga modi deserunt neque suscipit. Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, quisquam?';

  sushiImgOne.src = '../src/img/sushi-one.jpg';
  sushiImgTwo.src = '../src/img/sushi-two.jpg';
  sushiImgThree.src = '../src/img/sushi-three.jpg';

  menuSectOneColOne.appendChild(sushiImgOne);
  menuSectOneColTwo.append(sushiNameOne, sushiDescOne);
  menuSectOne.append(menuSectOneColOne, menuSectOneColTwo);

  menuSectTwoColOne.append(sushiNameTwo, sushiDescTwo);
  menuSectTwoColTwo.appendChild(sushiImgTwo)
  menuSectTwo.append(menuSectTwoColOne, menuSectTwoColTwo)

  menuSectThreeColOne.appendChild(sushiImgThree);
  menuSectThreeColTwo.append(sushiNameThree, sushiDescThree);
  menuSectThree.append(menuSectThreeColOne, menuSectThreeColTwo);

  menu.append(menuSectOne, menuSectTwo, menuSectThree);

  return menu;
}