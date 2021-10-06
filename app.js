var myTable = document.getElementById("my-table")

function adjustments() {
    var date = document.getElementById("date");
    var accountDetails = document.getElementById('accDetails');
    var amount = document.getElementById('amount');
    var entryNature = document.getElementById('entryNature');

    // create table head
    var tablebody = document.createElement("tbody")
    var tr = document.createElement("tr")
    var td1 = document.createElement("td");
    td1Text = date.value;
    var td2 = document.createElement("td");
    td2Text = accountDetails.value;
    var td3 = document.createElement("td");
    var td3Text;
    // td3Text = "";
    var td4 = document.createElement("td");
    // td4Text = "";

    td1.append(td1Text)
    td2.append(td2Text)
    tr.appendChild(td1)
    tr.appendChild(td2)

    if (entryNature.value === "Debit" || entryNature.value === "debit") {
        td3Text = ""
        td3Text = amount.value;
        td3.append(td3Text);
        tr.appendChild(td3)

        // var td4Text;
        // td4Text == "";
        // tr.append(td4Text)
        // tr.appendChild(td4)
    }
    else if (entryNature.value === "Credit" || entryNature.value === "credit") {
        
        td3Text == "";
        var td4Text;
        td4Text == amount.value;
        td4.append(td4Text);
        tr.appendChild(td4)
    }
    else {
        alert("Account should be Debit or Credit")
    }



    tablebody.appendChild(tr);

    // tablebody.appendChild(tr);
    // myTable.appendChild(tablehead)
    myTable.appendChild(tablebody)

}