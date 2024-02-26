function generateImg() {
    const text = document.querySelector('#textInput').value;
    const imageContainer = document.querySelector('#imageContainer');
    const textContainer = document.querySelector('#textContainer');

    if(!text){
        textContainer.innerHTML = "Please Enter a Keyword";
    }

else{
// GENERATE A PLACEHOLDER IMAGE URL BASED ON THE ENTERED TEXT/INPUT

const placeholderImageUrl = 'https://source.unsplash.com/featured/?' + text;

// create an image element
const imageElement = document.createElement('img');
// set the src and class attribute of the image element
imageElement.setAttribute('src', placeholderImageUrl);
imageElement.setAttribute('class', 'img-fluid');
imageElement.style.maxWidth = '300px';
imageElement.style.height = 'auto';
imageContainer.innerHTML= '';
imageContainer.appendChild(imageElement);
}

}