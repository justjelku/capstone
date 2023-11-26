<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\BarangayCertificates;

use App\Models\BarangayAnnouncements;
use App\Models\BarangayAttendanceRecords;
use App\Models\BarangayBlotterRecords;
use App\Models\BarangayClearances;
use App\Models\BarangayOfficials;
use App\Models\BarangayResidents;
use App\Models\BarangayRevenues;

class BarangayCertificatesController extends Controller
{
    public function index(){

        // $certificates = BarangayCertificates::latest()->get();
        // return view('backend.barangay.barangay_certificates', compact('certificates'));

        $residents = BarangayResidents::all();
        return view('frontend.barangay.barangay_certificate', compact('residents'));
    } // End method

    public function store(Request $request)
{
    // Validate the incoming request data
$validatedData = $request->validate([
    'residentName' => 'required|string',
    'residentPurok' => 'required|string',
    'residentStatus' => 'required|string',
    'purpose' => 'required|string',
    'date' => 'required|date',
    'ctc_no' => 'required|numeric',
    'issued_at' => 'required|string',
    'date_issued' => 'required|date',
    'authorized_by' => 'required|in:Punong Barangay,Sangguniang Barangay Member',
    'signed_by' => 'required|string',
]);

// Save the validated data to the BusinessClearance table
BarangayCertificates::create($validatedData);

// Redirect or return a response as needed
return redirect()->back()->with('success', 'Business clearance saved successfully');

}
    public function fetch()
{
    $barangay_certificates = BarangayCertificates::latest()->get();
    return view('frontend.barangay.barangay_certificate', compact('barangay_certificates'));
}



public function pdf()
{
    // Fetch data from the database
    // $business_clearances = BusinessClearance::all();
    $barangay_certificates = BarangayCertificates::latest()->limit(1)->get();

    // $business_clearances =BusinessClearance::find(1);
   
    // Set the paper size and orientation
    $pdf = PDF::setPaper('legal', 'portrait')->loadView('pdf.certificate_template', [
        'barangay_certificates' => $barangay_certificates,
        'imagePath' => public_path('image/logo.png'),
    ]);

    // Modify the response to display the PDF in the browser.
    return $pdf->stream('brgy_certificate_template.pdf');
}




//     public function BarangayCertificate(){

//         $barangay_certificate = BarangayCertificates::latest()->get();
//         return view('backend.barangay.barangay_certificate', compact('barangay_certificate'));

//     } // End method

//     public function BrgyCertificateTemplate()
// {
//     // Set the paper size and orientation
//     $pdf = Pdf::setPaper('legal', 'portrait')->loadView('pdf.certificate_template', ['imagePath' => public_path('image/logo.png')]);

//     // Modify the response to display the PDF in the browser.
//     return $pdf->stream('brgy_certificate_template.pdf');
// }


}
