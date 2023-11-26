<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\BarangayAttendanceRecords;

use App\Models\BarangayAnnouncements;
use App\Models\BarangayBlotterRecords;
use App\Models\BarangayCertificates;
use App\Models\BarangayClearances;
use App\Models\BarangayOfficials;
use App\Models\BarangayResidents;
use App\Models\BarangayRevenues;

class BarangayAttendanceRecordsController extends Controller
{
    public function AttendanceRecords(){

        $attendance_records = BarangayAttendanceRecords::With('resident')->latest()->get();
        return view('frontend.barangay.barangay_attendance_records', compact('attendance_records'));

    } // End Method

    public function CreateAttendanceRecord(){

        return view('frontend.barangay.create_attendance_record');

    } // End Method

    public function storeAttendanceRecord(Request $request)
    {
        // Validation
        $request->validate([
            'assembly_type' => 'required', // Modify validation rules according to your table structure
            'event_date_time' => 'required',
            'venue' => 'required',
            'about' => 'required',
        ]);
    
        // Insert data into the "barangay_attendance_records" table
        BarangayAttendanceRecords::insert([
            'assembly_type' => $request->assembly_type,
            'event_date_time' => $request->event_date_time,
            'venue' => $request->venue,
            'about' => $request->about,
        ]);
    
        $notification = array(
            'message' => 'Attendance record created successfully',
            'alert-type' => 'success'
        );
    
        return redirect()->route('barangay.attendance.records')->with($notification);
    }
    // End Method

    public function EditAttendanceRecord($id){

        $edit_attendance_record = BarangayAttendanceRecords::findOrFail($id);
        return view('frontend.barangay.edit_attendance_record', compact('edit_attendance_record'));

    } // End Method

    public function updateAttendanceRecord(Request $request)
{
    $attendance_id = $request->id;

    // Update data in the "barangay_attendance_records" table
    BarangayAttendanceRecords::findOrFail($attendance_id)->update([
        'assembly_type' => $request->assembly_type, // Modify fields according to your table structure
        'event_date_time' => $request->event_date_time,
        'venue' => $request->venue,
        'about' => $request->about,
    ]);

    $notification = array(
        'message' => 'Attendance record updated successfully',
        'alert-type' => 'success'
    );

    return redirect()->route('barangay.attendance.records')->with($notification);
}//end method


    public function DeleteAttendanceRecord($id){

        BarangayAttendanceRecords::findOrFail($id)->delete();

        $notification = array(
            'message' => 'Attendance record deleted successfully',
            'alert-type' => 'success'
        );

        return redirect()->back()->with($notification);

    } // End Method

    public function ViewAttendanceRecord($id){

        $view_attendance_record = BarangayAttendanceRecords::findOrFail($id);

        return view('frontend.barangay.view_attendance_record', compact('view_attendance_record'));

   } // End method


}
