

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { snackbarType } from '../../utils/types';
import { updateSnackbar } from '../../features/userDataSlice';
import { Alert, AlertTitle, Snackbar } from '@mui/material';




const CustomSnackBar = () => {
    const { isOpen, isError, message }: snackbarType = useAppSelector(state => state.userReducer.snackbar);
    const dispatch = useAppDispatch();
    const closeHandler = (): void => {
        dispatch(
            updateSnackbar({
                isError: false,
                isOpen: false,
                message: ''
            }));
    }
    return (
        <>
            {message &&
                <Snackbar
                    open={isOpen}
                    onClose={() => closeHandler()}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >

                    <Alert
                        onClose={closeHandler}

                        severity={isError ? "error" : "success"}
                        sx={{ width: '100%', color: 'black', backgroundColor: isError ? 'rgb(246 151 151)' : 'rgb(129 223 148)' }}
                    >
                        <AlertTitle sx={{ fontWeight: '600', color: 'black' }} >{isError ? "Three things are certain in Life :" : "Success"}</AlertTitle>
                        {message}
                        <br />{isError ? "Guess Which One Has Occured???" : ""}
                    </Alert>

                </Snackbar>}

        </>
    );
}

export default CustomSnackBar;