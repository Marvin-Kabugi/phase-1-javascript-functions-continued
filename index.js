function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`);
}

let mondayWork = function (activity = "go to the office"){
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(vis = "*"){
    return function (def = "special")
    {
        return (`You are ${vis}${def}${vis}!`);
    }
}