# DnD-Buddy-2.0

# Table of Contents
- [Project Name](#DnD-Buddy-2.0)
- [Table of contents](#table-of-contents)
- [General info](#general-info)
- [Video Demo](#video-demo)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technology](#technology)
- [Status](#status)
- [Future Plan](#future-plan)
- [Create By](#create-by)

# General Info
This project quickly and simpily builds a Dungeons and Dragons character sheet, which can be saved and stored so players can access their character across devices and browsers.  The site is designed for all types of Dungeons and Dragons players.  Simple enough for first time players with all the features an experienced player would need.

**Please visit [https://wmwassmann.github.io/dndbuddy-1/](https://wmwassmann.github.io/dndbuddy-1/) for the site.**

For the feature of the site, please visit the [Features](#features) section for more details.

# Video Demo

# Features
D&D Buddy contains the following features:

1. User Registration and Login
    1. User will initially arrive at our login page, where they can gain entry to our character sheet by entering their email and password. 
    2. If the user is new to our site they will need to register first and the button to register is clearly displayed on the login page.

2. Creating Character
    1. User can follow our modal questionnaire to generate character sheet.
    2. User can exit questionnaire and select the character's name, gender, race and class without aid.
    3. User can elect a random name, gender, race and class without going through questionnaire.

3. Editing Character
    1. At anypoint the user can change their character by double clicking the element of their character they would like to edit.
    2. User can add or subtract character hitpoints determined by campaign play.

4. Saving Character
    1. After creating or editing their character the user has the option to save their character to our database, which will allow them to use the same character for multiple Dungeon and Dragons sessions and campaigns.
    2. Additionally, generating a new character and not saving will allow the user to play a one off campaign but return to their main character later.

3. Charcter Image, Stats, Skills and Weapons
    1. Character's image, stats, skills and weapons will be dynamically generated based on their characters gender, race and class.
    2. If user edits their character, intuitively the application will regenerate the appropriate image, stats, skills and weapons.

4. Dice Roll
    1. User can click on any one of six dice images, all which are used during Dungeons and Dragons campaign play, to generate a random roll.
    2. Each click will produce a dice rolling sound for an enhanced user experience.

5. Help Guides
    1. User has access to multiple help guides through out the application.
    2. Help guides have been placed strategically, where the user is likely to look for them. On mobile screens many of the help guides have been aggregated and can be found by clicking on User Guide in the top left corner.
    3. Guides will provide game definitions to assist beginners with campaign play as well as guides to how the site functions which all users may find beneficial to help them navigate our site.

# Screenshots
Large Screen:

![screenshotlg](assets/front-end-images/screenshot_large.PNG?raw=true)

Medium Screen:

![screenshotmd](assets/front-end-images/screenshot_medium.PNG?raw=true)

Small Screen:

![screenshotsm](assets/front-end-images/screenshot_small.PNG?raw=true)

# Code Style
Standard

# Technology
The following technology have been used for this project:

1. Application Programming Interface:
    1. Youtube API - to play a Dungeons and Dragons introductory video
    2. D&D 5th Edition API - to GET and populate useful information on user's character sheet
   
2. Stylesheets:
    1. Foundation 6
        1. Application Layout - provided the structure for our application
        2. Modals - guide user through initial setup and offer help and definitions during campaign play
        3. Responsive Layout - enhances campaign play by shifting most vital elements where user can readily access them
    2. Bootstrap - used to format the mobile layout
    2. Google Fonts - used font to indicate where to click in order to display help modals 
    3. Reset CSS - to reset styling setting
    4. Dice Font - to produce dice icons
    5. Font Awesome - used to enhance user experience through campaign appropriate font

3. Javascript files:
12 javascript file has been composed for this application:
    | File name  |               Description               |
    | :----------: | :--------------------------------: |
    |  characterimage.js    |  Generates Character's Image  |
    |  dice.js  |  Function for the rolling dice feature  |
    |  globalVar.js  |  Stores all the global variables  |
    |  namebanner.js  |  Contains code to edit, generate and set to local storage the character's name, gender, race and class generate  |
    |  openingmodal.js  |   Displays modals that appears when the applicaton loads  |
    |  randomcharacter.js   |  Generates a random character sheet  |
    |  skillsguidemodal.js   |  Displays skills guide modal on user click  |
    |  spellsandequipmodal.js   |  Function to generate spells and equipment modal on user click  |
    |  statmodalguides.js   |  Contains modals which explains the 6 attributes of Dungeons and Dragons  |
    |  stats.js  |  Function that fills the 6 attributes based on the character's race and class  |
    |  userguide.js  |  Generates user guide modal and contains hitpoint buttons  |
    |  weaponspells.js  |  GETs data from Dungeons and Dragons 5e API and populates application  |

4. NodeJS

5. NPM

6. MySQL


# Status
Project status: Finished

# Future Plan

Plan for the future development of this site:
1. Add additional character classes and races to enhance campaign play.
2. Add the ability to save multiple characters per user.
3. Connect dice rolls to dynamically fill character attributes, hitpoint and armor class values.
4. Create a database for Dungeon Masters that will have include random campaigns and encounters.
5. Give users the ability to access our character sheet without requiring them to register and login.
6. Update when D&D 6th Edition becomes available.

# Create By
Created by Chung Hei Fuk, David Deaton, Karl Behrens, Alex Madrigal and William Wassmann
