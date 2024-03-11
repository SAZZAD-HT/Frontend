import React,{
    useState,
    useEffect
} from 'react';
import { 
    useSelector 
} from 'react-redux';
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
import ListsTable from "../../../../ui/ListsTable";
import NormalCard from "../../../../ui/Card/NormalCard";

const RackDataTable=()=>{
    const {folderLists}=useSelector(state=>state.folders);
    console.log("folderLists : ",folderLists)
    const columns=[
        {
            title:"FolderName",
            dataIndex:"FolderName",
            key:"txtFolderName",
            width:"25%",
            align:'left'
        },
        {
            title:"Unit",
            dataIndex:"FolderUnit",
            key:"intFolderUnit",
            align:'right'
        },
        {
            title:"Folder Type ",
            dataIndex:"FolderType",
            key:"folderType",
            align:'center',
            render:(_,record)=>{
                return <Space
                size="middle"
                >
                    
                    <span>
                        
                    </span>
                </Space>
            }
        },
        {
            title:"Machine Name",
            dataIndex:"MachineName",
            key:"txtMachineName",
            // width:"15%",
            align:'center',
            render:(_,record)=>{
                return <Space
                size="middle"
                >
                    
                    <span>
                       
                    </span>
                </Space>
            }
        },
        {
            title:"Rack Id",
            dataIndex:"RackId",
            key:"rackId",
            align:'center',
            render:(_,record)=>{
                return <Space
                size="middle"
                >
                    
                    <span>
                        
                    </span>
                </Space>
            }
        },
        {
            title:"Shelf Code",
            dataIndex:"ShelfCode",
            key:"shelfCode",
            align:'center',
            render:(_,record)=>{
                return <Space
                size="middle"
                >
                    
                    <span>
                        
                    </span>
                </Space>
            }
        },
       
        {
            title:"FolderCode",
            dataIndex:"FolderCode",
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
            <NormalCard>
                <ListsTable
                tableProps={{
                    data:folderLists.length?folderLists:[],
                    height:500,
                    columns,
                    noDataText:"No Data Found",
                }}
                />
            </NormalCard>
        </>
    )
}
export default RackDataTable;
