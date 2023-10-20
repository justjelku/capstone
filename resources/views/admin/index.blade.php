@extends('admin.admin_dashboard')
@section('admin')

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


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
            {{-- <button type="button" class="btn btn-outline-primary btn-icon-text me-2 mb-2 mb-md-0">
              <i class="btn-icon-prepend" data-feather="printer"></i>
              Print
            </button> --}}
            {{-- <button type="button" class="btn btn-primary btn-icon-text mb-2 mb-md-0">
              <i class="btn-icon-prepend" data-feather="download-cloud"></i>
              Download Report
            </button> --}}
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
                      <div class="dropdown mb-2">
                        <a type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" class="icon-sm me-2"></i> <span class="">View</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" class="icon-sm me-2"></i> <span class="">Edit</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" class="icon-sm me-2"></i> <span class="">Delete</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" class="icon-sm me-2"></i> <span class="">Print</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" class="icon-sm me-2"></i> <span class="">Download</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">3,897</h3>
                        <div class="d-flex align-items-baseline">
                          {{-- <p class="text-success">
                            <span>+3.3%</span>
                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                          </p> --}}
                        </div>
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/population.png" alt="population" style="margin-top: -100px;width: 200px; height: auto;">
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
                      <div class="dropdown mb-2">
                        <a type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" class="icon-sm me-2"></i> <span class="">View</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" class="icon-sm me-2"></i> <span class="">Edit</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" class="icon-sm me-2"></i> <span class="">Delete</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" class="icon-sm me-2"></i> <span class="">Print</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" class="icon-sm me-2"></i> <span class="">Download</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">56</h3>
                        {{-- <div class="d-flex align-items-baseline">
                          <p class="text-danger">
                            <span>-2.8%</span>
                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                          </p>
                        </div> --}}
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/male.png" alt="population" style="margin-left:50px;margin-top: -10px;width: 70px; height: auto;">
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
                      <div class="dropdown mb-2">
                        <a type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" class="icon-sm me-2"></i> <span class="">View</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" class="icon-sm me-2"></i> <span class="">Edit</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" class="icon-sm me-2"></i> <span class="">Delete</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" class="icon-sm me-2"></i> <span class="">Print</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" class="icon-sm me-2"></i> <span class="">Download</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">67</h3>
                        <div class="d-flex align-items-baseline">
                        </div>
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/female.png" alt="population" style="margin-left:50px;margin-top: 10x;width: 40px; height: auto;">
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
                      <div class="dropdown mb-2">
                        <a type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" class="icon-sm me-2"></i> <span class="">View</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" class="icon-sm me-2"></i> <span class="">Edit</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" class="icon-sm me-2"></i> <span class="">Delete</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" class="icon-sm me-2"></i> <span class="">Print</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" class="icon-sm me-2"></i> <span class="">Download</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">67</h3>
                        <div class="d-flex align-items-baseline">
                        </div>
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/female.png" alt="population" style="margin-left:50px;margin-top: 10x;width: 40px; height: auto;">
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
                      <div class="dropdown mb-2">
                        <a type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" class="icon-sm me-2"></i> <span class="">View</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" class="icon-sm me-2"></i> <span class="">Edit</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" class="icon-sm me-2"></i> <span class="">Delete</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" class="icon-sm me-2"></i> <span class="">Print</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" class="icon-sm me-2"></i> <span class="">Download</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-3 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">3,897</h3>
                        <div class="d-flex align-items-baseline">
                          {{-- <p class="text-success">
                            <span>+3.3%</span>
                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                          </p> --}}
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
                      <div class="dropdown mb-2">
                        <a type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" class="icon-sm me-2"></i> <span class="">View</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" class="icon-sm me-2"></i> <span class="">Edit</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" class="icon-sm me-2"></i> <span class="">Delete</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" class="icon-sm me-2"></i> <span class="">Print</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" class="icon-sm me-2"></i> <span class="">Download</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">56</h3>
                        {{-- <div class="d-flex align-items-baseline">
                          <p class="text-danger">
                            <span>-2.8%</span>
                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                          </p>
                        </div> --}}
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/household.png" alt="household" style="margin-left:50px;margin-top: -10px;width: 90px; height: auto;">
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
                      <div class="dropdown mb-2">
                        <a type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" class="icon-sm me-2"></i> <span class="">View</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" class="icon-sm me-2"></i> <span class="">Edit</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" class="icon-sm me-2"></i> <span class="">Delete</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" class="icon-sm me-2"></i> <span class="">Print</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" class="icon-sm me-2"></i> <span class="">Download</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">67</h3>
                        <div class="d-flex align-items-baseline">
                        </div>
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/pwd.png" alt="pwd" style="margin-left:50px;margin-top: 10x;width: 100px; height: auto;">
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
                      <h6 class="card-title mb-0" style="color: black; font-size:19px">Total Tribe</h6>
                      <div class="dropdown mb-2">
                        <a type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" class="icon-sm me-2"></i> <span class="">View</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" class="icon-sm me-2"></i> <span class="">Edit</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" class="icon-sm me-2"></i> <span class="">Delete</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" class="icon-sm me-2"></i> <span class="">Print</span></a>
                          <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" class="icon-sm me-2"></i> <span class="">Download</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2" style="color: white">67</h3>
                        <div class="d-flex align-items-baseline">
                        </div>
                      </div>
                      <div class="col-6 col-md-12 col-xl-7">
                        <img src="/image/pwd.png" alt="pwd" style="margin-left:50px;margin-top: 10x;width: 100px; height: auto;">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- row -->

  
{{-- revebue --}}
        <div class="row">
          <div class="col-lg-7 col-xl-8 grid-margin stretch-card">
            <div class="card" style="background-color:dimgrey">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-baseline mb-2">
                  <h6 class="card-title mb-0" style="font-size: 19px; ">Revenue</h6>
                  <div class="dropdown mb-2">
                    <a type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" class="icon-sm me-2"></i> <span class="">View</span></a>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" class="icon-sm me-2"></i> <span class="">Edit</span></a>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" class="icon-sm me-2"></i> <span class="">Delete</span></a>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" class="icon-sm me-2"></i> <span class="">Print</span></a>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" class="icon-sm me-2"></i> <span class="">Download</span></a>
                    </div>
                  </div>
                </div>
                <div class="row align-items-start">
                  <div class="col-md-7">
                    {{-- <p class="text-muted tx-13 mb-3 mb-md-0">Revenue is the income that a business has from its normal business activities, usually from the sale of goods and services to customers.</p> --}}
                  </div>
                  <div class="col-md-5 d-flex justify-content-md-end" style="margin-bottom: 10px">
                    <div class="btn-group mb-3 mb-md-0" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-primary">Today</button>
                      <button type="button" class="btn btn-outline-primary d-none d-md-block">Week</button>
                      <button type="button" class="btn btn-outline-primary">Month</button>
                      <button type="button" class="btn btn-outline-primary">Year</button>
                    </div>
                  </div>
                </div>
                <div id="monthlySalesChart"></div>
              </div> 
            </div>
          </div>

          {{-- another --}}
          <div class="col-lg-5 col-xl-4 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-baseline">
                  <h6 class="card-title mb-0">Accomplished</h6>
                  <div class="dropdown mb-2">
                    <a type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton5">
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" class="icon-sm me-2"></i> <span class="">View</span></a>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" class="icon-sm me-2"></i> <span class="">Edit</span></a>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" class="icon-sm me-2"></i> <span class="">Delete</span></a>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" class="icon-sm me-2"></i> <span class="">Print</span></a>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" class="icon-sm me-2"></i> <span class="">Download</span></a>
                    </div>
                  </div>
                </div>
                <div id="storageChart"></div>
                <div class="row mb-3">
                  <div class="col-6 d-flex justify-content-end">
                    <div>
                      <label class="d-flex align-items-center justify-content-end tx-10 text-uppercase fw-bolder">Total storage <span class="p-1 ms-1 rounded-circle bg-secondary"></span></label>
                      <h5 class="fw-bolder mb-0 text-end">8TB</h5>
                    </div>
                  </div>
                  <div class="col-6">
                    <div>
                      <label class="d-flex align-items-center tx-10 text-uppercase fw-bolder"><span class="p-1 me-1 rounded-circle bg-primary"></span> Used storage</label>
                      <h5 class="fw-bolder mb-0">~5TB</h5>
                    </div>
                  </div>
                </div>
                <div class="d-grid">
                  <button class="btn btn-primary">Upgrade storage</button>
                </div>
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
        <div class="dropdown mb-2">
          <a type="button" id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton7">
            <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" class="icon-sm me-2"></i> <span class="">View</span></a>
            <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" class="icon-sm me-2"></i> <span class="">Edit</span></a>
            <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" class="icon-sm me-2"></i> <span class="">Delete</span></a>
            <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" class="icon-sm me-2"></i> <span class="">Print</span></a>
            <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" class="icon-sm me-2"></i> <span class="">Download</span></a>
          </div>
        </div>
      </div>

      <div class="table-responsive">
      <table class="table table-hover mb-0 border-secondary">
<thead>
<tr>
  <th class="pt-0" style="text-align: center; color: black;">ID</th>
  <th class="pt-0" style="text-align: center; color: black;">Complainant</th>
  <th class="pt-0" style="text-align: center; color: black;">Respondent</th>
  <th class="pt-0" style="text-align: center; color: black;">Complain Details</th>
  <th class="pt-0" style="text-align: center; color: black;">Schedule of mediation</th>
  <th class="pt-0" style="text-align: center; color: black;">Status</th>
</tr>
</thead>
<tbody>
{{-- 
@foreach($dash_blotter_records as $key => $dash_blott)
<tr>
  <td style="text-align: center;">{{ $key+1 }}</td>
  <td style="text-align: center;">{{ $dash_blott->complainant_name }}</td>
  <td style="text-align: center;">{{ $dash_blott->respondent_name }}</td>
  <td style="text-align: center;">{{ $dash_blott->complains_details }}</td>
  <td style="text-align: center;">{{ $dash_blott->schd_mediation }}</td>
  <td style="text-align: center">
    <form method="POST" action="{{ route('mark-as-done.blotter.record', ['id' => $dash_blott->id]) }}">
      @method('PUT')
      @csrf
      <button type="submit" class="btn btn-primary">Mark as Done</button>
    </form>
  </td>
</tr>
@endforeach --}}
@foreach($dash_blotter_records as $key => $dash_blott)
@if($dash_blott->status == 'Pending')
  <tr>
    <td style="text-align: center;">{{ $key+1 }}</td>
    <td style="text-align: center;">{{ $dash_blott->complainant_name }}</td>
    <td style="text-align: center;">{{ $dash_blott->respondent_name }}</td>
    <td style="text-align: center;">{{ $dash_blott->complains_details }}</td>
    <td style="text-align: center;">{{ $dash_blott->schd_mediation }}</td>
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
@endsection

