function nguoiDungService() {
    this.DangNhap = function (taikhoan, matkhau) {
        return axios({
            //phuong thuc request tuy vao backend
            method: "POST",
            url: `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`
            //data de chua doi tuong gui len server
            // data: {}
            //ham axios tra ve promise.then() =>neu success   
                                    //.catch() => neu error
        })
    }
}