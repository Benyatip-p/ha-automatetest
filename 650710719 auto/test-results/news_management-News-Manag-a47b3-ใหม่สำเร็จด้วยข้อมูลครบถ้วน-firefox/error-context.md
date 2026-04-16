# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: news_management.spec.js >> News Management System >> TC-179: เพิ่มข่าวสารใหม่สำเร็จด้วยข้อมูลครบถ้วน
- Location: tests\news_management.spec.js:9:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel(/หัวข้อ/i)

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
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class NewsPage {
  4  |   readonly page: Page;
  5  |   readonly titleInput: Locator;
  6  |   readonly contentInput: Locator;
  7  |   readonly typeSelect: Locator; // เพิ่มตัวแปรสำหรับ combobox
  8  |   readonly saveButton: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     this.titleInput = page.getByLabel(/หัวข้อ/i);
  13 |     this.contentInput = page.getByLabel(/เนื้อหา/i);
  14 |     this.typeSelect = page.getByRole('combobox');
  15 |     this.saveButton = page.getByRole('button', { name: /บันทึก/i });
  16 |   }
  17 | 
  18 |   async fillNewsForm(title: string, content: string, typeLabel: string) {
> 19 |     await this.titleInput.fill(title);
     |                           ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  20 |     await this.contentInput.fill(content);
  21 |     await this.typeSelect.selectOption({ label: typeLabel });
  22 |     await this.saveButton.click();
  23 |   }
  24 | }
```