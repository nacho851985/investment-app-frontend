export enum Broker {
    InvertirOnLine = "Invertir on Line",
    Sbs = "SBS Group",
    BullMarket = "Bull Market",
    CocosCapital = "Cocos Capital",
    Balanz = "Balanz",
    BBVA = "Banco Frances",
    HSBC = "HSBC",
}

export class CardBroker {
    title!: Broker;
    subTitle!: string;
    image!: string;

    constructor(_title: Broker, _subTitle: string, _image: string) {
        this.title = _title;
        this.subTitle = _subTitle;
        this.image = _image;
      }
}