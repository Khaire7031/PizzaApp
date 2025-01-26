import React, { createContext, useContext, useState, useLayoutEffect } from 'react';

interface DeviceContextType {
    isMobile: boolean;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export const useDevice = (): DeviceContextType => {
    const context = useContext(DeviceContext);
    if (!context) {
        throw new Error('useDevice must be used within a DeviceProvider');
    }
    return context;
};


interface DeviceProviderProps {
    children: React.ReactNode;
}

export const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useLayoutEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth <= 400);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    }, []);

    return (
        <DeviceContext.Provider value={{ isMobile }}>
            {children}
        </DeviceContext.Provider>
    );
};
