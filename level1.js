//part1
const studentProfile = {
    name: "Aypara",
    surname:"Kerimova",
    age: 19,
    course: 2,
    hobbies: ["reading","gaming","swimming"],

};

delete studentProfile.course;
console.log(studentProfile)

//part2
const {name:studentName}= studentProfile;
const {age:studentAge}=studentProfile;
const {surname, ...rest}= studentProfile;
console.log(rest);

//part3
const grades = [1,3,5,7,9];
console.log (grades[0],grades[1]);

//part4
const additionalInfo = {
    adress: "Baku,Bilajari",
    phoneNumber: "077-610-63-62"
};

const newobj ={
    ...studentProfile,
    ...additionalInfo
};

console.log(newobj);

