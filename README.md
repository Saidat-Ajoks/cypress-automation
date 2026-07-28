
# 🚀 Cypress Automation Project


---

This project automates the **SauceDemo** e-commerce website using **Cypress**.

The automation validates the complete shopping journey by using **data-test** selectors, following QA automation best practices.

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

# ✅ Automated Test Scenarios

✔️ Login with invalid credentials

✔️ Login with valid credentials

✔️ Sort products from **A → Z**

✔️ Sort products from **Low → High**

✔️ Add **4 products** to cart

✔️ Remove **2 products** from cart

✔️ Proceed to checkout

✔️ Complete checkout successfully

---

## 📂 Project Structure

```text
cypress/
│
├── e2e/
│   └── saucedemo.cy.js
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

✅ Invalid users receive an error message.

✅ Valid users log in successfully.

✅ Products are sorted correctly.

✅ Four products are added to the cart.

✅ Two products are removed successfully.

✅ Checkout is completed successfully.

✅ Order confirmation page is displayed.

---

## 🚀 Skills Demonstrated

- ✔️ End-to-End Testing
- ✔️ UI Automation
- ✔️ Assertions
- ✔️ Data-Test Selectors
- ✔️ Git & GitHub
- ✔️ Cypress Best Practices

---

## 👩‍💻 Author

**Ajoke Saidat**

*QA Automation Engineer | Cypress Learner*

---

⭐ If you found this project helpful, consider giving it a **star** on GitHub!