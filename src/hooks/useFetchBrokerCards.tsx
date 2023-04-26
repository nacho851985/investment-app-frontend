import InvOnLine from "../assets/brokers/invertir-online.jpg";
import Sbs from "../assets/brokers/sbs.jpg";
import BullMarket from "../assets/brokers/bull-market-brokers.jpg";
import Cocos from "../assets/brokers/cocos.png";
import Balanz from "../assets/brokers/balanz.jpg";
import BBVA from "../assets/brokers/bbva.png";
import HSBC from "../assets/brokers/hsbc.jpg";
import { Broker, CardBroker } from "../pages/accounts/models/broker-card";

export const useFetchBrokerCards = (isBank: boolean) => {
    var cardBrokerList = new Array<CardBroker>();
    if (isBank) {
      cardBrokerList.push(
        new CardBroker(Broker.BBVA, "Broker 1", BBVA),
        new CardBroker(Broker.HSBC, "Broker 1", HSBC),
      );
    } else {
      cardBrokerList.push(
        new CardBroker(Broker.InvertirOnLine, "Broker 1", InvOnLine),
        new CardBroker(Broker.Sbs, "Broker 1", Sbs),
        new CardBroker(Broker.BullMarket, "Broker 1", BullMarket),
        new CardBroker(Broker.CocosCapital, "Broker 1", Cocos),
        new CardBroker(Broker.Balanz, "Broker 1", Balanz),
      );
    }

    return {
        cardBrokerList
    }
}