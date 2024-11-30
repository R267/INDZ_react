import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import SideBar from './components/SideBar';
import UserForm from './components/UserForm'; // Імпорт компонента UserForm
import './App.css';
import getId from './components/helpers'; // Імпорт функції getId

function App() {
  const menuItems = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
    { text: 'External Link', url: 'https://example.com' },
  ];

  // Демонстрація роботи getId
  console.log(getId('menu-item')); // menu-item_1
  console.log(getId('menu-item')); // menu-item_2
  console.log(getId('button'));    // button_1
  console.log(getId());            // key_1
  console.log(getId());            // key_2
  console.log(getId('menu-item')); // menu-item_3

  return (
    <div className="App">
      {/* Компонент Header */}
      <Header title="Header Component" />

      {/* Основне компонування сторінки */}
      <div className="main-layout">
        <SideBar title="My Sidebar" menuList={menuItems} />
        <Content title="Dog Breeds" />
      </div>

      {/* Форма користувача */}
      <div>
        <h1 style={{ textAlign: 'center' }}>User Form</h1>
        <UserForm />
      </div>

      {/* Компонент Footer */}
      <Footer title="Footer Menu" menuList={menuItems} />
    </div>
  );
}

export default App;
