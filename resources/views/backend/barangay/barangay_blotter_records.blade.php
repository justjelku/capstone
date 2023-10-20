@extends('admin.admin_dashboard')
@section('admin')

<!-- jQuery Google CDN via W3schools.com -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js"></script> <!-- Updated Bootstrap 5 script -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

<div class="page-content">
    <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Records</li>
            <li class="breadcrumb-item active" aria-current="page">Blotter</li>
        </ol>
    </nav>

    <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <a href="" class="btn btn-inverse-primary" data-bs-toggle="modal" data-bs-target="#createBlotterModal">Create</a>
        </ol>
    </nav>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body" style="background-color: white;">
                    <p class="text-muted mb-3" style="font-size: 16px;">Barangay Imbatug <a href="#">blotter records</a>.</p>

                    <div class="table-responsive">
                        <table id="dataTableExample" class="table border-secondary border-top table-bordered table-hover table-striped">
                            <thead>
                                <tr style="background: #fcf8e3">
                                    <th style="text-align: center; color: black;">ID</th>
                                    <th style="text-align: center; color: black;">Incident Type</th>
                                    <th style="text-align: center; color: black;">Complainant's Name</th>
                                    <th style="text-align: center; color: black;">Respondent Name</th>
                                    <th style="text-align: center; color: black;">Schedule of Mediation</th>
                                    <th style="text-align: center; color: black;">Status</th>
                                    <th style="text-align: center; color: black;">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($blotter_records as $key => $blotter_rec)
                                <tr style="background: white;">
                                    <td style="text-align: center; color:black;">{{ $key+1 }}</td>
                                    <td style="text-align: center; color:black;">{{ $blotter_rec->incident_type }}</td>
                                    <td style="text-align: center; color:black;">{{ $blotter_rec->complainant_name }}</td>
                                    <td style="text-align: center; color:black;">{{ $blotter_rec->respondent_name }}</td>
                                    <td style="text-align: center; color:black;">{{ date('Y-m-d H:i', strtotime($blotter_rec->schd_mediation)) }}</td>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal for creating a Blotter Record -->
<div class="modal fade" id="createBlotterModal" tabindex="-1" role="dialog" aria-labelledby="createBlotterModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="createBlotterModalLabel">Create Blotter Record</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h6 class="card-title">Create Blotter Record</h6> 
                    <form id="myForm" method="POST" action="{{ route('store.blotter.record') }}" class="forms-sample">
                        @csrf
                        <legend>Incident's Information</legend>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="mb-3 form-group">
                                    <label class="form-label">Incident Type</label>
                                    <input type="text" name="incident_type" placeholder="Enter incident type" class="form-control">
                                </div>
                            </div><!-- Col -->
                        
                            <div class="col-sm-4">
                              <div class="mb-3 form-group">
                                  <label class="form-label">Schedule of Mediation</label>
                                  <div class="input-group">
                                      <input type="datetime" id="schd_mediation" name="schd_mediation" placeholder="Select date"  class="form-control flatpickr-input active">
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
                                <select name="status" class="form-select mb-3 form-control">
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
        							<textarea name="complains_details" placeholder="Enter complain's details" rows="6" class="form-control"></textarea>
   								</div>
						</div><!-- Col -->
                        <legend>Complainant's Information</legend>
                            <div class="col-sm-6">
                                <div class="mb-3 form-group">
                                    <label class="form-label">Complainant Name</label>
                                    <input type="text" name="complainant_name" placeholder="Enter complainant name" class="form-control">
                                    
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-6">
                                <div class="mb-3 form-group">
                                    <label class="form-label">Complainant Address</label>
                                    <input type="text" name="complainant_address" placeholder="Enter complainant address" class="form-control">
                                    
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-6">
                                <div class="mb-3 form-group">
                                    <label class="form-label">Complainant Phone</label>
                                    <input type="number" name="complainant_phone" placeholder="Enter complainant phone" class="form-control">
                                    
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-6">
                                <div class="mb-3 form-group">
                                    <label class="form-label">Complainant Age</label>
                                    <input type="number" name="complainant_age" placeholder="Enter complainant age" class="form-control">
                                    
                                </div>
                            </div><!-- Col -->
                            
                            <legend>Respondent's Information</legend>
                            <div class="col-sm-6">
                                <div class="mb-3 form-group">
                                    <label class="form-label">Respondent Name</label>
                                    <input type="text" name="respondent_name" placeholder="Enter resident name" class="form-control">
                                    
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-6">
                                <div class="mb-3 form-group">
                                    <label class="form-label">Respondent Address</label>
                                    <input type="text" name="respondent_address" placeholder="Enter resident address" class="form-control">
                                    
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-6">
                                <div class="mb-3 form-group">
                                    <label class="form-label">Respondent Phone</label>
                                    <input type="number" name="respondent_phone" placeholder="Enter resident phone" class="form-control">
                                    
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-6">
                                <div class="mb-3 form-group">
                                    <label class="form-label">Respondent Age</label>
                                    <input type="number" name="respondent_age" placeholder="Enter resident age" class="form-control">
                                    
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-12">
    							<div class="mb-3 form-group">
        							<label class="form-label">List of Mediators</label>
        							<textarea name="list_mediators" placeholder="Enter names of mediators" rows="6" class="form-control"></textarea>
   								</div>
						</div><!-- Col -->
                            
                            
                        </div><!-- Row -->
                        <button type="submit" class="btn btn-primary submit" data-bs-toggle="tooltip" data-bs-placement="right" title="Save">Save</button>
                    </form>

    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="$('#myForm').submit()">Save</button>
      </div>
    </div>
  </div>
</div>


<!-- Validation -->
<script type="text/javascript">
  $(document).ready(function (){
      $('#myForm').validate({
          rules: {
              incident_type: {
                  required : true,
              }, 
              schd_mediation: {
                  required : true,
              },
              status: {
                  required : true,
              },
              complains_details: {
                  required : true,
              },
              respondent_name: {
                  required : true,
              },
              respondent_address: {
                  required : true,
              },
              respondent_phone: {
                  required : true,
              },
              respondent_age: {
                  required : true,
              },
              complainant_name: {
                  required : true,
              },
              complainant_address: {
                  required : true,
              },
              complainant_phone: {
                  required : true,
              },
              complainant_age: {
                  required : true,
              },
              list_mediators: {
                  required : true,
              },
              
              
          },
          messages :{
              incident_type: {
                  required : 'Please enter incident type.',
              },
              schd_mediation: {
                  required : 'Please enter date of mediation.',
              },
              complains_details: {
                  required : 'Please enter complains details.',
              },
              respondent_name: {
                  required : 'Please enter respondent name.',
              },
              respondent_address: {
                  required : 'Please enter respondent address.',
              },
              respondent_phone: {
                  required : 'Please respondent phone.',
              },
              respondent_age: {
                  required : 'Please enter respondent age.',
              },
              complainant_name: {
                  required : 'Please enter complainant name.',
              },
              complainant_address: {
                  required : 'Please enter complainant address.',
              },
              complainant_phone: {
                  required : 'Please enter complainant phone.',
              },
              complainant_age: {
                  required : 'Please enter complainant age.',
              },
              list_mediators: {
                  required : 'Please enter mediators names.',
              },
              

          },
          errorElement : 'span', 
          errorPlacement: function (error,element) {
              error.addClass('invalid-feedback');
              element.closest('.form-group').append(error);
          },
          highlight : function(element, errorClass, validClass){
              $(element).addClass('is-invalid');
          },
          unhighlight : function(element, errorClass, validClass){
              $(element).removeClass('is-invalid');
          },
      });
  });
  
</script>
<script>
    flatpickr("#schd_mediation", {
        enableTime: true,
        dateFormat: "Y-m-d H:i", // Set your desired date format
        time_24hr: false, // Set to false to use 12-hour format
        allowInput: true, // Allow manual input of date and time
    });
</script>

  



@endsection




