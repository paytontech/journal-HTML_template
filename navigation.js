



async function optionTwoProto() {
    //option 2 (less easy) prototype

    //get all files from github repo then store them in an array
    //then loop through the array and add them to the navigation.html
    const pages2021 = await fetch('https://api.github.com/repos/paytontech/paytontech.github.io/contents/2021')
    const pages2021JSON = await pages2021.json()
    console.log(pages2021JSON)
    const august21 = await fetch('https://api.github.com/repos/paytontech/paytontech.github.io/contents/2021/august')
    const august21JSON = await august21.json()
    console.log(august21JSON)
    const september21 = await fetch('https://api.github.com/repos/paytontech/paytontech.github.io/contents/2021/september')
    const september21JSON = await september21.json()
    console.log(september21JSON)
    const october21 = await fetch('https://api.github.com/repos/paytontech/paytontech.github.io/contents/2021/october')
    const october21JSON = await october21.json()
    console.log(october21JSON)
    const november21 = await fetch('https://api.github.com/repos/paytontech/paytontech.github.io/contents/2021/november')
    const november21JSON = await november21.json()
    console.log(november21JSON)
    const december21 = await fetch('https://api.github.com/repos/paytontech/paytontech.github.io/contents/2021/december')
    const december21JSON = await december21.json()
    console.log(december21JSON)
    //thank you to github pages for doing all that ^^^
    //oops github copilot not pages
    //meh same thing
    //map all names in the json array to an array
    const aug21Pages = []
    for (i in august21JSON.name) {
        console.log(i)
        aug21Pages.append(i)
        document.getElementById("debugText").innerHTML = aug21Pages
    }
    

    
    

}

function optionOneProto() {
    
    
    
}

