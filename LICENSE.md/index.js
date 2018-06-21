$(document).ready(() => {


        $('#get-data-title').click(() => {

                $('.Year-section').css('display', 'none'); //Based on the choice search by other parameters is hidden
                $('.ID-section').css('display', 'none'); //Based on the choice search by other parameters is hidden
                $('container-out').css('paddding', '5%');
                searchByTitle();

        }) // end get data-title

        $('#get-data-year').click(() => {

                $('.Title-section').css('display', 'none'); //Based on the choice search by other parameters is hidden
                $('.ID-section').css('display', 'none'); //Based on the choice search by other parameters is hidden
                $('container-out').css('paddding', '5%');
                searchByYear();

        }) // end get data-year

        $('#get-data-id').click(() => {

                $('.Year-section').css('display', 'none'); //Based on the choice search by other parameters is hidden
                $('.Title-section').css('display', 'none'); //Based on the choice search by other parameters is hidden
                $('container-out').css('paddding', '5%');
                searchById();

        }) // end get data-id


}); // end of document.ready()

let searchByTitle = () => {

        let probar = `<div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="10" aria-valuemax="90" style="width: 100%"></div>
        </div>`;
        $('#showData-Title').append(probar);//Progress Bar
        $.ajax({
                type: "GET",
                url: "http://www.omdbapi.com/",
                data: "i=tt3896198&apikey=5a6a3a52",  //API key
                success: (data) => { // in case of success response
                        console.log(data)
                        $('button').keyup(() => {
                                let movieTitle = $('.movieTitle').val();
                                if (data.Title == movieTitle) { //To get the user input
                                        if (data.Poster != undefined) {//Poster
                                                let pic = $('<img class="poster">');
                                                pic.attr('src', data.Poster);
                                                $('#showData-Title').append(pic);
                                        } else {
                                                var pic = $('<img class="poster">');
                                                pic.attr('src', 'movie.jpg');
                                                ('#showData-Title').append(pic);

                                        }

                                        let tempRow = `<div class="card">
                                        <div class="card-body">
                                        <h5 class="card-title">By Title</h5>
                                        <p class="card-text">${JSON.stringify(data)}</p>
  </div>
</div>`
                                        $('.progress').css('display','none');

                                        $("#showData-Title").append(tempRow); // placing data in division with id - 'showData'
                                } else if (movieTitle == "") {
                                        alert('Please input the non-null value for the Title')
                                } else {
                                        let tempRow = ` <div class="row">
                                              <div class="col">Movie with the given name is not in the database</div>
                                         </div>`

                                         $('.progress').css('display','none');

                                        $("#showData-Title").append(tempRow); // placing data in division with id - 'showData'
                                }
                        })

                },
                error: (data) => { // in case of error response

                        alert("some error occured")

                },

                beforeSend: () => { // while request is processing.

                        console.log("request is being made. please wait");

                },
                complete: () => {

                        console.log("data fetched success");

                },

                timeout: 2500 // this is in milli seconds
        }); //Document Ready function complete
}

let searchById = () => {

        let probar = `<div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="10" aria-valuemax="90" style="width: 100%"></div>
        </div>`;
        $('#showData-Id').append(probar);//Progess Bar

        $.ajax({
                type: "GET",
                url: "http://www.omdbapi.com/",
                data: "i=tt3896198&apikey=5a6a3a52",//API Key
                success: (data) => { // in case of success response
                        console.log(data)
                        $('button').keyup(() => {
                                let movieId = $('.movieId').val();
                                if (data.imdbID == movieId) {//User Response Handling
                                        if (data.Poster != undefined) {//Poster handling
                                                let pic = $('<img class="poster">');
                                                pic.attr('src', data.Poster);
                                                $('#showData-Id').append(pic);
                                        } else {
                                                var pic = $('<img class="poster">');
                                                pic.attr('src', 'movie.jpg');
                                                ('#showData-Id').append(pic);

                                        }

                                        let tempRow = `<div class="card">
           <div class="card-body">
             <h5 class="card-title">By Id</h5>
             <p class="card-text">${JSON.stringify(data)}</p>
           </div>
         </div>`

                                        $('.progress').css('display','none');

                                        $("#showData-Id").append(tempRow); // placing data in division with id - 'showData'
                                } else if (movieId == "") {
                                        alert('Please input the non-null value for the ID')
                                } else {
                                        let tempRow = ` <div class="row">
                                              <div class="col">Movie with the given ID is not in the database</div>
                                         </div>`

                                         $('.progress').css('display','none');

                                        $("#showData-Id").append(tempRow); // placing data in division with id - 'showData'
                                }
                        })

                },
                error: (data) => { // in case of error response

                        alert("some error occured")

                },

                beforeSend: () => { // while request is processing.

                        console.log("request is being made. please wait");

                },
                complete: () => {

                        console.log("data fetched success");

                },

                timeout: 2500 // this is in milli seconds



        }); //Document Ready function complete
}

let searchByYear = () => {

        let probar = `<div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="10" aria-valuemax="90" style="width: 100%"></div>
        </div>`;
        $('#showData-Year').append(probar);//Progress Bar

        $.ajax({
                type: "GET",
                url: "http://www.omdbapi.com/",
                data: "i=tt3896198&apikey=5a6a3a52",//API Key
                success: (data) => { // in case of success response
                        console.log(data)
                        $('button').keyup(() => {
                                let movieYear = $('.movieYear').val();
                                if (data.Year == movieYear) {//User response handling

                                        if (data.Poster != undefined) {//Poster Handling
                                                let pic = $('<img class="poster">');
                                                pic.attr('src', data.Poster);
                                                $('#showData-Year').append(pic);
                                        } else {
                                                var pic = $('<img class="poster">');
                                                pic.attr('src', 'movie.jpg');
                                                ('#showData-Year').append(pic);

                                        }
                                        let tempRow = `<div class="card">
                   <div class="card-body">
                   <h5 class="card-title">By Year</h5>
                   <p class="card-text">${JSON.stringify(data)}</p>
                   </div>
                   </div>`

                                        $('.progress').css('display','none');

                                        $("#showData-Year").append(tempRow); // placing data in division with id - 'showData'
                                } else if (movieYear == "") {
                                        alert('Please input the non-null value for the Year')
                                } else {
                                        let tempRow = ` <div class="row">
                                              <div class="col">Movie with the given Year is not in the database</div>
                                         </div>`

                                        $('.progress').css('display','none');

                                        $("#showData-Year").append(tempRow); // placing data in division with id - 'showData'
                                }
                        })

                },
                error: (data) => { // in case of error response

                        alert("some error occured")

                },

                beforeSend: () => { // while request is processing.

                        console.log("request is being made. please wait");

                },
                complete: () => {
                        console.log("data fetched success");

                },

                timeout: 2500 // this is in milli seconds



        }); //Document Ready function complete
}
