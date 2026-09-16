# 走進一堂社會課

可直接部署到 GitHub Pages 的靜態網站，使用 HTML、CSS、JavaScript 與 SVG，無需安裝套件或執行建置。

## 上傳與啟用網站

1. 解壓縮網站檔案包。
2. 在 GitHub 建立一個儲存庫（Repository）；使用 GitHub Free 時可建立公開儲存庫。
3. 使用 Upload files 上傳解壓縮後的所有檔案，並提交變更。index.html 必須在儲存庫最外層，不要只上傳 ZIP，也不要多包一層資料夾。
4. 開啟 Settings → Pages。
5. Source 選 Deploy from a branch；Branch 選 main（或你實際上傳的分支），資料夾選 / (root)，按 Save。
6. 等待部署完成，從 Pages 設定頁開啟顯示的網站網址。

官方說明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 檔案用途

- index.html：修改後首頁，已內嵌首頁 CSS 與七張黑白 SVG 插圖。
- read.html、dialogue.html、question.html、walk.html、see.html、story.html：原有六條路徑子頁。
- styles.css：六個子頁使用的原有共用樣式。
- script.js：六個子頁使用的原有進場動畫及資源篩選功能。
- .nojekyll：讓 GitHub Pages 直接提供靜態檔案。

## 編輯與使用

雙擊 index.html 可在本機開啟；心理測驗需要網路連線，仍使用原本的外部 iframe。
首頁樣式請修改 index.html 的 style 區塊；子頁樣式請修改 styles.css。
首頁插圖皆為內嵌 SVG，不需要另外上傳圖片。
所有站內頁面以相對路徑互相連結，可放在 GitHub Pages 專案網址之下。

六個子頁沿用原檔內容，其中「查看內容」等部分資源連結仍是 href="#" 的示例入口，請在有實際教材時填入網址。此次未新增教材或變更原示例內容。

已核對檔案間的本機引用與頁內錨點；未完成瀏覽器畫面驗證，也尚未上傳或發布至 GitHub。
