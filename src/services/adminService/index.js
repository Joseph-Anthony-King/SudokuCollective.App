import { AdminPort } from '@/ports/adminPort'

export class AdminService {
  static async getHelloWorldAsync() {
    const response = await AdminPort.getHelloWorldAsync()
    return response
  }
}
