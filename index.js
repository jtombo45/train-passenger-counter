
//These where used to get the value of the number listed:
let count = Number($("#count-el").text())
let storeCount = []

$("#increment-btn").click(function() {
    count += 1
    $("#count-el").text(count)
});

$("#decrement-btn").click(function() {
    if(count > 0){
        count -= 1
        $("#count-el").text(count)
    }
    else{
        alert("Count can't be less than zero!!!")
    }

});

$("#save-btn").click(function() {
    storeCount.push(count)
    console.log(storeCount)
    let prev = storeCount.toString()
    $("#prev-entries").text(prev)
});