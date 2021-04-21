function IsLastCharacterN(str){
    const regx = /[n]$/i;
    return regx.test(str);
}
// console.log(IsLastCharacterN('helloN'));

function AmazingEdabit(str){
    const regx = /(edabit)/i;
    if(!regx.test(str)){
        return str.replace('amazing','not amazing');
    }
    return str;
}
// console.log(AmazingEdabit('you are amazing.'));
// console.log(AmazingEdabit('edabit is amazing.'));

function countSyllables(str){
        const regex = /([a-z][a-z])/ig;
        return str.match(regex).length;
}
// console.log(countSyllables("Hehehehehehe"));
// console.log(countSyllables("bobobobobobobobo"));
// console.log(countSyllables("NANANA"));

function dcodeString(data){
    let str = data;
    const regex = /\d/ig;
    return str.replace(regex,'');
}
// console.log(dcodeString('242Edabit23 45can344 3be3 254324addictive!'));

function getFilename(str){
    const regex = /([\w]+\.[0-9a-z]{3,})$/i;
    return str.slice(str.search(regex),str.length);
}
// console.log(getFilename('ffprobe.exe'));

function countClaps(str){
    let regex = /[C]/g;
    return str.match(regex).length;
}
// console.log(countClaps("ClaClaClaClap!"));
// console.log(countClaps("ClClClaClaClaClap!"));
// console.log(countClaps("CCClaClClap!Clap!ClClClap!"));

function toScottishScreaming(str){
    const regex = /[aeiou]/ig;
    return str.replace(regex,'e').toUpperCase();
}
// console.log(toScottishScreaming('Mr. Fox was very naughty'));

function filterString(str){
    let arr = [];
    arr.push(str.match(/[A-Z]/g).length);
    arr.push(str.match(/[a-z]/g).length);
    arr.push(str.match(/[0-9]/g).length);
    arr.push(str.match(/[^a-z0-9]/ig).length);
    return arr;
}
// console.log(filterString("*$(#Mu12bas43hiR%@*!"));
// console.log(filterString("^^Edabit^^%$#12379"));

function revelString(str){
    const regex = /[^\w]/g;
    return str.replace(regex,'');
}
// console.log(revelString("**^&$Regular#$%Expressions$%$$%^**"));

function subReddit(link){
    const regex = /[a-z]+[\/]$/gi;
    let res = link.match(regex); 
    return res[0].slice(0,res[0].length-1);
    // return str.splice()
}
// console.log(subReddit("https://www.reddit.com/r/funny/"));

function stringContainsatLeastOneDigit(str){
    let res = (/[\d]/g).test(str);
    return res;
}
// console.log(stringContainsatLeastOneDigit('5'));
// console.log(stringContainsatLeastOneDigit('k01o3uc0'));

function vowelReplacer(str,sym){
    const regex = /[aeiou]/g;
    return str.replace(regex,sym);
}
// console.log(vowelReplacer("the aardvark", "#"));
console.log(vowelReplacer("minnie mouse", "?"));
