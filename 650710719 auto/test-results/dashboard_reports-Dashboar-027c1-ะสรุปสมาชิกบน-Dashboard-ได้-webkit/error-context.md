# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard_reports.spec.js >> Dashboard and Reports System >> TC-151/152: Admin ดูรายงานจำนวนผู้เข้าใช้และสรุปสมาชิกบน Dashboard ได้
- Location: tests\dashboard_reports.spec.js:15:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected pattern: /รายงานผู้เข้าใช้|Daily Visit/i
Received string:  "SU.ED FITNESS CENTERหน้าแรกตารางเวลาข่าวสารสมาชิกLoginSign Inเข้าสู่ระบบชื่อผู้ใช้ หรือ อีเมลรหัสผ่านลืมรหัสผ่าน?เข้าสู่ระบบยังไม่มีบัญชี? สมัครสมาชิกคลับข่าวสารตารางเวลาสมาชิกติดต่อเราพูดคุยกับเราข้อมูลเพิ่มเติมกฎระเบียบข้อบังคับคำถามที่พบบ่อย© 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |Terms |Privacy"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('body')
    2 × locator resolved to <body>…</body>
      - unexpected value "SU.ED FITNESS CENTERหน้าแรกตารางเวลาข่าวสารสมาชิกLoginSign Inคลับข่าวสารตารางเวลาสมาชิกติดต่อเราพูดคุยกับเราข้อมูลเพิ่มเติมกฎระเบียบข้อบังคับคำถามที่พบบ่อย© 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |Terms |Privacy"
    7 × locator resolved to <body>…</body>
      - unexpected value "SU.ED FITNESS CENTERหน้าแรกตารางเวลาข่าวสารสมาชิกLoginSign Inเข้าสู่ระบบชื่อผู้ใช้ หรือ อีเมลรหัสผ่านลืมรหัสผ่าน?เข้าสู่ระบบยังไม่มีบัญชี? สมัครสมาชิกคลับข่าวสารตารางเวลาสมาชิกติดต่อเราพูดคุยกับเราข้อมูลเพิ่มเติมกฎระเบียบข้อบังคับคำถามที่พบบ่อย© 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |Terms |Privacy"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - link "Fitness Logo SU.ED FITNESS CENTER" [ref=e6]:
        - /url: /
        - img "Fitness Logo" [ref=e7]
        - generic [ref=e8]: SU.ED FITNESS CENTER
      - generic [ref=e10]:
        - link "หน้าแรก" [ref=e11]:
          - /url: /
        - link "ตารางเวลา" [ref=e12]:
          - /url: /schedule
        - link "ข่าวสาร" [ref=e13]:
          - /url: /news
        - link "สมาชิก" [ref=e14]:
          - /url: /package
        - generic [ref=e15]:
          - button "Login" [ref=e16] [cursor=pointer]
          - button "Sign In" [ref=e17] [cursor=pointer]
  - generic [ref=e19]:
    - heading "เข้าสู่ระบบ" [level=2] [ref=e20]
    - generic [ref=e21]:
      - generic [ref=e22]:
        - generic [ref=e23]: ชื่อผู้ใช้ หรือ อีเมล
        - textbox "Username หรือ Email" [ref=e24]
      - generic [ref=e25]:
        - generic [ref=e26]: รหัสผ่าน
        - textbox "กรอกรหัสผ่าน" [ref=e27]
      - link "ลืมรหัสผ่าน?" [ref=e29]:
        - /url: /forgot-password
      - button "เข้าสู่ระบบ" [ref=e30] [cursor=pointer]
      - paragraph [ref=e31]:
        - text: ยังไม่มีบัญชี?
        - link "สมัครสมาชิก" [ref=e32]:
          - /url: /signin
  - contentinfo [ref=e33]:
    - generic [ref=e34]:
      - generic [ref=e35]:
        - img "Logo" [ref=e37]
        - generic [ref=e39]:
          - generic [ref=e40]:
            - heading "คลับ" [level=6] [ref=e41]
            - list [ref=e42]:
              - listitem [ref=e43]:
                - button "ข่าวสาร" [ref=e44] [cursor=pointer]
              - listitem [ref=e45]:
                - button "ตารางเวลา" [ref=e46] [cursor=pointer]
              - listitem [ref=e47]:
                - button "สมาชิก" [ref=e48] [cursor=pointer]
          - generic [ref=e49]:
            - heading "ติดต่อเรา" [level=6] [ref=e50]
            - list [ref=e51]:
              - listitem [ref=e52]:
                - button "พูดคุยกับเรา" [ref=e53] [cursor=pointer]
          - generic [ref=e54]:
            - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e55]
            - list [ref=e56]:
              - listitem [ref=e57]:
                - button "กฎระเบียบข้อบังคับ" [ref=e58] [cursor=pointer]
              - listitem [ref=e59]:
                - button "คำถามที่พบบ่อย" [ref=e60] [cursor=pointer]
        - generic [ref=e61]:
          - img "Logo 2" [ref=e62]
          - generic [ref=e63]:
            - button [ref=e64] [cursor=pointer]:
              - img [ref=e65]
            - button [ref=e67] [cursor=pointer]:
              - img [ref=e68]
            - button [ref=e70] [cursor=pointer]:
              - img [ref=e71]
            - button [ref=e73] [cursor=pointer]:
              - img [ref=e74]
      - separator [ref=e76]
      - generic [ref=e78]:
        - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
        - link "Terms" [ref=e79]:
          - /url: /terms
        - text: "|"
        - link "Privacy" [ref=e80]:
          - /url: /privacy
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const BASE_URL = 'https://myprojectfitnessvercal.vercel.app/';
  4  | 
  5  | test.describe('Dashboard and Reports System', () => {
  6  | 
  7  |   test.beforeEach(async ({ page }) => {
  8  |     // Login เข้าสู่ระบบในบทบาท Admin
  9  |     await page.goto(`${BASE_URL}login`);
  10 |     await page.getByRole('textbox', { name: 'Username หรือ Email' }).fill('admin@gmail.com');
  11 |     await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('password123');
  12 |     await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  13 |   });
  14 | 
  15 |   test('TC-151/152: Admin ดูรายงานจำนวนผู้เข้าใช้และสรุปสมาชิกบน Dashboard ได้', async ({ page }) => {
  16 |     await page.goto(`${BASE_URL}admin/dashboard`);
  17 | 
> 18 |     await expect(page.locator('body')).toContainText(/รายงานผู้เข้าใช้|Daily Visit/i);
     |                                        ^ Error: expect(locator).toContainText(expected) failed
  19 |     
  20 |     await expect(page.locator('body')).toContainText(/สถิติสมาชิก|Member Status/i);
  21 |   });
  22 | 
  23 |   test('TC-180: กรองรายงานตามช่วงเวลาที่เลือกได้สำเร็จ', async ({ page }) => {
  24 |     await page.goto(`${BASE_URL}admin/dashboard`);
  25 | 
  26 |    
  27 |     const filter = page.locator('select').first(); 
  28 |     if (await filter.isVisible()) {
  29 |         await filter.selectOption('monthly');
  30 |         await expect(page).toHaveURL(/filter=monthly|report/i);
  31 |     }
  32 |   });
  33 | 
  34 | });
```