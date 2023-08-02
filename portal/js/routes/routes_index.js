var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app.routing.ts","module":"AppRoutingModule","children":[{"path":"learn/course","loadChildren":"./modules/learn/course-consumption.module#CourseConsumptionModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/learn/course-consumption-routing.module.ts","module":"CourseConsumptionRoutingModule","children":[{"path":"play/:collectionId","component":"AssessmentPlayerComponent","canDeactivate":["PendingchangesGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"course-player","type":"view","object":{"ver":"1.0","type":"batch"}},"menuBar":{"visible":false}}},{"path":"","component":"CourseConsumptionPageComponent","data":{"telemetry":{"env":"telemetryEnv"}},"children":[{"path":":courseId","component":"CoursePlayerComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"course-details","type":"view","object":{"ver":"1.0","type":"batch"}},"menuBar":{"visible":false},"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Courses","url":"/learn"}]},"children":[{"path":"","loadChildren":"./batch.module#BatchModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/learn/batch-routing.module.ts","module":"BatchRoutingModule","children":[{"path":"enroll/batch/:batchId","component":"EnrollBatchComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"batch-enroll","type":"view","object":{"ver":"1.0","type":"batch"}}}},{"path":"update/batch/:batchId","component":"UpdateCourseBatchComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"batch-edit","type":"view","object":{"ver":"1.0","type":"batch"}},"roles":"createBatchRole"}},{"path":"create/batch","component":"CreateBatchComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"batch-create","type":"view","mode":"create","object":{"ver":"1.0","type":"batch"}},"roles":"createBatchRole"}}],"kind":"module"}],"module":"BatchModule"}]}]},{"path":":courseId/dashboard","loadChildren":"./../dashboard/dashboard.module#DashboardModule","canActivate":["AuthGuard"],"data":{"roles":"createBatchRole","telemetry":{"env":"telemetryEnv","pageid":"course-stats","type":"view","object":{"ver":"1.0","type":"course"}},"menuBar":{"visible":false}}},{"path":":courseId/batch/:batchId","component":"CoursePlayerComponent","data":{"menuBar":{"visible":false},"telemetry":{"env":"telemetryEnv","pageid":"course-read","type":"workflow","object":{"ver":"1.0","type":"course"}},"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Courses","url":"/learn"}]},"children":[{"path":"unenroll/batch/:batchId","component":"UnEnrollBatchComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"batch-enroll","type":"view","object":{"ver":"1.0","type":"batch"}}}}]},{"path":":courseId/:courseStatus","component":"CoursePlayerComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"course-player-unlisted","type":"view","object":{"ver":"1.0","type":"batch"}},"menuBar":{"visible":false},"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Courses","url":"/learn"}]}}]}],"kind":"module"}],"module":"CourseConsumptionModule"}]},{"path":"learn","loadChildren":"./modules/learn/learn.module#LearnModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/learn/learn-routing.module.ts","module":"LearnRoutingModule","children":[{"path":"","component":"CoursePageComponent","data":{"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Courses","url":""}],"telemetry":{"env":"explore-course","pageid":"explore-course","type":"view","subtype":"paginate"},"menuBar":{"visible":false},"baseUrl":"learn"}},{"path":"redirect","component":"RedirectComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"learn-redirect","type":"view"},"menuBar":{"visible":false}}},{"path":"view-all/:section/:pageNumber","component":"ViewAllComponent","data":{"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Courses","url":"/learn"}],"telemetry":{"env":"telemetryEnv","pageid":"view-all","type":"view","subtype":"paginate"},"menuBar":{"visible":false},"baseUrl":"learn","filterType":"courses","facets":true,"frameworkName":true,"formAction":"filter"}}],"kind":"module"}],"module":"LearnModule"}]},{"path":"resources","loadChildren":"./modules/resource/resource.module#ResourceModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/resource/resource-routing.module.ts","module":"ResourceRoutingModule","children":[{"path":"","loadChildren":"./../explore-page/explore-page.module#ExplorePageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/explore-page/explore-page-routing.module.ts","module":"ExplorePageRoutingModule","children":[{"path":"","component":"ExplorePageComponent","data":{"telemetry":{"env":"explore","pageid":"explore","type":"view","subtype":"paginate"},"softConstraints":{"badgeAssertions":"98","board":"99","channel":"100"}}}],"kind":"module"}],"module":"ExplorePageModule"}]},{"path":"view-all/:section/:pageNumber","component":"ViewAllComponent","data":{"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Library","url":"/resources"}],"telemetry":{"env":"telemetryEnv","pageid":"view-all","type":"view","subtype":"paginate"},"filterType":"library","softConstraints":{"badgeAssertions":"98","board":"99","channel":"100"},"applyMode":true,"facets":true}},{"path":"play","loadChildren":"./modules/player/player.module#PlayerModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/public/module/player/player-routing.module.ts","module":"PlayerRoutingModule","children":[{"path":"content/:contentId","component":"ContentPlayerComponent","data":{"menuBar":{"visible":false},"telemetry":{"env":"public","pageid":"play-content","type":"view","subtype":"paginate"}}},{"path":"collection/:collectionId","component":"CollectionPlayerComponent","data":{"menuBar":{"visible":false},"telemetry":{"env":"public","pageid":"play-collection","type":"view","subtype":"paginate"}}},{"path":"questionset/:contentId","component":"ContentPlayerComponent","canDeactivate":["PendingchangesGuard"],"data":{"menuBar":{"visible":false},"telemetry":{"env":"public","pageid":"play-questionset","type":"view","subtype":"paginate"}}}],"kind":"module"}],"module":"PlayerModule"}]},{"path":"curriculum-courses","component":"CurriculumCoursesComponent","data":{"telemetry":{"env":"curriculum-courses","pageid":"curriculum-courses","type":"view","subtype":"paginate"}}}],"kind":"module"}],"module":"ResourceModule"}]},{"path":"search","loadChildren":"./modules/search/search.module#SearchModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/search/search-routing.module.ts","module":"SearchRoutingModule","children":[{"path":"All/:pageNumber","component":"HomeSearchComponent","data":{"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Search","url":""}],"telemetry":{"env":"home","pageid":"home-search","type":"view","subtype":"paginate"}}},{"path":"Courses/:pageNumber","component":"HomeSearchComponent","data":{"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Search","url":""}],"telemetry":{"env":"course","pageid":"course-search","type":"view","subtype":"paginate"}}},{"path":"Library/:pageNumber","component":"HomeSearchComponent","data":{"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Search","url":""}],"telemetry":{"env":"library","pageid":"library-search","type":"view","subtype":"paginate"},"softConstraints":{"badgeAssertions":"98","channel":"100"}}},{"path":"Users/:pageNumber","component":"UserSearchComponent","canActivate":["AuthGuard"],"data":{"roles":"rootOrgAdmin","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"Search","url":""}],"telemetry":{"env":"profile","pageid":"user-search","type":"view","subtype":"paginate"}},"children":[{"path":"edit/:userId","component":"UserEditComponent","data":{"telemetry":{"env":"profile","pageid":"user-edit","type":"edit","subtype":"paginate"}}},{"path":"delete/:userId","component":"UserDeleteComponent"}]},{"path":"Users/:pageNumber/view/:userId","component":"UserProfileComponent","data":{"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"}],"telemetry":{"env":"profile","pageid":"user-detail","type":"view","subtype":"paginate"}}}],"kind":"module"}],"module":"SearchModule"}]},{"path":"workspace","loadChildren":"./modules/workspace/workspace.module#WorkspaceModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/workspace/workspace-routing.module.ts","module":"WorkspaceRoutingModule","children":[{"path":"content","component":"WorkspaceComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace"},"children":[{"path":"create","component":"CreateContentComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-content-create","uri":"/workspace/content/create","type":"view","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"createRole","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]},"children":[{"path":"textbook","component":"DataDrivenComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-create-textbook","uri":"/workspace/content/create/textbook","type":"view","mode":"create","object":{"type":"objectType","ver":"1.0"}},"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"uploadcontent","component":"DataDrivenComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-content-create","subtype":"paginate","uri":"/workspace/content/create","type":"view","mode":"create","object":{"type":"objectType","ver":"1.0"}},"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"course","component":"DataDrivenComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-create-course","subtype":"paginate","uri":"/workspace/content/create/course","type":"view","mode":"create","object":{"type":"objectType","ver":"1.0"}},"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"studymaterial","component":"DataDrivenComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-create-lesson","subtype":"paginate","uri":"/workspace/content/create/studymaterial","type":"view","mode":"create","object":{"type":"objectType","ver":"1.0"}},"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"collection","component":"DataDrivenComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-create-collection","subtype":"paginate","uri":"/workspace/content/create/collection","type":"view","mode":"create","object":{"type":"objectType","ver":"1.0"}},"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"lessonplan","component":"DataDrivenComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"workspase-create-lessonplan","subtype":"paginate","uri":"/workspace/content/create/lessonplan","type":"view","mode":"create","object":{"type":"objectType","ver":"1.0"}},"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"assessment","component":"DataDrivenComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-create-assessment","subtype":"paginate","uri":"/workspace/content/create/assessment","type":"view","mode":"create","object":{"type":"objectType","ver":"1.0"}},"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"questionset","component":"DataDrivenComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-create-questionset","uri":"/workspace/content/create/questionset","type":"view","mode":"create","object":{"type":"objectType","ver":"1.0"}},"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}}]},{"path":"edit/collection/:contentId/:type/:state/:framework/:contentStatus","component":"CollectionEditorComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace"}},{"path":"edit/content/:contentId/:state/:framework/:contentStatus","component":"ContentEditorComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace"}},{"path":"edit/generic","component":"GenericEditorComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace"}},{"path":"edit/generic/:contentId/:state/:framework/:contentStatus","component":"GenericEditorComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace"}},{"path":"edit/editorforlargecontent","component":"GenericEditorComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace","isLargeFileUpload":true}},{"path":"edit/collection/:contentId/:type/:state/:framework","component":"CollectionEditorComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace"}},{"path":"edit/content/:contentId/:state/:framework","component":"ContentEditorComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace"}},{"path":"edit/generic/:contentId/:state/:framework","component":"GenericEditorComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace"}},{"path":"draft/:pageNumber","component":"DraftComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-content-draft","subtype":"paginate","uri":"/workspace/content/draft","type":"list","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"draftRole","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"review/:pageNumber","component":"ReviewSubmissionsComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-content-inreview","subtype":"paginate","uri":"/workspace/content/review","type":"list","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"inreviewRole","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"published/:pageNumber","component":"PublishedComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-content-published","uri":"/workspace/content/published","type":"list","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"publishedRole","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"uploaded/:pageNumber","component":"UploadedComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-content-uploaded","subtype":"paginate","uri":"/workspace/content/uploaded","type":"list","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"alluploadsRole","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"flagged/:pageNumber","component":"FlaggedComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-content-flagged","subtype":"paginate","uri":"workspace/content/flagged","type":"list","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"flaggedRole","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"upForReview/:pageNumber","component":"UpForReviewComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-content-upforreview","subtype":"paginate","uri":"workspace/content/upForReview","type":"list","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"upForReviewRole","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"limited-publish/:pageNumber","component":"LimitedPublishedComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-content-unlisted","subtype":"paginate","uri":"/workspace/content/limited-publish","type":"list","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"limitedPublishingRole","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"batches/:category","component":"BatchPageSectionComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-course-batch","subtype":"paginate","uri":"/workspace/batches","type":"list","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"courseBatchRoles","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]},"children":[{"path":"update/batch/:batchId","component":"UpdateBatchComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"batch-edit","uri":"/update/batch/","type":"detail","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"courseBatchRoles","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}}]},{"path":"allcontent/:pageNumber","component":"AllContentComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-content-allcontent","subtype":"paginate","uri":"workspace/content/allcontent","type":"list","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"allContentRole","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"alltextbooks/:pageNumber","component":"AllTextbooksComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-content-alltextbooks","subtype":"paginate","uri":"workspace/content/alltextbooks","type":"list","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"alltextbookRole","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"flagreviewer/:pageNumber","component":"FlagReviewerComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-content-flagreviewer","subtype":"paginate","uri":"workspace/content/flagreviewer","type":"list","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"flagReviewerRole","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"collaborating-on/:pageNumber","component":"CollaboratingOnComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"workspace-content-collaborating-on","subtype":"paginate","uri":"workspace/content/collaborating-on","type":"list","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"collaboratingRole","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}}]},{"path":"edit/:type/:contentId/:state/:contentStatus","component":"NewCollectionEditorComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}],"hideHeaderNFooter":true}},{"path":"content/upForReview/content/:contentId","component":"UpforreviewContentplayerComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]},"children":[{"path":"publish","component":"PublishedPopupComponent"},{"path":"requestchanges","component":"RequestChangesPopupComponent"}]},{"path":"content/flagreviewer/content/:contentId","component":"UpforreviewContentplayerComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]},"children":[{"path":"publish","component":"PublishedPopupComponent"},{"path":"requestchanges","component":"RequestChangesPopupComponent"}]},{"path":"content/flag/content/:contentId","component":"FlagConentplayerComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"content/review/content/:contentId","component":"ReviewsubmissionsContentplayerComponent","canActivate":["AuthGuard"],"data":{"roles":"workspace","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}},{"path":"batches/view-all/:section/:pageNumber","component":"BatchListComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"view-all","subtype":"paginate","uri":"/workspace/content/batches/view-all","type":"list","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"courseBatchRoles","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]},"children":[{"path":"update/batch/:batchId","component":"UpdateBatchComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"batch-edit","uri":"/update/batch/","type":"detail","mode":"create","object":{"type":"objectType","ver":"1.0"}},"roles":"courseBatchRoles","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":"/profile"},{"label":"MyWorkspace","url":""}]}}]}],"kind":"module"}],"module":"WorkspaceModule"}]},{"path":"org","loadChildren":"./modules/org-management/org-management.module#OrgManagementModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/org-management/org-management-routing.module.ts","module":"OrgManagementRoutingModule","children":[{"path":"orgType","component":"ViewOrgTypeComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"view-organization-type","type":"view","subtype":"paginate"},"roles":"orgType","breadcrumbs":[{"label":"Home","url":"/home"},{"label":"OrganizationType","url":""}]},"children":[{"path":"create","component":"CreateOrgTypeComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"create-organization-type","type":"create","subtype":"paginate"}}},{"path":"update/:orgId","component":"CreateOrgTypeComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"update-organization-type","type":"update","subtype":"paginate"}}},{"path":"**","redirectTo":""}]}],"kind":"module"}],"module":"OrgManagementModule"}]},{"path":"dashBoard","loadChildren":"./modules/dashboard/dashboard.module#DashboardModule"},{"path":"profile","loadChildren":"./plugins/profile/profile.module#ProfileModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/plugins/profile/profile-routing.module.ts","module":"ProfileRoutingModule","children":[{"path":"","component":"ProfilePageComponent","data":{"menuBar":{"visible":false},"pageTitle":"profile","telemetry":{"env":"telemetryEnv","type":"view","mode":"create","subtype":"paginate","object":{"type":"objectType","ver":"1.0"}},"breadcrumbs":[{"label":"Home","url":"/home"},{"label":"Profile","url":""}]}},{"path":"create-managed-user","component":"CreateUserComponent","data":{"menuBar":{"visible":false},"pageTitle":"create-managed-user","telemetry":{"env":"telemetryEnv","type":"view"}}},{"path":"choose-managed-user","component":"ChooseUserComponent","data":{"menuBar":{"visible":false},"telemetry":{"env":"telemetryEnv","pageid":"choose-managed-user","type":"view","uri":"/profile/choose-managed-user"}}},{"path":"submit-declaration","component":"SubmitTeacherDetailsComponent","data":{"menuBar":{"visible":false},"telemetry":{"env":"telemetryEnv","pageid":"teacher-declaration","type":"view","uri":"/profile/submit-declaration"}}}],"kind":"module"}],"module":"ProfileModule"}]},{"path":"certs","loadChildren":"./modules/certificate/certificate.module#CertificateModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/certificate/certificate-routing.module.ts","module":"CertificateRoutingModule","children":[{"path":"configure/certificate","component":"CertificateConfigurationComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"certs","pageid":"certificate-configuration","type":"view","subtype":"paginate","ver":"1.0"},"roles":"createBatchRole","hideHeaderNFooter":false}},{"path":"configure/create-template","component":"CreateTemplateComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"certs","pageid":"certificate-create-template","type":"view","subtype":"paginate","ver":"1.0"},"roles":"createBatchRole","hideHeaderNFooter":false}},{"path":"configure/create-certificate-template","component":"SvgEditorComponent","canActivate":["AuthGuard"],"data":{"telemetry":{"env":"certs","pageid":"certificate-create-template","type":"view","subtype":"paginate","ver":"1.0"},"roles":"createBatchRole","hideHeaderNFooter":false}},{"path":":uuid","component":"CertificateDetailsComponent","data":{"telemetry":{"env":"certs","pageid":"certificate-details","type":"view"}}}],"kind":"module"}],"module":"CertificateModule"}]},{"path":"recover","loadChildren":"./modules/recover-account/recover-account.module#RecoverAccountModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/recover-account/recover-account-routing.module.ts","module":"RecoverAccountRoutingModule","children":[{"path":"","component":"RecoverAccountComponent","data":{"hideHeaderNFooter":true},"children":[{"path":"identify/account","component":"IdentifyAccountComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"IdentifyAccount","type":"view","subtype":"paginate"}}},{"path":"select/account/identifier","component":"SelectAccountIdentifierComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"SelectIdentifier","type":"view","subtype":"paginate"}}},{"path":"verify/account/identifier","component":"VerifyAccountIdentifierComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"VerifyIdentifier","type":"view","subtype":"paginate"}}}]}],"kind":"module"}],"module":"RecoverAccountModule"}]},{"path":"accountMerge","loadChildren":"./modules/merge-account/merge-account.module#MergeAccountModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/merge-account/merge-account-routing.module.ts","module":"MergeAccountRoutingModule","children":[{"path":"","component":"MergeAccountStatusComponent"}],"kind":"module"}],"module":"MergeAccountModule"}]},{"path":"get","loadChildren":"./modules/dial-code-search/dial-code-search.module#DialCodeSearchModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/dial-code-search/dial-code-search.routing.module.ts","module":"DialCodeSearchRoutingModule","children":[{"path":"","component":"GetComponent","data":{"sendUtmParams":true,"telemetry":{"env":"public","pageid":"get","type":"view","subtype":"paginate"}}},{"path":"dial/:dialCode","component":"DialCodeComponent","data":{"sendUtmParams":true,"telemetry":{"env":"public","pageid":"get-dial","type":"view","subtype":"pre-populate"}}}],"kind":"module"}],"module":"DialCodeSearchModule"}]},{"path":"manage","loadChildren":"./modules/manage/manage.module#ManageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/manage/manage-routing.module.ts","module":"ManageRoutingModule","children":[{"path":"","component":"UserOrgManagementComponent","canActivate":["AuthGuard"],"data":{"roles":"bulkUpload","telemetry":{"env":"admin-dashboard","pageid":"admin-manage-page","type":"view","uri":"/manage"}}},{"path":"userRoleAssign","component":"UserRoleAssignComponent","data":{"telemetry":{"env":"user-role-assign","pageid":"userRoleAssign","type":"view"}}}],"kind":"module"}],"module":"ManageModule"}]},{"path":"uci-admin","loadChildren":"./modules/uci-admin/uci-admin.module#UciAdminModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/uci-admin/uci-admin-routing.module.ts","module":"UciAdminRoutingModule","children":[{"path":"","component":"UciComponent","canActivate":["AuthGuard"],"data":{"roles":"uciAdmin","telemetry":{"env":"uci-admin","pageid":"uci-admin-page","type":"view"}}}],"kind":"module"}],"module":"UciAdminModule"}]},{"path":"","loadChildren":"./modules/public/public.module#PublicModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/public/public-routing.module.ts","module":"PublicRoutingModule","children":[{"path":"","component":"LandingPageComponent","canActivate":["LandingpageGuard"],"data":{"telemetry":{"env":"public","pageid":"landing-page","type":"edit","subtype":"paginate"}}},{"path":"desktop","loadChildren":"./module/offline/offline.module#OfflineModule"},{"path":"explore","loadChildren":"./module/explore/explore.module#ExploreModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/public/module/explore/explore-routing.module.ts","module":"ExploreRoutingModule","children":[{"path":"","loadChildren":"../../../explore-page/explore-page.module#ExplorePageModule","children":[{"kind":"module","children":[],"module":"ExplorePageModule"}]},{"path":"view-all/:section/:pageNumber","component":"ViewAllComponent","data":{"telemetry":{"env":"explore","pageid":"view-all","type":"view","subtype":"paginate"},"filterType":"explore","softConstraints":{"badgeAssertions":"98","board":"99","channel":"100"},"applyMode":true}},{"path":":pageNumber","component":"ExploreContentComponent","data":{"telemetry":{"env":"explore","pageid":"explore-search","type":"view","subtype":"paginate"},"softConstraints":{"badgeAssertions":"98","channel":"100"}}},{"path":"list/curriculum-courses","component":"ExploreCurriculumCoursesComponent","data":{"telemetry":{"env":"curriculum-courses","pageid":"curriculum-courses","type":"view","subtype":"paginate"}}}],"kind":"module"}],"module":"ExploreModule"}]},{"path":"explore-course","loadChildren":"./module/course/course.module#CourseModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/public/module/course/course-routing.module.ts","module":"CourseRoutingModule","children":[{"path":"","loadChildren":"../../../learn/learn.module#LearnModule","children":[{"kind":"module","children":[],"module":"LearnModule"}]},{"path":"view-all/:section/:pageNumber","component":"ViewAllComponent","data":{"telemetry":{"env":"explore-course","pageid":"explore-view-all","type":"view","subtype":"paginate"},"menuBar":{"visible":false},"filterType":"explore-course","frameworkName":true,"formAction":"filter","facets":true}},{"path":":pageNumber","component":"ExploreCourseComponent","data":{"telemetry":{"env":"explore-course","pageid":"explore-course-search","type":"view","subtype":"paginate"},"menuBar":{"visible":false},"softConstraints":{"badgeAssertions":"98","board":"99","channel":"100"}}},{"path":"course","component":"PublicCourseConsumptionPageComponent","data":{"telemetry":{"env":"explore","pageid":"explore-course-toc","type":"view"}},"children":[{"path":":courseId","component":"PublicCoursePlayerComponent","data":{"telemetry":{"env":"explore-course-toc","pageid":"explore-course-toc","type":"view"},"menuBar":{"visible":false}}}]}],"kind":"module"}],"module":"CourseModule"}]},{"path":"explore-groups","loadChildren":"./module/group/group.module#GroupModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/public/module/group/group-routing.module.ts","module":"GroupRoutingModule","children":[{"path":"","component":"ExploreGroupComponent","data":{"telemetry":{"env":"groups","pageid":"explore-groups","type":"view","subtype":"paginate"},"menuBar":{"visible":false}}}],"kind":"module"}],"module":"GroupModule"}]},{"path":"signup","loadChildren":"./module/signup/signup.module#SignupModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/public/module/signup/signup-routing.module.ts","module":"SignupRoutingModule","children":[{"path":"","component":"SignupComponent","data":{"hideHeaderNFooter":true,"telemetry":{"env":"telemetryEnv","pageid":"signup","uri":"/signup","type":"view","mode":"self","uuid":"uuid"}}}],"kind":"module"}],"module":"SignupModule"}]},{"path":"sign-in/sso","loadChildren":"./module/sign-in/sso/sso.module#SsoModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/public/module/sign-in/sso/sso-routing.module.ts","module":"SsoRoutingModule","children":[{"path":"select-org","component":"SelectOrgComponent","data":{"hideHeaderNFooter":true,"telemetry":{"env":"telemetryEnv","pageid":"select-org","uri":"/select-org","type":"view","mode":"self","uuid":"uuid"}}},{"path":"update/contact","component":"UpdateContactComponent","data":{"hideHeaderNFooter":true,"telemetry":{"env":"telemetryEnv","pageid":"update-contact","uri":"/update-contact","type":"view","mode":"self","uuid":"uuid"}}},{"path":"auth","component":"AuthFailedComponent"}],"kind":"module"}],"module":"SsoModule"}]},{"path":"play","loadChildren":"./module/player/player.module#PlayerModule","children":[{"kind":"module","children":[],"module":"PlayerModule"}]},{"path":"download/desktopapp","component":"OfflineApplicationDownloadComponent"},{"path":"faq","loadChildren":"./module/help/help.module#HelpModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/public/module/help/help-routing.module.ts","module":"HelpRoutingModule","children":[{"path":"","component":"FaqComponent","data":{"routeReuse":{"reuse":true,"path":"help"},"menuBar":{"visible":false},"telemetry":{"env":"help","pageid":"faq","type":"view","subtype":"paginate"}}}],"kind":"module"}],"module":"HelpModule"}]},{"path":"guest-profile","loadChildren":"./module/guest-profile/guest-profile.module#GuestProfileModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/public/module/guest-profile/guest-profile-routing.module.ts","module":"GuestProfileRoutingModule","children":[{"path":"","component":"GuestProfileComponent","data":{"menuBar":{"visible":false},"telemetry":{"env":"profile","pageid":"guest-profile","type":"view","subtype":"paginate"}}}],"kind":"module"}],"module":"GuestProfileModule"}]}],"kind":"module"}],"module":"PublicModule"}]},{"path":"discussion-forum","loadChildren":"./modules/discussion/discussion.module#DiscussionModule"},{"path":"MY_GROUPS","loadChildren":"./modules/groups/groups.module#GroupsModule"},{"path":"NOTIFICATION","loadChildren":"./modules/notification/notification.module#NotificationModule"},{"path":"observation","loadChildren":"./modules/observation/observation.module#ObservationModule","canActivate":["MlGuard"]},{"path":"questionnaire","loadChildren":"./modules/questionnaire/questionnaire.module#QuestionnaireModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/questionnaire/questionnaire-routing.module.ts","module":"QuestionnaireRoutingModule","children":[{"path":"","component":"QuestionnaireComponent","canDeactivate":["CanDeactivateGuard"],"data":{"telemetry":{"env":"telemetryEnv","pageid":"questionnaire","type":"view"}}}],"kind":"module"}],"module":"QuestionnaireModule"}]},{"path":"solution","loadChildren":"./modules/report/report.module#ReportModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/report/report-routing.module.ts","module":"ReportRoutingModule","children":[{"path":"solution-listing","component":"SolutionListingComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"solution-listing","type":"view"},"menuBar":{"visible":false}}},{"path":"report-view","component":"ReportViewComponent","data":{"telemetry":{"env":"telemetryEnv","pageid":"report-view","type":"view"},"menuBar":{"visible":false}}}],"kind":"module"}],"module":"ReportModule"}]},{"path":"program","loadChildren":"./modules/program-dashboard/program-dashboard.module#programDashboardModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/program-dashboard/program-dashboard-routing.module.ts","module":"programDashboardRoutingModule","children":[{"path":"","component":"DatasetsComponent","canActivate":["AuthGuard"],"data":{"roles":"programDashboardRole","telemetry":{"env":"telemetryEnv","pageid":"program-datasets","type":"view"},"menuBar":{"visible":false}}}],"kind":"module"}],"module":"programDashboardModule"}]},{"path":"error","component":"ErrorPageComponent"},{"path":"**","redirectTo":""}],"kind":"module"},{"name":"routes","filename":"src/app/modules/public/module/offline/offline-routing.module.ts","module":"OfflineRoutingModule","children":[{"path":"mydownloads","component":"LibraryComponent","data":{"telemetry":{"env":"library","pageid":"library","type":"view"},"softConstraints":{"badgeAssertions":"98","board":"99","channel":"100"}}},{"path":"telemetry","component":"TelemetryComponent","data":{"telemetry":{"env":"telemetry","pageid":"telemetry","type":"view"}}},{"path":"about-us","component":"AboutUsComponent","data":{"telemetry":{"env":"about-us","pageid":"about-us","type":"view"}}}],"kind":"module"}]}
