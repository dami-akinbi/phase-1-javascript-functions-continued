// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (task = "go to the office") {
  return `This Monday, I will ${task}.`;
};

function wrapAdjective(wrapper = "*") {
  return function (thing = "special") {
    return `You are ${wrapper}${thing}${wrapper}!`;
  };
}
