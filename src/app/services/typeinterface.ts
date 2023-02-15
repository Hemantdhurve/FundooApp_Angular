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
export type IcreateNote={
    title:string,
    description:string
}
export type IupdateTrash={
    noteId:Number
}