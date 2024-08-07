export {initHome};

function initHome() {
  const home = document.createElement('div');
  const info = document.createElement('div');
  const restaurantName = document.createElement('div');
  const openTime = document.createElement('div');
  const hours = document.createElement('div');
  const client = document.createElement('div');
  const order = document.createElement('div');
  const reserve = document.createElement('div');

  home.classList.add('home');
  info.classList.add('info');
  restaurantName.classList.add('restaurant-name');
  openTime.classList.add('open-time');
  hours.classList.add('hours');
  client.classList.add('client');
  order.classList.add('order');
  reserve.classList.add('reserve');

  restaurantName.textContent = 'lorem restaurant';
  openTime.textContent = 'opened everyday';
  hours.textContent = '8am - 9pm';
  order.textContent = 'order now';
  reserve.textContent = 'reserve table'


  client.append(order, reserve);
  info.append(restaurantName, openTime, hours, client);
  home.appendChild(info);

  return home;
}