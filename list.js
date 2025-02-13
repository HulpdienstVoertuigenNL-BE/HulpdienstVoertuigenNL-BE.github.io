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
        { value: "Scholen", text: "Scholen" },
        { value: "Meldkamers", text: "Meldkamers" },
        { value: "Provincies", text: "Provincies" },
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
        { value: "NN", text: "NN - Noord-Nederland (Pol)" },
        { value: "ON", text: "ON - Oost-Nederland (Pol)" },
        { value: "MD", text: "MD - Midden-Nederland (Pol)" },
        { value: "NH", text: "NH - Noord-Holland (Pol)" },
        { value: "AD", text: "AD - Amsterdam (Pol)" },
        { value: "DH", text: "DH - Den Haag (Pol)" },
        { value: "RT", text: "RT - Rotterdam (Pol)" },
        { value: "ZB", text: "ZB - Zuid-Brabant (Pol)" },
        { value: "OB", text: "OB - Oost-Brabant (Pol)" },
        { value: "LB", text: "LB - Limburg (Pol)" }, 

    ]
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
        { value: "Scholen", text: "Scholen" },
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
    ]
};

const table = document.getElementById('list_table');
const input = document.getElementById('search-input');
const hulpdienstDropdown = document.getElementById('hulpdienst-dropdown');
const regioDropdown = document.getElementById('regio-dropdown');

let count = 100;
let preprocessedDataset = [];

// Google Sheets API configuration
const SPREADSHEET_ID = '1hu4jiDn14p6F0rtJ1dZcShN1xrktfLG4Hpa2kg0JFvE';
const API_KEY = 'AIzaSyDyKWfNV0-D7uGYVwFWnHCvvdpRAh_ygDI';
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

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SheetName}?key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem(CACHE_KEY, JSON.stringify(data.values));
        localStorage.setItem(`${CACHE_KEY}_time`, Date.now());
        return data.values;
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
        return [];
    }
}

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

function preprocessDataset(dataset) {
    return dataset.map((row) => {
        // Trim all fields before processing
        const trimmedRow = Object.fromEntries(
            Object.entries(row).map(([key, value]) => [key, typeof value === 'string' ? value.trim() : value])
        );

        return {
            ...trimmedRow,
            _searchField: [
                trimmedRow.Adres,
                trimmedRow.Roepnaam,
                trimmedRow.Afkorting,
                trimmedRow.TypeVoertuig,
                trimmedRow.Kenteken,
                trimmedRow.Bijzonderheden,
                trimmedRow.Hulpdienst,
                trimmedRow.Regio,
            ].map(field => field ? field.toLowerCase() : '').join(' '), // Combine all fields into a single string for searching
        };
    });
}

// Function to populate the dropdown with the given data
function populateDropdown(dropdownButton, dropdownData) {
    const dropdownMenu = dropdownButton.nextElementSibling;

    // Clear current dropdown items
    dropdownMenu.innerHTML = '';

    // Add new dropdown items
    dropdownData.forEach((item) => {
        const li = document.createElement('li');
        li.setAttribute('value', item.value);
        li.textContent = item.text;
        dropdownMenu.appendChild(li);
    });
}

function filterRegioDropdown(hulpdienstValue) {
    const regioDropdownButton = document.getElementById('regio-dropdown');
    const regioDropdownMenu = regioDropdownButton.nextElementSibling;

    // Clear current dropdown items
    regioDropdownMenu.innerHTML = '';

    // Get the appropriate dropdown data based on the region (NL or BE)
    const dropdownData = window.location.search.includes('NL') ? NLDropdown : BEDropdown;

    let filteredRegions = [];

    if (hulpdienstValue === 'all') {
        // When "Alle Hulpdiensten" is selected, show all regions
        filteredRegions = dropdownData.RegioDropdown;
    } else if (hulpdienstValue === 'Politie') {
        // When "Politie" is selected, show only "Alle Regio's" and "(Pol)" regions
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => region.value === 'all' || region.text.includes('(Pol)')
        );
    } else if (hulpdienstValue === 'Rijkswaterstaat') {
        // When "RWS" is selected, show only "Alle Regio's" and "(RWS)" regions
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => region.value === 'all' || region.text.includes('(RWS)')
        );
    } else {
        // For other hulpdiensten, show all regions except those with "(Pol)" or "(RWS)"
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => !region.text.includes('(Pol)') && !region.text.includes('(RWS)')
        );
    }

    // Populate the RegioDropdown with the filtered regions
    populateDropdown(regioDropdownButton, filteredRegions);

    // Reinitialize the dropdown functionality
    initializeCustomDropdown(regioDropdownButton, updAndClear);

    // Reset the RegioDropdown to "Alle Regio's" when switching hulpdienst (except for "Politie" or "RWS")
    if (hulpdienstValue !== 'Politie' && hulpdienstValue !== 'Rijkswaterstaat') {
        regioDropdownButton.innerHTML = `Alle Regio's <i class="fa fa-chevron-down"></i>`;
        regioDropdownButton.setAttribute('data-value', 'all');
    }
}

function updateHulpdienstDropdown(regioValue) {
    const hulpdienstDropdownButton = document.getElementById('hulpdienst-dropdown');

    // Check if the selected region is a "Pol" or "RWS" region
    if (regioValue && regioValue.includes('(Pol)')) {
        // Set the HulpdienstDropdown to "Politie"
        hulpdienstDropdownButton.innerHTML = `Politie <i class="fa fa-chevron-down"></i>`;
        hulpdienstDropdownButton.setAttribute('data-value', 'Politie');

        // Filter the RegioDropdown to show only "Alle Regio's" and "(Pol)" regions
        filterRegioDropdown('Politie');
    } else if (regioValue && regioValue.includes('(RWS)')) {
        // Set the HulpdienstDropdown to "Rijkswaterstaat"
        hulpdienstDropdownButton.innerHTML = `Rijkswaterstaat <i class="fa fa-chevron-down"></i>`;
        hulpdienstDropdownButton.setAttribute('data-value', 'Rijkswaterstaat');

        // Filter the RegioDropdown to show only "Alle Regio's" and "(RWS)" regions
        filterRegioDropdown('Rijkswaterstaat');
    }
}

// Function to initialize dropdown functionality
function initializeCustomDropdown(dropdownButton, callback) {
    const dropdownMenu = dropdownButton.nextElementSibling;
    const dropdownItems = dropdownMenu.querySelectorAll('li');

    // Show/Hide dropdown menu on button click
    dropdownButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('visible');
    });

    // Update dropdown value and trigger callback on item click
    dropdownItems.forEach((item) => {
        item.addEventListener('click', () => {
            dropdownButton.innerHTML = `${item.textContent} <i class="fa fa-chevron-down"></i>`;
            dropdownButton.setAttribute('data-value', item.getAttribute('value'));
            dropdownMenu.classList.remove('visible');

            // If the dropdown is the RegioDropdown, check if a "Pol" region was selected
            if (dropdownButton.id === 'regio-dropdown') {
                updateHulpdienstDropdown(item.textContent);
            }

            callback();
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
        if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('visible');
        }
    });
}

function filterAndSearchDataset(query, region, service, dataset) {
    const lowerQuery = query.toLowerCase();

    return dataset.filter((item) => {
        const matchesRegion = region === 'all' || item.Regio === region;
        const matchesService = service === 'all' || item.Hulpdienst === service; // Filter by Hulpdienst
        const matchesSearch = lowerQuery === '' || item._searchField.includes(lowerQuery);

        return matchesRegion && matchesService && matchesSearch;
    });
}

function generateVisibleRows(dataset, amount) {
    const table = document.getElementById('list_table');
    const tableBody = table.querySelector('tbody');

    // If tbody doesn't exist, create it
    if (!tableBody) {
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
    }

    // Clear all rows except the header row
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Check if the dataset is empty
    if (dataset.length === 0) {
        const noMatchRow = document.createElement('tr');
        const noMatchCell = document.createElement('td');
        noMatchCell.colSpan = 6; // Span across all columns
        noMatchCell.textContent = 'Geen overeenkomsten gevonden.'; // "No matches found" in Dutch
        noMatchCell.style.textAlign = 'start'; // Center the text
        noMatchCell.style.padding = '10px'; // Add some padding
        noMatchCell.classList.add('list_even')
        noMatchRow.appendChild(noMatchCell);
        table.appendChild(noMatchRow);
        return; // Exit the function early
    }

    const rowsToRender = dataset.slice(0, amount);

    // Define the columns to include in the table
    const columnsToInclude = ['Adres', 'Roepnummer', 'Afkorting', 'TypeVoertuig', 'Kenteken', 'Bijzonderheden'];

    rowsToRender.forEach((row) => {
        if (row.TypeVoertuig === '' && row.Adres) {
            // Create a full-width address row
            const addressTr = document.createElement('tr');
            const addressTd = document.createElement('td');
            addressTd.colSpan = columnsToInclude.length; // Span across all columns
            addressTd.textContent = row.Adres;
            addressTd.classList.add('td-address-full');
            addressTr.appendChild(addressTd);
            table.appendChild(addressTr);
        } else {
            // Create a regular row
            const tr = document.createElement('tr');
            if (row.TypeVoertuig !== '') tr.classList.add('list_even');

            columnsToInclude.forEach((column, colIndex) => {
                const td = document.createElement('td');
                td.textContent = row[column] || ''; // Use empty string as fallback
                td.classList.add(`td-class-${colIndex + 1}`);
                tr.appendChild(td);
            });

            table.appendChild(tr);
        }
    });
}

// Debounce function for input events
const debounce = (func, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};

// Update list based on input and selected filters
function updAndClear() {
    count = 100;

    // Get the selected Hulpdienst value
    const hulpdienstValue = hulpdienstDropdown.getAttribute('data-value') || 'all';

    // Filter the RegioDropdown based on the selected Hulpdienst
    filterRegioDropdown(hulpdienstValue);

    // Update the list
    updateList();
}

const updateList = debounce(() => {
    const query = input.value;
    const regioValue = regioDropdown.getAttribute('data-value') || 'all';
    const hulpdienstValue = hulpdienstDropdown.getAttribute('data-value') || 'all';

    // Filter the dataset based on the selected filters
    const filteredData = filterAndSearchDataset(query, regioValue, hulpdienstValue, preprocessedDataset);

    // Generate the table rows with the filtered data
    generateVisibleRows(filteredData, count);
}, 150);


window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        count += 100; // Increment the count
        updateList(); // Update the list
    }
});


document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = window.location.search.substring(1);
    const region = urlParams; // Either 'NL' or 'BE'
    let dropdownData = null;

    // Clear cache when switching sheets
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(`${CACHE_KEY}_time`);

    // Set the appropriate dropdown and dataset based on the region
    if (region === 'NL') {
        dropdownData = NLDropdown; // Set NL data for dropdown
        SheetName = 'MegaSheetNL';
        // Change NL link color to accent color
        document.querySelector('a[href="../list.html?NL"]').style.color = 'var(--accent-color)';
    } else if (region === 'BE') {
        dropdownData = BEDropdown; // Set BE data for dropdown
        SheetName = 'MegaSheetBE';
        // Change BE link color to accent color
        document.querySelector('a[href="../list.html?BE"]').style.color = 'var(--accent-color)';
    }

    // Fetch data from Google Sheets
    const sheetData = await fetchDataFromGoogleSheets();
    const jsonData = convertSheetDataToJSON(sheetData);

    // Preprocess the dataset
    preprocessedDataset = preprocessDataset(jsonData);

    if (dropdownData) {
        // Populate Hulpdienst dropdown
        populateDropdown(hulpdienstDropdown, dropdownData.HulpdienstDropdown);

        // Populate Regio dropdown
        populateDropdown(regioDropdown, dropdownData.RegioDropdown);
    }

    // Initialize dropdown functionality
    initializeCustomDropdown(hulpdienstDropdown, updAndClear);
    initializeCustomDropdown(regioDropdown, updAndClear);

    // Initial list update
    count = 100;
    updateList();

    // Attach input event listener for search
    input.addEventListener('input', updAndClear);

    // Check if there's a selected service stored in localStorage
    const selectedHulpdienst = localStorage.getItem("selectedDropdownValue");

    if (selectedHulpdienst) {
        // Update the dropdown with the stored value
        hulpdienstDropdown.textContent = selectedHulpdienst; // Only set the text content
        hulpdienstDropdown.innerHTML += '<i class="fa fa-chevron-down"></i>'; // Add the dropdown icon

        hulpdienstDropdown.setAttribute("data-value", selectedHulpdienst);
        // Clear the stored value to reset for future use
        localStorage.removeItem("selectedDropdownValue");

        // Trigger update
        updAndClear();
    }
});