
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

    console.log(hulpdienstValue); // Log de huidige waarde van hulpdienstValue

    if (hulpdienstValue === 'all') {
        // Display ALL regions when "Alle Hulpdiensten" is selected
        filteredRegions = dropdownData.RegioDropdown; 
        console.log('Resetting to ALL regions');
    
        // Reset the dropdown button to "Alle Regio's"
        regioDropdownButton.innerHTML = `Alle Regio's <i class="fa fa-chevron-down"></i>`;
        regioDropdownButton.setAttribute('data-value', 'all');
    }
     else if (hulpdienstValue === 'Politie') {
        // Toon alleen regio's met (Politie)
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => region.value === 'all' || region.text.includes('(Politie)')
        );
    } else if (hulpdienstValue === 'Rijkswaterstaat' || hulpdienstValue === 'Weginspecteurs') {
        // Toon alleen regio's met (RWS)
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => region.value === 'all' || region.text.includes('(RWS)')
        );
    } else {
        // Verberg regio's met (Politie) en (RWS) voor andere hulpdiensten
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => !region.text.includes('(Politie)') && !region.text.includes('(RWS)')
        );
    }

    // Vul de dropdown met de gefilterde regio's
    populateDropdown(regioDropdownButton, filteredRegions);

    // Initialiseer de dropdown opnieuw
    initializeCustomDropdown(regioDropdownButton, updAndClear);

    // Reset de dropdown-knop naar "Alle Regio's" als een andere hulpdienst dan Politie/Rijkswaterstaat/Weginspecteurs is geselecteerd
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
                searchInput.value = ''; // Clear the search input
            }

            // Update the dropdown button text and data-value
            dropdownButton.innerHTML = `${item.textContent} <i class="fa fa-chevron-down"></i>`;
            dropdownButton.setAttribute('data-value', item.getAttribute('value'));

            // Close the dropdown menu
            dropdownMenu.classList.remove('visible');

            // Handle specific logic for the regio-dropdown
            if (dropdownButton.id === 'regio-dropdown') {
                updateHulpdienstDropdown(item.textContent);
            }

            // Always pass the hulpdienstValue to filterRegioDropdown
            if (dropdownButton.id === 'hulpdienst-dropdown') {
                const hulpdienstValue = item.getAttribute('value');
                filterRegioDropdown(hulpdienstValue); // Pass the selected value
            }

            // Execute the callback function
            callback();
        });
    });

    // Close the dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('visible');
        }
    });
}

// Function to update the height of info-group elements based on the info-box height
function updateInfoGroupHeight() {
    document.querySelectorAll('.info-group').forEach(infoGroup => {
        const infoBox = infoGroup.querySelector('.info-box');
        if (infoBox) {
            let infoBoxHeight = infoBox.offsetHeight;

            // Check if the viewport width is less than 350px
            if (window.innerWidth < 350) {
                // Enforce a minimum height of 78px for the info-box
                infoBox.style.minHeight = `${MIN_INFO_BOX_HEIGHT}px`;
                infoBoxHeight = Math.max(infoBoxHeight, MIN_INFO_BOX_HEIGHT); // Ensure minimum height
            } else {
                // Remove min-height if viewport width is >= 350px
                infoBox.style.minHeight = '';
            }

            const newHeight = infoBoxHeight + 4; // Add 4px to the height
            infoGroup.style.height = `${newHeight}px`;
        }
    });
}


// Global variables
let filteredData = [];
let offset = 0; // Number of rows to load per scroll
let isScrollting = false;
let scrollTimeout;
let allRowsRendered = false; // Flag to track if all rows have been rendered

// Function to filter and search the dataset
function filterAndSearchDataset(query, region, service, dataset) {
    console.log(query, region, service, dataset);
    const lowerQuery = query.toLowerCase();
    const filtered = [];

    // Iterate through each item in the dataset
    dataset.forEach((item, index, array) => {
        const matchesRegion = region === 'all' || item.Regio === region;
        const matchesService = service === 'all' || item.Hulpdienst === service;

        // Check if the current item matches the search query
        const matchesSearch =
            lowerQuery === '' ||
            item._searchField.includes(lowerQuery) ||
            item.TypeVoertuig.toLowerCase().includes(lowerQuery) ||
            (item.Roepnummer && item.Roepnummer.toLowerCase().includes(lowerQuery)); // Added Roepnummer check

        // Handle address rows
        if (item.TypeVoertuig === '' && item.Adres) {
            let childIndex = index + 1;
            let hasMatchingChild = false;

            // Find all child rows until the next address row
            while (
                childIndex < array.length &&
                array[childIndex].TypeVoertuig !== ''
            ) {
                const childRow = array[childIndex];
                const childMatchesSearch =
                    childRow._searchField.includes(lowerQuery) ||
                    childRow.TypeVoertuig.toLowerCase().includes(lowerQuery) ||
                    (childRow.Roepnummer && childRow.Roepnummer.toLowerCase().includes(lowerQuery)); // Added Roepnummer check for child rows

                if (childMatchesSearch) {
                    hasMatchingChild = true;
                    break; // Stop checking once a match is found
                }
                childIndex++;
            }

            // Include the address row if:
            // - It matches the region and service filters
            // - Either it has a matching child OR the query matches the address itself
            if (
                matchesRegion &&
                matchesService &&
                (hasMatchingChild || 
                 (lowerQuery === '' || item.Adres.toLowerCase().includes(lowerQuery)))
            ) {
                filtered.push(item);
            }
        } else if (matchesRegion && matchesService && matchesSearch) {
            // Include non-address rows that match the criteria
            filtered.push(item);
        }
    });

    return filtered;
}

function generateVisibleRows(dataset, amount, offset, shouldClear = false) {
    const containersHolder = document.getElementById('containers-holder');

    // Clear the container only if explicitly requested (e.g., during a filter/search operation)
    if (shouldClear) {
        containersHolder.innerHTML = '';
        offset = 0; // Reset the offset when clearing the container
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

    // Slice the dataset based on the offset and the amount to render
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
    // Get the current query from the input field or use an empty string if cleared
    const query = input.value || ''; 
    const region = regioDropdown.getAttribute('data-value') || 'all';
    const service = hulpdienstDropdown.getAttribute('data-value') || 'all';

    // Filter the dataset based on the updated query, region, and service
    filteredData = filterAndSearchDataset(query, region, service, preprocessedDataset);

    if (shouldClear) {
        offset = 0;
        allRowsRendered = false; // Reset the flag when clearing the container
    }

    generateVisibleRows(filteredData, count, offset, shouldClear); // Pass the offset and shouldClear
    offset += count; // Update the offset for the next batch of rows
}


window.addEventListener('scroll', () => {
    if (isScrollting || allRowsRendered) return; // Stop if scrolling is in progress or all rows are rendered
    isScrollting = true;
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 5 &&
            !allRowsRendered && // Only proceed if not all rows are rendered
            filteredData.length > offset // Check if there are more rows to render
        ) {
            generateVisibleRows(filteredData, count, offset, false); // Pass the offset and set shouldClear to false
            offset += count; // Update the offset for the next batch of rows
        }
        isScrollting = false;
    }, 200);
});

updateList(true);

document.addEventListener('DOMContentLoaded', async () => {
    // Apply selected hulpdienst instantly when the page loads
    const selectedHulpdienst = localStorage.getItem("selectedDropdownValue");

    if (selectedHulpdienst) {
        hulpdienstDropdown.textContent = selectedHulpdienst;
        hulpdienstDropdown.innerHTML += '<i class="fa fa-chevron-down"></i>';
        hulpdienstDropdown.setAttribute("data-value", selectedHulpdienst);
        localStorage.removeItem("selectedDropdownValue");
        console.log("Selected hulpdienst applied:", selectedHulpdienst); // Log the action
        updAndClear();
    }

    const urlParams = window.location.search.substring(1);
    const region = urlParams; // Either 'NL' or 'BE'
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

    const sheetData = await fetchDataFromGoogleSheets();
    const jsonData = convertSheetDataToJSON(sheetData);

    preprocessedDataset = preprocessDataset(jsonData);

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
