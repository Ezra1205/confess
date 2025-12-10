function sendConfess() {
    let confess = document.getElementById("confessInput").value;

    if (confess.trim() === "") {
        alert("Pesan tidak boleh kosong!");
        return;
    }

    // Simulasi kirim pesan (tanpa backend)
    console.log("Confess terkirim: " + confess);

    document.getElementById("popup").style.display = "flex";
    document.getElementById("confessInput").value = "";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
