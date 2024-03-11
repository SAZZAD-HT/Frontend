import React from 'react';
import {
    Form
} from 'antd';
import { 
    useSelector,
    useDispatch
} from 'react-redux';
import { 
    updateFolderLists 
} from '../../../../Redux/features/FolderSetup/folderSetupSlice';
import ComponentHeader from '../../../../components/ui/ComponentHeader';
import ContentContainer from '../../../../components/ui/ContentContainer';
import FolderSetup from '../../../../components/ProductionFolder/ProductionFolder/FolderSetup';
import ResetButton from '../../../../components/ui/Button/Reset';
import SaveButton from '../../../../components/ui/Button/Save';

const RackSetupPage=()=>{
    const dispatch=useDispatch();
    const [form]=Form.useForm();

    const {folderLists}=useSelector(state=>state.folders);

    const onFormSubmit=(values)=>{
        console.log("form data : ",values)
        const stringList=JSON.stringify(folderLists);
        const lists=JSON.parse(stringList);

        const newData = {
            FolderName:values.FolderName,
            FolderUnit:values.Unit.label,
            FolderType: values.FolderType.label,
            MachineName: values.MachineName.label,
            RackId: values.RackId.label,
            ShelfCode: values.Shelf.label,
            FolderCode: values.FolderCode 
        }
        console.log("newData : ",newData);
        const newObject={
            ...newData,
            id:lists.length+1
        }
        lists.push(newObject)
        console.log("lists : ",lists);
        dispatch(updateFolderLists({lists:lists}))
        form.resetFields();
        
    }
    return(
        <>
            <ComponentHeader
            title={"Folder  Setup"}
            description={"description here..."}
            >
                <ResetButton
                onSubmit={()=>{
                    form.resetFields()
                }}
                >
                    Reset
                </ResetButton>
                <SaveButton
                onSubmit={()=>{
                    form.submit()
                }}
                disabled={false}
                >
                    {"Save"}
                </SaveButton>

            </ComponentHeader>
            <ContentContainer>
                <FolderSetup
                props={{
                    form:form,
                    onFormSubmit
                }}
                />
            </ContentContainer>        
        </>
    )
}
export default RackSetupPage;