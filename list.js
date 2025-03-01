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
    ]
};

const table = document.getElementById('list_table');
const input = document.getElementById('search-input');
const hulpdienstDropdown = document.getElementById('hulpdienst-dropdown');
const regioDropdown = document.getElementById('regio-dropdown');

let count = 100;
let preprocessedDataset = [];

const CACHE_KEY = 'cachedSheetData';

async function fetchDataFromServer(region) {
    try {
        const response = await fetch(`/api/data?region=${region}`);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        console.log('Fetched data from server:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data from server:', error);
        return [];
    }
}

function populateDropdown(dropdownButton, dropdownData) {
    const dropdownMenu = dropdownButton.nextElementSibling;
    dropdownMenu.innerHTML = '';

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
    regioDropdownMenu.innerHTML = '';

    const dropdownData = window.location.search.includes('NL') ? NLDropdown : BEDropdown;

    let filteredRegions = [];

    if (hulpdienstValue === 'all') {
        filteredRegions = dropdownData.RegioDropdown;
        regioDropdownButton.innerHTML = `Alle Regio's <i class="fa fa-chevron-down"></i>`;
        regioDropdownButton.setAttribute('data-value', 'all');
    } else if (hulpdienstValue === 'Politie') {
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => region.value === 'all' || region.text.includes('(Politie)')
        );
    } else if (hulpdienstValue === 'Rijkswaterstaat' || hulpdienstValue === 'Weginspecteurs') {
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => region.value === 'all' || region.text.includes('(RWS)')
        );
    } else {
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => !region.text.includes('(Politie)') && !region.text.includes('(RWS)')
        );
    }

    populateDropdown(regioDropdownButton, filteredRegions);
    initializeCustomDropdown(regioDropdownButton, updAndClear);

    if (hulpdienstValue !== 'Politie' && hulpdienstValue !== 'Rijkswaterstaat' && hulpdienstValue !== 'Weginspecteurs') {
        regioDropdownButton.innerHTML = `Alle Regio's <i class="fa fa-chevron-down"></i>`;
        regioDropdownButton.setAttribute('data-value', 'all');
    }
}

function updateHulpdienstDropdown(regioValue) {
    const hulpdienstDropdownButton = document.getElementById('hulpdienst-dropdown');

    if (regioValue && regioValue.includes('(Politie)')) {
        hulpdienstDropdownButton.innerHTML = `Politie <i class="fa fa-chevron-down"></i>`;
        hulpdienstDropdownButton.setAttribute('data-value', 'Politie');
        filterRegioDropdown('Politie');
    } else if (regioValue && regioValue.includes('(RWS)')) {
        hulpdienstDropdownButton.innerHTML = `Rijkswaterstaat <i class="fa fa-chevron-down"></i>`;
        hulpdienstDropdownButton.setAttribute('data-value', 'Rijkswaterstaat');
        filterRegioDropdown('Rijkswaterstaat');
    }
}

function initializeCustomDropdown(dropdownButton, callback) {
    const dropdownMenu = dropdownButton.nextElementSibling;
    const dropdownItems = dropdownMenu.querySelectorAll('li');

    dropdownButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('visible');
    });

    dropdownItems.forEach((item) => {
        item.addEventListener('click', () => {
            const searchInput = document.getElementById('search-input');

            if (searchInput) {
                searchInput.value = '';
            }

            dropdownButton.innerHTML = `${item.textContent} <i class="fa fa-chevron-down"></i>`;
            dropdownButton.setAttribute('data-value', item.getAttribute('value'));

            dropdownMenu.classList.remove('visible');

            if (dropdownButton.id === 'regio-dropdown') {
                updateHulpdienstDropdown(item.textContent);
            }

            if (dropdownButton.id === 'hulpdienst-dropdown') {
                const hulpdienstValue = item.getAttribute('value');
                filterRegioDropdown(hulpdienstValue);
            }

            callback();
        });
    });

    document.addEventListener('click', (e) => {
        if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('visible');
        }
    });
}

function updateInfoGroupHeight() {
    document.querySelectorAll('.info-group').forEach(infoGroup => {
        const infoBox = infoGroup.querySelector('.info-box');
        if (infoBox) {
            let infoBoxHeight = infoBox.offsetHeight;

            if (window.innerWidth < 350) {
                infoBox.style.minHeight = `${MIN_INFO_BOX_HEIGHT}px`;
                infoBoxHeight = Math.max(infoBoxHeight, MIN_INFO_BOX_HEIGHT);
            } else {
                infoBox.style.minHeight = '';
            }

            const newHeight = infoBoxHeight + 4;
            infoGroup.style.height = `${newHeight}px`;
        }
    });
}

let filteredData = [];
let offset = 0;
let isScrollting = false;
let scrollTimeout;
let allRowsRendered = false;

function filterAndSearchDataset(query, region, service, dataset) {
    const lowerQuery = query.toLowerCase();
    const filtered = [];

    dataset.forEach((item, index, array) => {
        const matchesRegion = region === 'all' || item.Regio === region;
        const matchesService = service === 'all' || item.Hulpdienst === service;

        const matchesSearch =
            lowerQuery === '' ||
            item._searchField.includes(lowerQuery) ||
            item.TypeVoertuig.toLowerCase().includes(lowerQuery) ||
            (item.Roepnummer && item.Roepnummer.toLowerCase().includes(lowerQuery));

        if (item.TypeVoertuig === '' && item.Adres) {
            let childIndex = index + 1;
            let hasMatchingChild = false;

            while (
                childIndex < array.length &&
                array[childIndex].TypeVoertuig !== ''
            ) {
                const childRow = array[childIndex];
                const childMatchesSearch =
                    childRow._searchField.includes(lowerQuery) ||
                    childRow.TypeVoertuig.toLowerCase().includes(lowerQuery) ||
                    (childRow.Roepnummer && childRow.Roepnummer.toLowerCase().includes(lowerQuery));

                if (childMatchesSearch) {
                    hasMatchingChild = true;
                    break;
                }
                childIndex++;
            }

            if (
                matchesRegion &&
                matchesService &&
                (hasMatchingChild || 
                 (lowerQuery === '' || item.Adres.toLowerCase().includes(lowerQuery)))
            ) { // Fixed: Added the missing closing parenthesis here
                filtered.push(item);
            }
        } else if (matchesRegion && matchesService && matchesSearch) {
            filtered.push(item);
        }
    });

    return filtered;
}

function generateVisibleRows(dataset, amount, offset, shouldClear = false) {
    const containersHolder = document.getElementById('containers-holder');

    if (shouldClear) {
        containersHolder.innerHTML = '';
        offset = 0;
    }

    if (dataset.length === 0) {
        const noMatchDiv = document.createElement('div');
        noMatchDiv.textContent = 'Geen overeenkomsten gevonden.';
        noMatchDiv.style.textAlign = 'center';
        noMatchDiv.style.padding = '20px';
        noMatchDiv.style.color = '#888';
        containersHolder.appendChild(noMatchDiv);
        return;
    }

    const rowsToRender = dataset.slice(offset, offset + amount);
    let currentAddress = '';
    let currentContainer = null;

    rowsToRender.forEach((row) => {
        if (row.TypeVoertuig === '' && row.Adres) {
            currentAddress = row.Adres;
            currentContainer = document.createElement('div');
            currentContainer.className = 'container';

            const header = document.createElement('div');
            header.className = 'header';
            header.textContent = currentAddress;
            currentContainer.appendChild(header);

            containersHolder.appendChild(currentContainer);
        } else if (currentContainer && row.TypeVoertuig !== '') {
            const infoGroup = document.createElement('div');
            infoGroup.className = 'info-group';

            const infoContainer1 = document.createElement('div');
            infoContainer1.className = 'info-container';

            const roepnummerBox = document.createElement('div');
            roepnummerBox.className = 'info-box';
            const roepnummerLabel = document.createElement('div');
            roepnummerLabel.className = 'label';
            roepnummerLabel.textContent = 'Roepnummer';
            const roepnummerValue = document.createElement('div');
            roepnummerValue.className = 'value';
            roepnummerValue.textContent = row.Roepnummer || '';
            roepnummerBox.appendChild(roepnummerLabel);
            roepnummerBox.appendChild(roepnummerValue);
            infoContainer1.appendChild(roepnummerBox);

            const typeVoertuigBox = document.createElement('div');
            typeVoertuigBox.className = 'info-box';
            const toggleBtn = document.createElement('div');
            toggleBtn.className = 'toggle-btn';
            toggleBtn.innerHTML = '<i class="fa fa-chevron-down"></i>';
            toggleBtn.onclick = function() {
                toggleDetails(this);
            };
            const typeVoertuigLabel = document.createElement('div');
            typeVoertuigLabel.className = 'label';
            typeVoertuigLabel.textContent = 'Type Voertuig';
            const typeVoertuigValue = document.createElement('div');
            typeVoertuigValue.className = 'value';
            typeVoertuigValue.textContent = row.TypeVoertuig || '';
            typeVoertuigBox.appendChild(toggleBtn);
            typeVoertuigBox.appendChild(typeVoertuigLabel);
            typeVoertuigBox.appendChild(typeVoertuigValue);
            infoContainer1.appendChild(typeVoertuigBox);

            infoGroup.appendChild(infoContainer1);

            const infoContainer2 = document.createElement('div');
            infoContainer2.className = 'info-container toggle-section hidden';

            const afkortingBox = document.createElement('div');
            afkortingBox.className = 'info-box';
            const afkortingLabel = document.createElement('div');
            afkortingLabel.className = 'label';
            afkortingLabel.textContent = 'Afkorting';
            const afkortingValue = document.createElement('div');
            afkortingValue.className = 'value';
            afkortingValue.textContent = row.Afkorting || '';
            afkortingBox.appendChild(afkortingLabel);
            afkortingBox.appendChild(afkortingValue);
            infoContainer2.appendChild(afkortingBox);

            const kentekenBox = document.createElement('div');
            kentekenBox.className = 'info-box';
            const kentekenLabel = document.createElement('div');
            kentekenLabel.className = 'label';
            kentekenLabel.textContent = 'Kenteken';
            const kentekenValue = document.createElement('div');
            kentekenValue.className = 'value';
            kentekenValue.textContent = row.Kenteken || '';
            kentekenBox.appendChild(kentekenLabel);
            kentekenBox.appendChild(kentekenValue);
            infoContainer2.appendChild(kentekenBox);

            if (row.Bijzonderheden && row.Bijzonderheden.trim() !== '') {
                const bijzonderhedenBox = document.createElement('div');
                bijzonderhedenBox.className = 'info-box large';
                const bijzonderhedenLabel = document.createElement('div');
                bijzonderhedenLabel.className = 'label';
                bijzonderhedenLabel.textContent = 'Bijzonderheden';
                const bijzonderhedenValue = document.createElement('div');
                bijzonderhedenValue.className = 'value';
                bijzonderhedenValue.textContent = row.Bijzonderheden || '';
                bijzonderhedenBox.appendChild(bijzonderhedenLabel);
                bijzonderhedenBox.appendChild(bijzonderhedenValue);
                infoContainer2.appendChild(bijzonderhedenBox);
            }

            infoGroup.appendChild(infoContainer2);

            currentContainer.appendChild(infoGroup);

            updateInfoGroupHeight();
        }
    });
}

const debounce = (func, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};

function updateList(shouldClear = true) {
    const query = input.value || '';
    const region = regioDropdown.getAttribute('data-value') || 'all';
    const service = hulpdienstDropdown.getAttribute('data-value') || 'all';

    filteredData = filterAndSearchDataset(query, region, service, preprocessedDataset);

    if (shouldClear) {
        offset = 0;
        allRowsRendered = false;
    }

    generateVisibleRows(filteredData, count, offset, shouldClear);
    offset += count;
}

window.addEventListener('scroll', () => {
    if (isScrollting || allRowsRendered) return;
    isScrollting = true;
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 5 &&
            !allRowsRendered &&
            filteredData.length > offset
        ) {
            generateVisibleRows(filteredData, count, offset, false);
            offset += count;
        }
        isScrollting = false;
    }, 200);
});

updateList(true);

document.addEventListener('DOMContentLoaded', async () => {
    const selectedHulpdienst = localStorage.getItem("selectedDropdownValue");

    if (selectedHulpdienst) {
        hulpdienstDropdown.textContent = selectedHulpdienst;
        hulpdienstDropdown.innerHTML += '<i class="fa fa-chevron-down"></i>';
        hulpdienstDropdown.setAttribute("data-value", selectedHulpdienst);
        localStorage.removeItem("selectedDropdownValue");
        console.log("Selected hulpdienst applied:", selectedHulpdienst);
        updAndClear();
    }

    const urlParams = window.location.search.substring(1);
    const region = urlParams;
    let dropdownData = null;

    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(`${CACHE_KEY}_time`);

    if (region === 'NL') {
        dropdownData = NLDropdown;
        SheetName = 'MegaSheetNL';
        document.querySelector('a[href="../list.html?NL"]').style.color = 'var(--accent-color)';
    } else if (region === 'BE') {
        dropdownData = BEDropdown;
        SheetName = 'MegaSheetBE';
        document.querySelector('a[href="../list.html?BE"]').style.color = 'var(--accent-color)';
    }

    const jsonData = await fetchDataFromServer(region);
    preprocessedDataset = jsonData;

    if (dropdownData) {
        populateDropdown(hulpdienstDropdown, dropdownData.HulpdienstDropdown);
        populateDropdown(regioDropdown, dropdownData.RegioDropdown);
    }

    initializeCustomDropdown(hulpdienstDropdown, updAndClear);
    initializeCustomDropdown(regioDropdown, updAndClear);

    count = 100;
    updateList();

    input.addEventListener('input', updAndClear);
});
