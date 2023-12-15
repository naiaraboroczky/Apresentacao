let person = {
    name: "Naiara Boroczky Oliveira Freitas",
    age: 38,
    address: 'Rua dos Aliados, 137 ',
    City: 'Fafe',
    tell: 931617364,
    status: 'married',
    study: 'QA - quality assurance ',
    professional: 'QA engineer'
}

let family = {
    husband: 'Flávio',
    son1: 'Miguel',
    son2: 'Guilherme'
}

let socialmedia ={
    instagram: '@naiboroczky',
    faceook: '@naiaraboroczky',
    github: 'naiaraboroczky'
}

const hardskills = ['JavaScript','HTML','CSS','Agile Methodology','Selenium','Cypress','Jira']

const softskills = ['good teamwork','I like to learn']

console.log('Hello, my name is ' + person.name + ' I am ' + person.age + ' years old. I am ' + person.status+ ' and have two sons. My husband is ' + family.husband + ' and my sons are ' + family.son1 + ' and ' + family.son2 + '.')
console.log ( 'My phone number is ' + person.tell + ' and I live in ' + person.City + '.')
console.log('I have worked as a graphic designer, prepress analyst and process quality, but I am studying ' + person.study + ' and want to work as a ' + person.professional + '.')
console.log('My hard skills are ' + hardskills[0] + ', '+ hardskills[1] + ', '+ hardskills[2] + ', ' + hardskills[3] + ', '+ hardskills[4] + ', '+ hardskills[5] + ', ' + hardskills[6] + ', and my soft skills are ' +softskills[0] + ' and '+ softskills[1] + '.')

console.log( 'My Instagram is ' + socialmedia.instagram + ' and my GitHub is ' + socialmedia.github + '.' )



