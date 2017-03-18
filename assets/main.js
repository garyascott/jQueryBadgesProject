$(function() {

    $.ajax({
        url: 'https://www.codeschool.com/users/tenPin.json',
        dataType: 'jsonp',
        success: (response) => {
            // handle response
            let completed = response.courses.completed,
                courses = '';
            const COMPLETELENGTH = completed.length;

            for (let i = 0; i < COMPLETELENGTH; i++) {
                courses += `<div class="course">
                <h3>${completed[i]['title']}</h3>
                <img src="${completed[i]['badge']}"/>
                <a href="${completed[i]['url']}" target="_blank" class="btn btn-primary">
                See Course
                </a>
                </div>`
            }
            $('#badges').html(courses);

            //console.log(completed);
        }
    });

});