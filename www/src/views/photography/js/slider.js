$(document).ready(function() {
    Slider().init(
        ".slider-ctner", 
        [
            {
                "url": 
                "https://cdn.images.express.co.uk/img/dynamic/151/590x/Black-hole-picture-please-time-date-first-image-black-hole-event-horizon-telescope-1112295.jpg?r=1554889792953", "link":"https://cdn.images.express.co.uk/img/dynamic/151/590x/Black-hole-picture-please-time-date-first-image-black-hole-event-horizon-telescope-1112295.jpg?r=1554889792953"
            }, 
            {
                "url": "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg", 
                "link":"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
            }, 
            {"url": "https://www.devialet.com/media/picture/image/r/e/reactor_push_app_alive_desktop2.jpg", 
            "onClick": function() {console.log("lol")}
        }
    ], 
    5000);
});