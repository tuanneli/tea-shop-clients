import {IResponse, IUser} from "../../../types/UserTypes";
import {$host, baseURL} from "../../../api/http/http";
import {RootDispatchType} from "../../store";
import {userSlice} from "./UserSlice";

export const authentication = ({...props}, route: string) => async (dispatch: RootDispatchType) => {
    try {
        dispatch(userSlice.actions.isFetching());
        const response = await $host.post<IResponse>(`${baseURL}/user/${route}`, {...props});
        console.log(response.data)
        dispatch(userSlice.actions.successFetching(response.data))
    } catch (e: any) {
        console.log(e.response.data.message)
        dispatch(userSlice.actions.errorFetching(e.response.data.message))
    }
}
