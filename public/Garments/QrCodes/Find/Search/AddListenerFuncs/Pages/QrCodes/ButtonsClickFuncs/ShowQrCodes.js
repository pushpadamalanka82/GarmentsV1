import { FromNode as FromNodeFetchFuncsQrCodes } from "../../../../PullData/FetchFuncsQrCodes.js";
import { StartFunc as StartFuncShowOtherQrCodes } from "../../../../ToDom/ShowOtherQrCodes.js";
import { StartFunc as StartFuncChangeRowColour } from "../../../../ToDom/PurchaseTabs/PurchaseQrCodesTab/ChangeRowColour.js";
import { FromNode as FromNodeFetchFuncForSales } from "../../../../PullData/FetchFuncForSales.js";

let StartFunc = () => {
    let ShowOtherQrCodesButtonId = document.getElementById("ShowOtherQrCodesButtonId");

    ShowOtherQrCodesButtonId.addEventListener("click", jVarLocalButtonClickFunc);
};

let jVarLocalButtonClickFunc = async () => {
    let jVarLocalPurchasePk = document.getElementById("PurchasePkId");

    let jVarFromStartFuncFromShowQrCode = await FromNodeFetchFuncsQrCodes();

    let jVarSaleData = await FromNodeFetchFuncForSales();

    if (jVarFromStartFuncFromShowQrCode.KTF) {
        let jVarLocalClubbedData = jFLocalClubSaleData({
            inQrCodeData: jVarFromStartFuncFromShowQrCode.JsonData,
            inSaleData: jVarSaleData.JsonData
        });

        await StartFuncShowOtherQrCodes({ inData: jVarLocalClubbedData });
        StartFuncChangeRowColour();
    };
};

let jFLocalClubSaleData = ({ inQrCodeData, inSaleData }) => {
    let jVarLocalReturnData = inQrCodeData.map(element => {
        let jVarLoopInsideFilter = inSaleData.find(LoopSales => LoopSales.pk === element.pk);

        element.isSold = false;

        if (jVarLoopInsideFilter === undefined === false) {
            element.isSold = true;
            element.SoldDisRate = jVarLoopInsideFilter.DisRate;
            element.SoldGrossAmout = jVarLoopInsideFilter.GrossAmout;
        };

        return element;
    });

    return jVarLocalReturnData;
};

export { StartFunc };