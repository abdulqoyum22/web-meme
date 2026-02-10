const pairAddress = "7ytzYSBJKpZxesdBJbcgf5aZauX9ArnjPoBtfjt74e2A";

async function loadTokenData() {
    try {
        const res = await fetch(`https://api.dexscreener.com/latest/dex/pairs/solana/${pairAddress}`);

        const data = await res.json();
        const pair = data.pairs[0];

            if (pair) {
        document.getElementById("price").textContent = "$" + Number(pair.priceUsd).toFixed(6);
        document.getElementById("liquidity").textContent = "$" + Math.round(pair.liquidity.usd).toLocaleString();
        document.getElementById("mc").textContent = "$" + Math.round(pair.fdv).toLocaleString();
        document.getElementById("vol").textContent = "$" + Math.round(pair.volume.h24).toLocaleString();
            }
    } catch (err) {
        console.log("error loading token data", err);
    }
}

loadTokenData();
setInterval(loadTokenData, 10000);


function copyCA() {
    const caText = document.getElementById("ca-text").innerHTML;

    navigator.clipboard.writeText(caText);

    const btn = document.querySelector(".copy-btn");
    btn.textContent = "Copied!";
    btn.style.backgroundColor = "#39ff14";

    setTimeout(() => {
        btn.textContent = "&#128203;";
        btn.style.backgroundColor = "#00f2ff";
    }, 2000);
}