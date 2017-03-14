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
        temp['time_id'] = "1";
        temp['time'] = '24:00:00';
        temp['stop_area'] = '313 W 31 St';
        
        var temp1 = {};
        temp1['time_id'] = "8";
        temp1['time'] = '24:00:00';
        temp1['stop_area'] = 'Arlington';
        
        var request_data = [];
        request_data[0] = temp;
        request_data[1] = temp1;
        
        var save_all_data = [];
        save_all_data[0] = request_data;
        save_all_data[1] = request_data;
        console.log(save_all_data);
        
        $.ajax({
            url : "http://localhost/TripperBus_Backend/api/admin/schedule/saveall_existing_schedule",
            type: "POST",
            data: JSON.stringify(save_all_data),
            contentType: 'json',
            processData: false,
            success: function(data) { console.log(data);
                
            }
        });
    </script>
</body>
</html>
