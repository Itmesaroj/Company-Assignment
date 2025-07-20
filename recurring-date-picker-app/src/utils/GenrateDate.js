import { format, addDays, addMonths, addYears } from "date-fns";

function GenrateDate({
        recurrenceType,
        customInterval, 
        weekDays, 
        pattern, 
        dateRange,
    }){
        if(!dateRange) return [];
    const start=new Date(dateRange.start);
    const end=dateRange.end ?new Date(dateRange.end):addYears(start,1); 
    let currentDate=new Date(start);
    const output=[];
    while(currentDate <= end && output.length <= 100){
        let day=format(currentDate,"EEEE");
        if(recurrenceType==="daily"){
            output.push(format(currentDate,"yyyy-MM-dd"));
            currentDate=addDays(currentDate,customInterval);
        }
        else if (recurrenceType === "weekly") {
            const weekStart = new Date(currentDate);

            for (let i = 0; i < 7; i++) {
                const date = addDays(weekStart, i);
                if (date > end) break;

                const dayName = format(date, "EEEE");
                    if (weekDays.includes(dayName)) {
                    output.push(format(date, "yyyy-MM-dd"));
                    }
                }

                currentDate = addDays(weekStart, customInterval * 7); // ✅ jump X weeks
}


        else if(recurrenceType==="monthly"){
            const year=currentDate.getFullYear();
            const month=currentDate.getMonth();

            const lastDay=new Date(year,month+1,0).getDate();
            const isStartMonth=year===start.getFullYear() && month===start.getMonth();

            const firstDay=isStartMonth?start.getDate():1;

            const targetWeek=pattern.week;
            const targetDay=pattern.day;

            for(let day=firstDay;day<=lastDay;day++){
                const date=new Date(year,month,day);
                const weekOfMonth=Math.ceil(day/7);
                const dateDayName=format(date,"EEEE");

                if(weekOfMonth===targetWeek && dateDayName==targetDay){
                    if (date >= start && date <= end) {
                        output.push(format(date, "yyyy-MM-dd"));
                    }
                break; 
                }
            }
            currentDate = addMonths(currentDate, customInterval);
        }
    
        else if (recurrenceType === "yearly") {
            output.push(format(currentDate, "yyyy-MM-dd"));
            currentDate =addYears (currentDate, customInterval);
        }

    }

    return output;
    }     

export default GenrateDate