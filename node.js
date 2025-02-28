const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Mock DOM elements using jsdom
const { JSDOM } = require('jsdom');
const { document } = new JSDOM('<!DOCTYPE html><html><body></body></html>').window;
global.document = document;

// Mock localStorage
class LocalStorageMock {
    constructor() {
        this.store = {};
    }
    getItem(key) {
        return this.store[key] || null;
    }
    setItem(key, value) {
        this.store[key] = value;
    }
    removeItem(key) {
        delete this.store[key];
    }
    clear() {
        this.store = {};
    }
}
global.localStorage = new LocalStorageMock();

// Dropdown data
const NLDropdown = {
    HulpdienstDropdown: [
        { value: "all", text: "Alle Hulpdiensten" },
        { value: "Politie", text: "Politie" },
        { value: "Brandweer", text: "Brandweer" },
        { value: "Ambulance", text: "Ambulance" },
        { value: "Reddingsbrigade", text: "Reddingsbrigade" },
        { value: "KNRM", text: "KNRM" },
        { value: "ProRail", text: "ProRail" },
        { value: "Rijkswaterstaat", text: "Rijkswaterstaat" },
        { value: "Ziekenhuizen", text: "Ziekenhuizen" },
        { value: "Academies", text: "Academies" },
        { value: "Meldkamers", text: "Meldkamers" },
        { value: "Weginspecteurs", text: "Weginspecteurs" },
        { value: "Kustwacht", text: "Kustwacht" },
        { value: "Defensie", text: "Defensie" },
        { value: "Bergingsbedrijf", text: "Bergingsbedrijf" },
        { value: "KMAR/Douane", text: "KMAR/Douane" },
        { value: "Rijksrederij", text: "Rijksrederij" },
    ],
    RegioDropdown: [
        { value: "all", text: "Alle Regio's" },
        { value: "1", text: "1 - Groningen (HVDG)" },
        { value: "2", text: "2 - Fryslan (VRF)" },
        { value: "3", text: "3 - Drenthe (VRD)" },
        { value: "4", text: "4 - IJsselland (VRIJ)" },
        { value: "5", text: "5 - Twente (VRT)" },
        { value: "6", text: "6 - Noord en Oost-Gelderland (VNOG)" },
        { value: "7", text: "7 - Gelderland Midden (VGGM)" },
        { value: "8", text: "8 - Gelderland Zuid (VRGZ)" },
        { value: "9", text: "9 - Utrecht (VRU)" },
        { value: "10", text: "10 - Noord-Holland Noord (VRNHN)" },
        { value: "11", text: "11 - Zaanstreek-Waterland (VRZW)" },
        { value: "12", text: "12 - Kennemerland (VRK)" },
        { value: "13", text: "13 - Amsterdam-Amstelland (VRAA)" },
        { value: "14", text: "14 - Gooi en Vechtstreek (VRGV)" },
        { value: "15", text: "15 - Haaglanden (VRH)" },
        { value: "16", text: "16 - Hollands Midden (VRHM)" },
        { value: "17", text: "17 - Rotterdam-Rijnmond (VRR)" },
        { value: "18", text: "18 - Zuid-Holland Zuid (VRZHZ)" },
        { value: "19", text: "19 - Zeeland (VRZ)" },
        { value: "20", text: "20 - Midden en West-Brabant (VRMWB)" },
        { value: "21", text: "21 - Brabant-Noord (VRBN)" },
        { value: "22", text: "22 - Brabant Zuid Oost (VRBZO)" },
        { value: "23", text: "23 - Limburg-Noord (VRLN)" },
        { value: "24", text: "24 - Zuid-Limburg (VRZL)" },
        { value: "25", text: "25 - Flevoland (VRFL)" },
        { value: "26", text: "26 - NIPV (IFV)" },
        { value: "28", text: "28 - Defentie (DF)" },
        { value: "NN", text: "NN - Noord-Nederland (RWS)" },
        { value: "ON", text: "ON - Oost-Nederland (RWS)" },
        { value: "MN", text: "MN - Midden-Nederland (RWS)" },
        { value: "WNN", text: "WNN - West-Nederland-Noord (RWS)" },
        { value: "WNZ", text: "WNZ - West-Nederland-Zuid (RWS)" },
        { value: "ZD", text: "ZD - Zee en Delta (RWS)" },
        { value: "ZN", text: "ZN - Zuid-Nederland (RWS)" },
        { value: "NN", text: "NN - Noord-Nederland (Politie)" },
        { value: "ON", text: "ON - Oost-Nederland (Politie)" },
        { value: "MD", text: "MD - Midden-Nederland (Politie)" },
        { value: "NH", text: "NH - Noord-Holland (Politie)" },
        { value: "AD", text: "AD - Amsterdam (Politie)" },
        { value: "DH", text: "DH - Den Haag (Politie)" },
        { value: "RT", text: "RT - Rotterdam (Politie)" },
        { value: "ZB", text: "ZB - Zuid-Brabant (Politie)" },
        { value: "OB", text: "OB - Oost-Brabant (Politie)" },
        { value: "LB", text: "LB - Limburg (Politie)" },
    ],
};

const BEDropdown = {
    HulpdienstDropdown: [
        { value: "all", text: "Alle Hulpdiensten" },
        { value: "Politie", text: "Politie" },
        { value: "Brandweer", text: "Brandweer" },
        { value: "Ambulance", text: "Ambulance" },
        { value: "Reddingsbrigade", text: "Reddingsbrigade" },
        { value: "Kustwacht", text: "Kustwacht" },
        { value: "Ziekenhuizen", text: "Ziekenhuizen" },
        { value: "Academies", text: "Academies" },
        { value: "Meldkamers", text: "Meldkamers" },
    ],
    RegioDropdown: [
        { value: "all", text: "Alle Regio's" },
        { value: "Antwerpen", text: "Antwerpen" },
        { value: "Brussel", text: "Brussel" },
        { value: "Limburg", text: "Limburg" },
        { value: "Oost-Vlaanderen", text: "Oost-Vlaanderen" },
        { value: "Vlaams-Brabant", text: "Vlaams-Brabant" },
        { value: "West-Vlaanderen", text: "West-Vlaanderen" },
        { value: "Henegouwen", text: "Henegouwen" },
        { value: "Luik", text: "Luik" },
        { value: "Luxemburg", text: "Luxemburg" },
        { value: "Waals-Brabant", text: "Waals-Brabant" },
    ],
};

// Google Sheets API configuration
const SPREADSHEET_ID = process.env.SPREADSHEET_ID || '';
const API_KEY = process.env.API_KEY || '';
let SheetName = '';

// Cache configuration
const CACHE_KEY = 'cachedSheetData';
const CACHE_EXPIRY = 1000 * 60 * 60; // 1 hour

// Function to fetch data from Google Sheets with caching
async function fetchDataFromGoogleSheets() {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(`${CACHE_KEY}_time`);

    if (cachedData && cachedTime && Date.now() - cachedTime < CACHE_EXPIRY) {
        return JSON.parse(cachedData);
    }

    if (!SPREADSHEET_ID || !API_KEY) {
        console.error('Missing required environment variables: SPREADSHEET_ID or API_KEY');
        return [];
    }

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SheetName}?key=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        localStorage.setItem(CACHE_KEY, JSON.stringify(data.values));
        localStorage.setItem(`${CACHE_KEY}_time`, Date.now());
        return data.values;
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
        return [];
    }
}

// Convert sheet data to JSON
function convertSheetDataToJSON(sheetData) {
    const headers = sheetData[2]; // First row is the header
    const rows = sheetData.slice(3); // Skip the first two rows (header and example row)

    return rows.map(row => {
        const obj = {};
        headers.forEach((header, index) => {
            obj[header] = row[index] ? row[index].trim() : ''; // Trim spaces and use an empty string as fallback
        });
        return obj;
    });
}

// Preprocess dataset
function preprocessDataset(dataset) {
    return dataset.map((row) => {
        const searchField = [
            row.Adres,
            row.Roepnummer,
            row.Afkorting,
            row.TypeVoertuig,
            row.Kenteken,
            row.Bijzonderheden,
            row.Hulpdienst,
            row.Regio,
        ].map(field => (field ? field.toLowerCase() : '')).join(' ');

        return {
            ...row,
            _searchField: searchField,
        };
    });
}

// Main function
async function main() {
    const urlParams = 'NL'; // Simulate URL params
    let dropdownData = null;

    if (urlParams === 'NL') {
        dropdownData = NLDropdown;
        SheetName = 'MegaSheetNL';
    } else if (urlParams === 'BE') {
        dropdownData = BEDropdown;
        SheetName = 'MegaSheetBE';
    }

    const sheetData = await fetchDataFromGoogleSheets();
    const jsonData = convertSheetDataToJSON(sheetData);
    const preprocessedDataset = preprocessDataset(jsonData);

    console.log('Preprocessed Dataset:', preprocessedDataset);
}

main();
