import { useState, useEffect } from 'react';
import React from 'react';

export const DataSource = ({getData = async () => {}, resourceName, children}) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getData();
            setResource(response);
        })();
    }, [getData]);

    return (
        <React.Fragment>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: resource });
                }
                return child;
            })}
        </React.Fragment>
    );
}