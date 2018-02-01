let names = [
    { f_name: "Terry", l_name: "Smith"     },
    { f_name: "Teddy",  l_name: "Smith"   },
    { f_name: "Thomas", l_name: "Jefferson" },
    { f_name: "George", l_name: "Washington"},
];
function compare(a,b) {
  if (a.l_name < b.l_name)
    return -1;
  if (a.l_name > b.l_name)
    return 1;
  if (a.l_name = b.l_name)
    if (a.f_name < b.f_name)
      return -1;
    if (a.f_name > b.f_name)
      return 1;
  return 0;
}

console.log(names.sort(compare));
