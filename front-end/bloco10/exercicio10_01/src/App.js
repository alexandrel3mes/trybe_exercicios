import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

/* const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Lavar roupa', 'Lavar louça', 'Estudar'];

 */
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
  )
  }
}

export default App;
