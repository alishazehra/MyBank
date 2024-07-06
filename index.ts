#! /usr/bin/env node
import  inquirer from "inquirer"
import Bank from './Bank.js';

const bank = new Bank();

async function mainMenu() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Create Account', 'Deposit', 'Withdraw', 'Check Balance', 'List Accounts', 'Exit'],
        },
    ]);

    switch (answers.action) {
        case 'Create Account':
            await createAccount();
            break;
        case 'Deposit':
            await deposit();
            break;
        case 'Withdraw':
            await withdraw();
            break;
        case 'Check Balance':
            await checkBalance();
            break;
            case 'Exit':
                return;
        }
    
        await mainMenu();
    }
    
    async function createAccount() {
        const answers = await inquirer.prompt([
            { type: 'input', name: 'accountNumber', message: 'Enter account number:' },
            { type: 'input', name: 'accountHolder', message: 'Enter account holder name:' },
        ]);
    
        const account = bank.createAccount(answers.accountNumber, answers.accountHolder);
        console.log(`Account created for ${account.accountHolder} with account number ${account.accountNumber}`);
    }
    
    async function deposit() {
        const answers = await inquirer.prompt([
            { type: 'input', name: 'accountNumber', message: 'Enter account number:' },
            { type: 'number', name: 'amount', message: 'Enter amount to deposit:' },
        ]);
    
        const account = bank.getAccount(answers.accountNumber);
        if (account) {
            account.deposit(answers.amount);
        } else {
            console.log('Account not found');
        }
    }
    
    async function withdraw() {
        const answers = await inquirer.prompt([
            { type: 'input', name: 'accountNumber', message: 'Enter account number:' },
            { type: 'number', name: 'amount', message: 'Enter amount to withdraw:' },
        ]);
    
        const account = bank.getAccount(answers.accountNumber);
        if (account) {
            account.withdraw(answers.amount);
        } else {
            console.log('Account not found');
        }
    }
    
    async function checkBalance() {
        const answers = await inquirer.prompt([
            { type: 'input', name: 'accountNumber', message: 'Enter account number:' },
        ]);
    
        const account = bank.getAccount(answers.accountNumber);
        if (account) {
            console.log(`Balance for account ${account.accountNumber}: ${account.getBalance()}`);
        } else {
            console.log('Account not found');
        }
    }
    
    function listAccounts() {
        bank.listAccounts();
    }
    
    mainMenu();
    
            