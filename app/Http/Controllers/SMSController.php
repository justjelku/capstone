<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SMSController extends Controller
{

    public function sendMessage(Request $request)
    {
    
        $apiKey = '83b670df544a5d8f26484df6ca4222b2a753bd60'; // Replace with your API key
        $phoneNumbers = preg_split('/\r\n|\r|\n/', $request->input('phoneNumbers'));
        $message = $request->input('message');

        foreach ($phoneNumbers as $phoneNumber) {
            $recipientNumber = trim($phoneNumber);
            // Send a separate API request for each recipient
            $response = Http::get('https://sms.teamssprogram.com/api/send', [
                'key' => $apiKey,
                'phone' => $recipientNumber,
                'message' => $message,
                // Add any other parameters if needed
            ]);
            // Handle responses accordingly
        }

        return view('Success');

    }
}
