<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\Res_Customers;
use App\Models\CustomerToPermission;


class CustomerController extends Controller
{
    public function __construct()
    {
        
    }

    public function getCustomers() {
        $customers = Res_Customers::get()->toarray();
        if (!count($customers)) {
            return failedError('No customer!');
        }

        return response()->json([
            'success'       => true,
            'customers'         => $customers,
        ]);
    }

    public function addCustomer(Request $request) {
        $customer = $request->input('customer');

        $validator = $this->customer_credential_rules($customer);
        if ($validator->fails()) {
            return failedError($validator->getMessageBag()->first());
        }

        //check exist
        if (Res_Customers::where('email', $customer['email'])
                    ->exists()) {
            return failedError('Customer already exists!');
        }

        unset($customer['created_at']);
        unset($customer['updated_at']);

        Res_Customers::unguard();
        $resCustomer = Res_Customers::create($customer);
        Res_Customers::reguard();

        $success = ($resCustomer != null);

        return response()->json([
            'success'   => $success,
            'data'      => $resCustomer,
        ]);
    }

    public function updateCustomer(Request $request) {
        $customer = $request->input('customer');

        $validator = $this->customer_credential_rules($customer);
        if ($validator->fails()) {
            return failedError($validator->getMessageBag()->first());
        }

        //check exist
        if (Res_Customers::where('id', '<>', $customer['id'])
                    ->where(function($query) use($customer) {
                        $query->where('email', $customer['email']);
                    })
                    ->exists()) {
            return failedError('Customer already exists!');
        }

        unset($customer['created_at']);
        unset($customer['updated_at']);

        Res_Customers::unguard();
        $success = Res_Customers::find($customer['id'])->update($customer);
        Res_Customers::reguard();

        $resCustomer = $success ? Res_Customers::find($customer['id']) : null;
        
        return response()->json([
            'success'   => $success,
            'data'      => $resCustomer,
        ]);
    }

    public function deleteCustomer(Request $request) {
        $customerId = $request->input('customerId');

        //check exist
        $customer = Res_Customers::find($customerId);
        if (!$customer) {
            return failedError("Customer doesn't exist!");
        }

        Res_Customers::unguard();
        $success = $customer->delete();
        Res_Customers::reguard();

        return response()->json([
            'success'   => $success
        ]);
    }

    public function customer_credential_rules(array $data) {
        $messages = [
            'email.required'    => 'Please input email!',
            'email.email'       => 'Email is bad!',
            'password.required' => 'Please input password!',
            'password.min'      => 'Password must be at least 6 characters!',
        ];

        $validator = Validator::make($data, [
            'password'  => 'required|min:6',
            'email'     => 'required|email',
        ], $messages);

        return $validator;
    }
    
}
