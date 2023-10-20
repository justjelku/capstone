<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Barangay Imbatug | Officials</title>
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
                    <a href="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Officials</a>
                    <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                        <a href="{{ route('officials') }}" class="dropdown-item">Elected Officers for the term of 2018-2020</a>
                        <a href="#term2" class="dropdown-item">Elected Officers for the term of 2010-2013</a>
                    </div>
                </div>
                <a href="{{ route('ordinance') }}" class="nav-item nav-link">Ordinance</a>
                <a href="{{ route('barangay.contact') }}" class="nav-item nav-link">Contact</a>

            </div>
            {{-- <a href="{{ route('admin.login') }}" class="btn rounded-0 py-4 px-lg-5 d-none d-lg-block" style="background: #F7C7A3; color:black; font-weight:bold;">LOGIN<i class="fa fa-arrow-right ms-3"></i></a> --}}
        </div>
    </nav>
    <!-- Navbar End -->


    <!-- Page Header Start -->
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <h1 class="display-3 text-white mb-3 animated slideInDown">Barangay Officials</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb text-uppercase mb-0">
                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                    <li class="breadcrumb-item text-primary active" aria-current="page">Officials</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Page Header End -->


    <!-- Team Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <p class="d-inline-block rounded-pill py-1 px-4" style="color: orange; font-size: 30px; border: 2px solid orange;">Officials</p>
                <h1>Current Barangay Officials</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 wow fadeInUp " data-wow-delay="0.1s" style="margin-bottom: 20px;margin-left:25%">
                    <div class="team-item  rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off1.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>Gelbes E. Vergara</h5>
                            <p class="text-primary">Barangay Captain</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off8.jpg') }}" alt="" style="width: 300px">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5> Francis A. Beja</h5>
                            <p class="text-primary">SK Chairperson</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off2.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>Annabelle M. Maputol</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off3.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>Marifel L. Palma</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off3.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>Rosa S. Rapirap</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off3.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>Marjorie C. Jaraula</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
            </div>
            {{-- new set --}}
            <div class="row g-4" style="margin-top: 20px">
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off2.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5> Mardine Y. Evangelista</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off1.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5> Marlo A. Ligan</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off1.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>Mark Anthony A. Botes</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off1.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5> Jeson A. Ministerio</h5>
                            <p class="text-primary">Barangay Secretary</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Team End -->
    {{-- new set --}}

    <div class="container-xxl py-5" id="term2">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h1> Barangay Officials Year 2010-2013</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 wow fadeInUp " data-wow-delay="0.1s" style="margin-bottom: 20px;margin-left:25%">
                    <div class="team-item  rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off1.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>Gelbes E. Vergara</h5>
                            <p class="text-primary">Barangay Captain</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off8.jpg') }}" alt="" style="width: 300px">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5> Francis A. Beja</h5>
                            <p class="text-primary">SK Chairperson</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off2.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>Annabelle M. Maputol</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off3.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>Marifel L. Palma</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off3.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>Rosa S. Rapirap</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off3.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>Marjorie C. Jaraula</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
            </div>
            {{-- new set --}}
            <div class="row g-4" style="margin-top: 20px">
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off2.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5> Mardine Y. Evangelista</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off1.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5> Marlo A. Ligan</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off1.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>Mark Anthony A. Botes</h5>
                            <p class="text-primary">Barangay Kagawad</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="{{ asset('frontend/img/off1.jpg') }}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5> Jeson A. Ministerio</h5>
                            <p class="text-primary">Barangay Secretary</p>
                            {{-- <div class="team-social text-center">
                                <a class="btn btn-square" href="https://www.facebook.com/Imbatug16"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div> --}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        

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
    <script src="{{ asset('frontend/js/bootstrap.bundle.min.js') }}https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/"></script>
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