import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id' : 1,
    'image' : 'http://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '961122',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'http://placeimg.com/64/64/2',
    'name' : '이순신',
    'birthday' : '921122',
    'gender' : '남자',
    'job' : '프로게이머'
  },
  {
    'id' : 3,
    'image' : 'http://placeimg.com/64/64/3',
    'name' : '세종대왕',
    'birthday' : '931122',
    'gender' : '남자',
    'job' : '회사원'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
        
      </div>
    );
  }
}

export default App;
