/**
const res = fetch('http://localhost:5000/courses')
const data = res.json()

const btn = document.getElementById('button')



btn.addEventListener('click', (e) => {
  const category = e.target.value
  var category = []

  for (i = 0; i < data.length; i++) {
    if (data.category === e.target.value) {
      category.push(data[i])
    }
  }

  render(category)
})

function render(category) {

}
 */