require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = process.env.API_KEY;
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

let SheetName = 'Sheet1';

const CACHE_KEY = 'cachedSheetData';
const CACHE_EXPIRY = 1000 * 60 * 60;
const cache = { data: null, timestamp: 0 };

async function fetchDataFromGoogleSheets(SheetName) {
    if (cache.data && Date.now() - cache.timestamp < CACHE_EXPIRY) {
        console.log('Returning cached data');
        return cache.data;
    }

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SheetName}?key=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        cache.data = data.values;
        cache.timestamp = Date.now();

        console.log('Fetched fresh data:', data.values);
        return data.values;
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
        return [];
    }
}

function convertSheetDataToJSON(sheetData) {
    const headers = sheetData[0];
    const rows = sheetData.slice(1);

    return rows.map(row => {
        const obj = {};
        headers.forEach((header, index) => {
            obj[header] = row[index] ? row[index].trim() : '';
        });
        return obj;
    });
}

function preprocessDataset(dataset) {
    return dataset.map(row => {
        const searchField = [
            row.Adres,
            row.Roepnummer,
            row.Afkorting,
            row.TypeVoertuig,
            row.Kenteken,
            row.Bijzonderheden,
            row.Hulpdienst,
            row.Regio,
        ]
            .map(field => (field ? field.toLowerCase() : ''))
            .join(' ');

        return {
            ...row,
            _searchField: searchField,
        };
    });
}

app.get('/api/data', async (req, res) => {
    try {
        const region = req.query.region || 'NL';
        let SheetName;

        if (region === 'NL') {
            SheetName = 'MegaSheetNL';
        } else if (region === 'BE') {
            SheetName = 'MegaSheetBE';
        } else {
            throw new Error('Invalid region specified');
        }

        const sheetData = await fetchDataFromGoogleSheets(SheetName);
        const jsonData = convertSheetDataToJSON(sheetData);
        const preprocessedData = preprocessDataset(jsonData);

        res.json(preprocessedData);
    } catch (error) {
        console.error('Error serving data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
