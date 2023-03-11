import React from 'react';
import './Books.css';
import Book from './Books';
import data from './data';

function BookList() {

  const Data = data.map(items => {
  return (
    <Book
    name = {items.author}
    img = {items.img}
    />
    
  )

  })

  return (
    <div>
      <h1>My favourite Books</h1>,
      < br />
      <Book
        img="https://m.media-amazon.com/images/I/51UK--G0KZL._SL500_.jpg"
        book="Eat Their Lunch"
        author="Anthony Iannarino"
        year="2018"
        country="United States"
      />
      <Book
        img="https://m.media-amazon.com/images/I/51qaOxh4b0L._SL500_.jpg"
        book="Hacking Growth"
        author="Morgan Brown & Sean Ellis"
        year="2017"
        country="United States"
      />
      <Book
        img="https://m.media-amazon.com/images/I/41lK8aduEiL._SL500_.jpg"
        book="How to Talk to Anyone: 92 Little Tricks For Big Success In Relationships"
        author="Leil Lowndes"
        year="2014"
        country="United Kingdom"
      />
      <Book
        img="https://m.media-amazon.com/images/I/51AHZGhzZEL._SL500_.jpg"
        book="Rich Dad Poor Dad"
        author="Robert T. Kiyosaki"
        year="1997"
        country="United States"
      />
      <Book
        img="https://m.media-amazon.com/images/I/51c4H3VBciL._SL500_.jpg"
        book="Can't Hurt Me: Master Your Mind and Defy the Odds"
        author="David Goggins"
        year="2018"
        country="United States"
      />
      <span>{Data}</span>
    </div>
    
  );
}

export default BookList;
