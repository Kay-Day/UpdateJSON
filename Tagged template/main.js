// function highlight([first,...strings],...values) {
//      console.log(first);
//      console.log(strings);
//      console.log(values);

// }

function hightlight([first, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    ).join('');
}
// Hoc lap trinh <span>Javascript</span> tai <span>Thay Nghia</span>
var brand = 'Thay Nghia';
var course = 'Javascript';
const html = hightlight`Hoc code ${course} tai ${brand} `;
console.log(html);