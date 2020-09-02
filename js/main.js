$.get("https://ipinfo.io?token=3da0c870dc0319", function(response) {
  document.querySelector('#location').innerHTML = response.city + ", " + response.country;
}, "jsonp");

document.querySelector('#user-link').addEventListener('click', e =>{
  if (document.querySelector('#user-panel').style.display == 'none'){
    if (document.querySelector('#apps-panel').style.display == 'block'){
      document.querySelector('#apps-panel').style.display = 'none';
    }
    document.querySelector('#user-panel').style.display = 'block';
  }else{
    document.querySelector('#user-panel').style.display = 'none';
  }
});

document.querySelector('#apps-link').addEventListener('click', e =>{
  if (document.querySelector('#apps-panel').style.display == 'none'){
    document.querySelector('#apps-panel').style.display = 'block';
    if (document.querySelector('#user-panel').style.display == 'block'){
      document.querySelector('#user-panel').style.display = 'none';
    }
  }else{
    document.querySelector('#apps-panel').style.display = 'none';
  }
});
