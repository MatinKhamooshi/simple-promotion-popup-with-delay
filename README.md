# پاپ‌آپ تبلیغاتی (Promotion Popup) 🎯

یک کامپوننت پاپ‌آپ تبلیغاتی زیبا و سفارشی‌پذیر برای نمایش تبلیغات، اطلاعیه‌ها یا پیشنهادات ویژه در وب‌سایت

## ویژگی‌ها ✨

- 🎨 طراحی مدرن و زیبا
- 📱 کاملاً ریسپانسیو
- ⚡ عملکرد سریع و بهینه
- 🔧 قابلیت سفارشی‌سازی آسان
- ⏱️ تنظیم زمان نمایش
- ❌ دکمه بستن پاپ‌آپ

## پیش‌نمایش 👀

<div align="center">
  <p>نمایش پاپ‌آپ در نسخه‌های مختلف:</p>
  <table>
    <tr>
      <td align="center"><strong>💻 نسخه دسکتاپ</strong></td>
      <td align="center"><strong>📱 نسخه موبایل</strong></td>
    </tr>
    <tr>
      <td><img src="img/desktop-preview.png" alt="پیش‌نمایش پاپ‌آپ تبلیغاتی دسکتاپ" width="600px"/></td>
      <td><img src="img/mobile-preview.png" alt="پیش‌نمایش پاپ‌آپ تبلیغاتی موبایل" width="300px"/></td>
    </tr>
  </table>
</div>

## نحوه استفاده 🚀

1. فایل‌های پروژه را در پروژه خود کپی کنید:
   ```
   index.html
   style.css
   scripts.js
   ```

2. HTML مورد نیاز را به صفحه خود اضافه کنید:
   ```html
   <div id="promotion-popup" class="active">
       <div class="promotion-popup-content">
           <button id="close-popup">&times;</button>
           <a href="YOUR_LINK" target="_blank">
               <img alt="YOUR_ALT_TEXT" src="YOUR_IMAGE_URL" />
           </a>
       </div>
   </div>
   ```

3. فایل‌های CSS و JavaScript را به پروژه خود لینک کنید:
   ```html
   <link href="./style.css" rel="stylesheet">
   <script type="module" src="scripts.js"></script>
   ```

## سفارشی‌سازی ⚙️

### تغییر زمان نمایش
در فایل `scripts.js`، می‌توانید زمان تاخیر نمایش پاپ‌آپ را تغییر دهید:
```javascript
setTimeout(() => {
    popup.classList.add('active');
}, 30000); // 30 ثانیه
```

### تغییر استایل
در فایل `style.css`، می‌توانید ظاهر پاپ‌آپ را سفارشی کنید.

## پشتیبانی از مرورگرها 🌐

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Opera ✅