const express = require("express");

const config = require("./environment");

const app = express();

const port = config.port;
const host = config.host;
const apiKey = config.apiKey;

console.log("PORT", port);
app.get("/", (req, res) => {
    // let link = document.createElement("a");
    // a.setAttribute(
    // "href",
    // "https://be-13-env-mrbubbles-src-render-test.onrender.com/halloIchBinEinApiKey"
    // );
    // a.innerHTML = "Click me";
    // document.body.appendChild(a);
    res.send(
        `To get to the test site <a href="https://be-13-env-mrbubbles-src-render-test.onrender.com/halloIchBinEinApiKey">Click Me</a>`
    );

    // res.send(`You can finde the test site ${link}`);
});
app.get(`/${apiKey}`, (req, res) => {
    res.send("Hi Api Key");
});

app.listen(port, () => {
    console.log(`Server available at http://${host}:${port}/${apiKey}`);
});
