const arr = [
    5,4,2,8,"Ranjan",5,"Kumar"
]

for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] === "string") {
        console.log(`Found The First String: ${arr[index]}`);
        break;
    }
    
}