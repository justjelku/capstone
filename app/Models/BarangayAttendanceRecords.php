<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\BarangayResidents;

class BarangayAttendanceRecords extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function resident()
    {
        return $this->belongsTo(BarangayResidents::class, 'resident_id'); // 'resident_id' is the foreign key in attendance_records table
    }
}
