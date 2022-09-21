import { MarkingSchemeModule } from './app/marking-scheme/marking-scheme.module';
import { MarkingScheme } from './shared/mysql-entity/marking_scheme.entity';
import { UserModule } from './app/user/user.module';
import { Routes } from 'nest-router';
import { StandardModule } from './app/standard/standard.module';
import { SubjectModule } from './app/subject/subject.module';
import { ScheduleModule } from './app/schedule/schedule.module';
// import { RoominfoModule } from './app/roominfo/roominfo.module';
import { NotificationModule } from './app/notification/notification.module';
import { HolidayModule } from './app/holiday/holiday.module';
import { CurriculumModule } from './app/curriculum/curriculum.module';
import { ConferenceModule } from './app/conference/conference.module';
import { AttendanceModule } from './app/attendance/attendance.module';
import { LogsModule } from './app/app-logs/logs.module';
import { AnnouncementModule } from './app/announcement/announcement.module';
import { ClassroomChatModule } from './app/classroom-chat/chat.module';
import { LoginModule } from './app/login/login.module';
import { AssignmentModule } from './app/assignment/assignment.module';
import { DigitalLibraryModule } from './app/digital-library/digital-library.module';
import { B2bModule } from './b2b/b2b.module';
import { TestModule } from './app/test/test.module';
import { HealthCheckModule } from './health-check/health-check.module';
import { MasterSubjectsModule } from './app/master-subjects/master-subjects.module';
import { Testv2Module } from './app/testv2/testv2.module';
import { CareModule } from './app/care/care.module';
import { AdminLibraryModule } from './app/admin-library/admin-library.module';
import { ScheduleNewModule } from './app/schedule-new/schedule-new.module';
import { MasterCareModule } from './app/master-care/master-care.module';
import { AdminCareModule } from './app/admin-care/care/admin-care.module';
import { MasterLoginModule } from './app/master-login/login.module';
import { QuestionBankModule } from './app/question-bank/question-bank.module';
import { MasterModule } from './app/master/master.module';
import { AnnouncementNewModule } from './app/announcement-new/announcement-new.module';
import { Assignmentv2Module } from './app/assignmentv2/assignment.module';
import { Attendancev2Module } from './app/attendance-v2/attendance.module';
import { QuestionBankV2Module } from './app/question-bankv2/question-bankv2.module';
import { PracticeTestModule } from './app/practice-test/practice-test.module';

export const routes: Routes = [
  {
    path: '/user',
    module: UserModule,
    // children: [
    //   {
    //     path: '/cats',
    //     module: CatsModule,
    //   },
    //   {
    //     path: '/dogs',
    //     module: DogsModule,
    //   },
    // ],
  },
  {
    path: '/standards',
    module: StandardModule,
  },
  {
    path: '/subjects',
    module: SubjectModule,
  },
  {
    path: '/b2b',
    module: B2bModule,
  },
  {
    path: '/schedule',
    module: ScheduleModule,
  },
  // {
  //   path: '/info',
  //   module: RoominfoModule,
  // },
  {
    path: '/notification',
    module: NotificationModule,
  },
  {
    path: '/holiday',
    module: HolidayModule,
  },
  {
    path: '/curriculum',
    module: CurriculumModule,
  },
  {
    path: '/conference',
    module: ConferenceModule,
  },
  {
    path: '/chat',
    module: ClassroomChatModule,
  },
  {
    path: '/attendance',
    module: AttendanceModule,
  },
  {
    path: '/logs',
    module: LogsModule,
  },
  {
    path: '/announcements',
    module: AnnouncementModule,
  },
  {
    path: '/login',
    module: LoginModule,
  },
  {
    path: '/assignment',
    module: AssignmentModule,
  },
  {
    path: '/digital-library',
    module: DigitalLibraryModule,
  },
  {
    path: '/test',
    module: TestModule,
  },
  {
    path: '/testv2',
    module: Testv2Module,
  },
  {
    path: '/practice-test',
    module: PracticeTestModule,
  },
  {
    path: '/healthcheck',
    module: HealthCheckModule,
  },
  {
    path: '/master-subjects',
    module: MasterSubjectsModule,
  },
  {
    path: '/care',
    module: CareModule,
  },
  {
    path: '/admin-library',
    module: AdminLibraryModule,
  },
  {
    path: '/schedule-new',
    module: ScheduleNewModule,
  },
  {
    path: '/master-care',
    module: MasterCareModule,
  },
  {
    path: '/admin-care',
    module: AdminCareModule,
  },
  {
    path: '/master-login',
    module: MasterLoginModule,
  },
  {
    path: '/question-bank',
    module: QuestionBankModule,
  },
  {
    path: '/master',
    module: MasterModule,
  },
  {
    path: '/assignmentv2',
    module: Assignmentv2Module,
  },
  {
    path: '/announcement-new',
    module: AnnouncementNewModule,
  },
  {
    path: '/attendancev2',
    module: Attendancev2Module,
  },
  
  {
    path: '/question-bankv2',
    module: QuestionBankV2Module,
  },
  {
    path: '/marking-scheme',
    module:MarkingSchemeModule,
  }
];
