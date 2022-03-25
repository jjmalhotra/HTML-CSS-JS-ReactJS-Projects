console.log("This is my CV screener");

//Array of objects containing information of the candidates
const data = [
    {
        name:'Jyoti Malhotra',
        age: 42,
        city: 'Pune',
        language:'Python',
        framework:'Django',
        img:'https://randomuser.me/api/portraits/women/76.jpg'
    },
    {
        name:'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language:'JavaScript',
        framework:'Angular',
        img:'https://randomuser.me/api/portraits/men/55.jpg'
    },
    {
        name:'Clark Toe',
        age: 40,
        city: 'Bangalore',
        language:'Python',
        framework:'Flask',
        img:'https://randomuser.me/api/portraits/men/56.jpg'
    },
    {
        name:'Rohan Bisht',
        age: 30,
        city: 'Hyderabad',
        language:'Python',
        framework:'Django',
        img:'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name:'Bahar Kaur',
        age: 32,
        city: 'Jharkand',
        language:'CSS',
        framework:'Advanced CSS',
        img:'https://randomuser.me/api/portraits/women/46.jpg'
    }
];

//CV Iterator
function cvIteratorNext(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex < profiles.length ? 
            {value:profiles[nextIndex++], done:false} : 
            {done:true}
        }
    }
}

function cvIteratorPrev(profiles){
    let prevIndex = profiles.length-1;
    return{
        prev: function(){
            return prevIndex >=0 ?
            {value:profiles[prevIndex--], done:false} :
            {done:true}
        }
    }
}

const candidates = cvIteratorNext(data);
nextCV();

//Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCandidate != undefined){
    image.innerHTML = `<img src=${currentCandidate.img} alt='Image'/ >`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Works on ${currentCandidate.language}</li>
    <li class="list-group-item">with ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        // alert('End of candidates');
        // window.location.reload();
        document.getElementById('next').disabled=true;
        document.getElementById('prev').disabled=false;
    }
}

//Button listener for prev button
const prev = document.getElementById('prev');
prev.addEventListener('click', prevCV);
const prevCandidates = cvIteratorPrev(data);

function prevCV(){
    const currentCandidate = prevCandidates.prev().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCandidate != undefined){
    image.innerHTML = `<img src=${currentCandidate.img} alt='Image'/ >`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Works on ${currentCandidate.language}</li>
    <li class="list-group-item">with ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        // alert('End of candidates');
        // window.location.reload();
        document.getElementById('prev').disabled=true;
        document.getElementById('next').disabled=false;

    }
}