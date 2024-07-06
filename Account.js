class Account {
    accountNumber;
    accountHolder;
    balance;
    constructor(accountNumber, accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log('Invalid deposit amount');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log('Invalid withdraw amount or insufficient funds');
        }
    }
    getBalance() {
        return this.balance;
    }
}
export default Account;
