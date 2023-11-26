<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\BarangayClearances;

use App\Models\BarangayAnnouncements;
use App\Models\BarangayAttendanceRecords;
use App\Models\BarangayBlotterRecords;
use App\Models\BarangayCertificates;
use App\Models\BarangayOfficials;
use App\Models\BarangayResidents;
use App\Models\BarangayRevenues;

class BarangayClearancesController extends Controller
{ 
    public function index(){

        $residents = BarangayResidents::all();
        return view('frontend.barangay.barangay_clearance', compact('residents'));
    } 



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
        'or_no' => 'required|integer',
        'amount_paid' => 'required|numeric|regex:/^\d+(\.\d{1,2})?$/',
        'authorized_by' => 'required|in:Punong Barangay,Sangguniang Barangay Member',
        'signed_by' => 'required|string',
    ]);
    
    // Save the validated data to the BusinessClearance table
    BarangayClearances::create($validatedData);
    
    // Redirect or return a response as needed
    return redirect()->back()->with('success', 'Business clearance saved successfully');
    
    }
        public function fetch()
    {
        $barangay_clearances = BarangayClearances::latest()->get();
        return view('frontend.barangay.barangay_clearance', compact('barangay_clearance'));
    }
    
    
    
    public function pdf()
    {
        // Fetch data from the database
        // $business_clearances = BusinessClearance::all();
        $barangay_clearances = BarangayClearances::latest()->limit(1)->get();
    
        // $business_clearances =BusinessClearance::find(1);
       
        // Set the paper size and orientation
        $pdf = PDF::setPaper('legal', 'portrait')->loadView('pdf.clearance_template', [
            'barangay_clearances' => $barangay_clearances,
            'imagePath' => public_path('image/logo.png'),
        ]);
    
        // Modify the response to display the PDF in the browser.
        return $pdf->stream('brgy_clearance_template.pdf');
    }



}
