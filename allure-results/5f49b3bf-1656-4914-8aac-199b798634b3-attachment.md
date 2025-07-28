# Page snapshot

```yaml
- banner:
  - text: Banking Dashboard
  - button "account of current user": S
- navigation:
  - separator
  - list:
    - listitem: Dashboard
    - listitem: Accounts
    - listitem: Transfer
    - listitem: Transactions
    - listitem: Pay via QR
    - listitem: Profile
    - listitem: KYC Status
    - listitem: Reports
    - listitem: Change Password
    - listitem: Assignments
    - listitem: UPI Payment
- main:
  - heading "Change Password" [level=5]
  - text: Current Password
  - textbox "Current Password"
  - text: New Password
  - textbox "New Password"
  - text: Confirm New Password
  - textbox "Confirm New Password"
  - button "Change Password"
- paragraph:
  - text: Crafted with code, caffeine, and a little magic by
  - link "Tech with Jatin":
    - /url: https://techwithjatin.com/
  - text: ⚡️💥
- alert:
  - img
  - text: Login successful!
- button "close"
- progressbar "notification timer"
```