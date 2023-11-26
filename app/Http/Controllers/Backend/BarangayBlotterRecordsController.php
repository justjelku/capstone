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

use Dompdf\Options;


class BarangayBlotterRecordsController extends Controller
{
    public function BlotterRecords(){

        $blotter_records = BarangayBlotterRecords::latest()->get();
        return view('frontend.barangay.barangay_blotter_records', compact('blotter_records'));

    } // End method

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
 
public function GeneratePDF()
{
    // Set the paper size and orientation
    $pdf = Pdf::setPaper('legal', 'landscape')->loadView('pdf.generate_blotter', ['imagePath' => public_path('image/logo.png')]);

    // Modify the response to display the PDF in the browser.
    return $pdf->stream('generate_blotter.pdf');
}

public function displayQuarterlyData()
{
    // Determine the current quarter based on the current date
    $currentDate = now();
    $currentQuarter = ceil($currentDate->format('n') / 3); // Calculate the current quarter

    // Calculate date ranges for the current quarter
    switch ($currentQuarter) {
        case 1:
            $startQuarter = $currentDate->format('Y') . '-01-01';
            $endQuarter = $currentDate->format('Y') . '-03-31';
            break;
        case 2:
            $startQuarter = $currentDate->format('Y') . '-04-01';
            $endQuarter = $currentDate->format('Y') . '-06-30';
            break;
        case 3:
            $startQuarter = $currentDate->format('Y') . '-07-01';
            $endQuarter = $currentDate->format('Y') . '-09-30';
            break;
        case 4:
            $startQuarter = $currentDate->format('Y') . '-10-01';
            $endQuarter = $currentDate->format('Y') . '-12-31';
            break;
    }

    // Fetch data for 'Mediation' in the current quarter
    $MediationCount = BarangayBlotterRecords::whereBetween('created_at', [$startQuarter, $endQuarter])
        ->where('settled_cases', 'Mediation')
        ->count();

    // Fetch data for 'Conciliated' in the current quarter
    $ConciliatedCount = BarangayBlotterRecords::whereBetween('created_at', [$startQuarter, $endQuarter])
        ->where('settled_cases', 'Conciliated')
        ->count();

    $ArbitrutionCount = BarangayBlotterRecords::whereBetween('created_at', [$startQuarter, $endQuarter])
        ->where('settled_cases', 'Arbitrution')
        ->count();

    $RepudiatedCount = BarangayBlotterRecords::whereBetween('created_at', [$startQuarter, $endQuarter])
        ->where('action_taken', 'Repudiated')
        ->count();

    $DismissedCount = BarangayBlotterRecords::whereBetween('created_at', [$startQuarter, $endQuarter])
        ->where('action_taken', 'Dismissed')
        ->count();

    $ReferredCount = BarangayBlotterRecords::whereBetween('created_at', [$startQuarter, $endQuarter])
        ->where('action_taken', 'Referred')
        ->count();

    $CertifiedCount = BarangayBlotterRecords::whereBetween('created_at', [$startQuarter, $endQuarter])
        ->where('action_taken', 'Certified')
        ->count();

    $PendingCount = BarangayBlotterRecords::whereBetween('created_at', [$startQuarter, $endQuarter])
        ->where('action_taken', 'Pending')
        ->count();
    


    return view('frontend.barangay.barangay_blotter_records', compact('MediationCount', 'ConciliatedCount','PendingCount', 'CertifiedCount', 
    'ReferredCount', 'DismissedCount',  'RepudiatedCount', 'ArbitrutionCount'));
}




 


}
