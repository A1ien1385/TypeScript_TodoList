//union type czyli zmienna może przyjąć albo string, albo number
const logAge = (age: number | string) => {
  console.log(`hej mam ${age} lat`);
};

logAge(24);
logAge("dwadzieścia osiem");
