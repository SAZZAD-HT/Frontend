export const lists1=[
    {
       "ModuleID":1,
       "MenuName":"Settings",
       "IconName":"fas fa-cogs",
       "IconColor":"#0B3861",
       "MenuPath":"settings",
       "SortOrder":1,
       "children":[
          {
             "MenuId":52,
             "MenuName":"SYSTEM SETTINGS",
             "MenuPath":"settings/systemSettings",
             "children":[
                {
                   "MenuPermissionId":"11823",
                   "UserId":"916",
                   "key":7,
                   "MenuName":"CHANGE PASSWORD",
                   "MenuPath":"../Home/ChangePassword",
                   "SortOrder":1,
                   "ModuleId":1
                },
                {
                   "MenuPermissionId":"11834",
                   "UserId":"916",
                   "key":2,
                   "MenuName":"MENU SETUP",
                   "MenuPath":"../Menu/MenuSettings",
                   "SortOrder":2,
                   "ModuleId":1
                },
                {
                   "MenuPermissionId":"11833",
                   "UserId":"916",
                   "key":3,
                   "MenuName":"USER SETUP & MENU PERMISSION",
                   "MenuPath":"../User/UserSettings",
                   "SortOrder":3,
                   "ModuleId":1
                },
                {
                   "MenuPermissionId":"100112",
                   "UserId":"916",
                   "key":4212,
                   "MenuName":"PASSWORD RESET",
                   "MenuPath":"../User/UserResetSettings",
                   "SortOrder":4,
                   "ModuleId":1
                }
             ]
          }
       ]
    },
    {
       "ModuleID":3,
       "MenuName":"HRM",
       "IconName":"fas fa-users",
       "IconColor":"#0080FF",
       "SortOrder":2,
       "MenuPath":"hrm",
       "children":[
          {
             "MenuPermissionId":"79507",
             "UserId":"916",
             "key":2147,
             "MenuName":"Dashboard",
             "MenuPath":"hrm/dashboard",
             "SortOrder":0,
             "ModuleId":3
          },
          {
             "MenuId":20,
             "MenuName":"HRM SETTING",
             "MenuPath":"hrm/settings",
             "children":[
                {
                   "MenuPermissionId":"79507",
                   "UserId":"916",
                   "key":2147,
                   "MenuName":"HRM MODE SETUP",
                   "MenuPath":"hrm/settings/HRMModeSetup",
                   "SortOrder":0,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79497",
                   "UserId":"916",
                   "key":21,
                   "MenuName":"COMPANY",
                   "MenuPath":"hrm/settings/CompanyInfo",
                   "SortOrder":1,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79474",
                   "UserId":"916",
                   "key":23,
                   "MenuName":"UNIT",
                   "MenuPath":"hrm/settings/UnitInfo",
                   "SortOrder":2,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79486",
                   "UserId":"916",
                   "key":24,
                   "MenuName":"DEPARTMENT",
                   "MenuPath":"hrm/settings/DepartmentSettings",
                   "SortOrder":3,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79476",
                   "UserId":"916",
                   "key":25,
                   "MenuName":"SECTION",
                   "MenuPath":"hrm/settings/SectionSettings",
                   "SortOrder":4,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79471",
                   "UserId":"916",
                   "key":27,
                   "MenuName":"DESIGNATION",
                   "MenuPath":"hrm/settings/DesignationSettings",
                   "SortOrder":5,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79489",
                   "UserId":"916",
                   "key":28,
                   "MenuName":"WING",
                   "MenuPath":"hrm/settings/WingSettings",
                   "SortOrder":6,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79480",
                   "UserId":"916",
                   "key":29,
                   "MenuName":"TEAM",
                   "MenuPath":"hrm/settings/TeamSettings",
                   "SortOrder":7,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79483",
                   "UserId":"916",
                   "key":32,
                   "MenuName":"DESIGNATION GROUP",
                   "MenuPath":"hrm/settings/DesignationGroupInfo",
                   "SortOrder":8,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79509",
                   "UserId":"916",
                   "key":37,
                   "MenuName":"SHIFT",
                   "MenuPath":"hrm/setings/ShiftInfo",
                   "SortOrder":9,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79494",
                   "UserId":"916",
                   "key":83,
                   "MenuName":"HOLIDAY ENTRY",
                   "MenuPath":"hrm/setings/HolidayInfo",
                   "SortOrder":10,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79510",
                   "UserId":"916",
                   "key":84,
                   "MenuName":"HOLIDAY SETUP RELIGION WISE",
                   "MenuPath":"hrm/setings/HolidaySetupReligionWise",
                   "SortOrder":11,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79498",
                   "UserId":"916",
                   "key":2132,
                   "MenuName":"DESIGNATION SPECIFICATION",
                   "MenuPath":"hrm/setings/DesignationSpecInfo",
                   "SortOrder":11,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79491",
                   "UserId":"916",
                   "key":85,
                   "MenuName":"HOLIDAY SETUP EMPLOYEE WISE",
                   "MenuPath":"hrm/setings/HolidaySetupEmployeeWise",
                   "SortOrder":12,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79496",
                   "UserId":"916",
                   "key":1083,
                   "MenuName":"APPROVAL ORGANOGRAM SETUP",
                   "MenuPath":"hrm/setings/ApprovalOranogramSetup",
                   "SortOrder":13,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79504",
                   "UserId":"916",
                   "key":1084,
                   "MenuName":"APPROVER SETUP",
                   "MenuPath":"hrm/setings/ApproverSetup",
                   "SortOrder":14,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79499",
                   "UserId":"916",
                   "key":2103,
                   "MenuName":"EMPLOYEE DIRECTORY",
                   "MenuPath":"hrm/setings/EmployeeDirectory",
                   "SortOrder":15,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79503",
                   "UserId":"916",
                   "key":2126,
                   "MenuName":"PABX INFO UPDATE",
                   "MenuPath":"hrm/setings/Index",
                   "SortOrder":16,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"110500",
                   "UserId":"916",
                   "key":7299,
                   "MenuName":"ORGANIZATION ORGANOGRAM SETUP",
                   "MenuPath":"hrm/setings/OrganizationOrganogramSetup",
                   "SortOrder":17,
                   "ModuleId":3
                }
             ]
          },
          {
             "MenuId":14,
             "MenuName":"MANAGE EMPLOYEE",
             "MenuPath":"hrm/manageEmployee",
             "children":[
                {
                   "MenuPermissionId":"79493",
                   "UserId":"916",
                   "key":1099,
                   "MenuName":"MY PROFILE",
                   "MenuPath":"hrm/manageEmployee/MyProfile",
                   "SortOrder":0,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79505",
                   "UserId":"916",
                   "key":13,
                   "MenuName":"ENROLL EMPLOYEE",
                   "MenuPath":"hrm/manageEmployee/EmployeeInfo",
                   "SortOrder":2,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79506",
                   "UserId":"916",
                   "key":1100,
                   "MenuName":"EMPLOYEE APPROVAL",
                   "MenuPath":"hrm/manageEmployee/EmployeeApproval",
                   "SortOrder":3,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79501",
                   "UserId":"916",
                   "key":2112,
                   "MenuName":"ID CARD REGISTRATION FORM",
                   "MenuPath":"hrm/manageEmployee/IdCardRegistration",
                   "SortOrder":4,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79492",
                   "UserId":"916",
                   "key":2113,
                   "MenuName":"ID CARD EMPLOYEE",
                   "MenuPath":"hrm/manageEmployee/EmployeeList",
                   "SortOrder":5,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79495",
                   "UserId":"916",
                   "key":2133,
                   "MenuName":"EMPLOYEE CONTRACT",
                   "MenuPath":"hrm/manageEmployee/EmployeeContract",
                   "SortOrder":6,
                   "ModuleId":3
                },
                {
                   "MenuPermissionId":"79508",
                   "UserId":"916",
                   "key":2134,
                   "MenuName":"EMPLOYEE JOB CONFIRMATION",
                   "MenuPath":"hrm/manageEmployee/JobConfirmation",
                   "SortOrder":7,
                   "ModuleId":3
                }
             ]
          }
       ]
    },
    {
       "ModuleID":5,
       "MenuName":"Attendance",
       "IconName":"fas fa-fingerprint",
       "IconColor":"#FE2E2E",
       "SortOrder":3,
       "MenuPath":"attendence",
       "children":[
          {
             "MenuId":67,
             "MenuName":"ATTENDANCE",
             "MenuPath":"attendence/attendence",
             "children":[
                {
                   "MenuPermissionId":"79479",
                   "UserId":"916",
                   "key":19,
                   "MenuName":"ATTENDANCE PROCESS",
                   "MenuPath":"attendence/attendence/attendenceProcess",
                   "SortOrder":1,
                   "ModuleId":5
                },
                {
                   "MenuPermissionId":"151615",
                   "UserId":"916",
                   "key":7309,
                   "MenuName":"ATTENDANCE PROCESS SETUP",
                   "MenuPath":"attendence/attendence/attendenceProcessSetup",
                   "SortOrder":2,
                   "ModuleId":5
                },
                {
                   "MenuPermissionId":"79484",
                   "UserId":"916",
                   "key":2110,
                   "MenuName":"ATTENDANCE MANUAL UPDATE",
                   "MenuPath":"../Report/MonthlyAttReport2",
                   "SortOrder":3,
                   "ModuleId":5
                },
                {
                   "MenuPermissionId":"79488",
                   "UserId":"916",
                   "key":1091,
                   "MenuName":"MANUAL ATTENDANCE",
                   "MenuPath":"../Attendance/ManualAttendance",
                   "SortOrder":3,
                   "ModuleId":5
                },
                {
                   "MenuPermissionId":"79473",
                   "UserId":"916",
                   "key":2111,
                   "MenuName":"EMPLOYEES ATTENDANCE STATUS (CONTINUOUS)",
                   "MenuPath":"../Attendance/UnAuthorizeAttendance",
                   "SortOrder":4,
                   "ModuleId":5
                },
                {
                   "MenuPermissionId":"79477",
                   "UserId":"916",
                   "key":2118,
                   "MenuName":"PUNCH ALTER",
                   "MenuPath":"../Attendance/PunchAlter",
                   "SortOrder":5,
                   "ModuleId":5
                },
                {
                   "MenuPermissionId":"79464",
                   "UserId":"916",
                   "key":2122,
                   "MenuName":"WEEK OFF ALTER",
                   "MenuPath":"../Attendance/WeekOffAlter",
                   "SortOrder":6,
                   "ModuleId":5
                },
                {
                   "MenuPermissionId":"79482",
                   "UserId":"916",
                   "key":4274,
                   "MenuName":"GENERAL DUTY SETUP",
                   "MenuPath":"../Attendance/GeneralDutySetup",
                   "SortOrder":7,
                   "ModuleId":5
                }
             ]
          },
          {
             "MenuId":18,
             "MenuName":"EMPLOYEE SHIFT",
             "MenuPath":"attendence/employeeShift",
             "children":[
                {
                   "MenuPermissionId":"79485",
                   "UserId":"916",
                   "key":22,
                   "MenuName":"SHIFT AND WEEK OFF MANAGE",
                   "MenuPath":"../EmployeeShift/EmployeeShift",
                   "SortOrder":0,
                   "ModuleId":5
                }
             ]
          },
          {
             "MenuId":1094,
             "MenuName":"EMPLOYEE ROSTER",
             "MenuPath":"attendence/employeeRoster",
             "children":[
                {
                   "MenuPermissionId":"79472",
                   "UserId":"916",
                   "key":1095,
                   "MenuName":"ROSTER SETUP",
                   "MenuPath":"../EmployeeRoster/RosterSetup",
                   "SortOrder":1,
                   "ModuleId":5
                },
                {
                   "MenuPermissionId":"79478",
                   "UserId":"916",
                   "key":1096,
                   "MenuName":"EMPLOYEE ROSTER UPDATE",
                   "MenuPath":"../EmployeeRoster/RosterUpdate",
                   "SortOrder":2,
                   "ModuleId":5
                }
             ]
          }
       ]
    },
    {
       "ModuleID":10,
       "MenuName":"Application",
       "IconName":"glyphicon glyphicon-envelope",
       "IconColor":"#196F3D",
       "SortOrder":4,
       "MenuPath":"application",
       "children":[
          {
             "MenuId":56,
             "MenuName":"LEAVE",
             "MenuPath":"application/leave",
             "children":[
                {
                   "MenuPermissionId":"11825",
                   "UserId":"916",
                   "key":57,
                   "MenuName":"LEAVE APPLICATION",
                   "MenuPath":"../Leave/LeaveApplication",
                   "SortOrder":1,
                   "ModuleId":10
                },
                {
                   "MenuPermissionId":"79470",
                   "UserId":"916",
                   "key":58,
                   "MenuName":"LEAVE APPROVE",
                   "MenuPath":"../Leave/LeaveApprove",
                   "SortOrder":2,
                   "ModuleId":10
                },
                {
                   "MenuPermissionId":"79459",
                   "UserId":"916",
                   "key":2102,
                   "MenuName":"LEAVE ACKNOWLEDGEMENT",
                   "MenuPath":"../Leave/LeaveAcknowledgement",
                   "SortOrder":3,
                   "ModuleId":10
                },
                {
                   "MenuPermissionId":"79457",
                   "UserId":"916",
                   "key":2116,
                   "MenuName":"LEAVE STATUS CHECK",
                   "MenuPath":"../Leave/LeaveStatus",
                   "SortOrder":4,
                   "ModuleId":10
                },
                {
                   "MenuPermissionId":"79468",
                   "UserId":"916",
                   "key":1086,
                   "MenuName":"MANUAL LEAVE APPLICATION",
                   "MenuPath":"../Leave/ManualLeaveApplication",
                   "SortOrder":5,
                   "ModuleId":10
                },
                {
                   "MenuPermissionId":"79466",
                   "UserId":"916",
                   "key":2137,
                   "MenuName":"LEAVE APPLICATION BULK UPLOAD",
                   "MenuPath":"../Leave/UploadLeaveApplication",
                   "SortOrder":6,
                   "ModuleId":10
                },
                {
                   "MenuPermissionId":"79467",
                   "UserId":"916",
                   "key":2139,
                   "MenuName":"LEAVE ALLOCATION",
                   "MenuPath":"../LeaveAllocationProcess/LeaveAllocationProcess",
                   "SortOrder":7,
                   "ModuleId":10
                }
             ]
          },
          {
             "MenuId":59,
             "MenuName":"SITE DUTY",
             "MenuPath":"application/siteDuty",
             "children":[
                {
                   "MenuPermissionId":"11830",
                   "UserId":"916",
                   "key":60,
                   "MenuName":"SITE DUTY APPLICATION",
                   "MenuPath":"../SiteDuty/SiteDutyApplication",
                   "SortOrder":1,
                   "ModuleId":10
                },
                {
                   "MenuPermissionId":"79469",
                   "UserId":"916",
                   "key":62,
                   "MenuName":"SITE DUTY APPROVE",
                   "MenuPath":"../SiteDuty/SiteDutyApprove",
                   "SortOrder":2,
                   "ModuleId":10
                },
                {
                   "MenuPermissionId":"79463",
                   "UserId":"916",
                   "key":2117,
                   "MenuName":"SITE DUTY ACKNOWLEDGEMENT",
                   "MenuPath":"../SiteDuty/SiteDutyAcknowledgement",
                   "SortOrder":3,
                   "ModuleId":10
                },
                {
                   "MenuPermissionId":"79465",
                   "UserId":"916",
                   "key":1088,
                   "MenuName":"MANUAL SITE DUTY APPLICATION",
                   "MenuPath":"../SiteDuty/ManualSiteDutyApplication",
                   "SortOrder":4,
                   "ModuleId":10
                },
                {
                   "MenuPermissionId":"79462",
                   "UserId":"916",
                   "key":2124,
                   "MenuName":"SITY DUTY BULK UPLOAD",
                   "MenuPath":"../SiteDuty/UploadSiteDutyApplication",
                   "SortOrder":5,
                   "ModuleId":10
                }
             ]
          },
          {
             "MenuId":74,
             "MenuName":"OFFICIAL IN OUT",
             "MenuPath":"application/officialInOut",
             "children":[
                {
                   "MenuPermissionId":"11832",
                   "UserId":"916",
                   "key":75,
                   "MenuName":"OFFICIAL IN OUT APPLICATION",
                   "MenuPath":"../OfficialInOut/OfficialInOutApplication",
                   "SortOrder":1,
                   "ModuleId":10
                },
                {
                   "MenuPermissionId":"79461",
                   "UserId":"916",
                   "key":76,
                   "MenuName":"OFFICIAL IN OUT APPROVAL",
                   "MenuPath":"../OfficialInOut/OfficialInOutApprove",
                   "SortOrder":2,
                   "ModuleId":10
                },
                {
                   "MenuPermissionId":"79458",
                   "UserId":"916",
                   "key":2123,
                   "MenuName":"OFFICIAL IN OUT ACKNOWLEDGEMENT",
                   "MenuPath":"../OfficialInOut/OfficialInOutAcknowledgement",
                   "SortOrder":3,
                   "ModuleId":10
                },
                {
                   "MenuPermissionId":"79460",
                   "UserId":"916",
                   "key":1090,
                   "MenuName":"MANUAL OFFICIAL IN OUT APPLICATION",
                   "MenuPath":"../OfficialInOut/ManualOfficialInOutApplication",
                   "SortOrder":4,
                   "ModuleId":10
                }
             ]
          }
       ]
    },
    {
       "ModuleID":14,
       "MenuName":"Transfer",
       "IconName":"fas fa-exchange-alt",
       "IconColor":"#086A87",
       "SortOrder":7,
       "MenuPath":"transefer",
       "children":[
          {
             "MenuId":69,
             "MenuName":"TRANSFER",
             "MenuPath":"transefer/transfer",
             "children":[
                {
                   "MenuPermissionId":"79560",
                   "UserId":"916",
                   "key":70,
                   "MenuName":"EMPLOYEE TRANSFER",
                   "MenuPath":"../EmployeeTransfer/EmployeeTransfer",
                   "SortOrder":0,
                   "ModuleId":14
                }
             ]
          }
       ]
    },
    {
       "ModuleID":11,
       "MenuName":"Separation",
       "IconName":"glyphicon glyphicon-scissors",
       "IconColor":"#0040FF",
       "MenuPath":"separation",
       "SortOrder":8,
       "children":[
          {
             "MenuId":64,
             "MenuName":"SEPERATION",
             "MenuPath":"separation/separation",
             "children":[
                {
                   "MenuPermissionId":"79551",
                   "UserId":"916",
                   "key":17,
                   "MenuName":"EMPLOYEE SEPARATION",
                   "MenuPath":"../EmployeeSeparetion/EmployeeSeperation",
                   "SortOrder":1,
                   "ModuleId":11
                }
             ]
          },
          {
             "MenuId":68,
             "MenuName":"CLEARANCE",
             "MenuPath":"separation/clearance",
             "children":[
                {
                   "MenuPermissionId":"79548",
                   "UserId":"916",
                   "key":63,
                   "MenuName":"EMPLOYEE CLEARANCE",
                   "MenuPath":"../EmployeeClearance/EmployeeClearance",
                   "SortOrder":2,
                   "ModuleId":11
                },
                {
                   "MenuPermissionId":"79556",
                   "UserId":"916",
                   "key":4191,
                   "MenuName":"FINAL SETTLEMENT",
                   "MenuPath":"../EmployeeClearance/FinalSettlement",
                   "SortOrder":3,
                   "ModuleId":11
                }
             ]
          }
       ]
    }
]

export const list2=[
    {
       "ModuleID":13,
       "MenuName":"Payroll",
       "IconName":"glyphicon glyphicon-usd",
       "IconColor":"#8A4B08",
       "SortOrder":8,
       "MenuPath":"payroll",
       "children":[
          {
             "MenuId":78,
             "MenuName":"COST HEAD",
             "MenuPath":"payroll/costHead",
             "children":[
                {
                   "MenuPermissionId":"79513",
                   "UserId":"916",
                   "key":79,
                   "MenuName":"COST HEAD SETUP",
                   "MenuPath":"../CostHead/CostHeadInfo",
                   "SortOrder":1,
                   "ModuleId":13
                }
             ]
          },
          {
             "MenuId":2121,
             "MenuName":"LOAN",
             "MenuPath":"payroll/loan",
             "children":[
                {
                   "MenuPermissionId":"79532",
                   "UserId":"916",
                   "key":2120,
                   "MenuName":"LOAN TYPE",
                   "MenuPath":"../LoanType/LoanTypeInto",
                   "SortOrder":0,
                   "ModuleId":13
                },
                {
                   "MenuPermissionId":"79530",
                   "UserId":"916",
                   "key":2141,
                   "MenuName":"EMPLOYEE LOAN ",
                   "MenuPath":"../EmployeeLoan/EmployeeLoanSettings",
                   "SortOrder":15,
                   "ModuleId":13
                }
             ]
          },
          {
             "MenuId":4214,
             "MenuName":"EMPLOYEE PF",
             "MenuPath":"payroll/employeePf",
             "children":[
                {
                   "MenuPermissionId":"79514",
                   "UserId":"916",
                   "key":2140,
                   "MenuName":"EMPLOYEE PF SETUP",
                   "MenuPath":"../EmployeePF/EmployeePFSettings",
                   "SortOrder":13,
                   "ModuleId":13
                },
                {
                   "MenuPermissionId":"79535",
                   "UserId":"916",
                   "key":4209,
                   "MenuName":"PF MEMBER INFO",
                   "MenuPath":"../EmployeePFMemberInfo/PFMemberInfo",
                   "SortOrder":14,
                   "ModuleId":13
                }
             ]
          },
          {
             "MenuId":34,
             "MenuName":"PAYROLL",
             "MenuPath":"payroll/payroll",
             "children":[
                {
                   "MenuPermissionId":"79512",
                   "UserId":"916",
                   "key":77,
                   "MenuName":"SALARY SETUP",
                   "MenuPath":"../EmployeeSalary/SalarySettings",
                   "SortOrder":1,
                   "ModuleId":13
                },
                {
                   "MenuPermissionId":"79528",
                   "UserId":"916",
                   "key":80,
                   "MenuName":"GRADE WISE ALLOWANCE SETUP",
                   "MenuPath":"../EmployeeAllowance/GradeWiseAllowance",
                   "SortOrder":2,
                   "ModuleId":13
                },
                {
                   "MenuPermissionId":"79516",
                   "UserId":"916",
                   "key":81,
                   "MenuName":"EMPLOYEE WISE ALLOWANCE SETUP",
                   "MenuPath":"../EmployeeAllowance/EmployeeWiseAllowanceSetup",
                   "SortOrder":3,
                   "ModuleId":13
                },
                {
                   "MenuPermissionId":"59348",
                   "UserId":"916",
                   "key":82,
                   "MenuName":"EMPLOYEE TAXATION",
                   "MenuPath":"../EmployeeTax/EmployeeTaxInfo",
                   "SortOrder":5,
                   "ModuleId":13
                },
                {
                   "MenuPermissionId":"79518",
                   "UserId":"916",
                   "key":2105,
                   "MenuName":"PAYROLL STOP",
                   "MenuPath":"../EmployeeSalary/PayrollStop",
                   "SortOrder":6,
                   "ModuleId":13
                },
                {
                   "MenuPermissionId":"79511",
                   "UserId":"916",
                   "key":2109,
                   "MenuName":"PAYROLL OPEN",
                   "MenuPath":"../EmployeeSalary/PayrollOpen",
                   "SortOrder":7,
                   "ModuleId":13
                },
                {
                   "MenuPermissionId":"79523",
                   "UserId":"916",
                   "key":2108,
                   "MenuName":"PAYROLL PROCESS",
                   "MenuPath":"../PayrollProcess/PayrollProcess",
                   "SortOrder":8,
                   "ModuleId":13
                },
                {
                   "MenuPermissionId":"79515",
                   "UserId":"916",
                   "key":2107,
                   "MenuName":"PAYROLL REPORT",
                   "MenuPath":"../Report/PayrollReport",
                   "SortOrder":9,
                   "ModuleId":13
                },
                {
                   "MenuPermissionId":"79544",
                   "UserId":"916",
                   "key":2114,
                   "MenuName":"PAYROLL ADJUSTMENT",
                   "MenuPath":"../EmployeeSalary/PayrollAdjustment",
                   "SortOrder":10,
                   "ModuleId":13
                },
                {
                   "MenuPermissionId":"79542",
                   "UserId":"916",
                   "key":2119,
                   "MenuName":"PAYROLL CONFIGURE",
                   "MenuPath":"../EmployeeSalary/PayrollConfigure",
                   "SortOrder":11,
                   "ModuleId":13
                },
                {
                   "MenuPermissionId":"79529",
                   "UserId":"916",
                   "key":4275,
                   "MenuName":"PAYROLL ADJUSTMENT BULK UPLOAD",
                   "MenuPath":"../EmployeeSalary/UploadAdjustment",
                   "SortOrder":11,
                   "ModuleId":13
                },
                {
                   "MenuPermissionId":"79541",
                   "UserId":"916",
                   "key":2127,
                   "MenuName":"PAY SLIP MAIL SEND",
                   "MenuPath":"../EmployeeSalary/PaySlipEmailSend",
                   "SortOrder":12,
                   "ModuleId":13
                }
             ]
          }
       ]
    },
    {
       "ModuleID":15,
       "MenuName":"Promotion",
       "IconName":"fas fa-award",
       "IconColor":"#5708C9",
       "MenuPath":"promotion",
       "SortOrder":8,
       "children":[
          {
             "MenuId":71,
             "MenuName":"PROMOTION",
             "MenuPath":"promotion/promotion",
             "children":[
                {
                   "MenuPermissionId":"79540",
                   "UserId":"916",
                   "key":72,
                   "MenuName":"EMPLOYEE PROMOTION",
                   "MenuPath":"../EmployeePromotion/EmployeePromotion",
                   "SortOrder":0,
                   "ModuleId":15
                }
             ]
          }
       ]
    },
    {
       "ModuleID":20,
       "MenuName":"Increment",
       "IconName":"fa fa-arrow-circle-up",
       "IconColor":"#5708C9",
       "SortOrder":10,
       "MenuPath":"promotion/increment",
       "children":[
          {
             "MenuId":1102,
             "MenuName":"INCREMENT",
             "MenuPath":"",
             "children":[
                {
                   "MenuPermissionId":"79524",
                   "UserId":"916",
                   "key":1103,
                   "MenuName":"EMPLOYEE INCREMENT",
                   "MenuPath":"../EmployeeIncrement/EmployeeIncrement",
                   "SortOrder":1,
                   "ModuleId":20
                },
                {
                   "MenuPermissionId":"79500",
                   "UserId":"916",
                   "key":2135,
                   "MenuName":"UPLOAD INCREMENT",
                   "MenuPath":"../EmployeeIncrement/UploadIncrement",
                   "SortOrder":2,
                   "ModuleId":20
                },
                {
                   "MenuPermissionId":"79521",
                   "UserId":"916",
                   "key":4222,
                   "MenuName":"EMPLOYEE INCREMENT PROPOSAL",
                   "MenuPath":"../EmployeeIncrement/IncrementProposal",
                   "SortOrder":3,
                   "ModuleId":20
                }
             ]
          }
       ]
    },
    {
       "ModuleID":1021,
       "MenuName":"IOUMS",
       "IconName":"glyphicon glyphicon-tags",
       "IconColor":"#196F3D",
       "MenuPath":"ioums",
       "SortOrder":12,
       "children":[
          {
             "MenuId":2142,
             "MenuName":"IOU REQUEST",
             "MenuPath":"",
             "MenuPath":"ioums/request",
             "children":[
                {
                   "MenuPermissionId":"79525",
                   "UserId":"916",
                   "key":2143,
                   "MenuName":"IOU REQUEST FORM",
                   "MenuPath":"../IouRequest/IouRequestSettings",
                   "SortOrder":1,
                   "ModuleId":1021
                },
                {
                   "MenuPermissionId":"79526",
                   "UserId":"916",
                   "key":2144,
                   "MenuName":"IOU REQUEST APPROVAL",
                   "MenuPath":"../IouRequest/IouRequestApproval",
                   "SortOrder":2,
                   "ModuleId":1021
                },
                {
                   "MenuPermissionId":"79520",
                   "UserId":"916",
                   "key":2145,
                   "MenuName":"IOU APPROVER SETUP",
                   "MenuPath":"../IOURequest/IouApproverSetup",
                   "SortOrder":3,
                   "ModuleId":1021
                }
             ]
          }
       ]
    },
    {
       "ModuleID":1033,
       "MenuName":"PMS",
       "IconName":"glyphicon glyphicon-dashboard",
       "IconColor":"#0080FF",
       "SortOrder":13,
       "MenuPath":"pms",
       "children":[
          {
             "MenuId":5291,
             "MenuName":"PMS 360 SETTING",
             "MenuPath":"",
             "MenuPath":"pms/360",
             "children":[
                {
                   "MenuPermissionId":"79437",
                   "UserId":"916",
                   "key":5292,
                   "MenuName":"PMS 360 ORGANOGRAM SETUP",
                   "MenuPath":"../ReviewerOrganogram/ReviewerOrganogramSetup",
                   "SortOrder":1,
                   "ModuleId":1033
                },
                {
                   "MenuPermissionId":"110502",
                   "UserId":"916",
                   "key":7296,
                   "MenuName":"EMPLOYEE REVIEWER APPROVAL",
                   "MenuPath":"../ReviewerOrganogram/ReviewEmployeeApproval",
                   "SortOrder":2,
                   "ModuleId":1033
                },
                {
                   "MenuPermissionId":"79435",
                   "UserId":"916",
                   "key":6292,
                   "MenuName":"REVIEW EMPLOYEE LIST",
                   "MenuPath":"../ReviewerOrganogram/ReviewEmployeeInfo",
                   "SortOrder":3,
                   "ModuleId":1033
                },
                {
                   "MenuPermissionId":"79637",
                   "UserId":"916",
                   "key":7293,
                   "MenuName":"MONITOR EMPLOYEE INFO",
                   "MenuPath":"../ReviewerOrganogram/MonitorEmployeeReviewInfo",
                   "SortOrder":4,
                   "ModuleId":1033
                },
                {
                   "MenuPermissionId":"79638",
                   "UserId":"916",
                   "key":7292,
                   "MenuName":"FEEDBACK",
                   "MenuPath":"../ReviewerOrganogram/ReviewFeedBackInfo",
                   "SortOrder":5,
                   "ModuleId":1033
                }
             ]
          },
          {
             "MenuId":7300,
             "MenuName":"PERFORMANCE APPRAISAL",
             "MenuPath":"",
             "MenuPath":"pms/performance",
             "children":[
                {
                   "MenuPermissionId":"110501",
                   "UserId":"916",
                   "key":7301,
                   "MenuName":"PERFORMANCE APPRAISAL INSERT",
                   "MenuPath":"../PerformanceApparaisal/PerformanceApparaisalInsert",
                   "SortOrder":1,
                   "ModuleId":1033
                }
             ]
          }
       ]
    },
    {
       "ModuleID":2033,
       "MenuName":"Conference",
       "IconName":"fa fa-calendar",
       "IconColor":"#0080FF",
       "SortOrder":14,
       "MenuPath":"conference",
       "children":[
          {
             "MenuId":7305,
             "MenuName":"CONFERENCE",
             "MenuPath":"conference/conference",
             "children":[
                {
                   "MenuPermissionId":"111381",
                   "UserId":"916",
                   "key":7310,
                   "MenuName":"BOOKING LIST",
                   "MenuPath":"../BookingList/Index",
                   "SortOrder":0,
                   "ModuleId":2033
                },
                {
                   "MenuPermissionId":"111382",
                   "UserId":"916",
                   "key":7308,
                   "MenuName":"BOOKING ROOMS",
                   "MenuPath":"../RoomBooking/Index",
                   "SortOrder":1,
                   "ModuleId":2033
                },
                {
                   "MenuPermissionId":"111380",
                   "UserId":"916",
                   "key":7306,
                   "MenuName":"CREATE ROOM",
                   "MenuPath":"../CreateRoom/Index",
                   "SortOrder":2,
                   "ModuleId":2033
                },
                {
                   "MenuPermissionId":"121537",
                   "UserId":"916",
                   "key":7311,
                   "MenuName":"EVENT ACKNOWELEDGEMENT",
                   "MenuPath":"../EventAcknoweledgement/Index",
                   "SortOrder":3,
                   "ModuleId":2033
                }
             ]
          }
       ]
    },
    {
       "ModuleID":12,
       "MenuName":"Report",
       "IconName":"glyphicon glyphicon-book",
       "IconColor":"#5B2C6F",
       "SortOrder":100,
       "MenuPath":"report",
       "children":[
          {
             "MenuId":65,
             "MenuName":"REPORTS",
             "MenuPath":"report/report",
             "children":[
                {
                   "MenuPermissionId":"79552",
                   "UserId":"916",
                   "key":2128,
                   "MenuName":"ANNUAL LEAVE STATUS",
                   "MenuPath":"../Leave/LeaveReport",
                   "SortOrder":1,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79553",
                   "UserId":"916",
                   "key":2131,
                   "MenuName":"DEPT WISE FACTORY MANPOWER REPORT",
                   "MenuPath":"../Report2/DeptWiseManpowerReport",
                   "SortOrder":4,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79536",
                   "UserId":"916",
                   "key":2104,
                   "MenuName":"DEGREE WISE EMPLOYEE INFO",
                   "MenuPath":"../Report/DegreeWiseEmpReport",
                   "SortOrder":4,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79549",
                   "UserId":"916",
                   "key":2125,
                   "MenuName":"EMPLOYEE LETTER PRINT",
                   "MenuPath":"../Report/LetterReport",
                   "SortOrder":5,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79559",
                   "UserId":"916",
                   "key":66,
                   "MenuName":"EMPLOYEE PROFILE REPORT",
                   "MenuPath":"../Report/EmployeeProfileReport",
                   "SortOrder":5,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79534",
                   "UserId":"916",
                   "key":1097,
                   "MenuName":"EMPLOYEE INFORMATION REPORT",
                   "MenuPath":"../Report/EmployeeListReport",
                   "SortOrder":5,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79539",
                   "UserId":"916",
                   "key":1101,
                   "MenuName":"EMPLOYEE ATTENDANCE REPORTS",
                   "MenuPath":"../Report/AttendanceReportModule",
                   "SortOrder":5,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79543",
                   "UserId":"916",
                   "key":2101,
                   "MenuName":"EMPLOYEE STATUS REPORT",
                   "MenuPath":"../Report/EmployeeStatusReport",
                   "SortOrder":5,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79550",
                   "UserId":"916",
                   "key":4260,
                   "MenuName":"EMPLOYEE REPORT",
                   "MenuPath":"../Report/EmployeeReport",
                   "SortOrder":5,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79546",
                   "UserId":"916",
                   "key":2138,
                   "MenuName":"EMPLOYEE INCREMENT HISTORY",
                   "MenuPath":"../Report/EmployeeIncrementHistory",
                   "SortOrder":5,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"59113",
                   "UserId":"916",
                   "key":2146,
                   "MenuName":"EMPLOYEE PROFILE REPORT (FACTORY)",
                   "MenuPath":"../Report/FacotryEmployeeProfileReport",
                   "SortOrder":5,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79547",
                   "UserId":"916",
                   "key":2130,
                   "MenuName":"EMPLOYEE PAYROLL INFO",
                   "MenuPath":"../Report/EmployeePayrollHistory",
                   "SortOrder":5,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79545",
                   "UserId":"916",
                   "key":2136,
                   "MenuName":"FACTORY REPORT (WASH)",
                   "MenuPath":"../Report2/EmployeeAttendanceReportWash",
                   "SortOrder":6,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"11827",
                   "UserId":"916",
                   "key":2129,
                   "MenuName":"FACTORY REPORT",
                   "MenuPath":"../Report2/EmployeeAttendanceReport",
                   "SortOrder":6,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79557",
                   "UserId":"916",
                   "key":2115,
                   "MenuName":"LEAVE STATUS REPORT",
                   "MenuPath":"../Leave/LeaveStatusReport",
                   "SortOrder":12,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79558",
                   "UserId":"916",
                   "key":4213,
                   "MenuName":"LEAVE DEDUCTION INFORMATION",
                   "MenuPath":"../LeaveDeductionInfo/LeaveDeductionInfo",
                   "SortOrder":12,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"79538",
                   "UserId":"916",
                   "key":1098,
                   "MenuName":"MONTHLY ATTENDACE REPORT",
                   "MenuPath":"../Report/MonthlyAttReport",
                   "SortOrder":13,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"100113",
                   "UserId":"916",
                   "key":7294,
                   "MenuName":"EMPLOYEE EFFICIENCY",
                   "MenuPath":"../EmployeeEfficiency/EmployeeEffSettings",
                   "SortOrder":14,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"100114",
                   "UserId":"916",
                   "key":7295,
                   "MenuName":"EMPLOYEE EFFICIENCY (APPAREL)",
                   "MenuPath":"../EmployeeEfficiency/EmployeeEffSettings2",
                   "SortOrder":15,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"192638",
                   "UserId":"916",
                   "key":7312,
                   "MenuName":"JOB CARD CHECK (THREE MODE)",
                   "MenuPath":"../JobCardCheck/JobCardCheck",
                   "SortOrder":16,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"203689",
                   "UserId":"916",
                   "key":7314,
                   "MenuName":"SALARY REPORTS (THREE MODE)",
                   "MenuPath":"../Report/SalaryReports",
                   "SortOrder":17,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"225943",
                   "UserId":"916",
                   "key":7334,
                   "MenuName":"SECTIONWISE MANPOWER",
                   "MenuPath":"../Report2/SectionWiseManPowerReports",
                   "SortOrder":18,
                   "ModuleId":12
                },
                {
                   "MenuPermissionId":"193317",
                   "UserId":"916",
                   "key":7313,
                   "MenuName":"ORGANOGRAM PERMISSION REPORTS",
                   "MenuPath":"../UserPermissionReport/UserPermissionReport",
                   "SortOrder":18,
                   "ModuleId":12
                }
             ]
          }
       ]
    }
]

export const tenderLists=[
   {
     "ModuleId":1,
     "MenuName":"Tender",
     "IconName":"fas fa-file-image",
     "children":[
       {
         "MenuId":1,
         "MenuName":"Create Tender",
         "Key":1,
         "MenuPath":"tender/tender/newTender"
       },
       {
         "MenuId":2,
         "MenuName":"Tender Lists",
         "Key":2,
         "MenuPath":"tender/tender/tenderLists"
       }
     ]
   },
   {
     "ModuleId":2,
     "MenuName":"Published",
     "IconName":"fas fa-upload",
     "children":[
       {
         "MenuId":1,
         "MenuName":"New Publish",
         "Key":1,
         "MenuPath":"tender/publish/newTender"
       },
       {
         "MenuId":2,
         "MenuName":"Publish Lists",
         "Key":2,
         "MenuPath":"tender/publish/tenderLists"
       }
     ]
   },
   {
     "ModuleId":3,
     "MenuName":"Bidding",
     "IconName":"fas fa-money-bill-alt",
     "children":[
         {
            "MenuId":1,
            "MenuName":"Bidding Lists",
            "Key":1,
            "MenuPath":"tender/bidding/lists"
         },
         {
            "MenuId":2,
            "MenuName":"Bidding Details Lists",
            "Key":2,
            "MenuPath":"tender/bidding/detailsLists"
         }
     ]
   }
]
export const PFM=[
   {
     "ModuleId":1,
     "MenuName":"Production Folder ",
     "IconName":"fas fa-file-image",
     "children":[
       {
         "MenuId":1,
         "MenuName":"Rack Setup",
         "Key":1,
         "MenuPath":"production/production-folder/rack-setup"
       },
       {
         "MenuId":2,
         "MenuName":"Show All Folders In Rack",
         "Key":2,
         "MenuPath":""
       },
       {
         "MenuId":3,
         "MenuName":"Add Folder In Rack",
         "Key":2,
         "MenuPath":""
       },
       {
         "MenuId":4,
         "MenuName":"Change/Remove From Rack",
         "Key":2,
         "MenuPath":""
       },
       {
         "MenuId":4,
         "MenuName":"Folder Copy Requests",
         "Key":2,
         "MenuPath":"s"
       }

     ]
   },
   {
     "ModuleId":2,
     "MenuName":"All Folders",
     "IconName":"fas fa-upload",
     "children":[
       {
         "MenuId":1,
         "MenuName":"Show All Folders",
         "Key":1,
         "MenuPath":"r"
       },
       {
         "MenuId":2,
         "MenuName":"Request To Copy Folder",
         "Key":2,
         "MenuPath":""
       }
     ]
   }   
]