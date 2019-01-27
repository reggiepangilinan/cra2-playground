export type AddressModel = {
    street: string,
    suite: string,
    city: string,
    zipcode: string
};

export type CompanyModel = {
    name: string,
    catchPhrase: string,
    bs: string,
};

export type UserModel = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    address: AddressModel,
    company: CompanyModel
};