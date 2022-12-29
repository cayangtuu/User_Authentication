# 登入網頁/帳密檢查機制(User_Authentication)
於登入頁面輸入Email及Password後，伺服器將進行帳密檢查，登入成功即進入歡迎頁面，失敗則顯示錯誤訊息。

### 網頁外觀
![image](https://github.com/cayangtuu/User_Authentication/blob/main/public/photos/%E7%99%BB%E5%85%A5%E9%A0%81%E9%9D%A2.PNG)

### 功能描述 (features)
- 登入頁面輸入Email及Password
- 登入後進行帳密檢查
- 登入成功，即跳轉至歡迎頁面
- 登入失敗，即提示帳密錯誤訊息

### 安裝與執行步驟 (installation and execution)
1. 打開終端機(Terminal)，將專案clone至本機位置
```
git clone https://github.com/cayangtuu/User_Authentication.git
```
2. 進入專案資料夾
```
cd User_Authentication
```
3. 安裝專案所需npm套件
```
npm install
```
4. 完成後，即可開始執行程式
```
npm run dev
```
終端機出現```App is working on http://localhost:3000```字樣即代表伺服器正常啟動

5. 開啟任一瀏覽器並於網址中輸入下列網址，即可連至網頁
```
http://localhost:3000
```

### 環境建置與需求(prerequisites)
##### Code編輯器
- Visual Studio Code
##### Node環境及套件
- Node.js-16.18.0
- express-4.16.4
- express-handlebars-3.0.0
- nodemon-2.0.20
