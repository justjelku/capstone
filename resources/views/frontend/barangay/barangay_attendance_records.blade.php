@extends('admin.admin_dashboard')
@section('admin')

<div class="page-content">

<nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Records</li>
            <li class="breadcrumb-item active" aria-current="page">Attendance</li>
        </ol>
    </nav>

				<div class="row">
					<div class="col-md-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">Attendance Records</h6>
               
                <div class="dropdown" style="margin-left: 900px; margin-top:-40px">
                  <button class="btn btn-inverse-danger dropdown-toggle" type="button" id="purokDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="padding: 0.25rem 0.4rem; font-size: 0.9rem;">
                      {{ $selectedPurok ?? 'Purok 1' }} <!-- Display selected Purok or default to Purok 1 -->
                  </button>
                  <div class="dropdown-menu" aria-labelledby="purokDropdown">
                      @for ($i = 1; $i <= 9; $i++)
                          <a class="dropdown-item @if($selectedPurok === 'Purok ' . $i) active @endif" href="{{ route('barangay.attendance.records', ['purok' => 'Purok ' . $i]) }}">Purok {{ $i }}</a>
                      @endfor
                  </div>
              </div>
              <br>

              <div class="table-responsive">
                @if(isset($residents) && count($residents) > 0)              
                  <table id="dataTableExample" class="table border-secondary border-top table-bordered table-hover table-striped">
                    <thead style="background: #FCD299">
                      <tr>
                        <th style="text-align: center;">Household  <br> Number</th>
                        <th style="text-align: center; vertical-align: middle;">Resident's Name</th>
                        <th style="text-align: center;">1st Quarter <br> Assembly</th>
                        <th style="text-align: center;">2nd Quater  <br> Assembly</th>
                        <th style="text-align: center;">3rd Quarter <br>  Assembly</th>
                        <th style="text-align: center;">4th Quater  <br> Assembly</th>
                        <th style="text-align: center; vertical-align: middle;">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      @foreach($residents as $key => $attendance_rec)
                      <tr>
                        <td style="text-align: center;color:black">{{ $attendance_rec->household_no }}</td>
                        <td style="text-align: center;color:black">{{ $attendance_rec->name }}</td>
                        
                        <td style="text-align: center; color:black">Absent</td>
                        <td style="text-align: center; color:black" >Absent </td>
                        <td style="text-align: center; color:black">Absent </td>
                        <td style="text-align: center; color:black">Absent </td>

                        {{-- actions --}}
                        <td>
                        <div style="text-align: center;">
                        <a href="">
                        <button type="button" class="btn btn-inverse-info btn-icon btn-xs" data-bs-toggle="tooltip" data-bs-placement="top" title="View more">
                          <i data-feather="eye"></i>
                        </button>
                        </a>
                        <a href="">
                        <button type="button" class="btn btn-inverse-warning btn-icon btn-xs" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                          <i data-feather="edit"></i>
                        </button>
                        </a>
                        <a href="" id="delete">
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
            <p>No residents found for the selected Purok.</p>
          @endif
                </div>
              </div>
            </div>
					</div>
				</div>

			</div>

      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.6/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      
      <script>
        $(document).ready(function() {
            $('.dropdown-toggle').on('click', function() {
                $(this).next('.dropdown-menu').toggle();
            });
        });
      </script>

@endsection