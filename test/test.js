const debugLog1 = require("../lib/utility").debugLogClosure(false);
debugLog1(1);

const debugLog2 = require("../lib/utility").debugLogClosure(true);
debugLog2(2);
