export class AdminPort {
  static async getHelloWorldAsync() {
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}api/helloworld`)
    return response.json()
  }
}
