<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('contact_name');
            $table->string('email');
            $table->string('phone');
            $table->string('job_title');
            $table->string('city');
            $table->string('street');
            $table->string('postalcode');
            $table->string('state');
            $table->string('county');
            $table->string('country');
            $table->decimal('latitude');
            $table->decimal('longitude');
            $table->string('fax');
            $table->string('business_type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
