<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('backend/assets/vendors/core/core.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/fonts/feather-font/css/iconfont.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/vendors/flag-icon-css/css/flag-icon.min.css') }}">  
    <link rel="stylesheet" href="{{ asset('backend/assets/css/demo2/style.css') }}">
    <link rel="shortcut icon" href="{{ asset('image/logo.png') }}" />
   
</head>
<body>
    <div class="main-wrapper" style="background-image: url('frontend/img/bg.jpg');">
        <div class="page-wrapper full-page">
            <div class="page-content d-flex align-items-center justify-content-center">    
                <div class="row w-100 mx-0 auth-page">                  
                    <div class="col-md-8 col-xl-6 mx-auto">
                        <div class="card border-primary" style="width: 700px; height:auto;  box-shadow: 0 0 10px orange;">
                            <div class="row">
                                <div class="col-md-5 pe-md-0">
                                    <div class="text-center">
                                        <img src="{{ asset('image/logo.png') }}" alt="Logo" class="img-fluid" style="width: 200px; height:auto; margin-top:45px;">
                                        <p class="mt-2" style="font-size: 30px">Brgy. Imbatug</p>
                                    </div>
                                </div>                            
                                <div class="col-md-7 ps-md-0" style="background-color: blanchedalmond;">
                                    <div class="auth-form-wrapper px-4 py-5">
                                        @if($errors->any())
                                        <div class="alert alert-danger" role="alert">
                                            {{ $errors->first() }}
                                        </div>
                                        @endif
                                    -
                                        <a href="{{ route('barangay.home') }}" class="btn btn-outline-danger btn-icon-text mb-2 position-absolute top-0 start-0 m-3">
                                            <i class="feather icon-arrow-left"></i> Back
                                        </a>
                                        <h5 class="text-muted fw-normal mb-4" style="font-size: 20px">Welcome back! Log in to your account.</h5>
                                        <form class="forms-sample" method="post" action="{{ route('login') }}" id="loginForm">
                                            @csrf
                                           
                                            <div class="md-3">
                                                <label for="login" class="form-label">User name</label>
                                                <input type="text"  name="login"  class="form-control" id="validationDefault01" placeholder="Enter username" required style="background-color: transparent;color:black">
                                              </div>
                                        
                                            <br>
                                            <div class="md-4">
                                                <label for="password" class="form-label">Password</label>
                                                <input type="text"  name="password"  class="form-control" id="validationDefault01" placeholder="Enter password" required style="background-color: transparent;color:black">
                                              </div>
                                           <br>   
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
    
   
    
</body>
</html>
