// Baisc
// Get the http module from core node
const http = require('http');

// Get file system
const fs = require('fs');

// Callback fun for the server's req and response
function rqListener(req, res) {
    const url = req.url;
    const method = req.method;


    if (req.url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Server</title></head>");
        res.write("<body>");
        res.write("<form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    } else if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            fs.writeFileSync("temp.txt", parsedBody);
        });
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>My First Server</title></head>");
    res.write("<body>");
    res.write("<h1> Hello from my nodejs web server </h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
}

// Create server and pass the listener
const server = http.createServer(rqListener);

// Start listening the server
server.listen(3000);


// Assignment 1
// const http = require("http");

// const server = http.createServer((req, res) => {
//   //console.log(req);
//   const url = req.url;
//   if (url === "/") {
//     res.setHeader("Content-Type", "text/Html");
//     res.write("<html>");
//     res.write("<body>");
//     res.write("<form action='/create-user' method='post'>");
//     res.write("<input name='user'> </input>");
//     res.write("<button type='submit'> Submit </button>");
//     res.write("</form>");
//     res.write("</body>");
//     res.write("</html>");
//     res.end();
//   } else if (url === "/create-user" && req.method === "POST") {
//     res.setHeader("Content-Type", "text/Html");
//     const data = [];
//     req.on("data", (chunk) => {
//       data.push(chunk);
//       console.log(chunk);
//     });
//     req.on("end", () => {
//       const parsedData = Buffer.concat(data).toString();
//       user = parsedData.split("=")[1];
//       console.log(user);
//     });

//     res.write("<html>");
//     res.write("<body>");
//     res.write(`<h2> User Details </h2>`);
//     res.write("</body>");
//     res.write("</html>");
//     res.end();
//   } else if (url === "/users") {
//     res.setHeader("Content-Type", "text/Html");
//     res.write("<html>");
//     res.write("<body>");
//     res.write("<h1> List of Users </h1>");
//     res.write("<ul>");
//     res.write("<li> User1 </li>");
//     res.write("<li> User1 </li>");
//     res.write("<li> User1 </li>");
//     res.write("</ul>");
//     res.write("</body>");
//     res.write("</html>");
//     res.end();
//   }
// });

// server.listen(3000);