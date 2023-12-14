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
        Schema::create('attendances', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->string('assembly_type'); // Assembly type as a string
            $table->string('date'); // Date of the assembly
            $table->string('venue'); // Venue where the assembly will be held
            $table->string('about'); // About the assembly
            $table->timestamps(); // Created at and Updated at timestamps
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
