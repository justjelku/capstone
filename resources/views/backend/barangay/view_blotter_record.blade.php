@extends('admin.admin_dashboard')
@section('admin')

<!-- jQuery Google CDN via W3schools.com -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

<style>
    /* Define a CSS class for input fields with a white background and black font color */
    .custom-input {
        background: whitesmoke;
        color: black;
    }


     
</style>

<div class="page-content">
    <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <a href="{{ route('barangay.blotter.records') }}" class="btn btn-inverse-primary" data-bs-toggle="tooltip" data-bs-placement="right" title="Back">Back</a>
        </ol>
    </nav>
    <div class="row">
        <div class="col-md-12 stretch-card">
            <div class="card">
                <div class="card-body" style="background-color: white;">
                    <h6 class="card-title">View Blotter Record</h6>
                    <form method="POST" action="" class="forms-sample">
                        @csrf

                        <input type="hidden" name="id" value="{{ $view_blotter_record->id }}">

                        <legend>Incident's Information</legend>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="mb-3">
                                    <label class="form-label">Incident Type</label>
                                    <input type="text" name="incident_type" class="form-control custom-input @error('incident_type') is-invalid @enderror" placeholder="Enter incident type" value="{{ $view_blotter_record->incident_type }}" readonly>
                                    @error('incident_type')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-4">
                                <div class="mb-3">
                                    <label class="form-label">Schedule of Mediation</label>
                                    <div class="input-group">
                                        <input type="datetime" id="incident_date" name="incident_date" class="form-control custom-input flatpickr-input active @error('schd_mediation') is-invalid @enderror" placeholder="Select date" readonly="readonly" value="{{ $view_blotter_record->schd_mediation }}" readonly disabled style="background: whitesmoke; color:black;">
                                        <span class="input-group-text input-group-addon" data-toggle="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                            </svg>
                                        </span>
                                    </div>
                                    @error('schd_mediation')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-4">
                                <div class="mb-3">
                                    <label class="form-label">Status</label>
                                    <select name="status" class="form-select mb-3 form-control custom-input @error('status') is-invalid @enderror">
                                        <option value="" selected disabled>Select status</option>
                                        <option value="Pending" {{ old('status', $view_blotter_record->status) === 'Pending' ? 'selected' : '' }}>Pending</option>
                                        <option value="Finished" {{ old('status', $view_blotter_record->status) === 'Finished' ? 'selected' : '' }}>Finished</option>
                                    </select>
                                    @error('incident_status')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div><!-- Col -->

                            <div class="col-sm-12">
                                <div class="mb-3">
                                    <label class="form-label">Complain's Details</label>
                                    <textarea name="list_mediators" placeholder="Enter mediators names" rows="6" class="form-control custom-input @error('list_mediators') is-invalid @enderror" readonly>{{ old('list_mediators', $view_blotter_record->list_mediators) }}</textarea>
                                    @error('list_mediators')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div><!-- Col -->
                        </div><!-- Row -->

                        <div class="row">
                            <legend>Resident's Information</legend>
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label class="form-label">Respondent Name</label>
                                    <input type="text" name="respondent_name" placeholder="Enter respondent name" class="form-control custom-input @error('respondent_name') is-invalid @enderror" value="{{ $view_blotter_record->respondent_name }}" readonly>
                                    @error('respondent_name')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label class="form-label">Respondent Address</label>
                                    <input type="text" name="respondent_address" placeholder="Enter respondent address" class="form-control custom-input @error('respondent_address') is-invalid @enderror" value="{{ $view_blotter_record->respondent_address }}" readonly>
                                    @error('respondent_address')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label class="form-label">Respondent Phone</label>
                                    <input type="number" name="respondent_phone" placeholder="Enter respondent phone" class="form-control custom-input @error('respondent_phone') is-invalid @enderror" value="{{ $view_blotter_record->respondent_phone }}" readonly>
                                    @error('respondent_phone')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label class="form-label">Respondent Age</label>
                                    <input type="number" name="respondent_age" placeholder="Enter respondent age" class="form-control custom-input @error('respondent_age') is-invalid @enderror" value="{{ $view_blotter_record->respondent_age }}" readonly>
                                    @error('respondent_age')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div><!-- Col -->
                            <legend>Complainant's Information</legend>
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label class="form-label">Complainant Name</label>
                                    <input type="text" name="complainant_name" placeholder="Enter complainant name" class="form-control custom-input @error('complainant_name') is-invalid @enderror" value="{{ $view_blotter_record->complainant_name }}" readonly>
                                    @error('complainant_name')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label class="form-label">Complainant Address</label>
                                    <input type="text" name="complainant_address" placeholder="Enter complainant address" class="form-control custom-input @error('complainant_address') is-invalid @enderror" value="{{ $view_blotter_record->complainant_address }}" readonly>
                                    @error('complainant_address')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label class="form-label">Complainant Phone</label>
                                    <input type="number" name="complainant_phone" placeholder="Enter complainant phone" class="form-control custom-input @error('complainant_phone') is-invalid @enderror" value="{{ $view_blotter_record->complainant_phone }}" readonly>
                                    @error('complainant_phone')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label class="form-label">Complainant Age</label>
                                    <input type="number" name="complainant_age" placeholder="Enter complainant age" class="form-control custom-input @error('complainant_age') is-invalid @enderror" value="{{ $view_blotter_record->complainant_age }}" readonly>
                                    @error('complainant_age')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div><!-- Col -->
                            <div class="col-sm-12">
                                <div class="mb-3">
                                    <label class="form-label">Names of Mediators</label>
                                    <textarea name="list_mediators" placeholder="Enter mediators names" rows="6" class="form-control custom-input @error('list_mediators') is-invalid @enderror" readonly>{{ old('list_mediators', $view_blotter_record->list_mediators) }}</textarea>
                                    @error('list_mediators')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div><!-- Col -->
                        </div><!-- Row -->

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
