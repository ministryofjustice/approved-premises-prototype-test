//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const fs = require('fs')

// Add your routes here

router.post('*', function(req, res, next) {
    // This function redirects if any part of the data contains a '~'
  
    // This is usually used for radio buttons, by setting the value to "yes~/page/to/redirect/to"
    // in the format '<value>~<redirect URL>'
  
    const obj = Object.keys(req.body).length ? req.body : req.query;
    for (const k in obj) {
      const v = obj[k];
      console.log(v)
      if ((typeof v === 'string') && (v.includes('~'))) {
        const parts = v.split('~');
        req.session.data[k] = parts[0];
        const href = parts[1];
        console.log(`Found '~': redirecting to ${href}`)
        return res.redirect(href);
      }
    }
    next();
  })
  