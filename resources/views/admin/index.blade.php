@extends('admin.admin_dashboard')
@section('admin')

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


<div class="page-content">

        <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
          <div>
            <h4 class="mb-3 mb-md-0" style="color:chocolate">Welcome to Dashboard, </h4>
          </div>
          <div class="d-flex align-items-center flex-wrap text-nowrap">
            <div class="input-group flatpickr wd-200 me-2 mb-2 mb-md-0" id="dashboardDate">
              <span class="input-group-text input-group-addon bg-transparent " data-toggle><i data-feather="calendar" class="text-primary"></i></span>
              <input style="color: black" type="text" class="form-control bg-transparent " placeholder="Select date" data-input>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-xl-12 stretch-card">
            <div class="row flex-grow-1">
              {{-- start  total population--}}
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card" style="background-color:cornflowerblue">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0" style="color:black; font-size:19px">Total Population</h6>
                     
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">{{ \App\Models\BarangayResidents::count() }}</h3>
                        <div class="d-flex align-items-baseline">
                        </div>
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/population.png" alt="population" style="margin-top: -60px;width: 160px; height: auto;">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {{-- end --}}
              {{-- total male --}}
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card" style="background-color: darkgray">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0" style="color:black;font-size:19px">Total Male</h6>
                      
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">{{ \App\Models\BarangayResidents::where('sex', 'male')->count() }}</h3>
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/male.png" alt="population" style="margin-left:50px;margin-top: -10px;width: 65px; height: auto;">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {{-- end --}}
              {{-- total female --}}
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card" style="background-color:darksalmon">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0" style="color: black; font-size:19px">Total Female</h6>
                      
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">{{ \App\Models\BarangayResidents::where('sex', 'female')->count() }}</h3>

                        <div class="d-flex align-items-baseline">
                        </div>
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/female.png" alt="population" style="margin-left:50px;margin-top: 50x;width: 40px; height: auto;">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {{--  --}}
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card" style="background-color: #CFB5DE">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0" style="color: black; font-size:19px">Total Single Parent</h6>
                      
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">{{ \App\Models\BarangayResidents::where('family_status','Single Parent')->count() }}</h3>
                        <div class="d-flex align-items-baseline">
                        </div>
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/solo.png" alt="population" style="margin-left:30px;margin-top: -20px;width: 100px; height: auto;">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- row -->
        
        <div class="row">
          <div class="col-12 col-xl-12 stretch-card">
            <div class="row flex-grow-1">
              {{-- total registered--}}
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card" style="background-color:rgb(201, 130, 142)">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0" style="color:black; font-size:19px">Total Blotter Reports</h6>
                      
                    </div>
                    <div class="row">
                      <div class="col-3 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">{{ \App\Models\BarangayBlotterRecords::count() }}</h3>

                        <div class="d-flex align-items-baseline">
                         
                        </div>
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/blotter.png" alt="blotter" style="margin-top: 10px;width: 80px; height: auto; margin-left:40px">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {{-- end --}}
              {{-- total total household --}}
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card" style="background-color:darkcyan">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0" style="color:black;font-size:19px">Household</h6>
                      
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">{{ \App\Models\BarangayResidents::where('household_representative','Yes')->count() }}</h3>

                        
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/household.png" alt="household" style="margin-left:30px;margin-top: 10px;width: 90px; height: auto;">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {{-- end --}}
              {{-- total PWD --}}
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card" style="background-color:chocolate">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0" style="color: black; font-size:19px">Total PWD</h6>
                      
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">
                          {{
                              \App\Models\BarangayResidents::where('pwd', 'Intellectual disability')
                                  ->orWhere('pwd', 'Deaf or Hard of Hearing')
                                  ->orWhere('pwd', 'Learning Disability')
                                  ->orWhere('pwd', 'Mental Disability')
                                  ->orWhere('pwd', 'Physical Disability')
                                  ->orWhere('pwd', 'Psychological Disability')
                                  ->orWhere('pwd', 'Speech and Language Impairment')
                                  ->orWhere('pwd', 'Visual Disability')
                                  ->orWhere('pwd', 'Cancer')
                                  ->orWhere('pwd', 'Rare Disease')
                                  ->count()
                          }}
                      </h3>
                      
                        <div class="d-flex align-items-baseline">
                        </div>
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/pwd.png" alt="pwd" style="margin-left:30px;margin-top: 10x;width: 100px; height: auto;">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {{--  --}}
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card" style="background-color:#B0C7DF">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0" style="color: black; font-size:19px">Total Voters</h6>

                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">{{ \App\Models\BarangayResidents::distinct('registered_voter')->count() }}</h3>
                        <div class="d-flex align-items-baseline">
                        </div>
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/vote.png" alt="pwd" style="margin-left:-30px;margin-top: 10x;width: 170px; height: auto;">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- row -->

  
{{-- age--}}
        <div class="row">
          <div class="col-lg-7 col-xl-8 grid-margin stretch-card">
            <div class="card" style="background-color: white">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline mb-2">
                        <h6 class="card-title mb-0" style="font-size: 19px;">Age and Gender Graph</h6>
                    </div>
                              <div class="row align-items-start">
                              <canvas id="chart" width="700" height="400" style="display: block; box-sizing: border-box; height: 400px; width: 700px;"></canvas>
                    </div>
                </div>
            </div>
        </div>
        
       
        

          {{-- another --}}
          <div class="col-lg-5 col-xl-4 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                        <h6 class="card-title mb-0">Tribe</h6>
                        
                    </div>
                    <!-- Add a table to display tribes and totals -->
                    <table class="table table-bordered">
                      <thead style="background: #B0C7DF; text-align: center;">
                          <tr>
                              <th>Tribe</th>
                              <th>Total</th>
                          </tr>
                      </thead>
                      <tbody style="color:black">
                          <?php
                          // Get unique tribe names and their counts
                          $tribes = \App\Models\BarangayResidents::select('tribe', \Illuminate\Support\Facades\DB::raw('COUNT(*) as total'))
                              ->groupBy('tribe')
                              ->orderBy('tribe')
                              ->get();
              
                          foreach ($tribes as $tribe) {
                              // Display each tribe name and its count in the table
                              echo '<tr>';
                              echo '<td>' . ($tribe->tribe ?: 'Unknown') . '</td>'; // If tribe is empty, display "Unknown"
                              echo '<td style="text-align: center;">' . $tribe->total . '</td>';
                              echo '</tr>';
                          }
                          ?>
                      </tbody>
                  </table>
                  
                </div>
            </div>
        </div>
        
        </div> <!-- row -->

        <div class="row">
          
    
        </div> <!-- row -->

        <div class="row">
          

<div class="col-lg-7 col-xl-12 stretch-card">
  <div class="card" style="background-color:cadetblue">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-baseline mb-2">
        <h6 class="card-title mb-0" style="color:black; font-size:19px">Blotter today schedule</h6>
       
      </div>

      <div class="table-responsive">
      <table class="table table-hover mb-0 border-secondary">
<thead>
<tr>
  <th class="pt-0" style="text-align: center; color: black;">ID</th>
  <th class="pt-0" style="text-align: center; color: black;">Complainant</th>
  <th class="pt-0" style="text-align: center; color: black;">Respondent</th>
 
  <th class="pt-0" style="text-align: center; color: black;">Schedule of mediation</th>
  <th class="pt-0" style="text-align: center; color: black;">Status</th>
</tr>
</thead>
<tbody>

@foreach($dash_blotter_records as $key => $dash_blott)
@if($dash_blott->status == 'Pending')
  <tr>
    <td style="text-align: center;">{{ $key+1 }}</td>
    <td style="text-align: center;">{{ $dash_blott->complainant_name }}</td>
    <td style="text-align: center;">{{ $dash_blott->respondent_name }}</td>
    
    <td style="text-align: center;">{{ \Carbon\Carbon::parse($dash_blott->schd_mediation)->format('F d, Y - h:i A') }}</td>

    <td style="text-align: center">
      <form method="POST" action="{{ route('mark-as-done.blotter.record', ['id' => $dash_blott->id]) }}">
        @method('PUT')
        @csrf
        <button type="submit" class="btn btn-primary">Mark as Done</button>
      </form>
    </td>
  </tr>
@endif
@endforeach

</tbody>
</table>
      </div>
      
    </div> 
  </div>
</div>
</div> <!-- row -->

</div>



<script>

$(document).ready(function() {
  $('.mark-as-done').click(function() {
    // Get the closest table row (tr) to the clicked button and store it in a variable
    var row = $(this).closest('tr');

    // Get the blotter record ID from a data attribute on the button
    var blotterRecordId = $(this).data('blotter-record-id');

    // Send an HTTP request to the server to mark the blotter record as done
    $.ajax({
      url: '/blotter-records/' + blotterRecordId + '/mark-as-done',
      method: 'PUT',
      success: function() {
        // Remove the row from the table
        row.remove();
        console.log('Row removed successfully for blotter record ' + blotterRecordId);
      },
      error: function(error) {
        // Log the error message to the browser console
        console.log('Error marking blotter record ' + blotterRecordId + ' as done: ' + error.message);
      }
    });
  });
});

</script>






@php
$maleData = \App\Models\BarangayResidents::where('sex', 'Male')
    ->selectRaw('CASE 
                    WHEN age BETWEEN 0 AND 12 THEN "0-12"
                    WHEN age BETWEEN 13 AND 19 THEN "13-19"
                    WHEN age BETWEEN 20 AND 35 THEN "20-35"
                    WHEN age BETWEEN 36 AND 55 THEN "36-55"
                    ELSE "55+"
                END as age_group, COUNT(*) as count')
    ->groupBy('age_group')
    ->pluck('count', 'age_group')
    ->toArray();

$femaleData = \App\Models\BarangayResidents::where('sex', 'Female')
    ->selectRaw('CASE 
                    WHEN age BETWEEN 0 AND 12 THEN "0-12"
                    WHEN age BETWEEN 13 AND 19 THEN "13-19"
                    WHEN age BETWEEN 20 AND 35 THEN "20-35"
                    WHEN age BETWEEN 36 AND 55 THEN "36-55"
                    ELSE "55+"
                END as age_group, COUNT(*) as count')
    ->groupBy('age_group')
    ->pluck('count', 'age_group')
    ->toArray();

// Create arrays for each age category
$ages = ['0-12', '13-19', '20-35', '36-55', '55+'];
$maleCounts = [];
$femaleCounts = [];

// Fill arrays with counts for each age category, defaulting to 0 if not present in the retrieved data
foreach ($ages as $age) {
    $maleCounts[$age] = $maleData[$age] ?? 0;
    $femaleCounts[$age] = $femaleData[$age] ?? 0;
}   
@endphp


<script>
    // Your PHP to JavaScript conversion remains the same

    // Process the data to match the format expected by Chart.js tooltips
    let maleChartData = {!! json_encode(array_values($maleCounts)) !!};
    let femaleChartData = {!! json_encode(array_values($femaleCounts)) !!};

    // Create the chart data
    let data = {
      labels: ['0-12', '13-19', '20-35', '36-55', '55+'],
      datasets: [
        {
          label: 'Male',
          data: maleChartData,
          backgroundColor: 'rgba(0, 123, 255, 0.4)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        },
        {
          label: 'Female',
          data: femaleChartData,
          backgroundColor: 'rgba(255, 99, 132, 0.4)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    };

    // Create the chart
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: false,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Age Distribution'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Total Population'
            },
            suggestedMin: 0
          }
        },
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                let value = context.parsed.y || 0;
                return label + ': ' + value;
              }
            }
          }
        }
      }
    });
</script>


@endsection

