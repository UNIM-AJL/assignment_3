// Tutorial was used to help create this function
// code was edit and changed to meet the demands and needs of the site 
// source code: https://www.youtube.com/watch?v=x0VcigW9kN0


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