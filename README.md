# LSP Section #700 - Hexane Recovery 3D Process Simulation

Ứng dụng mô phỏng 3D tương tác khu vực **Hexane Recovery (Section #700)** tại **Nhà máy Hóa dầu Long Sơn (LSP)** dựa trên tài liệu quy trình `HD-W-7000-00-001`.

## Tính năng chính
- **Mô hình 3D trực quan 8 phân khu công nghệ**: Hexane Washing, Hexane Stripping (`T-703`), Low Polymer Handling (`D-711`, `D-712`, `M-761A/B`), Hexane Purification (`T-704`), Pure Hexane Distribution (`TK-702`, `D-703A/B`), Slop Hexane Recovery (`D-753`), Oligomer Cut (`T-761`) và pH Treatment (`D-782`, `D-783`).
- **Chuyển động động lực học thời gian thực**: Cánh khuấy cơ khí, khớp nối bơm, trống làm lạnh Drum Flaker, mức chất lỏng trong bồn và dòng hạt lưu chất di chuyển dọc đường ống.
- **Tra cứu nguyên lý & Thông số SOL**: Tích hợp toàn bộ giới hạn vận hành an toàn (`H`, `L`, `HH`, `LL`).
- **Mô phỏng sự cố & Hướng dẫn SOP**: Kích hoạt tình huống bất thường (quá áp `PIC-721`, mất nước làm mát `FZI-732`, mất chân không `C-701`, nhiễm ẩm `AI-205-2`, lọt Hexane `LI-701`...) kèm checklist khắc phục cho Field Operator và Boardman.

## Hướng dẫn đưa lên GitHub & Deploy lên Vercel

1. **Giải nén file ZIP** và đẩy toàn bộ mã nguồn lên repository GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: LSP Section 700 Hexane Recovery 3D Simulation"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```

2. **Deploy trên Vercel**:
   - Đăng nhập [Vercel](https://vercel.com), chọn **Add New... -> Project**.
   - Import repository GitHub vừa tạo.
   - Vercel tự động nhận diện framework **Vite** (`npm run build`, thư mục đầu ra `dist`) theo cấu hình trong `vercel.json`.
   - Nhấn **Deploy** và chờ ~30 giây để nhận đường dẫn ứng dụng hoạt động trực tuyến.
