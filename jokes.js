const url = "https://official-joke-api.appspot.com/random_joke";

async function getJoke() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("setup").innerText = data.setup;
        document.getElementById("punchline").innerText = data.punchline;
    } catch (error) {
        document.getElementById("setup").innerText = "Failed to load joke!";
        document.getElementById("punchline").innerText = "";
        console.log(error);
    }
}

getJoke();
document.getElementById("refreshBtn").addEventListener("click", getJoke);