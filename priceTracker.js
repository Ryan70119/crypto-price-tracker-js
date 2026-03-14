async function getPrice() {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd";

    const response = await fetch(url);
    const data = await response.json();

    console.log("Bitcoin price:", data.bitcoin.usd, "USD");
    console.log("Ethereum price:", data.ethereum.usd, "USD");
}

getPrice();
