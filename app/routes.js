const express = require('express')
const router = express.Router()
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)


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

  var typeOfAp = req.session.data['type-of-ap']
  console.log({typeOfAp})
  console.log(req.session.data)

  if (typeOfAp == "pipe"){
    res.redirect('/pipe-referral')
  } else if (typeOfAp == "esap"){
    res.redirect('/esap-questions/managed-nsd')
  } else if (typeOfAp == "recovery-focused"){
    res.redirect('/recovery-ap')
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


// routing OPD screening

router.post('/pipe-opd-screening', function (req, res) {

  var pipeScreening = req.session.data['opd-pathway']
  console.log({pipeScreening})
  console.log(req.session.data)

  if (pipeScreening == "yes-opd-pathway"){
    res.redirect('/pipe-opd-recommendation')
  } else {
    res.redirect('/pipe-not-eligible')
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
    res.redirect('/date-of-convicted-offences')
  } else {
    res.redirect('rehabilitative-activities')
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
    res.redirect('/access-needs-all-selected')
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
    res.redirect('/assess/assessor-next-step')
  } else {
    res.redirect('/assess/tasklist')
  }
})


// routing to request additional information page

router.post('/sentence-type-info', function (req, res) {

  var sentenceType = req.session.data['sentence-type']
  console.log({sentenceType})
  console.log(req.session.data)

  if (sentenceType == "non-statutory"){
    res.redirect('/task-list-standard')
  } else {
    res.redirect('/sentence-type-details')
  }
})

// routing to exemption information for cases that don't meet TIER

router.post('/tier-exemption', function (req, res) {

  var exemptionType = req.session.data['tier-exemption']
  console.log({exemptionType})
  console.log(req.session.data)

  if (exemptionType == "yes-exemption"){
    res.redirect('/exemption-questions')
  } else {
    res.redirect('/exemption-drop-out')
  }
})

// routing for ESAP flow (managed by NSD)

router.post('/managed-by-nsd', function (req, res) {

  var managedNsd = req.session.data['managed-by-nsd']
  console.log({managedNsd})
  console.log(req.session.data)

  if (managedNsd == "yes-nsd"){
    res.redirect('/esap-questions/esap-all-v1')
  } else {
    res.redirect('/esap-questions/esap-exemption')
  }
})

// routing for ESAP flow (ESAP exemption)

router.post('/esap-exemption', function (req, res) {

  var esapExemption = req.session.data['esap-exemption']
  console.log({esapExemption})
  console.log(req.session.data)

  if (esapExemption == "yes-esap-exemption"){
    res.redirect('/esap-questions/esap-all-v1')
  } else {
    res.redirect('/esap-questions/esap-drop-out')
  }
})

// routing for complex case flow (transgender history)

router.post('/transgender-history', function (req, res) {

  var transgenderHistory = req.session.data['transgender-history']
  console.log({transgenderHistory})
  console.log(req.session.data)

  if (transgenderHistory == "yes-transgender-history"){
    res.redirect('/complex-case/complex-case-review')
  } else {
    res.redirect('../index-offence')
  }
})

// routing for complex case flow (require complex case review)

router.post('/complex-case-review', function (req, res) {

  var complexCaseReview = req.session.data['complex-case-review']
  console.log({complexCaseReview})
  console.log(req.session.data)

  if (complexCaseReview == "yes-complex-case-review"){
    res.redirect('/complex-case/complex-case-board')
  } else {
    res.redirect('../index-offence')
  }
})

// routing for complex case flow (complex case board taken place)

router.post('/complex-case-board', function (req, res) {

  var complexCaseBoard = req.session.data['complex-case-board']
  console.log({complexCaseBoard})
  console.log(req.session.data)

  if (complexCaseBoard == "yes-complex-case-board"){
    res.redirect('/complex-case/complex-case-decision')
  } else {
    res.redirect('/complex-case/complex-case-pause')
  }
})

// routing for complex case flow (complex case board decision (male or female AP place)

router.post('/complex-case-decision', function (req, res) {

  var complexCaseDecision = req.session.data['complex-case-decision']
  console.log({complexCaseDecision})
  console.log(req.session.data)

  if (complexCaseDecision == "yes-male-ap"){
    res.redirect('../index-offence')
  } else {
    res.redirect('/complex-case/complex-case-dropout')
  }
})

// routing for assess (Information received by PP)

router.post('/received-additional-info', function (req, res) {

  var receivedAdditonalInfo = req.session.data['received-additional-info']
  console.log({receivedAdditonalInfo})
  console.log(req.session.data)

  if (receivedAdditonalInfo == "received-additional-info-yes"){
    res.redirect('/assess/assessor-add-info-requested')
  } else {
    res.redirect('/assess/suitability-assessment-rejected')
  }
})

// routing for assess (Information request - Assessor provides information)

router.post('/info-request-info-received', function (req, res) {

  var receivedAdditonalInfo = req.session.data['received-info']
  console.log({receivedAdditonalInfo})
  console.log(req.session.data)

  if (receivedAdditonalInfo == "yes-received-info"){
    res.redirect('/assess/tasklist')
  } else {
    res.redirect('/assess/online-info-request/suitability-questions')
  }
})

// routing for RFAP in Further placement considerations

router.post('/rfap-required', function (req, res) {

  var rfapRequired = req.session.data['rfap-required']
  console.log({rfapRequired})
  console.log(req.session.data)

  if (rfapRequired == "yes-rfap-required"){
    res.redirect('/recovery-ap')
  } else {
    res.redirect('/further-considerations-catering')
  }
})


// routing for request for placement (Type of RfP)

router.post('/request-for-placement-type', function (req, res) {

  var receivedAdditonalInfo = req.session.data['type-of-rfp']
  console.log({receivedAdditonalInfo})
  console.log(req.session.data)

  if (receivedAdditonalInfo == "type-of-rfp-parole"){
    res.redirect('/request-for-placement/rfp-parole-details')
  } else {
    res.redirect('/request-for-placement/rfp-rotl-details')
  }
})


module.exports = router
