var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/logic/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"/app","pathMatch":"full","canActivate":["AuthGuard"]},{"path":"app","component":"MainComponent","canActivate":["AuthGuard"],"children":[{"path":"","component":"CoordinationsDashboardComponent","children":[{"path":"procedures/:id","component":"ProceduresComponent"}]},{"path":"guarda-cuencas","component":"GuardacuencasComponent","data":{"state":"guarda-cuencas"}},{"path":"reports","component":"ReportsComponent","data":{"state":"reports"}},{"path":"map/:id","component":"MapSigTaskExecutionComponent","data":{"state":"map"}},{"path":"procedures","component":"ProceduresComponent","data":{"state":"procedures"}},{"path":"create-procedures","component":"CreateProcedureComponent","children":[{"path":"","component":"BaseComponent"},{"path":"create-task","component":"CreateTaskWidgetComponent"}],"data":{"state":"procedures"}},{"path":"view-procedures/:id","component":"ViewProjectComponent","data":{"state":"procedures"}},{"path":"edit-procedures/:id","component":"EditProcedureComponent","data":{"state":"procedures"}},{"path":"tasks","component":"TasksComponent","data":{"state":"tasks"}},{"path":"create-tasks","component":"CreateTaskComponent","data":{"state":"tasks"}},{"path":"view-tasks/:id","component":"ViewTaskComponent","data":{"state":"tasks"}},{"path":"view-search-predio/:id","component":"ViewSearchPredioComponent","data":{"state":"view-search-predio"}},{"path":"edit-tasks/:id","component":"EditTaskComponent","data":{"state":"tasks"}},{"path":"coordinations","component":"CoordinationsDashboardComponent","data":{"state":"coordinations"}},{"path":"survey/:id","component":"SurveyTaskComponent","data":{"state":"survey"}},{"path":"budgets","component":"BudgetComponent","data":{"state":"budgets"}},{"path":"budgets/:id","component":"ViewBudgetFinalComponent","data":{"state":"view-budgets"}},{"path":"predio-potencial","component":"PredioPotencialComponent","data":{"state":"predio-potencial"}},{"path":"view-potencial/:id","component":"ViewPotencialComponent","data":{"state":"view-potencial"}},{"path":"list-predios","component":"ListPrediosComponent","data":{"state":"list-predios"}},{"path":"ver-minuta/:id","component":"MinutaComponent","data":{"state":"ver-minuta"}},{"path":"ver-carta-intencion/:id","component":"CartaIntencionComponent","data":{"state":"ver-carta-intencion"}},{"path":"tarea-carta-intencion/:id","component":"ViewTaskIntentionComponent","data":{"state":"tarea-carta-intencion"}},{"path":"informe-medicion/:id","component":"IMedicionComponent","data":{"state":"informe-medicion"}},{"path":"informe-verificacion-medicion/:id","component":"InformeVerificacionMedicionComponent","data":{"state":"informe-verificacion-medicion"}},{"path":"informe-verificacion-edicion/:id","component":"IVerifEdicionComponent","data":{"state":"informe-verificacion-edicion"}},{"path":"informe-ejecucion/:id","component":"InformeEjecucionComponent","data":{"state":"informe-ejecucion"}},{"path":"informe-edicion/:id","component":"IEdicionSigComponent","data":{"state":"informe-medicion"}},{"path":"informe-final-sig/:id","component":"ISigFinalComponent","data":{"state":"informe-final-sig"}},{"path":"calendar","component":"CuencaCalendarComponent","data":{"state":"cuenca-calendar"}},{"path":"selected-calendar/:id","component":"SelectedCalendarComponent","data":{"state":"cuenca-calendar-selected"}},{"path":"create-calendar/:fecha","component":"CreateCalendarComponent","data":{"state":"cuenca-calendar-crear"}},{"path":"pools-of-contracts","component":"PoolsOfContractsComponent","data":{"state":"pools-of-contracts"}},{"path":"create-pools-of-contracts","component":"CreatePoolOfContractsComponent","data":{"state":"pools-of-contracts"}},{"path":"edit-pools-of-contracts/:id","component":"EditPoolOfContractsComponent","data":{"state":"pools-of-contracts"}},{"path":"view-pools-of-contracts/:id","component":"ViewPoolOfContractsComponent","data":{"state":"pools-of-contracts"}},{"path":"contractors","component":"ContractorsComponent","data":{"state":"contractors"}},{"path":"create-contractors","component":"CreateContractorComponent","data":{"state":"create-contractors"}},{"path":"edit-contractors/:id","component":"EditContractorComponent","data":{"state":"edit-contractors"}},{"path":"view-contractor/:id","component":"ContractorsViewComponent","data":{"state":"view-contractor"}},{"path":"formato-stard/:id","component":"FormatoStardComponent","data":{"state":"formato-stard"}},{"path":"sistema-individual/:id","component":"SistemaIndividualComponent","data":{"state":"sistema-individual"}},{"path":"material-vegetal/:id","component":"MaterialVegetalComponent","data":{"state":"material-vegetal"}},{"path":"seguimiento-predial/:id","component":"SeguimientoPredialComponent","data":{"state":"seguimiento-predial"}},{"path":"control-mantenimientos/:id","component":"ControlMantenimientosComponent","data":{"state":"control-mantenimientos"}},{"path":"evaluacion-proveedores/:id","component":"EvaluacionProveedoresComponent","data":{"state":"evaluacion-proveedores"}},{"path":"evaluacion-proveedores/:id","component":"EvaluacionProveedoresComponent","data":{"state":"evaluacion-proveedores"}},{"path":"comando","component":"ViewsComandoComponent","data":{"state":"comando"}},{"path":"create-aporte","component":"CreateAporteComponent","data":{"state":"create-aporte"}},{"path":"edit-aporte/:id","component":"EditAporteComponent","data":{"state":"edit-aporte"}},{"path":"traslate-aporte/:id","component":"TraslateAporteComponent","data":{"state":"traslate-aporte"}},{"path":"search","component":"SearchComponent","data":{"state":"search"}},{"path":"search/:query","component":"SearchComponent","data":{"state":"search"}},{"path":"predio/:id","component":"PredioComponent","data":{"state":"predio"}},{"path":"forms/supplier-evaluation/:id","component":"SupplierEvaluationComponent","data":{"state":"forms"}},{"path":"pqrs","component":"PqrsComponent","data":{"state":"pqrsList"}},{"path":"create-pqrs","component":"CreatePqrsComponent","data":{"state":"pqrsList"}},{"path":"view-pqrs/:id","component":"ViewPqrsComponent","data":{"state":"pqrsList"}},{"path":"view-monitoreos/:id","component":"ViewMonitoreoComponent","data":{"state":"monitoreos"}},{"path":"tareas-ejecucion","component":"TareasEjecucionComponent","data":{"state":"tareas-ejecucion"}},{"path":"historial-tareas","component":"HistoryTaskComponent","data":{"state":"historial-tareas"}},{"path":"view-tarea-ejecucion/:id","component":"ViewSelectedEjecucionComponent","data":{"state":"view-tarea-ejecucion"}},{"path":"create-tarea-ejecucion","component":"CreateTareaEjecucionComponent","data":{"state":"create-tarea-ejecucion"}}]},{"path":"login","component":"LogInComponent"}],"kind":"module"}]}