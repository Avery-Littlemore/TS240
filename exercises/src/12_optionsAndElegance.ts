// Expand the Contact type alias from exercise 8 to make age and isOnline optional properties.

type Contact2 = {
  firstName: string;
  lastName: string;
  age?: number;
  isOnline?: boolean;
};

// Expected outcome:

// The Contact type alias with optional age and isOnline properties.

const contactWithoutAge: Contact2 = {
  firstName: "John",
  lastName: "Doe",
  // 'age' and 'isOnline' not provided, and that's okay now!
};