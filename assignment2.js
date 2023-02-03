var str = "";
var n=5;
for(let j=0;j<=n;j++){
    for(let stars=0;stars<n;stars++){
    str+="*";
    }
    str+="\n"
    
}
console.log(str)


var n = 5;
var str = " ";
for(let i = 1;i <= n; i++) {
    for(let j = n; j > i; j--) {
        str +=" ";
    }
    for(let k = 0;k < i * 2 - 1; k++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);