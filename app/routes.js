const express = require('express')
const router = express.Router()
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/sufficient-info-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var sufficientInfo = req.session.data['sufficient-info']

  // Check whether the variable matches a condition
  if (sufficientInfo == "yes-enough-info"){
    // Send user to next page
    res.redirect('assess/tasklist')
  } else {
    // Send user to ineligible page
    res.redirect('/index.html')
  }

})

//pulling in from MOJ risk widgets
router.get('/scores', function (req, res) {
  const riskScores = {
    current: {
      date: '23 Jul 2021 at 12:00:00',
      scores: {
        RSR: {
          level: 'HIGH',
          score: 11.34,
          type: 'RSR'
        },
        OSPC: {
          level: 'MEDIUM',
          score: 8.76,
          type: 'OSP/C'
        },
        OSPI: {
          level: 'LOW',
          score: 3.45,
          type: 'OSP/I'
        }
      }
    },
    historical: [
      {
        date: '14 May 2019 at 12:00:00',
        scores: {
          RSR: {
            level: 'HIGH',
            score: 10.3,
            type: 'RSR'
          },
          OSPC: {
            level: 'MEDIUM',
            score: 7.76,
            type: 'OSP/C'
          },
          OSPI: {
            level: 'LOW',
            score: 3.45,
            type: 'OSP/I'
          }
        }
      },
      {
        date: '12 September 2018 at 12:00:00',
        scores: {
          RSR: {
            level: 'MEDIUM',
            score: 5.34,
            type: 'RSR'
          },
          OSPC: {
            level: 'MEDIUM',
            score: 6.76,
            type: 'OSP/C'
          },
          OSPI: {
            level: 'LOW',
            score: 3.45,
            type: 'OSP/I'
          }
        }
      }
    ]
  }

  const widgetData = {
    mappa: {
      level: 'CAT 2/LEVEL 1',
      isNominal: false,
      lastUpdated: '10th October 2021'
    },
    flags: [
      'Hate Crime'
    ],
    roshRiskSummary: {
      overallRisk: 'VERY_HIGH',
      riskToChildren: 'LOW',
      riskToPublic: 'VERY_HIGH',
      riskToKnownAdult: 'MEDIUM',
      riskToStaff: 'HIGH',
      lastUpdated: '10th October 2021'
    }
  }

  res.render('scores', { riskScores, widgetData })
})


// Add your routes here - above the module.exports line

router.post('/ap-type-answer', function (req, res) {

module.exports = router
