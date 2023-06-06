import
    {TYPE_LOG}
   
from '../constains.js'

function logger(log,type='log') {
    console[type](log);
}

export default logger;