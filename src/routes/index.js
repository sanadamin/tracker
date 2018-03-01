import express from 'express';
import config from '../config';
import initializeDb from '../db';
import middleware from '../middleware';
import foodtruck from '../controller/foodtruck';
import account from '../controller/account';
import sites from '../controller/sites'
import employee from '../controller/employee'
import task from '../controller/task';
import taskapproval from '../controller/taskapproval';
import record from '../controller/record';
import taskname from '../controller/taskname'

import budget from '../controller/budget'
let router = express();

// connect to db
initializeDb(db => {


    // internal middleware
    router.use(middleware({ config, db }));
    //api routes
    router.use('/budget', budget({ config, db }));

    // api routes v1 (/v1)
    router.use('/foodtruck', foodtruck({ config, db }));
    router.use('/account', account({ config, db }));
    router.use('/sites', sites({ config, db }));
    router.use('/emp', employee({ config, db }));
    router.use('/task', task({ config, db }));
    router.use('/taskapproval', taskapproval({ config, db }));
    router.use('taskname', taskname({ config, db }));
    // router.use('/record',record({config,db}));
});

export default router;