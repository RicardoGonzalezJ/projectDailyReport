'use strict';

var DailyReport = require('../models/DailyReport.model');
var Reporter = require('../models/Reporter.model');

exports.allMembersReports = function (req, res) {
    //Find all the reporters
    Reporter
        .find({})
        .sort({reporterName: 1})
        .exec(function (err, reporters) {
            if (err) {
                console.log('error getting reporters');
            } else {
                return res.render('createReport', {
                    title: 'Create Report',
                    reporters: reporters
                });
            }
        });
}