const personalProfile={
    firstName:"Aypara",
    lastName:"Kerimova",
    age:19,
    favoriteLanguage:["Python", "JavaScript"],
    contactInfo:{email:"ayparakerimova004@gmail.com",
    phone:"077-610-63-62"}
    
};

personalProfile["occupation"]="i am a student.";
personalProfile["occupation"]="Developer"; // updated it.
personalProfile["contactInfo"]["adress"]="Baku, Bilajari";

console.log(personalProfile);
console.log(personalProfile["age"]);
console.log(personalProfile.contactInfo.adress) // just easy for now :)


