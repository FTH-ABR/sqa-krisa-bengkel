'use strict';

const products = [
  { id: 'P001', name: 'Baju Kurung Moden', price: 89.9, stock: 25 },
  { id: 'P002', name: 'Songkok Baldu', price: 35.0, stock: 40 },
  { id: 'P003', name: 'Kain Batik Terengganu', price: 100.0, stock: 10 },
  { id: 'P004', name: 'Tudung Bawal Premium', price: 24.95, stock: 60 },
  { id: 'P005', name: 'Kopi Tenom 500g', price: 18.5, stock: 100 },
  { id: 'P006', name: 'Dodol Durian Musang King', price: 12.0, stock: 0 }
];

const promoCodes = {
  RAYA15: { rate: 0.15, expires: null },
  MEGA20: { rate: 0.2, expires: null },
  EXPIRED15: { rate: 0.15, expires: '31/12/2025' }
};

const users = [
  { email: 'aminah@example.test', password: 'Latihan123!', name: 'Aminah binti Ali', isMember: true },
  { email: 'bala@example.test', password: 'Latihan123!', name: 'Bala a/l Subramaniam', isMember: false }
];

module.exports = { products, promoCodes, users };
