https://yuyabu.github.io/OrderByWithCaseStatementGenerator/

SQLのORDER BY句はcase式を組み入れて任意の並び替えを実現することが出来ます。
EXCELなどで

| カラム名 |
|---------|
| 順1   |
| 順2   |
| 順3   |

な一列の表があれば貼り付けて[generate]ボタンを押すことで即座にお好みのORDER BY句を作成する事ができます。
データ型はcharとnumber型を用意してあるので必要に応じて選択してください。


## How to use

input:

```
item_cd
110
210
345
998
```

output:

```
ORDER BY
CASE item_cd WHEN '110' THEN 1 ELSE 2 END,
CASE item_cd WHEN '210' THEN 1 ELSE 2 END,
CASE item_cd WHEN '345' THEN 1 ELSE 2 END,
CASE item_cd WHEN '998' THEN 1 ELSE 2 END,item_cd
```
 
