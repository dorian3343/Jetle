import  f15 from '../components/aircraftImages/f15.jpg'
import su27 from '../components/aircraftImages/su27.jpg'
import f22 from '../components/aircraftImages/f22.jpg'
import a10 from '../components/aircraftImages/a10.jpg'
import f16 from '../components/aircraftImages/f16.jpg'
import b2 from '../components/aircraftImages/b2.jpg'
import mig29 from '../components/aircraftImages/mig29.jpg'
import ah64 from '../components/aircraftImages/ah64.jpg'
import f35 from '../components/aircraftImages/f35.jpg'
import su35 from '../components/aircraftImages/su35.jpg'
import fa18 from '../components/aircraftImages/fa18.jpg'
import typhoon from '../components/aircraftImages/typhoon.jpg'
import ch47 from '../components/aircraftImages/ch47.jpg'
import meteor from '../components/aircraftImages/meteor.jpg'
import me262 from '../components/aircraftImages/me262.jpg'
import p80 from '../components/aircraftImages/p80.jpg'
import mig15 from '../components/aircraftImages/mig15.jpg'
import f86 from '../components/aircraftImages/f86.JPG'
import attacker from '../components/aircraftImages/attacker.jpg'
import gripen from '../components/aircraftImages/gripen.jpg';
import draken from '../components/aircraftImages/draken.jpg';
import viggen from '../components/aircraftImages/viggen.jpg';

class Aircraft {
    constructor(name, manufacturer, role, wingType, generation, engineCount, crewCount, url, Block) {
        this.Name = name;
        this.Manufacturer = manufacturer;
        this.Role = role;
        this.WingType = wingType;
        this.Generation = generation;
        this.EngineCount = engineCount;
        this.CrewCount = crewCount;
        this.Url = url;
        this.Block = Block;
    }
}

const hints = [
    new Aircraft(
        "Saab JAS 39 Gripen",
        "Saab",
        "A/A - A/G",
        "Fixed Wing",
        4, 1, "1/2",
        gripen,
        "Neutral",
    ),
    new Aircraft(
        "Saab 35 Draken",
        "Saab",
        "A/A - A/G",
        "Fixed Wing",
        4, 1, "1",
        draken,
        "Neutral",
    ),
    new Aircraft(
        "Saab 37 Viggen",
        "Saab",
        "A/A - A/G",
        "Fixed Wing",
        4, 1, "1",
        viggen,
        "Neutral",
    ),
    new Aircraft(
        "North American F-86 Sabre",
        "North American Aviation",
        "A/A",
        "Fixed Wing",
        1, 1, "1",
        f86,
        "NATO",
    ),
    new Aircraft(
        "MiG-15 Fagot",
        "Mikoyan-Gurevich",
        "A/A",
        "Fixed Wing",
        1, 1, "1",
        mig15,
        "Soviet",
    ),
    new Aircraft(
        "Supermarine Attacker",
        "Supermarine",
        "A/A - A/G",
        "Fixed Wing",
        1, 1, "1",
        attacker,
        "NATO",

    ),
    new Aircraft(
        "Messerschmitt Me 262",
        "Messerschmitt",
        "A/A - A/G",
        "Fixed Wing",
        1, 2, "1/2",
        me262,
        "Axis",
    ),
    new Aircraft(
        "Lockheed P-80 Shooting Star",
        "Lockheed",
        "A/A - A/G",
        "Fixed Wing",
        1, 1, "1",
        p80,
        "NATO"
    ),
    new Aircraft(
        "Gloster Meteor",
        "Gloster Aircraft Company",
        "A/A - A/G",
        "Fixed Wing",
        1, 2, "1/2",
        meteor,
        "NATO",
    ),
    new Aircraft(
        "F-15 Eagle",
        "McDonnel Douglas",
        "A/A - A/G",
        "Fixed Wing",
        4, 2, "1/2",
        f15,
        "NATO",
    ),
    new Aircraft(
        "Su-27 Flanker",
        "Sukhoi",
        "A/A - A/G",
        "Fixed Wing",
        4, 2, "1/2",
        su27,
        "Soviet"
    ),
    new Aircraft(
        "F-22 Raptor",
        "Lockheed Martin",
        "A/A",
        "Fixed Wing",
        5, 2, "1",
        f22,
        "NATO",
    ),
    new Aircraft(
        "A-10 Thunderbolt II",
        "Fairchild Republic",
        "A/G",
        "Fixed Wing",
        4, 2, "1",
        a10,
        "NATO",
        "Famous TK'er"
    ),
    new Aircraft(
        "F-16 Fighting Falcon",
        "General Dynamics",
        "A/A - A/G",
        "Fixed Wing",
        4, 1, "1/2",
        f16,
        "NATO",
        "The viper"
    ),
    new Aircraft(
        "MiG-29 Fulcrum",
        "Mikoyan",
        "A/A - A/G",
        "Fixed Wing",
        4, 2, "1/2",
        mig29,
        "Soviet"
    ),
    new Aircraft(
        "B-2 Spirit",
        "Northrop Grumman",
        "Bomber",
        "Fixed Wing",
        2, 2, "1",
        b2,
        "NATO",
    ),
    new Aircraft(
        "AH-64 Apache",
        "Boeing",
        "A/G",
        "Rotary Wing",
        "N/A", 2, "1",
        ah64,
        "NATO"
    ),
    new Aircraft(
        "F-35 Lightning II",
        "Lockheed Martin",
        "A/A - A/G",
        "Fixed Wing",
        5, 1, "1/2",
        f35,
        "NATO",
    ),
    new Aircraft(
        "Su-35 Flanker-E",
        "Sukhoi",
        "A/A - A/G",
        "Fixed Wing",
        4, 2, "1/2",
        su35,
        "Soviet"
    ),
    new Aircraft(
        "F/A-18 Super Hornet",
        "Boeing",
        "A/A - A/G",
        "Fixed Wing",
        4, 2, "1/2",
        fa18,
        "NATO"
    ),
    new Aircraft(
        "Eurofighter Typhoon",
        "Eurofighter GmbH",
        "A/A - A/G",
        "Fixed Wing",
        4, 2, "1/2",
        typhoon,
        "NATO"
    ),
    new Aircraft(
        "CH-47 Chinook",
        "Boeing",
        "Transport",
        "Rotary Wing",
        "N/A", 2, "2",
        ch47,
        "NATO"
    ),
];


const defaultHints = new Aircraft("Name", "Manufacturer", "Role", "Wing-Type", "Generation", "Engine-Count", "Crew-Count",'',"Block");



export {hints,defaultHints}