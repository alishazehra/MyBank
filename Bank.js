import Account from './Account.js';
class Bank {
    accounts = [];
    createAccount(accountNumber, accountHolder) {
        const newAccount = new Account(accountNumber, accountHolder);
        this.accounts.push(newAccount);
        return newAccount;
    }
    getAccount(accountNumber) {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }
    listAccounts() {
        this.accounts.forEach(account => {
            console.log(`${account.accountHolder} - ${account.accountNumber}`);
        });
    }
}
export default Bank;
