import React from 'react';
import { Box } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import DashboardIcon from '@mui/icons-material/Dashboard';

const SideBar = () => {
    let menuData = [
        {
            id: 1,
            name: "Dashboard",
            active: false,
            icon: <DashboardIcon />
        },
        {
            id: 2,
            name: "Job Notification",
            active: true,
            icon: <BusinessIcon />
        }
    ];

    return (
        <Box sx={webStyle.boxStyle}>
            {menuData.map((item) => (
                <Box sx={item.active ? webStyle.activeStyle : webStyle.nonactiveStyle} key={item.id}>
                    {item.icon}
                    {item.name}
                </Box>
            ))}
        </Box>
    );
};

const webStyle = {
    boxStyle: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        '@media (max-width: 600px)': {
            padding: '10px', // Reduce padding for mobile
            gap: '10px',     // Reduce gap for mobile
        },
    },
    nonactiveStyle: {
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: 500,
        padding: '17px',
        display: 'flex',
        alignItems: 'center',
        lineHeight: '16.94px',
        color: "#898989",
        gap: '4px',
        '@media (max-width: 600px)': {
            fontSize: '12px',   // Smaller font size for mobile
            padding: '12px',    // Adjust padding for mobile
            gap: '8px',         // Adjust gap for mobile
        },
    },
    activeStyle: {
        fontFamily: 'Inter',
        fontSize: '14px',
        background: "rgb(199 233 255)",
        display: 'flex',
        padding: '17px',
        alignItems: 'center',
        fontWeight: 500,
        lineHeight: '16.94px',
        gap: '4px',
        color: "#0084CA",
        borderRadius: '12px',
        '@media (max-width: 600px)': {
            fontSize: '12px',   // Smaller font size for mobile
            padding: '12px',    // Adjust padding for mobile
            gap: '8px',         // Adjust gap for mobile
        },
    }
};

export default SideBar;
