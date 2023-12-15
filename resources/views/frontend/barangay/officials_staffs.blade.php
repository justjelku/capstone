<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/yeti/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

    <link href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" rel="stylesheet">

</head>
<body>

    @extends('admin.admin_dashboard')
@section('admin')

<style>

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  background: mintcream;
}

.modal-content h2{
    align-items: center;
    text-align: center;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  /* float: left; */
  font-size: 28px;
  font-weight: bold;
   position: absolute;
    top: 10px;
    right: 15px;
}

.close:hover,
.close:focus {
  color: transparent;
  text-decoration: none;
  cursor: pointer;
}

.form-label{
  color:black;
}

.modal-body .col-sm-8 {
    text-align: center;
}
.intro-title {
  margin-bottom: 5px;
  font-weight: 400;
  color: #333;
}

@media (max-width: 575px) {
  .modal-body .col-sm-4 {
    text-align: center;
    margin-top: 25px;
  }
}
@media (min-width: 576px) {
  .modal-dialog {
      max-width: 650px;
  }
}

</style>

<div class="page-content">
<nav class="page-breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Community</li>
						<li class="breadcrumb-item active" aria-current="page">Officials</li>
					</ol>
				</nav>

  <div class="row">
    <div class="col-md-12 grid-margin stretch-card">
      
      <div class="card">
        <div class="card-body">
          {{-- <h6 class="card-title">Barangay officials</h6> --}}
          <div class="d-flex align-items-center justify-content-between">
            <h1 style="font-size: 20px; font-weight:normal"> Barangay officials</h1>
            <button type="button" class="btn btn-primary" style="padding: 0.20rem 0.4rem; font-size: 0.8rem;" id="myBtn">Add Official</button>
          </div>
          <br>
          <div class="table-responsive">
            <table id="dataTableExample" class="table border-secondary border-top table-bordered table-hover table-striped">
              <thead  style="background:#FCD299">
                <tr  >
                  <th style="text-align: center;">Id</th>
                  <th style="text-align: center;">Name</th>
                  <th style="text-align: center;">Position</th>
                  <th style="text-align: center;">Status</th>
                  <th style="text-align: center;">Term start</th>
                  <th style="text-align: center;">Term end</th>
                  <th style="text-align: center;">Actions</th>
                </tr>
              </thead>
              <tbody >
                @foreach($officials_staffs as $key => $barangay_officials)
                <tr style="color: black;">
                  <td style="text-align: center; color: black;">{{ $key+1 }}</td>
                  <td style="text-align: center; color: black;">{{ $barangay_officials->name }}</td>
                  {{-- <td style="text-align: center; color: black;"><img class="rounded-circle official-image" src="{{ asset($barangay_officials->photo) }}" alt="profile"></td> --}}
                  <td style="text-align: center; color: black;">{{ $barangay_officials->position }}</td>
                  <td style="text-align: center; color: black;">
                        @if($barangay_officials->status === 'Active')
                          <span class="status-badge badge badge-success">Active</span>
                        @elseif($barangay_officials->status === 'Resigned')
                          <span class="status-badge badge badge-info">Resigned</span>
                        @elseif($barangay_officials->status === 'Suspended')
                          <span class="status-badge badge badge-warning">Suspended</span>
                        @elseif($barangay_officials->status === 'Elected')
                          <span class="status-badge badge badge-primary">Elected</span>
                        @elseif($barangay_officials->status === 'Appointed')
                          <span class="status-badge badge badge-secondary">Appointed</span>
                        @else
                          <span class="status-badge badge badge-danger">Inactive</span>
                        @endif
                  </td>
                  @php
                     $termStart = date('F j, Y', strtotime($barangay_officials->term_start));
                    $termEnd = date('F j, Y', strtotime($barangay_officials->term_end));
                  @endphp
                  <td style="text-align: center; color: black;">{{ $termStart }}</td>
                  <td style="text-align: center; color: black;">{{ $termEnd }}</td>
                  <td style="text-align: center; vertical-align: middle;">
                    @if ($barangay_officials->id)
                    <button class="open-modal-button  btn btn-inverse-info btn-icon btn-xs" data-id="{{ $barangay_officials->id }}" data-name="{{ $barangay_officials->name }}" data-position="{{ $barangay_officials->position }}" data-photo="{{ $barangay_officials->photo }}"
                        term_start="{{ $barangay_officials->term_start }}" term_end="{{ $barangay_officials->term_end }}">   <i data-feather="eye"></i></button>
                 

                    <!-- Modal structure -->
                    <div class="modal" id="viewModal">
                      <div class="modal-content">
                        <span class="close">&times;</span>
                        
                        <div>
                            <div class="profile-picture" style="border-radius: 50%;
                            width: 100px; height: 100px;">
                                <img id="viewModalImage" class="circular-image" src="" alt="Profile Image">
                            </div>
                           
                          <div style="color: black">
                            <h4 style="font-size: 20px"><span id="viewModalName"></span></h4>
                            <p style="font-size: 15px"><span id="viewModalPosition"></span></p>
                            <br>
                            <p><strong>Term Start</strong></p>
                            <p><span id="termStart"></span></p>
                            <br>
                            <p><strong>Term End</strong></p>
                            <p><span id="termEnd"></span></p>
                          </div>
 
                        </div>
                      </div>
                    </div>
                      <button type="button" class="btn btn-inverse-warning btn-icon btn-xs" 
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" data-toggle="modal" data-target="#learnMore1"
                            onclick="window.location.href='{{ route('edit.official', ['id' => $barangay_officials->id]) }}'">
                        <i data-feather="edit"></i>
                    </button>
                    <a href="{{ route('delete.official', $barangay_officials->id) }}" id="delete">
                        <button type="button" class="btn btn-inverse-danger btn-icon btn-xs" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                          <i data-feather="trash"></i>
                        </button>
                      </a>
                      
                    @else
                      <p>No resident data for this clearance</p>
                    @endif
                  </td>
                </tr>
                @endforeach
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2 style="color: black; align-items:center">Add Barangay Official</h2>
      <div class="auth-form-wrapper px-4 py-5">
       <form id="myForm" method="POST" action="{{ route('store.official') }}" class="forms-sample" enctype="multipart/form-data">
             @csrf

             <div class="row">
                {{-- camera --}}
                <div class="col-md-12 d-flex justify-content-center" style="margin-bottom: 20px">
                            <div class="d-flex align-items-baseline position-absolute top-0 end-0 m-1">
                                <div class="toggle-camer mb-2">
                                    <a type="button" id="accesscamera" data-toggle="modal" data-target="#photoModal" class="btn btn-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Open camera">
                                    <i class="link-icon" data-feather="camera"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center">
                            <div class="official-image add-photo-container" style="width: 150px; height: 150px; overflow: hidden; border-radius: 50%;">
                                <div class="d-flex justify-content-center" style="width: 100%; height: 100%; border-radius: 50%; overflow: hidden;">
                                    <video id="webCam" autoplay playsinline style="object-fit: cover; width: 100%; height: 100%; border-radius: 50%; display: none;"></video>
                                    <img class="rounded-circle changed-image" id="photoImage" name="photo" src="{{ (!empty($photo)) ? url('upload/official_images/'.$photo) : url('upload/no_image.png') }}" alt="photo" style="object-fit: cover; width: 100%; height: 100%; border-radius: 50%;" onclick="openFileBrowser()">
                                    <input type="file" name="photo" id="photoInput" style="display: none;" onchange="displaySelectedImage(this)">
                                </div>
                            </div>
                            </div>
                        </div>
                {{--  end --}}
                <br>

                <div class="col-sm-6">
                    <div class="form-group mb-2">
                        <label class="form-label">Full Name</label>
                        <input type="text" name="name" class="form-control" id="validationDefault01" placeholder="Enter full name" required autocomplete="off">
                       
                    </div>
                </div> 

                <div class="col-sm-6">
                    <div class="form-group mb-2">
                        <label class="form-label">Position</label>
                        <select name="position" class="form-select mb-3 form-control" id="validationDefault01" required >
                            <option value="" selected disabled>Select position</option>
                            <option value="Barangay Captain">Barangay Captain</option>
                            <option value="Barangay Kagawad">Barangay Kagawad</option>
                            <option value="Barangay Secretary">Barangay Secretary</option>
                            <option value="Barangay Treasurer">Barangay Treasurer</option>
                            <option value="Sangguniang Barangay Member">Sangguniang Barangay Member</option>
                            <option value="Sangguniang Kabataan Chairperson">Sangguniang Kabataan Chairperson</option>
                        </select>
                    </div>
                </div><!-- Col -->

               
                
                <div class="col-sm-4">
                    <div class="mb-3 form-group">
                        <label class="form-label">Status</label>
                        <select name="status" class="form-select mb-3 form-control" id="validationDefault01" required>
                            <option value="" selected disabled>Select status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Resigned">Resigned</option>
                            <option value="Suspended">Suspended</option>
                            <option value="Elected">Elected</option>
                            <option value="Appointed">Appointed</option>
                        </select>
                    </div>
                </div><!-- Col -->
                       
                <div class="col-sm-4">
                    <div class="mb-3 form-group">
                        <label for="term_start" class="form-label">Term Start</label>
                        <div class="input-group">
                            <input type="text" id="term_start" name="term_start" class="form-control flatpickr-input active" placeholder="Select date" readonly="readonly" id="validationDefault01" required>
                            <span class="input-group-text input-group-addon" data-toggle="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div> <!-- Col -->
                
                <div class="col-sm-4">
                    <div class="mb-3 form-group">
                        <label for="term_end" class="form-label">Term End</label>
                        <div class="input-group">
                            <input type="text" id="term_end" name="term_end" class="form-control flatpickr-input active" placeholder="Select date" readonly="readonly">
                            <span class="input-group-text input-group-addon" data-toggle="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div><!-- Col -->
                <br>

                <h5 class="text-muted mb-3" style="font-size: 20px; margin-top:20px"><a>Barangay & Location Information</a></h5>
                <div class="col-sm-4">
                    <div class="mb-3 form-group">
                        <label class="form-label">Region</label>
                        <input type="text" name="region" class="form-control" value="Region X" readonly> 
                    </div>
                </div>
                <!-- Col -->
                <div class="col-sm-4">
                    <div class="mb-3 form-group">
                        <label class="form-label">Province</label>
                        <input type="text" name="province" class="form-control" value="Bukidnon" readonly> 
                    </div>
                </div>
                <!-- Col -->
                <div class="col-sm-4">
                    <div class="mb-3 form-group">
                        <label class="form-label">Municipality</label>
                        <input type="text" name="municipality" class="form-control" value="Baungon" readonly> 
                    </div>
                </div>
                <!-- Col -->
               
             </div>
             <div class="row">
                <div class="col-15 d-flex justify-content-center">
                    <button class="btn btn-primary" type="submit">Submit</button>
                </div>
            </div>
             
    </form>
    </div>
</div>
</div>



                   

<script>
  const openButtons = document.querySelectorAll('.open-modal-button');
  const viewmodal = document.getElementById('viewModal');

  openButtons.forEach(button => {
    button.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const name = this.getAttribute('data-name');
        const position = this.getAttribute('data-position');
        const photo = this.getAttribute('data-photo');
        const term_start = formatDate(this.getAttribute('term_start'));
        const term_end = formatDate(this.getAttribute('term_end'));

        document.getElementById('viewModalName').innerText = name;
        document.getElementById('viewModalPosition').innerText = position;
        document.getElementById('viewModalImage').src = photo;
        document.getElementById('termStart').innerText = term_start;
        document.getElementById('termEnd').innerText = term_end;

        viewmodal.style.display = 'block';
    });
});

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
}

  function closeModal() {
    viewmodal.style.display = 'none';
  }
</script>






 







<script>
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
</script>

<script type="text/javascript">
    $(document).ready(function () {
        $('#myForm').validate({
            rules: {
                photo: {
                    required: true,
                },
                name: {
                    required: true,
                },
                position: {
                    required: true,
                },
                status: {
                    required: true,
                },
                term_start: {
                    required: true,
                },
                term_end: {
                    required: true,
                },
                region: {
                    required : false,
                },
                province: {
                    required : false,
                },
                municipality: {
                    required : false,
                },
                barangay: {
                    required : true,
                },
                purok: {
                    required : true,
                }
            },
            messages: {
                name: {
                    required: 'Please select a photo.',
                },
                name: {
                    required: 'Please enter name.',
                },
                position: {
                    required: 'Please select position.',
                },
                status: {
                    required: 'Please select status.',
                },
                term_start: {
                    required: 'Please enter starting term.',
                },
                term_end: {
                    required: 'Please enter ending term.',
                },
                region: {
                    required : 'Please enter region.',
                },
                province: {
                    required : 'Please enter province.',
                },
                municipality: {
                    required : 'Please enter municipality.',
                },
                barangay: {
                    required : 'Please select barangay.',
                },
                purok: {
                    required : 'Please select purok.',
                }
            },
            errorElement: 'span',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                element.closest('.form-group').append(error);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).addClass('is-invalid');
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass('is-invalid');
            },
        });
    });
</script>


<!-- Browse File and then preview the selected image -->
<script>
    function openFileBrowser() {
        // Trigger a click event on the hidden file input
        document.getElementById('photoInput').click();
    }
    
    function displaySelectedImage(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
    
            reader.onload = function(e) {
                // Set the src attribute of the image to the selected file's data URL
                document.getElementById('photoImage').src = e.target.result;
            };
    
            // Read the selected file as a data URL
            reader.readAsDataURL(input.files[0]);
        }
    }
</script>
<!-- End Browse File and then preview the selected image -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>

<script>
    $(document).ready(function() {
    Webcam.set({
        width: 320,
        height: 240,
        image_format: 'jpeg',
        jpeg_quality: 90
    });

    $('#accesscamera').on('click', function() {
        Webcam.reset();
        Webcam.on('error', function() {
            $('#photoModal').modal('hide');
            swal({
                title: 'Warning',
                text: 'Please give permission to access your webcam',
                icon: 'warning'
            });
        });
        Webcam.attach('#my_camera');
    });

    // Event handler for the close button
    $('#closeWebcam').on('click', function() {
        Webcam.reset(); // Stop the webcam capture
        $('#photoModal').modal('hide');
    });

    $('#takephoto').on('click', take_snapshot);

    $('#retakephoto').on('click', function() {
        $('#my_camera').addClass('d-block');
        $('#my_camera').removeClass('d-none');

        $('#results').addClass('d-none');

        $('#takephoto').addClass('d-block');
        $('#takephoto').removeClass('d-none');

        $('#retakephoto').addClass('d-none');
        $('#retakephoto').removeClass('d-block');

        $('#uploadphoto').addClass('d-none');
        $('#uploadphoto').removeClass('d-block');
    });

    $('#photoForm').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: 'photoUpload.php',
            type: 'POST',
            data: new FormData(this),
            contentType: false,
            processData: false,
            success: function(data) {
                if(data == 'success') {
                    Webcam.reset();

                    $('#my_camera').addClass('d-block');
                    $('#my_camera').removeClass('d-none');

                    $('#results').addClass('d-none');

                    $('#takephoto').addClass('d-block');
                    $('#takephoto').removeClass('d-none');

                    $('#retakephoto').addClass('d-none');
                    $('#retakephoto').removeClass('d-block');

                    $('#uploadphoto').addClass('d-none');
                    $('#uploadphoto').removeClass('d-block');

                    $('#photoModal').modal('hide');

                    swal({
                        title: 'Success',
                        text: 'Photo uploaded successfully',
                        icon: 'success',
                        buttons: false,
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                        timer: 2000
                    })
                }
                else {
                    swal({
                        title: 'Error',
                        text: 'Something went wrong',
                        icon: 'error'
                    })
                }
            }
        })
    })
})

function take_snapshot()
{
    //take snapshot and get image data
    Webcam.snap(function(data_uri) {
        //display result image
        $('#results').html('<img src="' + data_uri + '" class="d-block mx-auto rounded"/>');

        var raw_image_data = data_uri.replace(/^data\:image\/\w+\;base64\,/, '');
        $('#photoStore').val(raw_image_data);
    });

    $('#my_camera').removeClass('d-block');
    $('#my_camera').addClass('d-none');

    $('#results').removeClass('d-none');

    $('#takephoto').removeClass('d-block');
    $('#takephoto').addClass('d-none');

    $('#retakephoto').removeClass('d-none');
    $('#retakephoto').addClass('d-block');

    $('#uploadphoto').removeClass('d-none');
    $('#uploadphoto').addClass('d-block');
}
</script>

<script src="{{ asset('plugin/sweetalert/sweetalert.min.js') }}"></script>
<script src="{{ asset('plugin/webcamjs/webcam.min.js') }}"></script>

<script>
document.getElementById("submitForm").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission
    document.getElementById("myForm").submit(); // Submit the form with the ID "myForm"
});
</script>


{{-- closing --}}
<script>
  // Function to close the modal when clicking the close button
$('.close').on('click', function() {
  $(this).closest('.modal').css('display', 'none');
});

// Function to close the modal when clicking outside the modal content
$(window).on('click', function(event) {
  if (event.target.classList.contains('modal')) {
    $('.modal').css('display', 'none');
  }
});

</script>



@endsection


  
  
  

    
</body>
</html>

