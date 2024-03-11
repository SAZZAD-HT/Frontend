import React,{
    useState,
    useEffect
} from 'react';
import { 
    Row,
    Col,
    Badge,
    Space,
    Form,
    Input,
    Select,
    Button
} from 'antd';
import ListsTable from "../../../ui/ListsTable";
import NormalCard from "../../../ui/Card/NormalCard";
import CommonFormItem from '../../../ui/FormItem/Common';
import RackDataTable from './DataTable';
import AddUpdateRack from './AddUpdate';


const RackSetup=({props})=>{

    return(
        <>
            <Row>
                <Col 
                span={24}
                >
                   <AddUpdateRack
                   form={props.form}
                   onFormSubmit={props.onFormSubmit}
                   /> 
                </Col>
            </Row>
            <Row>
                <Col 
                span={24}
                style={{
                    marginTop:'8px'
                }}
                >
                    <RackDataTable/>
                </Col>
            </Row>
        </>
    )
}
export default RackSetup;