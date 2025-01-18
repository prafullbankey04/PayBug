import React from 'react';
import styled from 'styled-components';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, TextField, Avatar, Typography } from '@mui/material';

import SearchIcon from '../Assets/searchIcon';
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profilImage from '../Assets/Image.png';

const Header = () => {
    return (
        <Box className="header_box" sx={webStyle.headerBox}>
            <Box sx={webStyle.leftBox}>
                <MenuIcon sx={webStyle.icon} />
                <InputFieldComponent
                    id="filled-basic"
                    placeholder="Search…"
                    variant="filled"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {SearchIcon()}
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            <Box sx={webStyle.rightBox}>
                <HelpIcon sx={webStyle.icon} />
                <Box sx={webStyle.notificationContainer}>
                    <NotificationsIcon sx={webStyle.icon} />
                    <Box sx={webStyle.notificationDot}></Box>
                </Box>
                <Avatar alt="Aarohi Shah" src={profilImage} />
                <Box sx={webStyle.userInfo}>
                    <Typography sx={webStyle.userNameStyle}>Aarohi Shah</Typography>
                    <Typography sx={webStyle.userNameStyle2}>Applicant</Typography>
                </Box>
            </Box>
        </Box>
    );
};

const webStyle = {
    headerBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        '@media (max-width: 600px)': {
            flexDirection: 'column',
            padding: '10px',
        },
    },
    leftBox: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        '@media (max-width: 600px)': {
            justifyContent: 'center',
            width: '100%',
        },
    },
    rightBox: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        '@media (max-width: 600px)': {
            marginTop: '10px',
        },
    },
    icon: {
        color: "#898989",
        '@media (max-width: 600px)': {
            fontSize: '20px',
        },
    },
    notificationContainer: {
        position: 'relative',
    },
    notificationDot: {
        backgroundColor: "#F9837C",
        borderRadius: '50%',
        height: "8px",
        width: '8px',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        '@media (max-width: 600px)': {
            display: 'none',  // Optionally, hide the username and role on small screens
        },
    },
    userNameStyle: {
        fontFamily: 'DM Sans',
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "18.23px",
        color: "#202020",
        '@media (max-width: 600px)': {
            fontSize: "12px",
        },
    },
    userNameStyle2: {
        fontFamily: 'DM Sans',
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "15.62px",
        color: "#898989",
        '@media (max-width: 600px)': {
            fontSize: "12px",
        },
    },
};

const InputFieldComponent = styled(TextField)({
    backgroundColor: "#F9F9F9",
    '& .MuiInputAdornment-root': {
        marginTop: 'unset !important',
        color: '#555',
    },
    '& .MuiFilledInput-underline::before': {
        borderBottom: 'unset',
    },
    '& .MuiFilledInput-underline:hover:not(.Mui-disabled)::before': {
        borderBottom: 'unset',
    },
    '& .MuiFilledInput-underline::after': {
        borderBottom: 'unset',
    },
    '& input': {
        padding: '10px 12px',
    },
    '@media (max-width: 600px)': {
        width: '100%', // Ensure the input field takes full width on mobile
    },
});

export default Header;
