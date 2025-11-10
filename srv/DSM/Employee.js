const { setValue } = require('../utils/common');
const cds = require('@sap/cds');
// const metadata = require('../utils/metadata');
// const { createError } = require('../handlers/createErrorLogHandler');

module.exports = cds.service.impl(function () {

    this.on("RybXHYhRMAVoQfdA", async (req) => {
        let tx;
        try {
            let result;
            let payload = req.data;
            console.log('Incoming Payload:', payload);
            let oInput;
            oInput = JSON.parse(payload.FXPUWMCJEKALGSTV);
            let oNOTES = oInput.NOTES;
            console.log('Extracted Union Object:', oNOTES);

            tx = cds.tx(req);
            for (let i = 0; i < oNOTES.length; i++) {

                result = await tx.run(`CALL PRCREATENOTES(?,?,?,?,?,?,?)`, [
                    setValue(oNOTES[i].NOTID),
                    setValue(oNOTES[i].DSMID),
                    setValue(oNOTES[i].NTSDT),
                    setValue(oNOTES[i].NTSTM),
                    setValue(oNOTES[i].NOTES),
                    setValue(oNOTES[i].ISDEL),
                    setValue(oNOTES[i].NSBDT)
                ]);
                // NOTID = result.ONOTID;

                console.log('Stored Procedure Result:', result);

                await tx.commit();
            }
            returnObj = {
                Success: "Success"
            }

            return JSON.stringify(returnObj);

        } catch (error) {

            if (tx) {
                await tx.rollback();
            }
            return req.error({
                code: 500,
                message: error.toString()
            });
        }
    });




})
