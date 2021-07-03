
const textList = document.getElementById('textList');
const searchBar=document.getElementById('searchBar');
let allText = [];

searchBar.addEventListener('keyup',(e)=>{
  console.log(e.target.value);
  const searchString=e.target.value;
  const filteredText=allText.filter(text=>{
    return text.fullText.toLowerCase().includes(searchString.toLowerCase());
  });
  console.log('filtered text',filteredText);
  displayCharacters(filteredText);
})

const loadCharacters = async () => {
    try {
        const res = await fetch('data.json');
        allText = await res.json();
        console.log("hp characters",allText);
        displayCharacters(allText);
    } catch (err) {
        console.error(err);
    }
};

const onPageClick = (e) =>{
  console.log("clicked");
}
const displayCharacters = (texts) => {
    const htmlString = texts
        .map((text) => {
            let hrs=new Date(text.dateTimeCreated).getHours();
            let mins=new Date(text.dateTimeCreated).getMinutes();
            if(hrs<=9)
              hrs = '0' + hrs
            if(mins<10)
              mins = '0' + mins
            return `
            <li class="character">
                <h4>${text.type=='Reply'?text.from.name+' '+'replied':text.from.name+' '+'posted'}</h4>
                <div>${hrs}:${mins}</div>
                <div>Text: ${text.fullText}</div>
            </li> 
        `;
        })
        .join('');
    textList.innerHTML = htmlString;
};

//Pagination logic
function looping()
{
    const totalPages=Math.ceil(allText.length/2);
    console.log('total pages',totalPages)
//     var elements=[<a id='1' onclick='onPageClick()' className='active' href="#" className='page-link'>{1}</a>]
//     for(let i=1;i<totalPages;i++)
//     {
//         elements.push(<a id={i+1} onclick='onPageClick()' href="#" className='page-link'>{i+1}</a>)
//     }
//     console.log("elements is",elements);
//     return elements;
  pagination.innerHTML='<a id='1' onclick='onPageClick()' className='active' href="#" className='page-link'>{1}</a>'
}

loadCharacters();