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
    Button,
    Checkbox 
} from 'antd';
import { 
    configDataListForSelect 
} from '../../../../../utils/commonMethod';
import NormalCard from "../../../../ui/Card/NormalCard";
import CommonFormItem from '../../../../ui/FormItem/Common';
import CheckBoxForItem from '../../../../ui/FormItem/Checkbox';
import ConfigureAxios from '../../../../../utils/axios';
import { PlusOutlined } from '@ant-design/icons';

import axios from 'axios';
import { cond } from 'lodash';

const AddUpdateRack=({form,onFormSubmit})=>{
    const [folderType, setFolderType] = useState([]);
    const [MachineNames, setMachineNames] = useState([]);
    const[UnitNames,setUnitNames]=useState([]); 
    const [RackIds, setRackId] = useState([]);
    const [ShelfIds, setShelf] = useState([]);


    useEffect(()=>{ 
        ConfigureAxios();
        initialDataLoad();
    },[])

    const initialDataLoad=async()=>{
        getMachineLists();
        getFolderLists();
        setUnitNamesList();
    }

    const getMachineLists=async()=>{
        await axios.get('/ProductionFolder/GetAllMasterMachine').then((res)=>{
            if(res.status==200){
                const {data}=res;

                if(data.length){
                    const lists=configDataListForSelect(data,'machineName','machineId');
                    if(lists.length){
                        setMachineNames(lists);
                    }else{
                        setMachineNames([]);
                    }
                }else{
                    setMachineNames([]);
                }
            }
        }).catch(()=>{

        })
    }
    const onUnitchange=async(value)=>{  
        console.log("Unit Id : ",value)
        const unitId=value.value;   
        GetRackList(unitId);
    }
    const GetRackList=async(unitId)=>{
        await axios.get(`/ProductionFolder/GetRackId?UnitId=${unitId}`).then((res)=>{
            if(res.status==200){
                const {data}=res;

                if(data.length){
                    const lists=configDataListForSelect(data,'folderRackMasterId','folderRackMasterId');
                    if(lists.length){
                        setRackId(lists);
                    }else{
                        setRackId([]);
                    }
                }else{
                    setRackId([]);
                }
            }
        }).catch(()=>{

        })
    }
    const onRackhange=async(unitId,rackId)=>{  
        console.log("Unit Id:", unitId);
        console.log("Rack Id:", rackId);
    
        
        GetShelfList(unitId, rackId.value);
        console.log(ShelfIds);
    }
    const GetShelfList=async(unitId,RackId)=>{
        await axios.get(`/ProductionFolder/GetShelfId?UnitId=${unitId}&RackId=${RackId}`).then((res)=>{
            if(res.status==200){
                const {data}=res;

                if(data.length){
                    const lists=configDataListForSelect(data,'frRowId','frRowId');
                    if(lists.length){
                        setShelf(lists);
                    }else{
                        setShelf([]);
                    }
                }else{
                    setShelf([]);
                }
            }
        }).catch(()=>{

        })
    }
    const setUnitNamesList=async()=>{
        await axios.get('/CoreErpCommon/AllUnits').then((res)=>{
            if(res.status==200){
                const {data}=res;

                if(data.length){
                    const lists=configDataListForSelect(data,'unitName','unitId');
                    if(lists.length){
                        setUnitNames(lists);
                    }else{
                        setUnitNames([]);
                    }
                }else{
                    setUnitNames([]);
                }
            }
        }).catch(()=>{
        })
    }
    const getFolderLists=async()=>{
        await axios.get('/ProductionFolder/GetAllFoldersType').then((res)=>{
            if(res.status==200){
                const {data}=res;
                console.log(data)

                if(data.length){
                    const lists=configDataListForSelect(data,'folderTypeName','folderTypeId');
                    if(lists.length){
                        setFolderType(lists);
                    }else{
                        setFolderType([]);
                    }
                }else{
                    setFolderType([]);
                }
            }
        }).catch(()=>{

        })
    }

    return(
        <>
            <NormalCard>
                <Form
                size='small'
                form={form}
                onFinish={onFormSubmit}
                >
                    <Row>
                        <Col 
                        span={6}
                        >
                            <CommonFormItem
                            propsLists={{
                                tooltip:{
                                    title:"Folder Name"
                                },
                                rules:{
                                    required:true,
                                    message:"Rack Name Is Required."
                                },
                                name:"FolderName",
                                labelAlign:"right",
                                label:"Folder Name"
                            }}
                            >
                                <Input/>
                            </CommonFormItem> 
                        </Col>
                        <Col 
                        span={6}
                        >
                            <CommonFormItem
                            propsLists={{
                                tooltip:{
                                    title:"Unit"
                                },
                                rules:{
                                    required:true,
                                    message:"Unit Is Required."
                                },
                                name:"Unit",
                                labelAlign:"right",
                                label:"Unit"
                            }}
                            >
                                <Select 
                                labelInValue={true}
                                optionFilterProp='label'
                                showSearch
                                allowClear
                                //value={UnitNames}
                                options={UnitNames}
                                onChange={onUnitchange}
                                />
                            </CommonFormItem> 
                        </Col>
                        <Col 
                        span={6}
                        >
                           <CommonFormItem
                            propsLists={{
                                tooltip:{
                                    title:"Folder Type"
                                },
                                rules:{
                                    required:true,
                                    message:"Folder Type Is Required."
                                },
                                name:"FolderType",
                                labelAlign:"right",
                                label:"Folder Type"
                                
                            }}
                            >
                                <Select 
                                    labelInValue={true}
                                    optionFilterProp='label'
                                    showSearch
                                    allowClear
                                   // value={folderType}                                
                                    //onChange={handleFolderTypeChange}
                                    options={folderType}
                                >
                                   
                                  
                                </Select>
                            </CommonFormItem> 
                        </Col>
                        <Col 
                        span={6}
                        >
                            <CommonFormItem
                            propsLists={{
                                tooltip:{
                                    title:"Machine Name"
                                },
                                rules:{
                                    required:true,
                                    message:"Machine Name Is Required."
                                },
                                name:"MachineName",
                                labelAlign:"right",
                                label:"Machine Name"
                            }}
                            >
                                <Select 
                                labelInValue={true}
                                optionFilterProp='label'
                                showSearch
                                allowClear
                                //value={MachineNames}                                
                                //onChange={handleMachineNamesChange}
                                options={MachineNames}
                                />
                            </CommonFormItem> 
                        </Col>
                    </Row>
                    <Row>
                        <Col 
                        span={6}
                        >
                            <CommonFormItem
                            propsLists={{
                                tooltip:{
                                    title:"Folder Code"
                                },
                                rules:{
                                    required:true,
                                    message:"Folder Code Is Required."
                                },
                                name:"FolderCode",
                                labelAlign:"right",
                                label:"Folder Code"
                            }}
                            >
                                <Input/>
                            </CommonFormItem> 
                        </Col>
                        <Col 
                        span={6}
                        >
                            <CommonFormItem
                            propsLists={{
                                tooltip:{
                                    title:"Rack Id"
                                },
                                rules:{
                                    required:false,
                                    message:"Folder Type Is Required."
                                },
                                name:"RackId",
                                labelAlign:"right",
                                label:"Rack Id"
                            }}
                            >
                                <Select 
                                labelInValue={true}
                                optionFilterProp='label'
                                showSearch
                                allowClear
                                options={RackIds}
                                onChange={(value) => onRackhange(form.getFieldValue("Unit").value, value)}
                                //options={listsForPublish}
                                />
                            </CommonFormItem> 
                        </Col>
                        <Col 
                        span={6}
                        >
                            <CommonFormItem
                            propsLists={{
                                tooltip:{
                                    title:"Rack Name"
                                },
                                rules:{
                                    required:false,
                                    message:"Shelf Id Is Required."
                                },
                                name:"Shelf",
                                labelAlign:"right",
                                label:"Shelf Id"
                            }}
                            >
                                <Select 
                                labelInValue={true}
                                optionFilterProp='label'
                                showSearch
                                allowClear
                                options={ShelfIds}

                                //options={listsForPublish}
                                />
                            </CommonFormItem> 
                        </Col>
                        <Col 
                        span={6}
                        >
                            <CheckBoxForItem
                            propsLists={{
                                tooltip:{
                                    title:"Reusable"
                                },
                                rules:{
                                    required:false
                                },
                                label:"Is Reusable",
                                name:"ReUsable",
                                valuePropName:"checked"
                            }}
                            >
                                <Checkbox />
                            </CheckBoxForItem>
                        </Col>
                        
                    </Row>
                    <Row>
                    <Col 
                        span={6}
                        >
                           <CommonFormItem
                            propsLists={{
                                tooltip:{
                                    title:"Folder Description"
                                },
                                rules:{
                                    required:true,
                                    message:"Description  Is Required."
                                },
                                name:"Description",
                                labelAlign:"right",
                                label:"Description"
                            }}
                            >
                                <Input.TextArea/>
                                
                            </CommonFormItem> 
                   
                        </Col>
                         <Col 
                        span={3}
                        style={{
                            display:'flex',
                            justifyContent:'flex-end',
                            alignItems:'center',
                            
                        }}
                        >
                           
                            <Button
                            htmlType='submit'
                            style={{ backgroundColor: 'green', color: 'white' }}
                            icon={<PlusOutlined />}
                            >
                                Add to List
                            </Button>
                        </Col> 
                     </Row>
                </Form>
            </NormalCard>
        </>
    )
}
export default AddUpdateRack