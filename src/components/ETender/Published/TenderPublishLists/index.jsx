import React,{
    useState
} from 'react';
import {
    Row,
    Col,
    Space,
    Badge,
    Modal,
    Input,
    Form,
    InputNumber,
    Button,
    Divider
} from 'antd';
import { 
    useSelector 
} from 'react-redux';
import { 
    useNavigate 
} from 'react-router-dom';
import { 
    useGetPublishListsQuery 
} from '../../../../Redux/features/publishTender/tenderPublishApi';
import { 
    convertActualtDateTime 
} from '../../../../utils/DateConfig';
import {
    CloseCircleOutlined
} from '@ant-design/icons';
import CommonFormItem from '../../../ui/FormItem/Common';
import ListsTable from '../../../ui/ListsTable';
import NormalCard from '../../../ui/Card/NormalCard';
import SaveButton from '../../../ui/Button/Save';
import { 
    getLocaleDateTime 
} from '../../../../utils/DateConfig';
import dayjs from 'dayjs';
import './index.less';
import ConfigureAxios from '../../../../utils/axios';
import axios from 'axios';
import { Success, Warning } from '../../../../utils/Message';

const TenderPublishListsComponent=()=>{
    const [form] = Form.useForm();
    const UserId=localStorage.getItem("UserId");
    const history=useNavigate();
    //const {}=useGetPublishListsQuery({UserId:parseInt(UserId),Take:100,Skip:0},{refetchOnMountOrArgChange:true});
    const {publishLists,publishCount}=useSelector((state)=>state.publish);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tenderInfos,setTenderInfos]=useState({});


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
        setTenderInfos({})
    };

    const onTimerSubmit=async(states)=>{
        const {Minutes}=states;
        //const UserId=localStorage.getItem("")

        if(Minutes){
            const {CloseDate}=tenderInfos;
            // let times=dayjs(getLocaleDateTime(CloseDate));
            // console.log("Times Before: ",times)
            // times=times.add(Minutes, 'minute');

            // console.log("Times After: ",times)

            const myObject={
                TenderNo:tenderInfos.TenderNo,
                TenderBidId:tenderInfos.TenderBidId,
                Minutes,
                IsFromBidding:0,
                CreatedBy:UserId
            }

            ConfigureAxios();
            axios.post(`/timer/addNew`,JSON.stringify(myObject))
            .then((response)=>{
                if(response.status===200){
                    Success("Successfully Time Updated.",{},{});
                    setIsModalOpen(false)
                    form.resetFields();
                }else{
                    Warning("Failed Time Updated.",{},{});
                    //setIsModalOpen(false)
                }
            }).catch((error)=>{
                Warning("Successfully Time Updated.",{},{});
                setIsModalOpen(false)
                console.log(error)
            })
        }
    }
    const columns=[
        {
            title:"Tender No",
            dataIndex:"TenderNoTitle",
            key:"TenderNoTitle",
            width:"25%",
            align:'left'
        },
        {
            title:"Base Bid Amount",
            dataIndex:"MinimumBidAmount",
            key:"MinimumBidAmount",
            align:'right'
        },
        {
            title:"Open Date",
            dataIndex:"OpenDate",
            key:"OpenDate",
            align:'center',
            render:(_,record)=>{
                return <Space
                size="middle"
                >
                    
                    <span>
                        <strong>{convertActualtDateTime(record.OpenDate)}</strong>
                    </span>
                </Space>
            }
        },
        {
            title:"Close Date",
            dataIndex:"CloseDate",
            key:"CloseDate",
            // width:"15%",
            align:'center',
            render:(_,record)=>{
                return <Space
                size="middle"
                >
                    
                    <span>
                        <strong>{convertActualtDateTime(record.CloseDate)}</strong>
                    </span>
                </Space>
            }
        },
        {
            title:"Status",
            dataIndex:"Status",
            key:"Status",
            // width:"9%",
            align:'center',
            render:(_,record)=>{
                return <Space
                size="middle"
                >
                    <Badge 
                    count={record.Status?record.Status:""}
                    style={{
                        backgroundColor:record.Status=="On Going"?'#52c41a':record.Status=="Not Published"?'#faad14':'#fa541c',
                        //padding:"10px",
                        //fontSize:'22px'
                        fontFamily: "'Titillium Web',sans-serif"
                    }}
                    size="large" 
                    />
                </Space>
            }
        },
        {
            title:"Action",
            dataIndex:"Action",
            key:"Action",
            // width:"9%",
            align:'center',
            render:(_,record)=>{
                return <Space
                size="middle"
                >
                    <a 
                    className='table-action-link'
                    onClick={()=>{
                        history(`/tender/publish/newTender`,{state:{IsUpdate:true,TenderNo:record.TenderNo}})
                    }}
                    >
                        Edit
                    </a>
                    <a 
                    className='table-action-link'
                    onClick={()=>{
                        console.log('recors: ',record)
                        if(record?.TenderBidId){
                            setTenderInfos(record);
                            form.setFieldsValue({
                                "TenderName":record.TenderNoTitle
                            })
                            showModal()
                        }
                        
                    }}
                    >
                        Timer
                    </a>
                    {/* <a className='table-action-link'>
                        Details
                    </a> */}
                </Space>
            }
        }
    ]
    return(
        <>
            <Row>
                <Col 
                span={24}
                >
                    <NormalCard>
                        <ListsTable
                        tableProps={{
                            data:publishLists?.length?publishLists:[],
                            height:500,
                            columns
                        }}
                        />
                    </NormalCard>
                </Col>
            </Row>
            <Modal 
            closable={false}
            title={<>
                <Row
                style={{
                    padding:'0px 0px 0px 0px',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}
                >
                    <Col span={18}>
                        <span
                        className='modal-header-title'
                        >
                            <b>Add New Timer - {tenderInfos?.TenderNo}</b>
                        </span>
                    </Col>
                    <Col 
                    span={6}
                    style={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'flex-end'
                    }}
                    >
                        <CloseCircleOutlined
                        className='close-timer-modal-icon'
                        onClick={()=>{
                            handleCancel()
                        }}
                        />
                    </Col>
                </Row>
                <Divider
                style={{
                    margin:'6px 0px 8px 0px'
                }}
                />
            </>} 
            open={isModalOpen} 
            footer={null}
            className='add-timer-logs-modal'
            >
                <Row>
                    <Col 
                    span={24}>
                        <Form
                        size='small'
                        form={form}
                        onFinish={onTimerSubmit}
                        >
                            <Row>
                                <Col span={11}>
                                    <CommonFormItem
                                    propsLists={{
                                        tooltip:{
                                            title:"Tender Lists"
                                        },
                                        rules:{
                                            //required:true,
                                            message:"Tender Lists Is Required."
                                        },
                                        name:"TenderName",
                                        labelAlign:"right",
                                        wrapperCol:24
                                        //label:"Tender Lists"
                                    }}
                                    >
                                        <Input
                                        readOnly
                                        className='read-only-input'
                                        />
                                    </CommonFormItem> 
                                </Col>
                                <Col 
                                span={13}
                                style={{
                                    padding:'0px 0px 0px 5px'
                                }}
                                >
                                    <Form.Item>
                                        <CommonFormItem
                                        propsLists={{
                                            tooltip:{
                                                title:"Tender Minutes"
                                            },
                                            rules:{
                                                required:true,
                                                message:"Minutes Is Required."
                                            },
                                            name:"Minutes",
                                            labelAlign:"right",
                                            label:"Minutes",
                                            labelCol:10,
                                            wrapperCol:14

                                        }}
                                        >
                                            <InputNumber
                                            style={{
                                                width:'100%'
                                            }}
                                            />
                                        </CommonFormItem>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row
                            style={{
                                padding:'12px 0px 8px 0px'
                            }}
                            >
                                <Col 
                                span={24}
                                style={{
                                    display:'flex',
                                    justifyContent:'flex-end',
                                    alignItems:'center',
                                    gap:'8px'
                                }}
                                >
                                    <Button
                                    size='small'
                                    onClick={handleCancel}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                    size='small'
                                    htmlType='submit'
                                    >
                                        Save
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}
export default TenderPublishListsComponent;