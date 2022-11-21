import {ProductItemType} from "../interfaces"

export const data: { products: ProductItemType[] } = {
   products: [{
      id: 1, name: "Red Beach", category: "landmarks", price: 3.89, currency: "USD", image: {
         src: require("../photos/RedBeach.jpeg"), alt: "Red Beach",
      }, bestseller: true, featured: false, details: null,
   }, {
      id: 2, name: "Egg Balloon", category: "landmarks", price: 93.89, currency: "USD", image: {
         src: require("../photos/EggBalloon.jpeg"), alt: "Egg Balloon",
      }, bestseller: false, featured: false, details: null,
   }, {
      id: 3, name: "Man", category: "people", price: 100, currency: "USD", image: {
         src: require("../photos/Man.jpeg"), alt: "Man",
      }, bestseller: false, featured: false, details: null,
   }, {
      id: 4, name: "Architecture", category: "landmarks", price: 101, currency: "USD", image: {
         src: require("../photos/Architecture.jpeg"), alt: "Architecture",
      }, bestseller: false, featured: false, details: {
         dimensions: {
            width: 1020, height: 1020,
         },
      },
   }, {
      id: 5, name: "Samurai King Restling", category: "people", price: 101, currency: "USD", image: {
         src: require("../photos/Samurai.jpeg"), alt: "Samurai King Restling",
      }, bestseller: false, featured: true, details: {
         dimensions: {
            width: 1020, height: 1020,
         }, size: 15000, description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
      },
   }, {
      id: 6, name: "Fancy Car", category: "cars", price: 150, currency: "USD", image: {
         src: require("../photos/FancyCar.jpeg"), alt: "Fancy Car",
      }, bestseller: true, featured: true, details: {
         dimensions: {
            width: 1020, height: 1020,
         }, size: 15000, description: "The fastest car ever",
      },
   }, {
      id: 7, name: "Sport people", category: "people", price: 75, currency: "USD", image: {
         src: require("../photos/Sport people.jpeg"), alt: "Sport people",
      }, bestseller: true, featured: true, details: null,
   }, {
      id: 8, name: "Shadow of Pleasure", category: "people", price: 55, currency: "USD", image: {
         src: require("../photos/Shadow of Pleasure.jpeg"), alt: "Shadow of Pleasure",
      }, bestseller: false, featured: false, details: null,
   }, {
      id: 9, name: "The History", category: "cars", price: 120, currency: "USD", image: {
         src: require("../photos/The History.jpeg"), alt: "The History",
      }, bestseller: false, featured: false, details: null,
   }, {
      id: 10, name: "The Bridge", category: "landmarks", price: 175, currency: "USD", image: {
         src: require("../photos/The Bridge.jpeg"), alt: "The Bridge",
      }, bestseller: false, featured: false, details: {
         dimensions: {
            width: 1020, height: 1020,
         },
      },
   }, {
      id: 11, name: "Choice", category: "food", price: 45, currency: "USD", image: {
         src: require("../photos/Choice.jpeg"), alt: "Choice",
      }, bestseller: false, featured: true, details: null,
   }, {
      id: 12, name: "Charity of Emotion", category: "people", price: 130, currency: "USD", image: {
         src: require("../photos/Charity of Emotion.jpeg"), alt: "Charity of Emotion",
      }, bestseller: true, featured: true, details: null,
   }, {
      id: 13, name: "Landscape", category: "landmarks", price: 100, currency: "USD", image: {
         src: require("../photos/Landscape.jpeg"), alt: "Landscape",
      }, bestseller: true, featured: false, details: null,
   }, {
      id: 14, name: "Snow", category: "landmarks", price: 75, currency: "USD", image: {
         src: require("../photos/Snow.jpeg"), alt: "Snow",
      }, bestseller: false, featured: false, details: null,
   }, {
      id: 15, name: "Fast Food", category: "food", price: 40, currency: "USD", image: {
         src: require("../photos/Fast Food.jpeg"), alt: "Fast Food",
      }, bestseller: false, featured: false, details: null,
   }, {
      id: 16, name: "Alone", category: "minimalism", price: 60, currency: "USD", image: {
         src: require("../photos/Alone.jpeg"), alt: "Alone",
      }, bestseller: false, featured: true, details: null,
   }, {
      id: 17, name: "Adrenaline", category: "cars", price: 35, currency: "USD", image: {
         src: require("../photos/Adrenaline.jpeg"), alt: "Adrenaline",
      }, bestseller: false, featured: false, details: null,
   }, {
      id: 18, name: "River Side", category: "landmarks", price: 95, currency: "USD", image: {
         src: require("../photos/River Side.jpeg"), alt: "River Side",
      }, bestseller: true, featured: false, details: null,
   }, {
      id: 19, name: "Meditation", category: "people", price: 70, currency: "USD", image: {
         src: require("../photos/Meditation.jpeg"), alt: "Meditation",
      }, bestseller: false, featured: true, details: null,
   }, {
      id: 20, name: "Calm", category: "landmarks", price: 80, currency: "USD", image: {
         src: require("../photos/Calm.jpeg"), alt: "Calm",
      }, bestseller: false, featured: false, details: null,
   }, {
      id: 21, name: "Asian Food", category: "food", price: 80, currency: "USD", image: {
         src: require("../photos/Asian Food.jpeg"), alt: "Asian Food",
      }, bestseller: false, featured: false, details: null,
   },],
}
