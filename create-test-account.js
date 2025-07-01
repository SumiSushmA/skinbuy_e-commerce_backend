// create-test-account.js
import nodemailer from "nodemailer";

(async () => {
  // this spins up a disposable Ethereal SMTP account
  let testAccount = await nodemailer.createTestAccount();
  console.log(testAccount);
})();
