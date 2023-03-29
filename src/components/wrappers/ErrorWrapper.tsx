import React, { ErrorInfo } from 'react';

interface IProps {
    children: React.ReactNode;
}

/**
 * error catch component
 */
export class ErrorWrapper extends React.Component<IProps> {
    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(error);
        console.error(errorInfo);
    }

    public render() {
        return this.props.children;
    }
}
