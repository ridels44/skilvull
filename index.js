const form = document.querySelector(".form-group");
const table = document.getElementById("table").lastElementChild;

const template = (d1, d2, d3, d4, d5) => {
  const tr = `<tr>
              <td>${d5}</td>
              <td>${d1}</td>
              <td>${d2}</td>
              <td>${d3}</td>
              <td>${d4}</td>
            </tr>`;
  table.innerHTML += tr;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.getElementById("chekbox").checked) {
    const fn = form.firstname.value.trim();
    const ln = form.lastname.value.trim();
    const zp = form.zip.value.trim();
    const pc = form.postalcode.value.trim();
    const no = Number(table.lastElementChild.firstElementChild.textContent) + 1;
    template(fn, ln, zp, pc, no);
    alert("Thank You " + fn + " For Register");
  }
  form.reset();
});
