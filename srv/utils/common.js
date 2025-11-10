   const cds = require('@sap/cds');

   function setValue(value) {
    if (value !== undefined && value !== null && value !== '') {
        return value;
    } else {
        return null;
    }
}

async function DynamicProcedureCall(ProceName, InParams = [], OutParam = 0) {

    // Step 1: Generate the placeholder string (?,?,?,...)  and  One '?' per input value
    // Additional '?'s for output parameters 
    const placeholders = [
        ...Array(InParams.length).fill('?'),    // Fill input parameter placeholders
        ...Array(OutParam).fill('?')            // Fill output parameter placeholders
    ].join(',');                                // Join placeholders with commas
 
    // Step 2: Process input parameters and Only input values are mapped; output values are not passed
    const values = InParams.map(setValue);

    return {

        sql: `CALL "${ProceName}"(${placeholders})`,    // Final SQL statement with dynamic

        values                                          // Input values to bind to the placeholders

    };

}

module.exports = {
    setValue,
    DynamicProcedureCall
}