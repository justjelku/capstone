<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
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

class BarangayBlotterRecordsController extends Controller
{
    public function BlotterRecords(){

        $blotter_records = BarangayBlotterRecords::latest()->get();
        return view('backend.barangay.barangay_blotter_records', compact('blotter_records'));

    } // End method

    public function CreateBlotterRecord(){

        return view('backend.barangay.create_blotter_record');

    } // End method
    public function StoreBlotterRecord(Request $request) {
        // Validation
        $request->validate([
            'incident_type' => 'required',
            'schd_mediation' => 'required',
            'status' => 'required',
            'complains_details' => 'required',
            'respondent_name' => 'required',
            'respondent_address' => 'required',
            'respondent_phone' => 'required',
            'respondent_age' => 'required',
            'complainant_name' => 'required',
            'complainant_address' => 'required',
            'complainant_phone' => 'required',
            'complainant_age' => 'required',
            'list_mediators' => 'required',
        ]);
    
    
        // Insert the Blotter Record into the database
        BarangayBlotterRecords::insert([
            'incident_type' => $request->incident_type,
            'schd_mediation' => $request->schd_mediation,
            'status' => $request->status,
            'complains_details' => $request->complains_details,
            'respondent_name' => $request->respondent_name,
            'respondent_address' => $request->respondent_address,
            'respondent_phone' => $request->respondent_phone,
            'respondent_age' => $request->respondent_age,
            'complainant_name' => $request->complainant_name,
            'complainant_address' => $request->complainant_address,
            'complainant_phone' => $request->complainant_phone,
            'complainant_age' => $request->complainant_age,
            'list_mediators' => $request->list_mediators,
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
        return view('backend.barangay.edit_blotter_record', compact('edit_blotter_record'));

    } // End method

    public function UpdateBlotterRecord(Request $request){

       $blotter_id = $request->id;

       BarangayBlotterRecords::findOrFail($blotter_id)->update([
        'incident_type' => $request->incident_type,
            'schd_mediation' => $request->schd_mediation,
            'status' => $request->status,
            'complains_details' => $request->complains_details,
            'respondent_name' => $request->respondent_name,
            'respondent_address' => $request->respondent_address,
            'respondent_phone' => $request->respondent_phone,
            'respondent_age' => $request->respondent_age,
            'complainant_name' => $request->complainant_name,
            'complainant_address' => $request->complainant_address,
            'complainant_phone' => $request->complainant_phone,
            'complainant_age' => $request->complainant_age,
            'list_mediators' => $request->list_mediators,
        
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

        return view('backend.barangay.view_blotter_record', compact('view_blotter_record'));

   } // End method

   //Fetch data blotter records to admin dashboard
   public function DashBlotterRecords(){

    $dash_blotter_records = BarangayBlotterRecords::latest()->get();

    return view('admin.index', compact('dash_blotter_records'));

   } // End method


}
