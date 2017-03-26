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
        temp['area_id'] = 1;
        temp['date'] = '2017-03-9';
        temp['dow'] = 4;
        temp['group_id'] = 5;
        temp['hour'] = '15';
        temp['max_cap'] = 4;
        temp['min'] = "35";
        temp['open'] = 1;
        temp['stop_area'] = '313 W 31 St';
        temp['time'] = "15:35:00";
        temp['time_id'] = 5;
        temp['w_h'] = 0;
        
        var group1 = [];
        group1[0] = temp;
        
        var temp1 = {};
        temp1['area_id'] = "1";
        temp1['date'] = '2017-03-9';
        temp1['dow'] = 4;
        temp1['hour'] = '02';
        temp1['min'] = '20';
        temp1['stop_area'] = '313 W 31 St';
        temp1['time'] = "02:20:00";
        temp1['w_h'] = "0";
        
        var group2 = [];
        group2[0] = temp1;
        
        var request_data = [];
        request_data[0] = group1;
        request_data[1] = group2;
        //request_data[2] = temp2; 
        
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
