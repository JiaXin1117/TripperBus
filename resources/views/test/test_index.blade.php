<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Test Page</title>
    <script src="{{ asset('/js/jquery/jquery-3.1.1.min.js') }}"></script>
</head>
<body>
    <p>Test</p>
    <!-- Custom Scripts -->
    <script type="text/javascript">
        var temp = {};
        temp['date_from'] = "2016-06-05";
        temp['dow'] = 'Monday';
        temp['hour'] = '01';
        temp['min'] = '10';
        temp['stop'] = '313 W 31 St';
        
        var temp1 = {};
        temp1['date_from'] = "2016-06-05";
        temp1['dow'] = 'Monday';
        temp1['hour'] = '08';
        temp1['min'] = '30';
        temp1['stop'] = 'Arlington';
        
        var temp2 = {};
        temp2['date_from'] = "2016-06-05";
        temp2['dow'] = 'Monday';
        temp2['hour'] = '05';
        temp2['min'] = '35';
        temp2['stop'] = 'Bethesda';
        
        var request_data = [];
        request_data[0] = temp;
        request_data[1] = temp1;
        request_data[2] = temp2; console.log(request_data);
        
        $.ajax({
            url : "http://localhost/TripperBus_Backend/api/admin/schedule/add_existing_schedule",
            type: "POST",
            data: JSON.stringify(request_data),
            contentType: 'json',
            processData: false,
            success: function(data) { console.log(data);
                
            }
        });
    </script>
</body>
</html>
