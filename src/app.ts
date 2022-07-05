//union type czyli zmienna może przyjąć albo string, albo number, albo boolean
const logAge = (age: number | string | boolean) => {
  console.log(`hej mam ${age} lat`);
};

logAge(24);
logAge("dwadzieścia osiem");
logAge(true);
