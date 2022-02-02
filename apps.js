$(() => {
 const feriadosChile = $("#feriadosChile");

    $.ajax({
      url: `https://www.feriadosapp.com/api/holidays.json`,
      type: "GET",
      dataType: "JSON",
      success(data) {
      //console.log(data);
       feriadosChile.html("");
        Object.keys(data).forEach((item) => {
          console.log(data);
          feriadosChile.append(`
          <thead>
              <tr>
                <th scope="col">Fecha: ${data.data[0].date}</th>
                <th scope="col">Feriado: ${data.data[0].title}</th>
                <th scope="col">Ley: ${data.data[0].law_id}</th>
                <th scope="col">${data.data[0].extra}</th>
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
