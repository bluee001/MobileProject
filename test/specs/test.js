let str="k@nnada#s&an"  //op:separate alphabets and special character // // //i want output like=K_aN_a
let alphabets=""
let specialcharacters=""
let res=""

for(let i=0;i<str.length;i++){
const ch=str.charAt(i)
if(ch>='a'&&ch<='z'){
    alphabets=alphabets+ch
}else{
    specialcharacters=specialcharacters+ch
}
}

for(let i=0;i<alphabets.length;i++){
    let ch=alphabets.charAt(i)
    if(i%2==0){
        res=res+ch.toUpperCase()
    }else{
        res=res+"_"+ch
    }
}
console.log(res)

// console.log("The alphabets present in given string are : "+alphabets)
// console.log(specialcharacters)