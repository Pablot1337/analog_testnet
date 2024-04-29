# Podstawa - wystarczy dostęp do testnetu i internet ;)

1. pobieramy i/lub łączymy jeden ze wspieranych walletów - ja użyłem SubWallet a dopiero później doczytałem że zalecają Talisman ale nie wiem czy to robi różnicę
2. wchodzimy na analog watch - https://watch.testnet.analog.one/ i podpinamy wallet
3. otwieramy swój profil https://watch.testnet.analog.one/#/profile i kopiujemy adres walletu 
4. wchodzimy na discord https://discord.com/invite/analog i po weryfikacji używamy kranika #faucet !faucet adreswalletu
3. tworzymy smart contract:
smart contract address - wchodzimy na https://etherscan.io/tokens, wybieramy dowolny token i bierzemy adres jego smart contractu - najlepiej jakiś z dalszych pozycji bo adres musi być unikalny w skali analogu (ja wziąłem jakiś "I love puppies")
identifier - wedle uznania
tag (tu można użyć np nicka żeby później łatwiej było szukać) - wedle uznania
description (min 20 znaków) - wedle uznania
chain - ethereum
klikamy add functions i wybieramy jedną lub więcej funkcji

# Zaawansowane - wymaga ide/webide
#### Prerekwizyty:
1. seedy walletu
2. utworzony view
3. jakieś ide do uruchamiania kodu - ja używałem https://codesandbox.io/ i poniższe kroki będą zgodne z tym środowiskiem
   tam w szablonie kodu można wybrać javascript

#### SetupSetup ide:
1. dociągamy pakiety (do wpisania w konsoli)
   npm i @analog-labs/timegraph-js\
   npm i @analog-labs/timegraph-wasm\
   npm i @polkadot/keyring\
   npm i @polkadot/util\
   npm i @polkadot/wasm-crypto\

#### Query view
2. Generujemy token sesji\
tworzymy plik w folderze src i kopiujemy kod z pliku ssk.mjs\

pola do uzupełnienia:
linia 15 - adres walletu\
linia 23 - słowa seed - po uruchomieniu kodu można usunąć

uruchamiamy kod z poziomu konsoli:\
  node src/ssk2.mjs\
tworzy się plik .apiKeys\

#### Odpytujemy query
**!!! UWAGA !!!**
> W tym zadaniu poza odpytaniem swojego view, odpytujemy czyjeś i tu fajnie jak byście się wymieniali tymi danymi bo zadanie polega na tym żeby ktoś odpytał wasz view :)

tworzymy plik w folderze src i kopiujemy kod z pliku query.mjs\
pola do uzupełnienia:\
linia 4 - token "ssk" z pliku .apiKeys\
linia 10 - hashid waszego view ze stronki\
linia 11 - 1 lub więcej pól które wybraliście w ramach view - można je podejrzeć na stronie danego view w zakładce definition\
linia 21 - unikalny alias - można dać np swój nick i jakieś cyfry\
linia 22 - hash view którego chcemy użyć - tu jest wstępnie wpisany mój, można zostawić jak jest\
linia 23 - nazwa view które odpytujemy - tu jest wstępnie wpisany mój, można zostawić jak jest\
