import users from './data';

export function displayUsers() {
  const userList = document.getElementById('user-list');

  users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = `ID: ${user.id}, Name: ${user.name}, Age: ${user.age}, Email: ${user.email}, Country: ${user.country}, Company: ${user.company}, Birthday: ${user.birthday}`;
    userList.appendChild(listItem);
  });
}