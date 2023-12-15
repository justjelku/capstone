<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <!-- Bootstrap CSS -->
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/yeti/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
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

    <!-- Add this before </body> -->
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>


<div class="page-content">
    <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Records</li>
            <li class="breadcrumb-item active" aria-current="page">Blotter</li>
        </ol>
    </nav>

    <div class="row">
        <div class="col-md-10 grid-margin stretch-card">
            <div class="card">
                <div class="card-body" style="background-color: white;">
                    <div class="d-flex align-items-center justify-content-between" style="padding: 10px;">
                        <h1 style="font-size: 20px; font-weight:normal; margin: 0;"> Barangay officials</h1>
                        <button type="button" class="btn btn-inverse-warning  " style="padding: 0.20rem 0.4rem; font-size: 0.8rem; margin-right:-500px;" id="createBlotterModal">Add </button>
                      
                        <div class="dropdown">
                            <button class="btn-inverse-info dropdown-toggle" type="button" id="quarterDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="padding: 0.20rem 0.4rem; font-size: 0.8rem;">
                                Generate
                            </button>
                            <div class="dropdown-menu" aria-labelledby="quarterDropdown">
                                <a class="dropdown-item" href="{{ route('generate-pdf') }}">1st Quarter</a>
                                <a class="dropdown-item" href="{{ route('second-quarter') }}">2nd Quarter</a>
                                <a class="dropdown-item" href="{{ route('third-quarter') }}">3rd Quarter</a>
                                <a class="dropdown-item" href="{{ route('fourth-quarter') }}">4th Quarter</a>
                               
                               
                            </div>
                        </div>

                        
                    </div>

                    <div class="dropdown" style="width: fit-content; margin-left:755px">
                        <button class="btn btn-inverse-danger dropdown-toggle" type="button" id="yearDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="padding: 0.25rem 0.4rem; font-size: 0.9rem;">
                            @if(isset($selectedYear))
                                {{ $selectedYear }}
                            @else
                                {{ date('Y') }} <!-- Display the current year if $selectedYear is not set -->
                            @endif
                        </button>
                        <div class="dropdown-menu" aria-labelledby="yearDropdown">
                            @php
                                $currentYear = date('Y');
                                $yearsToShow = 5;
                                $startingYear = $currentYear - $yearsToShow;
                            @endphp
                            @for ($i = $currentYear; $i >= $startingYear; $i--)
                                <a class="dropdown-item @if($i == date('Y')) active @endif" href="{{ route('barangay.blotter.records', ['year' => $i]) }}">{{ $i }}</a>
                            @endfor
                        </div>
                    </div>
                    
                    
                    <br>
                           
                    <div class="table-responsive">
                        @if(isset($blotter_records) && count($blotter_records) > 0)
                        
                        <table id="dataTableExample" class="table border-secondary border-top table-bordered table-hover table-striped">
                            <thead>
                                <tr style="background: #fcf8e3">
                                    <th style="text-align: center; color: black;">ID</th>
                                    <th style="text-align: center; color: black;">Nature of Cases</th>
                                    <th style="text-align: center; color: black;">Complainant's Name</th>
                                    <th style="text-align: center; color: black;">Schedule of Mediation</th>
                                    <th style="text-align: center; color: black;">Status</th>
                                    <th style="text-align: center; color: black;">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($blotter_records as $key => $blotter_rec)
                                <tr style="background: white;">
                                    <td style="text-align: center; color:black;">{{ $key+1 }}</td>
                                    <td style="text-align: center; color:black;">{{ $blotter_rec->nature_cases }}</td>
                                    <td style="text-align: center; color:black;">{{ $blotter_rec->complainant_name }}</td>
                                    {{-- <td style="text-align: center; color:black;">{{ date('Y-m-d h:i A', strtotime($blotter_rec->schd_mediation)) }}</td> --}}
                                    <td style="text-align: center; color:black;">{{ date('M d, Y', strtotime($blotter_rec->schd_mediation)) }}</td>

                                    <td style="text-align: center; color:black">
                                        @php
                                            $statusClass = '';
                                            switch($blotter_rec->status) {
                                                case 'Pending':
                                                    $statusClass = 'status-pending';
                                                    break;
                                                case 'Finished':
                                                    $statusClass = 'status-finished';
                                                    break;
                                            }
                                        @endphp
                                        <span class="status-badge {{ $statusClass }}">{{ $blotter_rec->status }}</span>
                                    </td>

                                    <td>
                                        <div style="text-align: center; color:black;">
                                            <a href="{{ route('view.blotter.record', $blotter_rec->id) }}">
                                                <button type="button" class="btn btn-inverse-info btn-icon btn-xs" data-bs-toggle="tooltip" data-bs-placement="top" title="View more">
                                                    <i data-feather="eye"></i>
                                                </button>
                                            </a>
                                            
                                            <a href="{{ route('edit.blotter.record', $blotter_rec->id) }}">
                                                <button type="button" class="btn btn-inverse-warning btn-icon btn-xs" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                    <i data-feather="edit"></i>
                                                </button>
                                            </a>
                                            <a href="{{ route('delete.blotter.record', $blotter_rec->id) }}" id="delete">
                                                <button type="button" class="btn btn-inverse-danger btn-icon btn-xs" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                    <i data-feather="trash"></i>
                                                </button>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                        @else
                            <p>No records found for the selected year.</p>
                        @endif
                    </div>

                </div>
            </div>
        </div>
        <div class="col-md-2 grid-margin stretch-card">
            <div class="card-wrapper">
               
                <div class="card" style='height: 100px;'>
                    <div class="card-body" style='background-color: #FABC5C'>
                        <h5 class="card-title" style="color:black">Mediation</h5>
                        <h3 class="mb-2" style="color: white; text-align: center;">
                            {{
                                \App\Models\BarangayBlotterRecords::where('settled_cases', 'Mediation')
                                    ->whereYear('updated_at', $selectedYear)
                                    ->count()
                            }}
                        </h3>
                    </div>
                </div>
                
                <!-- Repeat similar modifications for other categories -->
                
                
        
                
                <div class="card" style='height: 100px; margin-top: 20px;'>
                    <div class="card-body" style='background-color: #FABC5C'>
                        <h5 class="card-title" style="color:black">Conciliated</h5>
                        <h3 class="mb-2" style="color: white; text-align: center;">
                        {{
                            \App\Models\BarangayBlotterRecords::where('settled_cases', 'conciliated')
                                ->whereYear('updated_at', $selectedYear)
                                ->count()
                        }}
                       
                    </div> 
                </div>
             
                <div class="card" style='height: 100px; margin-top: 20px;'>
                    <div class="card-body" style='background-color: #FABC5C'>
                        <h5 class="card-title" style="color:black; text-align: center;">Arbitrution</h5>
                        <h3 class="mb-2" style="color: white; text-align: center;">
                            {{
                                \App\Models\BarangayBlotterRecords::where('settled_cases', 'arbitrution')
                                    ->whereYear('updated_at', $selectedYear)
                                    ->count()
                            }}
                        </h3>
                       
                    </div> 
                </div>
             
                <div class="card" style='height: 100px; margin-top: 20px;'>
                    <div class="card-body" style='background-color: #FABC5C'>
                        <h5 class="card-title" style="color:black">Repudiated</h5>
                        <h3 class="mb-2" style="color: white; text-align: center;">
                            {{
                                \App\Models\BarangayBlotterRecords::where('action_taken', 'repudiated')
                                    ->whereYear('updated_at', $selectedYear)
                                    ->count()
                            }}
                        </h3>
                        
                    </div> 
                </div>
        
                <div class="card" style='height: 100px; margin-top: 20px;'>
                    <div class="card-body" style='background-color: #FABC5C'>
                        <h5 class="card-title" style="color:black">Dismissed</h5>
                        <h3 class="mb-2" style="color: white; text-align: center;">
                            {{
                                \App\Models\BarangayBlotterRecords::where('action_taken', 'dismissed')
                                    ->whereYear('updated_at', $selectedYear)
                                    ->count()
                            }}
                        </h3>
                       
                    </div> 
                </div>
         
                <div class="card" style='height: 100px; margin-top: 20px;'>
                    <div class="card-body" style='background-color: #FABC5C'>
                        <h5 class="card-title" style="color:black">Referred</h5>
                        <h3 class="mb-2" style="color: white;text-align: center;">
                            {{
                                \App\Models\BarangayBlotterRecords::where('action_taken', 'referred')
                                    ->whereYear('updated_at', $selectedYear)
                                    ->count()
                            }}
                        </h3>
                        
                    </div> 
                </div>
             
                <div class="card" style='height: 100px; margin-top: 20px;'>
                    <div class="card-body" style='background-color: #FABC5C'>
                        <h5 class="card-title" style="color:black">Certified</h5>
                        <h3 class="mb-2" style="color: white;text-align: center;">
                            {{ \App\Models\BarangayBlotterRecords::where('action_taken', 'Certified')->count() }}
                        </h3>
                       
                    </div> 
                </div>
                <div class="card" style='height: 100px; margin-top: 20px;'>
                    <div class="card-body" style='background-color: #FABC5C'>
                        <h5 class="card-title" style= "color:black">Pending</h5>
                        <h3 class="mb-2" style="color: white;text-align: center;">
                            {{
                                \App\Models\BarangayBlotterRecords::where('action_taken', 'pending')
                                    ->whereYear('updated_at', $selectedYear)
                                    ->count()
                            }}
                        </h3>
                    </div> 
                </div>
            </div>
        </div>
        
    </div>
</div>


<div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2 style="color: black; align-items:center">Add Blotter Details</h2>
      <br>
      <form id="myForm" method="POST" action="{{ route('store.blotter.record') }}" class="forms-sample">
        @csrf
        <legend style="color:black;">Incident's Information</legend>
        <div class="row">
            <div class="col-sm-4">
                <div class="mb-3 form-group">
                    <label class="form-label">Nature of Cases</label>
                    <select name="nature_cases" class="form-select mb-3 form-control"  id="validationDefault01" required>
                        <option value="" selected disabled>Select Nature of Case</option>
                        <option value="Criminal">Criminal</option>
                        <option value="Civil">Civil</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            </div><!-- Col -->
            
        
            <div class="col-sm-4">
              <div class="mb-3 form-group">
                  <label class="form-label">Schedule of Mediation</label>
                  <div class="input-group"> 
                      <input type="datetime" id="schd_mediation" name="schd_mediation" placeholder="Select date"  class="form-control flatpickr-input active" autocomplete="off" id="validationDefault01" required>
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
            
          <div class="col-sm-4">
            <div class="mb-3 form-group">
                <label class="form-label">Status</label>
                <select name="status" class="form-select mb-3 form-control" id="validationDefault01" required>
                    <option value="" selected disabled>Select status</option>
                    <option value="Pending">Pending</option>
                    <option value="Finished">Finished</option>
                </select>
            </div>
        </div><!-- Col -->

        </div><!-- Row -->
        

        <div class="row">
            <div class="col-sm-12">
                <div class="mb-3 form-group">
                    <label class="form-label">Complain's Details</label>
                    <textarea name="complains_details" placeholder="Enter complain's details" rows="6" class="form-control" id="validationDefault01" required></textarea>
                   </div>
        </div><!-- Col -->
        <legend style="color:black">Complainant's Information</legend>
            <div class="col-sm-6">
                <div class="mb-3 form-group">
                    <label class="form-label">Complainant Name</label>
                    <input type="text" name="complainant_name" placeholder="Enter complainant name" class="form-control" id="validationDefault01" required>
                    
                </div>
            </div><!-- Col -->
            <div class="col-sm-6">
                <div class="mb-3 form-group">
                    <label class="form-label">Complainant Address</label>
                    <input type="text" name="complainant_address" placeholder="Enter complainant address" class="form-control" id="validationDefault01" required>
                    
                </div>
            </div><!-- Col -->
            
            <legend style="color:black">Respondent's Information</legend>
            <div class="col-sm-6">
                <div class="mb-3 form-group">
                    <label class="form-label">Respondent Name</label>
                    <input type="text" name="respondent_name" placeholder="Enter respondent name" class="form-control" id="validationDefault01" required>
                    
                </div>
            </div><!-- Col -->
            <div class="col-sm-6">
                <div class="mb-3 form-group">
                    <label class="form-label">Respondent Address</label>
                    <input type="text" name="respondent_address" placeholder="Enter respondent address" class="form-control" id="validationDefault01" required>
                    
                </div>
            </div><!-- Col -->
            
            <div class="col-sm-6">
                <div class="mb-3 form-group">
                    <label class="form-label">Settled Cases</label>
                    <select name="settled_cases" class="form-select mb-3 form-control">
                        <option value="" selected disabled>Select action</option>
                        <option value="None">None</option>
                        <option value="Mediation">Mediation</option>
                        <option value="Conciliated">Conciliated</option>
                        <option value="Arbitration">Arbitration</option>
                    </select>
                </div>
            </div><!-- Col -->
            <div class="col-sm-6">
                <div class="mb-3 form-group">
                    <label class="form-label">Action Taken</label>
                    <select name="action_taken" class="form-select mb-3 form-control" id="validationDefault01" required>
                        <option value="" selected disabled>Select action</option>
                        <option value="None">None</option>
                        <option value="Repudiated">Repudiated</option>
                        <option value="Dismissed">Dismissed</option>
                        <option value="Refered">Referred</option>
                        <option value="Certified">Certified</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>
            </div><!-- Col -->
           
            
        </div><!-- Row -->
        <button type="submit" class="btn btn-outline-primary btn-icon-text mb-2 mb-md-0" style="color: black">
            Login
        </button>
    </form>
    </div>
  </div>





<script>
    flatpickr("#schd_mediation", {
        enableTime: true,
        dateFormat: "Y-m-d H:i", // Set your desired date format
        time_24hr: false, // Set to false to use 12-hour format
        allowInput: true, // Allow manual input of date and time
    });
</script>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("createBlotterModal");
        var span = document.getElementsByClassName("close")[0];
      
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
    });
</script>

<script>
    document.getElementById("submitForm").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission
        document.getElementById("myForm").submit(); // Submit the form with the ID "myForm"
    });
</script>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>



<script>
    $(document).ready(function() {
        // Toggle the dropdown manually on button click
        $('.dropdown-toggle').on('click', function() {
            $(this).next('.dropdown-menu').toggle();
        });
    });
</script>

<script>
    // Update the button text to the current year
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('yearDropdown').textContent = new Date().getFullYear();
    });
</script>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Update the button text to the current year
        const yearDropdownButton = document.getElementById('yearDropdown');

        yearDropdownButton.textContent = new Date().getFullYear();

        // Add an event listener to each year option
        document.querySelectorAll('.year-option').forEach(item => {
            item.addEventListener('click', event => {
                const selectedYear = event.target.textContent;
                yearDropdownButton.textContent = selectedYear; // Update the button text with the selected year
            });
        });
    });
</script>



  



@endsection





    
</body>
</html>

