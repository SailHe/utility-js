/**
 * Descriptions: 判断value是否是一个'有效'的js对象<p>
 *
 * @return boolean 若value是一个已定义不为空的值返回true
 * @author SailHe
 * @date 2018/7/29 17:04
 */
export function isValidObj(value) {
    return (typeof value !== "undefined" && value !== null);
}

/**
 * Descriptions: 判断value是否是一个'有效'的js变量<p>
 *
 * @return boolean 若value是一个已定义不为空的值返回true (obj的null; string的''; number的NaN; 以及undefined视为空)
 * @author SailHe
 * @date 2018/7/30 21:42
 */
export function isValidVar(value) {
    if ((typeof value === 'number')) {
        return !isNaN(value);
    } else {
        return (typeof value !== "undefined" && value !== null && value != '');
    }
}

export function debugLogClosure(DEBUG__) {
    const debugLog = (message) => {
        if (isValidVar(DEBUG__)) {
            console.log(message);
        } else {
            //do nothing
        }
    }
    return debugLog;
}

/**
 * Descriptions: 若已过期 返回true<p>
 *
 * @author SailHe
 * @date 2018/5/9 20:21
 */
export function isTimeOut(endTime) {
    var currentDate = new Date().format("yyyy-MM-dd HH:mm:ss");
    //当前时间在结束时间之前->已过期
    return endTime <= currentDate;
}

/**
 * Descriptions: 以传入的一个规则间隔的字符串 构造一个Array  实验方法<p>
 *
 * @author SailHe
 * @date 2018/5/10 10:17
 */
export function structureArray(ruleStr, interval) {
    //1.正则表达式; 貌似只有实际间隔为空时才能正确 ruleStr.replace(/(.)(?=[^$])/g, "$1,").split(',');
    //2.split:
    return ruleStr.split(interval);
}

/**
 * Descriptions: 缓存式更新<p>
 *
 * @return boolean 若之前没有被添加返回true(即这次添加了缓存)
 * @param refresh true表示强制刷新缓存 否则在有缓存的情况下不更新
 * @author SailHe
 * @date 2018/7/29 21:36
 */
export function bufferUpdate(bufferMap, key, value, refresh) {
    console.assert(bufferMap instanceof Map);
    console.assert(isValidObj(value));
    if (bufferMap.has(key) === false) {
        bufferMap.set(key, value);
        return true;
    } else {
        if (isValidObj(refresh) && refresh === true) {
            bufferMap.set(key, value);
        } else {
            //do nothing
        }
        return false;
    }
}

/**
 * Descriptions: 数组式批量缓存 调用bufferUpdate方法
 * 若key是一个字符串, 对于valueArray中的每一个元素, 都应包含key属性, 这个属性作为索引
 * 否则key作为索引<p>
 *
 * @author SailHe
 * @date 2018/8/27 17:15
 */
export function bufferUpdateArray(bufferMap, key, valueArray, refresh) {
    console.assert(valueArray instanceof Array);
    let len = valueArray.length;
    if (typeof key === 'string') {
        for (let i = 0; i < len; ++i) {
            bufferUpdate(bufferMap, valueArray[i][key], valueArray[i], refresh);
        }
    } else {
        for (let i = 0; i < len; ++i) {
            bufferUpdate(bufferMap, key, valueArray[i], refresh);
        }
    }
}

/**
 * Descriptions: 查重缓存<p>
 *
 * @return boolean 重复返回true 不存在返回false
 * @author SailHe
 * @date 2018/8/2 20:29
 */
export function duplicateChecking(bufferMap, key) {
    console.assert(bufferMap instanceof Map);
    var duplicateCheckingFlag = bufferMap.get(key);
    if (isValidVar(duplicateCheckingFlag) && duplicateCheckingFlag) {
        $.messageBox('请勿重复添加!');
        return true;
    } else {
        bufferMap.set(key, true);
        return false
    }
}

/**
 * Descriptions: 删除查重<p>
 *
 * @author SailHe
 * @date 2018/8/2 20:35
 */
export function duplicateCheckingDelete(bufferMap, key) {
    console.assert(bufferMap instanceof Map);
    bufferMap.set(key, false);
}

export function floatPlush(lhs, rhs) {
    var sum = parseFloat(lhs) + parseFloat(rhs);
    return parseFloat(sum).toFixed(3);
}

export function floatMultiplication(lhs, rhs) {
    return parseFloat(parseFloat(lhs) * parseFloat(rhs)).toFixed(3);
}

export function integerMultiplication(lhs, rhs) {
    return (parseInt(lhs) * parseInt(rhs));
}

//返回两个日期Date间的天数差
export function calcDiffDay(startDate, endDate) {
    console.assert(startDate instanceof Date);
    console.assert(endDate instanceof Date);
    //一天的毫秒数
    var oneDayMSecond = 86400000;
    var diffDay = (endDate - startDate) / oneDayMSecond;
    return diffDay;
}

/**
 * Descriptions: 左开右闭<p>
 * Left open and right closed
 *
 * @author SailHe
 * @date 2018/9/12 12:44
 */
export const betweenNumLORC = (min, num, max) =>{
    return min <= num && num < max;
}
