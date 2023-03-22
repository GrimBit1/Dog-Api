
let dog_fact;
let dog_img;
let fact = document.getElementById('fact')
let img = document.getElementById('img')
let button = document.getElementsByTagName('button')[0]
button.style.display = 'none'
// console.log(button)

const dog_facts = async () => {
    let dog_fact_p = await fetch("https://dogapi.dog/api/facts.json")
    let dog_fact_img_p = await fetch("https://dog.ceo/api/breeds/image/random")
    dog_fact = await dog_fact_p.json()
    dog_img = await dog_fact_img_p.json()
    fact.innerText = dog_fact.facts[0]
    img.innerHTML = `<img src="${dog_img.message}" alt="" cover>`
    button.style.display = ''
}
dog_facts();
// facts



