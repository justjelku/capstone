<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use App\Models\BarangayAttendanceRecords;
class BarangayResidents extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function getAgeAttribute()
    {
        // Calculate the age based on the 'birthdate' attribute
        $birthdate = Carbon::parse($this->attributes['birthdate']);
        $currentDate = Carbon::now();

        return $birthdate->diffInYears($currentDate);
        
    }


    protected $table = 'barangay_residents';
    public function businessClearances()
    {
        return $this->hasMany('App\BusinessClearance');
    }

    
}