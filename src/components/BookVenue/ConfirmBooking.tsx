"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { VenueType } from "@/types/venue";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import IsLoggedIn from "@/types/isLoggedIn";
import LoginModal from "@/components/Modal/Login";
import bookVenueAction from "@/api/actions/BookVenueAction";
import { BookingProps } from "@/types/bookings";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

type Props = {
  venue: VenueType;
  numNights: number;
  guests: number;
  disabled?: boolean;

  dates: DateRange | undefined;
  isLoggedIn: IsLoggedIn;
  resetData: () => void;
  bookingModalClose?: () => void;
};

export default function ConfirmBooking({
  venue,
  numNights,
  dates,
  guests,
  disabled,
  resetData,
  bookingModalClose,
  isLoggedIn,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  async function onSubmit() {
    const body: BookingProps = {
      venueId: venue.id,
      dateFrom: dates?.from,
      dateTo: dates?.to,
      guests: guests,
    };
    const result = await bookVenueAction(body);
    const resultData = JSON.parse(result);
    if (resultData.success) {
      resetData();
      bookingModalClose?.();

      router.push(`/venues/${venue.id}`);
      toast({
        title: "Successfully booked venue",
        description: `dates: ${dates?.from?.toLocaleDateString()} - ${dates?.to?.toLocaleDateString()}. You will receive an confirmation email with the booking details.`,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error booking venue",
        description: resultData.error || "Something went wrong",
      });
    }
  }

  /*
   if user is not logged in, return a login button
   to open the login modal instead of the booking button 
   */
  if (isLoggedIn === false) {
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Login to continue</Button>
        {isOpen && (
          <LoginModal
            open={isOpen}
            isOpen={(newState: boolean) => setIsOpen(newState)}
            variant="controlled"
          />
        )}
      </>
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger disabled={disabled} asChild>
        <Button disabled={disabled}>Book now</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col gap-2 text-muted-foreground">
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm booking</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          By clicking &ldquo;Book now&rdquo; you will book the venue for the
          selected period. Please confirm the details below before proceeding:
        </AlertDialogDescription>
        <div className="text-sm">
          <p className="font-semibold">Selected booking dates:</p>
          <p>
            {dates?.from?.toLocaleDateString()} -{" "}
            {dates?.to?.toLocaleDateString()}
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Price/period:</p>
          <p>
            {numNights} nights ({guests} {guests === 1 ? "guest" : "guests"}) x{" "}
            {venue.price} NOK
          </p>
          <p>
            Total price:{" "}
            <span className="font-semibold">{numNights * venue.price} NOK</span>
          </p>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit}>Book now</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
