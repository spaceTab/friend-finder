// $(function () {
//     console.log('here')
//     $('.submit').on("click", () => {
//         event.preventDefault();

//         const VALIDATE = () => {
//             let isValid = true;

//             $(".validate").each(function () {
//                 if (!$(this).val()) isValid = false;
//             });
//             $('.browser-default').each(function () {
//                 if (!$(this).val()) isValid = false;
//             });
//             console.log(isValid)
//             return isValid;
//         }

//         if (VALIDATE()) {

//             let usrData = {
//                 name: $("#name").val().trim(),
//                 img: $("#img").val().trim()
//             }

//             let usrScores = [];
//             console.log('here');
//             $(".browser-default").each(function () {
//                 usrScores.push($(this).val());
//                 console.log($(this));
//             }).promise().done(() => {
//                 usrData.score = usrScores;

//             })
//             let URL = window.location.origin;

//             $.post(`${URL}/api/friends`, usrData, (data) => {
//                 console.log('data', usrData);
//                 console.log(data);
//                 console.log(URL);
//                 // if (data) {
//                 //     $('.modal-content').empty();
//                 //     $('#matchName').val('');
//                 //     $('#matchImg').val('');
//                 //     $('.browser-default').each(function () {
//                 //         $(this).val('');
//                 //     })

//                 //     data.forEach(elem => {
//                 //         let $cheeseDiv = $('<div class="friendmatch">');
//                 //         let $imageDiv = $('<div class="friendImg">');
//                 //         let cheese = elem.name;
//                 //         let url = elem.img;

//                 //         let banner = $('<h2>').text(cheese);
//                 //         let photo = $('<img>').attr('src', url)

//                 //         $cheeseDiv.append(banner);
//                 //         $imageDiv.append(photo);
//                 //         $('.modal-content').append($cheeseDiv, $imageDiv);
//                 //     });
//                 // }
//             })
//         } else {
//             $('.modal-content').empty();
//             let $err = $(`<h4 class="error">You need to fill out the whole form!</h4>`);
//             let $errDiv = $(`<div class="modal-error">`).append($err);
//             $('.modal-content').append($errDiv);
//         }

//         // attemp to fix the 500 internal error

//         // $('#btn').on("click", function () {
//         //     location.reload();
//         // })
//         $('.modal').modal();
//         $('select').formSelect();
//     });
// });


$(function () {

    $('.submit').on('click', () => {
        event.preventDefault();

        const VALIDATE = () => {

            let isValid = true;

            $('.validate').each(function () {
                if (!$(this).val()) isValid = false;
            });

            $('.browser-default').each(function () {
                if (!$(this).val()) isValid = false;
            });

            return isValid;
        }

        if (VALIDATE()) {
            // objectifaction of cheese
            let usrData = {
                name: $('#name').val().trim(),
                photo: $('#img').val().trim(),
            };

            let scores = [];
            // loop through the questions to get the score of each
            $('.browser-default').each(function () {
                // push the answers to scores
                scores.push($(this).val());
            }).promise().done(() => {
                usrData.scores = scores;
            })

            let URL = window.location.origin;
            // console.log(URL);

            $.post(`${URL}/api/friends`, usrData, (element) => {
                if (element) {
                    $('.modal-content').empty();
                    $('#name').val('');
                    $('#img').val('');
                    $('.browser-default').each(function () {
                        $(this).val('');
                    });

                    element.forEach(elem => {
                        let $cheeseDiv = $('<div class="friendmatch">');
                        let $imageDiv = $('<div class="friendImg">');
                        let cheese = elem.name;
                        let url = elem.img;

                        let banner = $('<h2>').text(cheese);
                        let photo = $('<img>').attr('src', url)

                        $cheeseDiv.append(banner);
                        $imageDiv.append(photo);
                        $('.modal-content').append($cheeseDiv, $imageDiv);

                    });

                    let $title = $(`<h3 class="title">`);
                    // if (element.length > 1) {
                    //     $title.text('Your best matches');
                    //     $('.modal-content').prepend($title);
                    // } else {
                        // $title.text('Your best match!');
                        // $('.modal-content').prepend($title);
                    

                    $title.text('Your best match!');
                    $('.modal-content').prepend($title);
                }
            });
        } else {
            $('.modal-content').empty();
            let $err = $(`<h4>you've missed a question</h4>`);
            let $errDiv = $(`<div class="modal-error">`).append($err);
            $('.modal-content').append($errDiv);
            let error = $(`<h3>OH NO!</h3>`);
            $('.modal-content').prepend(error);
        }
    });

    M.AutoInit();
    // $('.modal').modal();
    // $('select').formSelect();
    // $('.parallax').parallax();
});



