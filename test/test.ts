import { sql, utils } from "../src/Main";

const server = sql.create({
    port: 3306,
    host: "localhost",
    database: "main",
    auth: {
        password: "root"
    }
});

server.on("open", () => {
    console.log("The server has been connected");

    server.query.insert({
        table: "_test_",
        data: [
            {
                column: "message",
                value: "" + Math.random()
            },
            {
                column: "id",
                value: "test"
            }
        ]
    })

    server.query.select({
        table: "_test_",
        columns: "*"
    });
});

server.run();
