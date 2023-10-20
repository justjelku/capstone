<!DOCTYPE html>

<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="Responsive HTML Admin Dashboard Template based on Bootstrap 5">
	{{-- <meta name="author" content="NobleUI"> --}}
	{{-- <meta name="keywords" content="nobleui, bootstrap, bootstrap 5, bootstrap5, admin, dashboard, template, responsive, css, sass, html, theme, front-end, ui kit, web"> --}}

	<title>Login</title>

    <style type="text/css">

    .authlogin-side-wrapper{
        width: 100%;
        height: 100%;
    }


    </style>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
  <!-- End fonts -->

	<!-- core:css -->
	<link rel="stylesheet" href="{{ asset('backend/assets/vendors/core/core.css') }}">
	<!-- endinject -->

	<!-- Plugin css for this page -->
	<!-- End plugin css for this page -->

	<!-- inject:css -->
	<link rel="stylesheet" href="{{ asset('backend/assets/fonts/feather-font/css/iconfont.css') }}">
	<link rel="stylesheet" href="{{ asset('backend/assets/vendors/flag-icon-css/css/flag-icon.min.css') }}">
	<!-- endinject -->

  <!-- Layout styles -->  
	<link rel="stylesheet" href="{{ asset('backend/assets/css/demo2/style.css') }}">
  <!-- End layout styles -->

  <link rel="shortcut icon" href="{{ asset('backend/assets/images/favicon.png') }}" />
</head>

<div class="main-wrapper" style="background-image: url('frontend/img/bg.jpg');">
    <div class="page-wrapper full-page" >
        <div class="page-content d-flex align-items-center justify-content-center">
            <div class="row w-100 mx-0 auth-page"  >
                <div class="col-md-8 col-xl-6 mx-auto">
                    <div class="card border-primary" style="width: 700px; height:auto;  box-shadow: 0 0 10px orange;">
                        <div class="row">
                            <div class="col-md-5 pe-md-0">
                                <div class="text-center">
                                    <img src="{{ asset('upload/imbatug logo.png') }}" alt="Logo" class="img-fluid" style="width: 200px; height:auto; margin-top:45px;">
                                    <p class="mt-2" style="font-size: 30px">Brgy. Imbatug</p>
                                </div>
                            </div>                            
                            <div class="col-md-7 ps-md-0" style="background-color: blanchedalmond;">
                                <div class="auth-form-wrapper px-4 py-5">
                                    <a href="{{ route('barangay.home') }}" class="btn btn-outline-danger btn-icon-text mb-2 position-absolute top-0 start-0 m-3">
                                        <i class="feather icon-arrow-left"></i> Back
                                    </a>
                                    {{-- <a href="#" class="noble-ui-logo logo-light d-block mb-2">Barangay<span>Imbatug</span></a> --}}
                                    <h5 class="text-muted fw-normal mb-4" style="font-size: 20px">Welcome back! Log in to your account.</h5>

                                    <form class="forms-sample" method="post" action="{{ route('login') }}">
                                        @csrf
                                        <div class="mb-3">
                                            <label for="login" class="form-label" style="font-size: 15px">Username</label>
                                            <input type="text" name="login" class="form-control custom-bg-input" id="login" placeholder="Enter username" style="background-color: transparent; color:black">
                                        </div>

                                        <div class="mb-3">
                                            <label for="userPassword" class="form-label" style="font-size: 15px">Password</label>
                                            <input type="password" name="password" class="form-control" id="password" autocomplete="current-password" placeholder="Enter password" style="background-color: transparent;color:black">
                                        </div>
                                        <div class="mb-3">
                                            <input type="checkbox" class=" " id="authCheck">
                                            <label class=" " for="authCheck">Remember me</label>
                                        </div>
                                        
                                        <div>
                                            <button type="submit" class="btn btn-outline-primary btn-icon-text mb-2 mb-md-0" style="color: black">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

	<!-- core:js -->
	<script src="{{ asset('backend/assets/vendors/core/core.js') }}"></script>
	<!-- endinject -->

	<!-- Plugin js for this page -->
	<!-- End plugin js for this page -->

	<!-- inject:js -->
	<script src="{{ asset('backend/assets/vendors/feather-icons/feather.min.js')}}"></script>
	<script src="{{ asset('backend/assets/js/template.js')}}"></script>
	<!-- endinject -->

	<!-- Custom js for this page -->
	<!-- End custom js for this page -->

</body>
</html>