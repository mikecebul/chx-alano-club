// import React, { use } from "react";
// import { cache } from "react";
import { db } from "../../lib/prisma";

export const revalidate = 3600;

const getMeetings = async () => {
  const meetings = await db.meeting.findMany();
  return meetings;
};

const columns = ["Day", "Time", "Group", "Host", "Type"];

const map = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

export default async function MeetingPage() {
  const meetings = await getMeetings();
  const sortedMeetingsByTime = meetings.sort((a, b) => {
    return (
      Date.parse("1970/01/01 " + a.time) - Date.parse("1970/01/01 " + b.time)
    );
  });
  const sortedMeetingsByDay = sortedMeetingsByTime.sort((a, b) => {
    return map[a.day as keyof typeof map] - map[b.day as keyof typeof map];
  });

  if (!sortedMeetingsByDay) {
    return (
      <div>
        <h3>Fuck</h3>
      </div>
    );
  }
  return (
    <div className="p-4 flex flex-col">
      <h3 className="my-8 mb font-semibold text-4xl text-center">
        Meeting List
      </h3>
      <div className="shadow-md rounded items-center m-auto overflow-x-auto relative">
        <table className="text-sm text-left whitespace-nowrap">
          <thead className="uppercase bg-slate-400 text-slate-900 font-bold">
            <tr className="">
              {columns.map((head, idx) => (
                <th key={idx} className="py-3 px-6">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-slate-800 text- text-slate-300">
            {sortedMeetingsByDay.map((meeting) => (
              <tr key={meeting.id} className="even:bg-slate-700">
                <td className="py-3 px-6">{meeting.day}</td>
                <td className="py-3 px-6">{meeting.time}</td>
                <td className="py-3 px-6">{meeting.group}</td>
                <td className="py-3 px-6">{meeting.host}</td>
                <td className="py-3 px-6">{meeting.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
