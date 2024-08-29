//const Immutable = "Immutable";

const Wifi = {
  IP4: "192.168.10.150",
  IP6: "3002:0bd6:ee00:0033:6778",
  PublicIP: "183.938.123.99",
};
console.log(Wifi);

const Wifi2 = {
  ...Wifi,
  Passwort: 123456789,
};

console.log(Wifi2);

const Wifi3 = {
  ...Wifi,
  IP4: "123.456.10.100",
};
console.log(Wifi3);

const { IP4, ...Wifi4 } = Wifi;
console.log(Wifi4);
