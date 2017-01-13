var Client = require('mariasql'),
    jsonfile = require('jsonfile'),
    file = './product.json',
    c = new Client({host: '127.0.0.1', user: 'xxxxxx', password: 'xxxxxx', db: 'xxxxxx'}),
    sql = 'select PRODUCT_ID, PRODUCTNU, TXT, BUSINESS_STREAM, SECOND_COMMODITY, MSDS, SECOND_COMMODITY_DESCRIPTION, PART_PRODUCT_FAMILY, UNIT_MEAS, SUPERSEDES, SUPERSEDED_BY, DATE_CREATED, DATE_CHANGED, COUNTRY_OF_ORIGIN, ENV_FRIENDLY, ACTIVE, WEIGHT, STATUS from PRODUCT';

c.query(sql, function(err, rows) {
    if (err) {
        throw err;
    }
    jsonfile.writeFile(file, rows, function (jsonErr) {
        if (jsonErr) {
            console.error(jsonErr);
        }
        console.log('\x1b[32m%s\x1b[0m', 'Done! Exported ' + rows.length + ' products\r\n');
    });
});

c.end();
