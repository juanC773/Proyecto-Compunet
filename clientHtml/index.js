const communicator = Ice.initialize();


async function initProcess() {
    const hostname = document.location.hostname || "127.0.0.1";
    const proxy = communicator.stringToProxy(`chat:ws -h ${hostname} -p 10000`);
    const chat = await services.HelloPrx.checkedCast(proxy);
    const message = await chat.sayHello();
    const helloMessage = document.getElementById("helloMessage");
    helloMessage.innerHTML = message;
}

initProcess();