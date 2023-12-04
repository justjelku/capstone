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
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="residentModalLabel">Business Clearance Issuance</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="residentDetailsForm" method="POST" action="{{route('save-business-clearance')}}" class="forms-sample">
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
                        <div class="col-sm-6">
                            <div class="mb-3 form-group">
                                <label class="form-label">Business</label>
                                <input type="text" name="business" placeholder="Enter business" class="form-control" autocomplete="off">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mb-3 form-group">
                                <label class="form-label">Type of Business</label>
                                <select name="business_type" class="form-select mb-3 form-control" autocomplete="off">
                                    <option value="" selected disabled>Select Type of Business</option>
                                    <option value="Old">Old</option>
                                    <option value="New">New</option>
                                </select>
                            </div>
                        </div>
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
                                <input type="number" name="ctc_no" placeholder="Enter CTC No." class="form-control"  autocomplete="off">
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
                                <label class="form-label">O.R No.</label>
                                <input type="number" name="or_no" placeholder="Enter O.R no." class="form-control" autocomplete="off">
                                <span id="orError" style="color: red; display: none;">Please enter OR No. </span>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mb-3 form-group">
                                <label class="form-label">Amount Paid</label>
                                <input type="text" name="amount_paid" placeholder="Enter amount" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" autocomplete="off">
                                <span id="amountError" style="color: red; display: none;">Please enter amount </span>
                            </div>
                        </div>
                        <div class="col-sm-6">
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
                        <div class="col-sm-6">
                            <div class="mb-3 form-group">
                                <label class="form-label">Signed By</label>
                                <input type="text" name="signed_by" placeholder="Enter name" class="form-control">
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
