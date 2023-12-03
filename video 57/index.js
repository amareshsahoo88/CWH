console.log("I am a tutorial on loops")

let a = 1;

for (let I = 0; I < 100; I++) {
    console.log(a+ I);

}

let obj = {
    name: "Amaresh",
    role: "programmer",
    company: "CodeWithAmaresh"
};

for (const key in obj) {
     {
        const element = obj[key];
        console.log(key , element)
        
    }
}

for (const c of "Harry") {
    console.log(c)
}


let i = 0;
while(i<6){
    console.log(i)
    i++;
}

i =10; 
do{
    console.log(i);
    i++;
}while(i<6);