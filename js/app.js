$(() => {
  let thisUrl = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough='
  let borough = null;
  $(":button").click(function() {
    event.preventDefault(); // stops refresh
    borough = this.id;
    console.log(borough);
    const filledInUrl = thisUrl + borough;
    console.log(filledInUrl);
    let complaintInput = document.getElementById('user-complaint-input').value;
    console.log(complaintInput);

    $.ajax({
      url: filledInUrl,
      type: "GET",
      data: {
        "$limit" : complaintInput || 10
      }
    }).then(function(data) {
        for (let i = 0; i < data.length; i++) {
        $('#complaints').append(data[i].complaint_type + " , " + data[i].agency + "<br>");
        //$('#respnonse').append(data[i].resolution_description);
        };
      //alert("Retrieved " + data.length + " records from the dataset!");
      console.log(data);
      $("#police").click(function() {
        for (let i = 0; i < data.length; i++) {
          $('#response').append(data[i].complaint_type + " , " + data[i].agency + " , " + data[i].resolution_description + "<br>");
          //$('#respnonse').append(data[i].resolution_description);
          };
        //alert("Retrieved " + data.length + " records from the dataset!");
        console.log(data);
        })
       })
    });
  })
 