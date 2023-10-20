@extends('admin.admin_dashboard')
@section('admin')

<!-- jQuery Google CDN via W3schools.com -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

<div class="page-content">

    <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <a href="{{ route('barangay.officials') }}" class="btn btn-inverse-primary" data-bs-toggle="tooltip" data-bs-placement="right" title="Back">Back</a>
        </ol>
    </nav>

    <div class="row">
        <div class="col-md-6 stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Edit Barangay Official</h6>
                    <form method="POST" action="{{ route('update.official') }}" class="forms-sample">
                        @csrf

                        <input type="hidden" name="id" value="{{ $edit_official->id }}">
                        
                        <div class="row form-group">
                            <div class="col-sm-12">
                                <div class="mb-3">
                                    <label class="form-label">Name</label>
                                    <input type="text" name="name" class="form-control" value="{{ $edit_official->name }}">
                                </div>
                            </div><!-- Col -->
                        </div><!-- Row -->
                        <div class="row">
                            <div class="col-sm-6 form-group">
                                <div class="mb-3">
                                    <label class="form-label">Position</label>
                                    <select name="position" class="form-select mb-3 form-control">
                                      <option value="" disabled>Select position</option>
                                      <option value="Barangay Captain" {{ $edit_official->position == 'Barangay Captain' ? 'selected' : '' }}>Barangay Captain</option>
                                      <option value="Sangguniang Barangay Member" {{ $edit_official->position == 'Sangguniang Barangay Member' ? 'selected' : '' }}>Sangguniang Barangay Member</option>
                                      <option value="Sangguniang Kabataan Chairperson" {{ $edit_official->position == 'Sangguniang Kabataan Chairperson' ? 'selected' : '' }}>Sangguniang Kabataan Chairperson</option>
                                      <option value="Barangay Treasurer" {{ $edit_official->position == 'Barangay Treasurer' ? 'selected' : '' }}>Barangay Treasurer</option>
                                      <option value="Barangay Secretary" {{ $edit_official->position == 'Barangay Secretary' ? 'selected' : '' }}>Barangay Secretary</option>
                                    </select>
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-6">
                                <div class="mb-3 form-group">
                                    <label class="form-label">Status</label>
                                    <select name="status" class="form-select mb-3 form-control">
                                      <option value="" disabled>Select status</option>
                                      <option value="Active" {{ $edit_official->status == 'Active' ? 'selected' : '' }}>Active</option>
                                      <option value="Inactive" {{ $edit_official->status == 'Inactive' ? 'selected' : '' }}>Inactive</option>
                                    </select>
                                </div>
                            </div><!-- Col -->
                        </div><!-- Row -->
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="mb-3 form-group">
                                    <label for="term_start" class="form-label">Term Start</label>
                                    <div class="input-group">
                                    <input type="text" id="term_start" name="term_start" class="form-control flatpickr-input active" placeholder="Select date" readonly="readonly" value="{{ $edit_official->term_start }}">
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
                            <div class="col-sm-6">
                                <div class="mb-3 form-group">
                                    <label for="term_end" class="form-label">Term End</label>
                                    <div class="input-group">
                                    <input type="text" id="term_end" name="term_end" class="form-control flatpickr-input active" placeholder="Select date" readonly="readonly" value="{{ $edit_official->term_end }}">
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
                        </div><!-- Row -->
                        <button type="submit" class="btn btn-primary me-2" data-bs-toggle="tooltip" data-bs-placement="right" title="Save changes">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(document).ready(function () {
        $('#myForm').validate({
            rules: {
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
            },
            messages: {
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

@endsection