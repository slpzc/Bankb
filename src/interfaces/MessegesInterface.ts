export interface IMessages {
    from?: string,
    message?: string,
    date?: string,
}

export interface IDialog {
    dialog_uid?: number | string,
    name?: string,
    avatar?: string,
    description?: string,
    messages?: Array<IMessages>
}
