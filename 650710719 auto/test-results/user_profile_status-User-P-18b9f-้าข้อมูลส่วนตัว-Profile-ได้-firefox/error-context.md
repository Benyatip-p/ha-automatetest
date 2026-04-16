# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user_profile_status.spec.js >> User Profile and Membership Status >> TC-171: ผู้ใช้สามารถเข้าถึงหน้าข้อมูลส่วนตัว (Profile) ได้
- Location: tests\user_profile_status.spec.js:14:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /ข้อมูลผู้ใช้|Profile/i })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - link "Fitness Logo SU.ED FITNESS CENTER" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Fitness Logo" [ref=e7]
        - generic [ref=e8]: SU.ED FITNESS CENTER
      - generic [ref=e10]:
        - link "หน้าแรก" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "ตารางเวลา" [ref=e12] [cursor=pointer]:
          - /url: /schedule
        - link "ข่าวสาร" [ref=e13] [cursor=pointer]:
          - /url: /news
        - link "สมาชิก" [ref=e14] [cursor=pointer]:
          - /url: /package
        - button "สวัสดี, test test" [ref=e16] [cursor=pointer]
  - generic [ref=e17]:
    - generic [ref=e18]:
      - button "Slide 1" [ref=e19] [cursor=pointer]
      - button "Slide 2" [ref=e20] [cursor=pointer]
      - button "Slide 3" [ref=e21] [cursor=pointer]
      - button "Slide 4" [ref=e22] [cursor=pointer]
      - button "Slide 5" [ref=e23] [cursor=pointer]
      - button "Slide 6" [ref=e24] [cursor=pointer]
      - button "Slide 7" [ref=e25] [cursor=pointer]
      - button "Slide 8" [ref=e26] [cursor=pointer]
      - button "Slide 9" [ref=e27] [cursor=pointer]
      - button "Slide 10" [ref=e28] [cursor=pointer]
      - button "Slide 11" [ref=e29] [cursor=pointer]
      - button "Slide 12" [ref=e30] [cursor=pointer]
      - button "Slide 13" [ref=e31] [cursor=pointer]
      - button "Slide 14" [ref=e32] [cursor=pointer]
      - button "Slide 15" [ref=e33] [cursor=pointer]
    - generic [ref=e35]:
      - img "สงกรานต์นี้ SU.ED FITNESS เปิดให้บริการตามปกติ" [ref=e36]
      - heading "สงกรานต์นี้ SU.ED FITNESS เปิดให้บริการตามปกติ" [level=3] [ref=e38]
    - button "Previous" [ref=e39] [cursor=pointer]:
      - generic [ref=e41]: Previous
    - button "Next" [ref=e42] [cursor=pointer]:
      - generic [ref=e44]: Next
  - generic [ref=e46]:
    - generic [ref=e47]:
      - heading "📰 ข่าวสารล่าสุด" [level=2] [ref=e48]
      - paragraph [ref=e49]: อัปเดตเรื่องราวใหม่ๆ สำหรับคุณ
    - generic [ref=e50]:
      - generic [ref=e52]:
        - img "สงกรานต์นี้ SU.ED FITNESS เปิดให้บริการตามปกติ" [ref=e53]
        - generic [ref=e54]:
          - generic [ref=e55]: สงกรานต์นี้ SU.ED FITNESS เปิดให้บริการตามปกติ
          - paragraph [ref=e56]: แจ้งสมาชิกทุกท่าน! ช่วงเทศกาลสงกรานต์ วันที่ 13-15 เมษายน 2569 นี้ ทาง SU.ED FITNESS CENTER ยังคงเปิดให้บริการตามเวลาปกติ (07:00 - 22:00 น.) นะครับ ใครไม่ได้ไปเที่ยวไหน มาปั้นหุ่นฟิตสู้ลมร้อนกันได้เลย พิเศษ! สมาชิกที่เข้ามาเช็คอินในช่วงเทศกาล รับฟรีเครื่องดื่มเกลือแร่ 1 ขวดที่เคาน์เตอร์
          - button "อ่านเพิ่มเติม" [ref=e57] [cursor=pointer]
      - generic [ref=e59]:
        - img [ref=e60]
        - generic [ref=e61]:
          - paragraph
          - button "อ่านเพิ่มเติม" [ref=e62] [cursor=pointer]
      - generic [ref=e65]:
        - generic [ref=e66]: Test Title
        - paragraph [ref=e67]: Test News
        - button "อ่านเพิ่มเติม" [ref=e68] [cursor=pointer]
  - generic [ref=e69]:
    - generic [ref=e70]:
      - heading "📅 ตารางเวลา" [level=2] [ref=e71]
      - paragraph [ref=e72]: อัปเดตคลาสล่าสุดของสัปดาห์นี้
    - table [ref=e73]:
      - rowgroup [ref=e74]:
        - row "วัน / เวลา 07:00 17:00 17:45 18:00 19:15" [ref=e75]:
          - columnheader "วัน / เวลา" [ref=e76]
          - columnheader "07:00" [ref=e77]
          - columnheader "17:00" [ref=e78]
          - columnheader "17:45" [ref=e79]
          - columnheader "18:00" [ref=e80]
          - columnheader "19:15" [ref=e81]
      - rowgroup [ref=e82]:
        - row "Monday Yoga Yoga - Yoga -" [ref=e83]:
          - cell "Monday" [ref=e84]:
            - strong [ref=e85]: Monday
          - cell "Yoga" [ref=e86]
          - cell "Yoga" [ref=e87]
          - cell "-" [ref=e88]
          - cell "Yoga" [ref=e89]
          - cell "-" [ref=e90]
        - row "Tuesday Aerobic - - - -" [ref=e91]:
          - cell "Tuesday" [ref=e92]:
            - strong [ref=e93]: Tuesday
          - cell "Aerobic" [ref=e94]
          - cell "-" [ref=e95]
          - cell "-" [ref=e96]
          - cell "-" [ref=e97]
          - cell "-" [ref=e98]
        - row "Wednesday - - - - -" [ref=e99]:
          - cell "Wednesday" [ref=e100]:
            - strong [ref=e101]: Wednesday
          - cell "-" [ref=e102]
          - cell "-" [ref=e103]
          - cell "-" [ref=e104]
          - cell "-" [ref=e105]
          - cell "-" [ref=e106]
        - row "Thursday mm - - ginknaw -" [ref=e107]:
          - cell "Thursday" [ref=e108]:
            - strong [ref=e109]: Thursday
          - cell "mm" [ref=e110]
          - cell "-" [ref=e111]
          - cell "-" [ref=e112]
          - cell "ginknaw" [ref=e113]
          - cell "-" [ref=e114]
        - row "Friday pelatis - - - Night" [ref=e115]:
          - cell "Friday" [ref=e116]:
            - strong [ref=e117]: Friday
          - cell "pelatis" [ref=e118]
          - cell "-" [ref=e119]
          - cell "-" [ref=e120]
          - cell "-" [ref=e121]
          - cell "Night" [ref=e122]
  - contentinfo [ref=e123]:
    - generic [ref=e124]:
      - generic [ref=e125]:
        - img "Logo" [ref=e127]
        - generic [ref=e129]:
          - generic [ref=e130]:
            - heading "คลับ" [level=6] [ref=e131]
            - list [ref=e132]:
              - listitem [ref=e133]:
                - button "ข่าวสาร" [ref=e134] [cursor=pointer]
              - listitem [ref=e135]:
                - button "ตารางเวลา" [ref=e136] [cursor=pointer]
              - listitem [ref=e137]:
                - button "สมาชิก" [ref=e138] [cursor=pointer]
          - generic [ref=e139]:
            - heading "ติดต่อเรา" [level=6] [ref=e140]
            - list [ref=e141]:
              - listitem [ref=e142]:
                - button "พูดคุยกับเรา" [ref=e143] [cursor=pointer]
          - generic [ref=e144]:
            - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e145]
            - list [ref=e146]:
              - listitem [ref=e147]:
                - button "กฎระเบียบข้อบังคับ" [ref=e148] [cursor=pointer]
              - listitem [ref=e149]:
                - button "คำถามที่พบบ่อย" [ref=e150] [cursor=pointer]
        - generic [ref=e151]:
          - img "Logo 2" [ref=e152]
          - generic [ref=e153]:
            - button [ref=e154] [cursor=pointer]:
              - img [ref=e155]
            - button [ref=e157] [cursor=pointer]:
              - img [ref=e158]
            - button [ref=e160] [cursor=pointer]:
              - img [ref=e161]
            - button [ref=e163] [cursor=pointer]:
              - img [ref=e164]
      - separator [ref=e166]
      - generic [ref=e168]:
        - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
        - link "Terms" [ref=e169] [cursor=pointer]:
          - /url: /terms
        - text: "|"
        - link "Privacy" [ref=e170] [cursor=pointer]:
          - /url: /privacy
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const BASE_URL = 'https://myprojectfitnessvercal.vercel.app/';
  4  | 
  5  | test.describe('User Profile and Membership Status', () => {
  6  | 
  7  |   test.beforeEach(async ({ page }) => {
  8  |     await page.goto(`${BASE_URL}login`);
  9  |     await page.getByRole('textbox', { name: 'Username หรือ Email' }).fill('test2@gmail.com');
  10 |     await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('abc123456');
  11 |     await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  12 |   });
  13 | 
  14 |   test('TC-171: ผู้ใช้สามารถเข้าถึงหน้าข้อมูลส่วนตัว (Profile) ได้', async ({ page }) => {
> 15 |     await page.getByRole('link', { name: /ข้อมูลผู้ใช้|Profile/i }).click();
     |                                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  16 |     
  17 |     await expect(page).toHaveURL(/profile/i);
  18 |     await expect(page.locator('body')).toContainText('test2@gmail.com');
  19 |   });
  20 | 
  21 |   test('TC-176: ผู้ใช้ดูสถานะสมาชิกและวันหมดอายุของตนเองได้', async ({ page }) => {
  22 |     await page.goto(`${BASE_URL}profile`);
  23 | 
  24 |     await expect(page.locator('body')).toContainText(/สถานะสมาชิก|หมดอายุ/i);
  25 |   });
  26 | 
  27 | });
```