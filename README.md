# Next E-commerce App

یک پروژه نمونه فروشگاه با **Next.js (App Router)** و **Tailwind CSS** — هدف این repo ایجاد اسکلت اولیه رابط کاربری (UI) برای یک فروشگاه اینترنتی تا بلافاصله بتوانیم روی اتصال به API و منطق بیزینس کار کنیم.

## وضعیت فعلی (آنچه امروز پیاده‌سازی شده)
- اسکلت پروژه با `app/` (App Router)
- صفحات اولیه:
  - `/` — Home (Hero + بخش Latest Products placeholder)
  - `/products` — Products (گرید کارت‌های hardcoded / placeholder)
  - `/products/[id]` — Product Detail (صفحه داینامیک با داده mock)
  - `/cart` — Cart (placeholder: empty)
- کامپوننت‌ها:
  - `components/layout/Header.tsx` — هدر و ناوبری
  - `components/product/ProductCard.tsx` — کارت محصول (placeholder)
- استایل با Tailwind CSS

## نیازمندی‌ها (محلی)
- Node.js >= 18
- npm یا pnpm یا yarn

## نصب و اجرا (لوکال)
1. کلون کردن:
   ```bash
   git clone https://github.com/amirbadiei76/next-ecommerce-app.git
   cd next-ecommerce-app
   ```

2. نصب وابستگی‌ها:
```bash
npm install
یا: pnpm install
یا: yarn
```

3. اجرا در حالت توسعه:
```bash
npm run dev
```

4. اجرا در مرورگر:
```bash
http://localhost:3000
```

## ساختار پوشه‌ای (خلاصه)
```bash
src/
 ├─ app/
 │   ├─ layout.tsx
 │   ├─ page.tsx
 │   ├─ products/
 │   │   ├─ page.tsx
 │   │   └─ [id]/page.tsx
 │   └─ cart/page.tsx
 ├─ components/
 │   ├─ layout/Header.tsx
 │   └─ product/ProductCard.tsx
 └─ styles/globals.css
```

##  قدم بعدی (روز دوم)

1)
- وصل کردن API (مثلاً fakestoreapi.com یا dummyjson)

- پیاده‌سازی Cart state (Zustand یا Context)

- Add to cart / localStorage / SSR fetching

2) کامپوننت منوی همبرگر کشویی (Drawer) — کد کامل و توضیحات

این کامپوننت ساده، در Next.js (App Router) و Tailwind نوشته شده.  
ویژگی‌ها:
- دکمه همبرگر که در موبایل نمایش داده می‌شود
- کشویی (drawer) که از سمت `right` یا `left` باز می‌شود — قابل تنظیم با prop `side`
- overlay نیمه‌شفاف برای کلیک‌خارجی و بستن
- پشتیبانی از کلید `Escape` برای بستن
- جلوگیری از scroll بدنه وقتی دراور باز است
