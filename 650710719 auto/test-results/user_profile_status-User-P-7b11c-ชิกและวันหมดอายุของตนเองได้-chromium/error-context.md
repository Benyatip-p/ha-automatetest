# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user_profile_status.spec.js >> User Profile and Membership Status >> TC-176: ผู้ใช้ดูสถานะสมาชิกและวันหมดอายุของตนเองได้
- Location: tests\user_profile_status.spec.js:21:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected pattern: /สถานะสมาชิก|หมดอายุ/i
Received string:  "SU.ED FITNESS CENTERหน้าแรกตารางเวลาข่าวสารสมาชิกLoginSign Inคลับข่าวสารตารางเวลาสมาชิกติดต่อเราพูดคุยกับเราข้อมูลเพิ่มเติมกฎระเบียบข้อบังคับคำถามที่พบบ่อย© 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |Terms |Privacy"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('body')
    9 × locator resolved to <body>…</body>
      - unexpected value "SU.ED FITNESS CENTERหน้าแรกตารางเวลาข่าวสารสมาชิกLoginSign Inคลับข่าวสารตารางเวลาสมาชิกติดต่อเราพูดคุยกับเราข้อมูลเพิ่มเติมกฎระเบียบข้อบังคับคำถามที่พบบ่อย© 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |Terms |Privacy"

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
        - generic [ref=e15]:
          - button "Login" [ref=e16] [cursor=pointer]
          - button "Sign In" [ref=e17] [cursor=pointer]
  - contentinfo [ref=e18]:
    - generic [ref=e19]:
      - generic [ref=e20]:
        - img "Logo" [ref=e22]
        - generic [ref=e24]:
          - generic [ref=e25]:
            - heading "คลับ" [level=6] [ref=e26]
            - list [ref=e27]:
              - listitem [ref=e28]:
                - button "ข่าวสาร" [ref=e29] [cursor=pointer]
              - listitem [ref=e30]:
                - button "ตารางเวลา" [ref=e31] [cursor=pointer]
              - listitem [ref=e32]:
                - button "สมาชิก" [ref=e33] [cursor=pointer]
          - generic [ref=e34]:
            - heading "ติดต่อเรา" [level=6] [ref=e35]
            - list [ref=e36]:
              - listitem [ref=e37]:
                - button "พูดคุยกับเรา" [ref=e38] [cursor=pointer]
          - generic [ref=e39]:
            - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e40]
            - list [ref=e41]:
              - listitem [ref=e42]:
                - button "กฎระเบียบข้อบังคับ" [ref=e43] [cursor=pointer]
              - listitem [ref=e44]:
                - button "คำถามที่พบบ่อย" [ref=e45] [cursor=pointer]
        - generic [ref=e46]:
          - img "Logo 2" [ref=e47]
          - generic [ref=e48]:
            - button [ref=e49] [cursor=pointer]:
              - img [ref=e50]
            - button [ref=e52] [cursor=pointer]:
              - img [ref=e53]
            - button [ref=e55] [cursor=pointer]:
              - img [ref=e56]
            - button [ref=e58] [cursor=pointer]:
              - img [ref=e59]
      - separator [ref=e61]
      - generic [ref=e63]:
        - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
        - link "Terms" [ref=e64] [cursor=pointer]:
          - /url: /terms
        - text: "|"
        - link "Privacy" [ref=e65] [cursor=pointer]:
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
  15 |     await page.getByRole('link', { name: /ข้อมูลผู้ใช้|Profile/i }).click();
  16 |     
  17 |     await expect(page).toHaveURL(/profile/i);
  18 |     await expect(page.locator('body')).toContainText('test2@gmail.com');
  19 |   });
  20 | 
  21 |   test('TC-176: ผู้ใช้ดูสถานะสมาชิกและวันหมดอายุของตนเองได้', async ({ page }) => {
  22 |     await page.goto(`${BASE_URL}profile`);
  23 | 
> 24 |     await expect(page.locator('body')).toContainText(/สถานะสมาชิก|หมดอายุ/i);
     |                                        ^ Error: expect(locator).toContainText(expected) failed
  25 |   });
  26 | 
  27 | });
```