var biodata = {
    "Nama" : "Nurkhamid",
    "Usia" : 23,
    "Alamat" : "Perumahan Taman Adiyasa Blok G 22 Nomor 29",
    "Hobi" : ["Bermain Sepak Bola", "Bermain Game", "Bermain Alat Musik"],
    "Menikah" : false,
    "Sekolah" : [
        {
            "SD" : "SDN CIKUYA",
            "ID" : 2,
            "Tahun" : 2003,
            "Lulus" : 2009
        },
        {
            "SMP" : "SMP N SOLEAR",
            "ID" : 2,
            "Tahun" : 2009,
            "Lulus" : 2012
        },
        {
            "SMA" : "SMA N KAB. TANGERANG",
            "ID" : 8,
            "Tahun" : 2012,
            "Lulus" : 2015
        }
    ],
    "Kemampuan" : [
        {
            "Javascript" : "Beginner"
        },
        {
            "HTML" : "Beginner"
        },
        {
            "Python" : "Beginner" 
        }
    ],
    "Minat Coding" : true
};

data = JSON.stringify(biodata);
console.log(data);