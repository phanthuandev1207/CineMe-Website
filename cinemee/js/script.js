
const namHienTai =
    document.getElementById("namHienTai");

const nutDatVeNgay =
    document.getElementById("nutDatVeNgay");

const khuVucDatGhe =
    document.getElementById("khuVucDatGhe");

// Các khu vực lựa chọn
const danhSachThanhPho =
    document.getElementById("danhSachThanhPho");

const danhSachChiNhanh =
    document.getElementById("danhSachChiNhanh");

const danhSachPhongChieu =
    document.getElementById("danhSachPhongChieu");

const soDoGhe =
    document.getElementById("soDoGhe");

// Thông tin đặt vé
const tenThanhPhoDaChon =
    document.getElementById("tenThanhPhoDaChon");

const tenChiNhanhDaChon =
    document.getElementById("tenChiNhanhDaChon");

const tenPhongDaChon =
    document.getElementById("tenPhongDaChon");

const giaVeDaChon =
    document.getElementById("giaVeDaChon");

const danhSachGheDaChon =
    document.getElementById("danhSachGheDaChon");

const soLuongVe =
    document.getElementById("soLuongVe");

const tongTien =
    document.getElementById("tongTien");

const nutThanhToan =
    document.getElementById("nutThanhToan");


// các loại ghế

const cauHinhLoaiGhe = {
    standard:{
        tenLoai:"Standard",
        giaVe:75000,
        soNguoi:1,
        classCss: "gheStandard"
    },

    vip:{
        tenLoai:"VIP",
        giaVe:120000,
        soNguoi:1,
        classCss: "gheVip"
    },

    doi:{
        tenLoai:"Ghế đôi",
        giaVe:200000,
        soNguoi:2,
        classCss: "gheDoi"
    }
}

// xác định loại ghế

function layLoaiGheTheoHang(chiSoHang){
    if(chiSoHang <5) {
        return "standard";
    }
    if(chiSoHang < 8){
        return "vip";
    }
    return "doi";
}

function taoPhongChieu(maPhong,tenPhong,gheDaDat){
    const soGheMoiHang = [10,10,10,10,10,10,10,10,10,10];
    const soLuongViTri = soGheMoiHang.reduce(
        function (tongSoGhe,soGheCuaHang){
            return tongSoGhe + soGheCuaHang;
        },
        0
    );
    return {maPhong: maPhong,
            tenPhong: tenPhong,
            soGheMoiHang: soGheMoiHang,
            soLuongViTri: soLuongViTri,
            gheDaDat: gheDaDat
    }
}


const duLieuDatVe = {
    danhSachThanhPho: [
        {
            maThanhPho: "cantho",
            tenThanhPho: "TP Cần Thơ",
    
            danhSachChiNhanh: 
                [
                    {
                        maChiNhanh: "ninhKieu",
                        tenChiNhanh: "CineMe Ninh Kiều",

                        danhSachPhongChieu: [
                            taoPhongChieu(
                                "phong01",
                                "Phòng 01",
                                ["A3", "F5", "I2","F6","F7","F8","B3","B5","B6","B7","C3","C7","C9","J3","J4","J5","J6"]
                            ),

                            taoPhongChieu(
                                "phong02",
                                "Phòng 02",
                                ["B4", "G7", "J3","A3", "H5", "H6","H10","F7","F8","B3","B5","B6","B8","C9","C10","C11","J6","J4","J5","J6"]
                            ),

                            taoPhongChieu(
                                "phong03",
                                "Phòng 03",
                                ["C2", "H6", "I8","A3", "F5", "I2","F5","F4","F6","B1","B9","B4","B5","C9","C6","C5","J1","J6","J7","J8"]
                            ),
                            taoPhongChieu(
                                "phong04",
                                "Phòng 04",
                                ["C2", "H6", "I8","A3", "F5", "I2","F5","F4","F6","B1","B9","B4","B5","C9","C6","C5","J1","J6","J7","J8"]
                            ),
                            taoPhongChieu(
                                "phong05",
                                "Phòng 05",
                                ["C2", "H6", "I8","A3", "F5", "I2","F5","F4","F6","B1","B9","B4","B5","C9","C6","C5","J1","J6","J7","J8"]
                            )
                        ]
                    },

                    {
                        maChiNhanh: "binhThuy",
                        tenChiNhanh: "CineMe Bình Thủy",

                        danhSachPhongChieu: [
                            taoPhongChieu(
                                "phong01",
                                "Phòng 01",
                                ["A4", "A9", "B3", "B10", "C1",
                                "C4", "C6", "C9", "D5", "D6",
                                "E8", "F7", "G10", "H1", "H2",
                                "H6", "H8", "I6", "J1", "J2"]
                            ),

                             taoPhongChieu(
                                "phong02",
                                "Phòng 02",
                                ["A5", "A9", "B8", "C9", "D1",
            "D2", "D7", "E1", "E5", "F2",
            "F4", "G9", "G10", "H1", "I5",
            "J1", "J3", "J5", "J6", "J7"]
                            ),

                             taoPhongChieu(
                                "phong03",
                                "Phòng 03",
                                ["A2", "A6", "A10", "B2", "B3",
            "C1", "C10", "D5", "D10", "E5",
            "E6", "E9", "F6", "G1", "G3",
            "H1", "H3", "H8", "H10", "J8"]
                            ),
                            taoPhongChieu(
                                "phong04",
                                "Phòng 04",
                                ["C2", "H6", "I8","A3", "F5", "I2","F5","F4","F6","B1","B9","B4","B5","C9","C6","C5","J1","J6","J7","J8"]
                            ),
                            taoPhongChieu(
                                "phong05",
                                "Phòng 05",
                                ["C2", "H6", "I8","A3", "F5", "I2","F5","F4","F6","B1","B9","B4","B5","C9","C6","C5","J1","J6","J7","J8"]
                            )
                        ]
                    }
                ]     


        },
    
        {
            maThanhPho: "hcm",
            tenThanhPho: "TP Hồ Chí Minh",
            
            danhSachChiNhanh: 
                [
                    {
                        maChiNhanh: "landMark",
                        tenChiNhanh: "CineMe LandMark81",

                        danhSachPhongChieu: [
                           taoPhongChieu(
                                "phong01",
                                "Phòng 01",
                                ["A3", "A5", "B3", "B7", "C3",
            "C4", "C7", "D3", "D7", "D10",
            "E4", "E8", "F4", "F6", "F9",
            "G5", "G8", "I9", "J7", "J10"]
                            ),

                            taoPhongChieu(
                                "phong02",
                                "Phòng 02",
                                ["A2", "A9", "B2", "B7", "B8",
            "C1", "C4", "C5", "C10", "D1",
            "D6", "E8", "F2", "F6", "G1",
            "G2", "G5", "I1", "I2", "I9"]
                            ),

                           taoPhongChieu(
                                "phong03",
                                "Phòng 03",
                                ["A1", "B5", "B10", "C1", "C6",
            "C7", "D5", "D7", "E1", "E8",
            "E9", "F1", "F3", "F7", "F9",
            "G7", "G9", "H3", "J4", "J6"]
                            ),
                            taoPhongChieu(
                                "phong04",
                                "Phòng 04",
                                ["C2", "H6", "I8","A3", "F5", "I2","F5","F4","F6","B1","B9","B4","B5","C9","C6","C5","J1","J6","J7","J8"]
                            ),
                            taoPhongChieu(
                                "phong05",
                                "Phòng 05",
                                ["C2", "H6", "I8","A3", "F5", "I2","F5","F4","F6","B1","B9","B4","B5","C9","C6","C5","J1","J6","J7","J8"]
                            )
                        ]
                    },

                    {
                        maChiNhanh: "thaoDien",
                        tenChiNhanh: "CineMe Thảo Điền",

                        danhSachPhongChieu: [
                            taoPhongChieu(
                                "phong01",
                                "Phòng 01",
                                ["A7", "B1", "B3", "C3", "C9",
            "C10", "D4", "D9", "E6", "E8",
            "E9", "F4", "F5", "G2", "G6",
            "H5", "I2", "I4", "I6", "I8"]
                            ),

                            taoPhongChieu(
                                "phong02",
                                "Phòng 02",
                                ["A5", "C1", "C6", "D1", "E4",
            "E8", "E9", "F3", "F10", "G1",
            "G2", "G7", "G10", "H1", "H6",
            "H7", "I3", "I8", "J2", "J10"]
                            ),

                            taoPhongChieu(
                                "phong03",
                                "Phòng 03",
                                ["A5", "A6", "C1", "C2", "C7",
            "D4", "E3", "E4", "F5", "F7",
            "F9", "G1", "G4", "G5", "H4",
            "H6", "H9", "I4", "J1", "J8"]
                            ),
                            taoPhongChieu(
                                "phong04",
                                "Phòng 04",
                                ["C2", "H6", "I8","A3", "F5", "I2","F5","F4","F6","B1","B9","B4","B5","C9","C6","C5","J1","J6","J7","J8"]
                            ),
                            taoPhongChieu(
                                "phong05",
                                "Phòng 05",
                                ["C2", "H6", "I8","A3", "F5", "I2","F5","F4","F6","B1","B9","B4","B5","C9","C6","C5","J1","J6","J7","J8"]
                            )
                        ]
                    }
                ]     
        }
    ]
};

const trangThaiDatVe = {
    // ban đầu chưa đặt vé thì tất cả trạng thai sẽ là rỗng
    thanhPhoDangChon: null,
    chiNhanhDangChon: null,
    phongDangChon: null,
    danhSachGheDangChon:[]
};

// định dạng tiền
function dinhDangTien(soTien){
    return soTien.toLocaleString("vi-VN") + "đ";
    // 120000 =>> 120.000đ
}

// hiển thị nút đang chọn
function danhDauNutDangChon(tenClassNut, nutDuocChon){
    const cacNut = document.querySelectorAll(tenClassNut);

    cacNut.forEach(function(nut){
        nut.classList.remove("dangChon");
    });
    nutDuocChon.classList.add("dangChon");
}

// hiển thị danh sách thành phố

function hienThiDanhSachThanhPho(){
    danhSachThanhPho.innerHTML ="";
    duLieuDatVe.danhSachThanhPho.forEach(
        function(thanhPho){
            const nutThanhPho = document.createElement("button");
            nutThanhPho.type ="button";
            nutThanhPho.className = "nutThanhPho";
            nutThanhPho.textContent = thanhPho.tenThanhPho;
            nutThanhPho.addEventListener(
                "click",
                function(){
                    chonThanhPho(thanhPho,nutThanhPho);
                }
            );
            danhSachThanhPho.appendChild(nutThanhPho);
        }
    );
}


// chonj thanh pho

function chonThanhPho(thanhPhoDuocChon,nutThanhPho){
    trangThaiDatVe.thanhPhoDangChon = thanhPhoDuocChon;
    trangThaiDatVe.chiNhanhDangChon = null;
    trangThaiDatVe.phongDangChon = null;
    trangThaiDatVe.danhSachGheDangChon = [];

    danhDauNutDangChon(".nutThanhPho",nutThanhPho);

    tenThanhPhoDaChon.textContent = thanhPhoDuocChon.tenThanhPho;
    tenChiNhanhDaChon.textContent = "Chưa chọn";
    tenPhongDaChon.textContent = "Chưa chọn";
    giaVeDaChon.textContent = "Chưa chọn";

    danhSachPhongChieu.innerHTML =
        '<p class="thongBao">' +
        "Vui lòng chọn chi nhánh trước." +
        "</p>";
    soDoGhe.innerHTML =
        '<p class="thongBao">' +
        "Vui lòng chọn phòng chiếu." +
        "</p>";
    capNhatThongTinGhe();
    hienThiDanhSachChiNhanh(
        thanhPhoDuocChon.danhSachChiNhanh
    );
}


// ==================== HIỂN THỊ CHI NHÁNH ====================

function hienThiDanhSachChiNhanh(
    cacChiNhanh
) {
    danhSachChiNhanh.innerHTML = "";

    cacChiNhanh.forEach(
        function (chiNhanh) {
            const nutChiNhanh =
                document.createElement("button");

            nutChiNhanh.type = "button";
            nutChiNhanh.className =
                "nutChiNhanh";

            nutChiNhanh.textContent =
                chiNhanh.tenChiNhanh;

            nutChiNhanh.addEventListener(
                "click",
                function () {
                    chonChiNhanh(
                        chiNhanh,
                        nutChiNhanh
                    );
                }
            );

            danhSachChiNhanh.appendChild(
                nutChiNhanh
            );
        }
    );
}


// ==================== CHỌN CHI NHÁNH ====================

function chonChiNhanh(
    chiNhanhDuocChon,
    nutChiNhanh
) {
    trangThaiDatVe.chiNhanhDangChon =
        chiNhanhDuocChon;

    trangThaiDatVe.phongDangChon =
        null;

    trangThaiDatVe.danhSachGheDangChon =
        [];

    danhDauNutDangChon(
        ".nutChiNhanh",
        nutChiNhanh
    );

    tenChiNhanhDaChon.textContent =
        chiNhanhDuocChon.tenChiNhanh;

    tenPhongDaChon.textContent =
        "Chưa chọn";

    giaVeDaChon.textContent =
        "Chưa chọn";

    soDoGhe.innerHTML =
        '<p class="thongBao">' +
        "Vui lòng chọn phòng chiếu." +
        "</p>";

    capNhatThongTinGhe();

    hienThiDanhSachPhongChieu(
        chiNhanhDuocChon.danhSachPhongChieu
    );
}


// ==================== HIỂN THỊ PHÒNG CHIẾU ====================

function hienThiDanhSachPhongChieu(
    cacPhongChieu
) {
    danhSachPhongChieu.innerHTML = "";

    cacPhongChieu.forEach(
        function (phongChieu) {
            const nutPhongChieu =
                document.createElement("button");

            nutPhongChieu.type = "button";
            nutPhongChieu.className =
                "nutPhongChieu";

            const tenPhong =
                document.createElement("strong");

            tenPhong.className = "tenPhong";
            tenPhong.textContent =
                phongChieu.tenPhong;

            const thongTinPhong =
                document.createElement("span");

            thongTinPhong.className =
                "thongTinPhong";

            thongTinPhong.textContent =
                `${phongChieu.soLuongViTri} vị trí ` +
                "• Standard • VIP • Ghế đôi";

            nutPhongChieu.appendChild(
                tenPhong
            );

            nutPhongChieu.appendChild(
                thongTinPhong
            );

            nutPhongChieu.addEventListener(
                "click",
                function () {
                    chonPhongChieu(
                        phongChieu,
                        nutPhongChieu
                    );
                }
            );

            danhSachPhongChieu.appendChild(
                nutPhongChieu
            );
        }
    );
}

// ==================== CHỌN PHÒNG CHIẾU ====================

function chonPhongChieu(
    phongDuocChon,
    nutPhongChieu
) {
    trangThaiDatVe.phongDangChon =
        phongDuocChon;

    trangThaiDatVe.danhSachGheDangChon =
        [];

    danhDauNutDangChon(
        ".nutPhongChieu",
        nutPhongChieu
    );

    tenPhongDaChon.textContent =
        phongDuocChon.tenPhong;

    giaVeDaChon.textContent =
        "Standard: " +
        dinhDangTien(
            cauHinhLoaiGhe.standard.giaVe
        ) +
        " | VIP: " +
        dinhDangTien(
            cauHinhLoaiGhe.vip.giaVe
        ) +
        " | Ghế đôi: " +
        dinhDangTien(
            cauHinhLoaiGhe.doi.giaVe
        );

    capNhatThongTinGhe();

    hienThiSoDoGhe(phongDuocChon);
}



// ==================== HIỂN THỊ SƠ ĐỒ GHẾ ====================

function hienThiSoDoGhe(phongDuocChon) {
    soDoGhe.innerHTML = "";

    phongDuocChon.soGheMoiHang.forEach(
        function (soGheCuaHang, chiSoHang) {
            const tenHang =
                String.fromCharCode(
                    65 + chiSoHang
                );

            const loaiGhe =
                layLoaiGheTheoHang(
                    chiSoHang
                );

            const thongTinLoaiGhe =
                cauHinhLoaiGhe[loaiGhe];

            // Tạo một hàng ghế
            const hangGhe =
                document.createElement("div");

            hangGhe.className = "hangGhe";

            // Tạo nhãn A, B, C...
            const nhanHangGhe =
                document.createElement("span");

            nhanHangGhe.className =
                "nhanHangGhe";

            nhanHangGhe.textContent =
                tenHang;

            // Tạo vùng chứa các nút ghế
            const dayGhe =
                document.createElement("div");

            dayGhe.className = "dayGhe";

            for (
                let soThuTuGhe = 1;
                soThuTuGhe <= soGheCuaHang;
                soThuTuGhe++
            ) {
                const maGhe =
                    tenHang + soThuTuGhe;

                const nutGhe =
                    document.createElement(
                        "button"
                    );

                nutGhe.type = "button";
                nutGhe.className = "nutGhe";
                nutGhe.textContent = maGhe;

                nutGhe.dataset.maGhe =
                    maGhe;

                nutGhe.dataset.loaiGhe =
                    loaiGhe;

                // Thêm class màu sắc
                nutGhe.classList.add(
                    thongTinLoaiGhe.classCss
                );

                // Hiển thị thông tin khi rê chuột
                nutGhe.title =
                    thongTinLoaiGhe.tenLoai +
                    " - " +
                    dinhDangTien(
                        thongTinLoaiGhe.giaVe
                    );

                const gheDaDuocDat =
                    phongDuocChon.gheDaDat
                        .includes(maGhe);

                if (gheDaDuocDat) {
                    nutGhe.classList.add(
                        "daDat"
                    );

                    nutGhe.disabled = true;
                } else {
                    nutGhe.addEventListener(
                        "click",
                        function () {
                            chonHoacBoChonGhe(
                                maGhe,
                                loaiGhe,
                                nutGhe
                            );
                        }
                    );
                }

                dayGhe.appendChild(nutGhe);
            }

            hangGhe.appendChild(
                nhanHangGhe
            );

            hangGhe.appendChild(dayGhe);

            soDoGhe.appendChild(hangGhe);
        }
    );
}


// ==================== CHỌN HOẶC BỎ CHỌN GHẾ ====================

function chonHoacBoChonGhe(
    maGhe,
    loaiGhe,
    nutGhe
) {
    const cacGheDangChon =
        trangThaiDatVe.danhSachGheDangChon;

    const viTriGhe =
        cacGheDangChon.findIndex(
            function (ghe) {
                return ghe.maGhe === maGhe;
            }
        );

    const gheChuaDuocChon =
        viTriGhe === -1;

    if (gheChuaDuocChon) {
        const thongTinLoaiGhe =
            cauHinhLoaiGhe[loaiGhe];

        const tongSoNguoiHienTai =
            cacGheDangChon.reduce(
                function (tongSoNguoi, ghe) {
                    return (
                        tongSoNguoi +
                        ghe.soNguoi
                    );
                },
                0
            );

        const tongSoNguoiMoi =
            tongSoNguoiHienTai +
            thongTinLoaiGhe.soNguoi;

        if (tongSoNguoiMoi > 8) {
            alert(
                "Mỗi lượt chỉ được đặt tối đa 8 người."
            );

            return;
        }

        cacGheDangChon.push({
            maGhe: maGhe,
            loaiGhe: loaiGhe,
            tenLoai:
                thongTinLoaiGhe.tenLoai,
            giaVe:
                thongTinLoaiGhe.giaVe,
            soNguoi:
                thongTinLoaiGhe.soNguoi
        });

        nutGhe.classList.add(
            "dangChon"
        );
    } else {
        cacGheDangChon.splice(
            viTriGhe,
            1
        );

        nutGhe.classList.remove(
            "dangChon"
        );
    }

    capNhatThongTinGhe();
}

// ==================== CẬP NHẬT THÔNG TIN GHẾ ====================

function capNhatThongTinGhe() {
    const cacGheDangChon =
        trangThaiDatVe.danhSachGheDangChon;

    if (cacGheDangChon.length === 0) {
        danhSachGheDaChon.textContent =
            "Chưa có";
    } else {
        danhSachGheDaChon.textContent =
            cacGheDangChon
                .map(function (ghe) {
                    return (
                        ghe.maGhe +
                        " (" +
                        ghe.tenLoai +
                        ")"
                    );
                })
                .join(", ");
    }

    const tongSoNguoi =
        cacGheDangChon.reduce(
            function (tongNguoi, ghe) {
                return (
                    tongNguoi +
                    ghe.soNguoi
                );
            },
            0
        );

    const giaTriTongTien =
        cacGheDangChon.reduce(
            function (
                tongTienHienTai,
                ghe
            ) {
                return (
                    tongTienHienTai +
                    ghe.giaVe
                );
            },
            0
        );

    soLuongVe.textContent =
        tongSoNguoi;

    tongTien.textContent =
        dinhDangTien(giaTriTongTien);

    nutThanhToan.disabled =
        cacGheDangChon.length === 0;
}


// ==================== HEADER VÀ FOOTER ====================

const ngayHienTai = new Date();

if (nutDatVeNgay && khuVucDatGhe) {
    nutDatVeNgay.addEventListener(
        "click",
        function () {
            khuVucDatGhe.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    );
}

// ==================== THANH TOÁN ====================

nutThanhToan.addEventListener(
    "click",
    function () {
        const duLieuThanhToan = {
            thanhPho:
                trangThaiDatVe
                    .thanhPhoDangChon
                    .tenThanhPho,

            chiNhanh:
                trangThaiDatVe
                    .chiNhanhDangChon
                    .tenChiNhanh,

            phong:
                trangThaiDatVe
                    .phongDangChon
                    .tenPhong,

            danhSachGhe:
                trangThaiDatVe
                    .danhSachGheDangChon
        };

        console.log(
            "Dữ liệu thanh toán:",
            duLieuThanhToan
        );

        alert(
            "Đã ghi nhận thông tin đặt vé. " +
            "Mở Console để xem dữ liệu."
        );
    }
);

// ==================== KHỞI ĐỘNG CHƯƠNG TRÌNH ====================

hienThiDanhSachThanhPho();
capNhatThongTinGhe();