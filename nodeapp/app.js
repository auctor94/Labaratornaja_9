const fs = require("fs");

fs.open('hello.txt', 'a', function(err, fd) {
    if (err) {
       return console.error(err);
    }
   console.log("File opened successfully!");     
 });

function writemassiv() {
    let massivChisel = [];
for (let i = 0; i<100;i++) {
massivChisel[i] = Math.random() * (100 - 10) + 10;
}
fs.appendFile("hello.txt", massivChisel, function(error){
 
    if(error) throw error; // если возникла ошибка
    console.log("yes");
   // let data = fs.readFileSync("hello.txt", "utf8");
    //console.log(data);  // выводим считанные данные
});
fs.appendFile("before.txt", massivChisel, function(error){
 
    if(error) throw error; // если возникла ошибка
    console.log("Recorder to 'before.txt.'");
   // let data = fs.readFileSync("hello.txt", "utf8");
    //console.log(data);  // выводим считанные данные
});
};

 fs.readFile("hello.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});

writemassiv();

var http = require("http");
 
http.createServer(function(request, response){
     
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
    response.setHeader("UserId", 12);
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    response.write("<h2>hello world</h2>");
    response.end();
}).listen(3000);