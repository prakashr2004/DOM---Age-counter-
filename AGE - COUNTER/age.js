
let inp = document.querySelector("#cal");
inp.max = new Date().toISOString().split("T")[0];

let result = document.querySelector("#h2");

let calculate = document.querySelector("button");
calculate.addEventListener("click", () => {
    var dob = new Date(inp.value);
    var dob_day = dob.getDate();
    var dob_month = dob.getMonth()+1;
    var dob_year = dob.getFullYear();

    var now = new Date();
    var now_day = now.getDate();
    var now_month = now.getMonth()+1;
    var now_year = now.getFullYear();

    var year, month, day;

    year = now_year - dob_year;
    if(now_month >= dob_month )
    {
        month = now_month - dob_month;
    }
    else
    {
        year--;
        month = 12 + now_month - dob_month;
    }
    if(now_day >= dob_day)
    {
        day = now_day - dob_day;
    }
    else
    {
        month--;
        day = age(dob_year,dob_month) + now_day - dob_day;
    }
    if(month < 0)
    {
        month = 11;
        year--;
    }
    result.innerHTML = year + " Years " + month + " Months " + day + "Days "
});

function age(years, months)
{
    return new Date(years, months, 0).getDate();
}
