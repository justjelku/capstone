<nav class="sidebar">
  {{-- <div class="sidebar-header">
    <div class="sidebar-toggler not-active">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div> --}}
  <div class="sidebar-body">
    <a href="{{ route('admin.dashboard') }}" class="sidebar-brand">
      <img src="/image/logo.png" alt="Brgy. Imbatug Logo">
      <span style="color: white; font-size: 18px;">Brgy.Imbatug</span>
    </a>
    <ul class="nav">
      <li class="nav-item nav-category">Main</li>
      <li class="nav-item">
        <a href="{{ route('admin.dashboard') }}" class="nav-link">
          <i class="link-icon" data-feather="home"></i>
          <span class="link-title">Dashboard</span>
        </a>
      </li>
      {{-- end --}}
      <li class="nav-item nav-category">Community</li>
      <li class="nav-item">
        <a href="{{ route('barangay.officials') }}" class="nav-link ">
          <i class="link-icon" data-feather="users"></i>
          <span class="link-title">Officials</span>
        </a>
      </li>
      {{-- end --}}
      <li class="nav-item">
        <a href="{{ route('barangay.residents') }}" class="nav-link ">
          <i class="link-icon" data-feather="users"></i>
          <span class="link-title">Residents</span>
        </a>
      </li>
      {{-- end --}}
      <li class="nav-item nav-category">Services</li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <i class="link-icon" data-feather="file-text"></i>
          <span class="link-title">Forms</span>
        </a>
        <ul class="dropdown-menu" style="border: none">
          <li><a href="{{ route('certificate') }}" class="dropdown-item">Barangay Certificates</a></li>
          <li><a href="{{ route('clearances') }}" class="dropdown-item">Barangay Clearance</a></li>
          <li><a href="{{ route('barangay.business_clearance') }}" class="dropdown-item">Business Clearance </a></li>
        </ul>
      </li>
      {{-- end --}}
      <li class="nav-item nav-category">Records</li>
      <li class="nav-item">
        <a href="" class="nav-link ">
          <i class="link-icon" data-feather="home"></i>
          <span class="link-title">Household Information</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link ">
          <i class="link-icon" data-feather="map-pin"></i>
          <span class="link-title">Precinct Information</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="{{ route('barangay.blotter.records') }}" class="nav-link ">
          <i class="link-icon" data-feather="archive"></i>
          <span class="link-title">Blotter</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link ">
          <i class="link-icon" data-feather="check-circle"></i>
          <span class="link-title">Attendance</span>
        </a>
      </li>
      <li class="nav-item nav-category">Releases</li>
      <li class="nav-item">
        <a href="{{ route('barangay.announcements') }}" class="nav-link ">
          <i class="link-icon" data-feather="send"></i>
          <span class="link-title">Announcements</span>
        </a>
      </li>
      {{-- <li class="nav-item">
        <a href="" class="nav-link ">
          <i class="link-icon" data-feather="settings"></i>
          <span class="link-title">Settings</span>
        </a>
      </li> --}}
    </ul>
  </div>

  <script>
    $(document).ready(function() {
      $('.dropdown-toggle').dropdown();
    });
  </script>
</nav>
