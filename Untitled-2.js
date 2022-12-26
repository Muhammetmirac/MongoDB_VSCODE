//=================================================
//                   AGGREGATION
//=================================================
// 1) Aggregation, dokumanlardaki verilerin islenmesi ve hesaplanan
//    sonuclarin donmesini saglayan islemlerdir.
//
// 2) Aggregation islemleri, farklı dokumanlardaki degerleri gruplandirabilir.
//
// 3) Bu gruplanan veriler uzerinde cesitli islemlerin gereceklestirelerek tek
//    bir sonuc degerinin donmesi saglanabilir.
//
// 4) MongoDB, 3 farklı yontem ile aggregation gerceklestirmeye izin verir.
//     A) aggregation pipeline (toplama boru hattı) --> best practice...
//     B) map-reduce function (map indirgeme)
//     C) single-purpose aggregation (tek-amaç toplama)
//
// 5) Aggregiation, SQL'deki Join islemlerine benzetilebilir.
//================================================= 
//             AGGREGATION PIPELINE
//=================================================
// SYNTAX
//
//   pipeline = [
//   { $match : { … },
//   { $group : { … },
//   { $sort : { … },
//      ...
//   ]
//   db.collectionName.aggregate({pipeline}, {options})
//
//  $match() –> Verileri secerken flitrelemek icin
//  $group({_id : "$field"}) - >islenen verilerin gruplanmasi icin
//  $sort() -> Sonuclarin siralanmasi icin
// NOT : VSCode ile yazıldığından , her komut önüne, use("DB_ismi") yazılmalı !!

use('okul');
db.grades.insertMany([
{_id:6305, name: "A. MacDyver", "assignment":5, "points" :24},
{_id:6308, name: "B. Batlock", "assignment":3, "points" :22},
{_id:6312, name: "M. Tagnum", "assignment":5, "points" :30},
{_id:6319, name: "R. Stiles", "assignment":2, "points" :12},
{_id:6322, name: "A. MacDyver", "assignment":2, "points" :14},
{_id:6334, name: "R. Stiles", "assignment":1, "points" :10}
]);