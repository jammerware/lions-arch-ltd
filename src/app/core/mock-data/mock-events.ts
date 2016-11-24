import { Event } from '../../shared/models/event';
import { Timespan } from '../../timespan/timespan';

export const MOCK_EVENTS: Event[] = [
  {
    id: "215af12c-e3be-4cc7-b041-c87f7a71fee7",
    name: "Night and the Enemy",
    zone: "Verdant Brink",
    description: "Help Pact forces survive the darkest of nights against the servants of Mordremoth.",
    primaryWaypointId: "58151f49-8998-4c51-b6d1-351ca5ee7bb9",
    waypoints: [
      {
        waypointId: "8a8469e9-7f6b-4a58-ad20-f3420dac3468",
        description: "Helicopters that land at camps near Faren's Flyer take players up to the [Axemaster Gwyllion](https://wiki.guildwars2.com/wiki/Kill_Axemaster_Gwyllion) boss event." 
      },
      {
        waypointId: "5ad9f305-f23f-4a14-85e8-c4586684ac72",
        description: "Helicopters that land at camps near the Jaka Itzel waypoint take players up to the [Champions Cotoni and Huetzi](https://wiki.guildwars2.com/wiki/Kill_Cotoni_and_Huetzi) boss event." 
      },
      {
        waypointId: "ffeb2cc3-75a6-43e6-a973-421af2d3a107",
        description: "Helicopters that land at camps near Mellaggan's Valor take players up to the [Mordrem Tetrad](https://wiki.guildwars2.com/wiki/Kill_the_tetrad_of_Mordrem_champions) boss event."
      },
      {
        waypointId: "58151f49-8998-4c51-b6d1-351ca5ee7bb9",
        description: "Helicopters that land at camps near the Pact Encampment waypoint take players up to the [Wyvern Matriarch](https://wiki.guildwars2.com/wiki/Kill_the_wyvern_matriarch) boss event." 
      },
      {
        waypointId: "7c458799-f14f-4e8f-801e-91352d7b6828",
        description: "Helicopters that land at camps just south of the Shipwreck Peak waypoint take players up to the [Wyvern Patriarch](https://wiki.guildwars2.com/wiki/Kill_the_Wyvern_Patriarch) boss event."
      }
    ],
    duration: 2.7e+6,
    occurrenceOffsets: [
      Timespan.fromHours(1.75),
      Timespan.fromHours(3.75),
      Timespan.fromHours(5.75),
      Timespan.fromHours(7.75),
      Timespan.fromHours(9.75),
      Timespan.fromHours(11.75),
      Timespan.fromHours(13.75),
      Timespan.fromHours(15.75),
      Timespan.fromHours(17.75),
      Timespan.fromHours(19.75),
      Timespan.fromHours(21.75),
      Timespan.fromHours(23.75)
    ],
    goalContributions: [
      {
        description: "Keep an eye out for [Airship Cargo](https://wiki.guildwars2.com/wiki/Airship_Cargo) nodes while you're running around during the night. You can crack them open with [Pact Crowbars](https://wiki.guildwars2.com/wiki/Pact_Crowbar) to get [Airship Oil](https://wiki.guildwars2.com/wiki/Bottle_of_Airship_Oil) (and other stuff), which is required in high quantities for any Heart of Thorns legendary.",
        goalId: "d2382979-d918-4242-92b7-45d140ea399c" // hot legendary crafting
      },
      {
        description: "If you achieve 100% (or greater) participation on a map that reaches tier 4 during this event, you'll get your [choice of an exotic armor piece](https://wiki.guildwars2.com/wiki/Bladed_Armor_Box) in any slot or weight. Great for gearing up alts!",
        goalId: "56662053-9f3f-49da-86ab-88a7a328661b" // exotic armor
      }
    ],
    key: "vb",
    guide: `# Overview

      
    `
  },
  {
    id: "5aff38bd-ffe0-4753-9ef2-e272b213d4de",
    name: "The Octovine",
    zone: "Auric Basin",
    description: `Fly armors. Save the Exalted. Stop the Mordrem from taking Tarir.
    
  Don't screw up South.`,
    primaryWaypointId: "299425a1-b208-4b7b-9bbe-b216bc5e85e1",
    waypoints: [
      { 
        waypointId: "11f0c660-6360-4255-9378-65bc19d7c976",
        description: "Northwatch is the closest waypoint to the northern octovine event." 
      },
      {
        waypointId: "74682ca2-891e-4ec7-a5c6-caac0d4781e5",
        description: "Eastwatch is the closest waypoint to the eastern octovine event. If you have the Nuhoch Wallows mastery, you can also take a wallow from this waypoint to the western octovine." 
      },
      {
        waypointId: "bdbc4ba9-47fd-43b8-a6b2-e5bcf5f59458",
        description: "Southwatch is the closest waypoint to the southern octovine event." 
      },
      {
        waypointId: "b1414c58-ed92-4225-8045-91ab390f7f4e",
        description: "Westwatch is the closest waypoint to the southern octovine event. If you have the Nuhoch Wallows mastery, you can also take a wallow from this waypoint to the eastern octovine."
      },
      {
        waypointId: "299425a1-b208-4b7b-9bbe-b216bc5e85e1",
        description: "Situated directly in the heart of Tarir, this waypoint becomes contested once the event begins. However, it's a good central location to port to if you're traveling to Auric Basin in preparation of a sweet octovine beatdown."
      }
    ],
    duration: 1.2e+6,
    occurrenceOffsets: [
      Timespan.fromHours(1),
      Timespan.fromHours(3),
      Timespan.fromHours(5),
      Timespan.fromHours(7),
      Timespan.fromHours(9),
      Timespan.fromHours(11),
      Timespan.fromHours(13),
      Timespan.fromHours(15),
      Timespan.fromHours(17),
      Timespan.fromHours(19),
      Timespan.fromHours(21),
      Timespan.fromHours(23),
    ],
    goalContributions: [
      {
        description: "Most of the [Luminate's Backplate](https://wiki.guildwars2.com/wiki/Luminate's_Backplate_(achievement)) collection is connected to this event, so get cracking if you want to look like a giant floaty shinything. And also have an [ascended backpack](https://wiki.guildwars2.com/wiki/Luminate's_Backplate).",
        goalId: "b40fb9c2-65a2-46d4-a3c3-dbb1b907bdd5" // ascended gear
      },
      {
        description: "Exalted Chests of all sizes under Tarir drop auric silver, auric dust, and auric ingots. Once you have the mastery that allows you to converse with the Exalted vendor in Tarir, you can purchase recipes that combine these items to make sweet [Auric weapons](https://wiki.guildwars2.com/wiki/Auric_weapons).",
        goalId: "9779ac23-34ee-4033-97a9-85688cd939b9" // exotic crafting
      },
      {
        description: "Exalted Chests have a high chance to drop [Bloodstone Dust](https://wiki.guildwars2.com/wiki/Pile_of_Bloodstone_Dust), which is a reagent for just about every ascended recipe ever. Plus, you can feed it to [Herta](https://wiki.guildwars2.com/wiki/Herta).",
        goalId: "566c01d0-380e-413b-9173-3012cb1e25d2" // ascended crafting
      }
    ],
    key: "ab",
    guide: `#Overview
      
The Octovine (which the game insists on calling [Battle in Tarir](https://wiki.guildwars2.com/wiki/Battle_in_Tarir) for reasons that are beyond us) is a single-stage event that acts as the culmination of events that occur across the zone in preparation for the ultimate Mordrem assault on the Exalted city of Tarir. The goal of the event is to defeat four Mordrem structures called [Octovines](https://wiki.guildwars2.com/wiki/Octovine) that spawn at cardinal directions (north, south, east, and west) around the city center. 

#Mechanics
All four octovines share some common characteristics. Each one starts with 15 layers of slime protection, and while it has any number of these stacks, it's invulnerable to damage. Each octovine sub-event has unique mechanics that let players remove stacks (see below). When the last stack is removed, a notification will appear (_"The octovine is vulnerable!"_), and you'll have 15 seconds to unleash havoc on your octovine.

**NOTE:** When the first Octovine is defeated, a two-minute timer begins. If all three remaining Octovines aren't defeated within the timer, all four (including any defeated Octovines) will regain 50% of their health. Depending on how much time is left in the event when this happens, it isn't a guaranteed event failure, but it can make things harder.


##North
Unlike the other octovines, the northern one begins the event covered in a thick layer of brambles. You'll need to remove these in order to begin removing stacks of slime protection from the octovine itself. Fortunately, the [Priory Alchemist](https://wiki.guildwars2.com/wiki/Priory_Alchemist)    stands nearby and has brewed up something special to help take down brambles AND the octovine. She stands next to a box of Bramble Begone kits, and these are the key to the event. Once you've grabbed one,  you can use the ability **Herbicide Spray** (bound to 1 by default) to remove the brambles from the octovine, and **Herbicide Turret** to start stripping stacks of slime protection from it once the brambles have been dealt with. 

Note that you can only use your Bramble Begone to create an Herbicide Turret if you haven't used any of its power to destroy the brambles.

##East
The eastern Octovine is probably the most approachable, especially for newcomers to the meta-event. The [Sage Siegemaster](https://wiki.guildwars2.com/wiki/Sage_Siegemaster) waits nearby to direct players to nearby piles of exalted bombs. Picking up the bombs replaces your default abilities with the ability to throw three bombs at the Octovine (bound by default to keys 1-3). Once you've grabbed your bombs, take the updraft in front of the Siegemaster to gain some height, and unload all three bombs on the hapless Octovine. Each bomb removes one stack of slime protection.

##South
The core mechanic of the southern Octovine is centered around the [Sage Bombmaker](https://wiki.guildwars2.com/wiki/Sage_Bombmaker), who stands directly across the courtyard from the Octovine. Periodically, she'll create a large bomb that slowly drifts toward the Octovine. If it reaches its target, it'll remove five stacks of slime protection from the Octovine. Players can expedite the bomb's journey through the courtyard by damaging the bomb from behind, propelling it forward. However, if the bomb takes too much damage from the mordrem in the courtyard, it'll explode prematurely, dealing heavy damage to players nearby. For this reason, the southern event demands participation from players piloting Exalted Armor - we recommend at least three of these, but it's hard too have too many armors here. 

##West
The [Mushroom Master](https://wiki.guildwars2.com/wiki/Mushroom_Master) waits in the western courtyard next to a pool of green goo that transforms anyone who steps into it into an adorable mushroom. In addition to being a massive boost to the attractiveness of some characters, becoming a mushroom grants you two abilities that are key to taking down the western Octovine. If you can hop, skip, or jump your way across the courtyard to get close enough to the Octovine to activate "Poison Spores" (bound to 1 by default), you'll remove a few stacks of slime protection. To this end, you're also given the ability "Jump" on 2 that propels you high into the air. If you've unlocked the gliding mastery, you can also glide in mushroom form, which is pretty useful for avoiding the mordrem congregated in your path.`
  },
  {
    id: "2647883d-39a2-47b2-ba34-6ab0ecdf7263",
    name: "King of the Jungle",
    zone: "Tangled Depths",
    description: "Join forces with ogres, Nuhoch, Rata Novus, and SCAR to kill chak, steal loot, and [learn new words](http://www.dictionary.com/browse/gerent).",
    primaryWaypointId: "7dae3d65-d3cb-4233-965c-6b93a228c467",
    waypoints: [
      {
        waypointId: "8d66a34b-4db3-4ad5-a500-1c5bac446432",
        description: "The primary waypoint for the Ogre lane of the event."
      },
      {
        waypointId: "21f67d75-99eb-474e-86eb-d28867c036b5",
        description: "The primary waypoint for the Teku Nuhoch (usually just called \"Nuhoch\" or \"frog\") lane of the event."
      },
      {
        waypointId: "1e2bfa4f-8d34-4756-a283-1cc9a901640a",
        description: "The primary waypoint for the Rata Novus lane of the event."
      },
      {
        waypointId: "abcb645e-408c-4419-b6de-ed3929183022",
        description: "The primary waypoint for the SCAR (sometimes called \"charr\") lane of the event."
      },
    ],
    duration: 1.2e6,
    occurrenceOffsets: [
      Timespan.fromHours(1.5),
      Timespan.fromHours(3.5),
      Timespan.fromHours(5.5),
      Timespan.fromHours(7.5),
      Timespan.fromHours(9.5),
      Timespan.fromHours(11.5),
      Timespan.fromHours(13.5),
      Timespan.fromHours(15.5),
      Timespan.fromHours(17.5),
      Timespan.fromHours(19.5),
      Timespan.fromHours(21.5),
      Timespan.fromHours(23.5),
    ],
    goalContributions: [
      {
        description: `Successful completion of this event rewards [chak eggs](https://wiki.guildwars2.com/wiki/Chak_Egg), which can be exchanged for special [chak weapon skins](https://wiki.guildwars2.com/wiki/Chak_weapons) at Nuhoch vendors in Tangled depths (once you've unlocked the [appropriate mastery](https://wiki.guildwars2.com/wiki/Nuhoch_Language)). If you're into weapons that look like they could kill you in your sleep if you take your eye off them, these are the skins for you.

Additionally, this event is a good source of [leyline crystals](https://wiki.guildwars2.com/wiki/Ley_Line_Crystal), a currency which you can use to buy components necessary for the [machined weapon](https://wiki.guildwars2.com/wiki/Machined_weapons) skins.`,
        goalId: "c09db606-b8d4-4314-855b-a1cf51b628b8" // unique skins
      }
    ],
    key: "td",
    guide: `
#Overview
The goal of the event is to prevent each of the four chak gerents from destroying four cannons positioned around the Leyline Confluence. Each cannon has a corresponding lane, and each lane has its own mechanic it needs to execute to bring its gerent out of hiding.

#Lanes
While each lane has a few characteristics unique to it, each of the four chak gerents behave pretty similarly. Each event starts with its gerent underground, and you'll need to navigate the lane's unique mechanics (see below) to bring it up so you can wail on it. Once you do, you'll have about two minutes to damage the boss. When time's up, the gerent will poison the area of the lane you're currently in and move closer to the cannon, and the cycle begins again. If your lane doesn't kill the gerent before it reaches the cannon, it'll destroy it, and the event will end in failure.

While the chak gerent is above ground, it'll AOE furiously with falling stalactites and blue-purple pools of ley energy. Keep out of both, especially the pools - they'll kill most players in two to three ticks of damage.

##Ogre Lane
While they aren't the crystals in the leyline, the ogres are here and ready to help with the gerent problem. In typical ogre fashion, their solution is to OGRE SMASH the gerent out of hiding - in this case, by smashing chak eggs until the gerent can't take it anymore. Run around, kill eggs, and kill chak, until it's time to kill an even bigger chak. Is that an ogrey-enough plan for you? 

##Nuhoch Lane
The lovable froggies from Teku Nuhoch are no friends of the chak gerent, and to prove it, they've hatched a plan to lure out their gerent. Unlike the bored residents of crappy towns in the American midwest, the gerent has no love of mushrooms. Use bouncing mushrooms to reach areas around the lane stomp the nodules around the ceiling of the lane. Doing so release spores, and releasing spores is apparently like waving a red flag in front of a bull to the giant chak.

##Rata Novus Lane
The Asura are also here, and they characteristically make everything seem a lot more complicated than it needs to be. They've brought a golem to help combat the gerent, but it needs power. While the boss is underground, smash leyline collectors to release interactable ley energy bundles. Carry the bundles to the golem and interact with it to feed it the power. The more you feed it, the more powerful it is, and more those squeaky asura will pipe down.

##SCAR Lane
SCAR Lane is among the conceptually easiest of the four lanes. Here, the SCAR unit will do a lot of the work for you - you just need to kill enough chak to let them do it. Protect the NPCs around the megathumper while the meter fills, then go bananas on the gerent. So easy, even a charr can (and does) do it.

`
  },
  {
    id: "f5c8aeb1-0949-4fa6-be6e-41a7ce19c567",
    name: "Shadow of the Dragon",
    zone: "Dragon's Stand",
    description: "Three paths. Three towers. One mouth. Also, a weird body. Don't forget your machetes!",
    primaryWaypointId: "95718376-f193-49bb-895e-ebe66c966c41",
    waypoints: [
      {
        waypointId: "95718376-f193-49bb-895e-ebe66c966c41",
        description: "From here to anywhere."
      },
      {
        waypointId: "84b876d6-d215-4e6d-8497-4a6f227def52",
        description: "Pod farming has to start from somewhere, right?"
      }
    ],
    duration: 5.4e+6,
    occurrenceOffsets: [
      Timespan.fromMinutes(1.5),
      Timespan.fromHours(3.5),
      Timespan.fromHours(5.5),
      Timespan.fromHours(7.5),
      Timespan.fromHours(9.5),
      Timespan.fromHours(11.5),
      Timespan.fromHours(13.5),
      Timespan.fromHours(15.5),
      Timespan.fromHours(17.5),
      Timespan.fromHours(19.5),
      Timespan.fromHours(21.5),
      Timespan.fromHours(23.5),
    ],
    goalContributions: [
      {
        description: "This meta-event is the only source of [Crystalline Ore](https://wiki.guildwars2.com/wiki/Crystalline_Ore) in the game, which is used to make [Crystalline Ingots](https://wiki.guildwars2.com/wiki/Crystalline_Ingot) and ultimately a [Gift of Maguuma Mastery](https://wiki.guildwars2.com/wiki/Gift_of_Maguuma_Mastery), which is required for every Heart of Thorns legendary. ",
        goalId: "d2382979-d918-4242-92b7-45d140ea399c" // legendary crafting: hot
      },
      {
        description: "A vendor that appears at the entrance of this zone prior to the beginning of the meta-event (and again at the final area of the event) sells plated weapons, and some of them lead to [\"Specialization Collection\"](https://wiki.guildwars2.com/wiki/Specialization_Collections) achievements that grant relatively cheap ascended weapons if you have the required mastery.",
        goalId: "907320dc-3e21-4b78-83e4-a31eae8867d0" // ascended weapons
      },
      {
        description: "Most Heart of Thorns meta-events give good XP, but Dragon's Stand is one of the best. Pop an XP booster, do your local events, and spank some Mordrem. You'll have leyline gliding before you know it.",
        goalId: "78c9fff9-2136-4bd8-9976-7c06ef898b32" // XP
      },
      {
        description: "A vendor that appears at the entrance of this zone prior to the beginning of the meta-event (and again at the final area of the event) sells plated weapons. These skins are unique, and by completing their related collection achievement, you can even turn them into exotic Machined Weapons. And if you think the _plated_ ones look good...",
        goalId: "c09db606-b8d4-4314-855b-a1cf51b628b8" // unique skins
      }
    ],
    key: "ds"
  },
  {
    id: "a36077c4-b80a-40f1-b26d-da8728fc9344",
    name: "Sandstorm!",
    zone: "Dry Top",
    description: "The most profitable recurring environmental disaster since Disney World.",
    primaryWaypointId: "9941ef2d-98eb-4c82-afc1-58fb2e2961c9",
    waypoints: [
      {
        waypointId: "9941ef2d-98eb-4c82-afc1-58fb2e2961c9",
        description: "This is the unofficial central waypoint of the event. Multiple key events occur near here, including the Sand Giant, the [Haze escort event](https://wiki.guildwars2.com/wiki/Escort_Haze_to_safety), and the dust tornado." 
      },
      {
        waypointId: "e9cfb5f5-bcfe-479f-8073-c71ecf1ebbe8",
        description: "No idea. This seems important, though. \"Refuge\" has a nice ring to it."
      },
      {
        waypointId: "9bf28b0e-e164-40f5-bcfe-88613f3316a9",
        description: "This waypoint is the one nearest the [skritt queen](https://wiki.guildwars2.com/wiki/Defeat_Queen_Chrii'kkt_IV_and_her_royal_subjects) and a few other events."
      }
    ],
    duration: 1.2e+6,
    occurrenceOffsets: [
      Timespan.fromMinutes(40),
      Timespan.fromHours(1.6667),
      Timespan.fromHours(2.6667),
      Timespan.fromHours(3.6667),
      Timespan.fromHours(4.6667),
      Timespan.fromHours(5.667),
      Timespan.fromHours(6.667),
      Timespan.fromHours(7.667),
      Timespan.fromHours(8.667),
      Timespan.fromHours(9.667),
      Timespan.fromHours(10.667),
      Timespan.fromHours(11.667),
      Timespan.fromHours(12.667),
      Timespan.fromHours(13.667),
      Timespan.fromHours(14.667),
      Timespan.fromHours(15.667),
      Timespan.fromHours(16.667),
      Timespan.fromHours(17.667),
      Timespan.fromHours(18.667),
      Timespan.fromHours(19.667),
      Timespan.fromHours(20.667),
      Timespan.fromHours(21.667),
      Timespan.fromHours(22.667),
      Timespan.fromHours(23.667)
    ],
    goalContributions: [
      {
        description: "Most (all?) legendary weapons have a component of their second collection requiring that you bring 400 geodes to Scholar Mossi (like [this one](https://wiki.guildwars2.com/wiki/Jungle_Magics:_Daysword_Edition) for Sunrise). The sandstorm event is geode prime-time.",
        goalId: "a4ce8e59-f752-4572-89b0-c37481865a7c" // legendary crafting: classic
      },
      {
        description: "Most (all?) legendary weapons have a component of their second collection requiring that you bring 400 geodes to Scholar Mossi (like [this one](https://wiki.guildwars2.com/wiki/Jungle_Magics:_Axe_Edition_Vol._2) for Astralaria). The sandstorm event is geode prime-time.",
        goalId: "d2382979-d918-4242-92b7-45d140ea399c" // legendary crafting: hot
      }
    ],
    key: 'dt'
  }
];