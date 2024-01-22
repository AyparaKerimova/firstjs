// If Else Statement Task
// Part1
// "nums" adinda array yarat ve reqemleri icine qoy.
// ilk 3 reqemi ferqli adlandir (num1, num2, num3)
// əgər 2. rəqəm 3. rəqəmdən böyükdürsə consolda "num 2> num 3 ", fərqlidirsə "num2<num3" yazdir

const nums = [789,98,201,200,50,3]
const [num1, num2, num3] = nums

if (num2 > num3) {
    console.log("num 2 > num 3")

} 
else if (num2===num3) {
    console.log("num2 == num3")

} else {

    console.log("num2 < num3")
}

//part2
//"student1" ve "student2" adli object yaradin ve 4 property elave edin.(fullName,id,phone,email)
//"student1" objectinde "id" key'ini "no" key'i, "student2" objectinde "num" ile deyisdirin.
//eger telebelerin id'si eynidirse consolda id'ni arraydaki 3. integer ile deyisin, deyilse 'everything is okay' yazdirin.
//student2 emailini sil

const student1 = {
    fullName:"Aypara Kerimova",
    id: 10,
    phone:"077-610-63-62",
    email:"ayparakerimova004@gmail.com"
}

const student2 = {
    fullName:"Micheal Jackson",
    id: 10,
    phone:"0122-xxx-xx-xx",
    email:"micheal111@gmail.com"
}

const {id:no}=student1
const {id:num}=student2

if (no==num) {

    console.log(("yeni id:")+(num3))
} else{

    console.log("everything is okay")
}

delete student2.email
console.log (student2)

// part3
// eger 'course' key'i student1 objectinin icine daxildirse consolda "course daxildir" yaz, deyilse "daxil deyil".
//daxil deyilse elave et.

if ('course' in student1) {
    console.log("course daxildir")

} else {
    console.log("daxil deyil")
}

student1["course"]= 2
console.log(student1.course)