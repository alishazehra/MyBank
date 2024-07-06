class Account {
    private balance: number;

    constructor(public accountNumber: string, public accountHolder: string) {
        this.balance = 0;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log('Invalid deposit amount');
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        } else {
            console.log('Invalid withdraw amount or insufficient funds');
        }
    }
    getBalance(): number {
        return this.balance;
    }
}

export default Account;
