import { FromNode } from "../PullData/SalesFindQrCode.js";
import { ReturnRowPK } from "../urlSearchParams.js";

let StartFunc = async () => {
    let jVarLocalRowPk = ReturnRowPK();

    let jVarLocalData = await FromNode({
        inRowPK: parseInt(jVarLocalRowPk.RowPK)
    });

    if (jVarLocalData.KTF) {
        if (jVarLocalData.JsonData.length > 0) {
            ShowOnDom();
        };
    };
};

let ShowOnDom = () => {
    let jVarLocalBadgeSoldId = document.getElementById("BadgeSoldId");

    jVarLocalBadgeSoldId.style.display = "";

    let jVarLocalBadgeInStockId = document.getElementById("BadgeInStockId");

    jVarLocalBadgeInStockId.style.display = "none";
};

export { StartFunc };