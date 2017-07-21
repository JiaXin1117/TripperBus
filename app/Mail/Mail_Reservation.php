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
    public $emailFrom;
    public $phone;
    public $tollFree;
    public $companySite;
    public $reservationFooter;
    public $emailFooter;

    // temp
    // --------------------
    public $destination = "2:15 PM at 202 West 36th St. cor. 7th Ave , NY, NY, - (Between 7th &amp; 8th Avenues, in front of Pig n Whistle Irish Pub)";
//    public $transportMC = "453103";
    // --------------------

    public $time, $stop, $oldTime, $oldStop;

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

        $this->companyEmail = getSettingsValue('company_email');
        $this->emailFrom = getSettingsValue('email_from');
        $this->phone = getSettingsValue('company_phone');
        $this->tollFree = getSettingsValue('toll_free');
        $this->companySite = getSettingsValue('company_website');
        $this->reservationFooter = nl2br(getSettingsValue('reservation_footer'));
        $this->emailFooter = nl2br(getSettingsValue('email_footers'));

        $this->time = Res_Times::find($reservation['time_id'])->toarray();
        if ($this->time) {
            $this->stop = Res_Stops::find($this->time['stop_id'])->toarray();
        }

        $this->oldTime = null;
        if (isset($reservation['old'])) {
            $this->oldTime = Res_Times::find($reservation['old']['time_id'])->toarray();
            if ($this->oldTime) {
                $this->oldStop = Res_Stops::find($this->oldTime['stop_id'])->toarray();
            }
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

            case config('config.TYPE_MAIL_RESERVATION_HOLD'):
                $subject = 'Reservation Placed On Hold';
                $view = 'emails.Reservation_Hold';
                break;

            case config('config.TYPE_MAIL_RESERVATION_REEMAIL'):
                $subject = $this->reservation['mailSubject'];
                $view = 'emails.Reservation_ReEmail';
                break;

            case config('config.TYPE_MAIL_RESERVATION_CUSTOMEMAIL'):
                $subject = $this->reservation['mailSubject'];
                $view = 'emails.Reservation_EmailCustom';
                break;

            default:
                break;
        }

        if ($view) {
            return $this
            ->from($this->companyEmail, $this->emailFrom)
            ->subject($subject)
            ->view($view);
        }
    }
}
