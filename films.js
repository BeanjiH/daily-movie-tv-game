const filmCatalog = [
  {
    title: "Fargo",
    poster: "https://image.tmdb.org/t/p/w1280/rt7cpEr1uP6RTZykBFhBTcRaKvG.jpg",
    clues: [
      {
        format: "scene",
        slugline: "EXT. SNOW-COVERED HIGHWAY - NIGHT",
        action: "A solitary car tows a brand new tan Ciera through a howling blizzard across barren North Dakota plains."
      },
      {
        format: "dialogue",
        character: "[KIDNAPPER]",
        line: "I'm not gonna debate you, Jerry. I'm not gonna sit here and debate."
      },
      {
        format: "prop",
        item: "A bundle of ransom cash buried next to a red plastic ice scraper staked into deep snow.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
      },
      {
        format: "metadata",
        year: "1996",
        genre: "Crime / Dark Comedy",
        details: "Directed by the Coen Brothers"
      },
      {
        format: "signature",
        character: "MARGE GUNDERSON",
        line: "There's more to life than a little money, you know. Don'tcha know that? And here ya are, and it's a beautiful day."
      }
    ]
  },
  {
    title: "The Matrix",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    clues: [
      {
        format: "scene",
        slugline: "INT. HEART O' THE CITY HOTEL - NIGHT",
        action: "A woman in skin-tight black vinyl leaps into the air, freezing in mid-flight as the camera revolves around her."
      },
      {
        format: "dialogue",
        character: "VOICE ON PHONE",
        line: "No one can be told what it is. You have to see it for yourself."
      },
      {
        format: "prop",
        item: "A cracked shaving mirror that ripples and coats a man's forearm like living, liquid chrome.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
      },
      {
        format: "metadata",
        year: "1999",
        genre: "Sci-Fi / Action",
        details: "Directed by the Wachowskis"
      },
      {
        format: "signature",
        character: "MORPHEUS",
        line: "You take the blue pill, the story ends. You take the red pill, you stay in Wonderland, and I show you how deep the rabbit hole goes."
      }
    ]
  },
  {
    title: "Jaws",
    poster: "https://image.tmdb.org/t/p/w500/lxM6kqilAdpdhqUl2biYp5frUxE.jpg",
    clues: [
      {
        format: "scene",
        slugline: "EXT. AMITY ISLAND SHORELINE - DUSK",
        action: "A teenage girl strips off her clothes, sprints into the surf, and tethers water in the pitch-black ocean."
      },
      {
        format: "dialogue",
        character: "POLICE CHIEF",
        line: "You're gonna need a bigger boat."
      },
      {
        format: "prop",
        item: "Three bright yellow pressurized flotation barrels surfacing violently against the wake of the Orca."
      },
      {
        format: "metadata",
        year: "1975",
        genre: "Thriller / Adventure",
        details: "Directed by Steven Spielberg"
      },
      {
        format: "signature",
        character: "QUINT",
        line: "Japanese submarine slammed two torpedoes into her side, Chief. We was comin' back from the island of Tinian to Leyte... just delivered the bomb."
      }
    ]
  },
  {
    title: "No Country for Old Men",
    poster: "https://image.tmdb.org/t/p/w500/kVGqDYqC0YnUjqV898vS4j5Yf3r.jpg",
    clues: [
      {
        format: "scene",
        slugline: "EXT. DESERT BASIN - DAY",
        action: "A hunter surveys a circle of bullet-riddled pickup trucks through heavy binoculars. Dead pit bulls and men lie sprawled in bloodied dust."
      },
      {
        format: "dialogue",
        character: "[SHADOWY FIGURE]",
        line: "What's the most you ever lost on a coin toss?"
      },
      {
        format: "prop",
        item: "A heavy, cylindrical steel cattle gun connected by thick black hose to a portable compressed air tank.",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=80"
      },
      {
        format: "metadata",
        year: "2007",
        genre: "Neo-Western / Crime Thriller",
        details: "Directed by Joel & Ethan Coen · Adapted from Cormac McCarthy"
      },
      {
        format: "signature",
        character: "ANTON CHIGURH",
        line: "If the rule you followed brought you to this, of what use was the rule?"
      }
    ]
  },
  {
    title: "Pulp Fiction",
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    clues: [
      {
        format: "scene",
        slugline: "INT. COFFEE SHOP - MORNING",
        action: "A young couple sit across from each other in a vinyl booth, calmly discussing the logistical advantages of robbing restaurants over liquor stores."
      },
      {
        format: "dialogue",
        character: "[HITMAN]",
        line: "You know what they call a Quarter Pounder with Cheese in Paris?"
      },
      {
        format: "prop",
        item: "A worn black leather combination briefcase that casts a warm, golden luminescence across anyone who opens it.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80"
      },
      {
        format: "metadata",
        year: "1994",
        genre: "Crime / Black Comedy",
        details: "Directed by Quentin Tarantino · Palme d'Or Winner"
      },
      {
        format: "signature",
        character: "JULES WINNFIELD",
        line: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men."
      }
    ]
  },
  {
    title: "Blade Runner 2049",
    poster: "https://image.tmdb.org/t/p/w500/aMpyrCizvSdc0UIMbe9KnBpFTRi.jpg",
    clues: [
      {
        format: "scene",
        slugline: "EXT. PROTEIN FARM - DUSK",
        action: "A black spinner hovers through dense grey mist, touching down outside a colossal dome filled with steaming troughs of larvae."
      },
      {
        format: "dialogue",
        character: "[OFFICER]",
        line: "I have memories, but they're not real. Just implants, right?"
      },
      {
        format: "prop",
        item: "A small, hand-carved wooden toy horse with the date 6-10-21 stamped into its underside.",
        image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=400&q=80"
      },
      {
        format: "metadata",
        year: "2017",
        genre: "Sci-Fi / Neo-Noir",
        details: "Directed by Denis Villeneuve · Cinematography by Roger Deakins"
      },
      {
        format: "signature",
        character: "OFFICER K",
        line: "Cells. Interlinked. Within cells interlinked. Never close to the baseline."
      }
    ]
  }
];