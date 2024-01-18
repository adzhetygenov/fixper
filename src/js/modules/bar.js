export function init() {
  const bar = document.querySelectorAll(".js-bar");
  Array.from(bar).map((e) => {
    const rad = e.r.baseVal.value;
    const circumference = 2 * Math.PI * rad;

    e.style.strokeDasharray = `${circumference} ${circumference}`;
    e.style.strokeDashoffset = circumference;
    e.dataset.dashoffset = circumference;

    return circumference;
    //   setProgress(percent);
  });
}

export function setProgress(e) {
  const percent = e.parentNode.nextElementSibling.textContent.replace("%", "");
  const circumference = e.dataset.dashoffset;
  const offset = circumference - (percent / 100) * circumference;
  e.style.strokeDashoffset = offset;
}
