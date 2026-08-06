# 🚀 Cypress Automation Project

---

This project automates the **SauceDemo** e-commerce website using **Cypress**.

The project covers multiple UI automation scenarios including login validation, product sorting, cart management, checkout, and user validation using different SauceDemo user accounts.

🌐 **Application Under Test:** https://www.saucedemo.com/

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| 🌲 Cypress | UI Test Automation |
| 💛 JavaScript | Test Scripting |
| 🟢 Node.js | Runtime Environment |
| 💻 VS Code | Code Editor |
| 🌿 Git | Version Control |
| 🐙 GitHub | Source Code Repository |

---

# ✅ Automation Scenarios

### Shopping Flow
- ✔️ Login with invalid credentials
- ✔️ Login with valid credentials
- ✔️ Sort products from **A → Z**
- ✔️ Sort products from **Low → High**
- ✔️ Add **4 products** to cart
- ✔️ Remove **2 products** from cart
- ✔️ Proceed to checkout
- ✔️ Complete checkout successfully

### User Validation (Assertions)
- ✔️ Standard User
- ✔️ Locked Out User
- ✔️ Problem User
- ✔️ Performance Glitch User
- ✔️ Error User
- ✔️ Visual User

---

## ✔️ Assertions Covered

- Verify successful login
- Verify inventory page is displayed
- Verify Products title
- Verify locked out error message
- Verify shopping cart updates
- Verify checkout flow
- Verify order confirmation page

---

## 📂 Project Structure

```text
cypress/
│
├── e2e/
│   ├── saucedemo.cy.js
│   ├── practice-login.cy.js
│   └── Assertion.cy.js
│
├── fixtures/
│
├── support/
│   ├── commands.js
│   └── e2e.js
│
package.json
cypress.config.js
README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

---

## ▶️ Run the Tests

Open Cypress

```bash
npx cypress open
```

Run headlessly

```bash
npx cypress run
```

---

## 🎯 Expected Results

- ✅ Invalid users receive an error message.
- ✅ Valid users log in successfully.
- ✅ Products are sorted correctly.
- ✅ Cart updates correctly.
- ✅ Checkout completes successfully.
- ✅ Order confirmation is displayed.
- ✅ All user validation tests pass successfully.

---

## 🚀 Skills Demonstrated

- ✔️ End-to-End Testing
- ✔️ UI Automation
- ✔️ Cypress Assertions
- ✔️ Data-Test Selectors
- ✔️ ID Selectors
- ✔️ Class Selectors
- ✔️ Git & GitHub
- ✔️ Cypress Best Practices

---

## 👩‍💻 Author

**Ajoke Saidat**

*QA Automation Engineer | Cypress Learner*

---

⭐ If you found this project helpful, consider giving it a **star** on GitHub!