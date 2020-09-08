/*
-- Speeded Plausibility and Bias Adults: SPBa -- 
   By: Anthony Yacovone (10/16/18) 
   Built from the Toronto-Psycholinguistics-Experiments Template 

*/

// Determine the sequence of the experiment 
var shuffleSequence = seq("setcounter","consent", "demo","instructions", "readyPractice",
                           "sep_practice", "practice1",
                           "sep_practice", "practice2",
                           "sep_practice", "practice3", "readyTest", "readyTest", "sep", sepWith("sep", rshuffle(startsWith("spba"), startsWith("f"))),"debrief","exit");
   

// Define experiment-specific variables 
                                                                  // sets the list number in the Latin Square design
var practiceItemTypes = ["sep_practice", "practice1", 
                           "sep_practice", "practice2", 
                           "sep_practice", "practice3"];  // determines which items have the blue "practice" label 
var centerItems = true;                                                                     // centers the presentation of items (not necessary for this experiment)
var showProgressBar = false;

// Define the defaults for the controller in this experiment (no need for the DashedSentence, Acceptability and DashedAcceptabilty Judgments
var defaults = [
    "Separator", {transfer: 2000, normalMessage: "Please get ready to listen to the next sentence.", errorMessage: "Wrong. Please wait for the next sentence."},
    "Message", {hideProgressBar: false, countsForProgressBar: true},
    "Form", {
        hideProgressBar: false,
        continueOnReturn: true,
        saveReactionTime: true,
        countsForProgressBar: true,
        continueMessage: null}, 
    
    "FlashSentence", {timeout: 1000, countsForProgressBar: false},
    "AY_Form", {continueOnReturn: true, continueMessage: null, hideProgressBar: true},
];
    
const URL_PREFIX = "https://github.com/anthonyyacovone/SPB_WithinDesign/blob/master/";
    
const SOURCES = {
    fill: {
        all: 
        [
            URL_PREFIX + "spb_filler_1-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_2-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_3-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_4-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_5-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_6-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_7-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_8-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_9-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_10-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_11-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_12-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_13-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_14-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_15-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_16-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_17-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_18-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_19-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_20-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_21-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_22-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_23-20pfast.mp3?raw=true",
            URL_PREFIX + "spb_filler_24-20pfast.mp3?raw=true"
        ]
    },
    inst: {
        high: 
        [
            URL_PREFIX + "instr_1_hi-20pfast.mp3?raw=true",
            URL_PREFIX + "instr_2_hi-20pfast.mp3?raw=true",
            URL_PREFIX + "instr_3_hi-20pfast.mp3?raw=true",
            URL_PREFIX + "instr_4_hi-20pfast.mp3?raw=true",
            URL_PREFIX + "instr_5_hi-20pfast.mp3?raw=true",
            URL_PREFIX + "instr_6_hi-20pfast.mp3?raw=true"
        ],
        low: 
        [
            URL_PREFIX + "instr_1_lo-20pfast.mp3?raw=true",
            URL_PREFIX + "instr_2_lo-20pfast.mp3?raw=true",
            URL_PREFIX + "instr_3_lo-20pfast.mp3?raw=true",
            URL_PREFIX + "instr_4_lo-20pfast.mp3?raw=true",
            URL_PREFIX + "instr_5_lo-20pfast.mp3?raw=true",
            URL_PREFIX + "instr_6_lo-20pfast.mp3?raw=true"
        ]
    },
    mod: {
        high: 
        [
            URL_PREFIX + "mod_1_hi-20pfast.mp3?raw=true",
            URL_PREFIX + "mod_2_hi-20pfast.mp3?raw=true",
            URL_PREFIX + "mod_3_hi-20pfast.mp3?raw=true",
            URL_PREFIX + "mod_4_hi-20pfast.mp3?raw=true",
            URL_PREFIX + "mod_5_hi-20pfast.mp3?raw=true",
            URL_PREFIX + "mod_6_hi-20pfast.mp3?raw=true"
        ],
        low: 
        [
            URL_PREFIX + "mod_1_lo-20pfast.mp3?raw=true",
            URL_PREFIX + "mod_2_lo-20pfast.mp3?raw=true",
            URL_PREFIX + "mod_3_lo-20pfast.mp3?raw=true",
            URL_PREFIX + "mod_4_lo-20pfast.mp3?raw=true",
            URL_PREFIX + "mod_5_lo-20pfast.mp3?raw=true",
            URL_PREFIX + "mod_6_lo-20pfast.mp3?raw=true"
        ]
    }
};


function validateInput(s) { 
    if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) {
       return true;       // the input needs to be letters (at least 2)
    } else {
       return "Bad value for \u2018this question\u2019";
    }
}
// Define the experimental stimuli, this includes both target and filler trials 
function loadAudio(url) {
    return `<div class=\"sound\" style=\"width: auto; height: auto; z-index: 0\">Listen carefully!<audio autoplay><source src=\"${url}\" type=\"audio/mpeg\"></audio></div>`;
}

    
var items = [
    
    ["setcounter", "__SetCounter__", { }],


    //ends when key is press
    ["sep_practice", "Message", {html: "<i>Get ready for the practice sentence!</i>", transfer: 3000}, 
            "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}],
    
    ["sep", "Message", {html: "<i>Get ready for the next sentence!</i>", transfer: 3000}, 
            "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}],


    
    ["consent", "AY_Form", {consentRequired: true, html: {include: "harvard_consent_2019.html" }}],
    ["demo", "AY_Form", {consentRequired: true, html: {include: "harvard_demographics.html" }} ],
    ["debrief", "AY_Form", {consentRequired: true, continueMessage:null, html: {include: "harvard_debrief.html" }} ],
    ["exit", "AY_Form", {consentRequired: true, continueMessage:"Submit your answers here!", html: {include: "exit.html" }} ],
    ["instructions", "AY_Form", {consentRequired: true, continueMessage:null, html: {include: "instructions1.html" }} ],
    ["pre-practice_instructions", "AY_Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "instructions2.html" }} ],


    /*
    ===================
    INTRODUCTION
    Can include files for Questionnaires, consent forms etc...
    ===================
    */
    
    ["readyPractice", "Message", {html: "<center><b>You are about to start the practice phase!</b> Make sure to turn up the volume. Press 'Enter' when ready to start.</center>", transfer: 'keypress'}],

    ["readyPractice", "Message", {html: "<center><b>You are about to start the practice phase!</b> Make sure to turn up the volume. Press 'Enter' when ready to start.</center>", transfer: 'keypress'}],

    /*
    ===================
    TRAINING: WITHOUT REPEATS
    ===================
    */
   
      ["practice1",
                             "Message", { html: { include: 'p1_noRepeat.html' }, transfer: 5000 },
                             "Form", {html: 'What did Parker send the monkey?: <input type="text" name="norepeat1" class="obligatory" spellcheck="value">', 
                                      validators: { norepeat1: function (s) { if (s.match(/[aA] present[.!?]? *$/)) return true;       // the input needs to be letters (at least 2)
                                                                              else return "Nice try! The correct answer is just 'A present'. Remember, some answers require only some information to be correct!";}}, },],
      
                                                           
                                                                                                                                                            
      ["practice2", 
                             "Message", { html: { include: 'p2_noRepeat.html' }, transfer: 5000 },
                             "Form", {html: 'What did Sarah do before the giraffe\'s party?: <input type="text" name="norepeat2" class="obligatory" spellcheck="value">', 
                                      validators: { norepeat2: function (s) { if (s.match(/[uU]se[d]? a wrench to fix the [tT][vV][.!?]?/)) return true;       // the input needs to be letters (at least 2)
                                                                              else return "Make sure to provide a complete answer! The correct answer is 'Use a wrench to fix the TV'. Remember, some answers require more information to be correct!";}}, },],  
                                
                                                                                 
                                                                                  
                                                                                 
                                                                                  
      ["practice3", 
                             "Message", { html: { include: 'p3_noRepeat.html' }, transfer: 5000 },
                             "Form", {html: 'Who did Michael want to ask about the midterm?: <input type="text" name="norepeat3" class="obligatory" spellcheck="value">', 
                                      validators: { norepeat3: function (s) { if (s.match(/[tT]he rabbit from school[.!?]?/)) return true;       // the input needs to be letters (at least 2)
                                                                              else return "Make sure to provide a complete answer! The correct answer is 'The rabbit from school'";}}, },],
                                                    
                                                                                  
      ["readyTest", "Message", {html: "<center><b>You are about to start the REAL STUDY!</b> Make sure to turn up the volume. Press 'Enter' when ready to start.</center>", transfer: 'keypress'}],

                                                                                  

     /*
    ===================
    TEST PHASE: 
     
     SPBA: 
     HO = High Plausibility, Original Speed 
     HF = High Plausibility, Fast Speed 
     LO = Low Plausibility, Original Speed 
     LF = Low Plausibilityk, Fast Speed
     
     Fillers:
     fill-o = filler at original speed 
     fill-h = filler at fast speed
     
    ===================
    */
                                                                                  


                                                                                  
// TARGET 1 (Instrument-biased):
    
     [["spba-ho-instr",1],  
                     "Message", { html: loadAudio(SOURCES.inst.high[0]), transfer: 5000 },
                     "Form", {html: 'What did Anthony brush?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],

     [["spba-lo-instr",2],  
                     "Message", { html: loadAudio(SOURCES.inst.low[0]), transfer: 5000 },
                     "Form", {html: 'What did Anthony brush?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],
                                                                                  
          
     [["spba-ho-mod",3],  
                     "Message", { html: loadAudio(SOURCES.mod.high[0]), transfer: 5000 },
                     "Form", {html: 'What did Alex find?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],


     [["spba-lo-mod",4],  
                     "Message", { html: loadAudio(SOURCES.mod.low[0]), transfer: 5000 },
                     "Form", {html: 'What did Alex find?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],
                                                                                  

// TARGET 2:
    


     [["spba-lo-mod",5],  
                     "Message", { html: loadAudio(SOURCES.mod.low[1]), transfer: 5000 },
                     "Form", {html: 'What did Brian listen to?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],
     [["spba-ho-instr",6],  
                     "Message", { html: loadAudio(SOURCES.inst.high[1]), transfer: 5000 },
                     "Form", {html: 'What did Briana clean?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],
     [["spba-lo-instr",7],  
                     "Message", { html: loadAudio(SOURCES.inst.low[1]), transfer: 5000 },
                     "Form", {html: 'What did Briana clean?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],                                                                                 
     [["spba-ho-mod",8],  
                     "Message", { html: loadAudio(SOURCES.mod.high[1]), transfer: 5000 },
                     "Form", {html: 'What did Brian listen to?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],



      
// TARGET 3:
    


    
     [["spba-ho-mod",9],  
                     "Message", { html: loadAudio(SOURCES.mod.high[2]), transfer: 5000 },
                     "Form", {html: 'What did Cathy look at?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],
     [["spba-lo-mod",10],  
                     "Message", { html: loadAudio(SOURCES.mod.low[2]), transfer: 5000 },
                     "Form", {html: 'What did Cathy look at?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],
                                                                                  
     [["spba-ho-instr",11],  
                     "Message", { html: loadAudio(SOURCES.inst.high[2]), transfer: 5000 },
                     "Form", {html: 'What did Cameron cover?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],
                                                                                  
     [["spba-lo-instr",12],  
                     "Message", { html: loadAudio(SOURCES.inst.low[2]), transfer: 5000 },
                     "Form", {html: 'What did Cameron cover?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],
                                                                                  

      
// TARGET 4:
    
     [["spba-lo-instr",13],  
                     "Message", { html: loadAudio(SOURCES.inst.low[3]), transfer: 5000 },
                     "Form", {html: 'What did Diane feed?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],

                                                                                      
     [["spba-ho-mod",14],  
                     "Message", { html: loadAudio(SOURCES.mod.high[3]), transfer: 5000 },
                     "Form", {html: 'What did Dan sing to?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],


     [["spba-lo-mod",15],  
                     "Message", { html: loadAudio(SOURCES.mod.low[3]), transfer: 5000 },
                     "Form", {html: 'What did Dan sing to?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],
     
     [["spba-ho-instr",16],  
                     "Message", { html: loadAudio(SOURCES.inst.high[3]), transfer: 5000 },
                     "Form", {html: 'What did Diane feed?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],      
// TARGET 5:
    
     [["spba-ho-instr",17],  
                     "Message", { html: loadAudio(SOURCES.inst.high[4]), transfer: 5000 },
                     "Form", {html: 'What did Evelyn poke?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],


     [["spba-lo-instr",18],  
                     "Message", { html: loadAudio(SOURCES.inst.low[4]), transfer: 5000 },
                     "Form", {html: 'What did Evelyn poke?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],
    
     [["spba-ho-mod",19],  
                     "Message", { html: loadAudio(SOURCES.mod.high[4]), transfer: 5000 },
                     "Form", {html: 'What did Eric talk to?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],


     [["spba-lo-mod",20],  
                     "Message", { html: loadAudio(SOURCES.mod.low[4]), transfer: 5000 },
                     "Form", {html: 'What did Eric talk to?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],

      
// TARGET 6
    
     [["spba-lo-mod",21],  
                     "Message", { html: loadAudio(SOURCES.mod.low[5]), transfer: 5000 },
                     "Form", {html: 'What did Frankie yell at?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],
     
     [["spba-ho-instr",22],  
                     "Message", { html: loadAudio(SOURCES.inst.high[5]), transfer: 5000 },
                     "Form", {html: 'What did Fred tickle?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],
                                                                                  
     [["spba-lo-instr",23],  
                     "Message", { html: loadAudio(SOURCES.inst.low[5]), transfer: 5000 },
                     "Form", {html: 'What did Fred tickle?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],
                                                                                  
     [["spba-ho-mod",24],  
                     "Message", { html: loadAudio(SOURCES.mod.high[5]), transfer: 5000 },
                     "Form", {html: 'What did Frankie yell at?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: (s) => validateInput(s) }, }, ],


// Filler 1:
    
     [["f-o",25], 
      "Message", { html: loadAudio(SOURCES.fill.all[0]), transfer: 5000},
      "Form", {html: 'What did Amy bring the lonely fish?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],

    
   
// Filler 2:
    
     [["f-o",26], 
      "Message", { html: loadAudio(SOURCES.fill.all[1]), transfer: 5000},
      "Form", {html: 'What did Andrew paint the scary snake?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
   
// Filler 3:
    
     [["f-o",27], 
      "Message", { html: loadAudio(SOURCES.fill.all[2]), transfer: 5000},
      "Form", {html: 'Where was the large, leafy plant?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
// Filler 4:
    
     [["f-o",28], 
      "Message", { html: loadAudio(SOURCES.fill.all[3]), transfer: 5000},
      "Form", {html: 'Where was the long, silky dress?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
// Filler 5:
    
     [["f-o",29], 
      "Message", { html: loadAudio(SOURCES.fill.all[4]), transfer: 5000},
      "Form", {html: 'Who danced?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
     
// Filler 6:
    
     [["f-o",30], 
      "Message", { html: loadAudio(SOURCES.fill.all[5]), transfer: 5000},
      "Form", {html: 'Who cooked?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
     
// Filler 7:
    
     [["f-o",31], 
      "Message", { html: loadAudio(SOURCES.fill.all[6]), transfer: 5000},
      "Form", {html: 'What did Dina write?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
    
// Filler 8:
    
     [["f-o",32], 
      "Message", { html: loadAudio(SOURCES.fill.all[7]), transfer: 5000},
      "Form", {html: 'What did Derek type?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
     
// Filler 9:
    
     [["f-o",33], 
      "Message", { html: loadAudio(SOURCES.fill.all[8]), transfer: 5000},
      "Form", {html: 'What did Ellen feed?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
    
// Filler 10:
    
     [["f-o",34], 
      "Message", { html: loadAudio(SOURCES.fill.all[9]), transfer: 5000},
      "Form", {html: 'What did Emily burp?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
     
// Filler 11:
    
     [["f-o",35], 
      "Message", { html: loadAudio(SOURCES.fill.all[10]), transfer: 5000},
      "Form", {html: 'Who laughed at the frog\'s jokes?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
     
// Filler 12:
    
     [["f-o",36], 
      "Message", { html: loadAudio(SOURCES.fill.all[11]), transfer: 5000},
      "Form", {html: 'Who scoffed at the remarks that the fox made?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],


      
// Filler 13:
    
     [["f-o",37], 
      "Message", { html: loadAudio(SOURCES.fill.all[12]), transfer: 5000},
      "Form", {html: 'What did George use to buy food?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
   
// Filler 14:
    
     [["f-o",38], 
      "Message", { html: loadAudio(SOURCES.fill.all[13]), transfer: 5000},
      "Form", {html: 'What did Georgia use to get discounted school supplies?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
   
// Filler 15:
    
     [["f-o",39], 
      "Message", { html: loadAudio(SOURCES.fill.all[14]), transfer: 5000},
      "Form", {html: 'What did Haley hear?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
// Filler 16:
    
     [["f-o",40], 
      "Message", { html: loadAudio(SOURCES.fill.all[15]), transfer: 5000},
      "Form", {html: 'What did Harry hear?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
// Filler 17:
    
     [["f-o",41], 
      "Message", { html: loadAudio(SOURCES.fill.all[16]), transfer: 5000},
      "Form", {html: 'What did Ian love to do?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
     
// Filler 18:
    
     [["f-o",42], 
      "Message", { html: loadAudio(SOURCES.fill.all[17]), transfer: 5000},
      "Form", {html: 'What did Izzy like to do?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
     
// Filler 19:
    
     [["f-o",43], 
      "Message", { html: loadAudio(SOURCES.fill.all[18]), transfer: 5000},
      "Form", {html: 'Who had a plan?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
    
// Filler 20:
    
     [["f-o",44], 
      "Message", { html: loadAudio(SOURCES.fill.all[19]), transfer: 5000},
      "Form", {html: 'Who had a party?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
     
// Filler 21:
    
     [["f-o",45], 
      "Message", { html: loadAudio(SOURCES.fill.all[20]), transfer: 5000},
      "Form", {html: 'What did Kristy grow tired of?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
    
// Filler 22:
    
     [["f-o",46], 
      "Message", { html: loadAudio(SOURCES.fill.all[21]), transfer: 5000},
      "Form", {html: 'What did Ken grow sick of?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
     
// Filler 23:
    
     [["f-o",47], 
      "Message", { html: loadAudio(SOURCES.fill.all[22]), transfer: 5000},
      "Form", {html: 'When did Laura go to the store?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    
     
// Filler 24:
    
     [["f-o",48], 
      "Message", { html: loadAudio(SOURCES.fill.all[23]), transfer: 5000},
      "Form", {html: 'When did Lenny travel to the beach?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
               validators: { answer: (s) => validateInput(s) }, }, ],
    

    ];


     
