<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/yeti/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

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
          background:mintcream;
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
        </style>
</head>
<body>

    @extends('admin.admin_dashboard')
@section('admin')

<!-- Flatpickr CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

<div class="page-content">

    {{-- <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <a href="{{ route('barangay.certificates') }}" class="btn btn-inverse-primary" data-bs-toggle="tooltip"
                data-bs-placement="right" title="Back">Back</a>
        </ol>
    </nav> --}}

    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Business Clearance</h6>
                    <div class="table-responsive">
                        <table id="dataTableExample" class="table border-secondary border-top table-bordered">
                            <thead>
                                <tr style="background: #FCD299">
                                    <th style="text-align: center;">Id</th>
                                    <th style="text-align: center;">Name</th>
                                    <th style="text-align: center;">Purok</th>
                                    <th style="text-align: center;">Actions</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                @forelse ($residents as $resident)
                                    <tr style="color: black">
                                        <td>{{ $resident->id }}</td>
                                        <td>{{ $resident->name }}</td>
                                        <td>{{ $resident->purok }}</td>
                                        <td style="text-align: center; vertical-align: middle;">
                                            @if ($resident->id)
                                                <button type="button" class="btn btn-inverse-info btn-icon btn-xs" data-bs-toggle="modal" data-bs-target="#residentModal" onclick="openResidentModal('{{ $resident->name }}', '{{ $resident->purok }}', '{{ $resident->status }}')">
                                                    <i data-feather="printer"></i>
                                                </button>
                                            @else
                                                <p>No resident data for this clearance</p>
                                            @endif
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="4">No residents found</td>
                                    </tr>
                                @endforelse
                            </tbody>
                            
                            
                            
                            
                        </table>
                      
                        
                    </div>
                </div>
            </div>
        </div>

        <!-- Second card with 'img src' -->
        <div class="col-md-6 stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Business Clearance Previewer</h6>
                    <iframe src="{{ route('businessClearance') }}" width="100%" height="600"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Add this modal at the end of your Blade file -->
<div class="modal fade" id="residentModal" tabindex="-1" role="dialog" aria-labelledby="residentModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
       
            <div class="modal-content" style="background:mintcream;">
                <h5 class="modal-title" id="residentModalLabel" style="color: black; margin-left:120px; margin-bottom:10px">Business Clearance Issuance</h5>
                
<form id="residentDetailsForm" method="POST" action="{{route('save-business-clearance')}}" class="forms-sample">
    @csrf
    <div class="row">
        <div class="col-sm-4">
            <div class="mb-3 form-group">
                <label for="residentName" style="color: black">Name</label>
                <input type="text" class="form-control" id="residentName" name="residentName" readonly  style="background-color: #fefefe" id="validationDefault01" required>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="mb-3 form-group">
                <label for="residentPurok" style="color: black">Purok</label>
                <input type="text" class="form-control" id="residentPurok" name="residentPurok" readonly  style="background-color: #fefefe" id="validationDefault01" required>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="mb-3 form-group">
                <label for="residentStatus"  style="color: black">Status</label>
                <input type="text" class="form-control" id="residentStatus" name="residentStatus" readonly  style="background-color: #fefefe" id="validationDefault01" required>
            </div>
        </div>
        
    </div>

    <div class="row">
        <div class="col-sm-6">
            <div class="mb-3 form-group">
                <label class="form-label"  style="color: black">Business</label>
                <input type="text" name="business" placeholder="Enter business" class="form-control" autocomplete="off"  style="background-color: #fefefe" id="validationDefault01" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="mb-3 form-group">
                <label class="form-label" style="color: black">Type of Business</label>
                <select name="business_type" class="form-select mb-3 form-control" autocomplete="off"  style="background-color: #fefefe" id="validationDefault01" required>
                    <option value="" selected disabled>Select Type of Business</option>
                    <option value="Old">Old</option>
                    <option value="New">New</option>
                </select>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="mb-3 form-group">
                <label class="form-label"  style="color: black">Date</label>
                <div class="input-group">
                    <input type="date" id="date" name="date" class="form-control" autocomplete="off" style="background-color: #fefefe" id="validationDefault01" required>
                    <span class="input-group-text input-group-addon">
                        <i data-feather="calendar"></i>
                    </span>
                </div>
                <span id="dateError" style="color: red; display: none;">Please select a date</span>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="mb-3 form-group">
                <label class="form-label"  style="color: black">CTC No.</label>
                <input type="number" name="ctc_no" placeholder="Enter CTC No." class="form-control"  autocomplete="off" style="background-color: #fefefe" id="validationDefault01" required >
                <span id="ctcError" style="color: red; display: none;">Please enter CTC No. </span>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="mb-3 form-group">
                <label class="form-label" style="color: black">Issued At</label>
                <input type="text" name="issued_at" placeholder="Enter issued at" class="form-control" autocomplete="off"  style="background-color: #fefefe" id="validationDefault01" required>
                <span id="issuedError" style="color: red; display: none;">Please enter issued at </span>
            </div>
        </div>
        
        <div class="col-sm-4">
            <div class="mb-3 form-group">
                <label class="form-label"  style="color: black">Date Issued</label>
                <div class="input-group">
                    <input type="text" id="date_issued" name="date_issued" class="form-control" autocomplete="off" style="background-color: #fefefe" id="validationDefault01" required>
                    <span class="input-group-text input-group-addon">
                        <i data-feather="calendar"></i>
                    </span>
                </div>
                <span id="dateIssuedError" style="color: red; display: none;">Please enter date issued </span>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="mb-3 form-group">
                <label class="form-label" style="color: black">O.R No.</label>
                <input type="number" name="or_no" placeholder="Enter O.R no." class="form-control" autocomplete="off" style="background-color: #fefefe" id="validationDefault01" required>
                <span id="orError" style="color: red; display: none;">Please enter OR No. </span>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="mb-3 form-group"  >
                <label class="form-label" style="color: black">Amount Paid</label>
                <input type="text" name="amount_paid" placeholder="Enter amount" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" autocomplete="off" style="background-color: #fefefe" id="validationDefault01" required>
                <span id="amountError" style="color: red; display: none;">Please enter amount </span>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="mb-3 form-group">
                <label class="form-label"  style="color: black">Authorized By</label>
                <select name="authorized_by" class="form-select mb-3 form-control"  style="background-color: #fefefe" id="validationDefault01" required>
                    <option value="" selected disabled>Select Authorized By:</option>
                    <option value="Punong Barangay">Punong Barangay</option>
                    <option value="Sangguniang Barangay Member">Sanguniang Barangay Member</option>
                </select>
            </div>
            <span id="authorError" style="color: red; display: none;">Please enter Authorized by </span>
        </div>
        <div class="col-sm-6">
            <div class="mb-3 form-group">
                <label class="form-label"  style="color: black">Signed By</label>
                <input type="text" name="signed_by" placeholder="Enter name" class="form-control"  style="background-color: #fefefe" id="validationDefault01" required>
                <span id="signedError" style="color: red; display: none;">Please enter signed  </span>
            </div>
        </div>
    </div>
    <button type="submit" class="btn btn-primary submit" data-bs-toggle="tooltip" data-bs-placement="right" title="Save">Generate Business Clearance</button>
</form>
            
          
                
        
    </div>
    </div>
</div>

<!-- jQuery Google CDN -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

<!-- Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<!-- Flatpickr JS -->
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

<script>
    function openResidentModal(name, purok, status) {
        // Set resident details in the modal form
        document.getElementById('residentName').value = name;
        document.getElementById('residentPurok').value = purok;
        document.getElementById('residentStatus').value = status;

        // Open the modal
        $('#residentModal').modal('show');
    }
</script>

<script>
    flatpickr("#date", {
        enableTime: false,
        dateFormat: "Y-m-d",
        time_24hr: false,
        allowInput: true,
    });
</script>

<script>
    flatpickr("#date_issued", {
        enableTime: false,
        dateFormat: "Y-m-d",
        time_24hr: false,
        allowInput: true,
    });
</script>

{{-- <script>
    document.getElementById('residentDetailsForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get values from input fields
        let dateValue = document.getElementById('date').value;
        let ctcNoValue = document.getElementById('ctc_no').value;

        // Validation for Date field
        if (dateValue.trim() === '') {
            document.getElementById('dateError').style.display = 'block';
            document.getElementById('ctcError').style.display = 'block';
        } else {
            // If validation passes, submit the form
            this.submit();
        }
    });
</script> --}}




@endsection

    
</body>
</html>

