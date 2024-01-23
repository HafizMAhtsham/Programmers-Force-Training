const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");

countrySelect.addEventListener("change", populateStates);
stateSelect.addEventListener("change", populateCities);

const data = {
  pakistan: {
    punjab: ["Lahore", "Faisalabad", "Multan", "Bhawalpur"],
    sindh: ["Karachi", "Hyderabad", "Sukkur", "MirpurKhas"],
    khyber_pakhtunkhwa: ["Peshawar", "Abbottabad", "Mardan", "Bannu"],
    balochistan: ["Quetta", "Gwadar", "Khuzdar", "Turbat"]
  },
  india: {
    delhi: ["New Delhi", "Noida", "Gurgaon"],
    maharashtra: ["Mumbai", "Pune", "Nagpur"],
    karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore"],
    rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"]
  },
  china: {
    beijing: ["Beijing City", "Chaoyang District", "Haidian District"],
    shanghai: ["Shanghai City", "Pudong District", "Minhang District"],
    shandong: ["Jinan", "Qingdao", "Yantai", "Weifang"],
    sichuan: ["Chengdu", "Mianyang", "Leshan"]
  },
  usa: {
    california: ["Los Angeles", "San Francisco", "San Diego"],
    new_york: ["New York City", "Buffalo", "Rochester"],
    texas: ["Houston", "Dallas", "Austin", "San Antonio"],
    florida: ["Miami", "Orlando", "Tampa", "Jacksonville"]
  },
  uk: {
    england: ["London", "Manchester", "Birmingham"],
    scotland: ["Edinburgh", "Glasgow", "Aberdeen"],
    wales: ["Cardiff", "Swansea", "Newport"],
    northern_ireland: ["Belfast", "Derry", "Lisburn"]
  }
};
function populateStates() {
  stateSelect.disabled = true;
  citySelect.disabled = true;
  stateSelect.innerHTML =
    '<option value="" disabled selected>Select a state first</option>';
  citySelect.innerHTML =
    '<option value="" disabled selected>Select a state first</option>';
  const selectedCountry = countrySelect.value;

  if (selectedCountry !== "") {
    stateSelect.disabled = false;
    const states = Object.keys(data[selectedCountry]);
    states.forEach((state) => {
      const option = new Option(state, state);
      stateSelect.add(option);
    });
  }
}

function populateCities() {
  citySelect.disabled = true;
  citySelect.innerHTML =
    '<option value="" disabled selected>Select a state first</option>';

  const selectedCountry = countrySelect.value;
  const selectedState = stateSelect.value;

  if (selectedCountry !== "" && selectedState !== "") {
    citySelect.disabled = false;
    const cities = data[selectedCountry][selectedState];
    cities.forEach((city) => {
      const option = new Option(city, city);
      citySelect.add(option);
    });
  }
}
