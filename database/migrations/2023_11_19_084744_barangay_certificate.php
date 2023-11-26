<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('barangay_certificates', function (Blueprint $table) {
            $table->id();
            $table->string('residentName');
            $table->string('residentPurok');
            $table->string('residentStatus');
            $table->string('purpose');
            $table->date('date');
            $table->Integer('ctc_no');
            $table->string('issued_at');
            $table->date('date_issued');
            $table->string('authorized_by');
            $table->string('signed_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
