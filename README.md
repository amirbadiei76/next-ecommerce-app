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
