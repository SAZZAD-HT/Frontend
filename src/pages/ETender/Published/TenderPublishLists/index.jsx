import { 
    useContext,
    useEffect 
} from 'react';
import {
    Row,
    Col,
    Button
} from 'antd';
import {
    useSelector,
    useDispatch 
} from 'react-redux';
import { 
    SocketContextApi 
} from '../../../../context/SocketContext';
import { 
    getPublishLists 
} from '../../../../Redux/features/publishTender/tenderPublishSlice';
import ComponentHeader from '../../../../components/ui/ComponentHeader';
import ContentContainer from '../../../../components/ui/ContentContainer';
import TenderPublishListsComponent from '../../../../components/ETender/Published/TenderPublishLists';
import ConfigureAxios from '../../../../utils/axios';
import axios from 'axios';


const TenderPublishListsPage=()=>{
    const dispatch=useDispatch();
    const UserId=localStorage.getItem("UserId");
    const {socketInstance,setSocketInstance}=useContext(SocketContextApi);
    const {
        classLists
    }=useSelector((state)=>state.ui);

    useEffect(()=>{
        ConfigureAxios();
        initialDataLoad();
    },[])

    useEffect(()=>{
        if(socketInstance?.connected){
            socketInstance.on("notify-add-new-timer",async(data)=>{
                initialDataLoad();
            })
        }
    },[socketInstance]);

    const initialDataLoad=async()=>{
        axios.get(`/publishTenderLists?UserId=${UserId}&Take=100&Skip=0`)
        .then((response)=>{
            if(response.status===200){
                const lists=response?.data?.data?.lists;
                const count=response?.data?.data.count;

                dispatch(getPublishLists({
                    lists,
                    count
                }))
            }
        }).catch((error)=>{
            console.log("Fetch Tender Publish Lists Error.");
        })
    }
    
    return(
        <>
            <ComponentHeader
            title={"Tender Publish Lists"}
            description={"Here you can see published tender lists."}
            >
                <Button
                size='small'
                className={`${classLists.globalResetButton?classLists.globalResetButton:''}`}
                icon={<i className="fas fa-window-restore"></i>}
                >
                    Reset
                </Button>
            </ComponentHeader>
            <ContentContainer>
                <TenderPublishListsComponent/>
            </ContentContainer>
        </>
    )
}
export default TenderPublishListsPage;