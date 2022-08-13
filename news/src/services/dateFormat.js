import moment from "moment/moment";
import 'moment/locale/vi'  // without this line it didn't work

export class DateFormatService{
   formatPubDate = (pubDate) =>{
        moment.locale("vi");
        let date = moment(pubDate).format("dddd - DD/MM");
        return `T${date.substring(1)}`;
   }
   formatPubDateAndTime = (pubDate) =>{
      moment.locale("vi");
      let date = moment(pubDate).format("dddd - DD/MM , hh : mm");
      return `T${date.substring(1)}`;
 }
}


export const dateFormatService = new DateFormatService();