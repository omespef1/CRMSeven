import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {InAppBrowser, InAppBrowserEvent} from '@ionic-native/in-app-browser';
import { calendarEvent } from '../../models/calendar.model';
declare var gapi: any;
interface BrowserEvent extends InAppBrowserEvent{
}


/*
  Generated class for the GoogleCalendarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoogleCalendarProvider {
  calendarEvent: any = {};
  attendees = [{
     email:""
  }];
  validation:any = {};
  CLIENT_ID = '933058478038-4kbs5heipcs0asi984gb75nr39pv1fgp.apps.googleusercontent.com'; // Client ID of your google console project
  SCOPES = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  APIKEY = "AIzaSyAycTC_jM4K_wEYPUsrEvsvYvs6iRush20"; // API key of your google console project
  REDIRECTURL = "http://localhost/callback";
  constructor(private iabrowser:InAppBrowser) {
    console.log('Hello GoogleCalendarProvider Provider');
  }
  sendInvite(calendar:calendarEvent) {
   
    // if(!this.validate()) {
    //   alert("Please fill all fields for sending invite.");
    //   return;
    // }
    this.validation.failure = false;
    // var startDateTimeISO = this.buildISODate(calendar.startDate, calendar.startTime);
    // var enddateTimeISO = this.buildISODate(calendar.endDate, calendar.endTime);
    // this.popLastAttendeeIfEmpty(this.attendees);
    let browser  = this.iabrowser.create(`https://accounts.google.com/o/oauth2/auth?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECTURL}&scope=https://www.googleapis.com/auth/calendar&approval_prompt=force&response_type=token`, '_blank', 'location=no');         

    browser.on("loadstart").subscribe((event)=>{
      console.log(event);
      if ((event["url"]).indexOf("http://localhost/callback") === 0) {
        var url = event["url"];
        var token = url.split('access_token=')[1].split('&token_type')[0];              
        //SENDING THE INVITE USING THE GOOGLE CALENDAR API
        gapi.client.setApiKey(this.APIKEY);
        var request = gapi.client.request({
          'path': '/calendar/v3/calendars/primary/events?alt=json',
          'method': 'POST',
          'headers': {
            'Authorization': 'Bearer ' + token
          },
          'body': JSON.stringify({
            "summary": "TEST",
            "location": "BOG",
            "description": "OMAR PEREZ DESCRIPCION",
            "start": {
              "dateTime": new Date().toISOString(),             
            },
            "end": {
              "dateTime": new Date().toISOString(),              
            },
            "recurrence": [
              "RRULE:FREQ=DAILY;COUNT=1" //// TODO : Parameterize this, Frequency of the event
            ],           
            "reminders": {
              "useDefault": false,
              "overrides": [
                {
                  "method": "email",
                  "minutes": 1440   		// TODO : Parameterize this, No. of minutes before you want google services to send an email reminder
                },
                {
                  "method": "popup",
                  "minutes": 10 				// TODO : Parameterize this, No. of minutes before you want google services to send an popup reminder
                }
              ]
            }
          }),
          'callback': function (jsonR, rawR) {
            if(jsonR.id){
              alert("Invitation sent successfully");
            } else {
              alert("Failed to sent invite.");
            }
            console.log(jsonR); // Everything related to invite once created, use this for further enhancements
          }
        });
      }
    })

    browser.on("exit").subscribe(event=>{});
   
    


}

buildISODate(date, time){
  var dateArray = date && date.split('-');
  var timeArray = time && time.split(':');
  var normalDate = new Date(parseInt(dateArray[0]), parseInt(dateArray[1])-1, parseInt(dateArray[2]), parseInt(timeArray[0]), parseInt(timeArray[1]), 0, 0);
  return normalDate.toISOString();
}
popLastAttendeeIfEmpty(itemsList){
  if(!!itemsList.length){
    return itemsList[0]["email"] == "" ? itemsList.shift(itemsList[0]) : itemsList;
  }
  return [];
}
addAttendees(){
  if(this.attendees[this.attendees.length - 1].email == '') return;
  var newAttendee = {email:""};
  this.attendees.unshift(newAttendee);
}
removeAttendees(itemIndex){
  this.attendees.splice(itemIndex, 1);
}

// validate() {
//   return this.isStringValid(calendar.name) && 
//   this.isStringValid(calendar.name) && 
//   this.isStringValid(calendar.location) && 
//   this.isStringValid(calendar.description) &&
//   this.isStringValid(calendar.startDate) &&
//   this.isStringValid(calendar.startTime) &&
//   this.isStringValid(calendar.endDate) &&
//   this.isStringValid(calendar.endTime) &&
//   this.areAttendeesValid(this.attendees);
// }
isStringValid(str){
if (typeof str != 'undefined' && str) {
    return true;
};
return false;
}
areAttendeesValid(attendees){
if(attendees.length == 1 && !this.isStringValid(attendees[0]["email"])){
    return false;
}
return true;
}
}
