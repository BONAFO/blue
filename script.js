document.getElementById("perro").onclick = () => {
    navigator.bluetooth.requestDevice({acceptAllDevices: true});
};
