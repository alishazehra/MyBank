import Account from './Account.js';

class Bank {
    private accounts: Account[] = [];

    createAccount(accountNumber: string, accountHolder: string): Account {
        const newAccount = new Account(accountNumber, accountHolder);
        this.accounts.push(newAccount);
        return newAccount;
    }

    getAccount(accountNumber: string): Account | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    listAccounts(): void {
        this.accounts.forEach(account => {
            console.log(`${account.accountHolder} - ${account.accountNumber}`);
        });
    }
}

export default Bank;
