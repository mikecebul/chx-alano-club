import { db } from "../../lib/prisma";
import { sortedMeetingsByDayAndTime } from "../../lib/sort";

export const revalidate = 3600;

const getMeetings = async () => {
  const meetings = await db.meeting.findMany();
  return meetings;
};

const columns = ["Day", "Time", "Group", "Host", "Type"];

export default async function MeetingPage() {
  const meetings = await getMeetings();
  const sortedMeetings = sortedMeetingsByDayAndTime(meetings);

  if (!sortedMeetings) {
    return (
      <div>
        <h3>Fuck</h3>
      </div>
    );
  }
  return (
    <div className="p-4 flex flex-col">
      <h3 className="my-8 font-semibold text-4xl text-center">
        Meeting List
      </h3>
      <div className="shadow-md rounded items-center m-auto overflow-x-auto relative">
        <table className="text-sm text-left whitespace-nowrap">
          <thead className="uppercase bg-slate-800 text-slate-100 dark:bg-slate-400 dark:text-slate-900 font-bold">
            <tr className="">
              {columns.map((head, idx) => (
                <th key={idx} className="py-3 px-6">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-300">
            {sortedMeetings.map((meeting) => (
              <tr
                key={meeting.id}
                className="even:bg-slate-200 even:dark:bg-slate-700"
              >
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
