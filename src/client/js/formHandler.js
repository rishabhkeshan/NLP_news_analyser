function handleSubmit(evt) {
    evt.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.checkForValidity(formText))
    {
    const postData = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        try {
            const newData = await response.json();
            console.log(newData);
            return newData;
        } catch (error) {
            console.log("error", error);
        }
    };
    postData('/urlNLP',{url:formText})
    .then(function(data){
        document.querySelector("#polarity").innerHTML = data.polarity;
        document.querySelector("#subjectivity").innerHTML = data.subjectivity;
        document.querySelector("#text").innerHTML = data.text;
    })
}
else{
    alert('Enter valid URL');
}
    

}
export { handleSubmit }