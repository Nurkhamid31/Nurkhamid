function cek(username){
    var nama = /^[a-z_.]{8,12}$/;
    return nama.test(username);
    }    
if (cek("nurkhamid_al")){
    alert("Username Diterima");
}
else 
    alert("Ganti Username!");

function uji(password){
    var pass = /^[a-z]+[0-9]+[a-z]+[0-9][a-z]+[0-9]+[a-z]+[0-9]+[a-z]$/;
    return pass.test(password);
}

if (uji("a1b2c3d4e")){
    alert("Password Benar");
}
else
    alert("Password Salah!");