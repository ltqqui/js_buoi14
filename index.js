//bai1
/**
 * INPUT:3 số nguyên 
 * PROCESS:
 *          1.lấy input là 3 số nguyên 
 *          2.dùng câu lệnh if else 
 *          3.log ra màn hình kết quả tăng dần của 3 số 
 * OUTPUT:kết quả tăng dần của 3 số nguyên 
 */
var num1=3;
var num2=2;
var num3=9;
if((num1>num2) && (num1>num3))
{
    if(num2 > num3)
        console.log(num3,'<',num2,'<',num1)
    else
        console.log(num2,'<',nnum3,'<',num1)
}
if((num2>num1) && (num2>num3))

    if(num1 > num3)
        console.log(num3,'<',num1,'<',num2)
    else
        console.log(num1,'<',num3,'<',num2)
if((num3>num1) && (num3>num2))
{
    if(num1 > num2)
        console.log(num2,'<',num1,'<',num3)
    else
        console.log(num1,'<',num2,'<',num3)
}
// bai 2
/**
 * INTPUT:tên các thành viên trong gia đình 
 * PROCESS:
 *      1.lấy input là tên của các thành viên trong gia đình
 *      2.nếu là bố thì in ra câu "Xin chào Bố!", các trường hợp khác cũng tương tự như vậy
 *      3.log ra màn hình lời chào hỏi 
 *OUTPUT:câu chào hỏi đến các thành viên trong gia đình     
 */

 var name='Br'
 if(name=="B"){
    console.log('Xin chào Bố!')
 }
 else if(name=="M"){
    console.log('Xin chào Mẹ!')
 }
 else if(name=="Br"){
    console.log('Xin chào Anh Trai!')
 }
 else if(name=='S'){
    console.log('Xin chào Em Gái!')
 }

//bài 3
/**
 * INPUT:3 số nguyên 
 * PROCESS:
 *      1.lấy input là 3 số nguyên 
 *      2.nếu số chia hết cho 2 thì đó là số chẳn , ngược lại đó là số lẻ
 *      3.log ra màn hình kết quả có bao nhiêu số lẻ bao nhiêu số chẳn
 * OUTPUT:in ra màn hình kết quả bao nhiêu số lẻ bao nhiêu số chẳn
 */
var num4=3
var num5=4
var num6=6
var count=0
if(num4%2==0){
    count++;
}
if(num5%2==0){
    count++
}
if(num6%2==0){
    count++;
}
console.log("có",count,"số chẳn","và",3-count,"số lẻ")

//bài 4
/**
 * INTPUT:3 cạnh của tam giác
 * PROCESS:
 *      1.lấy input là 3 cạnh của tam giác
 *      2.nếu 3 cạnh khác nhau thì đó là tam giác bình thường , nếu 2 trong 3 cạnh bằng nhau thì đó là tam giác cân , nếu 3 cạnh bằng nhau thì đó là tam giác đều
 *      3.log ra màn hình kết quả hiển thị tên gọi của tam giác
 * OUTPUT:in ra màn hình tên gọi của tam giác đó
 */
var a=3
var b=5
var c=1

if(Math.pow(a,2)==Math.pow(b,2)+Math.pow(c,2)||Math.pow(b,2)==Math.pow(a,2)+Math.pow(c,2)||Math.pow(c,2)==Math.pow(b,2)+Math.pow(a,2)){
    console.log("Đây là tam giác vuông")
}
else if(a!=b&&a!=c&&b!=c)
{
    console.log("Đây là tam giác thường")
}
else if(a==b&&b!=c||b==c&&b!=a||c==a&&c!=b){
    console.log('Đây là tam giác cân')
}
else if(a==b&&b==c&&a==c){
    console.log('Đây là tam giác đều')
}

