export interface IQueueService {
  send(data: any): Promise<void>
}