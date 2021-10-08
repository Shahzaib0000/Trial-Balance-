var myTable = document.getElementById("my-table")

function adjustments() {
    var date = document.getElementById("date");
    var accountDetails = document.getElementById('accDetails');
    var amount = document.getElementById('amount');
    var entryNature = document.getElementById('entryNature');

    // create table head
    var tablebody = document.createElement("tbody")
    var tr = document.createElement("tr")
    tr.setAttribute("id" ,"tablerow")
    var td1 = document.createElement("td");
    td1Text = date.value;
    var td2 = document.createElement("td");
    td2Text = accountDetails.value;
    var td3 = document.createElement("td");
    var td3Text;
    var td4 = document.createElement("td");


    td1.append(td1Text)
    td2.append(td2Text)
    tr.appendChild(td1)
    tr.appendChild(td2)

    if (entryNature.value === "Debit" || entryNature.value === "debit") {
        td3Text = ""
        td3Text = amount.value;
        td3.append(td3Text);
        tr.appendChild(td3)

        var emptyell = document.createElement("td");
        emptyCellText = "";
        emptyell.append(emptyCellText);
        tr.appendChild(emptyell);
    }

    else if (entryNature.value === "Credit" || entryNature.value === "credit") {
        var emptyell = document.createElement("td");
        emptyCellText = "";
        emptyell.append(emptyCellText);
        tr.appendChild(emptyell);

        var td4Text;
        td4Text = amount.value;
        td4.append(td4Text);
        tr.appendChild(td4)
    }
    else {
        alert("Account should be Debit or Credit")
    }
    tablebody.appendChild(tr);
    myTable.appendChild(tablebody)

    // creating trial balance making button
}
function trialbalance() {
        window.location = "trialbalance/trial.html";
}
