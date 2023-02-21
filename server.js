const express = require('express')
const cors = require('cors')
const fs = require('fs')
const https = require('https')
const bodyParser = require("body-parser");

const key = fs.readFileSync('private.key')
const cert = fs.readFileSync('certificate.crt')

const app = express()
const port = 80

const cred = {
    key,
    cert
}

app.use(cors())

app.get('/api', (req, res) => {
    res.send({
        people: '444adf'
    })
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

var DB = {
    games:
        {
            "status":200,
            "message":"OK",
            "data":{
               "validate":{
                   "is_trial":true ,
                  "is_pro":true ,
                  "end_date":"2030-10-10T00:00:00",
                  "day_remaining":518400,
                  "life_time":false
               },
               "access_modules":{
                  "message":{
                     "access":  true ,
                     "attachment":true ,
                     "delay":true ,
                     "attachmentlimit":4,
                     "delayvalue":1,
                     "personalize":true ,
                     "product":true ,
                     "label":true 
                  },
                  "exportcontact":{
                     "access":true 
                  },
                  "sequence":{
                     "access":true ,
                     "max":500
                  },
                  "linkgenrator":{
                     "access":true 
                  },
                  "blurinfo":{
                     "access":true 
                  },
                  "customtab":{
                     "access":true ,
                     "custom":true ,
                     "max":500
                  },
                  "messagetemplate":{
                     "access":true ,
                     "max":500
                  },
                  "smartreply":{
                     "access":true ,
                     "max":500
                  },
                  "campaign":{
                     "access":true ,
                     "max":500
                  },
                  "webhook":{
                     "access":true,
                     "maxincoming":500,
                     "maxoutgoing":500,
                     "support":[
                        "heroku"
                     ]
                  },
                  "integrations":{
                     "access":true,
                     "support":[
                        "pabblyconnect",
                        "zapier",
                        "integrately"
                     ]
                  },
                  "customtag":{
                     "access":true ,
                     "max":100
                  },
                  "customfield":{
                     "access":true ,
                     "custom":true ,
                     "max":100
                  },
                  "inject":{
                     "add_event":true ,
                     "schedule_message":true ,
                     "copy_translate":true ,
                     "reminder":true ,
                     "notes":true ,
                     "quick_reply":true ,
                     "thumb_up":true ,
                     "profile":true ,
                     "recurrence":true 
                  },
                  "extra":{
                     "import_export":true ,
                     "global_actions":true ,
                     "delete_all":true ,
                     "pr_button":true ,
                     "group_action":true ,
                     "wa_utility":true ,
                     "recurring":true ,
                     "recurrence":true ,
                     "sequence":true 
                  }
               },
               "plan_type":"pro-plus",
               "device_data":null,
               "is_user_blocked":false ,
               "is_user_blocked_config":null,
               "check_number_type":"both",
               "check_number_type_v2":"both",
               "wa_keys":{
                  "2.2226.3":{
                     "check_pr_number":"window.PR.checkPRNumber = function (id){ return { isLid : function() { return false }, toString : function() { return id } } }",
                     "override_check_type":true
                  },
                  "all":{
                     "check_pr_number":"window.PR.checkPRNumber = function (id){ return { isLid : function() { return false }, toString : function() { return id } } }",
                     "override_check_type":true
                  }
               },
              "usst_trial_start":true,
               "usst_trial_about_end":true,
               "usst_trial_end":false
            }
         },

         free:
        {
            "status":200,
            "message":"OK",
            "data":{
                "validate":{
                   "is_trial":false,
                   "is_pro":true,
                   "end_date":"2030-08-25T00:00:00",
                   "day_remaining":0,
                   "life_time":true
                },
                "access_modules":{
                   "message":{
                      "access":  false ,
                      "attachment":false,
                      "delay":false,
                      "attachmentlimit":4,
                      "delayvalue":5,
                      "personalize":false,
                      "product":false,
                      "label":false
                   },
                   "exportcontact":{
                      "access":false
                   },
                   "sequence":{
                      "access":false,
                      "max":500
                   },
                   "linkgenrator":{
                      "access":false
                   },
                   "blurinfo":{
                      "access":false
                   },
                   "customtab":{
                      "access":false,
                      "custom":false,
                      "max":500
                   },
                   "messagetemplate":{
                      "access":false,
                      "max":500
                   },
                   "smartreply":{
                      "access":false,
                      "max":500
                   },
                   "campaign":{
                      "access":false,
                      "max":500
                   },
                   "webhook":{
                      "access":false,
                      "maxincoming":500,
                      "maxoutgoing":500,
                      "support":[
                         "heroku"
                      ]
                   },
                   "integrations":{
                      "access":false,
                      "support":[
                         "pabblyconnect",
                         "zapier",
                         "integrately"
                      ]
                   },
                   "customtag":{
                      "access":false,
                      "max":100
                   },
                   "customfield":{
                      "access":false,
                      "custom":false,
                      "max":100
                   },
                   "inject":{
                      "add_event":false,
                      "schedule_message":false,
                      "copy_translate":false,
                      "reminder":false,
                      "notes":false,
                      "quick_reply":false,
                      "thumb_up":false,
                      "profile":false
                   },
                   "extra":{
                      "import_export":false,
                      "global_actions":false,
                      "delete_all":false,
                      "pr_button":false,
                      "group_action":false,
                      "wa_utility":false,
                      "recurring":false,
                      "sequence":false
                   }
                },
                "plan_type":"free",
                "device_data":null,
                "is_user_blocked":false,
                "is_user_blocked_config":false,
                "check_number_type":"both",
                "check_number_type_v2":"both",
                "wa_keys":{
                   "2.2226.3":{
                      "check_pr_number":"window.PR.checkPRNumber = function (id){ return { isLid : function() { return false }, toString : function() { return id } } }",
                      "override_check_type":true
                   },
                   "all":{
                      "check_pr_number":"window.PR.checkPRNumber = function (id){ return { isLid : function() { return false }, toString : function() { return id } } }",
                      "override_check_type":true
                   }
                },
                "usst_trial_start":true,
                "usst_trial_about_end":false,
                "usst_trial_end":false
             }
         }
    
}

const sub_key = ['147beh5zgxyjai082vnus9rqm4df7otw12', '147beh5zgxyjai082vnus9rqm4df7otw16', '1476lj94rph50mduwin718kqytxzfoegv3', '383afa700e70414b932ce84f6b08522d', '6c20264b-4745-4025-a93f-f34c5a128078', '80cf647ae2fc44c683ac9d0695ca7522', 'f5d0a441a26c460594f956bee6006ff0', 'fc11c287b4f14d1cbd0fead4c071ae8d', '5a2603ae22704110817a8e143c0203e9', '7dfbc0fcdb214f1bad0b52876f811ce3', '487b5ad2198b4e1f92932071da1b8f24', '6e72b897b67b46efbb77c736e3717030', 'a75a0136f2764604a73e5b587bd321c6', 'e4f57b6d9ae84226a680095b10469110', 'db3b2f4bcfd14f0a82583c295becc009', 'b239d13648d94466b8ec490ca3544c8f', '19c70d04cc5f4f3bbf18e383a6cc8c54', '7295d47480b240cf83769383323c63a0', '3212144914ab428db2da5fd7d5b31125', '907260b2687049fb8c5dcbcc23fc0224', '5c7c4fb4d64e4586bbfee348bee31e3c', '9b5e7079c0b7446cbb0980488beeef15', 'f898335b79aa4021a813b6968d53c6c6', '85b50ec1f3114a75af2f6790b71e7ec0', '14e588b031da4bae9592a7cc23f1b1d5', '2b6cef1bae474e2ea648b8b1ebb26975', '784ba2b91fff4bd58120d769f8c10789', '25005d869d2c442ea3ffa3f5de1a1723', 'd89e0455a5a74248b3a638d6a5eb3d4d', '256a02d4d7624a36a6844ec6cef15395', 'd2835d51dfad42d8bfb7daa756a896e5', '547286c523904929827a892118c6c0f5', '8cf85716fa5f46dda35665a888aacc42', '842dae54ebf64b3787a4c8fa86ad0733', '29b66a4186b6433799ff3696274ae662', '2d29a64d667d489593cdce36e2c80bc4', '1b392c72c73e456dbe99e00fb0966af9', '871821f55d884bb6ba12f9bce1bfc79e', 'bd0cb99602ee4d2ba2177c17cc0cb8c5', 'c8513baee20f48f1afe71026dd923766', '0298d9f0ee7643878cd657efdac3ce63', 'e3caaf5b1ada4275b3d238e07f77f605', 'edb9a57f87bf473e8155a93f20cb32ff', 'b826d9c440eb4af5a02a8940d2f9daf5', 'f73734fdf8a54155bd357d99839513b7', '9d003bce41d84a24b45a01cff6729f54', '6ced85baed1842329c281fc579ccee76', '66d4123499de4b4a85a75f10486592c2', 'a6e7897ef32d488690ff7259f216ff17', '4aba94a41ea548969aa4875dc063486c', '839f94b1ebf148f398c4425fa33e7130', 'cf197b70cbde4126a495c8f6333b7c90', '7b40bc8fd4dc4eef8349b1fac8be7e33']





app.post("/ext",(req, res) => {
    if (req.body) {
      var teste = req.body.sub_key
      if (sub_key.includes(teste)) {
         console.log(sub_key.includes(teste))
      res.statusCode = 200;
      res.json(DB.games);}else{
      res.statusCode = 200;
      res.json(DB.free);}
}else{res.statusCode = 200;
 res.json(DB.free)}});


app.post("/ext/subscription/add",(req, res) => {
    if (req.params.sub_key || req.params.subsciption_key) {
        res.statusCode = 200;
        res.json(DB.games);
    }else{
        res.statusCode = 200;
        res.json(DB.free)
    }
});

app.get("ext/user/open-extention",(req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});



app.listen(port, () => console.log(`Listening on ${port}`))

const httpsServer = https.createServer(cred, app)
httpsServer.listen(443)