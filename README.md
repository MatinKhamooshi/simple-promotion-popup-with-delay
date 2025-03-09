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

![پیش‌نمایش پاپ‌آپ تبلیغاتی](https://doctorsarrafan.com/wp-content/uploads/2025/03/lifestyle-banner.webp)

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