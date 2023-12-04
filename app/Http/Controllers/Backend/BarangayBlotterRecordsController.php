<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Barryvdh\DomPDF\Facade\Pdf;
use Barryvdh\DomPDF\PDF as DomPDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\BarangayBlotterRecords;

use App\Models\BarangayAnnouncements;
use App\Models\BarangayAttendanceRecords;
use App\Models\BarangayCertificates;
use App\Models\BarangayClearances;
use App\Models\BarangayOfficials;
use App\Models\BarangayResidents;
use App\Models\BarangayRevenues;
use Carbon\Carbon;


use Dompdf\Options;


class BarangayBlotterRecordsController extends Controller
{
    // public function BlotterRecords(){

    //     $blotter_records = BarangayBlotterRecords::latest()->get();
    //     return view('frontend.barangay.barangay_blotter_records', compact('blotter_records'));

    // } 
    // public function BlotterRecords(Request $request) {
    //     $selectedYear = $request->input('year');
    //     $blotter_records = BarangayBlotterRecords::query();
    
    //     if ($selectedYear) {
    //         $blotter_records->whereYear('updated_at', $selectedYear);
    //     } else {
    //         $currentYear = date('Y');
    //         $blotter_records->whereYear('updated_at', $currentYear);
    //     }
    
    //     $blotter_records = $blotter_records->latest()->get();
    
    //     return view('frontend.barangay.barangay_blotter_records', compact('blotter_records', 'selectedYear'));
    // }
    public function BlotterRecords(Request $request) {
        $selectedYear = $request->input('year');
        $blotter_records = BarangayBlotterRecords::query();
    
        if ($selectedYear) {
            $blotter_records->whereYear('updated_at', $selectedYear);
        } else {
            $currentYear = date('Y');
            $blotter_records->whereYear('updated_at', $currentYear);
            $selectedYear = $currentYear; // Set the selected year to the current year
        }
    
        $blotter_records = $blotter_records->latest()->get();
    
        return view('frontend.barangay.barangay_blotter_records', compact('blotter_records', 'selectedYear'));
    }
    
    

    public function CreateBlotterRecord(){

        return view('frontend.barangay.create_blotter_record');

    } // End method
    public function StoreBlotterRecord(Request $request) {
        // Validation
        $request->validate([
            'nature_cases' => 'required',
            'schd_mediation' => 'required',
            'status' => 'required',
            'complains_details' => 'required',
            'respondent_name' => 'required',
            'respondent_address' => 'required',
            'complainant_name' => 'required',
            'complainant_address' => 'required',
        ]);
    
    
        // Insert the Blotter Record into the database
        BarangayBlotterRecords::insert([
            'nature_cases' => $request->nature_cases,
            'schd_mediation' => $request->schd_mediation,
            'status' => $request->status,
            'complains_details' => $request->complains_details,
            'respondent_name' => $request->respondent_name,
            'respondent_address' => $request->respondent_address,
            'complainant_name' => $request->complainant_name,
            'complainant_address' => $request->complainant_address,
            'settled_cases' => $request->settled_cases,
            'action_taken' => $request->action_taken,
            
        ]);
    
        $notification = array(
            'message' => 'Blotter record added successfully',
            'alert-type' => 'success'
        );
    
        return redirect()->route('barangay.blotter.records')->with($notification);
    }
    

   // End method

    public function EditBlotterRecord($id){

        $edit_blotter_record = BarangayBlotterRecords::findOrFail($id);
        return view('frontend.barangay.edit_blotter_record', compact('edit_blotter_record'));

    } // End method

    public function UpdateBlotterRecord(Request $request){

       $blotter_id = $request->id;

       BarangayBlotterRecords::findOrFail($blotter_id)->update([
        'nature_cases' => $request->nature_cases,
            'schd_mediation' => $request->schd_mediation,
            'status' => $request->status,
            'complains_details' => $request->complains_details,
            'respondent_name' => $request->respondent_name,
            'respondent_address' => $request->respondent_address,
            'complainant_name' => $request->complainant_name,
            'complainant_address' => $request->complainant_address,
            'settled_cases' => $request->settled_cases,
            'action_taken' => $request->action_taken,
       ]);

       $notification = array(
           'message' => 'Blotter record updated successfully',
           'alert-type' => 'success'
       );

       return redirect()->route('barangay.blotter.records')->with($notification);

   } // End method

//    for update status
public function MarkBlotterRecordAsDone(Request $request){

    $blotter_id = $request->route('id'); // Corrected

    BarangayBlotterRecords::findOrFail($blotter_id)->update([
      'status' => 'finished',
    ]);

    $notification = array(
      'message' => 'Blotter record marked as done successfully',
      'alert-type' => 'success'
    );

    return redirect()->route('barangay.blotter.records')->with($notification);

}


   public function DeleteBlotterRecord($id){

        BarangayBlotterRecords::findOrFail($id)->delete();

        $notification = array(
            'message' => 'Blotter record deleted successfully',
            'alert-type' => 'success'
        );
 
        return redirect()->back()->with($notification);

   } // End method

   public function ViewBlotterRecord($id){

        $view_blotter_record = BarangayBlotterRecords::findOrFail($id);

        return view('frontend.barangay.view_blotter_record', compact('view_blotter_record'));

   } // End method

   //Fetch data blotter records to admin dashboard
   public function DashBlotterRecords(){

    $dash_blotter_records = BarangayBlotterRecords::latest()->get();

    return view('admin.index', compact('dash_blotter_records'));

   } // End method
 
// public function FirstQuarter()
// {

//     $blotter = BarangayBlotterRecords::latest()->limit(1)->get();
//     $pdf = PDF::setPaper('legal', 'landscape')->loadView('pdf.generate_blotter1', [
//         'blotters' => $blotter,
//         'imagePath' => public_path('image/logo.png'),
//     ]);
//     return $pdf->stream('generate_blotter.pdf');
// }

public function FirstQuarter()
{
    $currentYear = date('Y');
    
    // Fetching counts directly from the database
    $criminalCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 1) // October
        ->whereMonth('updated_at', '<=', 3) // December
        ->where('nature_cases', 'criminal')
        ->count();

    $civilCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 1) // October
        ->whereMonth('updated_at', '<=', 3) // December
        ->where('nature_cases', 'civil')
        ->count();

    $othersCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 1) // October
        ->whereMonth('updated_at', '<=', 3) // December
        ->where('nature_cases', 'others')
        ->count();

    $totalCount = $criminalCount + $civilCount + $othersCount;

    $mediationCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 1) // October
        ->whereMonth('updated_at', '<=', 3) // December
        ->where('settled_cases', 'mediation')
        ->count();

    $conciliatedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 1) // October
        ->whereMonth('updated_at', '<=', 3) // December
        ->where('settled_cases', 'conciliated')
        ->count();

    $arbitrutionCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 1) // October
        ->whereMonth('updated_at', '<=', 3) // December
        ->where('settled_cases', 'arbitrution')
        ->count();

        $totalSettled = $mediationCount + $conciliatedCount + $arbitrutionCount;

    
    $repudiatedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 1) // October
        ->whereMonth('updated_at', '<=', 3) // December
        ->where('action_taken', 'repudiated')
        ->count();

    $dismissedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 1) // October
        ->whereMonth('updated_at', '<=', 3) // December
        ->where('action_taken', 'dismissed')
        ->count();

    $referredCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 1) // October
        ->whereMonth('updated_at', '<=', 3) // December
        ->where('action_taken', 'referred')
        ->count();
    
    $certifiedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 1) // October
        ->whereMonth('updated_at', '<=', 3) // December
        ->where('action_taken', 'certified')
        ->count();

    $pendingCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 1) // October
        ->whereMonth('updated_at', '<=', 3) // December
        ->where('action_taken', 'pending')
        ->count();


    $totalAction = $repudiatedCount + $dismissedCount + $referredCount +  
    $certifiedCount + $pendingCount;

    $grandTotal = $totalCount + $totalSettled + $totalAction;

    $pdf = PDF::setPaper('legal', 'landscape')->loadView('pdf.generate_blotter1', [
        'criminalCount' => $criminalCount,
        'civilCount' =>  $civilCount,
        'othersCount' =>  $othersCount,
        'totalCount' =>  $totalCount,
        'mediationCount' =>  $mediationCount,
        'conciliatedCount' => $conciliatedCount,
        'arbitrutionCount' => $arbitrutionCount,
        'totalSettled' =>  $totalSettled,
        'repudiatedCount' => $repudiatedCount,
        'dismissedCount' =>  $dismissedCount,
        'referredCount' => $referredCount,
        'certifiedCount' => $certifiedCount,
        'pendingCount' => $pendingCount,
        'totalAction' => $totalAction,
        'grandTotal' => $grandTotal,
        'imagePath' => public_path('image/logo.png'),
        
    ]);
    return $pdf->stream('generate_blotter.pdf');
}


public function SecondQuarter()
{
    $currentYear = date('Y');
    
    // Fetching counts directly from the database
    $criminalCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 4) // October
        ->whereMonth('updated_at', '<=', 6) // December
        ->where('nature_cases', 'criminal')
        ->count();

    $civilCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 4) // October
        ->whereMonth('updated_at', '<=', 6) // December
        ->where('nature_cases', 'civil')
        ->count();

    $othersCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 4) // October
        ->whereMonth('updated_at', '<=', 6) // December
        ->where('nature_cases', 'others')
        ->count();

    $totalCount = $criminalCount + $civilCount + $othersCount;

    $mediationCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 4) // October
        ->whereMonth('updated_at', '<=', 6) // December
        ->where('settled_cases', 'mediation')
        ->count();

    $conciliatedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 4) // October
        ->whereMonth('updated_at', '<=', 6) // December
        ->where('settled_cases', 'conciliated')
        ->count();

    $arbitrutionCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 4) // October
        ->whereMonth('updated_at', '<=', 6) // December
        ->where('settled_cases', 'arbitrution')
        ->count();

        $totalSettled = $mediationCount + $conciliatedCount + $arbitrutionCount;

    
    $repudiatedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 4) // October
        ->whereMonth('updated_at', '<=', 6) // December
        ->where('action_taken', 'repudiated')
        ->count();

    $dismissedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 4) // October
        ->whereMonth('updated_at', '<=', 6) // December
        ->where('action_taken', 'dismissed')
        ->count();

    $referredCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 4) // October
        ->whereMonth('updated_at', '<=', 6) // December
        ->where('action_taken', 'referred')
        ->count();
    
    $certifiedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 4) // October
        ->whereMonth('updated_at', '<=', 6) // December
        ->where('action_taken', 'certified')
        ->count();

    $pendingCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 4) // October
        ->whereMonth('updated_at', '<=', 6) // December
        ->where('action_taken', 'pending')
        ->count();


    $totalAction = $repudiatedCount + $dismissedCount + $referredCount +  
    $certifiedCount + $pendingCount;

    $grandTotal = $totalCount + $totalSettled + $totalAction;

    $pdf = PDF::setPaper('legal', 'landscape')->loadView('pdf.generate_blotter2', [
        'criminalCount' => $criminalCount,
        'civilCount' =>  $civilCount,
        'othersCount' =>  $othersCount,
        'totalCount' =>  $totalCount,
        'mediationCount' =>  $mediationCount,
        'conciliatedCount' => $conciliatedCount,
        'arbitrutionCount' => $arbitrutionCount,
        'totalSettled' =>  $totalSettled,
        'repudiatedCount' => $repudiatedCount,
        'dismissedCount' =>  $dismissedCount,
        'referredCount' => $referredCount,
        'certifiedCount' => $certifiedCount,
        'pendingCount' => $pendingCount,
        'totalAction' => $totalAction,
        'grandTotal' => $grandTotal,
        'imagePath' => public_path('image/logo.png'),
        
    ]);
    return $pdf->stream('generate_blotter.pdf');
}


public function ThirdQuarter()
{
    $currentYear = date('Y');
    
    // Fetching counts directly from the database
    $criminalCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 7) // October
        ->whereMonth('updated_at', '<=', 9) // December
        ->where('nature_cases', 'criminal')
        ->count();

    $civilCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 7) // October
        ->whereMonth('updated_at', '<=', 9) // December
        ->where('nature_cases', 'civil')
        ->count();

    $othersCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 7) // October
        ->whereMonth('updated_at', '<=', 9) // December
        ->where('nature_cases', 'others')
        ->count();

    $totalCount = $criminalCount + $civilCount + $othersCount;

    $mediationCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 7) // October
        ->whereMonth('updated_at', '<=', 9) // December
        ->where('settled_cases', 'mediation')
        ->count();

    $conciliatedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 7) // October
        ->whereMonth('updated_at', '<=', 9) // December
        ->where('settled_cases', 'conciliated')
        ->count();

    $arbitrutionCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 7) // October
        ->whereMonth('updated_at', '<=', 9) // December
        ->where('settled_cases', 'arbitrution')
        ->count();

        $totalSettled = $mediationCount + $conciliatedCount + $arbitrutionCount;

    
    $repudiatedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 7) // October
        ->whereMonth('updated_at', '<=', 9) // December
        ->where('action_taken', 'repudiated')
        ->count();

    $dismissedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 7) // October
        ->whereMonth('updated_at', '<=', 9) // December
        ->where('action_taken', 'dismissed')
        ->count();

    $referredCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 7) // October
        ->whereMonth('updated_at', '<=', 9) // December
        ->where('action_taken', 'referred')
        ->count();
    
    $certifiedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 7) // October
        ->whereMonth('updated_at', '<=', 9) // December
        ->where('action_taken', 'certified')
        ->count();

    $pendingCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 7) // October
        ->whereMonth('updated_at', '<=', 9) // December
        ->where('action_taken', 'pending')
        ->count();


    $totalAction = $repudiatedCount + $dismissedCount + $referredCount +  
    $certifiedCount + $pendingCount;

    $grandTotal = $totalCount + $totalSettled + $totalAction;

    $pdf = PDF::setPaper('legal', 'landscape')->loadView('pdf.generate_blotter3', [
        'criminalCount' => $criminalCount,
        'civilCount' =>  $civilCount,
        'othersCount' =>  $othersCount,
        'totalCount' =>  $totalCount,
        'mediationCount' =>  $mediationCount,
        'conciliatedCount' => $conciliatedCount,
        'arbitrutionCount' => $arbitrutionCount,
        'totalSettled' =>  $totalSettled,
        'repudiatedCount' => $repudiatedCount,
        'dismissedCount' =>  $dismissedCount,
        'referredCount' => $referredCount,
        'certifiedCount' => $certifiedCount,
        'pendingCount' => $pendingCount,
        'totalAction' => $totalAction,
        'grandTotal' => $grandTotal,
        'imagePath' => public_path('image/logo.png'),
        
    ]);
    return $pdf->stream('generate_blotter.pdf');
}




// public function FourthQuarter()
// {
//     $currentYear = date('Y');
//     $blotter = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
//         ->whereMonth('updated_at', '>=', 10) // January
//         ->whereMonth('updated_at', '<=', 12) // March
//         ->latest()
//         ->get();

//     // Check if no records were found
//     if ($blotter->isEmpty()) {
//         return "No data available for the first quarter of $currentYear.";
//     }

//     $pdf = PDF::setPaper('legal', 'landscape')->loadView('pdf.generate_blotter1', [
//         'blotters' => $blotter,
//         'imagePath' => public_path('image/logo.png'),
//     ]);
    
//     return $pdf->stream('generate_blotter.pdf');
// }
public function FourthQuarter()
{
   
    
    $currentYear = date('Y');
    
    // Fetching counts directly from the database
    $criminalCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 10) // October
        ->whereMonth('updated_at', '<=', 12) // December
        ->where('nature_cases', 'criminal')
        ->count();

    $civilCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 10) // October
        ->whereMonth('updated_at', '<=', 12) // December
        ->where('nature_cases', 'civil')
        ->count();

    $othersCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 10) // October
        ->whereMonth('updated_at', '<=', 12) // December
        ->where('nature_cases', 'others')
        ->count();

    $totalCount = $criminalCount + $civilCount + $othersCount;

    $mediationCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 10) // October
        ->whereMonth('updated_at', '<=', 12) // December
        ->where('settled_cases', 'mediation')
        ->count();

    $conciliatedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 10) // October
        ->whereMonth('updated_at', '<=', 12) // December
        ->where('settled_cases', 'conciliated')
        ->count();

    $arbitrutionCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 10) // October
        ->whereMonth('updated_at', '<=', 12) // December
        ->where('settled_cases', 'arbitrution')
        ->count();

        $totalSettled = $mediationCount + $conciliatedCount + $arbitrutionCount;

    
    $repudiatedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 10) // October
        ->whereMonth('updated_at', '<=', 12) // December
        ->where('action_taken', 'repudiated')
        ->count();

    $dismissedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 10) // October
        ->whereMonth('updated_at', '<=', 12) // December
        ->where('action_taken', 'dismissed')
        ->count();

    $referredCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 10) // October
        ->whereMonth('updated_at', '<=', 12) // December
        ->where('action_taken', 'referred')
        ->count();
    
    $certifiedCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 10) // October
        ->whereMonth('updated_at', '<=', 12) // December
        ->where('action_taken', 'certified')
        ->count();

    $pendingCount = BarangayBlotterRecords::whereYear('updated_at', $currentYear)
        ->whereMonth('updated_at', '>=', 10) // October
        ->whereMonth('updated_at', '<=', 12) // December
        ->where('action_taken', 'pending')
        ->count();


    $totalAction = $repudiatedCount + $dismissedCount + $referredCount +  
    $certifiedCount + $pendingCount;

    $grandTotal = $totalCount + $totalSettled + $totalAction;

    $pdf = PDF::setPaper('legal', 'landscape')->loadView('pdf.generate_blotter4', [
        'criminalCount' => $criminalCount,
        'civilCount' =>  $civilCount,
        'othersCount' =>  $othersCount,
        'totalCount' =>  $totalCount,
        'mediationCount' =>  $mediationCount,
        'conciliatedCount' => $conciliatedCount,
        'arbitrutionCount' => $arbitrutionCount,
        'totalSettled' =>  $totalSettled,
        'repudiatedCount' => $repudiatedCount,
        'dismissedCount' =>  $dismissedCount,
        'referredCount' => $referredCount,
        'certifiedCount' => $certifiedCount,
        'pendingCount' => $pendingCount,
        'totalAction' => $totalAction,
        'grandTotal' => $grandTotal,
        'imagePath' => public_path('image/logo.png'),
        
    ]);
    return $pdf->stream('generate_blotter.pdf');
}



}
