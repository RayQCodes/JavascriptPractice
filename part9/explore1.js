//time function demo
function hellopragalv() {
  console.log("hello pragalv its me your apprentice");
}

setTimeout(() => {
  return hellopragalv();
}, 2000);

for (let index = 0; index < 10; index++) {
  console.log(index);
}
