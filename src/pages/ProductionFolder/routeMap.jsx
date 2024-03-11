import loadable from "@loadable/component";

const ProductionDashboard=loadable(()=>import('./dashboard'));
const RackSetupPage=loadable(()=>import('./ProductionFolder/FolderSetup'));




export default[
    {
        path:"/production/dashboard",
        component:<ProductionDashboard/>
    },
    {
        path:"/production/production-folder/rack-setup",
        component:<RackSetupPage/>
    }
]
