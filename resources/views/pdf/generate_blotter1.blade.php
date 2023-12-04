<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Generate Blotter Report</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        /* Custom CSS to style and position the logo and content */
        .container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
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

table {
  border-collapse: collapse;
  width: 100%;
  
}

table, th, td {
  border: 1px solid black;
}

th{
  padding: 2px;
  text-align: center;
  
 
}
/* td {
  padding: 8px;
  text-align: center;
  
 
} */
span {
  position: absolute;
  padding: 1px;
  z-index: 99;

}


    </style>
</head>
<body>
    <div class="container">
        <div class="logo-container">
            <img src="data:image/png;base64,{{ base64_encode(file_get_contents($imagePath)) }}" class="img-fluid logo" alt="Logo">
            {{-- <img src="' . asset('image/logo.png') . '" alt="Logo"> --}}

        </div>
        <div class="content paragraph-container">
            <p style="margin-bottom: 2px;">Republic of the Philippines</p>
            <p style="margin-bottom: 2px;">Province of Bukidnon</p>
            <p style="margin-bottom: 2px;">Municipality of Baungon</p>
            <p style="margin-bottom: 2px;">BARANGAY IMBATUG</p> <br>
            <p>OFFICE OF THE PUNONG BARANGAY</p> 
            <p style="margin-bottom: 2px;">SUMMARY OF REPORT: CASES FILED, ACTION TAKEN</p>
            <p style="margin-bottom: 2px;">AND OTHER RELATED INFORMATION ON KP IMPLEMENTATION</p>
            {{-- <p style="margin-bottom: 2px;">1st QUARTER CY {{'$currentYear'}}</p> --}}
            <p style="margin-bottom: 2px;">1st QUARTER CY <?php echo date("Y"); ?></p>

        </div>

    </div>
    <br>
    <table class="table table-bordered">
       
        <thead>
            <tr>
              <th colspan="">Name of <br> Barangay</th>
              <th colspan="4" style="vertical-align: top">NUMBER OF CASES</th>
              <th colspan="11" style="vertical-align: top">ACTION TAKEN</th>
            </tr>
            <tr> 
                <th rowspan="3" style="vertical-align: text-top">
                    <span> I <br> M <br> B <br> A <br> T <br> U <br> G  </span>
                </th>

                <th rowspan="2" style="text-align: center; vertical-align: top">Criminal</th> 
                <th rowspan="2" style="text-align: center; vertical-align: top">Civil</th> 
                <th rowspan="2" style="text-align: center; vertical-align: top">Others</th> 
                <th rowspan="2" style="text-align: center; vertical-align: top">TOTAL</th> 
                <th colspan="4">SETTLED CASES</th>
                <th rowspan="2"  style="text-align: center; vertical-align: top">Repudiated</th> 
                <th rowspan="2"  style="text-align: center; vertical-align: top">Dismissed</th>
                <th rowspan="2"  style="text-align: center; vertical-align: top">Referred</th>
                <th rowspan="2"  style="text-align: center; vertical-align: top">Certified</th>
                <th rowspan="2"  style="text-align: center; vertical-align: top">Pending</th>
                <th rowspan="2"  style="text-align: center; vertical-align: top">Total</th>
                <th rowspan="2"  style="text-align: center; vertical-align: top">GRAND  <br> TOTAL</th>
               </tr> 

          </thead>
          <!-- ... Your previous code ... -->

<tbody>
    <tr>
        <td style="font-weight: bold; padding:2px;text-align: center;">Mediation</td>
        <td style="font-weight: bold; padding:2px;text-align: center;">Conciliated</td>
        <td style="font-weight: bold; padding:2px;text-align: center;">Arbitrution</td>
        <td style="font-weight: bold; padding:2px;text-align: center;">TOTAL</td>
        
      </tr>

  
      <tr>
        <td style="padding-bottom: 90px; text-align:center"> {{ $criminalCount }}</td>
        <td style="padding-bottom: 90px; text-align:center"> {{ $civilCount }}</td>
        <td style="padding-bottom: 90px; text-align:center"> {{ $othersCount }}</td>
        <td style="padding-bottom: 90px; text-align:center"> {{ $totalCount }}</td>
        <td style="padding-bottom: 90px; text-align:center"> {{ $mediationCount }}</td>
        <td style="padding-bottom: 90px; text-align:center"> {{ $conciliatedCount }}</td>
        <td style="padding-bottom: 90px; text-align:center"> {{ $arbitrutionCount }}</td>
        <td style="padding-bottom: 90px; text-align:center"> {{ $totalSettled }}</td>

        <td style="padding-bottom: 90px; text-align:center"> {{ $repudiatedCount }}</td>
        <td style="padding-bottom: 90px; text-align:center"> {{ $dismissedCount }}</td>
        <td style="padding-bottom: 90px; text-align:center"> {{ $referredCount }}</td>
        <td style="padding-bottom: 90px; text-align:center"> {{ $certifiedCount }}</td>
        <td style="padding-bottom: 90px; text-align:center"> {{ $pendingCount }}</td>
        <td style="padding-bottom: 90px; text-align:center"> {{ $totalAction }}</td>
        <td style="padding-bottom: 90px; text-align:center"> {{ $grandTotal }}</td>
    </tr>

    <!-- You can add more rows with similar structure as needed -->
</tbody>
</table>
<br>

    <div>
         Prepared by: 
         <br>
        <p style="margin-left: 50px">Name <br> Position</p>
    </div>

    
    <div style="margin-left: 70%; margin-top:-100px">
        Prepared by: 
        <p style="margin-left: 50px">Name <br> Position</p>
    </div>




    
</body>





</html>

