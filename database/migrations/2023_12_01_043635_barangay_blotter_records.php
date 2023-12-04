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
        Schema::create('barangay_blotter_records', function (Blueprint $table) {
            $table->id();
            $table->string('nature_cases');
            $table->enum('status', ['Pending', 'Finished'])->default('Pending');
            $table->datetime('schd_mediation');
            $table->string('complains_details');
            $table->string('respondent_name');
            $table->string('respondent_address');
            $table->string('complainant_name');
            $table->string('complainant_address');
            $table->string('settled_cases');
            $table->string('action_taken');
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
