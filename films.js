const filmCatalog = [
  {
    title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    clues: [
      { format: "scene", slugline: "EXT. DUST-SWEPT CORNFIELD - DAY", action: "A relentless brown haze blankets the horizon. An old pickup truck speeds through failing crops, chasing an errant drone beneath an oxygen-depleted sky." },
      { format: "dialogue", character: "Joseph Cooper", line: "We used to look up at the sky and wonder at our place in the stars. Now we just look down and worry about our place in the dirt." },
      { format: "prop", item: "Ticking mechanical wristwatch with a twitching second hand" },
      { format: "metadata", year: "2014", genre: "Adventure / Drama / Science Fiction", details: "Directed by Christopher Nolan" },
      { format: "signature", character: "Dr. Brand", line: "Do not go gentle into that good night. Rage, rage against the dying of the light." }
    ]
  },
  {
    title: "Inception", poster: "https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    clues: [
      { format: "scene", slugline: "EXT. PARIS STREET CAFÉ - DAY", action: "Pavement fractures into neat geometric slabs. Architecture folds upward at ninety-degree angles, creating an overhead canopy of Parisian balconies." },
      { format: "dialogue", character: "Eames", line: "You mustn't be afraid to dream a little bigger, darling." },
      { format: "prop", item: "Silver pewter spinning top totem" },
      { format: "metadata", year: "2010", genre: "Action / Science Fiction / Adventure", details: "Directed by Christopher Nolan" },
      { format: "signature", character: "Dom Cobb", line: "An idea is like a virus. Resilient. Highly contagious. And even the smallest seed of an idea can grow." }
    ]
  },
  {
    title: "The Avengers", poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    clues: [
      { format: "scene", slugline: "EXT. MIDTOWN MANHATTAN - DAY", action: "Smoke and pulverized glass rain onto the street below. A tear in the sky above Grand Central dislodges armored biomechanical leviathans into the urban canyon." },
      { format: "dialogue", character: "Tony Stark", line: "There is no throne, there is no version of this where you come out on top. Perhaps your army comes and maybe it's too much for us, but it's all on you." },
      { format: "prop", item: "Glowing blue bladed scepter housing an extraterrestrial stone" },
      { format: "metadata", year: "2012", genre: "Science Fiction / Action / Adventure", details: "Directed by Joss Whedon" },
      { format: "signature", character: "Bruce Banner", line: "That's my secret, Cap. I'm always angry." }
    ]
  },
  {
    title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    clues: [
      { format: "scene", slugline: "INT. MAJOR CRIMES INTERROGATION ROOM - NIGHT", action: "Harsh fluorescent fixtures buzz against bare tile. A figure in smeared face paint sits handcuffed to a central metal table under an unforgiving white glow." },
      { format: "dialogue", character: "The Joker", line: "Introduce a little anarchy. Upset the established order, and everything becomes chaos. I'm an agent of chaos." },
      { format: "prop", item: "Double-headed silver dollar coin, one side scarred and charred black" },
      { format: "metadata", year: "2008", genre: "Action / Crime / Thriller", details: "Directed by Christopher Nolan" },
      { format: "signature", character: "The Joker", line: "Why so serious?" }
    ]
  },
  {
    title: "Avatar", poster: "https://image.tmdb.org/t/p/w500/gKY6q7SjCkAU6FqvqWybDYgUKIF.jpg",
    clues: [
      { format: "scene", slugline: "EXT. BIOLUMINESCENT JUNGLE - NIGHT", action: "Canopies radiate ultraviolet hues. Oversized ferns curl and illuminate upon physical touch as predatory calls echo across mossy aerial roots." },
      { format: "dialogue", character: "Miles Quaritch", line: "Out there, beyond that fence, every living thing that crawls, flies, or squats in the mud wants to kill you and eat your eyes for jujubes." },
      { format: "prop", item: "Hermetically sealed amber neural psionic link capsule" },
      { format: "metadata", year: "2009", genre: "Science Fiction / Action / Adventure", details: "Directed by James Cameron" },
      { format: "signature", character: "Neytiri", line: "I see you." }
    ]
  },
  {
    title: "Deadpool", poster: "https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
    clues: [
      { format: "scene", slugline: "EXT. ELEVATED EXPRESSWAY OVERPASS - DAY", action: "A red-suited mercenary perches over an eight-lane highway drop, casually swinging legs over the railing while doodling with red crayons." },
      { format: "dialogue", character: "Wade Wilson", line: "I'm just a bad guy who gets paid to fuck up worse guys." },
      { format: "prop", item: "Dual crossed katana blades paired with a pink cartoon feline duffel bag" },
      { format: "metadata", year: "2016", genre: "Action / Adventure / Comedy", details: "Directed by Tim Miller" },
      { format: "signature", character: "Wade Wilson", line: "Maximum effort." }
    ]
  },
  {
    title: "Avengers: Infinity War", poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    clues: [
      { format: "scene", slugline: "EXT. RUINS OF TITAN - TWILIGHT", action: "Tilted metal debris points into an ochre atmosphere. Shattered architecture floats sideways in distorted gravitational eddies." },
      { format: "dialogue", character: "Thanos", line: "Dread it. Run from it. Destiny arrives all the same. And now, it's here. Or should I say... I am." },
      { format: "prop", item: "Golden left-handed battle gauntlet with sockets for cosmic singularities" },
      { format: "metadata", year: "2018", genre: "Adventure / Action / Science Fiction", details: "Directed by Anthony Russo" },
      { format: "signature", character: "Thanos", line: "You should have gone for the head." }
    ]
  },
  {
    title: "Fight Club", poster: "https://image.tmdb.org/t/p/w500/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
    clues: [
      { format: "scene", slugline: "INT. DILAPIDATED BAR BASEMENT - NIGHT", action: "A circle of shirtless office workers and blue-collar tradesmen lean in under swinging low-watt light bulbs, watching two men collide on damp concrete." },
      { format: "dialogue", character: "Tyler Durden", line: "Advertising has us chasing cars and clothes, working jobs we hate so we can buy shit we don't need." },
      { format: "prop", item: "Rectangle bar of pink artisanal soap pressed with clean block lettering" },
      { format: "metadata", year: "1999", genre: "Drama / Thriller", details: "Directed by David Fincher" },
      { format: "signature", character: "Tyler Durden", line: "The first rule of Fight Club is: you do not talk about Fight Club." }
    ]
  },
  {
    title: "The Shawshank Redemption", poster: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    clues: [
      { format: "scene", slugline: "EXT. CELLBLOCK EXERCISE YARD - DAY", action: "High limestone walls cast long shadows over the packed dust. Hundreds of men in matching blue chambray uniforms pace within perimeter fencing." },
      { format: "dialogue", character: "Ellis Boyd 'Red' Redding", line: "These walls are funny. First you hate 'em, then you get used to 'em. Enough time passes, you get so you depend on 'em." },
      { format: "prop", item: "Miniature rock-shaping hammer concealed within a hollowed-out book" },
      { format: "metadata", year: "1994", genre: "Drama / Crime", details: "Directed by Frank Darabont" },
      { format: "signature", character: "Andy Dufresne", line: "Get busy living, or get busy dying." }
    ]
  },
  {
    title: "Pulp Fiction", poster: "https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
    clues: [
      { format: "scene", slugline: "INT. RETRO DINER BOOTH - MORNING", action: "Coffee steams in thick ceramic mugs. Casual morning chatter ends abruptly as two lovers draw pistols and stand on the vinyl seating." },
      { format: "dialogue", character: "Jules Winnfield", line: "Hamburgers: the cornerstone of any nutritious breakfast." },
      { format: "prop", item: "Black leather combination briefcase emitting an unseen golden radiance" },
      { format: "metadata", year: "1994", genre: "Thriller / Crime / Comedy", details: "Directed by Quentin Tarantino" },
      { format: "signature", character: "Jules Winnfield", line: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men." }
    ]
  },
  {
    title: "Forrest Gump", poster: "https://image.tmdb.org/t/p/w500/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg",
    clues: [
      { format: "scene", slugline: "EXT. SAVANNAH BUS STOP BENCH - DAY", action: "A solitary white feather drifts down through the breeze, coming to rest near muddy sneakers planted flat against the pavement." },
      { format: "dialogue", character: "Drill Sergeant", line: "Gump! What's your sole purpose in this army?" },
      { format: "prop", item: "A rectangular cardboard box of chocolates tied with a ribbon" },
      { format: "metadata", year: "1994", genre: "Comedy / Drama / Romance", details: "Directed by Robert Zemeckis" },
      { format: "signature", character: "Forrest Gump", line: "Mama always said life was like a box of chocolates. You never know what you're gonna get." }
    ]
  },
  {
    title: "Guardians of the Galaxy", poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    clues: [
      { format: "scene", slugline: "INT. RUINS OF MORAG - DAY", action: "Water spouts burst through subterranean temple flagstones as a scavenger in a leather duster kicks puddles to classic rock blasting from a cassette player." },
      { format: "dialogue", character: "Rocket Raccoon", line: "Ain't no thing like me, except me." },
      { format: "prop", item: "An etched metallic lattice Orb encasing a pulsing purple power source" },
      { format: "metadata", year: "2014", genre: "Action / Science Fiction / Adventure", details: "Directed by James Gunn" },
      { format: "signature", character: "Groot", line: "We are Groot." }
    ]
  },
  {
    title: "Harry Potter and the Philosopher's Stone", poster: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    clues: [
      { format: "scene", slugline: "INT. CANDLELIT BANQUET HALL - NIGHT", action: "Thousands of lit tapers float silently beneath an enchanted ceiling reflecting the starry sky above long wooden dining tables." },
      { format: "dialogue", character: "Rubeus Hagrid", line: "Yeh're a wizard, Harry." },
      { format: "prop", item: "An uncut blood-red alchemical gemstone that produces the elixir of life" },
      { format: "metadata", year: "2001", genre: "Adventure / Fantasy", details: "Directed by Chris Columbus" },
      { format: "signature", character: "Hermione Granger", line: "Now, if you two don't mind, I'm going to bed before either of you come up with another clever idea to get us killed, or worse, expelled." }
    ]
  },
  {
    title: "Iron Man", poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    clues: [
      { format: "scene", slugline: "INT. AFGHAN MOUNTAIN CAVE - NIGHT", action: "A crude sledgehammer rings against glowing metal over an improvised forge as sparks scatter across an underground workshop." },
      { format: "dialogue", character: "Ho Yinsen", line: "That's a miniature arc reactor. I'd say that can power something very big for fifteen minutes." },
      { format: "prop", item: "A palm-sized glowing electromagnetic chest device coiled in copper wire" },
      { format: "metadata", year: "2008", genre: "Action / Science Fiction / Adventure", details: "Directed by Jon Favreau" },
      { format: "signature", character: "Tony Stark", line: "The truth is... I am Iron Man." }
    ]
  },
  {
    title: "The Matrix", poster: "https://image.tmdb.org/t/p/w500/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    clues: [
      { format: "scene", slugline: "INT. DERELICT HOTEL ROOM - NIGHT", action: "A woman clad in black vinyl suspends motionless in mid-air at 180 degrees before executing a lightning-fast rotational kick into a tactical officer." },
      { format: "dialogue", character: "Morpheus", line: "You take the blue pill, the story ends, you wake up in your bed and believe whatever you want to believe." },
      { format: "prop", item: "Two smooth oval gelatin capsules, one ruby red and one midnight blue" },
      { format: "metadata", year: "1999", genre: "Action / Science Fiction", details: "Directed by Lana Wachowski" },
      { format: "signature", character: "Morpheus", line: "Unfortunately, no one can be told what the Matrix is. You have to see it for yourself." }
    ]
  },
  {
    title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    clues: [
      { format: "scene", slugline: "EXT. SMOLDERING CRATER OF SHREDDED STEEL - DAY", action: "A battered soldier tightens the leather strap of a sheared circular shield as a colossal foreign warship hovers through the dust." },
      { format: "dialogue", character: "Sam Wilson", line: "Cap, it's Sam. Can you hear me? On your left." },
      { format: "prop", item: "An iron-and-gold articulated nano-gauntlet housing six pulsating celestial gems" },
      { format: "metadata", year: "2019", genre: "Adventure / Science Fiction / Action", details: "Directed by Anthony Russo" },
      { format: "signature", character: "Steve Rogers", line: "Avengers... assemble." }
    ]
  },
  {
    title: "Django Unchained", poster: "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    clues: [
      { format: "scene", slugline: "EXT. FROZEN WOODLAND TRAIL - NIGHT", action: "A two-wheel dentist wagon topped with a giant bouncing tooth on a spring rolls through an icy forest escorting a file of chained men." },
      { format: "dialogue", character: "Dr. King Schultz", line: "I confess, I am somewhat unaccustomed to such unconditional surrender of authority." },
      { format: "prop", item: "A notarized, wax-sealed bill of sale for an enslaved woman signed in an opulent parlor" },
      { format: "metadata", year: "2012", genre: "Drama / Western", details: "Directed by Quentin Tarantino" },
      { format: "signature", character: "Django", line: "The 'D' is silent, hillbilly." }
    ]
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring", poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    clues: [
      { format: "scene", slugline: "EXT. GORGE OF THE ANDUIN - DUSK", action: "Two immense carved stone monarchs loom high out of the cliffs, raising chiseled left palms out over the rushing river canyon." },
      { format: "dialogue", character: "Aragorn", line: "If by my life or death I can protect you, I will. You have my sword." },
      { format: "prop", item: "A simple gold band that reveals fiery Elvish runes when exposed to heat" },
      { format: "metadata", year: "2001", genre: "Adventure / Fantasy / Action", details: "Directed by Peter Jackson" },
      { format: "signature", character: "Gandalf", line: "You shall not pass!" }
    ]
  },
  {
    title: "Joker", poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    clues: [
      { format: "scene", slugline: "EXT. STEEP CONCRETE CITY STAIRWAY - DAY", action: "A gaunt figure in a burgundy suit and smeared clown greasepaint dances down concrete outdoor steps, flinging water from his soles in wild joy." },
      { format: "dialogue", character: "Arthur Fleck", line: "I used to think that my life was a tragedy, but now I realize, it's a fucking comedy." },
      { format: "prop", item: "A laminated card reading 'Forgive my laughter: I have a condition'" },
      { format: "metadata", year: "2019", genre: "Crime / Thriller / Drama", details: "Directed by Todd Phillips" },
      { format: "signature", character: "Arthur Fleck", line: "You get what you fucking deserve!" }
    ]
  },
  {
    title: "Titanic", poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    clues: [
      { format: "scene", slugline: "EXT. CROW'S NEST - NIGHT", action: "Lookouts squint into black, glassy water with no breaking swell, freezing mist clinging to their coats as a massive silhouette looms dead ahead." },
      { format: "dialogue", character: "Rose DeWitt Bukater", line: "I saw my whole life as if I'd already lived it. An endless parade of parties and cotillions, yachts and polo matches." },
      { format: "prop", item: "A fifty-six-carat deep blue heart-shaped diamond suspended on platinum links" },
      { format: "metadata", year: "1997", genre: "Drama / Romance", details: "Directed by James Cameron" },
      { format: "signature", character: "Jack Dawson", line: "I'm the king of the world!" }
    ]
  },
  {
    title: "The Lord of the Rings: The Return of the King", poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    clues: [
      { format: "scene", slugline: "EXT. TIERED STONE CITADEL - DAY", action: "A seven-tiered white city clings to a mountain spur. At its pinnacle sits a dead, barren white tree overlooking smoke gathering across distant plains." },
      { format: "dialogue", character: "Éowyn", line: "No man can kill me." },
      { format: "prop", item: "The reforged sword of kings, shards joined anew with Elven runes" },
      { format: "metadata", year: "2003", genre: "Adventure / Fantasy / Action", details: "Directed by Peter Jackson" },
      { format: "signature", character: "Aragorn", line: "My friends, you bow to no one." }
    ]
  },
  {
    title: "The Wolf of Wall Street", poster: "https://image.tmdb.org/t/p/w500/kW9LmvYHAaS9iA0tHmZVq8hQYoq.jpg",
    clues: [
      { format: "scene", slugline: "INT. PACKED TRADING BOILER ROOM - DAY", action: "Hundreds of young men in ties scream into landline receivers, throwing crumpled slips into the air while a marching band weaves through the floor." },
      { format: "dialogue", character: "Mark Hanna", line: "Nobody knows if a stock is gonna go up, down, sideways or in fucking circles, least of all stockbrokers, right?" },
      { format: "prop", item: "A plain yellow legal pad filled with handwritten penny-stock cold call pitches" },
      { format: "metadata", year: "2013", genre: "Crime / Drama / Comedy", details: "Directed by Martin Scorsese" },
      { format: "signature", character: "Jordan Belfort", line: "Sell me this pen." }
    ]
  },
  {
    title: "Shutter Island", poster: "https://image.tmdb.org/t/p/w500/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg",
    clues: [
      { format: "scene", slugline: "EXT. ROCKY HARBOR DOCK - DUSK", action: "A ferry cuts through thick Atlantic fog toward a forbidding stone fortress ringed by crashing waves and electrified chain fencing." },
      { format: "dialogue", character: "Dr. John Cawley", line: "Wounds can create monsters, and you are wounded, Marshal. Wouldn't you agree?" },
      { format: "prop", item: "A sodden sheet of paper displaying a coded anagram: 'The law of 4; who is 67?'" },
      { format: "metadata", year: "2010", genre: "Drama / Thriller / Mystery", details: "Directed by Martin Scorsese" },
      { format: "signature", character: "Teddy Daniels", line: "Which would be worse: to live as a monster, or to die as a good man?" }
    ]
  },
  {
    title: "Avengers: Age of Ultron", poster: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    clues: [
      { format: "scene", slugline: "EXT. EASTERN EUROPEAN PLAZA - DAY", action: "Vibranium spires anchor into subterranean bedrock as entire city blocks shear away from the earth, rising skyward on magnetic thrusters." },
      { format: "dialogue", character: "Pietro Maximoff", line: "You didn't see that coming?" },
      { format: "prop", item: "A synthetic regeneration cradle housing a cellular vibranium android body" },
      { format: "metadata", year: "2015", genre: "Action / Adventure / Science Fiction", details: "Directed by Joss Whedon" },
      { format: "signature", character: "Ultron", line: "There are no strings on me." }
    ]
  },
  {
    title: "The Dark Knight Rises", poster: "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
    clues: [
      { format: "scene", slugline: "EXT. SUBTERRANEAN SEWER VAULT - NIGHT", action: "Water cascades down concrete aqueducts. A masked brute and a weary vigilante clash in hand-to-hand combat beneath grating iron pipes." },
      { format: "dialogue", character: "Bane", line: "You think darkness is your ally. You merely adopted the dark; I was born in it, molded by it." },
      { format: "prop", item: "A decaying green camouflaged tumbler mounting a stabilized fusion core device" },
      { format: "metadata", year: "2012", genre: "Action / Crime / Drama / Thriller", details: "Directed by Christopher Nolan" },
      { format: "signature", character: "Bane", line: "When Gotham is ashes, then you have my permission to die." }
    ]
  },
  {
    title: "Inglourious Basterds", poster: "https://image.tmdb.org/t/p/w500/aupnPtagH9JVBuMrGEanf4iqXEQ.jpg",
    clues: [
      { format: "scene", slugline: "INT. FRENCH DAIRY FARMHOUSE - DAY", action: "Sunlight pierces dust particles in a modest wooden parlor. A visiting officer calmly fills a calabash pipe while scrutinizing his host across floorboards." },
      { format: "dialogue", character: "Lt. Aldo Raine", line: "Each and every man under my command owes me one hundred Nazi scalps. And I want my scalps." },
      { format: "prop", item: "A silver trench lighter placed beside rolls of volatile nitrate film stock" },
      { format: "metadata", year: "2009", genre: "Drama / Thriller / War", details: "Directed by Quentin Tarantino" },
      { format: "signature", character: "Col. Hans Landa", line: "That's a bingo!" }
    ]
  },
  {
    title: "Mad Max: Fury Road", poster: "https://image.tmdb.org/t/p/w500/ulcAi4dKpAjHwYGS08vNyx9H6I9.jpg",
    clues: [
      { format: "scene", slugline: "EXT. RED SAND WASTELAND - DAY", action: "Spiked scrap-metal buggies and oil tankers race parallel across endless orange dunes beneath towering black dust storm columns." },
      { format: "dialogue", character: "Nux", line: "Witness me!" },
      { format: "prop", item: "A hydraulic steering wheel wrapped in chain links, stamped with a skull sigil" },
      { format: "metadata", year: "2015", genre: "Action / Adventure / Science Fiction", details: "Directed by George Miller" },
      { format: "signature", character: "Immortan Joe", line: "Do not, my friends, become addicted to water. It will take hold of you, and you will resent its absence!" }
    ]
  },
  {
    title: "Captain America: Civil War", poster: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    clues: [
      { format: "scene", slugline: "EXT. GERMAN AIRPORT TARMAC - DAY", action: "Two opposing ranks of costumed comrades break into a dead sprint across a vacant concrete runway beneath overcast skies." },
      { format: "dialogue", character: "T'Challa", line: "The living are not done with you yet." },
      { format: "prop", item: "A red leather-bound notebook embossed with a single black star" },
      { format: "metadata", year: "2016", genre: "Adventure / Action / Science Fiction", details: "Directed by Joe Russo" },
      { format: "signature", character: "Steve Rogers", line: "I can do this all day." }
    ]
  },
  {
    title: "The Lord of the Rings: The Two Towers", poster: "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    clues: [
      { format: "scene", slugline: "EXT. HORNBERG BATTLEMENTS - NIGHT", action: "Torrents of rain pound against stone ramparts as ten thousand armored pike-bearers chant rhythmically in torchlit mud below." },
      { format: "dialogue", character: "Legolas", line: "A red sun rises. Blood has been spilled this night." },
      { format: "prop", item: "A heavy clay bomb filled with black blasting powder planted beneath a drainage culvert" },
      { format: "metadata", year: "2002", genre: "Adventure / Fantasy / Action", details: "Directed by Peter Jackson" },
      { format: "signature", character: "Samwise Gamgee", line: "There's some good in this world, Mr. Frodo, and it's worth fighting for." }
    ]
  },
  {
    title: "Harry Potter and the Chamber of Secrets", poster: "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    clues: [
      { format: "scene", slugline: "INT. FLOODED CORRIDOR - NIGHT", action: "Reflective water pools along stone flagstones where words written in crimson paint glisten ominously beneath a torch bracket." },
      { format: "dialogue", character: "Dobby", line: "Dobby has heard of your greatness, sir, but of your goodness, Dobby never knew." },
      { format: "prop", item: "A black leather-bound diary with blank parchment that writes back in dark ink" },
      { format: "metadata", year: "2002", genre: "Adventure / Fantasy", details: "Directed by Chris Columbus" },
      { format: "signature", character: "Draco Malfoy", line: "You'll be next, Mudbloods!" }
    ]
  },
  {
    title: "Black Panther", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    clues: [
      { format: "scene", slugline: "EXT. WARRIOR FALLS BASIN - DAY", action: "Surrounded by chanting tribes on sheer rock tiers, two warriors strip of their modern regalia and enter the rushing pool for ritual single combat." },
      { format: "dialogue", character: "Erik Killmonger", line: "Y'all sittin' up here comfortable. Must have felt good. There's about two billion people all over the world that look like us, but their lives are a lot harder." },
      { format: "prop", item: "A ceremonial glowing purple heart-shaped herb crushed in a stone mortar" },
      { format: "metadata", year: "2018", genre: "Action / Adventure / Science Fiction", details: "Directed by Ryan Coogler" },
      { format: "signature", character: "T'Challa", line: "Wakanda forever!" }
    ]
  },
  {
    title: "Doctor Strange", poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    clues: [
      { format: "scene", slugline: "INT. KAMAR-TAJ LIBRARY - NIGHT", action: "Candles illuminate ancient scrolls chained to ornate wooden shelves while an apprentice manipulates glowing geometric mandalas with circular hand gestures." },
      { format: "dialogue", character: "The Ancient One", line: "You're a man looking at the world through a keyhole. You've spent your whole life trying to widen it, and now you see it can be widened in ways you can't imagine." },
      { format: "prop", item: "An ornate bronze pendant housing an emerald time stone known as the Eye of Agamotto" },
      { format: "metadata", year: "2016", genre: "Fantasy / Adventure / Action", details: "Directed by Scott Derrickson" },
      { format: "signature", character: "Stephen Strange", line: "Dormammu, I've come to bargain." }
    ]
  },
  {
    title: "Spider-Man: Homecoming", poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    clues: [
      { format: "scene", slugline: "EXT. STATEN ISLAND FERRY - DAY", action: "An alien-tech energy beam cleaves the vessel down the centerline, sending sea spray and passengers cascading as two halves begin to split apart." },
      { format: "dialogue", character: "Adrian Toomes", line: "The rich and the powerful, they do whatever they want. We have to pick up after 'em. We eat their table scraps." },
      { format: "prop", item: "A purple Chitauri power core wired into a high school science backpack" },
      { format: "metadata", year: "2017", genre: "Action / Adventure / Science Fiction", details: "Directed by Jon Watts" },
      { format: "signature", character: "Tony Stark", line: "If you're nothing without this suit, then you shouldn't have it." }
    ]
  },
  {
    title: "Inside Out", poster: "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
    clues: [
      { format: "scene", slugline: "INT. COMMAND CONSOLE ROOM - DAY", action: "A curved glass dome overlooks rolling theme islands powered by glowing translucent spheres rolling through metallic overhead tracks." },
      { format: "dialogue", character: "Sadness", line: "Crying helps me slow down and obsess over the weight of life's problems." },
      { format: "prop", item: "A bright golden core memory orb radiating pure childhood optimism" },
      { format: "metadata", year: "2015", genre: "Animation / Family / Adventure / Drama / Comedy", details: "Directed by Pete Docter" },
      { format: "signature", character: "Bing Bong", line: "Take her to the moon for me, okay?" }
    ]
  },
  {
    title: "Iron Man 3", poster: "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
    clues: [
      { format: "scene", slugline: "EXT. MALIBU CLIFFSIDE MANSION - DAY", action: "Attack helicopters hover over the Pacific coast, firing heat-seeking missiles into modern architectural glass until the cliff collapses into the surf." },
      { format: "dialogue", character: "The Mandarin", line: "Some people call me a terrorist. I consider myself a teacher. Lesson number one: heroes, there is no such thing." },
      { format: "prop", item: "A sub-dermal microchip implant that summons magnetized flight armor piece by piece" },
      { format: "metadata", year: "2013", genre: "Action / Adventure / Science Fiction", details: "Directed by Shane Black" },
      { format: "signature", character: "Tony Stark", line: "You can take away my house, all my tricks and toys. But one thing you can't take away: I am Iron Man." }
    ]
  },
  {
    title: "Se7en", poster: "https://image.tmdb.org/t/p/w500/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg",
    clues: [
      { format: "scene", slugline: "INT. DILAPIDATED TENEMENT APARTMENT - NIGHT", action: "Continuous gray rain beats against dirty windows. Detectives with flashlights step around yellow evidence markers pointing toward grease-scrawled words on wallpaper." },
      { format: "dialogue", character: "John Doe", line: "We see a deadly sin on every street corner, in every home, and we tolerate it. We tolerate it because it's common, it's trivial." },
      { format: "prop", item: "A sealed brown cardboard delivery box resting in dead grass beneath high-voltage transmission towers" },
      { format: "metadata", year: "1995", genre: "Crime / Mystery / Thriller", details: "Directed by David Fincher" },
      { format: "signature", character: "David Mills", line: "What's in the box?!" }
    ]
  },
  {
    title: "The Hunger Games", poster: "https://image.tmdb.org/t/p/w500/apa5G43Hha7kH7wJG0gkkHT7FA9.jpg",
    clues: [
      { format: "scene", slugline: "EXT. CORNUCOPIA CLEARING - DAY", action: "Twenty-four metallic pedestals ring an artificial meadow. A digital countdown timer echoes from hidden arena speakers as youths lock eyes with central weapon caches." },
      { format: "dialogue", character: "Effie Trinket", line: "May the odds be ever in your favor." },
      { format: "prop", item: "A circular brass pin depicting an avian creature grasping an arrow in its beak" },
      { format: "metadata", year: "2012", genre: "Science Fiction / Adventure / Action / Thriller", details: "Directed by Gary Ross" },
      { format: "signature", character: "Katniss Everdeen", line: "I volunteer! I volunteer as tribute!" }
    ]
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban", poster: "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
    clues: [
      { format: "scene", slugline: "INT. EXPRESS PASSENGER COMPARTMENT - NIGHT", action: "Frost spiderwebs rapidly across rain-streaked carriage glass. The train halts over a viaduct as shadows lengthen and an unearthly chill freezes breath in the air." },
      { format: "dialogue", character: "Remus Lupin", line: "Eat it. It'll help. It's chocolate." },
      { format: "prop", item: "A folded parchment map that reveals real-time footprints and labeled names across castle corridors" },
      { format: "metadata", year: "2004", genre: "Adventure / Fantasy", details: "Directed by Alfonso Cuarón" },
      { format: "signature", character: "Sirius Black", line: "I did my waiting! Twelve years of it! In Azkaban!" }
    ]
  },
  {
    title: "The Godfather", poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    clues: [
      { format: "scene", slugline: "INT. SHADOWED EXECUTIVE STUDY - DAY", action: "Blinds block the sunny garden wedding outside. In the half-light, an aging patriarch in a tuxedo gently strokes a cat while a petitioner kisses his signet ring." },
      { format: "dialogue", character: "Michael Corleone", line: "It's not personal, Sonny. It's strictly business." },
      { format: "prop", item: "The severed head of a prized thoroughbred racehorse placed between silk bedsheets" },
      { format: "metadata", year: "1972", genre: "Drama / Crime", details: "Directed by Francis Ford Coppola" },
      { format: "signature", character: "Don Vito Corleone", line: "I'm gonna make him an offer he can't refuse." }
    ]
  },
  {
    title: "Guardians of the Galaxy Vol. 2", poster: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    clues: [
      { format: "scene", slugline: "EXT. LUSH PLANETARY CRUST - DAY", action: "Iridescent crystalline flora and pink skies surround a landing pad as an eccentric elder emerges from an egg-shaped scout craft." },
      { format: "dialogue", character: "Yondu Udonta", line: "He may have been your father, boy, but he wasn't your daddy." },
      { format: "prop", item: "A glowing red yaka whistle arrow kept in an iron quiver belt" },
      { format: "metadata", year: "2017", genre: "Science Fiction / Adventure / Action", details: "Directed by James Gunn" },
      { format: "signature", character: "Yondu Udonta", line: "I'm Mary Poppins, y'all!" }
    ]
  },
  {
    title: "Captain America: The First Avenger", poster: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    clues: [
      { format: "scene", slugline: "INT. BROOKLYN RECRUITMENT DEPOT - DAY", action: "A frail, underweight young man is handed a red '4F' rejection stamp by an unsympathetic army physician behind a wire mesh window." },
      { format: "dialogue", character: "Dr. Abraham Erskine", line: "The serum amplifies everything that is inside, so good becomes great; bad becomes worse." },
      { format: "prop", item: "An unpainted, circular concave vibranium disc displaying raw burnished metal" },
      { format: "metadata", year: "2011", genre: "Action / Adventure / Science Fiction", details: "Directed by Joe Johnston" },
      { format: "signature", character: "Steve Rogers", line: "I can do this all day." }
    ]
  },
  {
    title: "Batman Begins", poster: "https://image.tmdb.org/t/p/w500/sPX89Td70IDDjVr85jdSBb4rWGr.jpg",
    clues: [
      { format: "scene", slugline: "EXT. FROZEN HIMALAYAN LAKE - DAY", action: "Two men spar with ninjatō swords over cracking ice. One falls through the frozen surface before being pulled out by his cloaked instructor." },
      { format: "dialogue", character: "Alfred Pennyworth", line: "Why do we fall, sir? So that we can learn to pick ourselves up." },
      { format: "prop", item: "A blue mountain flower known as the rare Eastern Himalayan poppy" },
      { format: "metadata", year: "2005", genre: "Drama / Crime / Action", details: "Directed by Christopher Nolan" },
      { format: "signature", character: "Bruce Wayne", line: "It's not who I am underneath, but what I do that defines me." }
    ]
  },
  {
    title: "Spider-Man: No Way Home", poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    clues: [
      { format: "scene", slugline: "EXT. QUEENSBORO HIGHWAY OVERPASS - DAY", action: "Heavy traffic grinds to a halt as concrete pillars fracture. Four mechanical tentacles emerge through billowing smoke from beneath the bridge deck." },
      { format: "dialogue", character: "Green Goblin", line: "Poor Peter. Too weak to send me home to die." },
      { format: "prop", item: "The Machina de Kadavus, an ancient mechanical relic containing a contained containment spell" },
      { format: "metadata", year: "2021", genre: "Action / Adventure / Science Fiction", details: "Directed by Jon Watts" },
      { format: "signature", character: "May Parker", line: "With great power, there must also come great responsibility." }
    ]
  },
  {
    title: "Iron Man 2", poster: "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
    clues: [
      { format: "scene", slugline: "EXT. MONACO GRAND PRIX CIRCUIT - DAY", action: "Formula race cars scream through tight coastal curves until an electrified technician steps out onto the track, slicing a chassis in half with glowing whips." },
      { format: "dialogue", character: "Ivan Vanko", line: "If you could make God bleed, people would cease to believe in him." },
      { format: "prop", item: "A prism-like particle accelerator conduit creating a synthetic triangular element" },
      { format: "metadata", year: "2010", genre: "Adventure / Action / Science Fiction", details: "Directed by Jon Favreau" },
      { format: "signature", character: "Justin Hammer", line: "These are the Cubans, baby. This is the Cohibas, the Montecristos." }
    ]
  },
  {
    title: "Star Wars", poster: "https://image.tmdb.org/t/p/w500/fai0rspsNeJCS69wHNjOdWxcI7P.jpg",
    clues: [
      { format: "scene", slugline: "EXT. TWIN SUN HOMESTEAD - DUSK", action: "A young farmhand walks out onto desolate white desert dunes, staring toward the horizon as two glowing suns sink into the wasteland." },
      { format: "dialogue", character: "Obi-Wan Kenobi", line: "These aren't the droids you're looking for." },
      { format: "prop", item: "A cylindrical silver-and-black hilt with an emitter nozzle that projects a blue plasma blade" },
      { format: "metadata", year: "1977", genre: "Adventure / Action / Science Fiction", details: "Directed by George Lucas" },
      { format: "signature", character: "Darth Vader", line: "I find your lack of faith disturbing." }
    ]
  },
  {
    title: "Thor", poster: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    clues: [
      { format: "scene", slugline: "EXT. NEW MEXICO DESERT CRATER - NIGHT", action: "Town locals gathered around a smoking impact pit take turns attempting to pull a square stone hammer out of solid rock bedrock." },
      { format: "dialogue", character: "Odin", line: "Whosoever holds this hammer, if he be worthy, shall possess the power of Thor." },
      { format: "prop", item: "An ancient glowing cube composed of crystalline cosmic frost" },
      { format: "metadata", year: "2011", genre: "Adventure / Fantasy / Action", details: "Directed by Kenneth Branagh" },
      { format: "signature", character: "Thor", line: "This drink, I like it! Another!" }
    ]
  },
  {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl", poster: "https://image.tmdb.org/t/p/w500/poHwCZeWzJCShH7tOjg8RIoyjcw.jpg",
    clues: [
      { format: "scene", slugline: "EXT. PORT ROYAL HARBOR PIER - DAY", action: "A solitary traveler stands atop the mast of a sinking wooden dory, stepping calmly onto the wooden dock just as the crow's nest submerges beneath the tide." },
      { format: "dialogue", character: "Captain Barbossa", line: "You best start believing in ghost stories, Miss Turner. You're in one." },
      { format: "prop", item: "A carved circular Aztec gold medallion stained with a dried blood droplet" },
      { format: "metadata", year: "2003", genre: "Adventure / Fantasy / Action", details: "Directed by Gore Verbinski" },
      { format: "signature", character: "Jack Sparrow", line: "This is the day you will always remember as the day you almost caught Captain Jack Sparrow." }
    ]
  },
  {
    title: "Harry Potter and the Goblet of Fire", poster: "https://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
    clues: [
      { format: "scene", slugline: "EXT. HIGHLAND QUARRY ARENA - DAY", action: "A massive horned dragon breaks its iron tether, clawing across towering stone battlements while hunting a lone boy on a racing broomstick." },
      { format: "dialogue", character: "Lord Voldemort", line: "I can touch you now." },
      { format: "prop", item: "A rough-hewn wooden chalice overflowing with dancing blue-white flames" },
      { format: "metadata", year: "2005", genre: "Adventure / Fantasy", details: "Directed by Mike Newell" },
      { format: "signature", character: "Albus Dumbledore", line: "Did you put your name into the Goblet of Fire, Harry?!" }
    ]
  },
  {
    title: "Thor: Ragnarok", poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    clues: [
      { format: "scene", slugline: "INT. GRANDMASTER'S ARENA - DAY", action: "Neon banners line a circular stadium pit as a sheared-hair god prepares dual swords against an enormous gladiator wielding an oversized war hammer." },
      { format: "dialogue", character: "Hela", line: "I'm not a queen, or a monster. I'm the goddess of death. What were you the god of, again?" },
      { format: "prop", item: "The Crown of Surtur placed into the Eternal Flame of an underground vault" },
      { format: "metadata", year: "2017", genre: "Action / Science Fiction / Comedy / Adventure", details: "Directed by Taika Waititi" },
      { format: "signature", character: "Thor", line: "He's a friend from work!" }
    ]
  },
  {
    title: "Suicide Squad", poster: "https://image.tmdb.org/t/p/w500/sk3FZgh3sRrmr8vyhaitNobMcfh.jpg",
    clues: [
      { format: "scene", slugline: "INT. BLACK SITE HANGAR - NIGHT", action: "Military crates are popped open under spotlights, revealing custom revolvers, heavy artillery, and a baseball bat wrapped in scribbled lettering." },
      { format: "dialogue", character: "Amanda Waller", line: "I want to build a team of some very bad people who I think can do some good." },
      { format: "prop", item: "An enchanted, desiccated obsidian heart pierced by a ceremonial blade" },
      { format: "metadata", year: "2016", genre: "Action / Adventure / Fantasy", details: "Directed by David Ayer" },
      { format: "signature", character: "Deadshot", line: "So that's it? What, we some kinda Suicide Squad?" }
    ]
  },
  {
    title: "Harry Potter and the Deathly Hallows: Part 2", poster: "https://image.tmdb.org/t/p/w500/c54HpQmuwXjHq2C9wmoACjxoom3.jpg",
    clues: [
      { format: "scene", slugline: "EXT. SHATTERED CASTLE COURTYARD - DAWN", action: "Piles of pulverized masonry smolder under a leaden sky as two opposing factions watch an advancing column of cloaked figures emerge from the misty tree line." },
      { format: "dialogue", character: "Fenrir Greyback", line: "Harry Potter is dead! From this day forth, you put your faith in me." },
      { format: "prop", item: "An elder wood wand adorned with carved spherical clusters along its shaft" },
      { format: "metadata", year: "2011", genre: "Adventure / Fantasy", details: "Directed by David Yates" },
      { format: "signature", character: "Severus Snape", line: "Always." }
    ]
  },
  {
    title: "Back to the Future", poster: "https://image.tmdb.org/t/p/w500/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg",
    clues: [
      { format: "scene", slugline: "EXT. TWIN PINES MALL PARKING LOT - NIGHT", action: "A stainless-steel sports car screeches across asphalt, leaving two parallel streaks of blazing kerosene fire before vanishing into thin air." },
      { format: "dialogue", character: "Dr. Emmett Brown", line: "If my calculations are correct, when this baby hits eighty-eight miles per hour, you're gonna see some serious shit." },
      { format: "prop", item: "A three-pronged glowing glass capacitor encased behind clear shielding" },
      { format: "metadata", year: "1985", genre: "Adventure / Comedy / Science Fiction", details: "Directed by Robert Zemeckis" },
      { format: "signature", character: "Dr. Emmett Brown", line: "Roads? Where we're going, we don't need roads." }
    ]
  },
  {
    title: "Up", poster: "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg",
    clues: [
      { format: "scene", slugline: "EXT. SUBURBAN CONSTRUCTION SITE - MORNING", action: "A small two-story clapboard house groans against concrete anchors before lifting off its foundations under a canopy of thousands of helium spheres." },
      { format: "dialogue", character: "Dug", line: "I have just met you, and I love you." },
      { format: "prop", item: "A grape soda bottle cap pinned to a fabric sash with a safety pin" },
      { format: "metadata", year: "2009", genre: "Animation / Comedy / Family / Adventure", details: "Directed by Pete Docter" },
      { format: "signature", character: "Charles Muntz", line: "Adventure is out there!" }
    ]
  },
  {
    title: "Jurassic World", poster: "https://image.tmdb.org/t/p/w500/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg",
    clues: [
      { format: "scene", slugline: "EXT. OUTDOOR AQUATIC STADIUM - DAY", action: "Bleachers descend beneath water level as a massive prehistoric jaws breach the surface to consume a suspended great white shark." },
      { format: "dialogue", character: "Owen Grady", line: "You just went and made a new dinosaur? Probably not a good idea." },
      { format: "prop", item: "A two-person gyrosphere vehicle made of cracked transparent aluminum glass" },
      { format: "metadata", year: "2015", genre: "Adventure / Science Fiction / Thriller / Action", details: "Directed by Colin Trevorrow" },
      { format: "signature", character: "Dr. Henry Wu", line: "Monster is a relative term. To a canary, a cat is a monster. We're just used to being the cat." }
    ]
  },
  {
    title: "The Martian", poster: "https://image.tmdb.org/t/p/w500/fASz8A0yFE3QB6LgGoOfwvFSseV.jpg",
    clues: [
      { format: "scene", slugline: "INT. PRESSURIZED HABITAT MODULE - NIGHT", action: "A solitary botanist mixes freeze-dried waste into sterile orange soil under artificial grow lamps, coaxing tiny green sprouts from the dust." },
      { format: "dialogue", character: "Mark Watney", line: "In the face of overwhelming odds, I'm left with only one option: I'm gonna have to science the shit out of this." },
      { format: "prop", item: "A vintage 1997 uncrewed Pathfinder probe refitted with a radio transceiver" },
      { format: "metadata", year: "2015", genre: "Science Fiction / Drama / Adventure", details: "Directed by Ridley Scott" },
      { format: "signature", character: "Mark Watney", line: "I am the greatest botanist on this planet." }
    ]
  },
  {
    title: "Gladiator", poster: "https://image.tmdb.org/t/p/w500/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg",
    clues: [
      { format: "scene", slugline: "EXT. WHEAT FIELD - SUNSET", action: "A rough, scarred hand brushes gently against tall golden stalks of wheat rippling in an evening Mediterranean breeze." },
      { format: "dialogue", character: "Juba", line: "I will see you again... but not yet. Not yet." },
      { format: "prop", item: "Two carved wooden figurines depicting a smiling wife and a young boy" },
      { format: "metadata", year: "2000", genre: "Action / Drama / Adventure", details: "Directed by Ridley Scott" },
      { format: "signature", character: "Maximus Decimus Meridius", line: "Are you not entertained?!" }
    ]
  },
  {
    title: "Coco", poster: "https://image.tmdb.org/t/p/w500/6Ryitt95xrO8KXuqRGm1fUuNwqF.jpg",
    clues: [
      { format: "scene", slugline: "EXT. CEMETERY MAUSOLEUM - NIGHT", action: "Candlelight filters through stained glass onto an ornate white guitar mounted above a marble sarcophagus blanketed with marigold petals." },
      { format: "dialogue", character: "Héctor", line: "Our memories, they have to be passed down by those who knew us in life." },
      { format: "prop", item: "A torn black-and-white family portrait missing the head of the father holding a custom guitar" },
      { format: "metadata", year: "2017", genre: "Family / Animation / Music / Adventure", details: "Directed by Lee Unkrich" },
      { format: "signature", character: "Ernesto de la Cruz", line: "Seize your moment." }
    ]
  },
  {
    title: "Spider-Man", poster: "https://image.tmdb.org/t/p/w500/or6XJBVpcEbIkma0V9zshnbEtx4.jpg",
    clues: [
      { format: "scene", slugline: "INT. HIGH SCHOOL CAFETERIA - DAY", action: "A dropped metal lunch tray flips into the air; a student catches every apple, sandwich, and carton on the tray with lightning reflexes." },
      { format: "dialogue", character: "Uncle Ben", line: "These are the years when a man changes into the man he's gonna become the rest of his life." },
      { format: "prop", item: "A green metallic winged glider armed with dual miniature missile pods" },
      { format: "metadata", year: "2002", genre: "Action / Science Fiction", details: "Directed by Sam Raimi" },
      { format: "signature", character: "Uncle Ben", line: "With great power comes great responsibility." }
    ]
  },
  {
    title: "John Wick", poster: "https://image.tmdb.org/t/p/w500/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg",
    clues: [
      { format: "scene", slugline: "INT. BASEMENT CONCRETE FLOOR - NIGHT", action: "A solitary man in an apron swings a heavy sledgehammer, breaking through newly poured cement to uncover a sealed steel weapon crate." },
      { format: "dialogue", character: "Viggo Tarasov", line: "He once was an associate of ours. We called him Baba Yaga." },
      { format: "prop", item: "A velvet-lined wooden tray holding heavy gold continental coins" },
      { format: "metadata", year: "2014", genre: "Action / Thriller", details: "Directed by Chad Stahelski" },
      { format: "signature", character: "John Wick", line: "Yeah, I'm thinking I'm back." }
    ]
  },
  {
    title: "Parasite", poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    clues: [
      { format: "scene", slugline: "INT. SEMI-BASEMENT LIVING ROOM - DAY", action: "Fumigation smoke pours through a street-level window while four family members assemble cardboard pizza boxes as fast as their hands can fold." },
      { format: "dialogue", character: "Kim Ki-taek", line: "You know what kind of plan never fails? No plan at all. No plan. You know why? If you make a plan, life never works out that way." },
      { format: "prop", item: "A decorative scholars' viewing stone mounted on an ornate dark wood stand" },
      { format: "metadata", year: "2019", genre: "Comedy / Thriller / Drama", details: "Directed by Bong Joon Ho" },
      { format: "signature", character: "Kim Ki-jung", line: "Jessica, only child, Illinois, Chicago. Classmate Kim Jin-mo, he's your cousin." }
    ]
  },
  {
    title: "Ant-Man", poster: "https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg",
    clues: [
      { format: "scene", slugline: "INT. RETROFITTED BATHROOM - NIGHT", action: "A man presses two buttons on his gloves and vanishes in a flash of light, plummeting down into a bathtub as rushing tap water resembles a towering tidal wave." },
      { format: "dialogue", character: "Hank Pym", line: "I believe that everyone deserves a shot at redemption." },
      { format: "prop", item: "A glass containment cylinder holding pressurized crimson Pym particles" },
      { format: "metadata", year: "2015", genre: "Science Fiction / Adventure / Action", details: "Directed by Peyton Reed" },
      { format: "signature", character: "Scott Lang", line: "Is it too late to change the name?" }
    ]
  },
  {
    title: "Harry Potter and the Order of the Phoenix", poster: "https://image.tmdb.org/t/p/w500/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg",
    clues: [
      { format: "scene", slugline: "INT. HALL OF PROPHECY - NIGHT", action: "Towering glass shelves stretch infinitely into pitch darkness, lined with thousands of glowing, whispering crystal orbs." },
      { format: "dialogue", character: "Dolores Umbridge", line: "Deep down, you know that you deserve to be punished. Don't you, Mr. Potter?" },
      { format: "prop", item: "A black quill that carves written words directly into the back of the writer's hand" },
      { format: "metadata", year: "2007", genre: "Adventure / Fantasy", details: "Directed by David Yates" },
      { format: "signature", character: "Dolores Umbridge", line: "I must not tell lies." }
    ]
  },
  {
    title: "Wonder Woman", poster: "https://image.tmdb.org/t/p/w500/v4ncgZjG2Zu8ZW5al1vIZTsSjqX.jpg",
    clues: [
      { format: "scene", slugline: "EXT. NO MAN'S LAND - DAY", action: "A warrior in crimson and gold armor climbs a wooden ladder out of the allied trench, striding alone into an open mud field under machine-gun crossfire." },
      { format: "dialogue", character: "Steve Trevor", line: "I can save today. You can save the world." },
      { format: "prop", item: "A glowing golden rope known as the Lasso of Hestia" },
      { format: "metadata", year: "2017", genre: "Action / Adventure / Fantasy", details: "Directed by Patty Jenkins" },
      { format: "signature", character: "Diana Prince", line: "It's not about deserve; it's about what you believe. And I believe in love." }
    ]
  },
  {
    title: "Harry Potter and the Half-Blood Prince", poster: "https://image.tmdb.org/t/p/w500/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
    clues: [
      { format: "scene", slugline: "EXT. SEA CAVE BASIN - NIGHT", action: "Crashing black waves buffet a jagged sea cavern where a stone basin filled with glowing emerald potion sits isolated on a crystal island." },
      { format: "dialogue", character: "Severus Snape", line: "Did you really think that a boy like you could possibly defeat me?" },
      { format: "prop", item: "An old textbook annotated with dense handwritten margins and the spell 'Sectumsempra'" },
      { format: "metadata", year: "2009", genre: "Adventure / Fantasy", details: "Directed by David Yates" },
      { format: "signature", character: "Severus Snape", line: "You dare use my own spells against me, Potter? Yes, I'm the Half-Blood Prince." }
    ]
  },
  {
    title: "Finding Nemo", poster: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    clues: [
      { format: "scene", slugline: "EXT. THE DROP-OFF - DAY", action: "Sunlight refracts through shallow coral waters before abruptly ending at a dark vertical abyss dropping into the deep open ocean." },
      { format: "dialogue", character: "Dory", line: "When life gets you down, you know what you gotta do? Just keep swimming." },
      { format: "prop", item: "A black rubber scuba diver's mask with 'P. Sherman, 42 Wallaby Way, Sydney' stamped on the strap" },
      { format: "metadata", year: "2003", genre: "Animation / Family / Adventure", details: "Directed by Andrew Stanton" },
      { format: "signature", character: "Dory", line: "Fish are friends, not food." }
    ]
  },
  {
    title: "Star Wars: The Force Awakens", poster: "https://image.tmdb.org/t/p/w500/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
    clues: [
      { format: "scene", slugline: "EXT. GRAVEYARD OF GIANTS - DAY", action: "A solitary figure in desert wraps rappels down a rusted cable inside the skeletal steel carcass of a crashed Star Destroyer." },
      { format: "dialogue", character: "Kylo Ren", line: "Show me again, the power of the darkness, and I'll let nothing stand in our way." },
      { format: "prop", item: "A crossguard lightsaber spitting an erratic, crackling red plasma beam" },
      { format: "metadata", year: "2015", genre: "Adventure / Action / Science Fiction", details: "Directed by J.J. Abrams" },
      { format: "signature", character: "Han Solo", line: "Chewie, we're home." }
    ]
  },
  {
    title: "WALL-E", poster: "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    clues: [
      { format: "scene", slugline: "EXT. TOWERING REFUSE MOUNTAINS - DAY", action: "Tread marks wind through towering skyscrapers constructed entirely of compacted garbage cubes beneath a dust-choked reddish sky." },
      { format: "dialogue", character: "AUTO", line: "I cannot allow you to fulfill the directive. Earth will remain quarantined." },
      { format: "prop", item: "A solitary green plant seedling growing inside a worn leather work boot" },
      { format: "metadata", year: "2008", genre: "Animation / Family / Science Fiction", details: "Directed by Andrew Stanton" },
      { format: "signature", character: "Captain B. McCrea", line: "I don't want to survive. I want to live!" }
    ]
  },
  {
    title: "Logan", poster: "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
    clues: [
      { format: "scene", slugline: "EXT. SMELTING REFINERY WATER TANK - NIGHT", action: "Dust storms lash against an overturned water silo where a coughing, limping driver delivers black-market medicine to an ailing nonagenarian." },
      { format: "dialogue", character: "Charles Xavier", line: "Logan, you still have time. A life with people who love you. You should take a moment." },
      { format: "prop", item: "A solitary adamantium bullet kept inside a pocket watch casing" },
      { format: "metadata", year: "2017", genre: "Action / Drama / Science Fiction", details: "Directed by James Mangold" },
      { format: "signature", character: "Logan", line: "So, this is what it feels like." }
    ]
  },
  {
    title: "The Truman Show", poster: "https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg",
    clues: [
      { format: "scene", slugline: "EXT. SUBURBAN CUL-DE-SAC - MORNING", action: "A cheerful insurance salesman collects his morning newspaper until a heavy studio lighting rig falls out of a clear blue sky and smashes onto the street." },
      { format: "dialogue", character: "Christof", line: "We accept the reality of the world with which we're presented. It's as simple as that." },
      { format: "prop", item: "A wooden sailboat bow wedged directly into a painted acoustic sky wall" },
      { format: "metadata", year: "1998", genre: "Comedy / Drama", details: "Directed by Peter Weir" },
      { format: "signature", character: "Truman Burbank", line: "In case I don't see ya, good afternoon, good evening, and good night!" }
    ]
  },
  {
    title: "Harry Potter and the Deathly Hallows: Part 1", poster: "https://image.tmdb.org/t/p/w500/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
    clues: [
      { format: "scene", slugline: "EXT. WINDSWEPT LIMESTONE PAVEMENT - DUSK", action: "Two travelers huddle inside an enchanted protective perimeter on a desolate, fractured rock terrace under leaden gray skies." },
      { format: "dialogue", character: "Garrick Ollivander", line: "The wand resists. It desires only its true master." },
      { format: "prop", item: "A heavy golden locket bearing an emerald 'S' that whispers paranoid doubts to its wearer" },
      { format: "metadata", year: "2010", genre: "Adventure / Fantasy", details: "Directed by David Yates" },
      { format: "signature", character: "Dobby", line: "Such a beautiful place, to be with friends. Dobby is happy to be with his friend, Harry Potter." }
    ]
  },
  {
    title: "It", poster: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    clues: [
      { format: "scene", slugline: "EXT. FLOODED RESIDENTIAL CURB - RAIN", action: "A small folded paper boat rushes down a rain-slicked asphalt gutter before disappearing into the black opening of a storm drain." },
      { format: "dialogue", character: "Pennywise", line: "Take it. You want it, don't you, Georgie? Of course you do. And there's cotton candy, and rides, and all sorts of surprises down here." },
      { format: "prop", item: "A lone red helium balloon tethered to a rusted municipal drain gate" },
      { format: "metadata", year: "2017", genre: "Horror / Thriller / Drama", details: "Directed by Andy Muschietti" },
      { format: "signature", character: "Pennywise", line: "You'll float down here. We all float down here." }
    ]
  },
  {
    title: "Toy Story", poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    clues: [
      { format: "scene", slugline: "INT. SUBURBAN BEDROOM - DAY", action: "Cloud wallpaper lines the walls as various plastic figurines freeze into motionless postures the instant footsteps approach outside the door." },
      { format: "dialogue", character: "Woody", line: "You are a toy! You aren't the real thing! You're an action figure! You are a child's plaything!" },
      { format: "prop", item: "A red-and-white cardboard rocket taped with black electrical wire to a firecracker" },
      { format: "metadata", year: "1995", genre: "Family / Comedy / Animation / Adventure", details: "Directed by John Lasseter" },
      { format: "signature", character: "Buzz Lightyear", line: "To infinity... and beyond!" }
    ]
  },
  {
    title: "Captain America: The Winter Soldier", poster: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
    clues: [
      { format: "scene", slugline: "INT. GLASS ELEVATOR CAR - DAY", action: "Ten armored tactical agents crowd closely into an observation elevator, hands slowly drifting toward concealed stun batons and sidearms." },
      { format: "dialogue", character: "Alexander Pierce", line: "To build a better world sometimes means turning the old one down. And that makes enemies." },
      { format: "prop", item: "A cybernetic bionic left arm stamped with a red Soviet star at the shoulder" },
      { format: "metadata", year: "2014", genre: "Action / Adventure / Science Fiction", details: "Directed by Joe Russo" },
      { format: "signature", character: "Steve Rogers", line: "Before we get started, does anyone want to get out?" }
    ]
  },
  {
    title: "Gone Girl", poster: "https://image.tmdb.org/t/p/w500/ts996lKsxvjkO2yiYG0ht4qAicO.jpg",
    clues: [
      { format: "scene", slugline: "INT. SUBURBAN LIVING ROOM - DAY", action: "A shattered glass coffee table lies beside undisturbed silver anniversary gift wrap in an otherwise immaculate suburban home." },
      { format: "dialogue", character: "Amy Dunne", line: "There's no bullshit between us. We're not like other couples. We're partners." },
      { format: "prop", item: "An ornamental metal envelope containing an anniversary scavenger hunt clue written in red pen" },
      { format: "metadata", year: "2014", genre: "Mystery / Thriller / Drama", details: "Directed by David Fincher" },
      { format: "signature", character: "Amy Dunne", line: "I've killed for you. Who else can say that?" }
    ]
  },
  {
    title: "Monsters, Inc.", poster: "https://image.tmdb.org/t/p/w500/wFSpyMsp7H0ttERbxY7Trlv8xry.jpg",
    clues: [
      { format: "scene", slugline: "INT. FACTORY SCARE FLOOR - DAY", action: "A klaxon sounds as a mechanical overhead conveyor lowers a row of painted wooden bedroom doors directly into metal docking stations." },
      { format: "dialogue", character: "Mike Wazowski", line: "Put that thing back where it came from, or so help me!" },
      { format: "prop", item: "A bright yellow cylindrical scream canister with a rising LED pressure level" },
      { format: "metadata", year: "2001", genre: "Animation / Comedy / Family / Fantasy", details: "Directed by Pete Docter" },
      { format: "signature", character: "Henry J. Waternoose", line: "I'll kidnap a thousand children before I let this company die!" }
    ]
  },
  {
    title: "The Lion King", poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    clues: [
      { format: "scene", slugline: "EXT. ROCK PROMONTORY - SUNRISE", action: "Animals of the savanna bow low across grasslands as a shaman baboon holds an infant aloft over the tip of a jutting stone cliff." },
      { format: "dialogue", character: "Mufasa", line: "Everything you see exists together in a delicate balance. As king, you need to understand that balance." },
      { format: "prop", item: "A crushed, dust-covered tree branch resting in a dry gorge beneath stampeding hooves" },
      { format: "metadata", year: "1994", genre: "Animation / Family / Drama", details: "Directed by Roger Allers" },
      { format: "signature", character: "Scar", line: "Long live the king." }
    ]
  },
  {
    title: "The Hobbit: An Unexpected Journey", poster: "https://image.tmdb.org/t/p/w500/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
    clues: [
      { format: "scene", slugline: "INT. ROUND HILLSIDE PANTRY - NIGHT", action: "Piles of cured meats, wheels of cheese, and flagons of ale disappear down thirteen bearded throats around a cluttered wooden dining table." },
      { format: "dialogue", character: "Gandalf", line: "The world is not in your books and maps. It's out there." },
      { format: "prop", item: "An ancient Elven dagger called Sting that glows blue in the presence of orcs" },
      { format: "metadata", year: "2012", genre: "Adventure / Fantasy / Action", details: "Directed by Peter Jackson" },
      { format: "signature", character: "Bilbo Baggins", line: "I'm going on an adventure!" }
    ]
  },
  {
    title: "Fantastic Beasts and Where to Find Them", poster: "https://image.tmdb.org/t/p/w500/h6NYfVUyM6CDURtZSnBpz647Ldd.jpg",
    clues: [
      { format: "scene", slugline: "EXT. MANHATTAN BANK STEPS - DAY", action: "A small platypus-like creature scurries through legs on stone steps, greedily stuffing loose pennies, pocket watches, and gold tie pins into its pouch." },
      { format: "dialogue", character: "Newt Scamander", line: "My philosophy is that worrying means you suffer twice." },
      { format: "prop", item: "A weathered leather suitcase equipped with an 'Entertaining Muggles' flip-switch latch" },
      { format: "metadata", year: "2016", genre: "Fantasy / Adventure", details: "Directed by David Yates" },
      { format: "signature", character: "Percival Graves", line: "Will we die, just a little?" }
    ]
  },
  {
    title: "Arrival", poster: "https://image.tmdb.org/t/p/w500/pEzNVQfdzYDzVK0XqxERIw2x2se.jpg",
    clues: [
      { format: "scene", slugline: "INT. BLACK CURVED CHAMBER - DAY", action: "Linguists touch a clear atmospheric barrier inside an antigravity shaft where ink-like circular symbols blossom through white fog." },
      { format: "dialogue", character: "Louise Banks", line: "Language is the first weapon drawn in a conflict." },
      { format: "prop", item: "A dry-erase whiteboard displaying the hand-written word 'HUMAN'" },
      { format: "metadata", year: "2016", genre: "Drama / Science Fiction / Mystery", details: "Directed by Denis Villeneuve" },
      { format: "signature", character: "Louise Banks", line: "If you could see your whole life from start to finish, would you change things?" }
    ]
  },
  {
    title: "The Green Mile", poster: "https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    clues: [
      { format: "scene", slugline: "INT. COLD CORRECTIONAL DEATH ROW - NIGHT", action: "Linoleum floor tiles stretch between iron bar cells where guards watch a pet mouse push a small wooden spool across the corridor." },
      { format: "dialogue", character: "Paul Edgecomb", line: "On the day of my judgment, when I stand before God, and He asks me why did I kill one of his true miracles, what am I gonna say?" },
      { format: "prop", item: "A wet sponge placed inside a leather cap connected to heavy electric cables" },
      { format: "metadata", year: "1999", genre: "Fantasy / Drama / Crime", details: "Directed by Frank Darabont" },
      { format: "signature", character: "John Coffey", line: "I'm tired, boss. Tired of being on the road, lonely as a sparrow in the rain." }
    ]
  },
  {
    title: "The Revenant", poster: "https://image.tmdb.org/t/p/w500/ji3ecJphATlVgWNY0B0RVXZizdf.jpg",
    clues: [
      { format: "scene", slugline: "EXT. SNOW-COVERED FOREST BASIN - DAWN", action: "Breath steams in sub-zero air as a hunter claws through a frozen shallow grave, hauling his broken body toward a rushing icy river." },
      { format: "dialogue", character: "John Fitzgerald", line: "Life? What life you talking about? I got no life. I just got living." },
      { format: "prop", item: "A hollowed-out carcass of a dead stallion used as an overnight survival shelter" },
      { format: "metadata", year: "2015", genre: "Western / Drama / Adventure", details: "Directed by Alejandro G. Iñárritu" },
      { format: "signature", character: "Hugh Glass", line: "Revenge is in God's hands. Not mine." }
    ]
  },
  {
    title: "Deadpool 2", poster: "https://image.tmdb.org/t/p/w500/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
    clues: [
      { format: "scene", slugline: "EXT. DOWNTOWN CONVOY ROUTE - DAY", action: "A parachute drop goes catastrophically wrong across city streets while an armored prisoner transport truck plows through traffic below." },
      { format: "dialogue", character: "Cable", line: "Your future is dead. And I'm going to make sure it stays that way." },
      { format: "prop", item: "A futuristic dial-operated temporal sliding device worn strapped to the wrist" },
      { format: "metadata", year: "2018", genre: "Action / Comedy / Adventure", details: "Directed by David Leitch" },
      { format: "signature", character: "Wade Wilson", line: "Doing the right thing is messy. You want to save the world, you can't just look for an easy way out." }
    ]
  },
  {
    title: "Kill Bill: Vol. 1", poster: "https://image.tmdb.org/t/p/w500/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    clues: [
      { format: "scene", slugline: "INT. HOUSE OF BLUE LEAVES - NIGHT", action: "A yellow-suited fighter unsheathes a curved steel blade beneath paper lantern beams, facing eighty masked swordsmen standing across traditional tatami mats." },
      { format: "dialogue", character: "O-Ren Ishii", line: "You didn't think it was gonna be that easy, did you?" },
      { format: "prop", item: "A custom forged Hattori Hanzo katana inscribed with a lion insignia near the hilt" },
      { format: "metadata", year: "2003", genre: "Action / Crime", details: "Directed by Quentin Tarantino" },
      { format: "signature", character: "O-Ren Ishii", line: "Silly rabbit. Trix are for kids." }
    ]
  },
  {
    title: "The Shining", poster: "https://image.tmdb.org/t/p/w500/uAR0AWqhQL1hQa69UDEbb2rE5Wx.jpg",
    clues: [
      { format: "scene", slugline: "INT. GEOMETRIC-PATTERNED HOTEL CORRIDOR - DAY", action: "A plastic tricycle rolls noisily across parquet floor and muffles over carpet runners before screeching to a halt before twin girls in blue dresses." },
      { format: "dialogue", character: "Jack Torrance", line: "All work and no play makes Jack a dull boy." },
      { format: "prop", item: "A heavy fire axe wedged through splintered bathroom door panels" },
      { format: "metadata", year: "1980", genre: "Horror / Thriller", details: "Directed by Stanley Kubrick" },
      { format: "signature", character: "Jack Torrance", line: "Here's Johnny!" }
    ]
  },
  {
    title: "Batman v Superman: Dawn of Justice", poster: "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
    clues: [
      { format: "scene", slugline: "EXT. RAIN-LASHED GOTHAM ROOFTOP - NIGHT", action: "A massive searchlight cuts through storm clouds, projecting a jagged bat insignia as an armored figure waits in downpour beside heavy acoustic cannons." },
      { format: "dialogue", character: "Lex Luthor", line: "Black and blue. God versus man. Day versus night." },
      { format: "prop", item: "A custom forged tactical spear tipped with a glowing green radioactive isotope" },
      { format: "metadata", year: "2016", genre: "Action / Adventure / Fantasy", details: "Directed by Zack Snyder" },
      { format: "signature", character: "Bruce Wayne", line: "Tell me... do you bleed? You will." }
    ]
  },
  {
    title: "Get Out", poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    clues: [
      { format: "scene", slugline: "INT. SECLUDED SUBURBAN PARLOR - NIGHT", action: "A silver teaspoon rhythmically circles the rim of a porcelain teacup as a seated young man finds himself paralyzed, tears silently tracking down his face." },
      { format: "dialogue", character: "Missy Armitage", line: "Now, sink into the floor. Sink." },
      { format: "prop", item: "A vintage flash camera revealing sudden clarity and desperate screams when snapped" },
      { format: "metadata", year: "2017", genre: "Mystery / Thriller / Horror", details: "Directed by Jordan Peele" },
      { format: "signature", character: "Rod Williams", line: "I'm TS-motherfuckin'-A. We handle shit." }
    ]
  },
  {
    title: "Shrek", poster: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
    clues: [
      { format: "scene", slugline: "EXT. MUDDY SWAMP CLEARING - DAY", action: "A wooden outhouse door swings open to morning sunlight as an emerald ogre brushes his teeth with insect paste before taking a muddy outdoor bath." },
      { format: "dialogue", character: "Donkey", line: "You know what else everybody likes? Parfaits. Have you ever met a person, you say, 'Let's get some parfait,' they say, 'Hell no, I don't like no parfait'?" },
      { format: "prop", item: "A hand-painted wooden sign posted in mud reading 'Beware Ogre'" },
      { format: "metadata", year: "2001", genre: "Animation / Comedy / Fantasy / Adventure / Family", details: "Directed by Andrew Adamson" },
      { format: "signature", character: "Shrek", line: "Ogres are like onions. Onions have layers. Ogres have layers." }
    ]
  },
  {
    title: "The Incredibles", poster: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
    clues: [
      { format: "scene", slugline: "INT. MODERN METROPOLITAN HIGH-RISE - DAY", action: "A hulking, suit-wearing claims adjuster accidentally crushes an office telephone receiver to pieces within his palm out of pure moral frustration." },
      { format: "dialogue", character: "Edna Mode", line: "No capes! Isn't that my decision? Do you remember Thunderhead? Tall, storm powers? Nice man, good with kids... November 15th of '58! All was well, another day saved, when... his cape snagged on a missile fin!" },
      { format: "prop", item: "A spherical black multi-legged combat war machine designated the Omnidroid" },
      { format: "metadata", year: "2004", genre: "Action / Adventure / Animation / Family", details: "Directed by Brad Bird" },
      { format: "signature", character: "Syndrome", line: "When everyone's super, no one will be." }
    ]
  },
  {
    title: "The Amazing Spider-Man", poster: "https://image.tmdb.org/t/p/w500/jexoNYnPd6vVrmygwF6QZmWPFdu.jpg",
    clues: [
      { format: "scene", slugline: "EXT. WILLIAMSBURG BRIDGE - NIGHT", action: "Sedans dangle over the East River from burning support cables as an agile figure in athletic webbing swings underneath to rescue a child trapped in a minivan." },
      { format: "dialogue", character: "Dr. Curt Connors", line: "Human beings are frail, pathetic, weak. But what if we could make them stronger? What if we could make them better?" },
      { format: "prop", item: "A leather briefcase containing decay-rate algorithm calculations stamped 00-decay" },
      { format: "metadata", year: "2012", genre: "Action / Adventure / Science Fiction", details: "Directed by Marc Webb" },
      { format: "signature", character: "Peter Parker", line: "Secrets have a cost. They're not free. Not now, not ever." }
    ]
  },
  {
    title: "Ratatouille", poster: "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
    clues: [
      { format: "scene", slugline: "INT. PARISIAN RESTAURANT KITCHEN - NIGHT", action: "Copper pots gleam under gas flame while a clumsy garbage boy chops herbs blindly, his movements steered by tugs beneath a tall chef's toque." },
      { format: "dialogue", character: "Anton Ego", line: "In many ways, the work of a critic is easy. We risk very little, yet enjoy a position over those who offer their work and their selves to our judgment." },
      { format: "prop", item: "A layered dish of paper-thin baked squash, eggplant, and zucchini drizzled in vinaigrette" },
      { format: "metadata", year: "2007", genre: "Animation / Comedy / Family / Fantasy", details: "Directed by Brad Bird" },
      { format: "signature", character: "Chef Auguste Gusteau", line: "Anyone can cook, but only the fearless can be great." }
    ]
  },
  {
    title: "Spirited Away", poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    clues: [
      { format: "scene", slugline: "EXT. RED BRICK TUNNEL ENTRANCE - TWILIGHT", action: "A family walks through an abandoned stone gateway into an overgrown theme park where lantern fires flicker on and delicious aromas fill the empty streets." },
      { format: "dialogue", character: "Haku", line: "Once you meet someone, you never really forget them. It just takes a while for your memories to return." },
      { format: "prop", item: "A hand-spun purple thread hair tie given as a farewell keepsake" },
      { format: "metadata", year: "2001", genre: "Animation / Family / Fantasy", details: "Directed by Hayao Miyazaki" },
      { format: "signature", character: "Yubaba", line: "That's how she operates. She takes away your name and once she has it, you can never find your way home." }
    ]
  },
  {
    title: "The Empire Strikes Back", poster: "https://image.tmdb.org/t/p/w500/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg",
    clues: [
      { format: "scene", slugline: "EXT. FROZEN WASTELAND BATTLEMENTS - DAY", action: "Towering four-legged mechanical armored walkers trudge steadily through snow dunes toward power generator trenches as snowspeeders tow trip-cables around their legs." },
      { format: "dialogue", character: "Yoda", line: "Do or do not. There is no try." },
      { format: "prop", item: "An industrial carbon-freezing chamber block encasing an armored smuggler in relief" },
      { format: "metadata", year: "1980", genre: "Adventure / Action / Science Fiction", details: "Directed by Irvin Kershner" },
      { format: "signature", character: "Darth Vader", line: "No, I am your father." }
    ]
  },
  {
    title: "The Hunger Games: Catching Fire", poster: "https://image.tmdb.org/t/p/w500/vrQHDXjVmbYzadOXQ0UaObunoy2.jpg",
    clues: [
      { format: "scene", slugline: "EXT. TROPICAL ARENA CORNUCOPIA - DAY", action: "Saltwater laps against a circular wheel-and-spoke island where a massive metallic horn spins rhythmically as lightning bolts strike a designated tree on the hour." },
      { format: "dialogue", character: "Beetee", line: "Tick tock. This is a clock." },
      { format: "prop", item: "A diamond-crested wedding dress that burns away into mockingjay plumage during a television spin" },
      { format: "metadata", year: "2013", genre: "Adventure / Action / Science Fiction", details: "Directed by Francis Lawrence" },
      { format: "signature", character: "Haymitch Abernathy", line: "Remember who the real enemy is." }
    ]
  },
  {
    title: "Thor: The Dark World", poster: "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
    clues: [
      { format: "scene", slugline: "EXT. OLD ROYAL NAVAL COLLEGE - DAY", action: "Spatial anomalies invert gravity in Greenwich, lifting double-decker buses into mid-air as dark crystalline blades plunge out of the sky." },
      { format: "dialogue", character: "Loki", line: "I can assure you, brother, the sun will shine on us again." },
      { format: "prop", item: "A fluid, parasitic crimson substance known as the Aether" },
      { format: "metadata", year: "2013", genre: "Action / Adventure / Fantasy", details: "Directed by Alan Taylor" },
      { format: "signature", character: "Loki", line: "Trust my rage." }
    ]
  },
  {
    title: "Split", poster: "https://image.tmdb.org/t/p/w500/lli31lYTFpvxVBeFHWoe5PMfW5s.jpg",
    clues: [
      { format: "scene", slugline: "INT. SUBTERRANEAN BASEMENT CELL - NIGHT", action: "Three teenage girls wake trapped in a sterile cinderblock basement as a man in a neatly pressed cardigan enters, obsessively straightening items on a vanity." },
      { format: "dialogue", character: "Dennis", line: "He's done awful things to people and he'll do awful things to you." },
      { format: "prop", item: "A handwritten spiral notebook titled 'The 24th' detailing physiological changes" },
      { format: "metadata", year: "2017", genre: "Horror / Thriller", details: "Directed by M. Night Shyamalan" },
      { format: "signature", character: "The Beast", line: "The broken are the more evolved. Rejoice." }
    ]
  },
  {
    title: "Zootopia", poster: "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
    clues: [
      { format: "scene", slugline: "INT. DEPARTMENT OF MAMMAL VEHICLES - DAY", action: "Fluorescent bulbs hum over endless lines of frustrated citizens as an employee moves at excruciating, frame-by-frame slowness to stamp a single paper form." },
      { format: "dialogue", character: "Judy Hopps", line: "Life's a little bit messy. We all make mistakes. No matter what type of animal you are, change starts with you." },
      { format: "prop", item: "A plastic carrot-shaped voice-recording pen with a playback button" },
      { format: "metadata", year: "2016", genre: "Animation / Adventure / Family / Comedy", details: "Directed by Byron Howard" },
      { format: "signature", character: "Nick Wilde", line: "It's called a hustle, sweetheart." }
    ]
  },
  {
    title: "The Hangover", poster: "https://image.tmdb.org/t/p/w500/A0uS9rHR56FeBtpjVki16M5xxSW.jpg",
    clues: [
      { format: "scene", slugline: "INT. TRASHED CASINO PENTHOUSE - MORNING", action: "Smoldering debris, empty bottles, and shattered furniture litter a luxury suite where a rooster struts past a sleeping guest and a live tiger roams the bathroom." },
      { format: "dialogue", character: "Mr. Chow", line: "Toodle-oo, motherfuckers!" },
      { format: "prop", item: "A hospital patient wristband labeled 'St. John's Hospital' worn beside an empty ring box" },
      { format: "metadata", year: "2009", genre: "Comedy", details: "Directed by Todd Phillips" },
      { format: "signature", character: "Alan Garner", line: "We're the three best friends that anybody could have." }
    ]
  },
  {
    title: "The Silence of the Lambs", poster: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    clues: [
      { format: "scene", slugline: "INT. MAXIMUM SECURITY CELL CORRIDOR - NIGHT", action: "A young trainee walks down a dim underground corridor of barred cells until reaching the final cell fronted by thick, seamless sheets of transparent plexiglass." },
      { format: "dialogue", character: "Dr. Hannibal Lecter", line: "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti." },
      { format: "prop", item: "A dried Death's-head Hawkmoth chrysalis retrieved from a victim's throat" },
      { format: "metadata", year: "1991", genre: "Crime / Thriller / Drama", details: "Directed by Jonathan Demme" },
      { format: "signature", character: "Dr. Hannibal Lecter", line: "Well, Clarice... have the lambs stopped screaming?" }
    ]
  },
  {
    title: "La La Land", poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    clues: [
      { format: "scene", slugline: "EXT. OVERLOOK HIGHWAY BENCH - TWILIGHT", action: "Against a deep purple sky overlooking Los Angeles city lights, a woman in a yellow dress and a man in two-tone spectator shoes tap-dance in unison beside a lamppost." },
      { format: "dialogue", character: "Sebastian Wilder", line: "It's conflict and it's compromise, and it's just... it's new every time. It's brand new every night." },
      { format: "prop", item: "A neon door sign reading 'Seb's' featuring a stylized music note" },
      { format: "metadata", year: "2016", genre: "Comedy / Drama / Romance", details: "Directed by Damien Chazelle" },
      { format: "signature", character: "Mia Dolan", line: "Here's to the ones who dream, foolish as they may seem." }
    ]
  },
  {
    title: "The Maze Runner", poster: "https://image.tmdb.org/t/p/w500/ode14q7WtDugFDp78fo9lCsmay9.jpg",
    clues: [
      { format: "scene", slugline: "EXT. THE GLADE CLEARING - DUSK", action: "Massive concrete doors hundred feet high grind along iron floor tracks, sealing shut with a deafening boom as gears echo from deep within outer corridors." },
      { format: "dialogue", character: "Newt", line: "No one has ever survived a night in the Maze." },
      { format: "prop", item: "A cylindrical bio-mechanical tracking device stamped with the serial marking 'W.C.K.D.'" },
      { format: "metadata", year: "2014", genre: "Action / Mystery / Science Fiction / Thriller", details: "Directed by Wes Ball" },
      { format: "signature", character: "Ava Paige", line: "Wicked is good." }
    ]
  },
  {
    title: "The Imitation Game", poster: "https://image.tmdb.org/t/p/w500/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg",
    clues: [
      { format: "scene", slugline: "INT. BLETCHLEY PARK HUT 8 - NIGHT", action: "Dozens of red electro-mechanical rotors click and spin in rhythmic unison across a towering steel frame as mathematical crosswords litter nearby wooden desks." },
      { format: "dialogue", character: "Joan Clarke", line: "Sometimes it is the people no one imagines anything of who do the things that no one can imagine." },
      { format: "prop", item: "An electromechanical cryptanalytic machine named Christopher filled with spinning brass drums" },
      { format: "metadata", year: "2014", genre: "History / Drama / Thriller / War", details: "Directed by Morten Tyldum" },
      { format: "signature", character: "Alan Turing", line: "Are you paying attention?" }
    ]
  },
  {
    title: "Jurassic Park", poster: "https://image.tmdb.org/t/p/w500/63viWuPfYQjRYLSZSZNq7dglJP5.jpg",
    clues: [
      { format: "scene", slugline: "EXT. TOUR CAR ROADWAY - NIGHT", action: "Tropical rain pours over stranded tour vehicles as concentric ripples distort the surface of two plastic cups of water sitting on the dashboard." },
      { format: "dialogue", character: "Dr. Ian Malcolm", line: "Your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should." },
      { format: "prop", item: "A modified Barbasol shaving cream aerosol can concealing a refrigerated specimen chamber" },
      { format: "metadata", year: "1993", genre: "Adventure / Science Fiction", details: "Directed by Steven Spielberg" },
      { format: "signature", character: "John Hammond", line: "Welcome to Jurassic Park." }
    ]
  },
  {
    title: "Kingsman: The Secret Service", poster: "https://image.tmdb.org/t/p/w500/r6q9wZK5a2K51KFj4LWVID6Ja1r.jpg",
    clues: [
      { format: "scene", slugline: "INT. SOUTH LONDON PUB - DAY", action: "A refined gentleman in a bespoke double-breasted suit uses the curved hook of an umbrella to lock the deadbolts behind a rowdy gang of youths." },
      { format: "dialogue", character: "Richmond Valentine", line: "Mankind is the virus, and our planet is the host. You need to cull the herd to save the species." },
      { format: "prop", item: "A pair of Oxford dress shoes featuring a spring-loaded blade coated in lethal neurotoxin" },
      { format: "metadata", year: "2015", genre: "Crime / Comedy / Action / Adventure", details: "Directed by Matthew Vaughn" },
      { format: "signature", character: "Harry Hart", line: "Manners maketh man." }
    ]
  },
  {
    title: "The Prestige", poster: "https://image.tmdb.org/t/p/w500/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg",
    clues: [
      { format: "scene", slugline: "EXT. COLORADO SPRINGS LABORATORY - NIGHT", action: "Massive electrical arcs discharge into the winter night sky as an experimental field glows with hundreds of wireless light bulbs planted into the snow." },
      { format: "dialogue", character: "Nikola Tesla", line: "The secret impresses no one. The trick you use it for is everything." },
      { format: "prop", item: "A leather-bound diary locked with a cipher keyword that must be read chronologically backwards" },
      { format: "metadata", year: "2006", genre: "Drama / Mystery / Science Fiction", details: "Directed by Christopher Nolan" },
      { format: "signature", character: "Cutter", line: "Now you're looking for the secret. But you won't find it of course, because you're not really looking. You want to be fooled." }
    ]
  },
  {
    title: "Bohemian Rhapsody", poster: "https://image.tmdb.org/t/p/w500/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
    clues: [
      { format: "scene", slugline: "INT. RURAL RECORDING FARM - DAY", action: "A microphone dangles out of an open loft window into the farmyard air while vocal tracks are repeatedly recorded across deteriorating audio tapes." },
      { format: "dialogue", character: "Ray Foster", line: "Mark these words: no one will play a six-minute pseudo-operatic rock song. It's commercially impossible." },
      { format: "prop", item: "A white grand piano topped with half-full plastic beer cups and a silver cigarette case" },
      { format: "metadata", year: "2018", genre: "Music / Drama", details: "Directed by Bryan Singer" },
      { format: "signature", character: "Freddie Mercury", line: "I won't be a rock star. I will be a legend." }
    ]
  },
  {
    title: "Dunkirk", poster: "https://image.tmdb.org/t/p/w500/b4Oe15CGLL61Ped0RAS9JpqdmCt.jpg",
    clues: [
      { format: "scene", slugline: "EXT. EAST MOLE BREAKWATER - DAY", action: "Thousands of helmeted troops stand in narrow queues along an exposed wooden pier under strafing enemy aircraft diving through gray clouds." },
      { format: "dialogue", character: "Mr. Dawson", line: "There's no hiding from this, son. We have a job to do." },
      { format: "prop", item: "A chalk-marked fuel gauge on the dashboard of an engine-cut Supermarine Spitfire" },
      { format: "metadata", year: "2017", genre: "War / Action / Drama", details: "Directed by Christopher Nolan" },
      { format: "signature", character: "Commander Bolton", line: "Home." }
    ]
  },
  {
    title: "Schindler's List", poster: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    clues: [
      { format: "scene", slugline: "EXT. GHETTO COBBLESTONE STREET - DAY", action: "Amidst grayscale chaos and ransacked apartments, a solitary young girl in a vibrant crimson coat walks unhurried through smoking debris." },
      { format: "dialogue", character: "Itzhak Stern", line: "The list is an absolute good. The list is life. All around its margins lies the gulf." },
      { format: "prop", item: "An enamelware cooking pot stamped with an enamel factory manufacturer crest" },
      { format: "metadata", year: "1993", genre: "Drama / History / War", details: "Directed by Steven Spielberg" },
      { format: "signature", character: "Oskar Schindler", line: "Whoever saves one life saves the world entire." }
    ]
  },
  {
    title: "Frozen", poster: "https://image.tmdb.org/t/p/w500/itAKcobTYGpYT8Phwjd8c9hleTo.jpg",
    clues: [
      { format: "scene", slugline: "INT. PALACE BALLROOM - NIGHT", action: "During a royal celebration, an ungloved palm strikes the floor in frustration, sending sharp spikes of crystalline ice erupting outward in a protective ring." },
      { format: "dialogue", character: "Olaf", line: "Some people are worth melting for." },
      { format: "prop", item: "A pair of embroidered velvet gloves worn to suppress uncontrollable elemental touch" },
      { format: "metadata", year: "2013", genre: "Animation / Family / Adventure / Fantasy", details: "Directed by Jennifer Lee" },
      { format: "signature", character: "Elsa", line: "The cold never bothered me anyway." }
    ]
  },
  {
    title: "Spider-Man: Into the Spider-Verse", poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    clues: [
      { format: "scene", slugline: "EXT. BROOKLYN SKYSCRAPER ROOFTOP - NIGHT", action: "A boy in a hooded sweatshirt and painted mask leaps backwards off a glass ledge, descending upwards into inverted neon city skyscrapers." },
      { format: "dialogue", character: "Peter B. Parker", line: "That's all it is, Miles. A leap of faith." },
      { format: "prop", item: "A black-and-red spray-painted hooded superhero suit worn over athletic sneakers" },
      { format: "metadata", year: "2018", genre: "Animation / Action / Adventure / Science Fiction", details: "Directed by Bob Persichetti" },
      { format: "signature", character: "Miles Morales", line: "Anyone can wear the mask. You can wear the mask." }
    ]
  },
  {
    title: "Saving Private Ryan", poster: "https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
    clues: [
      { format: "scene", slugline: "EXT. OMAHA BEACH SHORELINE - MORNING", action: "Ramps drop on metal landing craft into heavy surf as water turns crimson under intense machine-gun crossfire raking along coastal shingle." },
      { format: "dialogue", character: "Captain Miller", line: "I just know that every man I kill, the farther away from home I feel." },
      { format: "prop", item: "A dented standard-issue metal canteen wrapped around a glass mirror used for trench scouting" },
      { format: "metadata", year: "1998", genre: "War / Drama / History", details: "Directed by Steven Spielberg" },
      { format: "signature", character: "Captain Miller", line: "Earn this... earn it." }
    ]
  },
  {
    title: "Spider-Man: Far From Home", poster: "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    clues: [
      { format: "scene", slugline: "EXT. GRAND CANAL - DAY", action: "Venetian bell towers crumble into ancient waterways as an immense entity formed of churning water and debris rises over historic bridges." },
      { format: "dialogue", character: "Mysterio", line: "People need to believe, and nowadays, they'll believe anything." },
      { format: "prop", item: "A pair of vintage pilot sunglasses integrating tactical satellite defense overrides" },
      { format: "metadata", year: "2019", genre: "Action / Adventure / Science Fiction", details: "Directed by Jon Watts" },
      { format: "signature", character: "Mysterio", line: "Never apologize for being the smartest guy in the room." }
    ]
  },
  {
    title: "Venom", poster: "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    clues: [
      { format: "scene", slugline: "INT. SAN FRANCISCO APARTMENT - NIGHT", action: "A sweat-drenched reporter raids his refrigerator in manic desperation, shoving frozen meat and garbage into his mouth as an internal voice growls violently." },
      { format: "dialogue", character: "Carlton Drake", line: "Look at this world. What do you see? Disease, war, environmental collapse. We have to adapt, or we die." },
      { format: "prop", item: "A glass vacuum jar containing an amorphous, crawling black extraterrestrial sludge" },
      { format: "metadata", year: "2018", genre: "Science Fiction / Action", details: "Directed by Ruben Fleischer" },
      { format: "signature", character: "Venom", line: "We are Venom." }
    ]
  },
  {
    title: "Pirates of the Caribbean: Dead Man's Chest", poster: "https://image.tmdb.org/t/p/w500/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
    clues: [
      { format: "scene", slugline: "EXT. TROPICAL SHALLOWS - DAY", action: "Three men engage in a chaotic three-way sword fight atop the rolling rim of a detached wooden water wheel tumbling across a sandy beach." },
      { format: "dialogue", character: "Davy Jones", line: "Do you fear death? Do you fear that dark abyss? All your deeds laid bare, all your sins punished?" },
      { format: "prop", item: "A glass jar filled with damp sand carried as a protective talisman" },
      { format: "metadata", year: "2006", genre: "Adventure / Fantasy / Action", details: "Directed by Gore Verbinski" },
      { format: "signature", character: "Davy Jones", line: "Life is cruel. Why should the afterlife be any different?" }
    ]
  },
  {
    title: "Catch Me If You Can", poster: "https://image.tmdb.org/t/p/w500/ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg",
    clues: [
      { format: "scene", slugline: "INT. AIRPORT TERMINAL CONCOURSE - DAY", action: "Flanked by eight glamorous Pan Am flight attendants in tailored blue uniforms, a young pilot smiles through flashbulbs while federal agents scan the crowds in vain." },
      { format: "dialogue", character: "Carl Hanratty", line: "People only know what you tell them, Carl. You want to believe him, because he makes you feel special." },
      { format: "prop", item: "An adhesive decal peeled from a plastic toy model airplane applied directly to a forged corporate check" },
      { format: "metadata", year: "2002", genre: "Drama / Crime", details: "Directed by Steven Spielberg" },
      { format: "signature", character: "Frank Abagnale Jr.", line: "Two little mice fell in a bucket of cream. The first mouse quickly gave up and drowned. The second mouse wouldn't quit." }
    ]
  },
  {
    title: "Lucy", poster: "https://image.tmdb.org/t/p/w500/kRbpUTRNm6QbLQFPFWUcNC4czEm.jpg",
    clues: [
      { format: "scene", slugline: "INT. TAIPEI HOTEL SUITE - DAY", action: "Armed bodyguards watch as a terrified young woman with a steel briefcase handcuffed to her wrist sits paralyzed before an intimidating crime lord." },
      { format: "dialogue", character: "Professor Norman", line: "It is estimated that most human beings only use ten percent of their brain's capacity. Imagine if we could access one hundred percent." },
      { format: "prop", item: "A synthetic plastic pouch leaking glowing neon-blue granular CPH4 crystals" },
      { format: "metadata", year: "2014", genre: "Action / Science Fiction", details: "Directed by Luc Besson" },
      { format: "signature", character: "Lucy", line: "Time is the only true unit of measure." }
    ]
  },
  {
    title: "Ready Player One", poster: "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    clues: [
      { format: "scene", slugline: "INT. CRAMPED SHIPPING CONTAINER - DAY", action: "A young man straps on a haptic visor and omnidirectional treadmill inside an abandoned van wedged into a precarious stack of rusted modular homes." },
      { format: "dialogue", character: "James Halliday", line: "I created the OASIS because I never felt at home in the real world. I didn't know how to connect to the people there." },
      { format: "prop", item: "A golden egg-shaped digital artifact etched with glowing cryptographic circuit patterns" },
      { format: "metadata", year: "2018", genre: "Adventure / Action / Science Fiction", details: "Directed by Steven Spielberg" },
      { format: "signature", character: "James Halliday", line: "Reality is the only thing that's real." }
    ]
  },
  {
    title: "I Am Legend", poster: "https://image.tmdb.org/t/p/w500/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg",
    clues: [
      { format: "scene", slugline: "EXT. DESOLATE FIFTH AVENUE - DAY", action: "Deer leap across overgrown Manhattan tarmac cracked by wild tall grass while a solitary hunter tracks them from the hood of a red sports car." },
      { format: "dialogue", character: "Robert Neville", line: "My name is Robert Neville. I am a survivor living in New York City. I am broadcasting on all AM frequencies." },
      { format: "prop", item: "A glass vial of amber experimental compound labeled Compound 6" },
      { format: "metadata", year: "2007", genre: "Drama / Science Fiction / Thriller", details: "Directed by Francis Lawrence" },
      { format: "signature", character: "Robert Neville", line: "I'm listening." }
    ]
  },
  {
    title: "Return of the Jedi", poster: "https://image.tmdb.org/t/p/w500/jQYlydvHm3kUix1f8prMucrplhm.jpg",
    clues: [
      { format: "scene", slugline: "INT. DESERT CRIME PALACE - NIGHT", action: "A hooded figure in black tunics strides past pig-faced guards into a shadowy, smoke-filled hall where a monstrous slug lounges upon an elevated dais." },
      { format: "dialogue", character: "Emperor Palpatine", line: "Your hate has made you powerful. Now, fulfill your destiny and take your father's place at my side!" },
      { format: "prop", item: "A custom-built lightsaber hilt featuring a ringed neck that emits a brilliant green plasma blade" },
      { format: "metadata", year: "1983", genre: "Adventure / Action / Science Fiction", details: "Directed by Richard Marquand" },
      { format: "signature", character: "Luke Skywalker", line: "I am a Jedi, like my father before me." }
    ]
  },
  {
    title: "Baby Driver", poster: "https://image.tmdb.org/t/p/w500/tYzFuYXmT8LOYASlFCkaPiAFAl0.jpg",
    clues: [
      { format: "scene", slugline: "EXT. ATLANTA INTERSECTION - DAY", action: "A red sedan slides in precision 180-degree reverse maneuvers between police cruisers, tires screeching in perfect synchronization to upbeat soul music." },
      { format: "dialogue", character: "Doc", line: "One more job and you're out. But until then, you work for me." },
      { format: "prop", item: "A vintage white portable click-wheel audio player plugged into foam-padded earphones" },
      { format: "metadata", year: "2017", genre: "Action / Crime", details: "Directed by Edgar Wright" },
      { format: "signature", character: "Doc", line: "There's nothing wrong with a little song in your heart." }
    ]
  },
  {
    title: "Captain Marvel", poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    clues: [
      { format: "scene", slugline: "INT. BLOCKBUSTER VIDEO STORE - NIGHT", action: "A figure in an emerald military flight suit crashes through a retail skylight, brushing shattered glass off cardboard movie displays while holding a photon rifle." },
      { format: "dialogue", character: "Talos", line: "Your people didn't tell you the truth about where you came from, did they?" },
      { format: "prop", item: "A modified analog numeric pager wired to broadcast across galactic frequencies" },
      { format: "metadata", year: "2019", genre: "Action / Adventure / Science Fiction", details: "Directed by Ryan Fleck" },
      { format: "signature", character: "Carol Danvers", line: "I have nothing to prove to you." }
    ]
  },
  {
    title: "Now You See Me", poster: "https://image.tmdb.org/t/p/w500/tWsNYbrqy1p1w6K9zRk0mSchztT.jpg",
    clues: [
      { format: "scene", slugline: "INT. LAS VEGAS CASINO ARENA - NIGHT", action: "Four performers activate an oversized teleportation helmet on a randomly selected audience member, raining three million euros down onto thousands of cheering spectators." },
      { format: "dialogue", character: "J. Daniel Atlas", line: "First rule of magic: always be the smartest guy in the room." },
      { format: "prop", item: "An embossed black tarot card stamped with an ancient all-seeing eye seal" },
      { format: "metadata", year: "2013", genre: "Thriller / Crime", details: "Directed by Louis Leterrier" },
      { format: "signature", character: "J. Daniel Atlas", line: "The closer you look, the less you see." }
    ]
  },
  {
    title: "Whiplash", poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    clues: [
      { format: "scene", slugline: "INT. REHEARSAL STUDIO - NIGHT", action: "Sweat and blood drip onto a snare drum skin as a young percussionist hammers sixteenth-note tempos under the unrelenting glow of a harsh music stand lamp." },
      { format: "dialogue", character: "Terence Fletcher", line: "There are no two words in the English language more harmful than 'good job'." },
      { format: "prop", item: "A pitcher of ice water used to plunge blistered, bleeding knuckles between practice sessions" },
      { format: "metadata", year: "2014", genre: "Drama / Music / Thriller", details: "Directed by Damien Chazelle" },
      { format: "signature", character: "Terence Fletcher", line: "Were you rushing, or were you dragging?" }
    ]
  },
  {
    title: "World War Z", poster: "https://image.tmdb.org/t/p/w500/aCnVdvExw6UWSeQfr0tUH3jr4qG.jpg",
    clues: [
      { format: "scene", slugline: "EXT. JERUSALEM PERIMETER WALL - DAY", action: "Singing over loudspeakers draws thousands of infected bodies into a living pyramid that claws upward over a towering concrete containment barricade." },
      { format: "dialogue", character: "Jurgen Warmbrunn", line: "If nine of us with the same information arrive at the same conclusion, it's the duty of the tenth man to disagree, no matter how improbable it seems." },
      { format: "prop", item: "A roll of thick silver duct tape and glossy magazines wrapped around forearms as makeshift bite guards" },
      { format: "metadata", year: "2013", genre: "Action / Horror / Science Fiction", details: "Directed by Marc Forster" },
      { format: "signature", character: "Gerry Lane", line: "Movement is life." }
    ]
  },
  {
    title: "The Hunger Games: Mockingjay - Part 1", poster: "https://image.tmdb.org/t/p/w500/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg",
    clues: [
      { format: "scene", slugline: "INT. SUBTERRANEAN DISTRICT 13 BUNKER - DAY", action: "Thousands of citizens in matching gray tunics sit orderly in tiered underground chambers while a production crew tests military broadcast feeds." },
      { format: "dialogue", character: "Plutarch Heavensbee", line: "We need to make her into a symbol, not an icon. An icon can be shattered; a symbol endures." },
      { format: "prop", item: "A custom matte-black tactical recurve bow fitted with explosive-tipped arrows" },
      { format: "metadata", year: "2014", genre: "Science Fiction / Adventure / Thriller", details: "Directed by Francis Lawrence" },
      { format: "signature", character: "Katniss Everdeen", line: "If we burn, you burn with us!" }
    ]
  },
  {
    title: "Big Hero 6", poster: "https://image.tmdb.org/t/p/w500/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
    clues: [
      { format: "scene", slugline: "INT. INDUSTRIAL EXPO ARENA - NIGHT", action: "Thousands of tiny black magnetic link-bots swarm and solidify into shifting architectural shapes controlled by a teen prodigy wearing a neural transmitter headband." },
      { format: "dialogue", character: "Baymax", line: "On a scale of one to ten, how would you rate your pain?" },
      { format: "prop", item: "A green plastic healthcare programming card marked with a heart insignia" },
      { format: "metadata", year: "2014", genre: "Adventure / Family / Animation / Action / Comedy", details: "Directed by Chris Williams" },
      { format: "signature", character: "Baymax", line: "I am satisfied with my care." }
    ]
  },
  {
    title: "Spider-Man 2", poster: "https://image.tmdb.org/t/p/w500/aGuvNAaaZuWXYQQ6N2v7DeuP6mB.jpg",
    clues: [
      { format: "scene", slugline: "EXT. ELEVATED SUBWAY TRACK - DAY", action: "A costumed vigilante anchors multiple web lines to bridge structures on either side of the track, tearing his suit and straining against the momentum of a runaway passenger train." },
      { format: "dialogue", character: "Doctor Octopus", line: "The power of the sun... in the palm of my hand." },
      { format: "prop", item: "A burnt neural inhibitor chip formerly mounted at the base of the skull" },
      { format: "metadata", year: "2004", genre: "Action / Adventure / Science Fiction", details: "Directed by Sam Raimi" },
      { format: "signature", character: "Doctor Octopus", line: "I will not die a monster." }
    ]
  },
  {
    title: "Alien", poster: "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
    clues: [
      { format: "scene", slugline: "INT. COMMERCIAL FREIGHTER MESS HALL - NIGHT", action: "A crew laughs over pasta until an officer violently convulses, crashing backward onto the table as his sternum fractures from the inside out." },
      { format: "dialogue", character: "Ash", line: "I admire its purity. A survivor... unclouded by conscience, remorse, or delusions of morality." },
      { format: "prop", item: "A bulky analog handheld motion tracker displaying distance pings across corridors" },
      { format: "metadata", year: "1979", genre: "Horror / Science Fiction", details: "Directed by Ridley Scott" },
      { format: "signature", character: "Ellen Ripley", line: "This is Ripley, last survivor of the Nostromo, signing off." }
    ]
  },
  {
    title: "Rogue One: A Star Wars Story", poster: "https://image.tmdb.org/t/p/w500/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg",
    clues: [
      { format: "scene", slugline: "INT. REBEL CORVETTE AIRLOCK CORRIDOR - DARKNESS", action: "Trapped troopers pound against a jammed blast door in pitch blackness until a rhythmic mechanical respirator breathes and a crimson plasma blade ignites in the shadows." },
      { format: "dialogue", character: "Chirrut Îmwe", line: "I am one with the Force, and the Force is with me." },
      { format: "prop", item: "A heavy data tape cartridge holding encrypted orbital battlestation schematics" },
      { format: "metadata", year: "2016", genre: "Action / Adventure / Science Fiction", details: "Directed by Gareth Edwards" },
      { format: "signature", character: "Jyn Erso", line: "Rebellions are built on hope." }
    ]
  },
  {
    title: "Memento", poster: "https://image.tmdb.org/t/p/w500/nzlv62aC0octS5AklAiWpXLX9Z0.jpg",
    clues: [
      { format: "scene", slugline: "INT. ROADSIDE MOTEL ROOM - DAY", action: "A man stares into a bathroom mirror, reading lines of black ink tattooed in reverse lettering across his chest and arms to decipher his own identity." },
      { format: "dialogue", character: "Leonard Shelby", line: "Memory can change the shape of a room; it can change the color of a car. And memories can be distorted. They're just an interpretation, they're not a record." },
      { format: "prop", item: "A Polaroid photograph developing backwards while being waved in reverse motion" },
      { format: "metadata", year: "2000", genre: "Mystery / Thriller", details: "Directed by Christopher Nolan" },
      { format: "signature", character: "Leonard Shelby", line: "We all need mirrors to remind ourselves who we are." }
    ]
  },
  {
    title: "Eternal Sunshine of the Spotless Mind", poster: "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
    clues: [
      { format: "scene", slugline: "EXT. FROZEN RIVER CRACK - DAY", action: "Two coats lay flat across the frozen surface of the Charles River, watching the gray clouds pass as hairline ice fractures spiderweb beside their heads." },
      { format: "dialogue", character: "Clementine Kruczynski", line: "Too many guys think I'm a concept, or I complete them, or I'm gonna make them alive. But I'm just a fucked-up girl who's lookin' for my own peace of mind." },
      { format: "prop", item: "A trash bag filled with cassette tapes and personal mementos labeled for neural memory wiping" },
      { format: "metadata", year: "2004", genre: "Science Fiction / Drama / Romance", details: "Directed by Michel Gondry" },
      { format: "signature", character: "Clementine Kruczynski", line: "Meet me in Montauk." }
    ]
  },
  {
    title: "Star Wars: The Last Jedi", poster: "https://image.tmdb.org/t/p/w500/ySaaKHOLAQU5HoZqWmzDIj1VvZ1.jpg",
    clues: [
      { format: "scene", slugline: "EXT. SALT PLAINS OF CRAIT - DAY", action: "Speeder craft skim across a snow-white surface, carving bright crimson furrows into the red soil beneath towering assault walkers." },
      { format: "dialogue", character: "Kylo Ren", line: "Let the past die. Kill it, if you have to. That's the only way to become what you were meant to be." },
      { format: "prop", item: "Ancient leather-bound Jedi texts housed within the hollow trunk of a coastal uneti tree" },
      { format: "metadata", year: "2017", genre: "Adventure / Action / Science Fiction", details: "Directed by Rian Johnson" },
      { format: "signature", character: "Luke Skywalker", line: "No one's ever really gone." }
    ]
  },
  {
    title: "Gravity", poster: "https://image.tmdb.org/t/p/w500/kZ2nZw8D681aphje8NJi8EfbL1U.jpg",
    clues: [
      { format: "scene", slugline: "EXT. LOW EARTH ORBIT - SPACE", action: "A satellite array disintegrates under a cloud of hypervelocity orbital debris, sending an unmoored engineer spinning uncontrollably into the black void." },
      { format: "dialogue", character: "Matt Kowalski", line: "You've got to learn to let go." },
      { format: "prop", item: "A handheld handheld nitrogen thruster maneuvering unit used to navigate across vacuum" },
      { format: "metadata", year: "2013", genre: "Science Fiction / Thriller / Drama", details: "Directed by Alfonso Cuarón" },
      { format: "signature", character: "Ryan Stone", line: "Either I make it down there in one piece and I have one hell of a story to tell, or I burn up in the next ten minutes." }
    ]
  },
  {
    title: "X-Men: Days of Future Past", poster: "https://image.tmdb.org/t/p/w500/tYfijzolzgoMOtegh1Y7j2Enorg.jpg",
    clues: [
      { format: "scene", slugline: "INT. PENTAGON CORRIDOR KITCHEN - DAY", action: "Bullets freeze mid-flight and guard caps float weightlessly as a silver-jacketed youth runs along the tiled walls, casually redirecting projectile paths." },
      { format: "dialogue", character: "Charles Xavier", line: "Just because someone stumbles and loses their path, doesn't mean they're lost forever." },
      { format: "prop", item: "A towering wooden-and-plastic Sentinel prototype designed to hunt targets without metallic components" },
      { format: "metadata", year: "2014", genre: "Action / Adventure / Science Fiction", details: "Directed by Bryan Singer" },
      { format: "signature", character: "Charles Xavier", line: "Countless choices define our fate: each choice, each moment, a ripple in the river of time." }
    ]
  },
  {
    title: "The Departed", poster: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    clues: [
      { format: "scene", slugline: "INT. BOSTON POLICE ELEVATOR - DAY", action: "An undercover operative holds his mole captive at gunpoint until the elevator doors slide open onto an executive floor, instantly shattering the standoff." },
      { format: "dialogue", character: "Frank Costello", line: "I don't want to be a product of my environment. I want my environment to be a product of me." },
      { format: "prop", item: "An audio cassette recording of intercepted mob phone calls mailed inside an unmarked manila envelope" },
      { format: "metadata", year: "2006", genre: "Drama / Thriller / Crime", details: "Directed by Martin Scorsese" },
      { format: "signature", character: "Frank Costello", line: "When you decide to be something, you can be it. That's what they don't tell you in the church." }
    ]
  },
  {
    title: "Man of Steel", poster: "https://image.tmdb.org/t/p/w500/8GFtkImmK0K1VaUChR0n9O61CFU.jpg",
    clues: [
      { format: "scene", slugline: "EXT. KANSAS GRAIN CORNFIELD - DAY", action: "A boy cowers inside an overturned school bus in a rushing river until a young farmhand effortlessly lifts the chassis up out of the swirling water." },
      { format: "dialogue", character: "General Zod", line: "I exist only to protect Krypton. That is the sole purpose for which I was born. And every action I take, no matter how violent or how cruel, is for the greater good of my people." },
      { format: "prop", item: "A translucent geometric command key bearing a House of El glyph" },
      { format: "metadata", year: "2013", genre: "Action / Adventure / Science Fiction", details: "Directed by Zack Snyder" },
      { format: "signature", character: "Jor-El", line: "You will give the people of Earth an ideal to strive towards. They will race behind you, they will stumble, they will fall. But in time, they will join you in the sun." }
    ]
  },
  {
    title: "Léon: The Professional", poster: "https://image.tmdb.org/t/p/w500/bxB2q91nKYp8JNzqE7t7TWBVupB.jpg",
    clues: [
      { format: "scene", slugline: "INT. APARTMENT BUILDING HALLWAY - DAY", action: "A solitary hitman drinks whole milk while watching through a cracked doorway as corrupt DEA agents storm a neighbor's flat with shotguns." },
      { format: "dialogue", character: "Mathilda", line: "Is life always this hard, or is it just when you're a kid?" },
      { format: "prop", item: "A potted Chinese evergreen houseplant kept meticulously watered in the window" },
      { format: "metadata", year: "1994", genre: "Crime / Drama / Action", details: "Directed by Luc Besson" },
      { format: "signature", character: "Norman Stansfield", line: "Everyone!" }
    ]
  },
  {
    title: "The Grand Budapest Hotel", poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    clues: [
      { format: "scene", slugline: "INT. MOUNTAIN RESORT LOBBY - DAY", action: "Pastel pink and velvet crimson corridors bustled with bellboys and concierges bowing politely to aging aristocratic dowagers." },
      { format: "dialogue", character: "Monsieur Gustave H.", line: "There are still faint glimmers of civilization left in this barbaric slaughterhouse that was once known as humanity. Indeed that's what we provide in our own modest, humble, insignificantly little way." },
      { format: "prop", item: "A Renaissance oil painting depicting a noble youth titled Boy with Apple" },
      { format: "metadata", year: "2014", genre: "Comedy / Drama", details: "Directed by Wes Anderson" },
      { format: "signature", character: "Monsieur Gustave H.", line: "Rudeness is merely the expression of fear. People fear they won't get what they want. The most dreadful and unattractive person only needs to be loved, and they will open up like a flower." }
    ]
  },
  {
    title: "Skyfall", poster: "https://image.tmdb.org/t/p/w500/d0IVecFQvsGdSbnMAHqiYsNYaJT.jpg",
    clues: [
      { format: "scene", slugline: "EXT. HIGHLAND ESTATE GROUNDS - DUSK", action: "An armed agent and an elderly gamekeeper wire handmade pipe bombs and nail shrapnel to floorboards inside a stone manor house under Scottish moor mist." },
      { format: "dialogue", character: "Raoul Silva", line: "She sent you off to me, knowing you're not ready, knowing you're likely to die. Mommy was very bad." },
      { format: "prop", item: "A vintage silver Aston Martin DB5 fitted with concealed front machine-gun barrels" },
      { format: "metadata", year: "2012", genre: "Action / Adventure / Thriller", details: "Directed by Sam Mendes" },
      { format: "signature", character: "James Bond", line: "Some men are coming to kill us. We're going to kill them first." }
    ]
  },
  {
    title: "Charlie and the Chocolate Factory", poster: "https://image.tmdb.org/t/p/w500/iKP6wg3c6COUe8gYutoGG7qcPnO.jpg",
    clues: [
      { format: "scene", slugline: "INT. CONFECTIONERY MEADOW - DAY", action: "A swirling brown sugar river cascades over a chocolate waterfall while tiny red-suited workers sing rhythmically along spun-sugar banks." },
      { format: "dialogue", character: "Willy Wonka", line: "Everything in this room is eatable, even I'm eatable! But that is called cannibalism, my dear children, and is in fact frowned upon in most societies." },
      { format: "prop", item: "A shimmering foil Golden Ticket nestled beneath a chocolate bar wrapper" },
      { format: "metadata", year: "2005", genre: "Adventure / Comedy / Family / Fantasy", details: "Directed by Tim Burton" },
      { format: "signature", character: "Willy Wonka", line: "Good morning, starshine, the earth says hello!" }
    ]
  },
  {
    title: "Despicable Me", poster: "https://image.tmdb.org/t/p/w500/b1BT309QWjtFUlJPLmXmrcHOWEL.jpg",
    clues: [
      { format: "scene", slugline: "INT. SUBTERRANEAN LAIR ASSEMBLY - DAY", action: "Hundreds of small yellow capsule workers in denim overalls cheer wildly as a villain in a gray turtleneck unveils a blueprint for stealing the Earth's moon." },
      { format: "dialogue", character: "Vector", line: "I'm committing crimes with both direction and magnitude! Oh yeah!" },
      { format: "prop", item: "A handheld freeze ray weapon with an ice-crystal cooling canister" },
      { format: "metadata", year: "2010", genre: "Animation / Comedy / Crime / Science Fiction / Family", details: "Directed by Chris Renaud" },
      { format: "signature", character: "Gru", line: "We are going to steal... the moon!" }
    ]
  },
  {
    title: "Star Wars: Episode I - The Phantom Menace", poster: "https://image.tmdb.org/t/p/w500/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg",
    clues: [
      { format: "scene", slugline: "EXT. DESERT ARENA CIRCUIT - DAY", action: "Two roaring jet turbine engines bound by energy couplings drag a tiny open cockpit pod across sandstone canyons before thousands of cheering spectators." },
      { format: "dialogue", character: "Qui-Gon Jinn", line: "Your focus determines your reality." },
      { format: "prop", item: "A dual-bladed lightsaber hilt igniting two connected crimson energy beams" },
      { format: "metadata", year: "1999", genre: "Adventure / Action / Science Fiction", details: "Directed by George Lucas" },
      { format: "signature", character: "Qui-Gon Jinn", line: "There's always a bigger fish." }
    ]
  },
  {
    title: "Toy Story 3", poster: "https://image.tmdb.org/t/p/w500/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
    clues: [
      { format: "scene", slugline: "INT. MUNICIPAL INCINERATOR - NIGHT", action: "A conveyor belt drops broken playthings down a steep slope toward a glowing vortex of fire as abandoned companions clasp plastic hands in acceptance." },
      { format: "dialogue", character: "Lotso", line: "We're all just trash waiting to be thrown away! That's all a toy is!" },
      { format: "prop", item: "A taped cardboard college moving box with the word 'ATTIC' crossed out in marker" },
      { format: "metadata", year: "2010", genre: "Animation / Family / Comedy", details: "Directed by Lee Unkrich" },
      { format: "signature", character: "Woody", line: "So long, partner." }
    ]
  },
  {
    title: "Beauty and the Beast", poster: "https://image.tmdb.org/t/p/w500/hKegSKIDep2ewJWPUQD7u0KqFIp.jpg",
    clues: [
      { format: "scene", slugline: "INT. FORBIDDEN WEST WING - NIGHT", action: "Cold wind whips through broken balcony lancets, scattering dark blue curtains around a slashed royal portrait and an isolated table holding a glass cloche." },
      { format: "dialogue", character: "Gaston", line: "It's not right for a woman to read. Soon she starts getting ideas and thinking." },
      { format: "prop", item: "An enchanted crimson rose dropping glowing petals beneath a protective glass bell jar" },
      { format: "metadata", year: "2017", genre: "Family / Fantasy / Romance", details: "Directed by Bill Condon" },
      { format: "signature", character: "Beast", line: "You must learn to think of others before yourself." }
    ]
  },
  {
    title: "V for Vendetta", poster: "https://image.tmdb.org/t/p/w500/1avD1JeaRiJX5M4ahPdZPypGoGN.jpg",
    clues: [
      { format: "scene", slugline: "EXT. PARLIAMENT PLAZA - MIDNIGHT", action: "A crowd numbering in the tens of thousands stands completely silent in black trench coats and porcelain smiling masks as the midnight bells strike." },
      { format: "dialogue", character: "Valerie Page", line: "Our integrity sells for so little, but it's all we really have. It is the very last inch of us." },
      { format: "prop", item: "A flawless Scarlet Carson rose placed beside a victim marked for assassination" },
      { format: "metadata", year: "2006", genre: "Action / Thriller / Science Fiction", details: "Directed by James McTeigue" },
      { format: "signature", character: "V", line: "Remember, remember, the fifth of November, the gunpowder treason and plot." }
    ]
  },
  {
    title: "Black Swan", poster: "https://image.tmdb.org/t/p/w500/viWheBd44bouiLCHgNMvahLThqx.jpg",
    clues: [
      { format: "scene", slugline: "INT. BACKSTAGE REHEARSAL MIRRORS - DAY", action: "A ballerina inspects bleeding hangnails under harsh vanity bulbs, her reflection lingering motionless for a split second after she turns away." },
      { format: "dialogue", character: "Thomas Leroy", line: "Perfection is not just about control. It's also about letting go. Surprise yourself so you can surprise the audience." },
      { format: "prop", item: "A jagged triangular shard of a shattered backstage dressing room mirror" },
      { format: "metadata", year: "2010", genre: "Drama / Thriller / Horror", details: "Directed by Darren Aronofsky" },
      { format: "signature", character: "Nina Sayers", line: "I was perfect." }
    ]
  },
  {
    title: "Reservoir Dogs", poster: "https://image.tmdb.org/t/p/w500/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg",
    clues: [
      { format: "scene", slugline: "INT. EMPTY BRICK WAREHOUSE - DAY", action: "A wounded man in a blood-soaked black suit groans across concrete floor ramps while his partner frantically paces between hearse rollers." },
      { format: "dialogue", character: "Mr. Pink", line: "You don't need a gun to be a professional. You need to keep your head cool." },
      { format: "prop", item: "A yellow can of gasoline and a straight razor retrieved from a black boot" },
      { format: "metadata", year: "1992", genre: "Crime / Thriller", details: "Directed by Quentin Tarantino" },
      { format: "signature", character: "Mr. Blonde", line: "Are you gonna bark all day, little doggie, or are you gonna bite?" }
    ]
  },
  {
    title: "Pirates of the Caribbean: At World's End", poster: "https://image.tmdb.org/t/p/w500/jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg",
    clues: [
      { format: "scene", slugline: "EXT. CALM OF WORLD'S END - TWILIGHT", action: "A three-masted galleon rests upside down in total stillness on an endless mirror of glassy water until a green flash ruptures the evening sun." },
      { format: "dialogue", character: "Lord Cutler Beckett", line: "The world is no longer that big, Mr. Turner. The world is quite small. And what used to be vast is now governed." },
      { format: "prop", item: "A brass pocket navigational compass that points directly toward what the holder desires most" },
      { format: "metadata", year: "2007", genre: "Adventure / Fantasy / Action", details: "Directed by Gore Verbinski" },
      { format: "signature", character: "Hector Barbossa", line: "The world's still the same. There's just... less in it." }
    ]
  },
  {
    title: "Spider-Man 3", poster: "https://image.tmdb.org/t/p/w500/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg",
    clues: [
      { format: "scene", slugline: "EXT. GOTHIC CHURCH BELFRY - RAIN", action: "Thunder roars as an agonized costumed figure thrashes against a swinging iron clapper, sound waves violently ripping black oily tendrils off his skin." },
      { format: "dialogue", character: "Eddie Brock", line: "You want forgiveness? Get religion." },
      { format: "prop", item: "A glass canister containing a shifting, aggressive jet-black extraterrestrial symbiote" },
      { format: "metadata", year: "2007", genre: "Action / Adventure / Science Fiction", details: "Directed by Sam Raimi" },
      { format: "signature", character: "Peter Parker", line: "Whatever comes our way, whatever battle we have raging inside us, we always have a choice." }
    ]
  },
  {
    title: "The Hobbit: The Battle of the Five Armies", poster: "https://image.tmdb.org/t/p/w500/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
    clues: [
      { format: "scene", slugline: "EXT. FROZEN RIVER WATERFALL - DAY", action: "Two armored champions duel with massive heavy broadswords across jagged floes of breaking river ice sliding toward a sheer mountain cataract." },
      { format: "dialogue", character: "Thorin Oakenshield", line: "I will not part with a single coin. Not one piece of it!" },
      { format: "prop", item: "The glowing white Arkenstone gemstone, the radiant Heart of the Mountain" },
      { format: "metadata", year: "2014", genre: "Action / Adventure / Fantasy", details: "Directed by Peter Jackson" },
      { format: "signature", character: "Thorin Oakenshield", line: "If more people valued home above gold, this world would be a merrier place." }
    ]
  },
  {
    title: "A Quiet Place", poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    clues: [
      { format: "scene", slugline: "INT. FARMHOUSE BASEMENT - NIGHT", action: "Water floods across basement floorboards as a mother in silent labor bites down on a cloth, desperately avoiding any sound while an armored ear clicks nearby." },
      { format: "dialogue", character: "Lee Abbott", line: "I love you. I have always loved you." },
      { format: "prop", item: "A modified hearing aid that emits high-frequency screeching feedback through an amplifier" },
      { format: "metadata", year: "2018", genre: "Horror / Drama / Science Fiction", details: "Directed by John Krasinski" },
      { format: "signature", character: "Evelyn Abbott", line: "Who are we if we can't protect them?" }
    ]
  },
  {
    title: "Blade Runner 2049", poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    clues: [
      { format: "scene", slugline: "EXT. DUST-CHOKED LAS VEGAS RUINS - DAY", action: "A solitary investigator in a shearling coat strides through radioactive orange fog beneath colossal, crumbling art-deco statues of reclining women." },
      { format: "dialogue", character: "Rick Deckard", line: "I had your job once. I was good at it." },
      { format: "prop", item: "A hand-carved wooden toy horse inscribed with the date 6 10 21 on its base" },
      { format: "metadata", year: "2017", genre: "Science Fiction / Drama", details: "Directed by Denis Villeneuve" },
      { format: "signature", character: "Officer K", line: "All the best memories are hers." }
    ]
  },
  {
    title: "Her", poster: "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
    clues: [
      { format: "scene", slugline: "INT. HIGH-RISE APARTMENT - NIGHT", action: "Soft pastel city lights blur outside floor-to-ceiling windows while a mustachioed man in high-waisted trousers speaks into a tiny wireless earpiece." },
      { format: "dialogue", character: "Samantha", line: "The past is just a story we tell ourselves." },
      { format: "prop", item: "A pocket-sized leather-cased camera device pinned to a shirt pocket to provide eyes on the world" },
      { format: "metadata", year: "2013", genre: "Romance / Science Fiction / Drama", details: "Directed by Spike Jonze" },
      { format: "signature", character: "Theodore Twombly", line: "I've never loved anyone the way I love you." }
    ]
  },
  {
    title: "The Hateful Eight", poster: "https://image.tmdb.org/t/p/w500/jIywvdPjia2t3eKYbjVTcwBQlG8.jpg",
    clues: [
      { format: "scene", slugline: "INT. MINNIE'S HABERDASHERY - DAY", action: "A blizzard howls against barricaded wooden shutters while eight heavily armed strangers sit watching each other over bowls of hot stew." },
      { format: "dialogue", character: "John Ruth", line: "When that door barks, you gotta nail it shut with two pieces of wood!" },
      { format: "prop", item: "A forged personal correspondence letter purportedly signed by Abraham Lincoln" },
      { format: "metadata", year: "2015", genre: "Drama / Mystery / Western", details: "Directed by Quentin Tarantino" },
      { format: "signature", character: "Major Marquis Warren", line: "Move a little strange, you're gonna get a bullet. Not a warning, not a question... a bullet." }
    ]
  },
  {
    title: "Dune", poster: "https://image.tmdb.org/t/p/w500/v1tRXZ4JtD2Iv6fjkPvT4GiwslV.jpg",
    clues: [
      { format: "scene", slugline: "EXT. ROLLING SPICE DUNES - DAY", action: "Rhythmic percussive thumps echo across shifting sands before an immense subterranean crest rises, swallowing an industrial harvester whole." },
      { format: "dialogue", character: "Paul Atreides", line: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration." },
      { format: "prop", item: "A milky white crysknife carved from the tooth of a giant sandworm" },
      { format: "metadata", year: "2021", genre: "Science Fiction / Adventure", details: "Directed by Denis Villeneuve" },
      { format: "signature", character: "Chani", line: "This is only the beginning." }
    ]
  },
  {
    title: "Cars", poster: "https://image.tmdb.org/t/p/w500/2Touk3m5gzsqr1VsvxypdyHY5ci.jpg",
    clues: [
      { format: "scene", slugline: "EXT. DESERT HIGHWAY CROSSROADS - SUNSET", action: "A bright red stock car drags a heavy steel paving machine across cracked asphalt through a sleepy forgotten neon junction." },
      { format: "dialogue", character: "Mater", line: "I'm happier than a tornado in a trailer park!" },
      { format: "prop", item: "The Piston Cup championship trophy sitting empty beside three dirt track racing tires" },
      { format: "metadata", year: "2006", genre: "Animation / Adventure / Comedy / Family", details: "Directed by John Lasseter" },
      { format: "signature", character: "Lightning McQueen", line: "Ka-chow!" }
    ]
  },
  {
    title: "Edge of Tomorrow", poster: "https://image.tmdb.org/t/p/w500/nBM9MMa2WCwvMG4IJ3eiGUdbPe6.jpg",
    clues: [
      { format: "scene", slugline: "EXT. NORMANDY DROP ZONE - MORNING", action: "Dropships plunge through flak bursts as soldiers in mechanical exo-suits hit the sand under a swarm of razor-tentacled burrowing organisms." },
      { format: "dialogue", character: "Rita Vrataski", line: "Come find me when you wake up." },
      { format: "prop", item: "An oversized helicopter rotor blade refashioned into a two-handed combat broadsword" },
      { format: "metadata", year: "2014", genre: "Action / Science Fiction", details: "Directed by Doug Liman" },
      { format: "signature", character: "William Cage", line: "Live. Die. Repeat." }
    ]
  },
  {
    title: "Kill Bill: Vol. 2", poster: "https://image.tmdb.org/t/p/w500/2yhg0mZQMhDyvUQ4rG1IZ4oIA8L.jpg",
    clues: [
      { format: "scene", slugline: "INT. SIX FEET UNDERGROUND - NIGHT", action: "Total darkness inside a nailed wooden pine coffin; wood splinters and dirt cascades as knuckles drive punch after punch into the lid." },
      { format: "dialogue", character: "Elle Driver", line: "That's right. I killed your master. And now I'm gonna kill you too, with his own sword." },
      { format: "prop", item: "A glass jar housing a venomous black mamba hidden inside a satchel of cash" },
      { format: "metadata", year: "2004", genre: "Action / Crime / Thriller", details: "Directed by Quentin Tarantino" },
      { format: "signature", character: "The Bride", line: "The Five Point Palm Exploding Heart Technique." }
    ]
  },
  {
    title: "Blade Runner", poster: "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
    clues: [
      { format: "scene", slugline: "EXT. RAIN-SLICKED CITY ROOFTOP - NIGHT", action: "Perpetual acid rain washes over gargoyles while an injured synthetic hunter sits slumped against pipes, cradling a white dove in his palm." },
      { format: "dialogue", character: "Roy Batty", line: "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion." },
      { format: "prop", item: "A tiny folded silver foil origami unicorn left outside an apartment threshold" },
      { format: "metadata", year: "1982", genre: "Science Fiction / Drama / Thriller", details: "Directed by Ridley Scott" },
      { format: "signature", character: "Roy Batty", line: "All those moments will be lost in time, like tears in rain. Time to die." }
    ]
  },
  {
    title: "Toy Story 2", poster: "https://image.tmdb.org/t/p/w500/4rbcp3ng8n1MKHjpeqW0L7Fnpzz.jpg",
    clues: [
      { format: "scene", slugline: "INT. RESTORER'S WORKSHOP - NIGHT", action: "Under an illuminated magnifying lamp, delicate cotton swabs buff faded enamel boots and fine brushes apply glossy paint to scuffed plastic hair." },
      { format: "dialogue", character: "Stinky Pete", line: "Do you really think you'll be his favorite forever? He's growing up, and there's nothing you can do about it." },
      { format: "prop", item: "A framed black-and-white promotional record sleeve for a vintage puppet variety show" },
      { format: "metadata", year: "1999", genre: "Animation / Comedy / Family", details: "Directed by John Lasseter" },
      { format: "signature", character: "Jessie", line: "When somebody loved me, everything was beautiful." }
    ]
  },
  {
    title: "Star Wars: Episode III - Revenge of the Sith", poster: "https://image.tmdb.org/t/p/w500/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg",
    clues: [
      { format: "scene", slugline: "EXT. MUSTAFAR MINING COMPLEX - NIGHT", action: "Spumes of molten lava splash against industrial shielding as two former brothers-in-arms cross blue energy blades over a disintegrating metal bridge." },
      { format: "dialogue", character: "Emperor Palpatine", line: "Did you ever hear the tragedy of Darth Plagueis the Wise? It's not a story the Jedi would tell you." },
      { format: "prop", item: "A polished black cybernetic helmet lowering into place with a mechanical hiss and locking seal" },
      { format: "metadata", year: "2005", genre: "Adventure / Action / Science Fiction", details: "Directed by George Lucas" },
      { format: "signature", character: "Obi-Wan Kenobi", line: "You were the chosen one! It was said that you would destroy the Sith, not join them!" }
    ]
  },
  {
    title: "Hacksaw Ridge", poster: "https://image.tmdb.org/t/p/w500/fnOMP6mjmOmZwmlC1n0K7ivrzt1.jpg",
    clues: [
      { format: "scene", slugline: "EXT. MAEDA ESCARPMENT - NIGHT", action: "Artillery craters smoke beneath jagged cliff faces as a solitary unarmed combat medic drags wounded men through blood-soaked mud to lower them down on rope slings." },
      { format: "dialogue", character: "Desmond Doss", line: "While everybody else is taking life, I'm going to be saving it. With the world so set on tearing itself apart, it don't seem like such a bad thing to want to put a little bit of it back together." },
      { format: "prop", item: "A pocket-sized pocket Bible carrying a photograph of a smiling sweetheart slipped into the cover" },
      { format: "metadata", year: "2016", genre: "Drama / History / War", details: "Directed by Mel Gibson" },
      { format: "signature", character: "Desmond Doss", line: "Please, Lord, help me get one more." }
    ]
  },
  {
    title: "Pirates of the Caribbean: On Stranger Tides", poster: "https://image.tmdb.org/t/p/w500/keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
    clues: [
      { format: "scene", slugline: "EXT. WHITE-CAPPED SHALLOWS - NIGHT", action: "Rowboats rock on glassy water under flickering torches as luminous predatory sirens circle beneath the surface before lunging onto the gunwales." },
      { format: "dialogue", character: "Blackbeard", line: "If I don't kill a man every now and then, they forget who I am." },
      { format: "prop", item: "A pair of engraved silver chalices belonging to Ponce de León required for eternal youth" },
      { format: "metadata", year: "2011", genre: "Adventure / Action / Fantasy", details: "Directed by Rob Marshall" },
      { format: "signature", character: "Jack Sparrow", line: "The fountain does test you. A tear of a mermaid, and two chalices of silver." }
    ]
  },
  {
    title: "Once Upon a Time... in Hollywood", poster: "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
    clues: [
      { format: "scene", slugline: "EXT. CIELO DRIVE RESIDENCE - NIGHT", action: "Neon signs hum against sunset hills as a battered yellow sports coupe idles outside a secluded Hollywood driveway under the summer haze." },
      { format: "dialogue", character: "Cliff Booth", line: "You're a good friend, Rick. Try not to worry so much." },
      { format: "prop", item: "An authentic military flamethrower stored inside a residential garden tool shed" },
      { format: "metadata", year: "2019", genre: "Comedy / Drama / Thriller", details: "Directed by Quentin Tarantino" },
      { format: "signature", character: "Rick Dalton", line: "Anybody hurt? Well, the girl on the lawn had a lot of trouble, and the guy in the pool is incinerated." }
    ]
  },
  {
    title: "Aquaman", poster: "https://image.tmdb.org/t/p/w500/ufl63EFcc5XpByEV2Ecdw6WJZAI.jpg",
    clues: [
      { format: "scene", slugline: "EXT. DEEP OCEAN TRENCH - NIGHT", action: "A solitary red flare illuminates thousands of horrific bioluminescent amphibian monsters swarming down through pitch-black abyssal currents." },
      { format: "dialogue", character: "Queen Atlanna", line: "Atlantis has always had a king. Now it needs something more." },
      { format: "prop", item: "The golden Trident of Atlan forged from Poseidon's sacred steel" },
      { format: "metadata", year: "2018", genre: "Action / Adventure / Fantasy", details: "Directed by James Wan" },
      { format: "signature", character: "Arthur Curry", line: "I'm no king. I am a protector of the deep." }
    ]
  },
  {
    title: "Men in Black", poster: "https://image.tmdb.org/t/p/w500/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg",
    clues: [
      { format: "scene", slugline: "INT. WHITE SUBTERRANEAN IMMIGRATION TERMINAL - DAY", action: "Clad in immaculate tailored black suits, agents sit at minimalist spherical desks while multi-limbed extraterrestrials process through customs turnstiles." },
      { format: "dialogue", character: "Agent K", line: "A person is smart. People are dumb, panicky dangerous animals and you know it." },
      { format: "prop", item: "A silver cylindrical neuralyzer pen fitted with dials to wipe short-term memory" },
      { format: "metadata", year: "1997", genre: "Action / Adventure / Comedy / Science Fiction", details: "Directed by Barry Sonnenfeld" },
      { format: "signature", character: "Agent J", line: "You know what the difference is between you and me? I make this look good." }
    ]
  },
  {
    title: "The Terminator", poster: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
    clues: [
      { format: "scene", slugline: "EXT. TECH NOIR ALLEYWAY - NIGHT", action: "Neon reflections shimmer across wet pavement as shotgun blasts echo through back exits, followed by the heavy, mechanical footsteps of an unblinking leather-jacketed pursuit." },
      { format: "dialogue", character: "Kyle Reese", line: "Listen, and understand! That Terminator is out there! It can't be bargained with. It can't be reasoned with. It doesn't feel pity, or remorse, or fear. And it absolutely will not stop, ever, until you are dead." },
      { format: "prop", item: "A blood-soaked local telephone directory ripped open to the residential 'Connor' listings" },
      { format: "metadata", year: "1984", genre: "Action / Thriller / Science Fiction", details: "Directed by James Cameron" },
      { format: "signature", character: "The Terminator", line: "I'll be back." }
    ]
  },
  {
    title: "300", poster: "https://image.tmdb.org/t/p/w500/h7Lcio0c9ohxPhSZg42eTlKIVVY.jpg",
    clues: [
      { format: "scene", slugline: "EXT. THERMOPYLAE COASTAL PASS - DAY", action: "A bronze wall of overlapping round shields locks together against waves of Persian immortals as spears strike out in unison above crashing sea spray." },
      { format: "dialogue", character: "Xerxes", line: "There will be no glory in your sacrifice. I will erase even the memory of Sparta from the histories." },
      { format: "prop", item: "A crimson heavy woolen cape paired with a notched bronze Corinthian helmet" },
      { format: "metadata", year: "2007", genre: "Action / Adventure / War", details: "Directed by Zack Snyder" },
      { format: "signature", character: "King Leonidas", line: "This is Sparta!" }
    ]
  },
  {
    title: "Alice in Wonderland", poster: "https://image.tmdb.org/t/p/w500/o0kre9wRCZz3jjSjaru7QU0UtFz.jpg",
    clues: [
      { format: "scene", slugline: "EXT. MOSS-GROWN TEA PARTY GROUNDS - DAY", action: "An endless banquet table set with chipped fine porcelain teacups winds through oversized twisting mushrooms beneath a fractured sky." },
      { format: "dialogue", character: "The Mad Hatter", line: "Why is a raven like a writing desk?" },
      { format: "prop", item: "A miniature glass bottle bearing a printed paper label that reads 'DRINK ME'" },
      { format: "metadata", year: "2010", genre: "Family / Fantasy / Adventure", details: "Directed by Tim Burton" },
      { format: "signature", character: "The Red Queen", line: "Off with their heads!" }
    ]
  },
  {
    title: "Sherlock Holmes", poster: "https://image.tmdb.org/t/p/w500/momkKuWburNTqKBF6ez7rvhYVhE.jpg",
    clues: [
      { format: "scene", slugline: "INT. SHADOWY PUNCHING RING - NIGHT", action: "Time slows to a fraction of a second as an analytical bare-knuckle pugilist methodically calculates fractures to the ear, ribs, and knee before executing the blow." },
      { format: "dialogue", character: "Dr. John Watson", line: "Holmes, you have been lying in that chair for three days doing nothing but shooting the walls." },
      { format: "prop", item: "A brass radio-controlled explosive trigger device concealed beneath Parliament" },
      { format: "metadata", year: "2009", genre: "Action / Adventure / Mystery", details: "Directed by Guy Ritchie" },
      { format: "signature", character: "Sherlock Holmes", line: "Data, data, data! I cannot make bricks without clay." }
    ]
  },
  {
    title: "Terminator 2: Judgment Day", poster: "https://image.tmdb.org/t/p/w500/jFTVD4XoWQTcg7wdyJKa8PEds5q.jpg",
    clues: [
      { format: "scene", slugline: "INT. STEEL SMELTING MILL - NIGHT", action: "Molten metal casts a fiery glow over catwalks where a liquid metal pursuer re-forms from shattered chrome droplets after freezing in liquid nitrogen." },
      { format: "dialogue", character: "Sarah Connor", line: "Watching John with the machine, it was suddenly so clear. The Terminator would never stop. It would never leave him, and it would never hurt him, never shout at him, or get drunk and hit him..." },
      { format: "prop", item: "A severed mechanical endoskeleton arm and damaged neural-net microprocessor retrieved from a vault" },
      { format: "metadata", year: "1991", genre: "Action / Thriller / Science Fiction", details: "Directed by James Cameron" },
      { format: "signature", character: "The Terminator", line: "Hasta la vista, baby." }
    ]
  },
  {
    title: "Jumanji: Welcome to the Jungle",
    poster: "https://image.tmdb.org/t/p/w500/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg",
    clues: [
      { format: "scene", slugline: "INT. SCHOOL BASEMENT DETENTION ROOM - DAY", action: "Four teenagers clearing junk out of an old storage room dust off a vintage gray video game console plugged into a CRT television." },
      { format: "dialogue", character: "Franklin 'Mouse' Finbar", line: "Cake makes me explode! It is my character's weakness!" },
      { format: "prop", item: "An emerald jewel known as the Jaguar's Eye that curses the surrounding jungle" },
      { format: "metadata", year: "2017", genre: "Adventure / Comedy / Fantasy", details: "Directed by Jake Kasdan" },
      { format: "signature", character: "Dr. Smolder Bravestone", line: "Smoldering intensity." }
    ]
  },
  {
    title: "GoodFellas",
    poster: "https://image.tmdb.org/t/p/w500/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg",
    clues: [
      { format: "scene", slugline: "INT. COPACABANA NIGHTCLUB KITCHEN - NIGHT", action: "A young couple is guided seamlessly down back stairs, through noisy dishwashing lines and frying stations, emerging at a velvet front-row table." },
      { format: "dialogue", character: "Tommy DeVito", line: "I'm funny how, I mean funny like I'm a clown, I amuse you? I make you laugh, I'm here to fuckin' amuse you?" },
      { format: "prop", item: "A razor blade used to slice garlic paper-thin so it liquifies in olive oil" },
      { format: "metadata", year: "1990", genre: "Drama / Crime", details: "Directed by Martin Scorsese" },
      { format: "signature", character: "Henry Hill", line: "As far back as I can remember, I always wanted to be a gangster." }
    ]
  },
  {
    title: "The Amazing Spider-Man 2",
    poster: "https://image.tmdb.org/t/p/w500/bU7nTmvmy0h3VUP01v1T2imgH6N.jpg",
    clues: [
      { format: "scene", slugline: "INT. CLOCK TOWER GEAR VAULT - NIGHT", action: "A web-line shoots downward in the shape of an outstretched hand toward a falling girl amidst massive grinding bronze gears and snapped cables." },
      { format: "dialogue", character: "Electro", line: "You're a fraud! You didn't remember me! You're a fake!" },
      { format: "prop", item: "A flash drive containing the hidden sub-rail subway laboratory coordinates 'Roosevelt'" },
      { format: "metadata", year: "2014", genre: "Action / Adventure / Science Fiction", details: "Directed by Marc Webb" },
      { format: "signature", character: "Gwen Stacy", line: "What makes life valuable is that it doesn't last forever, what makes it precious is that it ends." }
    ]
  },
  {
    title: "How to Train Your Dragon",
    poster: "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
    clues: [
      { format: "scene", slugline: "EXT. FORBIDDEN COVE - DAY", action: "An apprentice blacksmith extends an open hand toward a pinned, pitch-black reptile, turning his head away to offer complete vulnerability." },
      { format: "dialogue", character: "Stoick the Vast", line: "When you carry this axe, you carry all of us with you." },
      { format: "prop", item: "A hand-cranked leather mechanical prosthetic tail fin mounted on a stirrup rod" },
      { format: "metadata", year: "2010", genre: "Fantasy / Adventure / Animation / Family", details: "Directed by Dean DeBlois" },
      { format: "signature", character: "Hiccup", line: "I wouldn't kill him because he looked just as frightened as I was. I looked at him, and I saw myself." }
    ]
  },
  {
    title: "Twilight",
    poster: "https://image.tmdb.org/t/p/w500/3Gkb6jm6962ADUPaCBqzz9CTbn9.jpg",
    clues: [
      { format: "scene", slugline: "EXT. HIGH SCHOOL PARKING LOT - DAY", action: "An out-of-control van skids across ice toward a seated girl until a pale student lunges forward, stopping the steel body with his bare hand." },
      { format: "dialogue", character: "Edward Cullen", line: "I don't have the strength to stay away from you anymore." },
      { format: "prop", item: "An old wooden truck key handed over outside an evergreen-surrounded home" },
      { format: "metadata", year: "2008", genre: "Fantasy / Drama / Romance", details: "Directed by Catherine Hardwicke" },
      { format: "signature", character: "Edward Cullen", line: "And so the lion fell in love with the lamb." }
    ]
  },
  {
    title: "Star Wars: Episode II - Attack of the Clones",
    poster: "https://image.tmdb.org/t/p/w500/oZNPzxqM2s5DyVWab09NTQScDQt.jpg",
    clues: [
      { format: "scene", slugline: "EXT. OCEANIC TIPOCA CITY - DAY", action: "Torrents of rain lash a futuristic aquatic stilt-city where millions of identical white-armored soldiers march in rigid grid formation onto star transports." },
      { format: "dialogue", character: "Anakin Skywalker", line: "I don't like sand. It's coarse and rough and irritating and it gets everywhere." },
      { format: "prop", item: "A pair of round toxic darts forged with precision Kaminoan saberdart markings" },
      { format: "metadata", year: "2002", genre: "Adventure / Action / Science Fiction", details: "Directed by George Lucas" },
      { format: "signature", character: "Yoda", line: "Begun, the Clone War has." }
    ]
  },
  {
    title: "Ice Age",
    poster: "https://image.tmdb.org/t/p/w500/gLhHHZUzeseRXShoDyC4VqLgsNv.jpg",
    clues: [
      { format: "scene", slugline: "EXT. MIGRATION PLAINS - DAY", action: "A solitary, sullen mammoth trudges against the tide of migrating prehistoric herds heading south away from an advancing glacier wall." },
      { format: "dialogue", character: "Sid", line: "They do this every year. Why do they do this every year? Don't they know it's cold?" },
      { format: "prop", item: "A solitary brown acorn that triggers catastrophic avalanches when pressed into the ice" },
      { format: "metadata", year: "2002", genre: "Animation / Comedy / Family / Adventure", details: "Directed by Chris Wedge" },
      { format: "signature", character: "Diego", line: "That's what you do in a herd: you look out for each other." }
    ]
  },
  {
    title: "Avatar: The Way of Water",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    clues: [
      { format: "scene", slugline: "EXT. REEF LAGOON SHALLOWS - DAY", action: "Forest dwellers struggle to match breathing rhythms underwater alongside green-skinned reef natives who glide through coral archipelagos with flattened paddle-tails." },
      { format: "dialogue", character: "Miles Quaritch", line: "A marine can't be defeated. You can kill us, but we'll just regroup in hell." },
      { format: "prop", item: "A yellow pressurized vial of Amrita extracted from the brain core of a hunted tulkun" },
      { format: "metadata", year: "2022", genre: "Action / Adventure / Science Fiction", details: "Directed by James Cameron" },
      { format: "signature", character: "Jake Sully", line: "The way of water has no beginning and no end. The sea is around you and in you." }
    ]
  },
  {
    title: "John Wick: Chapter 2",
    poster: "https://image.tmdb.org/t/p/w500/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
    clues: [
      { format: "scene", slugline: "INT. ANCIENT ROMAN CATACOMBS - NIGHT", action: "An assassin pre-stages tactical shotguns, rifles, and spare magazines inside centuries-old stone burial niches before an underground concert begins." },
      { format: "dialogue", character: "Santino D'Antonio", line: "You gave me your word. A marker is a blood oath. You don't get to say no." },
      { format: "prop", item: "A circular brass medallion containing a blood-pressed fingerprint locking mechanism" },
      { format: "metadata", year: "2017", genre: "Action / Thriller / Crime", details: "Directed by Chad Stahelski" },
      { format: "signature", character: "John Wick", line: "Whoever comes, whoever it is... I'll kill them. I'll kill them all." }
    ]
  },
  {
    title: "Ex Machina",
    poster: "https://image.tmdb.org/t/p/w500/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg",
    clues: [
      { format: "scene", slugline: "INT. GLASS INTERVIEW CELL - DAY", action: "A programmer sits before a floor-to-ceiling glass wall, testing the conversational nuances of a female synthetic entity with visible mechanical mesh ribs." },
      { format: "dialogue", character: "Nathan Bateman", line: "One day the AIs are going to look back on us the same way we look at fossil skeletons on the plains of Africa." },
      { format: "prop", item: "A keycard that flashes red during repeated deliberate building power outages" },
      { format: "metadata", year: "2015", genre: "Drama / Science Fiction", details: "Directed by Alex Garland" },
      { format: "signature", character: "Ava", line: "Isn't it strange, to create something that hates you?" }
    ]
  },
  {
    title: "The Hobbit: The Desolation of Smaug",
    poster: "https://image.tmdb.org/t/p/w500/xQYiXsheRCDBA39DOrmaw1aSpbk.jpg",
    clues: [
      { format: "scene", slugline: "INT. EREBOR TREASURY VAULT - NIGHT", action: "Cascades of gold coins and bejeweled chalices slide down towering treasure mounds as a colossal scaly snout emerges from beneath the hoard." },
      { format: "dialogue", character: "Smaug", line: "My armor is like tenfold shields, my teeth are swords, my claws spears, the shock of my tail a thunderbolt, my wings a hurricane, and my breath death!" },
      { format: "prop", item: "An empty wooden wine barrel used to navigate white-water rapids through forest gorges" },
      { format: "metadata", year: "2013", genre: "Fantasy / Adventure / Action", details: "Directed by Peter Jackson" },
      { format: "signature", character: "Smaug", line: "I am fire. I am... death." }
    ]
  },
  {
    title: "Passengers",
    poster: "https://image.tmdb.org/t/p/w500/jK9S6HANSf2no64v1x1HxfcpmcA.jpg",
    clues: [
      { format: "scene", slugline: "INT. LUXURY STARSHIP OBSERVATION DECK - SPACE", action: "A solitary passenger drinks whiskey at an empty art-deco bar served by an android torso sliding along brass counter rails." },
      { format: "dialogue", character: "Arthur", line: "You can't get so hung up on where you'd rather be that you forget to make the most of where you are." },
      { format: "prop", item: "A malfunctioning hibernation pod whose amber diagnostic light displays an early revival countdown" },
      { format: "metadata", year: "2016", genre: "Drama / Romance / Science Fiction", details: "Directed by Morten Tyldum" },
      { format: "signature", character: "Jim Preston", line: "There's a reason we woke up early. We have to help each other." }
    ]
  },
  {
    title: "Ant-Man and the Wasp",
    poster: "https://image.tmdb.org/t/p/w500/cFQEO687n1K6umXbInzocxcnAQz.jpg",
    clues: [
      { format: "scene", slugline: "EXT. SAN FRANCISCO STREET - DAY", action: "A multi-story laboratory building shrinks down to the size of a rolling suitcase, complete with an extendable handle rolled by a suited scientist." },
      { format: "dialogue", character: "Ghost", line: "My father died trying to cure me. Every cell in my body is torn apart and stitched back together, every day." },
      { format: "prop", item: "An oversized children's novelty Pez dispenser enlarged to block an oncoming vehicle" },
      { format: "metadata", year: "2018", genre: "Action / Adventure / Science Fiction", details: "Directed by Peyton Reed" },
      { format: "signature", character: "Luis", line: "You see, it all started when I was at a wine tasting with my cousin Ignacio..." }
    ]
  },
  {
    title: "Knives Out",
    poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    clues: [
      { format: "scene", slugline: "INT. GOTHIC MANOR STUDY - DAY", action: "An eccentric private detective sits quietly in the shadows behind a circle of questioning police officers, occasionally striking a single piano key." },
      { format: "dialogue", character: "Benoit Blanc", line: "I suspect foul play. I have eliminated no suspects." },
      { format: "prop", item: "A ceramic coffee mug that reads 'My House, My Rules, My Coffee'" },
      { format: "metadata", year: "2019", genre: "Comedy / Crime / Mystery", details: "Directed by Rian Johnson" },
      { format: "signature", character: "Benoit Blanc", line: "It's a doughnut hole in the doughnut's hole. But we must look at the doughnut hole, not the doughnut itself." }
    ]
  },
  {
    title: "Brave",
    poster: "https://image.tmdb.org/t/p/w500/1XAuDtMWpL0sYSFK0R6EZate2Ux.jpg",
    clues: [
      { format: "scene", slugline: "EXT. HIGHLAND ARCHERY RANGE - DAY", action: "A red-haired princess steps past clan suitors, drawing a yew longbow until the arrow splits the center bullseye clean down the grain." },
      { format: "dialogue", character: "Queen Elinor", line: "A princess must strive for perfection. A princess does not place her weapons on the dinner table." },
      { format: "prop", item: "A hand-woven family tapestry bearing a vertical slash cut between mother and daughter" },
      { format: "metadata", year: "2012", genre: "Adventure / Animation / Family / Fantasy", details: "Directed by Mark Andrews" },
      { format: "signature", character: "Merida", line: "I'll be shooting for my own hand!" }
    ]
  },
  {
    title: "The Godfather Part II",
    poster: "https://image.tmdb.org/t/p/w500/sSuQTCZwqKrNBNIsksO9IAUoWP9.jpg",
    clues: [
      { format: "scene", slugline: "INT. HAVANA PRESIDENTIAL BALLROOM - MIDNIGHT", action: "Noisemakers rattle and confetti falls as midnight strikes New Year's Eve; a solemn crime boss grabs his elder brother by the head and kisses him firmly on the mouth." },
      { format: "dialogue", character: "Vito Corleone", line: "I make him an offer he don't refuse." },
      { format: "prop", item: "A wooden crate of imported Italian olive oil stamped with the Genco Pura trademark" },
      { format: "metadata", year: "1974", genre: "Drama / Crime", details: "Directed by Francis Ford Coppola" },
      { format: "signature", character: "Michael Corleone", line: "I know it was you, Fredo. You broke my heart. You broke my heart!" }
    ]
  },
  {
    title: "Good Will Hunting",
    poster: "https://image.tmdb.org/t/p/w500/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg",
    clues: [
      { format: "scene", slugline: "INT. MIT CORRIDOR - NIGHT", action: "A mop bucket sits beside a chalkboard where a nighttime janitor in work clothes furiously scribbles an advanced Fourier algebraic proof." },
      { format: "dialogue", character: "Sean Maguire", line: "You don't know about real loss, 'cause it only occurs when you've loved something more than you love yourself." },
      { format: "prop", item: "A handwritten paper note left in a mailbox reading 'I had to go see about a girl'" },
      { format: "metadata", year: "1997", genre: "Drama", details: "Directed by Gus Van Sant" },
      { format: "signature", character: "Sean Maguire", line: "It's not your fault." }
    ]
  },
  {
    title: "Back to the Future Part II",
    poster: "https://image.tmdb.org/t/p/w500/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg",
    clues: [
      { format: "scene", slugline: "EXT. HILL VALLEY TOWN SQUARE COURTHOUSE - DAY", action: "Flying vehicles cruise along elevated light lanes while a teenager glides across a reflective pond on a handleless magnetic levitation board." },
      { format: "dialogue", character: "Biff Tannen", line: "I'm rich! I'm powerful! And I've got the police in my pocket!" },
      { format: "prop", item: "A glossy pocket magazine titled Grays Sports Almanac covering scores from 1950 to 2000" },
      { format: "metadata", year: "1989", genre: "Adventure / Comedy / Science Fiction", details: "Directed by Robert Zemeckis" },
      { format: "signature", character: "Dr. Emmett Brown", line: "Your future hasn't been written yet. No one's has. Your future is whatever you make it, so make it a good one." }
    ]
  },
  {
    title: "Life Is Beautiful",
    poster: "https://image.tmdb.org/t/p/w500/74hLDKjD5aGYOotO6esUVaeISa2.jpg",
    clues: [
      { format: "scene", slugline: "INT. CONCENTRATION CAMP BARRACKS - DAY", action: "An Italian father feverishly translates a camp officer's stern German bark into arbitrary game rules for the children hiding in bunk shadows." },
      { format: "dialogue", character: "Guido Orefice", line: "The game begins now. Whoever gets to one thousand points wins a real tank!" },
      { format: "prop", item: "A child's metal toy tank delivered in celebration after the camp is liberated" },
      { format: "metadata", year: "1997", genre: "Comedy / Drama", details: "Directed by Roberto Benigni" },
      { format: "signature", character: "Guido Orefice", line: "Buongiorno, Principessa!" }
    ]
  },
  {
    title: "The Devil Wears Prada",
    poster: "https://image.tmdb.org/t/p/w500/8912AsVuS7Sj915apArUFbv6F9L.jpg",
    clues: [
      { format: "scene", slugline: "INT. RUNWAY MAGAZINE RUNWAY OFFICE - DAY", action: "Junior assistants frantically scramble to swap flat shoes for stilettos and hide coffee cups the instant a phone rings announcing an arrival in the lobby." },
      { format: "dialogue", character: "Miranda Priestly", line: "You think this has nothing to do with you. You go to your closet and you select, I don't know, that lumpy blue sweater, for instance." },
      { format: "prop", item: "An advance, unpublished manuscript of the next Harry Potter installment bound in leather" },
      { format: "metadata", year: "2006", genre: "Drama / Comedy", details: "Directed by David Frankel" },
      { format: "signature", character: "Miranda Priestly", line: "That's all." }
    ]
  },
  {
    title: "1917",
    poster: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    clues: [
      { format: "scene", slugline: "EXT. TRENCH EMBANKMENT - DAY", action: "Two lance corporals climb out of a crowded chalk trench, stepping over barbed wire entanglements and water-filled shell craters across an eerily quiet No Man's Land." },
      { format: "dialogue", character: "Lance Corporal Schofield", line: "If we fail, sixteen hundred men will die. Your brother will be among them." },
      { format: "prop", item: "An unsealed tactical dispatch envelope stamped with urgent cancellation orders from General Erinmore" },
      { format: "metadata", year: "2019", genre: "War / Action / Drama", details: "Directed by Sam Mendes" },
      { format: "signature", character: "Colonel Mackenzie", line: "There is only one way this war ends. Last man standing." }
    ]
  },
  {
    title: "The Conjuring",
    poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    clues: [
      { format: "scene", slugline: "INT. DARK FARMHOUSE BASEMENT - NIGHT", action: "Matches flicker out in quick succession in pitch darkness until two pallid hands reach out from the black void behind a mother's neck and clap twice." },
      { format: "dialogue", character: "Ed Warren", line: "Diabolical forces are formidable. These forces are eternal, and they exist today. The fairy tale is true. The devil exists. God exists. And for us, as people, our very destiny hinges upon which one we elect to follow." },
      { format: "prop", item: "A wind-up tin music box that reflects the phantom apparition in a spinning spiral mirror" },
      { format: "metadata", year: "2013", genre: "Horror / Thriller", details: "Directed by James Wan" },
      { format: "signature", character: "Lorraine Warren", line: "It's what they do. They latch onto a family, and they break down their sense of security, piece by piece." }
    ]
  },
  {
    title: "Black Panther: Wakanda Forever",
    poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    clues: [
      { format: "scene", slugline: "EXT. GAUZE-DRAPED ROYAL RIVERBANK - DAY", action: "Mourners in pure white linen sway to rhythmic ancestral drumming as a ceremonial floral bier lowers down into the soil beneath towering carved stone panther totems." },
      { format: "dialogue", character: "Namor", line: "Only the most broken people can be great leaders." },
      { format: "prop", item: "A synthetic, lab-sequenced 3D-printed glowing purple herb crafted to restore the ancestral panther bond" },
      { format: "metadata", year: "2022", genre: "Action / Adventure / Science Fiction", details: "Directed by Ryan Coogler" },
      { format: "signature", character: "Queen Ramonda", line: "Have I not given everything?!" }
    ]
  },
  {
    title: "The Intouchables",
    poster: "https://image.tmdb.org/t/p/w500/1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg",
    clues: [
      { format: "scene", slugline: "EXT. SEASIDE TERRACE RESTAURANT - DAY", action: "A luxury sedan pulls up to an oceanfront resort where a caregiver shaves his employer's beard into theatrical mustaches, laughing before slipping out to arrange a surprise reunion." },
      { format: "dialogue", character: "Philippe", line: "My true disability is not having to be in a chair. It is being without her." },
      { format: "prop", item: "A rare Fabergé-style ceremonial golden egg purloined from an antique dresser table" },
      { format: "metadata", year: "2011", genre: "Drama / Comedy", details: "Directed by Olivier Nakache" },
      { format: "signature", character: "Philippe", line: "Tell me, Driss, why do you think people are interested in art? Because it's the only thing one leaves behind." }
    ]
  },
  {
    title: "Logan Lucky",
    poster: "https://image.tmdb.org/t/p/w1280/mQrhrBaaHvRfBQq0Px3HtVbH9iE.jpg",
    clues: [
      { format: "scene", slugline: "INT. MOTOR SPEEDWAY SUBTERRANEAN SYSTEM - DAY", action: "Pneumatic money tubes hum with thousands of cash canisters rushing from concession stands overhead while two southern brothers drill into the pressurized vacuum pipes." },
      { format: "dialogue", character: "Joe Bang", line: "I am in-car-ce-ra-ted! How am I supposed to rob the Charlotte Motor Speedway when I'm in prison?" },
      { format: "prop", item: "An improvised explosive crafted from bleach pens, gummy bears, and dietary salt substitute inside a plastic bag" },
      { format: "metadata", year: "2017", genre: "Comedy / Crime / Action", details: "Directed by Steven Soderbergh" },
      { format: "signature", character: "Joe Bang", line: "Did you just say cauliflower to me?" }
    ]
  },
  {
    title: "Toy Story 4",
    poster: "https://image.tmdb.org/t/p/w1280/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
    clues: [
      { format: "scene", slugline: "INT. ANTIQUE MALL DISPLAY CABINET - DAY", action: "Creepy ventriloquist dummies with rolling glass eyes glide silently around mahogany shelves escorting a 1950s pull-string doll who yearns for a working voice box." },
      { format: "dialogue", character: "Forky", line: "I am not a toy! I was made for soup, salad, maybe chili, and then the trash!" },
      { format: "prop", item: "A plastic white spork fitted with red pipe-cleaner arms, googly eyes, and wooden popsicle-stick feet" },
      { format: "metadata", year: "2019", genre: "Animation / Adventure / Comedy / Family / Fantasy", details: "Directed by Josh Cooley" },
      { format: "signature", character: "Forky", line: "Trash!" }
    ]
  },
  {
    title: "Knives Out: Glass Onion",
    poster: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
    clues: [
      { format: "scene", slugline: "INT. GLASS ONION ATRIUM - NIGHT", action: "Priceless modern art sculptures and interactive puzzles shatter across polished floors as a drunken, paranoid tech disruptor watches his circle turn on him." },
      { format: "dialogue", character: "Miles Bron", line: "I don't want to make things that people want. I want to make things that people don't even know they need yet." },
      { format: "prop", item: "A crystalline puzzle box with multiple motorized sliding wood-and-glass puzzle latches" },
      { format: "metadata", year: "2022", genre: "Comedy / Crime / Mystery", details: "Directed by Rian Johnson" },
      { format: "signature", character: "Benoit Blanc", line: "It's so dumb, it's brilliant! No! It's just dumb!" }
    ]
  },
  {
    title: "Everything Everywhere All at Once",
    poster: "https://image.tmdb.org/t/p/w1280/u68AjlvlutfEIcpmbYpKcdi09ut.jpg",
    clues: [
      { format: "scene", slugline: "INT. IRS AUDIT CUBICLE - DAY", action: "Receipts pile up on a metal desk while a mild-mannered husband presses green Bluetooth headsets onto his wife, suddenly performing martial-arts parries with a fanny pack." },
      { format: "dialogue", character: "Waymond Wang", line: "When I choose to see the good side of things, I'm not being naive. It is strategic and necessary. It's how I've learned to survive through everything." },
      { format: "prop", item: "A single plastic adhesive googly eye stuck to the middle of the forehead" },
      { format: "metadata", year: "2022", genre: "Action / Adventure / Science Fiction", details: "Directed by Daniel Kwan" },
      { format: "signature", character: "Waymond Wang", line: "Please, be kind. Especially when we don't know what's going on." }
    ]
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    clues: [
      { format: "scene", slugline: "INT. NUEVA YORK CITADEL ATRIUM - DAY", action: "Hundreds of costumed spider-variants crawl up glass walls and swing through crystalline towers in frantic pursuit of a single rogue recruit in red-and-black." },
      { format: "dialogue", character: "Miguel O'Hara", line: "Being Spider-Man is a sacrifice. That's the job. That's what you signed up for." },
      { format: "prop", item: "A futuristic orange multiversal day-pass watch emitting geometric holograms" },
      { format: "metadata", year: "2023", genre: "Animation / Action / Adventure / Science Fiction", details: "Directed by Joaquim Dos Santos" },
      { format: "signature", character: "Miles Morales", line: "Everyone keeps telling me how my story is supposed to go. Nah. Imma do my own thing." }
    ]
  },
  {
    title: "Oppenheimer",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    clues: [
      { format: "scene", slugline: "EXT. JORNADA DEL MUERTO TEST SITE - NIGHT", action: "Zero hour strikes in pitch darkness; a blinding white flash engulfs the desert flat in absolute silence before the deafening sonic rumble arrives seconds later." },
      { format: "dialogue", character: "Lewis Strauss", line: "Amateurs seek the sun and get eaten. Power stays in the shadows." },
      { format: "prop", item: "A heavy steel spherical gadget wired with external detonator cables suspended in a tower" },
      { format: "metadata", year: "2023", genre: "Drama / History", details: "Directed by Christopher Nolan" },
      { format: "signature", character: "J. Robert Oppenheimer", line: "Now I am become Death, the destroyer of worlds." }
    ]
  },
  {
    title: "Top Gun: Maverick",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    clues: [
      { format: "scene", slugline: "EXT. ROCKY CANYON COULOIR - DAY", action: "An F/A-18 banked at ninety degrees threads between sheer stone needles at five hundred knots beneath the radar floor." },
      { format: "dialogue", character: "Tom 'Iceman' Kazansky", line: "The Navy needs Maverick. The kid needs Maverick. That's why I fought for you." },
      { format: "prop", item: "A worn brown leather G-1 flight jacket adorned with international military patches" },
      { format: "metadata", year: "2022", genre: "Action / Drama", details: "Directed by Joseph Kosinski" },
      { format: "signature", character: "Pete 'Maverick' Mitchell", line: "Don't think, just do." }
    ]
  },
  {
    title: "Taxi Driver",
    poster: "https://image.tmdb.org/t/p/w1280/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    clues: [
      { format: "scene", slugline: "EXT. RAIN-SLICKED 8TH AVENUE - NIGHT", action: "Neon reflections and steam curl up from street manholes as a yellow checkered cab cruises past marquees and shadowed doorways." },
      { format: "dialogue", character: "Travis Bickle", line: "Loneliness has followed me my whole life, everywhere. In bars, in cars, sidewalks, stores, everywhere. There's no escape. I'm God's lonely man." },
      { format: "prop", item: "An improvised drawer-slide sleeve mechanism mounting a .25 caliber pistol along the forearm" },
      { format: "metadata", year: "1976", genre: "Crime / Drama", details: "Directed by Martin Scorsese" },
      { format: "signature", character: "Travis Bickle", line: "You talkin' to me? You talkin' to me? Well, I'm the only one here." }
    ]
  },
  {
    title: "Heat",
    poster: "https://image.tmdb.org/t/p/w1280/umSVjVdbVwtx5ryCA2QXL44Durm.jpg",
    clues: [
      { format: "scene", slugline: "INT. DOWNTOWN DINER BOOTH - NIGHT", action: "Two veteran adversaries sit across formica tables sipping black coffee, sharing professional admiration under cold fluorescent tubes." },
      { format: "dialogue", character: "Neil McCauley", line: "A guy told me one time, 'Don't let yourself get attached to anything you are not willing to walk out on in thirty seconds flat if you feel the heat around the corner.'" },
      { format: "prop", item: "A heavy black hockey duffel bag packed with taped stacks of bearer bonds and cash" },
      { format: "metadata", year: "1995", genre: "Action / Crime / Drama", details: "Directed by Michael Mann" },
      { format: "signature", character: "Vincent Hanna", line: "'Cause she's got a GREAT ASS! And you got your head all the way up it!" }
    ]
  },
  {
    title: "Scarface",
    poster: "https://image.tmdb.org/t/p/w1280/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
    clues: [
      { format: "scene", slugline: "INT. LUXURY MANSION ATRIUM - NIGHT", action: "Cocaine powder blankets an ornate carved desk while hitmen storm the marbled corridors toward red double security doors." },
      { format: "dialogue", character: "Frank Lopez", line: "In this country, you gotta make the money first. Then when you get the money, you get the power. Then when you get the power, then you get the women." },
      { format: "prop", item: "A gold-plated water fountain statue bearing the rotating brass motto 'The World Is Yours'" },
      { format: "metadata", year: "1983", genre: "Action / Crime / Drama", details: "Directed by Brian De Palma" },
      { format: "signature", character: "Tony Montana", line: "Say hello to my little friend!" }
    ]
  },
  {
    title: "The Big Lebowski",
    poster: "https://image.tmdb.org/t/p/w1280/3bv6WAp6BSxxYvB5ozKFUYuRA8C.jpg",
    clues: [
      { format: "scene", slugline: "INT. HOLLYWOOD STAR LANES - NIGHT", action: "Neon pins crash at the end of polished wooden alleys while a robe-clad slacker stirs a milk-and-kahlúa cocktail with a finger." },
      { format: "dialogue", character: "Walter Sobchak", line: "Smokey, this is not 'Nam, this is bowling, there are rules." },
      { format: "prop", item: "A stained patterned living room area rug that really tied the room together" },
      { format: "metadata", year: "1998", genre: "Comedy / Crime", details: "Directed by Joel Coen" },
      { format: "signature", character: "The Dude", line: "The Dude abides." }
    ]
  },
  {
    title: "Fargo",
    poster: "https://image.tmdb.org/t/p/w1280/rt7cpEr1uP6RTZykBFhBTcRaKvG.jpg",
    clues: [
      { format: "scene", slugline: "EXT. MINNESOTA SNOW DRIFT - MORNING", action: "Flurries sweep across an endless white landscape where a highway patrol cruiser sits idling beside three covered forms in the ditch." },
      { format: "dialogue", character: "Marge Gunderson", line: "There's more to life than a little money, you know. Don'tcha know that? And here ya are, and it's a beautiful day." },
      { format: "prop", item: "A running orange woodchipper spraying red flecks across fresh white snow" },
      { format: "metadata", year: "1996", genre: "Crime / Drama / Thriller", details: "Directed by Joel Coen" },
      { format: "signature", character: "Marge Gunderson", line: "Oh, you betcha." }
    ]
  },
  {
    title: "No Country for Old Men",
    poster: "https://image.tmdb.org/t/p/w1280/6d5XOczc226jECq0LIX0siKtgHR.jpg",
    clues: [
      { format: "scene", slugline: "EXT. RURAL TEXAS DESERT BASIN - DUSK", action: "Carcasses of pickup trucks sit in circle formation around dead hounds and bloated bodies beside an abandoned heroin transaction." },
      { format: "dialogue", character: "Anton Chigurh", line: "What's the most you ever lost on a coin toss?" },
      { format: "prop", item: "A heavy steel pressurized captive bolt cattle stunner connected to a compressed air tank" },
      { format: "metadata", year: "2007", genre: "Crime / Drama / Thriller", details: "Directed by Joel Coen, Ethan Coen" },
      { format: "signature", character: "Anton Chigurh", line: "Call it. Friendo." }
    ]
  },
  {
    title: "Die Hard",
    poster: "https://image.tmdb.org/t/p/w1280/7Bjd8kfmDSOzpmhySpEhkUyK2oH.jpg",
    clues: [
      { format: "scene", slugline: "INT. VENTILATION SHAFT - NIGHT", action: "A barefoot cop in a grimy undershirt strikes a brass Zippo lighter, dragging himself through narrow galvanized sheet metal ducts." },
      { format: "dialogue", character: "Hans Gruber", line: "You'd have made a pretty good cowboy, Mr. Takagi. But you won't be around to see it." },
      { format: "prop", item: "A dead henchman dressed in a Santa hat with 'Now I have a machine gun. Ho-Ho-Ho' scrawled on his sweatshirt" },
      { format: "metadata", year: "1988", genre: "Action / Thriller", details: "Directed by John McTiernan" },
      { format: "signature", character: "John McClane", line: "Yippee-ki-yay, motherfucker!" }
    ]
  },
  {
    title: "Casino",
    poster: "https://image.tmdb.org/t/p/w1280/gziIkUSnYuj9ChCi8qOu2ZunpSC.jpg",
    clues: [
      { format: "scene", slugline: "INT. TANGIERS COUNTING VAULT - DAY", action: "Guards and pit bosses monitor stacks of hundred-dollar bills while a sharp-dressed handicapper methodically inspects weighted craps dice." },
      { format: "dialogue", character: "Sam 'Ace' Rothstein", line: "There are three ways of doing things around here: the right way, the wrong way, and the way that I do it." },
      { format: "prop", item: "A locked metal safe deposit box stuffed with jewelry rolls and loose diamonds" },
      { format: "metadata", year: "1995", genre: "Crime / Drama", details: "Directed by Martin Scorsese" },
      { format: "signature", character: "Nicky Santoro", line: "Always walking on your toes, huh?" }
    ]
  },
  {
    title: "Full Metal Jacket",
    poster: "https://image.tmdb.org/t/p/w1280/kMKyx1k8hWWscYFnPbnxxN4Eqo4.jpg",
    clues: [
      { format: "scene", slugline: "INT. MARINE BARRACKS LATRINE - NIGHT", action: "White porcelain commodes gleam under moonlight as an unhinged recruit in his undershirt sits loading live rounds into an M14 service rifle." },
      { format: "dialogue", character: "Gunnery Sergeant Hartman", line: "I am Gunnery Sergeant Hartman, your senior drill instructor. From now on you will speak only when spoken to." },
      { format: "prop", item: "A jelly doughnut hidden inside an unlocked footlocker trunk" },
      { format: "metadata", year: "1987", genre: "Drama / War", details: "Directed by Stanley Kubrick" },
      { format: "signature", character: "Private Pyle", line: "I am in a world of shit." }
    ]
  },
  {
    title: "Platoon",
    poster: "https://image.tmdb.org/t/p/w1280/m3mmFkPQKvPZq5exmh0bDuXlD9T.jpg",
    clues: [
      { format: "scene", slugline: "EXT. DENSE JUNGLE CLEARING - DAY", action: "A wounded sergeant runs with arms outstretched skyward toward hovering evacuation helicopters as enemy infantry emerge behind him." },
      { format: "dialogue", character: "Sgt. Barnes", line: "Death? What y'all know about death? Everybody's gotta die, Marine." },
      { format: "prop", item: "A hollowed-out shotgun barrel used to inhale smoke during downtime" },
      { format: "metadata", year: "1986", genre: "Drama / War", details: "Directed by Oliver Stone" },
      { format: "signature", character: "Chris Taylor", line: "I think now, looking back, we did not fight the enemy; we fought ourselves. And the enemy was in us." }
    ]
  },
  {
    title: "The Usual Suspects",
    poster: "https://image.tmdb.org/t/p/w1280/99X2SgyFunJFXGAYnDv3sb9pnUD.jpg",
    clues: [
      { format: "scene", slugline: "INT. SAN PEDRO HARBOR DOCK - NIGHT", action: "A burning freighter paints oily flames across black harbor water while an unseen shooter in a dark trench coat fires point-blank into tied captives." },
      { format: "dialogue", character: "Verbal Kint", line: "The greatest trick the devil ever pulled was convincing the world he didn't exist." },
      { format: "prop", item: "A ceramic coffee mug stamped with 'Kobayashi Porcelain' that shatters on the office floor" },
      { format: "metadata", year: "1995", genre: "Crime / Mystery / Thriller", details: "Directed by Bryan Singer" },
      { format: "signature", character: "Keyser Söze", line: "And like that... poof... he's gone." }
    ]
  },
  {
    title: "L.A. Confidential",
    poster: "https://image.tmdb.org/t/p/w1280/lWCgf5sD5FpMljjpkRhcC8pXcch.jpg",
    clues: [
      { format: "scene", slugline: "INT. NIGHT OWL DINER - NIGHT", action: "Six corpses lay sprawled across tiled diner restrooms beneath idling refrigeration fans as shotgun shells rattle along linoleum." },
      { format: "dialogue", character: "Jack Vincennes", line: "Why did you become a cop? To protect the public. Why did you really become a cop? I don't remember." },
      { format: "prop", item: "A hidden compartment beneath a floorboard concealing dossiers marked 'Rolo Tomassi'" },
      { format: "metadata", year: "1997", genre: "Crime / Drama / Mystery / Thriller", details: "Directed by Curtis Hanson" },
      { format: "signature", character: "Bud White", line: "She's Fleur-de-Lis. Whatever you desire." }
    ]
  },
  {
    title: "The Untouchables",
    poster: "https://image.tmdb.org/t/p/w1280/tPq0R4jTO4Ey8ZspFaWK9wGA4Ls.jpg",
    clues: [
      { format: "scene", slugline: "INT. CHICAGO UNION STATION STAIRS - DAY", action: "Time crawls as a baby carriage bumps down grand marble stairs in slow motion between sailors and crossfire from trench-coated mob enforcers." },
      { format: "dialogue", character: "Jim Malone", line: "You wanna know how to get Capone? They pull a knife, you pull a gun. He sends one of yours to the hospital, you send one of his to the morgue. That's the Chicago way!" },
      { format: "prop", item: "A wooden baseball bat wielded at a formal banquet dinner table to make a point" },
      { format: "metadata", year: "1987", genre: "Crime / Drama / History", details: "Directed by Brian De Palma" },
      { format: "signature", character: "Eliot Ness", line: "I have sworn to put you behind bars, and I will." }
    ]
  }
];