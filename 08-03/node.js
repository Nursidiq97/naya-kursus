const data = require('./data.json');

let cari = (data, key) => {
    if(key in data){
        return data[key];
    } else{
        return 'Tidak Ditemukan';
    }
}

console.log(cari(data, 'id'));