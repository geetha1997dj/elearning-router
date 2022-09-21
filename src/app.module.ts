import { MarkingSchemeModule } from './app/marking-scheme/marking-scheme.module';
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { OrganisationModule } from './organisation/organisation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Routes,RouterModule } from 'nest-router';
import { UserModule } from './app/user/user.module';
import { routes } from './routes';
// import { WinstonModule } from 'nest-winston';
// import * as winston from 'winston';
// import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import { StandardModule } from './app/standard/standard.module';
import { ScheduleModule } from './app/schedule/schedule.module';
import { SubjectModule } from './app/subject/subject.module';
import { AnnouncementModule } from './app/announcement/announcement.module';
import { AttendanceModule } from './app/attendance/attendance.module';
import { ConferenceModule } from './app/conference/conference.module';
import { CurriculumModule } from './app/curriculum/curriculum.module';
import { HolidayModule } from './app/holiday/holiday.module';
import { NotificationModule } from './app/notification/notification.module';
import { ClassroomChatModule } from './app/classroom-chat/chat.module';
import { LoginModule } from './app/login/login.module';
import { SchedulerModule } from 'utils/scheduler/scheduler.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from 'src/common/logging.interceptor';
import { MicroHandlerModule } from './shared/service-handler/micro-handler.module';
import { AssignmentModule } from './app/assignment/assignment.module';
import { DigitalLibraryModule } from './app/digital-library/digital-library.module';
import { B2bModule } from './b2b/b2b.module';
import { EmailModule } from '../utils/email/email.module';
import { TestModule } from './app/test/test.module';
import { HealthCheckModule } from './health-check/health-check.module';
import { TransformInterceptor } from './common/transform.interceptor';
import { MockApiModule } from './app/mock-api/mock-api.module';
import { FeeModule } from './app/fee/fee.module';
import { TransferModule } from './app/transfer/transfer.module';
import { RefundModule } from './app/refund/refund.module';
import { MasterModule } from './app/master/master.module';
import { PendingUserFeeModule } from './app/pending-user-fee/pending-user-fee.module';
import { MasterSubjectsModule } from './app/master-subjects/master-subjects.module';
import { Testv2Module } from './app/testv2/testv2.module';
import { CareModule } from './app/care/care.module';
import { AdminLibraryModule } from './app/admin-library/admin-library.module';
import { ScheduleNewModule } from './app/schedule-new/schedule-new.module';
import { MasterCareModule } from './app/master-care/master-care.module';
import { AdminCareModule } from './app/admin-care/care/admin-care.module';
import { MasterLoginModule } from './app/master-login/login.module';
import { QuestionBankModule } from './app/question-bank/question-bank.module';
import { Assignmentv2Module } from './app/assignmentv2/assignment.module';
import { AnnouncementNewModule } from './app/announcement-new/announcement-new.module';
import { Feev2Module } from './app/feev2/feev2.module';
import { Attendancev2Module } from './app/attendance-v2/attendance.module';
import { QuestionBankV2Module } from './app/question-bankv2/question-bankv2.module';
import { PracticeTestModule } from './app/practice-test/practice-test.module';

@Module({
  imports: [
    RouterModule.forRoutes(routes),

    TypeOrmModule.forRoot(),

    GraphQLModule.forRoot({
      autoSchemaFile: true,
    
    }),

    OrganisationModule,

    UserModule,

    StandardModule,

    ScheduleModule,

    SubjectModule,

    AnnouncementModule,

    AttendanceModule,

    ClassroomChatModule,

    ConferenceModule,

    CurriculumModule,

    HolidayModule,

    NotificationModule,

    LoginModule,

    MicroHandlerModule,

    AssignmentModule,

    DigitalLibraryModule,

    B2bModule,

    EmailModule,

    TestModule,

    SchedulerModule,

    HealthCheckModule,

    MockApiModule,

    FeeModule,

    Feev2Module,

    TransferModule,

    RefundModule,

    MasterModule,

    PendingUserFeeModule,

    MasterSubjectsModule,

    Testv2Module,

    PracticeTestModule,

    CareModule,

    AdminLibraryModule,

    ScheduleNewModule,

    MasterCareModule,

    AdminCareModule,

    MasterLoginModule,

    QuestionBankModule,

    AnnouncementNewModule,

    Assignmentv2Module,

    Attendancev2Module,
      
    QuestionBankV2Module,

    MarkingSchemeModule
  ],
  controllers: [],
  providers: [
    // {
    // provide: APP_FILTER,
    // useClass: AllExceptionsFilter,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor,
    // }
  ],
})
export class AppModule {}
