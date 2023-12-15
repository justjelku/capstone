<?php

namespace App\Http\Controllers;

use App\Models\attendance;
use App\Models\Attendees;
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

    // public function attendees(Request $request)
    // {
    //     $attendee = new Attendees();
    //     $attendee->name=$request ->post('name');
    //     $attendee->household_no=$request ->post('household_no');
    //     $attendee->purok=$request ->post('purok');
    //     $attendee->first=$request ->post('first');
    //     $attendee->second=$request ->post('second');
    //     $attendee->third=$request ->post('third');
    //     $attendee->fourth=$request ->post('fourth');

    //     if($attendee -> save()) {
    //         return response() ->json([ 
    //             'success'=>true,
    //         ]);
    //     } else {
    //         return response() ->json([
    //             'false'=>false,
    //         ]);
    //     }

    // }

    public function attendees(Request $request)
    {
        // Extract data from the scanned QR code
        $qrData = explode('-', $request->input('scannedData'));
        $assemblyType = $request->input('assemblyType');
        $name = trim($qrData[0]);

        $name = ucfirst(strtolower($name));

        // Find the resident based on the name
        $resident = BarangayResidents::where('name', $name)->first();

        if ($resident) {
            $purok = $resident->purok;
            $householdNo = $resident->household_no;

            // Map assembly types to respective column values
            $assemblyTypeToColumnValue = [
                'First Quarter Assembly' => 'first',
                'Second Quarter Assembly' => 'second',
                'Third Quarter Assembly' => 'third',
                'Fourth Quarter Assembly' => 'fourth',
            ];

            // Determine the column value based on the assembly type
            $columnValue = $assemblyTypeToColumnValue[$assemblyType] ?? null;

            if ($columnValue !== null) {
                // Find or create the attendee based on name and household number
                $attendee = Attendees::updateOrCreate(
                    ['name' => $name, 'household_no' => $householdNo],
                    ['purok' => $purok, $columnValue => 'Present']
                );

                // Additional processing or response if needed
                return response()->json(['success' => true, 'attendee' => $attendee]);
            } else {
                // Handle the case where the assembly type is not recognized
                return response()->json(['success' => false, 'error' => 'Invalid assembly type']);
            }
        } else {
            // Handle the case where the resident is not found
            return response()->json(['success' => false, 'error' => 'Resident not found']);
        }
    }
}