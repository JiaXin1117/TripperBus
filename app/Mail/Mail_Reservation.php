<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Carbon\Carbon;
use App\Models\Res_Times;
use App\Models\Res_Stops;

class Mail_Reservation extends Mailable
{
    use Queueable, SerializesModels;

    public $reservation;
    public $type;

    public $companyEmail;
    public $phone;
    public $phone2;
    public $tollFree;
    public $tollFree2;
    public $companySite;
    public $reservationFooter;
    public $emailFooter;

    // temp
    // --------------------
    public $destination = "2:15 PM at 202 West 36th St. cor. 7th Ave , NY, NY, - (Between 7th &amp; 8th Avenues, in front of Pig n Whistle Irish Pub)";
//    public $transportMC = "453103";
    // --------------------

    public $time, $stop;

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
    public function __construct($reservation, $type)
    {
        $this->reservation = $reservation;
        $this->type = $type;

        $this->companyEmail = getSettingsValue('Company Email');
        $this->phone = getSettingsValue('PHONE');
        $this->phone2 = getSettingsValue('PHONE2');
        $this->tollFree = getSettingsValue('TOLLFREE');
        $this->tollFree2 = getSettingsValue('TOLLFREE2');
        $this->companySite = getSettingsValue('Company Site');
        $this->reservationFooter = nl2br(getSettingsValue('Reservation Footer'));
        $this->emailFooter = nl2br(getSettingsValue('Email Footer'));

        $this->time = Res_Times::find($reservation['time_id'])->toarray();
        if ($this->time) {
            $this->stop = Res_Stops::find($this->time['stop_id'])->toarray();
        }
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $view = null;
        $from = ['address' => getSettingsValue('Company Email'),
                 'name'    => getSettingsValue('Email From')];
        
        switch ($this->type) {

            case config('config.TYPE_MAIL_RESERVATION_ADD'):
                $subject = 'Your Reservation Information';
                $view = 'emails.Reservation_Add';
                break;
            
            case config('config.TYPE_MAIL_RESERVATION_MOVE'):
                $subject = 'Your Reservation On ' . Carbon::now();
                $view = 'emails.Reservation_MovePeople';
                break;

            case config('config.TYPE_MAIL_RESERVATION_SOFTDELETE'):
                $subject = 'Your Reservation Information';
                $view = 'emails.Reservation_SoftDelete';
                break;

            case config('config.TYPE_MAIL_RESERVATION_UPDATE'):
                $subject = 'Your Reservation Information';
                $view = 'emails.Reservation_Update';
                break;

            default:
                break;
        }

        if ($view) {
            return $this->from($from['address'], $from['name'])->subject($subject)->view($view);
        }
    }
}
