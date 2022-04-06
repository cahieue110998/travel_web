$(document).ready(function(){
    $('.owl-carousel-io').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplayHoverPause:true,
        responsive:{
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            376: {
                items: 1,
                nav: false,
                dots: true,
            },
            576: {
                items: 1,
                nav: false,
                dots: true,
            },
            768: {
                items: 2,
                nav: false,
                dots: true,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
    $('.owl-carousel-it').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplayHoverPause:true,
        responsive:{
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            376: {
                items: 1,
                nav: false,
                dots: true,
            },
            576: {
                items: 1,
                nav: false,
                dots: true,
            },
            768: {
                items: 2,
                nav: false,
                dots: true,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });
    $('.owl-carousel-if').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        autoplayHoverPause:true,
        responsive:{
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            376: {
                items: 1,
                nav: false,
                dots: true,
            },
            576: {
                items: 1,
                nav: false,
                dots: true,
            },
            768: {
                items: 2,
                nav: false,
                dots: true,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });
    /*-----------------------
       Price Range
    -------------------------*/
    $('.btn-price-range').click(function(){
        $('#form-pr-range').slideToggle(500,'linear');
    });

    /*-----------------------
        Collapsible Panel Accordian JQ Tour Detail
    -------------------------*/
    $('.accordion.active .accordion-body').slideDown();
    $('.accordion-header').click(function(){
        $(this).parent().toggleClass('active');
        $(this).parent().children('.accordion-body').slideToggle();
    });

    /*-----------------------
       Product Single Slider
    -------------------------*/
    $(".ps-slider").owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        items: 4,
        dots: false,
        navText: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

     /*-----------------------
       Tab item list tour
    -------------------------*/
    // Hàm active tab nào đó
    function activeTab(obj)
    {
        // Xóa class active tất cả các tab
        $('.tab-wrapper ul li').removeClass('active');
        // Thêm class active vòa tab đang click
        $(obj).addClass('active');
        // Lấy href của tab để show content tương ứng
        var id = $(obj).find('a').attr('href');
        // Ẩn hết nội dung các tab đang hiển thị
        $('.tab-item').hide();
        // Hiển thị nội dung của tab hiện tại
        $(id) .show();
    }
    // Sự kiện click đổi tab
    $('.tab li').click(function(){
        activeTab(this);
        return false;
    });

    // Select2
    $('#select2-form-index').select2({
        placeholder: "Type of Tour"
    });
    
    //Check paypal Page CheckOut
    $('.check-paypal').on('change', function() {
        $('.check-paypal').not(this).prop('checked', false);  
    });

    //rating-star
    var allStar = $('#rating-star').children('ion-icon');
    console.log(allStar);
    for(let i = 0; i < 5; i++) {
        var star = allStar.eq(i);
        star.on("click", function() {
            getColorStar('#C4C4C4', 5);
            getColorStar('#FFB612', i); 
        });
    }
    function getColorStar(color, number) {
        for(let i = 0; i <= number; i++) {
            allStar.eq(i).css('color', color);
        }
    }

    //ẩn owl-prev khi load trang
    $('.owl-prev:eq(0)').css('display','none');
    $('.owl-prev:eq(1)').css('display','none');
    $('.owl-prev:eq(2)').css('display','none');
    $('.owl-next:eq(0)').click(function() {
        $('.owl-prev:eq(0)').css('display','block');
    });
    $('.owl-next:eq(1)').click(function() {
        $('.owl-prev:eq(1)').css('display','block');
    });
    $('.owl-next:eq(2)').click(function() {
        $('.owl-prev:eq(2)').css('display','block');
    });
    
    // Backtop, form booking disable
    $('.backtop').fadeOut();
    $('.formbooking').fadeOut();
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('.backtop').fadeIn();
            $('.formbooking').fadeIn();
        } else {
            $('.backtop').fadeOut();
            $('.formbooking').fadeOut();
        }
    });
    $('.backtop').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    });

    //Date Time Picker
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    $('#datepickerDetail').datepicker({
        onRender: function (date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        },
        onSelect: function(d,i){
            if(d !== i.lastVal){
                $(this).change();
            }
        }
    }).on('changeDate', function(){
        getDateDetail();
    });
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    function getDateDetail() {
        let datepickerDetail = document.getElementById('datepickerDetail').value;
        let dayOfTour = Number(document.getElementById('durationDetail').innerHTML.slice(0,2));
        let dateCheckIn = new Date(datepickerDetail);
        dateCheckIn.setDate(dateCheckIn.getDate() + dayOfTour);
        let mCheckOut = checkTime((dateCheckIn.getMonth()+1));
        let dCheckOut = checkTime(dateCheckIn.getDate());
        document.getElementById('datepickerDetail').value = datepickerDetail + ' - ' + (mCheckOut + '/' + dCheckOut + '/' + dateCheckIn.getFullYear());
    }

    // document.getElementById('datepickerTourBooking').innerHTML = document.getElementById('datepickerDetail').innerHTML;

    $('#datepickerheader').datepicker({
        onRender: function (date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    });

    //Date Time Picker
    $('#dateTourCheckout').datepicker({
        onRender: function (date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        },
        onSelect: function(d,i){
            if(d !== i.lastVal){
                $(this).change();
            }
        }
    }).on('changeDate', function(){
        getDateCheckout();
    });
    function getDateCheckout() {
        let datepickerDetail = document.getElementById('dateTourCheckout').value;
        let dayOfTour = Number(document.getElementById('durationCheckout').innerHTML.slice(0,2));
        let dateCheckIn = new Date(datepickerDetail);
        dateCheckIn.setDate(dateCheckIn.getDate() + dayOfTour);
        let mCheckOut = checkTime((dateCheckIn.getMonth()+1));
        let dCheckOut = checkTime(dateCheckIn.getDate());
        document.getElementById('dateTourCheckout').value = datepickerDetail + ' - ' + (mCheckOut + '/' + dCheckOut + '/' + dateCheckIn.getFullYear());
    }

        
    var durationDetails = localStorage.getItem("durationDetail");
    var totalDetails = localStorage.getItem("totalDetail");
    var countPeoples = localStorage.getItem("countPeople");
    var datepickerDetails = localStorage.getItem("datepickerDetail");
    var pricePeoples = localStorage.getItem("pricePeople");
    document.getElementById('durationCheckout').innerHTML = durationDetails;
    document.getElementById('totalCheckout').innerHTML= totalDetails;
    document.getElementById('countPeopleCheckout').value= countPeoples;
    document.getElementById('dateTourCheckout').value= datepickerDetails;
    document.getElementById('pricePeopleCheckOut').value= pricePeoples;

    //formCheckOut
    document.getElementById('countPeopleCheckout').addEventListener('change', function(){
        let countPeople = document.getElementById('countPeopleCheckout').value;
        let pricePeoples = document.getElementById('pricePeopleCheckOut').value;
        document.getElementById('totalCheckout').innerHTML = '$' + (pricePeoples * countPeople);
    });
});


    //toggle menu header index
    const toggle = document.querySelector("#mobile-menu-wrap");
    const menu = document.querySelector(".header-index .header-top .nav-menu ul");
    const menuTour = document.querySelector(".header-tour .header-top .nav-menu ul");
    const menuContact = document.querySelector(".header-contact .header-top .nav-menu ul");
    const menuDetail = document.querySelector(".header-detail .header-top .nav-menu ul");
    const reClass = document.querySelector("#remove-menu");
    const activeClass = "is-show";

    toggle.addEventListener("click", function(){
        menu.classList.add(activeClass);
        reClass.classList.add(activeClass);
    });
    reClass.addEventListener("click", function(){
        reClass.classList.remove(activeClass);
    });
    window.addEventListener("click", function(e){
        if(!menu.contains(e.target) && !e.target.matches("#mobile-menu-wrap")){
            menu.classList.remove(activeClass);
            reClass.classList.remove(activeClass);
        }
    });

    toggle.addEventListener("click", function(){
        menuTour.classList.add(activeClass);
        reClass.classList.add(activeClass);
    });
    reClass.addEventListener("click", function(){
        reClass.classList.remove(activeClass);
    });
    window.addEventListener("click", function(e){
        if(!menuTour.contains(e.target) && !e.target.matches("#mobile-menu-wrap")){
            menuTour.classList.remove(activeClass);
            reClass.classList.remove(activeClass);
        }
    });

    toggle.addEventListener("click", function(){
        menuContact.classList.add(activeClass);
        reClass.classList.add(activeClass);
    });
    reClass.addEventListener("click", function(){
        reClass.classList.remove(activeClass);
    });
    window.addEventListener("click", function(e){
        if(!menuContact.contains(e.target) && !e.target.matches("#mobile-menu-wrap")){
            menuContact.classList.remove(activeClass);
            reClass.classList.remove(activeClass);
        }
    });

    toggle.addEventListener("click", function(){
        menuDetail.classList.add(activeClass);
        reClass.classList.add(activeClass);
    });
    reClass.addEventListener("click", function(){
        reClass.classList.remove(activeClass);
    });
    window.addEventListener("click", function(e){
        if(!menuDetail.contains(e.target) && !e.target.matches("#mobile-menu-wrap")){
            menuDetail.classList.remove(activeClass);
            reClass.classList.remove(activeClass);
        }
    });

    //checkbox filter priceranger listtour
    $('.check-duration').on('change', function() {
        $('.check-duration').not(this).prop('checked', false);  
    });
    $('.check-typeoftour').on('change', function() {
        $('.check-typeoftour').not(this).prop('checked', false);  
    });
    $('#clearAttr').on('click', function() {
        $('.check-duration').not(this).prop('checked', false);  
        $('.check-typeoftour').not(this).prop('checked', false);
    });

    // Backtop, form booking disable
    $('.backtop').fadeOut();
    $('.formbooking').fadeOut();
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('.backtop').fadeIn();
            $('.formbooking').fadeIn();
        } else {
            $('.backtop').fadeOut();
            $('.formbooking').fadeOut();
        }
    });
    $('.backtop').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    });
    
//formDetail
document.getElementById('total-mo').style.fontWeight = 'bold';
document.getElementById('total-mo').innerHTML = '$' + Number(document.getElementById('price-tour-people').innerHTML);
document.getElementById('countPeople').addEventListener('change', function(){
    let pricePeople = Number(document.getElementById('price-tour-people').innerHTML);
    let countPeople = document.getElementById('countPeople').value;
    document.getElementById('total-mo').innerHTML = '$' + pricePeople * countPeople;
});

// form BookNow
document.getElementById('total-mo-booking').style.fontWeight = 'bold';
document.getElementById('total-mo-booking').innerHTML = '$' + Number(document.getElementById('price-tour-peopleB').innerHTML);
document.getElementById('countPeopleBooking').addEventListener('change', function(){
    let pricePeople = Number(document.getElementById('price-tour-peopleB').innerHTML);
    let countPeople = document.getElementById('countPeopleBooking').value;
    document.getElementById('total-mo-booking').innerHTML = '$' + pricePeople * countPeople;
});


document.getElementById('bookingDetail').addEventListener('click', function(){
    let totalDetail = document.getElementById('total-mo').innerHTML;
    let durationDetail = document.getElementById('durationDetail').innerHTML;
    let countPeople = document.getElementById('countPeople').value;
    let datepickerDetail = document.getElementById('datepickerDetail').value;
    let pricePeople = Number(document.getElementById('price-tour-people').innerHTML);
    if(countPeople < 1 || datepickerDetail == ''){
        location.href();
    }

    localStorage.setItem("durationDetail", durationDetail);
    localStorage.setItem("totalDetail", totalDetail);
    localStorage.setItem("countPeople", countPeople);
    localStorage.setItem("datepickerDetail", datepickerDetail);
    localStorage.setItem("pricePeople", pricePeople);
    window.location.href="checkout.html";
});