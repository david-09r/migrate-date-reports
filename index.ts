// @ts-ignore
import mysql from 'mysql2';
import { initializeApp } from 'firebase-admin';
import { config } from './src/config/config';
import { MDB_DEVELOPMENT, MDB_PRODUCTION } from './src/config/mdbDb';
import { REPORT_DEVELOPMENT, REPORT_PRODUCTION } from './src/config/reportDb';
import { SURVEY_DEVELOPMENT, SURVEY_PRODUCTION } from './src/config/surveyDb';
import { Environment } from './src/enum/enviroment';
const db = process.env.ENV === Environment.PRODUCTION ? MDB_PRODUCTION : MDB_DEVELOPMENT
const reportDB = process.env.ENV === Environment.PRODUCTION ? REPORT_PRODUCTION : REPORT_DEVELOPMENT
const surveyDB = process.env.ENV === Environment.PRODUCTION ? SURVEY_PRODUCTION : SURVEY_DEVELOPMENT
import 'dotenv/config';

const connectionDbMdb = mysql.createConnection(db);
try {
    connectionDbMdb.query('SHOW DATABASES', () => {
        console.log('Local Database connected');
    });
} catch (error) {
    console.log('Error to connect to local database: ', error);
    connectionDbMdb.end();
    process.exit();
}

const connectionReport = mysql.createConnection(reportDB);
try {
    connectionReport.query('SHOW DATABASES', () => {
        console.log('Report Database connected');
    });
} catch (error) {
    console.log('Error to connect to report database: ', error);
    connectionReport.end();
    process.exit();
}

const connectionSurvey = mysql.createConnection(surveyDB);
try {
    connectionSurvey.query('SHOW DATABASES', () => {
        console.log('Survey Database connected');
    });
} catch (error) {
    console.log('Error to connect to survey database: ', error);
    connectionSurvey.end();
    process.exit();
}

console.log('Loaded env config from: ' + process.env.ENVFROM);
console.log('Loaded env config to: ' + config.dummyMode ? process.env.ENVFROM : process.env.ENVTO);

const firebaseDb = initializeApp({
    credential: ,
    databaseURL: ""
}, 'lavchat-35bba').firestore();

const firebaseDb2 = initializeApp({
    credential: ,
    databaseURL: ""
}, 'lavchat-stg').firestore();