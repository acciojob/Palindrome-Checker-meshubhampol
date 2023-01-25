// complete the given function

function palindrome(str){
    let st=0;
    let en=str.length-1;

    str.toLowerCase();

    while(st<en) {
        if(str.charAt(st)!==str.charAt(en)) {
            return false;
        }
        st++;
        en--;
    }
    return true;

}
module.exports = palindrome
