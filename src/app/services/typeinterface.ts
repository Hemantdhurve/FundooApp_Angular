export type Ilogin = {
    email: string,
    password: string
}
export type Iregistration = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}
export type IcreateNote = {
    title: string,
    description: string,
    // archieve: boolean,
    // trash: boolean,
    // pin: boolean
}
export type IupdateTrashArchieve = {
    noteId: Number
}
export type IaddLabel = {
    // noteId: Number,
    labelName:string
}