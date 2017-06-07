<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Carbon\Carbon;
use App\Models\Settings;

class Mail_MovePeopleReservation extends Mailable
{
    use Queueable, SerializesModels;

    public $reservation;
    public $email;
    public $phone;
    public $phone2;
    public $tollFree;
    public $tollFree2;
    public $website;

//    public $reservation_number = "6832C4551800808N1";
//    public $date = "Tuesday, August 8th 2017";
//    public $oldTime = "9:40 AM";
//    public $oldFromStop = "1727 Bedford Ave, Brooklyn, NY";
//    public $oldToStop = "Sullivan Pl. and Empire Blvd";
//    public $newTime = "10:20 AM";
//    public $newFromStop = "122 Allen St., NY, NY";
//    public $newToStop = "";
//    public $reason = "Good!";

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($reservation)
    {
        $this->reservation = $reservation;

        $this->email = Settings::where('key', 'EMAIL')->first()->value;
        $this->phone = Settings::where('key', 'PHONE')->first()->value;
        $this->phone2 = Settings::where('key', 'PHONE2')->first()->value;
        $this->tollFree = Settings::where('key', 'TOLLFREE')->first()->value;
        $this->tollFree2 = Settings::where('key', 'TOLLFREE2')->first()->value;
        $this->website = Settings::where('key', 'WEBSITE')->first()->value;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $subject = 'Your Reservation On ' . Carbon::now();
        
        return $this->subject($subject)->view('emails.MovePeopleReservation');
    }
}
