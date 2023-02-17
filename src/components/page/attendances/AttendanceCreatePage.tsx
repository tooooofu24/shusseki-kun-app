import { AddAttendanceForm } from "@/components/model/Attendance/AddAttendanceForm";
import { PageTitle } from "@/components/ui/parts/PageTitle";

export const AttendanceCreatePage = () => {
  return (
    <>
      <PageTitle title="出席登録" goBackButton={true} />
      <AddAttendanceForm />
    </>
  );
};
