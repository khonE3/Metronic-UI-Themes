# Metronic UI Comprehensive Reference Guide

คู่มือสรุปการใช้งาน **คลาส (Classes)** และ **องค์ประกอบ (Components)** อย่างละเอียดและครบถ้วนที่สุดของ Metronic UI Theme ที่ขยายความสามารถมาจาก Bootstrap 5 

เนื้อหานี้ได้รวบรวมตัวอย่างโค้ดทุกส่วนที่ใช้ในการขึ้นโครงสร้าง Dashboard ตั้งแต่ตัวอักษร, ปุ่ม, การ์ด, ฟอร์มตาราง, ไปจนถึงโครงสร้าง Layout หลักของเว็บไซต์

---

## 1. Typography (ตัวอักษร)
Metronic เพิ่มสเกลของขนาดและน้ำหนักตัวอักษรให้ใช้งานได้หลากหลาย

### Font Sizes (ขนาดฟอนต์)
ปกติ Bootstrap มี `.fs-1` ถึง `.fs-6` Metronic เพิ่มส่วนขยายสำหรับตัวอักษรที่ใหญ่กว่าหรือเล็กกว่ามาตรฐาน
```html
<!-- Base Sizes -->
<span class="fs-1">ขนาด ~22px (ใหญ่ขยาย)</span>
<span class="fs-2">ขนาด ~19.5px</span>
<span class="fs-3">ขนาด ~17.5px</span>
<span class="fs-4">ขนาด ~16px</span>
<span class="fs-5">ขนาด ~15px</span>
<span class="fs-6">ขนาด ~14px (ค่าเริ่มต้น)</span>
<span class="fs-7">ขนาด ~13px (เล็ก)</span>
<span class="fs-8">ขนาด ~12px (เล็กมาก)</span>

<!-- Extended Heavy Sizes -->
<span class="fs-2hx">ตัวใหญ่มหึมา (ราว 30px+)</span>
<span class="fs-1x">ขนาดปกติ</span>
<span class="fs-2x">ขนาด x2 (26px)</span>
<span class="fs-2qx">ขนาด x2.25 (29.25px)</span>
<span class="fs-3x">ขนาด x3 (39px)</span>
<span class="fs-4x">ขนาด x4 (52px)</span>
<span class="fs-5x">ขนาด x5 (65px)</span>
```

### Font Weights (ความหนาฟอนต์)
```html
<span class="fw-light">Light (300)</span>
<span class="fw-normal">Regular (400)</span>
<span class="fw-semibold">SemiBold (500)</span>
<span class="fw-bold">Bold (600)</span>
<span class="fw-bolder">Bolder (700)</span>
```

### Line Height (ระยะห่างบรรทัด)
```html
<p class="lh-1">ให้ระยะห่างคือ 1.0 (ชิดกันมาก)</p>
<p class="lh-sm">ให้ระยะห่างคือ 1.25</p>
<p class="lh-base">ระยะห่างแบบปกติ 1.5</p>
<p class="lh-lg">ให้ระยะห่างคือ 1.75</p>
<p class="lh-xl">ให้ระยะห่างคือ 2.0</p>
```

---

## 2. Color System & Text Colors (ระบบสี)

Metronic มีโทนสีหลัก 8 สี: `primary`, `success`, `info`, `warning`, `danger`, `dark`, `light`, `secondary`

### สีเฉพาะสำหรับตัวหนังสือกึ่งใส (Grayscale / Muted)
```html
<span class="text-white">ตัวหนังสือสีขาว</span>
<span class="text-dark">สีดำ/มืด</span>
<span class="text-muted">สีเทาที่ใช้เป็นค่ามาตรฐานทั่วไป</span>
<span class="text-gray-100">พื้นอ่อนเทาสว่าง</span>
<span class="text-gray-400">สีเทาอ่อน</span>
<span class="text-gray-600">สีเทากลางๆ (เหมาะกับรายละเอียดรอง)</span>
<span class="text-gray-800">สีเทาเข้ม (หมึกปากกา)</span>
<span class="text-gray-900">เกือบดำสนิท (สีหลักของ Body text)</span>
```

### Text Colors เฉพาะธีม
```html
<span class="text-primary">ตัวอักษรสี Primary</span>
<span class="text-success">ตัวอักษรสี Success</span>
<span class="text-danger">ตัวอักษรสี Danger</span>
<span class="text-warning">ตัวอักษรสี Warning</span>
<span class="text-info">ตัวอักษรสี Info</span>
```

---

## 3. Buttons (ปุ่มกดแบบต่างๆ)

### โทนสีมาตรฐาน (Solid)
```html
<button class="btn btn-primary">Primary Solid</button>
<button class="btn btn-success">Success Solid</button>
<button class="btn btn-danger">Danger Solid</button>
<button class="btn btn-warning">Warning Solid</button>
<button class="btn btn-info">Info Solid</button>
<button class="btn btn-dark">Dark Solid</button>
<button class="btn btn-secondary">Secondary (สีเทาอ่อน)</button>
```

### โทนสีอ่อนสบายตา (Light Options - นิยมสุด)
```html
<button class="btn btn-light-primary">พื้นอ่อนสีน้ำเงิน ตัวอักษรสีน้ำเงิน</button>
<button class="btn btn-light-success">พื้นอ่อนสีเขียว ตัวอักษรสีเขียว</button>
<button class="btn btn-light-danger">พื้นอ่อนสีแดง ตัวอักษรสีแดง</button>
<button class="btn btn-light-warning">พื้นอ่อนสีเหลือง ตัวเหลืองเข้ม</button>
<button class="btn btn-light-info">พื้นอ่อนสีม่วง ตัวสีม่วง</button>
```

### ขนาดและรูปแบบ (Size & Shape)
```html
<!-- Sizes -->
<button class="btn btn-sm btn-primary">ปุ่มขนาดเล็ก (Small)</button>
<button class="btn btn-primary">ปุ่มขนาดกลาง (Default)</button>
<button class="btn btn-lg btn-primary">ปุ่มขนาดใหญ่ (Large)</button>

<!-- Outline -->
<button class="btn btn-outline btn-outline-primary">ปุ่มกรอบโปร่งใสใส</button>

<!-- Flush (ปุ่มแบนเรียบสุดๆ ไม่มีกรอบ ไม่มีพื้นหลัง) -->
<button class="btn btn-flush">Flush Button</button>

<!-- Icon Only -->
<button class="btn btn-icon btn-primary">
    <i class="bi bi-gear"></i>
</button>

<!-- Icon Only (ขนาดเล็กกะทัดรัด) -->
<button class="btn btn-icon btn-sm btn-light-primary">
    <i class="bi bi-pencil"></i>
</button>
```

### สถานะ Active/Hover พิเศษ
```html
<!-- เมื่อปุ่มปกติ แต่เราอยากบอกว่าปุ่มนี้กำลังถูกเลือก (Active) -->
<button class="btn btn-active-primary">เมื่อไม่ได้กดจะโปร่งแสง พอกดหรือ hover จะเปลี่ยนเป็น Primary ทันที</button>
<button class="btn btn-active-light-primary">เมื่อคลิกหรือ Hover จะเป็น Light primary ทันที</button>
```

---

## 4. Cards (กล่องเนื้อหา / Dashboard Widgets)

การ์ดมีอิทธิพลสูงมากในการจัดแบ่งเนื้อหาเป็นส่วนๆ

### รูปแบบ Card พื้นฐานครบสูตร (Header / Body / Footer)
```html
<div class="card shadow-sm">
    <div class="card-header border-0 pt-5">
        <h3 class="card-title fw-bold text-gray-900">หัวข้อหลัก</h3>
        <div class="card-toolbar">
            <!-- จุดใส่ปุ่มข้างขวาของ Header -->
            <button type="button" class="btn btn-sm btn-light-primary">จัดการ</button>
        </div>
    </div>
    <div class="card-body">
        เนื้อหาหลักของกล่อง...
    </div>
    <div class="card-footer px-5 py-3">
        ส่วนล่างของกล่อง มักใช้สำหรับปุ่มบันทึก หรือ Pagination
    </div>
</div>
```

### รูปแบบเส้นขอบการ์ด (Borders)
```html
<!-- กล่องที่มีเส้นขอบล้อมรอบแบบสีเทาทึบ -->
<div class="card card-bordered">...</div>

<!-- กล่องที่มีขอบแบบเส้นประ (ดีมากสำหรับโซน Drop File/Add item) -->
<div class="card card-dashed">...</div>

<!-- กล่องที่ไม่มีเส้นคั่น Header / Footer คือแนบสนิทเรียบไปเลย -->
<div class="card card-flush">...</div>
```

---

## 5. Forms & Inputs (ช่องฟอร์มข้อมูล)

### Input ธรรมดา vs แบบ Solid 
```html
<div class="mb-5">
    <label class="form-label fs-6 fw-semibold mb-2">อีเมล (แบบปกติ)</label>
    <input type="email" class="form-control" placeholder="example@email.com"/>
</div>

<div class="mb-5">
    <label class="form-label fs-6 fw-semibold mb-2 required">รหัสผ่าน (แบบ Solid/ทึบ แนะนำ)</label>
    <input type="password" class="form-control form-control-solid" placeholder="กรอกรหัสผ่าน"/>
    <div class="text-muted fs-7 mt-2">รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร</div>
</div>
```

### Select Box แบบ Solid
```html
<div class="mb-5">
    <label class="form-label">เลือกประเทศ</label>
    <select class="form-select form-select-solid" data-control="select2" data-placeholder="คลิกเพื่อเลือก">
        <option></option>
        <option value="th">ไทย</option>
        <option value="jp">ญี่ปุ่น</option>
    </select>
</div>
```

### Checkbox & Radio (Metronic Custom Toggle)
```html
<!-- Checkbox แบบแข็งแกร่ง -->
<div class="form-check form-check-custom form-check-solid mb-5">
    <input class="form-check-input" type="checkbox" value="1" id="agree" />
    <label class="form-check-label fw-semibold text-gray-700" for="agree">
        ข้าพเจ้ายอมรับเงื่อนไข
    </label>
</div>

<!-- สวิตช์เปิดปิด (Switch) -->
<div class="form-check form-switch form-check-custom form-check-solid">
    <input class="form-check-input" type="checkbox" value="" id="mode" checked />
    <label class="form-check-label fw-semibold text-gray-700" for="mode">
        เปิดแจ้งเตือน
    </label>
</div>
```

---

## 6. โครงสร้างตาราง (Tables)
ใน Dashboard เราให้ความสำคัญกับการรีดเอาส่วนที่รกๆ ของตารางทิ้ง

```html
<div class="table-responsive">
    <!-- ใส่เส้นประบางๆ ที่ขอบล่างของแถว (align-middle จัดให้อยู่กลางแนวแกน Y) -->
    <table class="table align-middle table-row-dashed fs-6 gy-5">
        <thead>
            <!-- จัดหัวตารางให้เป็นสีทึบ/เทาบางๆ และให้ตัวเป็น Uppercase -->
            <tr class="text-start text-muted fw-bold fs-7 text-uppercase gs-0 bg-light">
                <th class="w-10px pe-2 rounded-start">
                    <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                        <input class="form-check-input" type="checkbox" data-kt-check="true" value="1" />
                    </div>
                </th>
                <th class="min-w-125px">ข้อมูลผู้ใช้</th>
                <th class="min-w-125px">ระดับ</th>
                <th class="text-end min-w-100px rounded-end">จัดการ</th>
            </tr>
        </thead>
        <tbody class="text-gray-600 fw-semibold">
            <tr>
                <td>
                    <div class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="1" />
                    </div>
                </td>
                <td class="d-flex align-items-center">
                    <!-- การสร้างรูปโปรไฟล์ทรงกลม หรือวงกลมป้ายชื่อ -->
                    <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <div class="symbol-label bg-light-primary text-primary fs-3 fw-bold">J</div>
                    </div>
                    <div class="d-flex flex-column">
                        <a href="#" class="text-gray-800 text-hover-primary mb-1">John Doe</a>
                        <span>johndoe@example.com</span>
                    </div>
                </td>
                <td><span class="badge badge-light-success">ผู้ดูแลระบบ</span></td>
                <td class="text-end">
                    <button class="btn btn-light btn-active-light-primary btn-sm">แก้ไข</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

---

## 7. ป้ายกำกับต่างๆ (Badges & Indicators)

```html
<!-- รูปแบบสี่เหลี่ยมโค้งมน -->
<span class="badge badge-primary">รอการอนุมัติ</span>
<span class="badge badge-success">สำเร็จ</span>
<span class="badge badge-light-warning">เตือนกำลังมา</span>
<span class="badge badge-light-danger fs-7 fw-bold">ยกเลิก (เพิ่มขนาดและเพิ่มความหนา)</span>

<!-- รูปแบบทรงกลมจิ๋ว (มักไว้จุดแจ้งเตือน Unread messages) -->
<span class="badge badge-circle badge-primary h-20px w-20px">3</span>
<span class="badge badge-circle badge-light-danger">x</span>

<!-- รูปแบบทรงสี่เหลี่ยมจัตุรัสขอบมน (Square) -->
<span class="badge badge-square badge-success">S</span>
```

---

## 8. Modals (Popup แจ้งเตือน)
เรียกใช้งานเหมือน Modal ของ Bootstrap แต่คลาสปรับมาแล้ว

```html
<!-- ปุ่มเรียก Modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_1">
    สั่งให้เปิด Modal
</button>

<!-- ส่วนโครงสร้าง Modal -->
<div class="modal fade" tabindex="-1" id="kt_modal_1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">สร้างโปรเจกต์ใหม่</h3>

                <!-- ปุ่มเหลี่ยมกากบาทมุมบนขวา -->
                <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                    <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span class="path2"></span></i>
                </div>
            </div>

            <div class="modal-body">
                <p>ใส่เนื้อหาจำพวกแบบฟอร์มการสร้างโปรเจกต์ที่นี่...</p>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-bs-dismiss="modal">ยกเลิกปิดทิ้ง</button>
                <button type="button" class="btn btn-primary">ยืนยันบันทึก</button>
            </div>
        </div>
    </div>
</div>
```

---

## 9. Layout Structure (โครงสร้างใหญ่ของธีม Metronic)

หากต้องการจะร่างหน้าสำหรับ Dashboard ต้องร้อยเรียง Id และการห่อหุ้มดังนี้:

```html
<!-- ส่วนในของ Body ต้องครอบทั้งหมดด้วย Div App Layer -->
<div class="d-flex flex-column flex-root app-root" id="kt_app_root">
    
    <!-- Wrapper page ทั้งหมด -->
    <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
        
        <!-- Header บริเวณบนสุดของจอ (มีเมนู, Navbar/Searchbox โผล่ตรงนี้) -->
        <div id="kt_app_header" class="app-header">...</div>
        
        <!-- Wrapper สำหรับฝั่งขวา (ที่เอาไว้รับมือ Sidebar แกน X) -->
        <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            
            <!-- Sidebar (แถบเมนูข้างจอ) -->
            <div id="kt_app_sidebar" class="app-sidebar flex-column">...</div>
            
            <!-- Content Area หลัก พื้นที่ทำงาน -->
            <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                <div class="d-flex flex-column flex-column-fluid">
                   
                    <!-- Toolbar (หัวเรื่องย่อย หรือปุ่มคำสั่งหลักของหน้า ปรับ Breadchumb ได้) -->
                    <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">...</div>
                    
                    <!-- Content (พื้นที่ขาวๆ ตัวจริงที่จะสวม Card ข้อมูล) -->
                    <div id="kt_app_content" class="app-content flex-column-fluid">
                        <div id="kt_app_content_container" class="app-container container-fluid">
                            [ แทรกรหัสของ Component ต่างๆ ด้านบนลงตรงนี้ ]
                        </div>
                    </div>
                </div>
                
                <!-- Footer (ส่วนปิดท้าย ขวาล่าง) -->
                <div id="kt_app_footer" class="app-footer">...</div>
            </div>

        </div>
    </div>
</div>
```

---

## 10. Helper / Utility Classes ล้ำๆ

Metronic นำเสนอชุดคลาสจัดการระยะห่างและความงดงามที่เกินขอบเขต Bootstrap

### ระยะห่างอัจฉริยะ (Spacing 0 - 20)
แทนที่จะมีแค่สเกล 0-5 Metronic ขยายสเกล 0 ถึง 20 เพื่อความแม่นยำ 
- 0 = 0px
- 1 = 3.5px / 2 = 7px / 3 = 10.5px / 4 = 14px / 5 = 17.5px (เหมือน Bootstrap ดั้งเดิม)
- 6 = 21px / 7 = 24.5px / 8 = 28px
- **10 = 35px** สุดฮิตสำหรับการเว้นขอบเขต 
- **15 = 52.5px**
- **20 = 69px** 

```html
<div class="mb-10">เว้นบรรทัด 35px</div>
<div class="px-20 py-10">Padding แนวนอนกว้างๆ 69px กับบน/ล่าง 35px</div>
```

### การจัดเงาและการจัดการขนาด (Shadow & Sizing)
```html
<div class="shadow-sm">สร้างเงาจางๆ เบาๆ เน้นความ Minimal (แนะนำ)</div>
<div class="shadow">เงาระดับลึกขึ้น</div>

<!-- Sizing กำหนดความกว้างด้วย W / หรือ Min-W -->
<div class="w-10px">เจาะจังความกว้าง 10px</div>
<div class="w-100px">เจาะจงความกว้าง 100px</div>
<div class="min-w-200px">ขั้นต่ำ 200px (ป้องกันมันล่มเวลาจอเล็ก)</div>
<div class="h-50px">ความสูง 50px บังคับ</div>
```

### การกำหนด Dark Mode (Theme Switcher)
วิธีการที่ Metronic ควบคุม Dark Mode คือสั่งผ่าน Attribute ที่แท็ก <body> หรือ <html>

```html
<!-- เปิดโหมดแสงสว่าง (Light) -->
<html data-bs-theme="light">

<!-- สลับเป็นหน้าจอดำ (Dark) -->
<html data-bs-theme="dark">
```
ซึ่งจะส่งผลต่อความโปร่งแสง และสลับสีของ CSS Variables ให้ทั้งหมดอัตโนมัติ โดยไม่ต้องมานั่งแยกเขียนคลาส `.dark-mode` ทีละจุด!

---

## 11. การเรียกใช้ JavaScript สำหรับ Metronic

เพื่อให้ Component บางตัวของ Metronic ทำงานได้เต็มประสิทธิภาพ เช่น Dropdown, เมนู Sidebar, หรือ Plugin อย่าง Select2:

```html
<!-- นำเข้าไฟล์ JS พื้นฐานที่หน้าล่างสุดของ Body -->
<!-- 1. ไฟล์รวมปลั๊กอิน (เช่น jQuery, Bootstrap JS, Select2, SweetAlert) -->
<script src="assets/plugins/global/plugins.bundle.js"></script>

<!-- 2. ไฟล์ Script ประมวลผลหลักของ Metronic -->
<script src="assets/js/scripts.bundle.js"></script>

<!-- สำหรับการ Render โครงสร้างต่างๆ จะทำงานอัตโนมัติเมื่อไฟล์ทั้งคู่ถูกเรียกใช้ -->
```

## สรุป (Conclusion)
ทั้งหมดนี้คือคำสั่งโครงสร้างเบื้องต้นและลูกเล่นที่ Metronic จัดเตรียมไว้ ซึ่งเป้าหมายหลักคือเพื่อประหยัดเวลา ไม่ต้องไปเขียน CSS ในส่วนของ *สี*, *โครงสร้าง*, *แสงเงา*, และ *ตีกรอบระยะห่าง* ใหม่ทั้งหมด เพียงแค่จดจำและพิมพ์คลาสเหล่านี้ลงไป ก็ได้ดีไซน์ที่หรูหราแบบ Professional ทันทีครับ!
