<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Barangay Imbatug | Contact</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="{{ asset('frontend/img/favicon.ico') }}" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap" rel="stylesheet"> 

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="{{ asset('frontend/lib/animate/animate.min.css') }}" rel="stylesheet">
    <link href="{{ asset('frontend/lib/owlcarousel/assets/owl.carousel.min.css') }}" rel="stylesheet">
    <link href="{{ asset('frontend/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css') }}" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="{{ asset('frontend/css/bootstrap.min.css') }}" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="{{ asset('frontend/css/style.css') }}" rel="stylesheet">
</head>

<body>
    <!-- Spinner Start -->
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <!-- Spinner End -->


    <!-- Topbar Start -->
    <div class="row gx-0 d-none d-lg-flex" style="background-color: #F7C7A3; ">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small class="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>Imbatug, Baungon, Bukidnon</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center py-3">
                    <small class="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 05:00 AM - 05:00 PM</small>
                </div>
            </div>
            
        </div>
    </div>
    <!-- Topbar End -->
        


    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s" style="background: gainsboro">
        <a href="{{ route('barangay.home') }}" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h3 class="m-0 text-primary"><img src="{{ asset('upload/imbatug logo.png') }}" alt="Logo" style="width: 50px; height: auto; margin-right: 10px;">Barangay Imbatug</h3>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="{{ route('barangay.home') }}" class="nav-item nav-link ">Home</a>
                <a href="{{ route('barangay.about') }}" class="nav-item nav-link ">About</a>
                <a href="{{ route('barangay.service') }}" class="nav-item nav-link ">Services</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle " data-bs-toggle="dropdown">Officials</a>
                    <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                        <a href="{{ route('officials') }}" class="dropdown-item">Elected Officers for the term of 2018-2020</a>
                        <a href="#" class="dropdown-item">Elected Officers for the term of 2010-2013</a>
                    </div>
                </div>
                <a href="" class="nav-item nav-link">Ordinance</a>
                <a href="{{ route('barangay.contact') }}" class="nav-item nav-link active">Contact</a>

            </div>
            {{-- <a href="{{ route('admin.login') }}" class="btn rounded-0 py-4 px-lg-5 d-none d-lg-block" style="background: #F7C7A3; color:black; font-weight:bold;">LOGIN<i class="fa fa-arrow-right ms-3"></i></a> --}}
        </div>
    </nav>
    <!-- Navbar End -->


    <!-- Page Header Start -->
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <h1 class="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb text-uppercase mb-0">
                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                    <li class="breadcrumb-item text-primary active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Page Header End -->


    <!-- About Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="row">
                        <div class="col-lg-6">
                            <h1 class="mb-0" style="font-size: 20px; color: orange">Address</h1>
                            <p>Imbatug, Baungon, Bukidnon</p>
                        </div>
                        <div class="col-lg-6">
                            <h1 class="mb-0" style="font-size: 20px; color: orange">Office Hours</h1>
                            <p>Monday to Friday <br> 8am to 5pm</p>
                        </div>
                    </div>
                    
                    <br>
                    <h1 class="mb-0" style="font-size:20px; color:orange">Contact Number</h1>
                    <p>09093276281</p>
                    
                    <br>
                    <h1 class="mb-0" style="font-size:20px;color:orange">Email Address</h1>
                    <p>brgyimbatug@gmail.com</p>
                    
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="d-flex flex-column">
                        <img class="img-fluid rounded align-self-end" style="margin-top: 5-px;margin-right:90px" src="{{ asset('frontend/img/police-hotline.jpg') }}" alt="">
                    </div>
                </div>
                
            </div>
        </div>
    </div>


    <!-- Contact Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-4">
                    
                    
                        
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style="margin-top: 40px; margin-bottom:20px;">
                    <h1>SOCIALS</h1>
                    <P>Connect with us on our social media accounts</P>
                    <div class="h-100" style="min-height: 500px;">
                        <iframe class="rounded w-100 h-100"
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FImbatug16&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        frameborder="0" allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                    </div>
                </div>
                
                
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style="margin-top: 40px;>
                    <div class="h-100" style="min-height: 400px;">
                        <iframe class="rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6660.593225677796!2d124.68099891003492!3d8.314229036114725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff9aaadfbbf1cf%3A0x7f6dfbe7423106aa!2sImbatug%20Barangay%20Hall!5e1!3m2!1sen!2sph!4v1696691514284!5m2!1sen!2sph>"
                        frameborder="0" allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact End -->


    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-light footer mt-5 pt-2 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6" style="text-align: center; margin-right: 120px; ">
                    <img src="{{ asset('upload/imbatug logo.png') }}" alt="Image Description" style="width: 200px; height: auto; margin-left: -15px;">
                    <p>Province of Bukidnon <br>
                    Municipality of Baungon <br>
                    Barangay Imbatug</p>
                </div>
                <div class="col-lg-3 col-md-6" style="margin-right: 120px;">
                    <h5 class="text-light mb-4" style="margin-top: 50px;">Address</h5>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Imbatug, Baungon, Bukidnon</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>brgyimbatug@gmail.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social rounded-circle" href="#"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social rounded-circle" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social rounded-circle" href="#"><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social rounded-circle" href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6" >
                    <h5 class="text-light mb-4" style="margin-top: 50px;">Quick Links</h5>
                    <a class="btn btn-link" href="#">About Us</a>
                    <a class="btn btn-link" href="#">Contact Us</a>
                    <a class="btn btn-link" href="#">Officials</a>
                    <a class="btn btn-link" href="#">Ordinance</a>
                    <a class="btn btn-link" href="#">Services</a>
                </div>
                
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">BarangayImbatug.org</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                        Designed By <a class="border-bottom" href="#">USTP - R2 Students</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="fas fa-chevron-up"></i></a>



    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="{{ asset('frontend/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('frontend/lib/wow/wow.min.js') }}"></script>
    <script src="{{ asset('frontend/lib/easing/easing.min.js') }}"></script>
    <script src="{{ asset('frontend/lib/waypoints/waypoints.min.js') }}"></script>
    <script src="{{ asset('frontend/lib/counterup/counterup.min.js') }}"></script>
    <script src="{{ asset('frontend/lib/owlcarousel/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('frontend/lib/tempusdominus/js/moment.min.js') }}"></script>
    <script src="{{ asset('frontend/lib/tempusdominus/js/moment-timezone.min.js') }}"></script>
    <script src="{{ asset('frontend/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js') }}"></script>

    <!-- Template Javascript -->
    <script src="{{ asset('frontend/js/main.js') }}"></script>
</body>

</html>