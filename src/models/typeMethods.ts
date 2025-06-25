// Static methods interface
export interface IStaticsMethods<T> {
  // Find Data
  findAllData(): Promise<T[]>
  findDataByFilter(filter?: object): Promise<T[]>
  findDataById(_id: string): Promise<T | null>
  findOneData(filter?: object): Promise<T | null>
  
  // Data Exist
  dataExist(): Promise<boolean>
  
  // Update Data
  updateDataById(_id: string, body: Partial<T>): Promise<T | null>
  updateDataByFilter(filter: object, body: Partial<T>): Promise<T | null>
  
  // Remove Data
  removeDataById(_id: string): Promise<T>
  removeDataByFilter(filter: object): Promise<T>
  
  // Create Data
  createData(data?: Partial<T>): Promise<T>
  createManyData(data?: Partial<T>[]): Promise<T[]>
}