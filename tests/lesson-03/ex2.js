const chieuCao = 158 ;
if (chieuCao < 200 && chieuCao > 100){
    const soLe = chieuCao - 100;
    const canNangLyTuong = (soLe * 9) / 10;
    const canNangToiDa = soLe;
    const canNangToiThieu = (soLe * 8) / 10;

console.log(`Cân nặng lý tưởng là: ${canNangLyTuong}kg, Cân nặng tối đa: ${canNangToiDa}kg,Cân nặng tối thiểu: ${canNangToiThieu}kg`);
} else {
    console.log('Không nằm trong phạm vi');
}