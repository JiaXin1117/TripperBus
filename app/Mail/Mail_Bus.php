<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Carbon\Carbon;
use App\Models\Res_Times;
use App\Models\Res_Stops;

class Mail_Bus extends Mailable
{
    use Queueable, SerializesModels;

    public $type;

    public $companyEmail;
    public $emailFrom;
    public $phone;
    public $tollFree;
    public $companySite;
    public $reservationFooter;
    public $emailFooter;
    public $busId;

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
    public function __construct($type, $busId)
    {
        $this->type = $type;
        $this->busId = $busId;

        $this->companyEmail = getSettingsValue('company_email');
        $this->emailFrom = getSettingsValue('email_from');
        $this->phone = getSettingsValue('company_phone');
        $this->tollFree = getSettingsValue('toll_free');
        $this->companySite = getSettingsValue('company_website');
        $this->reservationFooter = nl2br(getSettingsValue('reservation_footer'));
        $this->emailFooter = nl2br(getSettingsValue('eamil_footers'));
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

            case config('config.TYPE_MAIL_BUS_FULL'):
                $subject = 'Your Bus Information';
                $view = 'emails.Bus_Full';
                break;

            case config('config.TYPE_MAIL_BUS_5_REMAIN'):
                $subject = 'Your Bus Information';
                $view = 'emails.Bus_5_Remain';
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