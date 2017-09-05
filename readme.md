# CustardPi-6 Control

This is a NodeJS module created for the purpose of interacting with the CustardPi-6 from SF Innovations http://www.sf-innovations.co.uk/custard-pi-6.html

## Installation

    npm install custardpi6-control

## Basic Usage

    // Load Module    
    var cpi6 = require('custardpi6-control');
    
    // Initialize Board
    cpi6.setasoutput(cpi6.add0);
    
    // Turn on Relay 0 on Board 0
    cpi6.setbit(cpi6.add0, cpi6.ONrelay0);
    
    // Turn off Relay 0 on Board 0
    cpi6.clrbit(cpi6.add0, cpi6.OFFrelay0);
    
    // Turn off All Relays on Board 0
    cpi6.alloff(cpi6.add0);

## Issues & Feedback

If you bump into issues or would like to participate in the development of this module please submit an issue or pull request on the github repo.

https://github.com/Code-Crew/custardpi6-control

Otherwise, contact us via our website: https://www.code-crew.net/pages/contact

