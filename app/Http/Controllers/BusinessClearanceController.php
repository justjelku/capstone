<?php

namespace App\Http\Controllers;


use App\Models\BarangayResidents;
use App\Models\BusinessClearance;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;



class BusinessClearanceController extends Controller
{
    

public function Clearance()
{
    $residents = BarangayResidents::all();
    return view('frontend.barangay.business_clearance', compact('residents'));
}

// YourController.php


public function saveBusinessClearance(Request $request)
{
    // Validate the incoming request data
$validatedData = $request->validate([
    'residentName' => 'required|string',
    'residentPurok' => 'required|string',
    'residentStatus' => 'required|string',
    'business' => 'required|string',
    'business_type' => 'required|in:Old,New',
    'date' => 'required|date',
    'ctc_no' => 'required|numeric',
    'issued_at' => 'required|string',
    'date_issued' => 'required|date',
    'or_no' => 'required|numeric',
    'amount_paid' => 'required|numeric|regex:/^\d+(\.\d{1,2})?$/',
    'authorized_by' => 'required|in:Punong Barangay,Sangguniang Barangay Member',
    'signed_by' => 'required|string',
]);

// Save the validated data to the BusinessClearance table
BusinessClearance::create($validatedData);

// Redirect or return a response as needed
return redirect()->back()->with('success', 'Business clearance saved successfully');

}

public function fetchBusinessClearance()
{
    $business_clearances = BusinessClearance::latest()->get();
    return view('frontend.barangay.business_clearance', compact('business_clearances'));
}

 
public function BusinessClearanceTemplate()
{
    // Fetch data from the database
    // $business_clearances = BusinessClearance::all();
    $business_clearances = BusinessClearance::latest()->limit(1)->get();

    // $business_clearances =BusinessClearance::find(1);
   
    // Set the paper size and orientation
    $pdf = PDF::setPaper('legal', 'portrait')->loadView('pdf.businessClearance_template', [
        'business_clearances' => $business_clearances,
        'imagePath' => public_path('image/logo.png'),
    ]);

    // Modify the response to display the PDF in the browser.
    return $pdf->stream('business_clearance_template.pdf');
}






}
