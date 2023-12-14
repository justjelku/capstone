<?php

namespace App\Http\Controllers;

use App\Models\attendance;
use Illuminate\Http\Request;
use App\Models\BarangayAttendanceRecords;
use App\Models\BarangayAnnouncements;
use App\Models\BarangayBlotterRecords;
use App\Models\BarangayCertificates;
use App\Models\BarangayClearances;
use App\Models\BarangayOfficials;
use App\Models\BarangayResidents;
use App\Models\BarangayRevenues;


class attendanceController extends Controller
{
    public function index(Request $request){
        $purok = $request->input('purok', 'Purok 1');
        $selectedPurok = $purok;
        $residents = BarangayResidents::where('purok', $purok)
            ->orderBy('household_no', 'asc')
            ->get();

        // $residents = BarangayResidents::all();
        return view('frontend.barangay.barangay_attendance_records', compact('residents', 'selectedPurok'));
    }

    public function attendance(Request $request)
    {
        $attendance = new attendance();
        $attendance->assembly_type=$request ->post('assembly_type');
        $attendance->date=$request ->post('date');
        $attendance->venue=$request ->post('venue');
        $attendance->about=$request ->post('about');

        if($attendance -> save()) {
            return response() ->json([
                'success'=>true,
            ]);
        } else {
            return response() ->json([
                'false'=>false,
            ]);
        }

    }
}