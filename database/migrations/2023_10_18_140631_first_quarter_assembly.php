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


        {
            Schema::create('first_quarter_assembly', function (Blueprint $table) {
                $table->id();
                $table->string('assembly_type')->nullable();
                $table->datetime('date')->nullable();
                $table->string('venue')->nullable();
                $table->string('about')->nullable();
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
