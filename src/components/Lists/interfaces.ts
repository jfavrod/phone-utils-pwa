import React from 'react';
import { IListProps } from '../../services/Lists';

export interface IFeedbackProps {
    mesg: string;
    open: boolean;
    severity: 'success' | 'error' | 'warning' | 'info';
    onClose?(): void;
}

export interface IListEditorProps {
    data?: IListProps;
    cancelAction?(): void;
    deleteAction?(id: string): void;
    saveAction?(list: IListProps): void;
}

export interface IListPropsData {
    data: IListProps;
}

export interface IListsProps {
    navigate(path: string): void;
}

export interface IListetteProps {
    children?: React.ReactNode;
    data: IListProps;
    onClick(list: IListProps): void;
}
