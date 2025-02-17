# StorageApi

StorageApi 接口定义了用于存储和检索数据的方法，包括加密和解密功能。  

## decryptGet

获取加密存储中的字符串值。  

- _**key**_: 键名  

- _**defaultValue**_: 可选，默认值  

## decryptString

对加密的字符串进行解密。  

- _**value**_: 要解密的字符串  

## delete

删除存储中的值。  

- _**key**_: 键名  

## encryptSet

对字符串进行加密并存储。  

- _**key**_: 键名  

- _**value**_: 要加密并存储的字符串  

## encryptString

使用 [DPAPI](https://learn.microsoft.com/en-us/windows/win32/api/dpapi/nf-dpapi-cryptprotectdata) 生成的加密密钥对字符串进行加密。根据 Windows 文档：“通常，只有与加密数据的用户具有相同登录凭据的用户才可以解密数据”。因此，内容受到同一计算机上其他用户的保护，但不受同一用户空间中运行的其他应用程序的保护。  

- _**value**_: 要加密的字符串  




参考：

- [Safe Storage](https://www.electronjs.org/docs/latest/api/safe-storage)

## get

获取存储中的值。  

- _**key**_: 键名  

- _**defaultValue**_: 可选，默认值  

## getObject

获取存储中的对象值。  

- _**key**_: 键名  

- _**defaultValue**_: 可选，默认值  

## set

设置存储中的值。  

- _**key**_: 键名  

- _**value**_: 要存储的值，可以是 BaseType 或对象  