import { 
    useState,
    useEffect 
} from 'react';
import {
    Row,
    Col,
    Button,
    Form
} from 'antd';
import {
    useSelector 
} from 'react-redux';
import { 
    useLocation,
    useNavigate
} from 'react-router-dom';
import axios from 'axios';
import ConfigureAxios from '../../../../utils/axios';
import ComponentHeader from '../../../../components/ui/ComponentHeader';
import ContentContainer from '../../../../components/ui/ContentContainer';
import NewTenderPublishComponent from '../../../../components/ETender/Published/NewTenderPublish';
import SaveButton from '../../../../components/ui/Button/Save';
import ResetButton from '../../../../components/ui/Button/Reset';
import dayjs, { Dayjs } from 'dayjs';
import { 
    getLocaleDateTime 
} from '../../../../utils/DateConfig';
import { 
    Success,
    Warning,
    Error 
} from '../../../../utils/Message';
import { 
    useCreateUpdatePublishTenderMutation 
} from '../../../../Redux/features/publishTender/tenderPublishApi';


const dateFormat="YYYY-MM-DD";
// const dateFormat="DD-MMMM-YYYY";

const NewTenderPublishPage=()=>{
    const [form] = Form.useForm();
    const location=useLocation();
    const history=useNavigate();
    const IsUpdate=location.state?.IsUpdate?location.state.IsUpdate:false
    const TenderNo=location.state?.TenderNo?location.state.TenderNo:'';
    const [createUpdatePublishTender]=useCreateUpdatePublishTenderMutation()
    const {
        classLists
    }=useSelector((state)=>state.ui);
    const [isSubmitedDisabled,setIsSubmitDisabled]=useState(false);
    const [TenderBidId,setTenderBidId]=useState("");

    useEffect(()=>{
        if(IsUpdate && TenderNo){
            ConfigureAxios();
            axios.get(`/publishTender/getById?TenderNo=${TenderNo}`)
            .then((response)=>{
                if(response.status===200){
                    const {
                        data
                    }=response.data;
                    
                    if(data.length){
                        //console.log(data[0])
                        const tender={
                            key:data[0].TenderId,
                            value:data[0].TenderId,
                            label:data[0].TenderTitle,
                        }
                        //const OpenDate=dayjs(data[0].OpenDate).format(dateFormat)
                        const LocalOpenDate=getLocaleDateTime(data[0].OpenDate)
                        const OpenDate=dayjs(LocalOpenDate);
                        const LocalCloseDate=getLocaleDateTime(data[0].CloseDate)
                        const CloseDate=dayjs(LocalCloseDate);
                        form.setFieldsValue({
                            "TenderList":tender,
                            "OpenDate":OpenDate,
                            "CloseDate":CloseDate
                        })
                        setTenderBidId(data[0].TenderBidId);
                    }
                }
            }).catch((error)=>{
                console.log("Get Publish Tender Lists Details Error!");
            })
        }
    },[IsUpdate])


    const onFormSubmit=(values)=>{
        //console.log("values : ",values)
        // console.log(dayjs(values.CloseDate,dateFormat))
        // console.log(values.CloseDate.$d)
        

        if(values?.OpenDate<values?.CloseDate){
            const UserId=localStorage.getItem("UserId");
            setIsSubmitDisabled(true)
            const object={
                TenderBidId:TenderBidId?TenderBidId:10001,
                TenderId:values?.TenderList.value,
                OpenDate:`${values?.OpenDate.$y}-${(values?.OpenDate.$M)+1}-${values?.OpenDate.$D} ${values?.OpenDate.$H}:${values?.OpenDate.$m}:${values?.OpenDate.$s}`,
                CloseDate:`${values?.CloseDate.$y}-${(values?.CloseDate.$M)+1}-${values?.CloseDate.$D} ${values?.CloseDate.$H}:${values?.CloseDate.$m}:${values?.CloseDate.$s}`,
                CreatedBy:UserId
            }
            createUpdatePublishTender({data:JSON.stringify(object)})
            .then((response)=>{
                console.log(response)
                if(response.data?.status_code===201 && response?.data?.IsEntry==true){
                    Success(`${IsUpdate?"Update":"Saved"} Sucess.`,{},{});
                    form.resetFields()
                    setIsSubmitDisabled(false)
                    if(IsUpdate){
                        history("/tender/publish/newTender",{state:{IsUpdate:false,TenderNo:false}});
                    }
                }
            }).catch((errr)=>{
                setIsSubmitDisabled(false)
                console.log(errr)
            })
        }else{
            Warning("You should choose close date gather then open date.",{},{})
        }
        // console.log("POST DATA",object)
        // console.log(values?.CloseDate.$d)
        // createUpdatePublishTender({data:JSON.stringify(object)})
        // .then((response)=>{
        //     console.log(response)
        //     if(response.data?.status_code===201 && response?.data?.IsEntry==true){
        //         Success("Saved Sucess.",{},{});
        //         form.resetFields()
        //         setIsSubmitDisabled(false)
        //     }
        // }).catch((errr)=>{
        //     setIsSubmitDisabled(false)
        //     console.log(errr)
        // })
    }
    return(
        <>
            <ComponentHeader
            title={"New Tender Publish"}
            description={"Here you can publish existing tender."}
            >
                <ResetButton
                onSubmit={()=>{
                    form.resetFields();
                    setIsSubmitDisabled(false)
                }}
                >
                    Reset
                </ResetButton>
                <SaveButton
                onSubmit={()=>{
                    form.submit()
                }}
                disabled={isSubmitedDisabled}
                >
                    {IsUpdate?"Update":"Save"}
                </SaveButton>
            </ComponentHeader>
            <ContentContainer>
                <NewTenderPublishComponent
                props={{
                    form:form,
                    onFormSubmit:onFormSubmit,
                    IsUpdate,
                    TenderNo:TenderNo
                }}
                />
            </ContentContainer>
        </>
    )
}
export default NewTenderPublishPage;