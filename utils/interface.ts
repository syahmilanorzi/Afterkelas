export type TeacherProps = {
  nationalIdNumber: string;
  title: string;
  name: string;
  surname: string;
  dob: string;
  teacherNumber: string;
  salary: string;
  [key: string]: string | number;
};

export interface TeacherPropsWithId extends TeacherProps {
  id: number;
}

export type ChildrenProps = {
  children: React.ReactNode;
};

export type AdminProps = {
  username: string;
  email: string;
};

export interface AdminPropsWithId extends AdminProps {
  id: number;
}

export interface HeaderProps {
  type: string;
}

export type StudentProps = {
  nationalIdNumber: string;
  name: string;
  surname: string;
  dob: string;
  studentNumber: string;
};

export interface StudentPropsWithId extends StudentProps {
  id: number;
}

export interface IIProps {
  loading: boolean;
  isSidebarOpen: boolean;
  teacherData: Array<TeacherProps>;
  studentData: Array<StudentProps>;
  adminData: Array<AdminProps>;
  searchTerm: string;
}
