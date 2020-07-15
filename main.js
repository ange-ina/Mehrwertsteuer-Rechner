function funcNorB(num) {
    if (num == 0) {
        document.getElementById("nettoOrBrutto").innerHTML = "Nettobetrag (Preis ohne Mehrwertsterer) in Euro"
    } else if (num == 1) {
        document.getElementById("nettoOrBrutto").innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro"
    }
}

function berechnen() {
    let NB = document.getElementById("form1").NorB.value
    let mwSteuer = document.getElementById("form1").MWSteuer.value
    let input = document.getElementById("inputNum").value
    let result
    let bwsBetrag
    if (NB == "NzuB") {
        result = input * mwSteuer
        bwsBetrag = result - input
        document.getElementById("resultNorB").innerHTML = "Bruttobetrag (Endpreis)"
    } else if (NB == "BzuN") {
        result = input / mwSteuer
        bwsBetrag = input - result
        document.getElementById("resultNorB").innerHTML = "Nettobetrag"
    }
    document.getElementById("resultM").innerHTML = `${bwsBetrag.toFixed(2)} €`
    document.getElementById("resultBetrag").innerHTML = `${result.toFixed(2)} €`
}


