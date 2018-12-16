function dangnhap() {
  var taikhoan = document.getElementById("txtTaiKhoan").value;
  var matkhau = document.getElementById("txtMatKhau").value;

  var nguoiDung = new nguoiDungService();
  //ham axios tra ve promise.then() =>neu success
  //.catch() => neu error
  nguoiDung.DangNhap(taikhoan, matkhau)
    .then(function(res) {
      // console.log(res.data);
      //ktra ngdung phai admin k
      if (res.data.MaLoaiNguoiDung === "QuanTri") {
        //luu data ngdung chi type string
        localStorage.setItem("currentUser", JSON.stringify(res.data)); //name dai dien, data muon save
        //chuyen trang admin
        window.location.assign("index.html");
      }
    })
    .catch(function(ex) {
      console.log(ex.message);
    });
}
document.getElementById("btnDangNhap").addEventListener("click", dangnhap);
