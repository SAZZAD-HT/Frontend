import { 
    Outlet,
    Navigate,
    useLocation 
  } from 'react-router-dom';
  import { useSelector } from 'react-redux';
  import { 
    Row,
    Col,
    Card,
    Button
  } from 'antd';
  import ModuleContainer from '../../components/ui/ModuleContainer';

  
  
  const ProductionIndex = () => {
    const loaction=useLocation();
    const {pathname}=loaction;
    const {
      classLists
    }=useSelector((state)=>state.ui)
    return (
      <div>
        {pathname==="/production"?<Navigate replace to="/production/dashboard" />:""}
        <ModuleContainer>
          <Outlet/>
        </ModuleContainer>
      </div>
    );
  }
  
  export default ProductionIndex;