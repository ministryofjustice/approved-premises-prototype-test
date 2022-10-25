const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

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

<<<<<<< Updated upstream
=======
router.post('/ap-type-answer', function (req, res) {

  var typeOfAp = req.session.data['type-of-ap']
  console.log({typeOfAp})
  console.log(req.session.data)

  if (typeOfAp == "pipe"){
    res.redirect('/pipe-referral')
  } else if (typeOfAp == "esap"){
    res.redirect('/esap-placement-reasons')
  }  
  else {
    res.redirect('/task-list-standard')
  }
})

// routing for sentence type page

router.post('/sentence-type-info', function (req, res) {

  var sufficientInfo = req.session.data['sentence-type']
  console.log({sufficientInfo})
  console.log(req.session.data)

  if (sufficientInfo == "non-statutory"){
    res.redirect('/task-list-standard')
  } else {
    res.redirect('/sentence-type-details')
  }
})

//route for release dates 

router.post('/release-date-answer', function (req, res) {

  var releaseDateKnown = req.session.data['release-date']
  console.log({releaseDateKnown})
  console.log(req.session.data)

  if (releaseDateKnown == "release-date-known"){
    res.redirect('/placement-date')
  } else {
    res.redirect('/oral-hearing-date')
  }
})


// convicted offences routing 

router.post('/convicted-of-offences', function (req, res) {

  var convictedOfOffences = req.session.data['convicted-offences']
  console.log({convictedOfOffences})
  console.log(req.session.data)

  if (convictedOfOffences == "convicted-offences-yes"){
    res.redirect('/type-of-convicted-offence')
  } else {
    res.redirect('purposeful-activities')
  }
})


// convicted offences routing (if SO selected)

router.post('/convicted-offence-answer', function (req, res) {

  var offenceConvictions = req.session.data['offence-convictions']
  console.log({offenceConvictions})
  console.log(req.session.data)

  if (offenceConvictions.includes("sexual-offence")) {
    res.redirect('/convicted-offence-so')
  } else {
    res.redirect('/date-of-convicted-offences')
  }

})



// routing to additional PDU location information

router.post('/location-pdu', function (req, res) {

  var pduLocation = req.session.data['managed-pdu']
  console.log({pduLocation})
  console.log(req.session.data)

  if (pduLocation == "yes-managed-pdu"){
    res.redirect('/location-pdu-transfer')
  } else {
    res.redirect('/task-list-standard')
  }
})


// access needs routing

router.post('/access-needs-selected', function (req, res) {

  var healthcareNeeds = req.session.data['healthcare-needs']
  console.log({healthcareNeeds})
  console.log(req.session.data)

  if (healthcareNeeds.length) {
    res.redirect('/access-needs-additional-info')
  } else {
    res.redirect('/healthcare-needs')
  }

})



// routing to additional move on information for foreign national

router.post('/foreign-national-move-on', function (req, res) {

  var foreignNational = req.session.data['move-on-accommodation']
  console.log({foreignNational})
  console.log(req.session.data)

  if (foreignNational == "accommodation-homeoffice"){
    res.redirect('/move-on-foreign-national')
  } else {
    res.redirect('/task-list-standard')
  }
})

// routing to request additional information page

router.post('/assess-suficient-info', function (req, res) {

  var sufficientInfo = req.session.data['sufficient-info']
  console.log({sufficientInfo})
  console.log(req.session.data)

  if (sufficientInfo == "no-not-enough-info"){
    res.redirect('/assess/assessor-request-info')
  } else {
    res.redirect('/tasklist')
  }
})



>>>>>>> Stashed changes
module.exports = router
