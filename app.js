const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       if (entry.isIntersecting) {
        entry.target.classList.add('show');
       }
    });
}) ;

function createDataRetriever() {

  return {
     
      menus: [],
      getData() {
          
          fetch('/data.json')            
              .then((response) => response.json())
              .then((data) => { 
                  this.menus = data;
              });
      }  
  }
}

$(function() {
    $('input[name="datetimes"]').daterangepicker({
      // timePicker: true,
      singleDatePicker: true,
      startDate: moment().startOf('hour'),
      endDate: moment().startOf('hour').add(32, 'hour'),
      locale: {
        format: 'DD/MM/YYYY'
      }
    });
  });



  function fancyPicker() {
    Timepicker.showPicker({
        time: document.getElementById("selected").value,
        headerBackground: '#424242',
        headerColor: '#e0e0e0',
        headerSelected: '#fafafa',
        wrapperBackground: "#424242",
        footerBackground: "#424242",
        submitColor: "#F44336",
        cancelColor: "#F44336",
        clockBackground: "#424242",
        clockItemColor: "#fafafa",
        clockItemInnerColor: "#e0e0e0",
        onSubmit: (selected) => {
            document.getElementById("selected").value = selected.formatted();
        }
    })
}
  

const yearSpan = document.querySelector('#currentYear');
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();
  
 