const http = require("http");

const server = http.createServer((req, res) => {
  // console.log('req', req)
  // const serverInfo = {
  //   serverName: "CodeSandBox Server",
  //   version: "1.0.0",
  //   currentDate: new Date().toDateString(),
  //   currentTime: new Date().toTimeString(),
  // };
  // res.writeHead(200, { "Content-Type": "application/json"}); // mentioning what type of response I am sending
  // res.write(JSON.stringify(serverInfo)); // what data I am sending
  // res.end(); // ending response
  //   if (req.url === "/status") {
  //     const serverInfo = {
  //       serverName: "CodeSandBox Server",
  //       version: "1.0.0",
  //       currentDate: new Date().toDateString(),
  //       currentTime: new Date().toTimeString(),
  //     };
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.write(JSON.stringify(serverInfo)); //Stringify the response
  //     res.end();
  //   } else {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.write("<h1>Hello from server</h1>"); //Stringify the response
  //     res.end();
  //   }
  const { data } = require("./DB/currency.json");

  //   /currencies/inr -> ["", "currencies", "inr"]
  const splitURL = req.url.split("/");
  const symbol = splitURL[splitURL.length - 1];
  console.log(symbol);

  switch (req.url) {
    case "/": {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Currency Database</h1>");
      res.end();
      break;
    }
    case "/currencies": {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(data));
      res.end();
      break;
    }
    case `/currencies/${symbol}`: {
      const result = data.find(
        (elem) => elem.id.toLowerCase() === symbol.toLowerCase()
      );
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(result));
      res.end();
      break;
    }
    default: {
      res.writeHead(404);
      res.write("Route not found!");
      res.end();
    }
  }
});

server.listen(7000, () => {
  console.log("Listening!!");
});
