// Create an interface Account with properties username (string), email (string), and accountCreationDate 
// (a string that cannot be changed after creation).

// Expected outcome:

// An interface Account where accountCreationDate cannot be modified.

interface Account {
  username: string,
  email: string,
  readonly accountCreationDate: string,
}

let newAccount: Account = {
  username: 'Ave',
  email: 'Lit',
  accountCreationDate: '2023'
}

newAccount.username = 'Avery';
// newAccount.accountCreationDate = '2024';