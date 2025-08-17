/*
fetch('https://dummyjson.com/users')
.then(response => {
    if (!response.ok) {
        throw new console.log(`HTTP error ${response.status}`);  
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})

*/



async function getUserData() {

    try {
        const response = await fetch('https://dummyjson.com/users');

        if(!response.ok){
            throw new Error(`http error ! status ${response.status}`);
        }

        const data = await response.json();

        if (data && data.users) {
            data.users.forEach(user => {
                console.log(`ID: ${user.id}`);
                console.log(`First Name: ${user.firstName}`);
                console.log(`Last Name: ${user.lastName}`);
                console.log(`Email: ${user.email}`);
                console.log('----------------------');
            });
        } else {
            console.log("data is not found!!!");
        }


    } catch (error) {
        console.log(error);
        
    }
    
}

getUserData()




