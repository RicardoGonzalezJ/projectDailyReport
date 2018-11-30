'use strict';

var DailyReport = require('../models/DailyReport.model');
var Reporter = require('../models/Reporter.model');
var Project = require('../models/Project.model');

exports.allMembersReportsAndProjects = function (req, res) {

    //Find all the reporters
    Reporter
        .find({})
        .sort({reporterName: 1})
        .exec(function (err, reporters) {
            // console.log(reporters);
            if (err) {
                console.log('error getting reporters');
            } else {
              Project
                  .find({})
                  .sort({ projectName: 1 })
                  .exec(function (err, projects) {
                      if (err) {
                          console.log('error getting projects');
                      } else {
                          res.render('createReport', {
                              title: 'Create Report',
                              reporters: reporters,
                              projects: projects
                          });
                      }
                  });
            }
        });
}

// you can use this code to use for other task.
/*
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
exports.allProjects = function (req, res) {
    //Find all the projects
    Project
        .find({})
        .sort({ projectName: 1 })
        .exec(function (err, projects) {
            if (err) {
                console.log('error getting projects');
            } else {
                return res.render('createReport', {
                    title: 'Create Report',
                    projects: projects
                });
            }
        });
}*/
