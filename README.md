https://yuyabu.github.io/OrderByWithCaseStatementGenerator/

order by でcase式を入れて任意の並び替え順を指定できるアレ。

## 使い方

input:

item_cd
110
210
345
998

output:

ORDER BY
CASE item_cd WHEN 110 THEN 1 ELSE 2 END,
CASE item_cd WHEN 210 THEN 1 ELSE 2 END,
CASE item_cd WHEN 345 THEN 1 ELSE 2 END,
CASE item_cd WHEN 998 THEN 1 ELSE 2 END,item_cd


## 注意
並び替え対象がchar型のカラムだと動かないと思う。

## TODO
 
 - レイアウト調節　
 - リファクタリング
 - char型のカラムに対応させる
