$(() => {
 const feriadosChile = $("#feriadosChile");

    $.ajax({
      url: `https://www.feriadosapp.com/api/holidays.json`,
      type: "GET",
      dataType: "JSON",
      success(data) {
      //console.log(data);
       feriadosChile.html("");
       data.data.forEach((item) => {
          
          feriadosChile.append(`
          <thead>
              <tr>
                <th scope="col">${item.date}</th>
                <th scope="col">${item.title}</th>
                <th scope="col">Ley: ${item.law_id}</th>
                <th scope="col">${item.extra}</th>
              </tr>
          </thead>
          <tbody>
          
          `);
        });
      },
      error(err) {
        console.log(err);
    } 
  });
});
