import {ADDRESS_FORM_DATA_SEND} from "./type"



export const AddressFormSend= (props) =>{
    return{
        type:ADDRESS_FORM_DATA_SEND,
        payload:[
            {
                Dr_name:props.Dname,
                TimePeriod:props.TimePeriod,
                Date:props.datevalue,
                F_name:props.Fname,
                L_name:props.Lname,
                Gender:props.Gender,
                Id:props.id,
                Email:props.Email,
                P_no:props.Pno,
                Address:props.address,
                Total_bill:3000,
                AppointmentSendTime:props.AppointmentSendTime
            }
        ]
    }
}