<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/yeti/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
</head>
<body>


    @extends('admin.admin_dashboard')
@section('admin')

<!-- Flatpickr CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">


<div class="page-content">

    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Barangay Certificate</h6>
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
                    <h6 class="card-title">Barangay Certificate Previewer</h6>
                    <iframe src="{{ route('pdf.certificate_template') }}" width="100%" height="600"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Add this modal at the end of your Blade file -->
<div class="modal fade" id="residentModal" tabindex="-1" role="dialog" aria-labelledby="residentModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content" style="background-color:gray">
            <div class="modal-header">
                <h5 class="modal-title" id="residentModalLabel">Barangay Certificate Issuance</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="residentDetailsForm" method="POST" action="{{route('store.certificates')}}" class="forms-sample">
                    @csrf
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="mb-3 form-group">
                                <label for="residentName">Name</label>
                                <input type="text" class="form-control" id="residentName" name="residentName" readonly>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mb-3 form-group">
                                <label for="residentPurok">Purok</label>
                                <input type="text" class="form-control" id="residentPurok" name="residentPurok" readonly>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mb-3 form-group">
                                <label for="residentStatus">Status</label>
                                <input type="text" class="form-control" id="residentStatus" name="residentStatus" readonly>
                            </div>
                        </div>
                        
                    </div>

                    <div class="row">
                        <div class="col-sm-4">
                            <div class="mb-3 form-group">
                                <label class="form-label">Date</label>
                                <div class="input-group">
                                    <input type="date" id="date" name="date" class="form-control" autocomplete="off">
                                    <span class="input-group-text input-group-addon">
                                        <i data-feather="calendar"></i>
                                    </span>
                                </div>
                                <span id="dateError" style="color: red; display: none;">Please select a date</span>
                            </div>
                        </div>
                        
                        <div class="col-sm-4">
                            <div class="mb-3 form-group">
                                <label class="form-label">CTC No.</label>
                                <input type="number" name="ctc_no" placeholder="Enter CTC No." class="form-control"  autocomplete="off" id="validationDefault01" re>
                                <span id="ctcError" style="color: red; display: none;">Please enter CTC No. </span>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mb-3 form-group">
                                <label class="form-label">Issued At</label>
                                <input type="text" name="issued_at" placeholder="Enter issued at" class="form-control" autocomplete="off">
                                <span id="issuedError" style="color: red; display: none;">Please enter issued at </span>
                            </div>
                        </div>
                        
                        <div class="col-sm-4">
                            <div class="mb-3 form-group">
                                <label class="form-label">Date Issued</label>
                                <div class="input-group">
                                    <input type="text" id="date_issued" name="date_issued" class="form-control" autocomplete="off">
                                    <span class="input-group-text input-group-addon">
                                        <i data-feather="calendar"></i>
                                    </span>
                                </div>
                                <span id="dateIssuedError" style="color: red; display: none;">Please enter date issued </span>
                            </div>
                        </div>
                        
                        <div class="col-sm-4">
                            <div class="mb-3 form-group">
                                <label class="form-label">Authorized By</label>
                                <select name="authorized_by" class="form-select mb-3 form-control">
                                    <option value="" selected disabled>Select Authorized By:</option>
                                    <option value="Punong Barangay">Punong Barangay</option>
                                    <option value="Sangguniang Barangay Member">Sanguniang Barangay Member</option>
                                </select>
                            </div>
                            <span id="authorError" style="color: red; display: none;">Please enter Authorized by </span>
                        </div>
                        <div class="col-sm-4">
                            <div class="mb-3 form-group">
                                <label class="form-label">Signed By</label>
                                <input type="text" name="signed_by" placeholder="Enter name" class="form-control">
                                <span id="signedError" style="color: red; display: none;">Please enter signed  </span>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="mb-3 form-group">
                                <label class="form-label">Purpose</label>
                                <input type="text" name="purpose" placeholder="Enter purpose" class="form-control">
                                <span id="signedError" style="color: red; display: none;">Please enter signed  </span>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary submit" data-bs-toggle="tooltip" data-bs-placement="right" title="Save">Generate Business Clearance</button>
                </form>
            </div>
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



@endsection

    
</body>
</html>

