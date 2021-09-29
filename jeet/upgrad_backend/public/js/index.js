var arr = [
  '433% salary hike',
  '300+ placement partners',
  '1 MILLION+ total registered users',
  'INR 73 LPA Highest salary offered',
];

var text_changer = document.getElementById('text_changer_ms');

var index = 0;

setInterval(function () {
  index++;
  // var text = document.createElement("p");
  // text.setAttribute("text", arr[index % arr.length]);

  var div = document.createElement('div');

  div.setAttribute('text', arr[index % arr.length]);

  div.innerText = arr[index % arr.length];

  div.setAttribute('id', index);

  text_changer.append(div);
}, 2000);

setInterval(function () {
  var previous_text = index - 1;
  document.getElementById(previous_text).remove();
}, 2000);


// const config = {
//   type: 'carousel',
//   perView: 3,
// };
// new Glide('.glide', config).mount();

const glide = document.querySelectorAll('.glide');

Object.values(glide).map((gl) => {
  const config = {
    type: 'carousel',
    perView: 3,
  };
  new Glide(gl, config).mount();
});



var CoursesData = [{
    U_img: 'https://m.economictimes.com/thumb/height-450,width-600,imgsize-470912,msid-81653586/ssbm_uni_640-x-480.jpg',
    U_logo: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/Logo_image__1624951507884.png',
    U_name: 'Swiss School of Business Management',
    Category: 'MBA',
    Collage_name: 'DBA | Swiss School of Business Management',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '36 Months',
    Support: '1:1 Thesis Supervision & 12+ Specialisations',
    Certificate: 'EduQua Certified',
  },
  {
    U_img: 'https://www.d2l.com/wp-content/uploads/2015/10/hero-front_of_deakin-university-deakin_university-1.jpg',
    U_logo: 'https://res.cloudinary.com/cui/image/upload/v1520514958/university/logo/rst2ij0fftuqfgcrnfae.jpg',
    U_name: 'Deakin University',
    Category: 'MBA',
    Collage_name: 'MBA | Deakin Business School',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '24 Months',
    Support: '1-1 Mentorship & Job Support',
    Certificate: 'AACSB & EQUIS accredited',
  },
  {
    U_img: 'https://images.shiksha.com/mediadata/images/1539234822phpaZrlCZ.png',
    U_logo: 'https://mba.reviews/wp-content/uploads/2018/07/liverpool-john-moores-university-logo.jpg',
    U_name: 'Liverpool John Moores University',
    Category: 'MBA',
    Collage_name: 'MBA | Liverpool Business School',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '18 Months',
    Support: '1-1 Mentorship & Job Support',
    Certificate: 'WES Recognised',
  },
  {
    U_img: 'https://lh3.googleusercontent.com/bK_O3A2ygAjczf9OxwUrFycnV7jtgSpZGysr_s9NGXvoHEkCzIqi7DllPtwNrEJcrBQbb9tf=w1080-h608-p-no-v0',
    U_logo: 'https://images.static-collegedunia.com/public/college_data/images/logos/1506324588Logo.jpg',
    U_name: 'NMIMS Global CE ',
    Category: 'MBA',
    Collage_name: 'MBA (Exec.) with Specialisation in Business Analytics',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '18 Months',
    Support: '1-1 Mentorship & Job Support',
    Certificate: 'ANAAC A+ Accredited',
  },
  {
    U_img: 'https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/400x300/0281d7f684f1b3a86759b186a5c633e7_202009.jpg',
    U_logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/rg8g5txrl3kfflwe4hgx',
    U_name: 'Jindal Global Business School',
    Category: 'MBA',
    Collage_name: 'MBA in Digital Finance & Banking',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '24 Months',
    Support: '1-1 Mentorship & Job Support',
    Certificate: 'A Grade by NAAC',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/Bimtech__1619593037247.png',
    U_logo: 'https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/institutes/logo/170x170/145.jpg',
    U_name: 'Birla Institute of Management Technology',
    Category: 'MBA',
    Collage_name: 'PGDM | Birla Institute of Management Technology',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '24 Months',
    Support: 'Personalised student support',
    Certificate: 'Category 1 Autonomy by AICTE',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/programcard__1620048182278.png',
    U_logo: 'https://res.cloudinary.com/cui/image/upload/v1520514958/university/logo/rst2ij0fftuqfgcrnfae.jpg',
    U_name: 'Deakin University',
    Category: 'MBA',
    Collage_name: 'MBA | Deakin Business School',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '12 Months',
    Support: '1-1 Mentorship & Job Support',
    Certificate: 'AACSB & EQUIS accredited',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/dm_mica_program_card__1611830757491.png',
    U_logo: 'https://www.wemakescholars.com/admin/uploads/providers/qbQ-gsM2-CYyoiTjIJcqZQnlzsuqOEOL.png',
    U_name: 'Deakin University and MICA',
    Category: 'MBA',
    Collage_name: 'MBA (Digital Marketing) | Deakin University & MICA',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '21 Months',
    Support: '1-1 Mentorship & Job Support',
    Certificate: 'AACSB & EQUIS accredited',
  },
  //demo Data MBA
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/CU__1619589467038.png',
    U_logo: 'https://www.cuchd.in/about/assets/images/cu-logo.png',
    U_name: 'Chandigarh University',
    Category: 'MBA',
    Collage_name: 'MBA (General) | Chandigarh University',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '2 Years',
    Support: 'Internship opportunities & Placement Assistance',
    Certificate: 'UGC recognised',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/AUprogramcard__1623414658537.png',
    U_logo: 'https://www.wemakescholars.com/admin/uploads/providers/qbQ-gsM2-CYyoiTjIJcqZQnlzsuqOEOL.png',
    U_name: 'Amrita Vishwa Vidyapeetham - Ahead Online',
    Category: 'MBA',
    Collage_name: 'Master of Business Administration',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '2 Years | 4 semesters',
    Support: '3 Opportunities in Study Abroad Track',
    Certificate: 'UGC Approved | NIRF #4',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/ju_mba_banner__1624628584651.png',
    U_logo: 'https://iscaglobal.org/wp-content/uploads/2020/02/Acc_logo4.jpg?x72325',
    U_name: 'JAIN (Deemed-to-be University)',
    Category: 'MBA',
    Collage_name: 'MBA in Advertising & Branding',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '2 Years',
    Support: 'Placement Assistance',
    Certificate: 'UGC Recognized',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/JainProgramCard__1624618424796.png',
    U_logo: 'https://iscaglobal.org/wp-content/uploads/2020/02/Acc_logo4.jpg?x72325',
    U_name: 'JAIN (Deemed-to-be University)',
    Category: 'MBA',
    Collage_name: 'MBA in Strategy & Leadership',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '2 Years',
    Support: 'Placement Assistance',
    Certificate: 'UGC Recognised',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/mba_esses__1629270896708.png',
    U_logo: 'https://dypdvfcjkqkg2.cloudfront.net/large/295449-6663.jpg',
    U_name: 'University of Essex Online',
    Category: 'MBA',
    Collage_name: 'Essex Online MBA',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '2 Years',
    Support: '1-1 Mentorship & Job Support',
    Certificate: 'Student Satisfaction -95%',
  },
  // Data Science & Machine Learning
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/UoA__1627633589303.png',
    U_logo: 'https://tse2.mm.bing.net/th?id=OIP.KJCFEsUam9dKcD-qDdtwYAHaHa&pid=Api&P=0&w=300&h=300',
    U_name: 'University of Arizona',
    Category: 'Data Science | Machine Learning',
    Collage_name: 'Master of Science in Data Science',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '24 Months',
    Support: '1-1 mentorship and job support',
    Certificate: 'University of Arizona Alumni Status',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/programcard__1620048290508.png',
    U_logo: 'https://images.static-collegedunia.com/public/college_data/images/logos/1509016399gvsdfmhn.jpg',
    U_name: 'IIIT Banglore',
    Category: 'Data Science | Machine Learning',
    Collage_name: 'Executive PG Programme in Data Science',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '12 Months',
    Support: 'Joint certificate from upGrade and NASSCOM',
    Certificate: '12000+ students enrolled',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/LJMU__1619593737999.png',
    U_logo: 'https://mba.reviews/wp-content/uploads/2018/07/liverpool-john-moores-university-logo.jpg',
    U_name: 'Liverpool John Moores University',
    Category: 'Data Science | Machine Learning',
    Collage_name: 'Master of Science in Data Science',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '18 Months',
    Support: '1-1 Mentorship & Job Support',
    Certificate: '8000+ students enrolled',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/IIMK__1619530908960.png',
    U_logo: 'https://tse3.mm.bing.net/th?id=OIP.yEAWUrnyHk9FSpiHdqGgvAHaHg&pid=Api&P=0&w=300&h=300',
    U_name: 'IIM Kozhikode',
    Category: 'Data Science | Machine Learning',
    Collage_name: 'Professional Certification in Data Science for Business Decision Making',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '8 Months',
    Support: '200+ Hours of Learning',
    Certificate: 'Ranked 6th by NIRF',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/programcard__1620910521049.png',
    U_logo: 'https://images.static-collegedunia.com/public/college_data/images/logos/1509016399gvsdfmhn.jpg',
    U_name: 'IIIT Banglore',
    Category: 'Data Science | Machine Learning',
    Collage_name: 'Advanced Certificate Programme In Data Science',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '7 Months',
    Support: '7+ Case Studies & Projects',
    Certificate: '5000+ students enrolled',
  },
  {
    U_img: 'https://www.eduriddhisiddhi.com/wp-content/uploads/2018/12/bimtech.png',
    U_logo: 'https://images.static-collegedunia.com/public/college_data/images/logos/1509016399gvsdfmhn.jpg',
    U_name: 'IIIT Banglore',
    Category: 'Data Science | Machine Learning',
    Collage_name: 'Executive Programme in Data Science',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '12 Months',
    Support: '1-1 Mentorship & Job Support',
    Certificate: 'IIITB Alumni Status',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/programcard__1620048233890.png',
    U_logo: 'https://mba.reviews/wp-content/uploads/2018/07/liverpool-john-moores-university-logo.jpg',
    U_name: 'Liverpool John Moores University',
    Category: 'Data Science | Machine Learning',
    Collage_name: 'Master of Science in Machine Learning & AI',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '20 Months',
    Support: '1-1 Mentorship & Job Support',
    Certificate: '7000+ students enrolled',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/CU_university__1619531058074.png',
    U_logo: 'https://www.cuchd.in/about/assets/images/cu-logo.png',
    U_name: 'Chandigarh University',
    Category: 'Data Science | Machine Learning',
    Collage_name: 'Master of Science (Data Science)',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '2 Years',
    Support: 'Internship Opportunities & Placements Assistance',
    Certificate: 'UGC recoginised',
  },
  //demo Business Analytics
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/programcard__1620048320113.png',
    U_logo: 'https://images.static-collegedunia.com/public/college_data/images/logos/1509016399gvsdfmhn.jpg',
    U_name: 'IIIT Banglore',
    Category: 'Data Science | Machine Learning',
    Collage_name: 'Executive PG Programme in Machine Learning & AI',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '21 Months',
    Support: '1-1 Mentorship & Job Support',
    Certificate: '10000+ students enrolled',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/IITMadras__1619530797767.png',
    U_logo: 'https://tse1.mm.bing.net/th?id=OIP.yNbXUiFgimmLY0qmwoOoUwHaHa&pid=Api&P=0&w=300&h=300',
    U_name: 'IIT Madras',
    Category: 'Data Science | Machine Learning',
    Collage_name: 'Advanced Certification in Machine Learning and Cloud',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '12 Months',
    Support: '16+ Case Studies & Projects',
    Certificate: '2000+ students enrolled',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/programcard__1620048574835.png',
    U_logo: 'https://images.static-collegedunia.com/public/college_data/images/logos/1509016399gvsdfmhn.jpg',
    U_name: 'IIIT Banglore',
    Category: 'Data Science | Machine Learning',
    Collage_name: 'Advanced Certificate Programme in Machine Learning & Deep Learning',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '6 Months',
    Support: '240+ Hours of Learning',
    Certificate: '2000+ students enrolled',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/programcard__1620048635223.png',
    U_logo: 'https://images.static-collegedunia.com/public/college_data/images/logos/1509016399gvsdfmhn.jpg',
    U_name: 'IIIT Banglore',
    Category: 'Data Science | Machine Learning',
    Collage_name: 'Advanced Certificate Programme in Machine Learning & NLP',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '6 Months',
    Support: '250+ Hours of Learning',
    Certificate: '3000+ students enrolled',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/programcard__1620911270057.png',
    U_logo: 'https://mba.reviews/wp-content/uploads/2018/07/liverpool-john-moores-university-logo.jpg',
    U_name: 'Liverpool John Moores University',
    Category: 'Data Science | Machine Learning',
    Collage_name: 'Master of Science in Machine Leaning & AI',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '20 Months',
    Support: 'LJMU Alumni Status',
    Certificate: '300+ Hiring Partners',
  },
  // blockchain.....

  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/programcard__1620048635223.png',
    U_logo: 'https://images.static-collegedunia.com/public/college_data/images/logos/1509016399gvsdfmhn.jpg',
    U_name: 'IIIT Banglore',
    Category: 'Blockchain',
    Collage_name: 'Advanced Certificate Programme in Machine Learning & NLP',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '6 Months',
    Support: '250+ Hours of Learning',
    Certificate: '3000+ students enrolled',
  },
  {
    U_img: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/programcard__1620911270057.png',
    U_logo: 'https://mba.reviews/wp-content/uploads/2018/07/liverpool-john-moores-university-logo.jpg',
    U_name: 'Liverpool John Moores University',
    Category: 'Blockchain',
    Collage_name: 'Master of Science in Machine Leaning & AI',
    B_img: 'https://tse4.mm.bing.net/th?id=OIP.cm_O5ANeTlk0yzs_GxdWewHaHa&pid=Api&P=0&w=300&h=300',
    Time_duration: '20 Months',
    Support: 'LJMU Alumni Status',
    Certificate: '300+ Hiring Partners',
  },
];
if (localStorage.getItem('CoursesDataBase') === null) {
  localStorage.setItem('CoursesDataBase', JSON.stringify([]));
}
localStorage.setItem('CoursesDataBase', JSON.stringify(CoursesData));

var Courses_Data_Base = JSON.parse(localStorage.getItem('CoursesDataBase'));
// console.log(Courses_Data_Base)

var show_course_div = document.getElementById('show_courses_jb');

Courses_Data_Base.forEach(function (course) {
  //   console.log(course.Category)
  if (course.Category == 'MBA') {
    var div = document.createElement('div');

    var uImg = document.createElement('img');
    uImg.src = course.U_img;

    var logo_Uname_Div = document.createElement('div');
    logo_Uname_Div.setAttribute('class', 'logodiv');

    var u_Log = document.createElement('img');
    u_Log.src = course.U_logo;

    var line = document.createElement('div');
    line.setAttribute('class', 'line');
    line.innerHTML = '|';

    var uName = document.createElement('div');
    uName.setAttribute('class', 'name');
    uName.innerText = course.U_name;
    logo_Uname_Div.append(u_Log, line, uName);

    var hori = document.createElement('hr');
    hori.setAttribute('class', 'hori');

    var btn = document.createElement('button');
    btn.setAttribute('class', 'btn1');
    btn.innerHTML = 'VIEW PROGRAM &#10132';
    btn.onclick = function (event) {
      console.log('Click to view program');
      
    };

    var time = document.createElement('p');
    var support = document.createElement('p');

    var book = document.createElement('div');
    var book_image = document.createElement('img');
    book.setAttribute('class', 'bok');
    book_image.src = course.B_img;
    book.append(book_image, time);

    var men = document.createElement('div');
    var men_img = document.createElement('img');
    men.setAttribute('class', 'men');
    men_img.src =
      'https://cdn4.iconfinder.com/data/icons/social-communication/142/users-512.png';
    men.append(men_img, support);

    var u_name = document.createElement('div');
    u_name.setAttribute('class', 'u_na');
    u_name.innerHTML = course.Collage_name;

    time.innerHTML = course.Time_duration;
    support.innerHTML = course.Support;

    var certificate = document.createElement('div');
    certificate.setAttribute('class', 'certi');
    certificate.innerText = course.Certificate;
    //for checking........................
    var category = document.createElement('p');
    category.innerText = course.Category;

    div.append(uImg, logo_Uname_Div, u_name, hori, book, men, certificate, btn);
    show_course_div.append(div);
  }
});


var courseListDiv = document.getElementById('coursesList_jb');
var mbaDiv = document.getElementById('mba_jb');
//   data Science

//new Changes............
var dataScienceDivX = null;
var showBlockchainDivX = null;
//var blockChainDiv = document.getElementById("showBlockchain")
//console.log("Blockchain"+ blockChainDiv)
//showBlockchainDivX = blockChainDiv
var count_D = 1;

function showDataScience(event) {
  count_B = 1;
  console.log('it is');
  console.log(showBlockchainDivX);
  if (showBlockchainDivX != null) {
    console.log('yes');
    showBlockchainDivX.style.display = 'none';
  }

  hover7.onmouseover = function (event) {
    hover7.style.backgroundColor = '#eb4d4b';
    hover7.style.color = 'white';
  };
  hover7.onmouseout = function (event) {
    hover7.style.backgroundColor = 'white';
    hover7.style.color = 'black';
  };
  hover7.style.backgroundColor = 'white';
  hover7.style.color = 'black';
  mbaDiv.style.backgroundColor = 'white';
  mbaDiv.style.color = 'black';
  show_course_div.style.display = 'none';
  var showDataScienceCourse = document.createElement('div');
  //showDataScienceCourse.setAttribute("id", "dataScienceCourseId");

  hover1.onmouseout = function (event) {
    console.log('jeet');
    hover1.style.backgroundColor = '#b4d4b';
    hover1.style.color = 'white';
  };
  mbaDiv.onmouseover = function (event) {
    mbaDiv.style.backgroundColor = '#eb4d4b';
    mbaDiv.style.color = 'white';
  };
  mbaDiv.onmouseout = function (event) {
    mbaDiv.style.backgroundColor = 'white';
    mbaDiv.style.color = 'black';
  };
  // showDataScienceCourse.style.backgroundColor.important = "eb4d4b"

  showDataScienceCourse.setAttribute('id', 'dataScience');

  Courses_Data_Base.forEach(function (course) {
    console.log(course.Category);
    if (course.Category == 'Data Science | Machine Learning') {
      var div = document.createElement('div');

      var uImg = document.createElement('img');
      uImg.src = course.U_img;

      var logo_Uname_Div = document.createElement('div');
      logo_Uname_Div.setAttribute('class', 'logodiv');

      var u_Log = document.createElement('img');
      u_Log.src = course.U_logo;

      var line = document.createElement('div');
      line.setAttribute('class', 'line');
      line.innerHTML = '|';

      var uName = document.createElement('div');
      uName.setAttribute('class', 'name');
      uName.innerText = course.U_name;
      logo_Uname_Div.append(u_Log, line, uName);

      var hori = document.createElement('hr');
      hori.setAttribute('class', 'hori');

      var btn = document.createElement('button');
      btn.setAttribute('class', 'btn1');
      btn.innerHTML = 'VIEW PROGRAM &#10132';
      btn.onclick = function (event) {
        console.log('Click to view program');
      };

      var time = document.createElement('p');
      var support = document.createElement('p');

      var book = document.createElement('div');
      var book_image = document.createElement('img');
      book.setAttribute('class', 'bok');
      book_image.src = course.B_img;
      book.append(book_image, time);

      var men = document.createElement('div');
      var men_img = document.createElement('img');
      men.setAttribute('class', 'men');
      men_img.src =
        'https://cdn4.iconfinder.com/data/icons/social-communication/142/users-512.png';
      men.append(men_img, support);

      var u_name = document.createElement('div');
      u_name.setAttribute('class', 'u_na');
      u_name.innerHTML = course.Collage_name;

      time.innerHTML = course.Time_duration;
      support.innerHTML = course.Support;

      var certificate = document.createElement('div');
      certificate.setAttribute('class', 'certi');
      certificate.innerText = course.Certificate;

      //for checking........................
      var category = document.createElement('p');
      category.innerText = course.Category;

      div.append(
        uImg,
        logo_Uname_Div,
        u_name,
        hori,
        book,
        men,
        certificate,
        btn
      );
      showDataScienceCourse.append(div);
    }
  });

  //new Changes..............
  if (count_D <= 1) {
    courseListDiv.after(showDataScienceCourse);
    console.log('working');
  }
  count_D++;
  var dataScienceDiv = document.getElementById('dataScience');
  console.log(dataScienceDiv);
  dataScienceDivX = dataScienceDiv;
}

var count_B = 1;
//var blockChainDivX = null;
function showBlockchain() {
  count_D = 1;

  console.log(dataScienceDivX);
  console.log('Blockchain');
  mbaDiv.style.backgroundColor = 'white';
  mbaDiv.style.color = 'black';
  hover1.style.backgroundColor = 'white';
  hover1.style.color = 'black';
  show_course_div.style.display = 'none';
  if (dataScienceDivX != null) {
    dataScienceDivX.style.display = 'none';
  }

  var showBlockchain = document.createElement('div');

  hover7.onmouseout = function (event) {
    console.log('jeet');
    hover7.style.backgroundColor = '#b4d4b';
    hover7.style.color = 'white';
  };

  hover1.onmouseover = function (event) {
    hover1.style.backgroundColor = '#eb4d4b';
    hover1.style.color = 'white';
  };
  hover1.onmouseout = function (event) {
    hover1.style.backgroundColor = 'white';
    hover1.style.color = 'black';
  };
  mbaDiv.onmouseover = function (event) {
    mbaDiv.style.backgroundColor = '#eb4d4b';
    mbaDiv.style.color = 'white';
  };
  mbaDiv.onmouseout = function (event) {
    mbaDiv.style.backgroundColor = 'white';
    mbaDiv.style.color = 'black';
  };

  // showDataScienceCourse.style.backgroundColor.important = "eb4d4b"

  showBlockchain.setAttribute('id', 'showBlockchain');

  Courses_Data_Base.forEach(function (course) {
    console.log(course.Category);
    if (course.Category == 'Blockchain') {
      var div = document.createElement('div');

      var uImg = document.createElement('img');
      uImg.src = course.U_img;

      var logo_Uname_Div = document.createElement('div');
      logo_Uname_Div.setAttribute('class', 'logodiv');

      var u_Log = document.createElement('img');
      u_Log.src = course.U_logo;

      var line = document.createElement('div');
      line.setAttribute('class', 'line');
      line.innerHTML = '|';

      var uName = document.createElement('div');
      uName.setAttribute('class', 'name');
      uName.innerText = course.U_name;
      logo_Uname_Div.append(u_Log, line, uName);

      var hori = document.createElement('hr');
      hori.setAttribute('class', 'hori');

      var btn = document.createElement('button');
      // btn.style.display = 'block'
      // btn.href = '../blockchain/block-chain.html'
      // btn.href = './blockchain/block-chain.html'
      btn.setAttribute('class', 'btn1');
      btn.innerHTML = 'VIEW PROGRAM &#10132';
      btn.onclick = function (event) {
        //   console.log("Click to view program")
        window.location.href =
          'http://localhost:5000/upgrad/blockchain';
      };

      var time = document.createElement('p');
      var support = document.createElement('p');

      var book = document.createElement('div');
      var book_image = document.createElement('img');
      book.setAttribute('class', 'bok');
      book_image.src = course.B_img;
      book.append(book_image, time);

      var men = document.createElement('div');
      var men_img = document.createElement('img');
      men.setAttribute('class', 'men');
      men_img.src =
        'https://cdn4.iconfinder.com/data/icons/social-communication/142/users-512.png';
      men.append(men_img, support);

      var u_name = document.createElement('div');
      u_name.setAttribute('class', 'u_na');
      u_name.innerHTML = course.Collage_name;

      time.innerHTML = course.Time_duration;
      support.innerHTML = course.Support;

      var certificate = document.createElement('div');
      certificate.setAttribute('class', 'certi');
      certificate.innerText = course.Certificate;

      //for checking........................
      var category = document.createElement('p');
      category.innerText = course.Category;

      div.append(
        uImg,
        logo_Uname_Div,
        u_name,
        hori,
        book,
        men,
        certificate,
        btn
      );
      showBlockchain.append(div);
    }
  });
  console.log(count_B);
  if (count_B <= 1) {
    console.log('jhasdhhadhqwhd');
    courseListDiv.after(showBlockchain);
    //dataScienceDivX = showBlockchain
  }

  count_B++;
  var showBlockchainDiv = document.getElementById('showBlockchain');
  console.log(showBlockchainDiv);
  showBlockchainDivX = showBlockchainDiv;
}