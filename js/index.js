let register = []

addStudent = () => {

    let firstName = document.getElementById("first").value
    let lastName = document.getElementById("last").value
    let studentNumber = document.getElementById("number").value
    let choiceOne = document.getElementById("subOne").value
    let choiceTwo = document.getElementById("subTwo").value


    let yearOption = document.getElementsByName("baseRadio");
    let years; 
    for(let i = 0; i < yearOption.length; i++){
        if(yearOption[i].checked){  
            years = yearOption[i].value
        }
    }

    register.push({
        studentFirst : firstName,
        studentLast : lastName,
        studentNum : studentNumber,
        studentYear : years,
        studentOne : choiceOne,
        studentTwo : choiceTwo
    })

    console.log(register)
}


displayStudent = () => {

    let area = document.getElementById("studentOut")

    area.innerHTML = ""

    for(let i = 0; i < register.length; i++){
        let name = register[i].studentFirst
        let surname = register[i].studentLast
        let number = register[i].studentNum
        let year = register[i].studentYear
        let pickOne = register[i].studentOne
        let pickTwo = register[i].studentTwo

        area.innerHTML += `

        <div class="col-4">
        <div class="card" style="width: 100%;">
            <div class="card-body">
                <h5 class="card-title">${name} ${surname}</h5>
                <p>Student Number: ${number}</p>
                <p>Year: ${year}</p>
                <p>Choice One: ${pickOne}</p>
                <p>Choice Two: ${pickTwo}</p>
            </div>
        </div>
    </div>
    `
    }

    document.getElementById("studentForm").reset();

}


complete = () => {

    let data = JSON.stringify(register)
    localStorage.setItem('done', register)
}

