import { TimegraphClient } from "@analog-labs/timegraph-js";
const timeGraphClient = new TimegraphClient({
  url: "https://timegraph.testnet.analog.one/graphql", // A url to Watch GraphQL instance.
  sessionKey: "ssk", // bierzemy z pliku .apikeys
});

// QUERY NA SWÓJ VIEW

const response = await timeGraphClient.view.data({
  hashId: "hashid", // bierzemy ze swojego view w analog watch portal
  fields: ["field"], // wybieramy pole
  limit: "5",
});
console.log(response);


//QUERY NA CZYJŚ VIEW - tu jest podany mój, jednyne co trzeba zrobić to ustawić swój alias

//tworzenie aliasu
const aliasResponse = await timeGraphClient.alias.add({
  name: "", // nazwa dowolna
  hashId: "QmcyYBUP7WD8kAhfXCjg3szXTUBGezErWZ2Sy81uscFKJi", //hashid view który chcemy pytać
  identifier: "checkowner", // nazwa view który chcemy pytac
});
console.log(aliasResponse);

//odpytanie
const response2 = await timeGraphClient.view.data({
  hashId: "QmcyYBUP7WD8kAhfXCjg3szXTUBGezErWZ2Sy81uscFKJi", //hashid view który chcemy pytać
  fields: ["name"], // wybieramy pole
  limit: "3",
});
console.log(response2);
