//ktra dang nhap
var currentUser = localStorage.getItem('currentUser'); //lay data tu local storage, lay theo name
if (!currentUser) {
    //chua dang nhap chuyen ve trang dang nhap
    window.location.assign('dangnhap.html');
}