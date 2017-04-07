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
        var temp = [];
        temp.push(4);
        temp.push(9); 

        $.ajax({
            url : "http://localhost/TripperBus_Backend/api/admin/main/retrieve_group_additional_info",
            type: "POST",
            data: JSON.stringify(temp),
            contentType: 'json',
            processData: false,
            success: function(data) { console.log(data);
                
            }
        });
    </script>
</body>
</html>
