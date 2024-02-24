export class Order {
 
  private createAt: Date
  constructor (private total: number, public customerDocument: string) {
    this.createAt = new Date()
  }
}