   // var id = 0


   function getDetails() {
     // id++
     var applicationDetails = []

     // Basic Information
     var firstName = document.querySelector('[placeholder="First Name"]').value
     var lastName = document.querySelector('[placeholder="Last Name"]').value
     var email = document.querySelector('[placeholder="email"]').value
     var dob = document.querySelector('[placeholder="DD/MM/YYYY"]').value
     var city = document.querySelector('[placeholder="Enter city"]').value
     var state = document.querySelector('[placeholder="Enter state"]').value
     var country = document.querySelector('[placeholder="Enter country"]').value
     var gender

     var el = document.getElementsByName('gender')

     for (let i = 0; i < el.length; i++) {
       if (el[i].checked) {
         gender = el[i].value
       }
     }

     //Educational Qualification
     var instituteName = document.querySelector('[placeholder="Enter your Institute name"]').value
     var fieldOfStudy = document.querySelector('[placeholder="Type your field of study & choose"]').value
     var degreeLevel = document.querySelector('[placeholder="Select Degree level"]').value
     var marksDegree = document.querySelector('.marks').value
     var graduationYear = document.querySelector('.graduation').value


     // work experience
     var workExperience = document.querySelector('[placeholder="Select option"]').value

     // get male or female

     applicationDetails.push({
       // id,
       gender,
       firstName,
       lastName,
       email,
       dob,
       city,
       state,
       country,
       instituteName,
       fieldOfStudy,
       degreeLevel,
       marksDegree,
       graduationYear,
       workExperience
     })

     var json_data = JSON.stringify(applicationDetails)

     localStorage.setItem('applicantDetails', json_data)

    //  setTimeout(() => {
    //    window.location.href = 'http://127.0.0.1:5501/rough-draft/upgrade-clone-2/preview.html'
    //  }, 1000)
   }