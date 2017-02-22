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
        $.ajax({
            url : "http://localhost/TripperBus_Backend/api/auth/login",
            type: "POST",
            data : {
                email: "test@test.com",
                password: "test"
            },
            success: function(data) { console.log(data);
                
            }
        });
    </script>
</body>
</html>
