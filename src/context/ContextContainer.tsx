import React, { createContext, useContext } from 'react';
import { AuthStore } from '../stores';

// defines all stores that contain the state of the app via mobx
type StoreContainer = {
    auth: AuthStore;
};

// container for stores
type RootContainer = {
    stores: StoreContainer;
};

const RootContextContainer = createContext<RootContainer | undefined>(
    undefined
);

const RootContainerProvider: React.FunctionComponent<{
    children: React.ReactNode;
}> = ({ children }) => {
    // define stores here
    const authStore = new AuthStore();

    const container: RootContainer = {
        stores: {
            auth: authStore,
        },
    };

    return (
        <RootContextContainer.Provider value={container}>
            {children}
        </RootContextContainer.Provider>
    );
};

const useRootContainer = () => {
    const container = useContext<RootContainer | undefined>(
        RootContextContainer
    );

    if (!container) {
        throw Error(
            'useRootContainer cannot be used outside of a RootContainerProvider'
        );
    }

    return container;
};

const useStores = () => {
    const container = useRootContainer();
    return container.stores;
};

export { RootContainerProvider, useStores, useRootContainer };
