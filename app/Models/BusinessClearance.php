<?php

namespace App\Models;

use App\Models\BarangayResidents;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessClearance extends Model


{
    protected $table = 'business_clearances';

    public function residents()
    {
        return $this->hasMany('App\BarangayResidents');
    }

    protected $fillable = [
        'residentName',  // Add any other attributes you want to be mass assignable
        'residentPurok',
        'residentStatus',
        'business',
        'business_type',
        'date',
        'ctc_no',
        'issued_at',
        'date_issued',
        'or_no',
        'amount_paid',
        'authorized_by',
        'signed_by',
    ];
}

