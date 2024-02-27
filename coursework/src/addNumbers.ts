function addNumbers1(a: number, b: number): number {
  return a + b;
}

type AddNumbersParams = Parameters<typeof addNumbers1>;
type AddNumbersReturnType = ReturnType<typeof addNumbers1>;

type AddNumbersFunction = (args: AddNumbersParams) => AddNumbersReturnType;