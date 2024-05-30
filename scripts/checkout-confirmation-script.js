
    const address = localStorage.getItem('address');
    const city = localStorage.getItem('city');
    const postcode = localStorage.getItem('postcode');
    const state = localStorage.getItem('state');
    const country = localStorage.getItem('country');

    document.getElementById('address').textContent = address;
    document.getElementById('city').textContent = city;
    document.getElementById('country').textContent = country;
    document.getElementById('postcode').textContent = postcode;
    document.getElementById('state').textContent = state;