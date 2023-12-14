<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/yeti/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" rel="stylesheet">

   
  
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <link rel="shortcut icon" href="{{ asset('image/logo.png') }}" />
</head>
<body>
    @extends('admin.admin_dashboard')
@section('admin')



    <div class="page-content">  
                <nav class="page-breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
                         <li class="breadcrumb-item active" aria-current="page">Edit</li>
						<li class="breadcrumb-item active" aria-current="page">Barangay Official</li>
					</ol>
				</nav>
                
                <div class="card">
                    <div class="card-body">
                        <form id="myForm" method="POST" action="{{ route('update.blotter.record') }}" class="forms-sample" enctype="multipart/form-data">
                            <input type="hidden" name="id" value="{{ $edit_blotter_record->id }}">
                            @csrf
                            {{-- <input type="hidden" name="id" value="{{ $edit_official->id }}"> --}}
                            <legend>Incident's Information</legend>
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label class="form-label" id="validationDefault01" required >Nature of Cases</label>
                                        <select name="nature_cases" class="form-select mb-3 custom-input form-control @error('nature_cases') is-invalid @enderror">
                                            <option value="" selected disabled>Select nature</option>
                                            <option value="Criminal" {{ old('nature_cases', $edit_blotter_record->nature_cases) === 'Criminal' ? 'selected' : '' }}>Criminal</option>
                                            <option value="Civil" {{ old('nature_cases', $edit_blotter_record->nature_cases) === 'Civil' ? 'selected' : '' }}>Civil</option>
                                            <option value="Other" {{ old('nature_cases', $edit_blotter_record->nature_cases) === 'Other' ? 'selected' : '' }}>Other</option>
                                        </select>
                                      
                                    </div>
                                    
                                </div><!-- Col -->
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label class="form-label">Schedule of Mediation</label>
                                        <div class="input-group">
                                            <input type="datetime" id="schd_mediation" name="schd_mediation" placeholder="Select date" class="form-control custom-input flatpickr-input active @error('schd_mediation') is-invalid @enderror" value="{{ $edit_blotter_record->schd_mediation }}" style="background: whitesmoke; color:black" id="validationDefault01" required>
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
                                    <div class="mb-3">
                                        <label class="form-label">Status</label>
                                        <select name="status" class="form-select mb-3 custom-input form-control @error('status') is-invalid @enderror" id="validationDefault01" required>
                                            <option value="" selected disabled>Select status</option>
                                            <option value="Pending" {{ old('status', $edit_blotter_record->status) === 'Pending' ? 'selected' : '' }}>Pending</option>
                                            <option value="Finished" {{ old('status', $edit_blotter_record->status) === 'Finished' ? 'selected' : '' }}>Finished</option>
                                        </select>
                                        @error('status')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div><!-- Col -->
    
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label class="form-label">Complain's Details</label>
                                        <textarea name="complains_details" placeholder="Enter complain details" rows="6" class="form-control custom-input  id="validationDefault01" required>{{ old('complains_details', $edit_blotter_record->complains_details) }}</textarea>
                                        
                                       </div>
                            </div><!-- Col -->
                                
                            <div class="row">
                                <legend>Complainant's Information</legend>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Complainant Name</label>
                                        <input type="text" name="complainant_name" placeholder="Enter complainant name" class="form-control custom-input" id="validationDefault01" required  value="{{ $edit_blotter_record->complainant_name }}" >
                                       
                                    </div>
                                </div><!-- Col -->
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Complainant Address</label>
                                        <input type="text" name="complainant_address" placeholder="Enter complainant address" class="form-control custom-input" id="validationDefault01" required value="{{ $edit_blotter_record->complainant_address }}" >
                                       
                                    </div>
                                </div><!-- Col -->
                                <legend>Respondent's Information</legend>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Respondent Name</label>
                                        <input type="text" name="respondent_name" placeholder="Enter respondent name" class="form-control custom-input @error('respondent_name') is-invalid @enderror" value="{{ $edit_blotter_record->respondent_name }}">
                                     
                                    </div>
                                </div><!-- Col -->
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Respondent Address</label>
                                        <input type= "text" name="respondent_address" placeholder="Enter respondent address" class="form-control custom-input " id="validationDefault01" required value="{{ $edit_blotter_record->respondent_address }}">
                                        
                                    </div>
                                </div><!-- Col -->
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Settled Cases</label>
                                        <select name="settled_cases" class="form-select mb-3 custom-input form-control" id="validationDefault01" required>
                                            <option value="" selected disabled>Select status</option>
                                            <option value="None" {{ old('settled_cases', $edit_blotter_record->settled_cases) === 'None' ? 'selected' : '' }}>None</option>
                                            <option value="Mediation" {{ old('settled_cases', $edit_blotter_record->settled_cases) === 'Mediation' ? 'selected' : '' }}>Mediation</option>
                                            <option value="Conciliated" {{ old('settled_cases', $edit_blotter_record->settled_cases) === 'Conciliated' ? 'selected' : '' }}>Conciliated</option>
                                            <option value="Arbitration" {{ old('settled_cases', $edit_blotter_record->settled_cases) === 'Arbitration' ? 'selected' : '' }}>Arbitration</option>
                                        </select>
                                       
                                    </div>
                                    
                                </div><!-- Col -->
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label class="form-label">Action Taken</label>
                                        <select name="action_taken" class="form-select mb-3 custom-input form-control " id="validationDefault01" required>
                                            <option value="" selected disabled>Select status</option>
                                            <option value="None" {{ old('action_taken', $edit_blotter_record->action_taken) === 'None' ? 'selected' : '' }}>None</option>
                                            <option value="Repudiated" {{ old('action_taken', $edit_blotter_record->action_taken) === 'Repudiated' ? 'selected' : '' }}>Repudiated</option>
                                            <option value="Dismissed" {{ old('action_taken', $edit_blotter_record->action_taken) === 'Dismissed' ? 'selected' : '' }}>Dismissed</option>
                                            <option value="Referred" {{ old('action_taken', $edit_blotter_record->action_taken) === 'Referred' ? 'selected' : '' }}>Referred</option>
                                            <option value="Certified" {{ old('action_taken', $edit_blotter_record->action_taken) === 'Certified' ? 'selected' : '' }}>Certified</option>
                                            <option value="Pending" {{ old('action_taken', $edit_blotter_record->action_taken) === 'Pending' ? 'selected' : '' }}>Pending</option>
                                        </select>
                                        
                                    </div>
                                    
                                </div><!-- Col -->
                                
                                
                            </div><!-- Row -->
                            <button type="submit" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="right" title="Save changes">Save Changes</button>
                            
                        </form>

                    </div>
                </div>
   
                </div>
            </div>
        </div>
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
      const formInputs = document.querySelectorAll("form#myForm input, form#myForm select");
  
      let changesMade = false;
  
      formInputs.forEach(input => {
        input.addEventListener("change", function() {
          changesMade = true;
        });
      });
  
      document.getElementById("myForm").addEventListener("submit", function(event) {
        if (!changesMade) {
          event.preventDefault();
          if (confirm("No changes have been made. Click OK to proceed.")) {
            // If OK is clicked on the alert, proceed with the form submission
            document.getElementById("myForm").submit();
          }
        } else {
          // If changes have been made, confirm the user wants to save changes
          if (confirm("Save changes. Click OK to proceed.")) {
            // If OK is clicked on the alert, proceed with the form submission
            document.getElementById("myForm").submit();
          } else {
            event.preventDefault();
          }
        }
      });
    });
  </script>
  
  
  

@endsection






    
</body>
</html>

