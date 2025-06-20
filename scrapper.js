#! /usr/bin/node

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.litoralulromanesc.ro/';

async function scrapeHotels() {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        // Example: Select hotel names from homepage (adjust selector as needed)
        const hotels = [];
        $('.hotel-card__title, .hotel-title, .hotel-name').each((i, el) => {
            hotels.push($(el).text().trim());
        });

        console.log('Hoteluri găsite:', hotels);
    } catch (error) {
        console.error('Eroare la accesarea site-ului:', error.message);
    }
}

scrapeHotels();

