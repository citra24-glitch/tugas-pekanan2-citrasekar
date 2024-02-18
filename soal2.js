/**Misalkan terdapat response API sebagai berikut. 

  Sebagai QA Engineer kalian ingin mengecek total quantity  dari bebarapa storageId untuk productCode FBR00040101 (FloBrand-DressBSPink). Buatlah sebuah program javascript untuk menjumlahkan quantity dari semua storageId untuk produk tersebut 
   
  Hint : Gunakan metode Pengulangan, Array dan Object keys (silakan cari referensi cara mendapatkan value dari json) /** 

  */


  var productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  };
  
  function getTotalQuantityByStorageIds(productBin, productCode, storageIds) {
    // Inisialisasi total quantity
    var totalQuantity = 0;
  
    // Loop melalui data produk
    for (var i = 0; i < productBin.data.length; i++) {
      // Cek apakah productCode dan storageId sesuai
      if (productBin.data[i].productCode === productCode && storageIds.includes(productBin.data[i].storageId)) {
        // Tambahkan quantity ke totalQuantity
        totalQuantity += productBin.data[i].quantity;
      }
    }
  
    return totalQuantity;
  }
  
  // Menghitung Total Quantity
  var productCodeToCheck = "FBR00040101";
  var storageIdsToCheck = [10000008207, 10000002181, 10000008884]; 
  var totalQuantityResult = getTotalQuantityByStorageIds(productBin, productCodeToCheck, storageIdsToCheck);
  
  console.log("Total quantity untuk productCode " + productCodeToCheck + " dan storageIds " + storageIdsToCheck + ": " + totalQuantityResult);
  