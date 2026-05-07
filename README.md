# DGlobal Technology — Corporate Website

Website marketing cho **DGlobal Technology JSC** — công ty công nghệ Việt Nam cung cấp giải pháp doanh nghiệp, viễn thông, ngân hàng số, cổng thanh toán, thương mại điện tử và AI.

---

## Công nghệ

- **Vanilla HTML5 + CSS3 + JavaScript** — không dùng framework, không build step
- **Đa ngôn ngữ:** Tiếng Việt, English, 한국어, ພາສາລາວ (hệ thống i18n tự phát triển)
- **Font:** Inter, Plus Jakarta Sans (Google Fonts), JetBrains Mono
- **Icon:** Lucide (CDN)

---

## Cấu trúc thư mục

```
├── index.html              # Trang chủ
├── tuyen-dung.html         # Trang tuyển dụng
├── solutions/
│   ├── ai.html             # Giải pháp AI
│   ├── banking.html        # Ngân hàng số
│   ├── ecommerce.html      # Thương mại điện tử
│   ├── enterprise.html     # Giải pháp doanh nghiệp
│   ├── payment.html        # Cổng thanh toán
│   └── telecom.html        # Dịch vụ viễn thông
├── css/
│   ├── global.css          # CSS dùng chung (navbar, footer, components)
│   ├── index.css           # CSS riêng trang chủ
│   └── tuyen-dung.css      # CSS riêng trang tuyển dụng
├── js/
│   ├── i18n.js             # Hệ thống đa ngôn ngữ (~1040 dòng)
│   ├── main.js             # Navbar, hamburger menu, scroll effects
│   ├── hotline.js          # Nút hotline nổi (floating button)
│   ├── index.js            # Logic riêng trang chủ
│   └── tuyen-dung.js       # Logic riêng trang tuyển dụng
└── picture/                # Ảnh tham khảo thiết kế & screenshots
```

---

## Chạy local

```bash
npx serve . -p 8080
```

Sau đó mở `http://localhost:8080` trên trình duyệt.

---

## Hệ thống đa ngôn ngữ (i18n)

File `js/i18n.js` quản lý 4 ngôn ngữ: **vi** (mặc định), **en**, **ko**, **lo**.

- Thêm thuộc tính `data-i18n="key"` vào HTML element để dịch nội dung
- Thêm chuỗi dịch mới vào object `T` trong `i18n.js` cho cả 4 ngôn ngữ
- Ngôn ngữ được lưu vào `localStorage` với key `dg_lang`
- Gọi thủ công: `window.DGi18n.apply('en')`

---

## Design System

### Màu sắc (CSS Custom Properties)

| Biến | Giá trị | Dùng cho |
|------|---------|----------|
| `--bg-primary` | `#080D1A` | Nền tối chính |
| `--bg-secondary` | `#0C1426` | Nền xanh đậm |
| `--bg-card` | `#0F1A2E` | Nền card |
| `--accent` | `#2563EB` | CTA, accent chính |
| `--accent-hover` | `#60A5FA` | Hover state |
| `--highlight` | `#06B6D4` | AI/tech highlight |
| `--text-primary` | `#F1F5F9` | Chữ chính |
| `--text-secondary` | `#94A3B8` | Chữ phụ |
| `--border` | `#1E2D45` | Đường viền |

### Breakpoints

| Breakpoint | Chiều rộng |
|-----------|-----------|
| Mobile | ≤ 640px |
| Tablet | ≤ 1024px |
| Desktop | > 1024px |

### Layout
- Max width: `1200px`, căn giữa
- Section padding: `80px` desktop / `48px` mobile
- Border radius: `12px` card, `8px` button

---

## Các giải pháp

| Trang | Mô tả |
|-------|-------|
| `solutions/enterprise.html` | ERP, CRM, tự động hóa quy trình |
| `solutions/telecom.html` | VoIP, MVNO, SMS/OTP gateway |
| `solutions/banking.html` | Core banking, Open Banking API, KYC/eKYC |
| `solutions/payment.html` | Cổng thanh toán đa kênh, QR Pay, BNPL |
| `solutions/ecommerce.html` | Nền tảng B2B/B2C, tích hợp marketplace |
| `solutions/ai.html` | Chatbot, Callbot, Agentic AI suite |

---

## Thông tin công ty

- **Tên:** Công ty Cổ phần Công nghệ DGlobal
- **Hotline:** 0981 100 001
- **Mạng xã hội:** LinkedIn, Facebook, YouTube
