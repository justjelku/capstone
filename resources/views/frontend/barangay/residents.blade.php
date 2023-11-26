@extends('admin.admin_dashboard')
@section('admin')

<style>
  .table-red {
  
    color: red; /* Change this to the text color for rows with a case */
  }
  .table-yellow {
    
    color: yellowgreen; /* Change this to the text color for rows with a case */
  }
  .table-orange {
   
    color: orangered;
  }
  .table-black {
   
    color: black;
  }
</style>

<div class="page-content">

  <nav class="page-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
      <li class="breadcrumb-item active" aria-current="page">Community</li>
      <li class="breadcrumb-item active" aria-current="page">Residents</li>
    </ol>
  </nav>

  <div class="row">
    <div class="col-md-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">Barangay Residents</h6>
          <div class="d-flex align-items-center justify-content-between">
            <p class="text-muted mb-3">Barangay Imbatug<a href="#"> residents</a>.</p>
            <button type="button" class="btn btn-primary" style="padding: 0.20rem 0.4rem; font-size: 0.8rem;" onclick="window.location.href='{{ route('add.resident') }}'">Add Resident</button>
            {{-- <button type="button" class="btn btn-primary" style="padding: 0.20rem 0.4rem; font-size: 0.8rem;" data-toggle="modal" data-target="#addResidentModal">Add Resident</button> --}}

          </div>
          <div class="d-flex align-items-baseline position-absolute top-0 end-0 m-3">
            <i class="link-icon" data-feather="help-circle" data-bs-toggle="tooltip" data-bs-placement="left" title="The color coding system is used to denote different resident statuses: White signifies a well-behaved resident, Yellow represents an inactive resident, Red indicates a resident with unresolved case(s), and Orange signifies an inactive resident with unsettled case(s)."></i>
          </div>

          <div class="table-responsive">
            <table id="dataTableExample" class="table border-secondary border-top table-bordered">
              <thead>
                <tr style="background: #FCD299">
                  <th style="text-align: center;">Id</th>
                  <th style="text-align: center;">QR Code</th>
                  <th style="text-align: center;">First name</th>
                  <th style="text-align: center;">Lastname</th>
                  <th style="text-align: center;">Purok</th>
                  <th style="text-align: center;">Contact No.</th>
                  <th style="text-align: center;">Actions</th>
                </tr>
              </thead>
              <tbody>
                @foreach($residents as $key => $barangay_residents)
                @php
                      $hasCase = $barangay_residents->moral === 'Has Unsettled Case';
                      $inactive = $barangay_residents->active_participation === 'Inactive';
                      $active = $barangay_residents->active_participation === 'Active';
                      $noCase = $barangay_residents->moral === 'Good Conduct (No Case)';
                      $rowClass = '';

                      if ($hasCase) {
                          $rowClass = 'table-red';
                      } elseif ($inactive) {
                          $rowClass = 'table-yellow';
                      } elseif ($hasCase && $inactive) {
                          $rowClass = 'table-orange';
                      } elseif ($noCase && $active) {
                          $rowClass = 'table-black';
                      }
                @endphp

                  <tr class="{{ $rowClass }}" >
                    <td style="text-align: center;">{{ $key+1 }}</td>
                    <td style="text-align: center;">
                      {!! DNS2D::getBarcodeSVG("$barangay_residents->qr_code", 'QRCODE', 1.7, 1.7, 'black') !!}
                    </td>
                    <td style="text-align: center;">{{ $barangay_residents->first_name }}</td>
                    <td style="text-align: center;">{{ $barangay_residents->last_name}}</td>
                    <td style="text-align: center;">{{ $barangay_residents->purok }}</td>
                    <td style="text-align: center;">{{ $barangay_residents->phone}}</td>
                    <td>
                      <div style="text-align: center;">
                        <a href="{{ route('view.resident', $barangay_residents->id) }}">
                          <button type="button" class="btn btn-inverse-info btn-icon btn-xs" data-bs-toggle="tooltip" data-bs-placement="top" title="View more">
                            <i data-feather="eye"></i>
                          </button>
                        </a>
                        <a href="{{ route('edit.resident', $barangay_residents->id) }}">
                          <button type="button" class="btn btn-inverse-warning btn-icon btn-xs" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                            <i data-feather="edit"></i>
                          </button>
                        </a>
                        <a href="{{ route('delete.resident', $barangay_residents->id) }}" id="delete">
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




@endsection 
