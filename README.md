
# 🚀 Cypress Automation Project

## 📌 Project Overview

This project contains automated UI tests for the **SauceDemo** e-commerce website using **Cypress**.

The purpose of this project is to demonstrate practical UI test automation skills, including login validation and shopping cart functionality.

---

## 🌐 Application Under Test

Website: https://www.saucedemo.com/

---

## 🛠 Technologies Used

- Cypress
- JavaScript
- Node.js
- Git
- GitHub

---

## 📂 Project Structure

```
cypress-automation/
│
├── cypress/
│   ├── e2e/
│   │   ├── practice-login.cy.js
│   │   └── saucedemos.cy.js
│   ├── fixtures/
│   └── support/
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ✅ Test Scenarios

### Login Test

- Open SauceDemo website
- Enter valid username
- Enter valid password
- Click Login
- Verify successful login
- Verify Inventory page is displayed

---

### Add to Cart Test

- Login successfully
- Add **Sauce Labs Backpack** to cart
- Verify cart badge displays **1**
- Verify item was added successfully

---

## ▶️ Running the Project

Install dependencies

```bash
npm install
```

Open Cypress

```bash
npx cypress open
```

Run tests in headless mode

```bash
npx cypress run
```

---

## 🎯 Learning Objectives

This project demonstrates my ability to:

- Write Cypress test cases
- Use Cypress commands and assertions
- Automate UI workflows
- Organize test files
- Manage projects with Git and GitHub

---

## 👩‍💻 Author

**Ajoke Saidat**

Aspiring Quality Assurance Automation Engineer

GitHub:
https://github.com/Saidat-Ajoks
