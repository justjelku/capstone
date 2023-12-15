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
    <div class="col-md-9 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">Barangay Residents</h6>
          <div class="d-flex align-items-center justify-content-between">
            
            <button type="button" class="btn btn-primary" style="padding: 0.20rem 0.4rem; font-size: 0.8rem;margin-left:600px" onclick="window.location.href='{{ route('add.resident') }}'">Add</button>
            {{-- <button type="button" class="btn btn-primary" style="padding: 0.20rem 0.4rem; font-size: 0.8rem;" data-toggle="modal" data-target="#addResidentModal">Add Resident</button> --}}

            <div class="dropdown" style="margin-left: 10px">
              <button class="btn btn-inverse-danger dropdown-toggle" type="button" id="purokDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="padding: 0.25rem 0.4rem; font-size: 0.9rem;">
                  {{ $selectedPurok ?? 'Purok 1' }} <!-- Display selected Purok or default to Purok 1 -->
              </button>
              <div class="dropdown-menu" aria-labelledby="purokDropdown">
                  @for ($i = 1; $i <= 9; $i++)
                      <a class="dropdown-item @if($selectedPurok === 'Purok ' . $i) active @endif" href="{{ route('barangay.residents', ['purok' => 'Purok ' . $i]) }}">Purok {{ $i }}</a>
                  @endfor
              </div>
          </div>
          

          </div>
              
          <div class="d-flex align-items-baseline position-absolute top-0 end-0 m-3">
            <i class="link-icon" data-feather="help-circle" data-bs-toggle="tooltip" data-bs-placement="left" title="The color coding system is used to denote different resident statuses: White signifies a well-behaved resident, Yellow represents an inactive resident, Red indicates a resident with unresolved case(s), and Orange signifies an inactive resident with unsettled case(s)."></i>
          </div>

        
          
<br>        


<div class="table-responsive">
  @if(isset($barangay_residents) && count($barangay_residents) > 0)
            <table id="dataTableExample" class="table border-secondary border-top table-bordered">
              <thead>
                <tr style="background: #FCD299">
                  <th style="text-align: center;">Household No.</th>
                  <th style="text-align: center;">QR Code</th>
                  <th style="text-align: center;">First name</th>
                  <th style="text-align: center;">Lastname</th>
                  <th style="text-align: center;">Purok</th>
                  <th style="text-align: center;">Contact No.</th>
                  <th style="text-align: center;">Actions</th>
                </tr>
              </thead>
              <tbody>
    
                @foreach($barangay_residents as $key => $barangay_residents)
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
                    <td style="text-align: center;">{{ $barangay_residents->household_no }}</td>
                    {{-- <td style="text-align: center;">
                      {!! DNS2D::getBarcodeSVG("$barangay_residents->household_no", 'QRCODE', 1.7, 1.7, 'black') !!}
                    </td> --}}
                    <td style="text-align: center;">
                      {!! DNS2D::getBarcodeSVG(strtoupper("$barangay_residents->name-$barangay_residents->purok HH:$barangay_residents->household_no"), 'QRCODE', 1.7, 1.7, 'black') !!}
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
            @else
            <p>No residents found for the selected Purok.</p>
          @endif
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-3 grid-margin stretch-card">
      <table id="dataTableExample" class="table border-secondary border-top table-bordered">
        <thead>
          <tr style="background: black">
            <th style="text-align: center; color: white" colspan="2">Purok Information</th>
        </tr>
          <tr style="background: #FCD299">
            <th style="text-align: center;">Area</th>
            <th style="text-align: center;">People</th>
          </tr>
        </thead>
        <tbody>

          @php
          $Purok1 = $residents->where('purok', 'Purok 1');
          $Purok1 = $Purok1->count();

          $Purok2 = $residents->where('purok', 'Purok 2');
          $Purok2 = $Purok2->count();

          $Purok3 = $residents->where('purok', 'Purok 3');
          $Purok3 = $Purok3->count();

          $Purok4 = $residents->where('purok', 'Purok 4');
          $Purok4 = $Purok4->count();

          $Purok5 = $residents->where('purok', 'Purok 5');
          $Purok5 = $Purok5->count();

          $Purok6 = $residents->where('purok', 'Purok 6');
          $Purok6 = $Purok6->count();

          $Purok7 = $residents->where('purok', 'Purok 7');
          $Purok7 = $Purok7->count();

          $Purok8 = $residents->where('purok', 'Purok 8');
          $Purok8 = $Purok8->count();

          $Purok9 = $residents->where('purok', 'Purok 9');
          $Purok9 = $Purok9->count();
          @endphp
         
            <tr>
              <th style="text-align: center;color:gray">Purok 1</td>
              <th style="text-align: center; color:gray">{{ $Purok1 }}</th>
            </tr>
            <tr>
              <th style="text-align: center;color:gray">Purok 2</td>
              <th style="text-align: center;color:gray">{{ $Purok2 }}</th>
            </tr>
            <tr>
              <th style="text-align: center;color:gray">Purok 3</td>
              <th style="text-align: center;color:gray">{{ $Purok3 }}</th>
            </tr>
            <tr>
              <th style="text-align: center;color:gray">Purok 4</td>
              <th style="text-align: center;color:gray">{{ $Purok4 }}</th>
            </tr>
            <tr>
              <th style="text-align: center;color:gray">Purok 5</td>
              <th style="text-align: center;color:gray">{{ $Purok5 }}</th>
            </tr>
            <tr>
              <th style="text-align: center;color:gray">Purok 6</td>
              <th style="text-align: center;color:gray">{{ $Purok6 }}</th>
            </tr>
            <tr>
              <th style="text-align: center;color:gray">Purok 7</td>
              <th style="text-align: center;color:gray">{{ $Purok7 }}</th>
            </tr>
            <tr>
              <th style="text-align: center;color:gray">Purok 8</td>
              <th style="text-align: center;color:gray">{{ $Purok8 }}</th>
            </tr>
            <tr>
              <th style="text-align: center;color:gray">Purok 9</td>
              <th style="text-align: center;color:gray">{{ $Purok9 }}</th>
            </tr>
          </tbody>             
      </table>
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
