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
        temp['hour'] = "13";
        temp['min'] = '30';
        temp['stop'] = 'Arlington';
        temp['time_id'] = '1'; 
        
        var temp1 = {};
        temp1['hour'] = "14";
        temp1['min'] = '00';
        temp1['stop'] = 'Bethesda';
        temp1['time_id'] = '8'; 
        
        var request_data = [];
        request_data[0] = temp;
        request_data[1] = temp1;
        
        $.ajax({
            url : "http://localhost/TripperBus_Backend/api/admin/schedule/update_existing_schedule",
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
