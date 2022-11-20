import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootDispatchType, RootStateType} from "../store";

export const useAppDispatch = () => useDispatch<RootDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;