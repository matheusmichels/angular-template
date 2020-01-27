export class Attempt {
  constructor(
    public isFull: boolean,
    private urlFullHearth: string = 'assets/full_hearth.png',
    private urlEmptyHearth: string = 'assets/empty_hearth.png' ) {}

 get url() {
   if (this.isFull) {
      return this.urlFullHearth;
   } else {
     return this.urlEmptyHearth;
   }
 }
}
