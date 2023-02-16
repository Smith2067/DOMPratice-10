const heading = document.getElementById("color");
const headingParent = heading.parentNode;
const newPargraph = document.createElement('p');
newPargraph.setAttribute("id", "color")
newPargraph.textContent = "new replacement element";
headingParent.replaceChild(newPargraph, heading);