const num = 1;
`https://source.unsplash.com/1600x900/?wood`

fetch(`https://source.unsplash.com/1600x900/?wood`).then(response => {
  const selectBody = document.querySelector('body')
  selectBody.style = `background-image: url('${response.url}')`
})
.catch(error => {
  console.log(error)
})