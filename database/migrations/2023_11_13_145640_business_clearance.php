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
        Schema::create('business_clearances', function (Blueprint $table) {
            $table->id();
            // $table->unsignedBigInteger('id')->default(0); // Change the column name to "resident_id"
            // $table->foreign('id')->references('id')->on('barangay_residents')->onDelete('cascade');
            $table->string('residentName');
            $table->string('residentPurok');
            $table->string('residentStatus');
            $table->string('business');
            $table->string('business_type');
            $table->date('date');
            $table->integer('ctc_no');
            $table->string('issued_at');
            $table->date('date_issued');
            $table->integer('or_no');
            $table->decimal('amount_paid', 10, 2);
            $table->string('authorized_by');
            $table->string('signed_by');
            // Add any additional fields you may need
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
