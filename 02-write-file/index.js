const fs = require("fs");
const path = require("path");
const { stdin, stdout } = process;
fs.writeFile(path.join("02-write-file", "write.txt"), "", (err) => {
  if (err) throw err;
  stdout.write("Введите текст\n");
});

stdin.on("data", (data) => {
  if (data.toString().trim() === "exit") {
    stdout.write("Прощай!");
    process.exit();
  } else {
    fs.appendFile(path.join("02-write-file", "write.txt"), data, (err) => {
      if (err) throw err;
    });
    stdout.write("Текст записан. Можете продолжить.\n");
  }
});
process.on("SIGINT", () => {
  stdout.write("Прощай!\n");
  process.exit();
});
