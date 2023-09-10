let btn = document.querySelector("button");

let url="https://catfact.ninja/fact"
async function getFacts(){
    try{
        let res= await axios.get(url);
        return res.data.fact;
    } 
    catch(e){
        console.log("error-",e);
        return "No Fact Found";
    }
}

const randomCatImageElement = document.getElementById("random-cat-image");
function getRandomCatImage() {
    const apiUrl = "https://cataas.com/cat/says/hello";
    // const apiUrl = "live_936UOzkR5DeDh1koF0mMX4TbWDGN3CNKcTUpJ5Du93tTJXTXDhtsb2hl48M6eYC4";
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.blob();
        })
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            randomCatImageElement.src = imageUrl;
        })
        .catch(error => console.error(error));
}

btn.addEventListener("click",async () =>{
    let fact = await getFacts();
    let p= document.querySelector("#result");
    p.innerText=fact;

    getRandomCatImage();
});