<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Barangay Certificates</title>
    <style>

        .container {
            display: flex;
            align-items: center;
            /* justify-content: center; */
            height: 100vh;
            font-size: 12pt;
           
        }

        .logo {
            width: 150px; /* Adjust the width as needed */
            height: auto;
            margin-right: 20px; /* Add some space between the logo and paragraph */
        }

        .content {
            flex: 1; /* Allow the paragraph to take up remaining space */
        }
        .paragraph-container {
            text-align: center;
            margin-top: -130px;
        }
    </style>
</head>

<body>
    @foreach($business_clearances as $business_clearance)

    <div class="container">
        <div class="logo-container">
            <img src="data:image/png;base64,{{ base64_encode(file_get_contents($imagePath)) }}" class="img-fluid logo" alt="Logo">

        </div>
        <div class="content paragraph-container">
            <p style="margin-bottom: 2px;">Republic of the Philippines</p>
            <p style="margin-bottom: 2px;">PROVINCE OF BUKIDNON</p>
            <p style="margin-bottom: 2px;">Municipality of Baungon</p>
            <p style="margin-bottom: 2px; font-weight: bold">BARANGAY IMBATUG</p> <br>
            <p>OFFICE OF THE PUNONG BARANGAY</p>
            <hr style="height:4px; margin-left:-40px;margin-right:-40px; color:#be4d25">
            <p>BARANGAY BUSINESS CLEARANCE</p>
        </div>
<br>
        <div class="additional-paragraph"> <!-- Add a new div with a specific class -->
            <p style="font-weight:bold; margin-left:-40px">TO WHOM IT MAY CONCERN;</p>
            <p style="margin-left:-40px; text-indent:30px; margin-right:-40px"> <strong> THIS IS TO CERTIFY</strong>  that  <strong> {{ $business_clearance->residentName }} </strong> {{ $business_clearance->residentStatus }} a resident of {{ $business_clearance->residentPurok }}
            Imbatug, Baungon, Bukidnon.
        </p>

        <P style="margin-left:-40px;text-indent:30px; margin-right:-40px">
           That his / her present / proposed establishment is ( ) within (X) not within, the road right of way.
        </P>

        <P style="margin-left:-40px;text-indent:30px; margin-right:-40px">
            That this Clearance is issued upon the request of the above-named person to support his/her application for <strong> Business Permit</strong>.({{ $business_clearance->business }})({{ $business_clearance->business_type }})
        </P>
 
        {{-- <p style="margin-left:-40px;text-indent:30px; margin-right:-40px">
            <strong> Done</strong> this (d) day of <strong> (m) (y),</strong>at Barangay Hall office , Imbatug Baungon, Bukidnon.
        </p> --}}
        <p style="margin-left: -40px; text-indent: 30px; margin-right: -40px">
            <strong>Done</strong> this 
            <strong>{{ \Carbon\Carbon::parse($business_clearance->date)->format('j') }}</strong>
            <sup>{{ \Carbon\Carbon::parse($business_clearance->date)->format('S') }}</sup> day of 
            <strong>{{ \Carbon\Carbon::parse($business_clearance->date)->format('F') }}</strong> 
            <strong>{{ \Carbon\Carbon::parse($business_clearance->date)->format('Y') }}</strong>,
            at Barangay Hall office, Imbatug Baungon, Bukidnon.
        </p>
        
        
        
        
        <p style="margin-left:-40px; margin-right:-40px; font-weight:bold; font-style:italic;">
            By the authority of the Punong Barangay
        </p>
        <br>

        <P style="text-align: right" >{{ $business_clearance->signed_by}}<br> {{ $business_clearance->authorized_by }}</p>
        
        <P style="margin-left:-40px; margin-right:-40px">
         <strong> CTC NO.</strong>:{{ $business_clearance->ctc_no }}<br>
           <strong> Issued at:</strong>{{ $business_clearance->issued_at }} <br>
           <strong>Date Issued:</strong> {{ \Carbon\Carbon::parse($business_clearance->date_issued)->format('F d, Y') }} <br>
           <strong>O.R No.:</strong> {{ $business_clearance->or_no}} <br>
           <strong>Amount Paid:</strong> {{ $business_clearance->amount_paid}}
        </P>



 
    </div>
    <br>
    <br>

    <div style="margin-left: 10px; margin-right: -60px; font-family: 'Chunkfive', sans-serif;">
        <span style="display: inline-block;font-size:12pt">
            <p style="font-style: italic;letter-spacing: -2px;margin-right:10px"> <strong>  Gelbes E.Vergara </strong> <br> Punong Barangay</p>
        </span>
        <span style="display: inline-block;">
            <p style="font-style: italic;letter-spacing: -2px;margin-right:10px"> <strong> Hon. Annabelle M. Maputol</strong> <br> Sang. Barangay Member</p>
        </span>
        <span style="display: inline-block;">
            <p style="font-style: italic;letter-spacing: -2px;margin-right:10px"> <strong> Hon. Mark Anthony Botes </strong> <br> Sang. Barangay Member</p>
        </span>
        <span style="display: inline-block;letter-spacing: -2px;">
            <p style="font-style: italic;"> <strong> Jesson A. Ministerio </strong><br>Barangay Secretary</p>
        </span>
    </div>
    <div style="margin-left: 10px; margin-right: -70px; font-family: 'Chunkfive', sans-serif;">
        <span style="display: inline-block;font-size:12pt">
            <p style="font-style: italic;letter-spacing: -2px;margin-right:10px"> <strong>Hon. Rosa A.Rapirap</strong> <br>Sang. Barangay Member</p>
        </span>
        <span style="display: inline-block;">
            <p style="font-style: italic;letter-spacing: -2px;margin-right:10px"> <strong> Hon. Marlo A. Ligan</strong> <br> Sang. Barangay Member</p>
        </span>
        <span style="display: inline-block;">
            <p style="font-style: italic;letter-spacing: -2px;margin-right:10px"> <strong>Hon. Francis A. Beja</strong> <br> Sang. Barangay Member</p>
        </span>
        <span style="display: inline-block;letter-spacing: -2px;">
            <p style="font-style: italic;"> <strong> Honey Joy B. Campano </strong><br>Barangay Treasurer</p>
        </span>
    </div>
    <div style="margin-left: 10px; margin-right: -60px; font-family: 'Chunkfive', sans-serif;">
        <span style="display: inline-block;font-size:12pt">
            <p style="font-style: italic;letter-spacing: -2px;margin-right:10px"> <strong>Hon. Marifel L. Palma </strong> <br>Sang. Barangay Member</p>
        </span>
        <span style="display: inline-block;">
            <p style="font-style: italic;letter-spacing: -2px;margin-right:10px"> <strong> Hon. Mardine Y. Evangelista </strong><br> Sang. Barangay Member</p>
        </span>
    </div>
    @endforeach

    
    
    
</body>
</html>

