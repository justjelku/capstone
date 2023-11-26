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
            $table->string('nature_cases')->nullable();
            $table->enum('status', ['Pending', 'Finished'])->default('Pending')->nullable();
            $table->datetime('schd_mediation')->nullable();
            $table->string('complains_details')->nullable();
            $table->string('respondent_name')->nullable();
            $table->string('respondent_address')->nullable();
            $table->string('complainant_name')->nullable();
            $table->string('complainant_address')->nullable();
            $table->string('settled_cases')->nullable();
            $table->string('action_taken')->nullable();
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
