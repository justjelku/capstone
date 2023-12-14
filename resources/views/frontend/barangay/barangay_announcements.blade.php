<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/yeti/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <style>
        /* Additional custom styles */
        .custom-card {
            border: 1px solid #6c757d; /* Border color */
        }
    </style>
</head>
<body>

@extends('admin.admin_dashboard')
@section('admin')
    <div class="page-content">
        <nav class="page-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">Releases</li>
                <li class="breadcrumb-item active" aria-current="page">Announcements</li>
            </ol>
        </nav>

        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card custom-card">
                        <div class="card-body">
                            <h1 class="text-center mb-4">Send Bulk SMS</h1>
                            <form method="POST" action="{{ url('/send-message') }}">
                                @csrf
                                <div class="mb-3">
                                    <label for="phoneNumbers" class="form-label">Recipient Phone Numbers (one per line):</label>
                                    <textarea class="form-control" id="phoneNumbers" name="phoneNumbers" rows="4" required></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">Message:</label>
                                    <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="sim" class="form-label">SIM Slot (optional):</label>
                                    <input type="text" class="form-control" id="sim" name="sim">
                                </div>
                                <div class="mb-3">
                                    <label for="priority" class="form-label">Priority (0 or 1, optional):</label>
                                    <input type="text" class="form-control" id="priority" name="priority">
                                </div>
                                <button type="submit" class="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

<!-- Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
