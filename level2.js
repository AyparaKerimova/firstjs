//part1
const employeeDetails = {
    fullName: "Aypara Kerimova",
    position: "React Native Developer",
    yearsOfExperience: 3,
    skills: ["Html5", "CSS", "JavaScript", "React"],
    contact: {
        email: "ayparakerimova04@gmail.com",
        phone: "077-610-63-62"
    }

};

delete employeeDetails.contact.email
console.log(employeeDetails)

//part2
const {fullName:employeeName} = employeeDetails
const {position} = employeeDetails
const {contact} = employeeDetails
const {...rest} = employeeDetails
console.log(rest)

//part3 
const project = {
    projectId: 16,
    score: 20
};
const projectScores = [project]
console.log(projectScores)

//part4
const personalInfo = {
    homeAddress:'Baku, Bilajari',
    emergencyContact:"070-658-98-24",
    maritalStatus:"Single"

};

const completeEmployeeProfile= {
    ...employeeDetails,
    ...personalInfo
};

console.log(completeEmployeeProfile)
