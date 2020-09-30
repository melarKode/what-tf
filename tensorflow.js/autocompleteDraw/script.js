const sketch = function(p){
    const BASE_URL = 'https://storage.googleapis.com/quickdraw-models/sketchRNN/models/';
    const availableModels = ['bird', 'ant','ambulance','angel','alarm_clock','antyoga','backpack','barn','basket','bear','bee','beeflower','bicycle','book','brain','bridge','bulldozer','bus','butterfly','cactus','calendar','castle','cat','catbus','catpig','chair','couch','crab','crabchair','crabrabbitfacepig','cruise_ship','diving_board','dog','dogbunny','dolphin','duck','elephant','elephantpig','everything','eye','face','fan','fire_hydrant','firetruck','flamingo','flower','floweryoga','frog','frogsofa','garden','hand','hedgeberry','hedgehog','helicopter','kangaroo','key','lantern','lighthouse','lion','lionsheep','lobster','map','mermaid','monapassport','monkey','mosquito','octopus','owl','paintbrush','palm_tree','parrot','passport','peas','penguin','pig','pigsheep','pineapple','pool','postcard','power_outlet','rabbit','rabbitturtle','radio','radioface','rain','rhinoceros','rifle','roller_coaster','sandwich','scorpion','sea_turtle','sheep','skull','snail','snowflake','speedboat','spider','squirrel','steak','stove','strawberry','swan','swing_set','the_mona_lisa','tiger','toothbrush','toothpaste','tractor','trombone','truck','whale','windmill','yoga','yogabicycle'];
    let model;

    //model
    let modelState;
    const temperature = 0.1;
    let modelLoaded = false;
    let modelIsActive = false;

    //model pen state
    let dx, dy;
    let x,y;
    let startX, startY;
    let pen = [0,0,0]; //pen_down, pen_up, pen_end
    let previousPen = [1,0,0]; //pen_down, pen_up, pen_end
    const PEN = {DOWN: 0, UP: 1, END: 2};
    const epsilon = 2.0;

    //user drawing
    let currentRawLine = [];
    let userPen = 0;
    let previousUserPen = 0;
    let currentColour = 'black';

    //user drawing history
    let lastHumanStroke;
    let lastHumanDrawing;
    let lastModelDrawing = [];

    let splashIsOpen = true;

    p.setup = function(){
        const containerSize = document.getElementById('sketch').getBoundingClientRect();
        
    }
}