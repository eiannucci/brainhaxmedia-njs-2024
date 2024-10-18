const bandfacts = {
    bands: [
        {
            band_name: "A Perfect Circle",
            formed_year: 1999,
            studio_albums: 4,
            recorded_songs: 40,
            members: [
                {
                    name: "Maynard James Keenan",
                    instruments: ["vocals"]
                },
                {
                    name: "Billy Howerdel",
                    instruments: ["guitar", "bass", "keyboards", "vocals"]
                },
                {
                    name: "James Iha",
                    instruments: ["guitar", "keyboards", "vocals"]
                },
                {
                    name: "Jeff Friedl",
                    instruments: ["drums", "percussion"]
                },
                {
                    name: "Matt McJunkins",
                    instruments: ["bass", "keyboards", "vocals"]
                }
            ],
            albums: [
                {
                    title: "Mer de Noms",
                    year: 2000,
                    songs: 12,
                    sales: "4 million"
                },
                {
                    title: "Thirteenth Step",
                    year: 2003,
                    songs: 12,
                    sales: "2 million"
                },
                {
                    title: "eMOTIVe",
                    year: 2004,
                    songs: 12,
                    sales: "500,000"
                },
                {
                    title: "Eat the Elephant",
                    year: 2018,
                    songs: 12,
                    sales: "400,000"
                }
            ],
            image: "/bandpix/apc.jpg",
            trivia: [
                "The name 'A Perfect Circle' was inspired by a recurring concept in Billy Howerdel's life and artwork, symbolizing completeness and unity.",
                "Maynard James Keenan often performs with the band wearing a wig, distinguishing his stage persona from his appearance in Tool.",
                "A Perfect Circle's debut album, 'Mer de Noms', reached No. 4 on the Billboard 200 chart.",
                "The band's single 'Judith' from 'Mer de Noms' became a major hit and remains one of their most popular songs.",
                "After a long hiatus, they released 'Eat the Elephant' in 2018, which received positive reviews from critics."
            ]
        },
        {
            "band_name": "Guns N' Roses",
            "formed_year": 1985,
            "studio_albums": 6,
            "recorded_songs": 70,
            "members": [
                {
                    "name": "Axl Rose",
                    "instruments": ["vocals", "piano"]
                },
                {
                    "name": "Slash",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Duff McKagan",
                    "instruments": ["bass", "vocals"]
                },
                {
                    "name": "Izzy Stradlin",
                    "instruments": ["guitar", "vocals"]
                },
                {
                    "name": "Steven Adler",
                    "instruments": ["drums"]
                },
                {
                    "name": "Matt Sorum",
                    "instruments": ["drums"]
                },
                {
                    "name": "Dizzy Reed",
                    "instruments": ["keyboards", "piano"]
                },
                {
                    "name": "Richard Fortus",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Frank Ferrer",
                    "instruments": ["drums"]
                },
                {
                    "name": "Melissa Reese",
                    "instruments": ["keyboards", "synthesizers"]
                }
            ],
            "albums": [
                {
                    "title": "Appetite for Destruction",
                    "year": 1987,
                    "songs": 12,
                    "sales": "30 million"
                },
                {
                    "title": "G N' R Lies",
                    "year": 1988,
                    "songs": 8,
                    "sales": "5 million"
                },
                {
                    "title": "Use Your Illusion I",
                    "year": 1991,
                    "songs": 16,
                    "sales": "18 million"
                },
                {
                    "title": "Use Your Illusion II",
                    "year": 1991,
                    "songs": 14,
                    "sales": "18 million"
                },
                {
                    "title": "The Spaghetti Incident?",
                    "year": 1993,
                    "songs": 12,
                    "sales": "1 million"
                },
                {
                    "title": "Chinese Democracy",
                    "year": 2008,
                    "songs": 14,
                    "sales": "2.5 million"
                }
            ],
            "image": "/bandpix/gnr.jpg",
            "trivia": [
                "Guns N' Roses' debut album 'Appetite for Destruction' is one of the best-selling albums of all time.",
                "The band's music video for 'November Rain' was the first YouTube video from the 1990s to reach one billion views.",
                "The original members reunited in 2016 for the 'Not in This Lifetime... Tour', which became one of the highest-grossing tours of all time.",
                "Axl Rose is the only original member still with the band continuously since its inception.",
                "The band's name was derived from the names of two bands that Axl Rose and Tracii Guns were in before forming Guns N' Roses: Hollywood Rose and L.A. Guns."
            ]
        },
        {
            "band_name": "Ghost",
            "formed_year": 2006,
            "studio_albums": 5,
            "recorded_songs": 50,
            "members": [
                {
                    "name": "Papa Emeritus IV (Tobias Forge)",
                    "instruments": ["vocals"]
                },
                {
                    "name": "Nameless Ghouls",
                    "instruments": ["guitar", "bass", "keyboards", "drums"]
                }
            ],
            "albums": [
                {
                    "title": "Opus Eponymous",
                    "year": 2010,
                    "songs": 9,
                    "sales": "100,000"
                },
                {
                    "title": "Infestissumam",
                    "year": 2013,
                    "songs": 10,
                    "sales": "250,000"
                },
                {
                    "title": "Meliora",
                    "year": 2015,
                    "songs": 10,
                    "sales": "500,000"
                },
                {
                    "title": "Prequelle",
                    "year": 2018,
                    "songs": 10,
                    "sales": "600,000"
                },
                {
                    "title": "Impera",
                    "year": 2022,
                    "songs": 12,
                    "sales": "200,000"
                }
            ],
            "image": "/bandpix/ghost.jpg",
            "trivia": [
                "Ghost is known for their elaborate stage presence and the mysterious identities of their band members, who are always seen in identical costumes.",
                "The band’s frontman, known as Papa Emeritus, changes his stage persona with each album cycle.",
                "Their third album, 'Meliora', was nominated for Best Rock Album at the 58th Grammy Awards.",
                "Ghost won the Grammy Award for Best Metal Performance in 2016 for their song 'Cirice'.",
                "Tobias Forge, the band's lead singer, was revealed to be the man behind Papa Emeritus after a lawsuit filed by former members in 2017."
            ]
        },
        {
            "band_name": "Pink Floyd",
            "formed_year": 1965,
            "studio_albums": 15,
            "recorded_songs": 200,
            "members": [
                {
                    "name": "Syd Barrett",
                    "instruments": ["vocals", "guitar"]
                },
                {
                    "name": "Roger Waters",
                    "instruments": ["bass", "vocals"]
                },
                {
                    "name": "David Gilmour",
                    "instruments": ["vocals", "guitar"]
                },
                {
                    "name": "Richard Wright",
                    "instruments": ["keyboards", "vocals"]
                },
                {
                    "name": "Nick Mason",
                    "instruments": ["drums"]
                }
            ],
            "albums": [
                {
                    "title": "The Piper at the Gates of Dawn",
                    "year": 1967,
                    "songs": 11,
                    "sales": "2 million"
                },
                {
                    "title": "The Dark Side of the Moon",
                    "year": 1973,
                    "songs": 10,
                    "sales": "45 million"
                },
                {
                    "title": "Wish You Were Here",
                    "year": 1975,
                    "songs": 5,
                    "sales": "20 million"
                },
                {
                    "title": "The Wall",
                    "year": 1979,
                    "songs": 26,
                    "sales": "30 million"
                }
            ],
            "image": "/bandpix/pinkfloyd.jpg",
            "trivia": [
                "Pink Floyd's 'The Dark Side of the Moon' remained on the Billboard charts for over 900 weeks.",
                "The band is known for their progressive and psychedelic music, and their live shows featured elaborate stage effects.",
                "Syd Barrett, the original frontman, left the band in 1968 due to mental health issues.",
                "The band's 1979 album 'The Wall' was adapted into a feature film.",
                "Roger Waters left the band in 1985, leading to legal disputes over the use of the band's name."
            ]
        },
        {
            "band_name": "Led Zeppelin",
            "formed_year": 1968,
            "studio_albums": 8,
            "recorded_songs": 92,
            "members": [
                {
                    "name": "Robert Plant",
                    "instruments": ["vocals"]
                },
                {
                    "name": "Jimmy Page",
                    "instruments": ["guitar"]
                },
                {
                    "name": "John Paul Jones",
                    "instruments": ["bass", "keyboards"]
                },
                {
                    "name": "John Bonham",
                    "instruments": ["drums"]
                }
            ],
            "albums": [
                {
                    "title": "Led Zeppelin",
                    "year": 1969,
                    "songs": 9,
                    "sales": "10 million"
                },
                {
                    "title": "Led Zeppelin II",
                    "year": 1969,
                    "songs": 9,
                    "sales": "12 million"
                },
                {
                    "title": "Led Zeppelin IV",
                    "year": 1971,
                    "songs": 8,
                    "sales": "37 million"
                },
                {
                    "title": "Physical Graffiti",
                    "year": 1975,
                    "songs": 15,
                    "sales": "16 million"
                }
            ],
            "image": "/bandpix/ledzeppelin.jpg",
            "trivia": [
                "Led Zeppelin's untitled fourth album is often referred to as 'Led Zeppelin IV' and includes the iconic song 'Stairway to Heaven'.",
                "The band is one of the best-selling music artists in the history of audio recording.",
                "John Bonham's death in 1980 led to the band's breakup.",
                "Their song 'Whole Lotta Love' is widely regarded as one of the greatest rock songs of all time.",
                "Led Zeppelin was inducted into the Rock and Roll Hall of Fame in 1995."
            ]
        },
        {
            "band_name": "Megadeth",
            "formed_year": 1983,
            "studio_albums": 16,
            "recorded_songs": 150,
            "members": [
                {
                    "name": "Dave Mustaine",
                    "instruments": ["vocals", "guitar"]
                },
                {
                    "name": "David Ellefson",
                    "instruments": ["bass"]
                },
                {
                    "name": "Kiko Loureiro",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Dirk Verbeuren",
                    "instruments": ["drums"]
                }
            ],
            "albums": [
                {
                    "title": "Killing Is My Business... and Business Is Good!",
                    "year": 1985,
                    "songs": 8,
                    "sales": "200,000"
                },
                {
                    "title": "Peace Sells... but Who's Buying?",
                    "year": 1986,
                    "songs": 8,
                    "sales": "1 million"
                },
                {
                    "title": "Rust in Peace",
                    "year": 1990,
                    "songs": 9,
                    "sales": "1 million"
                },
                {
                    "title": "Countdown to Extinction",
                    "year": 1992,
                    "songs": 11,
                    "sales": "2 million"
                }
            ],
            "image": "/bandpix/megadeth.jpg",
            "trivia": [
                "Dave Mustaine formed Megadeth after being fired from Metallica in 1983.",
                "Megadeth is considered one of the 'Big Four' of thrash metal, along with Metallica, Slayer, and Anthrax.",
                "The band's mascot, Vic Rattlehead, appears on many of their album covers.",
                "Megadeth has been nominated for twelve Grammy Awards, winning one in 2017 for 'Dystopia'.",
                "Dave Mustaine is the only constant member of the band since its inception."
            ]
        },
        {
            "band_name": "Metallica",
            "formed_year": 1981,
            "studio_albums": 10,
            "recorded_songs": 150,
            "members": [
                {
                    "name": "James Hetfield",
                    "instruments": ["vocals", "guitar"]
                },
                {
                    "name": "Lars Ulrich",
                    "instruments": ["drums"]
                },
                {
                    "name": "Kirk Hammett",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Robert Trujillo",
                    "instruments": ["bass"]
                }
            ],
            "albums": [
                {
                    "title": "Kill 'Em All",
                    "year": 1983,
                    "songs": 10,
                    "sales": "3 million"
                },
                {
                    "title": "Ride the Lightning",
                    "year": 1984,
                    "songs": 8,
                    "sales": "6 million"
                },
                {
                    "title": "Master of Puppets",
                    "year": 1986,
                    "songs": 8,
                    "sales": "6 million"
                },
                {
                    "title": "Metallica (The Black Album)",
                    "year": 1991,
                    "songs": 12,
                    "sales": "16 million"
                }
            ],
            "image": "/bandpix/metallica.jpg",
            "trivia": [
                "Metallica's self-titled album, also known as 'The Black Album', is one of the best-selling albums of all time.",
                "The band was inducted into the Rock and Roll Hall of Fame in 2009.",
                "Metallica is known for their fast tempos, instrumentals, and aggressive musicianship.",
                "Their 2004 documentary 'Some Kind of Monster' provides a raw look at the band's internal struggles.",
                "Cliff Burton, Metallica's original bassist, died in a bus accident in 1986."
            ]
        },
        {
            "band_name": "The Doors",
            "formed_year": 1965,
            "studio_albums": 9,
            "recorded_songs": 90,
            "members": [
                {
                    "name": "Jim Morrison",
                    "instruments": ["vocals"]
                },
                {
                    "name": "Ray Manzarek",
                    "instruments": ["keyboards"]
                },
                {
                    "name": "Robby Krieger",
                    "instruments": ["guitar"]
                },
                {
                    "name": "John Densmore",
                    "instruments": ["drums"]
                }
            ],
            "albums": [
                {
                    "title": "The Doors",
                    "year": 1967,
                    "songs": 11,
                    "sales": "4 million"
                },
                {
                    "title": "Strange Days",
                    "year": 1967,
                    "songs": 10,
                    "sales": "1 million"
                },
                {
                    "title": "Waiting for the Sun",
                    "year": 1968,
                    "songs": 11,
                    "sales": "1 million"
                },
                {
                    "title": "L.A. Woman",
                    "year": 1971,
                    "songs": 10,
                    "sales": "2 million"
                }
            ],
            "image": "/bandpix/thedoors.jpg",
            "trivia": [
                "The Doors took their name from Aldous Huxley's book 'The Doors of Perception'.",
                "Jim Morrison was known for his wild stage presence and poetic lyrics.",
                "Their debut album included the hit single 'Light My Fire', which became a No. 1 hit on the Billboard Hot 100.",
                "The band's last performance with Jim Morrison was in December 1970.",
                "Jim Morrison died in Paris in 1971 at the age of 27, cementing his place in the '27 Club'."
            ]
        },
        {
            "band_name": "Clutch",
            "formed_year": 1991,
            "studio_albums": 13,
            "recorded_songs": 150,
            "members": [
                {
                    "name": "Neil Fallon",
                    "instruments": ["vocals", "guitar"]
                },
                {
                    "name": "Tim Sult",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Dan Maines",
                    "instruments": ["bass"]
                },
                {
                    "name": "Jean-Paul Gaster",
                    "instruments": ["drums"]
                }
            ],
            "albums": [
                {
                    "title": "Transnational Speedway League: Anthems, Anecdotes and Undeniable Truths",
                    "year": 1993,
                    "songs": 12,
                    "sales": "unknown"
                },
                {
                    "title": "Clutch",
                    "year": 1995,
                    "songs": 13,
                    "sales": "unknown"
                },
                {
                    "title": "Blast Tyrant",
                    "year": 2004,
                    "songs": 15,
                    "sales": "unknown"
                },
                {
                    "title": "Earth Rocker",
                    "year": 2013,
                    "songs": 11,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/clutch.jpg",
            "trivia": [
                "Clutch is known for their energetic live shows and Neil Fallon's distinctive voice and lyrics.",
                "The band's music spans a variety of genres, including hard rock, blues rock, and stoner rock.",
                "Their song 'Electric Worry' is one of their most popular tracks and is frequently featured in media.",
                "The band has a dedicated following and is known for their extensive touring schedule.",
                "Clutch founded their own record label, Weathermaker Music, in 2008."
            ]
        },
        {
            "band_name": "Faith No More",
            "formed_year": 1979,
            "studio_albums": 7,
            "recorded_songs": 70,
            "members": [
                {
                    "name": "Mike Patton",
                    "instruments": ["vocals"]
                },
                {
                    "name": "Billy Gould",
                    "instruments": ["bass"]
                },
                {
                    "name": "Roddy Bottum",
                    "instruments": ["keyboards"]
                },
                {
                    "name": "Mike Bordin",
                    "instruments": ["drums"]
                },
                {
                    "name": "Jon Hudson",
                    "instruments": ["guitar"]
                }
            ],
            "albums": [
                {
                    "title": "We Care a Lot",
                    "year": 1985,
                    "songs": 10,
                    "sales": "unknown"
                },
                {
                    "title": "The Real Thing",
                    "year": 1989,
                    "songs": 11,
                    "sales": "1.5 million"
                },
                {
                    "title": "Angel Dust",
                    "year": 1992,
                    "songs": 14,
                    "sales": "700,000"
                },
                {
                    "title": "Sol Invictus",
                    "year": 2015,
                    "songs": 10,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/faithnomore.jpg",
            "trivia": [
                "Faith No More is considered one of the most influential bands in the alternative metal genre.",
                "Their breakthrough hit 'Epic' helped bring rap-rock to the mainstream.",
                "Mike Patton joined the band in 1988, replacing original singer Chuck Mosley.",
                "The band disbanded in 1998 but reunited in 2009 and released 'Sol Invictus' in 2015.",
                "Roddy Bottum is one of the few openly gay musicians in the heavy metal genre."
            ]
        },
        {
            "band_name": "Fantômas",
            "formed_year": 1998,
            "studio_albums": 4,
            "recorded_songs": 75,
            "members": [
                {
                    "name": "Mike Patton",
                    "instruments": ["vocals"]
                },
                {
                    "name": "Buzz Osborne",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Trevor Dunn",
                    "instruments": ["bass"]
                },
                {
                    "name": "Dave Lombardo",
                    "instruments": ["drums"]
                }
            ],
            "albums": [
                {
                    "title": "Fantômas",
                    "year": 1999,
                    "songs": 30,
                    "sales": "unknown"
                },
                {
                    "title": "The Director's Cut",
                    "year": 2001,
                    "songs": 16,
                    "sales": "unknown"
                },
                {
                    "title": "Delìrium Còrdia",
                    "year": 2004,
                    "songs": 1,
                    "sales": "unknown"
                },
                {
                    "title": "Suspended Animation",
                    "year": 2005,
                    "songs": 30,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/fantomas.jpg",
            "trivia": [
                "Fantômas is a supergroup featuring members from various influential bands such as Faith No More, Melvins, and Slayer.",
                "The band's music is known for its experimental nature, blending elements of metal, avant-garde, and film scores.",
                "Their album 'The Director's Cut' consists of cover versions of themes from horror and thriller films.",
                "Fantômas rarely performs live, making their concerts highly anticipated events.",
                "Mike Patton named the band after a fictional villain from a series of French crime novels."
            ]
        },
        {
            "band_name": "Tomahawk",
            "formed_year": 1999,
            "studio_albums": 5,
            "recorded_songs": 50,
            "members": [
                {
                    "name": "Mike Patton",
                    "instruments": ["vocals"]
                },
                {
                    "name": "Duane Denison",
                    "instruments": ["guitar"]
                },
                {
                    "name": "John Stanier",
                    "instruments": ["drums"]
                },
                {
                    "name": "Trevor Dunn",
                    "instruments": ["bass"]
                }
            ],
            "albums": [
                {
                    "title": "Tomahawk",
                    "year": 2001,
                    "songs": 13,
                    "sales": "unknown"
                },
                {
                    "title": "Mit Gas",
                    "year": 2003,
                    "songs": 12,
                    "sales": "unknown"
                },
                {
                    "title": "Anonymous",
                    "year": 2007,
                    "songs": 13,
                    "sales": "unknown"
                },
                {
                    "title": "Tonic Immobility",
                    "year": 2021,
                    "songs": 12,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/tomahawk.jpg",
            "trivia": [
                "Tomahawk was formed by members of bands such as Faith No More, The Jesus Lizard, Helmet, and Mr. Bungle.",
                "Their third album 'Anonymous' features songs inspired by Native American music.",
                "Mike Patton is known for his wide vocal range and versatile singing style.",
                "Duane Denison has also played with bands like The Jesus Lizard and Unsemble.",
                "The band's music incorporates elements of alternative rock, experimental rock, and post-rock."
            ]
        },
        {
            "band_name": "Slayer",
            "formed_year": 1981,
            "studio_albums": 12,
            "recorded_songs": 103,
            "members": [
              {
                "name": "Tom Araya",
                "instruments": ["vocals", "bass"]
              },
              {
                "name": "Kerry King",
                "instruments": ["guitar"]
              },
              {
                "name": "Jeff Hanneman",
                "instruments": ["guitar"]
              },
              {
                "name": "Dave Lombardo",
                "instruments": ["drums"]
              },
              {
                "name": "Paul Bostaph",
                "instruments": ["drums"]
              },
              {
                "name": "Gary Holt",
                "instruments": ["guitar"]
              }
            ],
            "albums": [
              {
                "title": "Show No Mercy",
                "year": 1983,
                "songs": 10,
                "sales": "unknown"
              },
              {
                "title": "Hell Awaits",
                "year": 1985,
                "songs": 7,
                "sales": "unknown"
              },
              {
                "title": "Reign in Blood",
                "year": 1986,
                "songs": 10,
                "sales": "1 million"
              },
              {
                "title": "South of Heaven",
                "year": 1988,
                "songs": 10,
                "sales": "unknown"
              },
              {
                "title": "Seasons in the Abyss",
                "year": 1990,
                "songs": 10,
                "sales": "500,000"
              },
              {
                "title": "Divine Intervention",
                "year": 1994,
                "songs": 10,
                "sales": "unknown"
              },
              {
                "title": "Diabolus in Musica",
                "year": 1998,
                "songs": 13,
                "sales": "unknown"
              },
              {
                "title": "God Hates Us All",
                "year": 2001,
                "songs": 13,
                "sales": "unknown"
              },
              {
                "title": "Christ Illusion",
                "year": 2006,
                "songs": 10,
                "sales": "unknown"
              },
              {
                "title": "World Painted Blood",
                "year": 2009,
                "songs": 11,
                "sales": "unknown"
              },
              {
                "title": "Repentless",
                "year": 2015,
                "songs": 12,
                "sales": "unknown"
              }
            ],
            "image": "/bandpix/slayer.jpg",
            "trivia": [
              "Slayer is considered one of the 'Big Four' of thrash metal, along with Metallica, Megadeth, and Anthrax.",
              "Their third album, 'Reign in Blood', is widely regarded as one of the greatest heavy metal albums of all time.",
              "Jeff Hanneman, one of the founding members, passed away in 2013 due to liver failure.",
              "The band's music is known for its aggressive style and controversial lyrics.",
              "Slayer announced their farewell tour in 2018, marking the end of nearly four decades of music... and of course 5 years after wil reunite. "
            ]
          },          
        {
            "band_name": "Mushroomhead",
            "formed_year": 1993,
            "studio_albums": 8,
            "recorded_songs": 88,
            "members": [
                {
                    "name": "J Mann",
                    "instruments": ["vocals"]
                },
                {
                    "name": "Jeffrey Nothing",
                    "instruments": ["vocals"]
                },
                {
                    "name": "Skinny",
                    "instruments": ["drums"]
                },
                {
                    "name": "Rick Thomas",
                    "instruments": ["keyboards", "samples"]
                },
                {
                    "name": "Dr. F",
                    "instruments": ["bass"]
                },
                {
                    "name": "Tom Schmitz",
                    "instruments": ["keyboards"]
                }
            ],
            "albums": [
                {
                    "title": "Mushroomhead",
                    "year": 1995,
                    "songs": 10,
                    "sales": "unknown"
                },
                {
                    "title": "XX",
                    "year": 2001,
                    "songs": 14,
                    "sales": "unknown"
                },
                {
                    "title": "Savior Sorrow",
                    "year": 2006,
                    "songs": 12,
                    "sales": "unknown"
                },
                {
                    "title": "A Wonderful Life",
                    "year": 2020,
                    "songs": 17,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/mushroomhead.jpg",
            "trivia": [
                "Mushroomhead is known for their distinctive masks and theatrical live performances.",
                "The band has gone through numerous lineup changes over the years.",
                "Their music blends elements of industrial metal, nu-metal, and alternative metal.",
                "They have a strong cult following, particularly in their hometown of Cleveland, Ohio.",
                "Mushroomhead has often been compared to Slipknot, although both bands developed their unique styles independently."
            ]
        },
        {
            "band_name": "Alice in Chains",
            "formed_year": 1987,
            "studio_albums": 6,
            "recorded_songs": 80,
            "members": [
                {
                    "name": "Jerry Cantrell",
                    "instruments": ["guitar", "vocals"]
                },
                {
                    "name": "Sean Kinney",
                    "instruments": ["drums"]
                },
                {
                    "name": "Mike Inez",
                    "instruments": ["bass"]
                },
                {
                    "name": "William DuVall",
                    "instruments": ["vocals", "guitar"]
                },
                {
                    "name": "Layne Staley",
                    "instruments": ["vocals"]
                }
            ],
            "albums": [
                {
                    "title": "Facelift",
                    "year": 1990,
                    "songs": 12,
                    "sales": "2 million"
                },
                {
                    "title": "Dirt",
                    "year": 1992,
                    "songs": 13,
                    "sales": "4 million"
                },
                {
                    "title": "Alice in Chains",
                    "year": 1995,
                    "songs": 12,
                    "sales": "3 million"
                },
                {
                    "title": "Rainier Fog",
                    "year": 2018,
                    "songs": 10,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/aliceinchains.jpg",
            "trivia": [
                "Alice in Chains is one of the most successful bands to emerge from the Seattle grunge scene.",
                "Their music often features dark and somber themes, dealing with depression, addiction, and death.",
                "Layne Staley, the band's original vocalist, passed away in 2002 due to a drug overdose.",
                "Jerry Cantrell is known for his heavy, doom-laden guitar riffs and harmonized vocals.",
                "The band reunited in 2005 with William DuVall as the new lead vocalist."
            ]
        },
        {
            "band_name": "Soundgarden",
            "formed_year": 1984,
            "studio_albums": 6,
            "recorded_songs": 75,
            "members": [
                {
                    "name": "Chris Cornell",
                    "instruments": ["vocals", "guitar"]
                },
                {
                    "name": "Kim Thayil",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Ben Shepherd",
                    "instruments": ["bass"]
                },
                {
                    "name": "Matt Cameron",
                    "instruments": ["drums"]
                }
            ],
            "albums": [
                {
                    "title": "Ultramega OK",
                    "year": 1988,
                    "songs": 13,
                    "sales": "unknown"
                },
                {
                    "title": "Badmotorfinger",
                    "year": 1991,
                    "songs": 12,
                    "sales": "2 million"
                },
                {
                    "title": "Superunknown",
                    "year": 1994,
                    "songs": 15,
                    "sales": "5 million"
                },
                {
                    "title": "King Animal",
                    "year": 2012,
                    "songs": 13,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/soundgarden.jpg",
            "trivia": [
                "Soundgarden was one of the pioneering bands of the Seattle grunge movement.",
                "Their breakthrough album, 'Superunknown', debuted at number one on the Billboard 200 chart.",
                "Chris Cornell, the band's lead singer, passed away in 2017, leaving a significant impact on the music world.",
                "Soundgarden was known for their heavy guitar riffs and Chris Cornell's wide vocal range.",
                "The band disbanded in 1997 but reunited in 2010, releasing 'King Animal' in 2012."
            ]
        },
        {
            "band_name": "Pearl Jam",
            "formed_year": 1990,
            "studio_albums": 11,
            "recorded_songs": 150,
            "members": [
                {
                    "name": "Eddie Vedder",
                    "instruments": ["vocals", "guitar"]
                },
                {
                    "name": "Stone Gossard",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Jeff Ament",
                    "instruments": ["bass"]
                },
                {
                    "name": "Mike McCready",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Matt Cameron",
                    "instruments": ["drums"]
                }
            ],
            "albums": [
                {
                    "title": "Ten",
                    "year": 1991,
                    "songs": 11,
                    "sales": "13 million"
                },
                {
                    "title": "Vs.",
                    "year": 1993,
                    "songs": 12,
                    "sales": "7 million"
                },
                {
                    "title": "Vitalogy",
                    "year": 1994,
                    "songs": 14,
                    "sales": "5 million"
                },
                {
                    "title": "Gigaton",
                    "year": 2020,
                    "songs": 12,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/pearljam.jpg",
            "trivia": [
                "Pearl Jam is one of the most influential bands of the 1990s grunge movement.",
                "Their debut album 'Ten' is one of the best-selling rock albums of all time.",
                "The band is known for their activism and advocacy for social and political issues.",
                "Pearl Jam has a reputation for their powerful and improvisational live performances.",
                "Eddie Vedder's distinctive baritone voice and introspective lyrics are a signature of the band's sound."
            ]
        },
        {
            "band_name": "King Diamond",
            "formed_year": 1985,
            "studio_albums": 12,
            "recorded_songs": 120,
            "members": [
                {
                    "name": "King Diamond",
                    "instruments": ["vocals", "keyboards"]
                },
                {
                    "name": "Andy LaRocque",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Mike Wead",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Pontus Egberg",
                    "instruments": ["bass"]
                },
                {
                    "name": "Matt Thompson",
                    "instruments": ["drums"]
                }
            ],
            "albums": [
                {
                    "title": "Fatal Portrait",
                    "year": 1986,
                    "songs": 9,
                    "sales": "unknown"
                },
                {
                    "title": "Abigail",
                    "year": 1987,
                    "songs": 9,
                    "sales": "unknown"
                },
                {
                    "title": "Them",
                    "year": 1988,
                    "songs": 11,
                    "sales": "unknown"
                },
                {
                    "title": "The Eye",
                    "year": 1990,
                    "songs": 11,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/kingdiamond.jpg",
            "trivia": [
                "King Diamond is known for his powerful, high-pitched falsetto vocals and horror-themed concept albums.",
                "The band was formed after King Diamond left Mercyful Fate, another influential metal band.",
                "The album 'Abigail' is considered a classic in the heavy metal genre and tells a ghost story set in 1845.",
                "King Diamond often performs in elaborate face paint and theatrical stage outfits.",
                "The band's live shows frequently include horror elements, such as coffins, skeletons, and haunted houses."
            ]
        },
        {
            "band_name": "Sepultura",
            "formed_year": 1984,
            "studio_albums": 15,
            "recorded_songs": 140,
            "members": [
                {
                    "name": "Derrick Green",
                    "instruments": ["vocals"]
                },
                {
                    "name": "Andreas Kisser",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Paulo Jr.",
                    "instruments": ["bass"]
                },
                {
                    "name": "Eloy Casagrande",
                    "instruments": ["drums"]
                },
                {
                    "name": "Max Cavalera",
                    "instruments": ["vocals", "guitar"]
                }
            ],
            "albums": [
                {
                    "title": "Chaos A.D.",
                    "year": 1993,
                    "songs": 12,
                    "sales": "1 million"
                },
                {
                    "title": "Roots",
                    "year": 1996,
                    "songs": 15,
                    "sales": "2 million"
                },
                {
                    "title": "Dante XXI",
                    "year": 2006,
                    "songs": 15,
                    "sales": "unknown"
                },
                {
                    "title": "Quadra",
                    "year": 2020,
                    "songs": 12,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/sepultura.jpg",
            "trivia": [
                "Sepultura is a Brazilian heavy metal band that has been influential in the development of both thrash and groove metal.",
                "Their 1996 album 'Roots' incorporated elements of Brazilian folk music, setting it apart from their earlier work.",
                "Max and Igor Cavalera, two of the founding members, left the band in the late 1990s to form the band Soulfly.",
                "Sepultura has undergone numerous lineup changes but remains an active and influential band in the metal community.",
                "The band's name means 'grave' in Portuguese, inspired by a Motörhead song."
            ]
        },
        {
            "band_name": "Muse",
            "formed_year": 1994,
            "studio_albums": 8,
            "recorded_songs": 100,
            "members": [
                {
                    "name": "Matt Bellamy",
                    "instruments": ["vocals", "guitar", "keyboards"]
                },
                {
                    "name": "Chris Wolstenholme",
                    "instruments": ["bass", "backing vocals"]
                },
                {
                    "name": "Dominic Howard",
                    "instruments": ["drums"]
                }
            ],
            "albums": [
                {
                    "title": "Showbiz",
                    "year": 1999,
                    "songs": 12,
                    "sales": "1 million"
                },
                {
                    "title": "Absolution",
                    "year": 2003,
                    "songs": 14,
                    "sales": "3 million"
                },
                {
                    "title": "Black Holes and Revelations",
                    "year": 2006,
                    "songs": 12,
                    "sales": "5 million"
                },
                {
                    "title": "Simulation Theory",
                    "year": 2018,
                    "songs": 11,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/muse.jpg",
            "trivia": [
                "Muse is known for their energetic live performances and their fusion of alternative rock, electronic, and classical music elements.",
                "Matt Bellamy, the band's lead vocalist, is also an accomplished pianist and known for his distinctive falsetto voice.",
                "Their 2006 album 'Black Holes and Revelations' brought them international fame with hits like 'Supermassive Black Hole' and 'Knights of Cydonia'.",
                "Muse's concerts often feature elaborate stage designs, including large video screens, pyrotechnics, and lasers.",
                "The band has won numerous awards, including two Grammy Awards and an American Music Award."
            ]
        },
        {
            "band_name": "The Rolling Stones",
            "formed_year": 1962,
            "studio_albums": 30,
            "recorded_songs": 373,
            "members": [
                {
                    "name": "Mick Jagger",
                    "instruments": ["vocals", "harmonica"]
                },
                {
                    "name": "Keith Richards",
                    "instruments": ["guitar", "vocals"]
                },
                {
                    "name": "Charlie Watts",
                    "instruments": ["drums"]
                },
                {
                    "name": "Ronnie Wood",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Brian Jones",
                    "instruments": ["guitar", "harmonica", "keyboards"]
                },
                {
                    "name": "Bill Wyman",
                    "instruments": ["bass"]
                }
            ],
            "albums": [
                {
                    "title": "Beggars Banquet",
                    "year": 1968,
                    "songs": 10,
                    "sales": "unknown"
                },
                {
                    "title": "Sticky Fingers",
                    "year": 1971,
                    "songs": 10,
                    "sales": "3 million"
                },
                {
                    "title": "Exile on Main St.",
                    "year": 1972,
                    "songs": 18,
                    "sales": "2 million"
                },
                {
                    "title": "Blue & Lonesome",
                    "year": 2016,
                    "songs": 12,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/rollingstones.webp",
            "trivia": [
                "The Rolling Stones are one of the longest-running and most successful rock bands in history, known as 'The Greatest Rock and Roll Band in the World'.",
                "Their logo, the tongue and lips design, is one of the most iconic symbols in rock music.",
                "The band's 1969 tour of the United States, documented in the film 'Gimme Shelter', ended tragically with the death of a fan at the Altamont Free Concert.",
                "They were inducted into the Rock and Roll Hall of Fame in 1989.",
                "Despite numerous lineup changes and personal challenges, the Rolling Stones have continued to tour and release new music well into the 21st century."
            ]
        },
        {
            "band_name": "Eminem",
            "formed_year": 1996,
            "studio_albums": 11,
            "recorded_songs": 220,
            "members": [
                {
                    "name": "Marshall Mathers",
                    "instruments": ["vocals"]
                }
            ],
            "albums": [
                {
                    "title": "The Slim Shady LP",
                    "year": 1999,
                    "songs": 20,
                    "sales": "10 million"
                },
                {
                    "title": "The Marshall Mathers LP",
                    "year": 2000,
                    "songs": 18,
                    "sales": "21 million"
                },
                {
                    "title": "The Eminem Show",
                    "year": 2002,
                    "songs": 20,
                    "sales": "27 million"
                },
                {
                    "title": "Music to Be Murdered By",
                    "year": 2020,
                    "songs": 20,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/eminem.jpg",
            "trivia": [
                "Eminem, born Marshall Mathers, is one of the best-selling music artists of all time, known for his rapid-fire lyrical delivery and controversial themes.",
                "He won the Academy Award for Best Original Song for 'Lose Yourself' from the film '8 Mile'.",
                "Eminem's alter ego, Slim Shady, is known for his dark and violent lyrical themes.",
                "He has had several public feuds with other artists, including Machine Gun Kelly and Mariah Carey.",
                "Eminem founded the record label Shady Records, which has signed artists like 50 Cent and D12."
            ]
        },
        {
            "band_name": "Dr. Dre",
            "formed_year": 1985,
            "studio_albums": 3,
            "recorded_songs": 45,
            "members": [
                {
                    "name": "Andre Young",
                    "instruments": ["vocals", "keyboards", "drums"]
                }
            ],
            "albums": [
                {
                    "title": "The Chronic",
                    "year": 1992,
                    "songs": 16,
                    "sales": "6 million"
                },
                {
                    "title": "2001",
                    "year": 1999,
                    "songs": 22,
                    "sales": "7 million"
                },
                {
                    "title": "Compton",
                    "year": 2015,
                    "songs": 16,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/drdre.jpg",
            "trivia": [
                "Dr. Dre, born Andre Young, is a legendary producer and rapper who played a key role in popularizing West Coast hip-hop.",
                "He co-founded N.W.A, one of the most influential and controversial rap groups in history.",
                "Dr. Dre discovered and produced music for several successful artists, including Snoop Dogg, Eminem, and 50 Cent.",
                "In addition to his music career, Dre is a successful entrepreneur, co-founding the headphone company Beats by Dre, which was acquired by Apple Inc.",
                "His debut solo album, 'The Chronic', is considered one of the greatest hip-hop albums of all time."
            ]
        },
        {
            "band_name": "Anthrax",
            "formed_year": 1981,
            "studio_albums": 11,
            "recorded_songs": 140,
            "members": [
                {
                    "name": "Scott Ian",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Charlie Benante",
                    "instruments": ["drums"]
                },
                {
                    "name": "Frank Bello",
                    "instruments": ["bass"]
                },
                {
                    "name": "Joey Belladonna",
                    "instruments": ["vocals"]
                },
                {
                    "name": "Jonathan Donais",
                    "instruments": ["guitar"]
                }
            ],
            "albums": [
                {
                    "title": "Among the Living",
                    "year": 1987,
                    "songs": 9,
                    "sales": "gold"
                },
                {
                    "title": "Persistence of Time",
                    "year": 1990,
                    "songs": 11,
                    "sales": "gold"
                },
                {
                    "title": "Sound of White Noise",
                    "year": 1993,
                    "songs": 11,
                    "sales": "gold"
                },
                {
                    "title": "For All Kings",
                    "year": 2016,
                    "songs": 11,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/anthrax.png",
            "trivia": [
                "Anthrax is one of the 'Big Four' of thrash metal, alongside Metallica, Slayer, and Megadeth.",
                "The band's mascot, 'Not Man', appears on several album covers and merchandise.",
                "They were one of the first metal bands to collaborate with a hip-hop artist, recording 'Bring the Noise' with Public Enemy.",
                "Scott Ian is known for his signature goatee and his energetic stage presence.",
                "Anthrax has influenced many bands and artists across various genres, including heavy metal, punk, and hip-hop."
            ]
        },
        {
            "band_name": "Skid Row",
            "formed_year": 1986,
            "studio_albums": 5,
            "recorded_songs": 48,
            "members": [
                {
                    "name": "Rachel Bolan",
                    "instruments": ["bass", "backing vocals"]
                },
                {
                    "name": "Dave Sabo",
                    "instruments": ["guitar", "backing vocals"]
                },
                {
                    "name": "Scotti Hill",
                    "instruments": ["guitar", "backing vocals"]
                },
                {
                    "name": "Rob Hammersmith",
                    "instruments": ["drums"]
                },
                {
                    "name": "ZP Theart",
                    "instruments": ["vocals"]
                }
            ],
            "albums": [
                {
                    "title": "Skid Row",
                    "year": 1989,
                    "songs": 11,
                    "sales": "5 million"
                },
                {
                    "title": "Slave to the Grind",
                    "year": 1991,
                    "songs": 12,
                    "sales": "2 million"
                },
                {
                    "title": "Subhuman Race",
                    "year": 1995,
                    "songs": 13,
                    "sales": "unknown"
                },
                {
                    "title": "Thickskin",
                    "year": 2003,
                    "songs": 12,
                    "sales": "unknown"
                },
                {
                    "title": "Revolutions per Minute",
                    "year": 2006,
                    "songs": 12,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/skidrow.jpg",
            "trivia": [
                "Skid Row's debut album, 'Skid Row', was a commercial success, featuring hits like '18 and Life' and 'I Remember You'.",
                "The band's second album, 'Slave to the Grind', debuted at number one on the Billboard 200, making it the first heavy metal album to do so.",
                "Sebastian Bach, the band's original lead vocalist, left the band in 1996 and has had a successful solo career.",
                "Skid Row's music combines elements of glam metal, heavy metal, and hard rock.",
                "Despite numerous lineup changes, the band continues to tour and record new music."
            ]
        },
        {
            "band_name": "Slaughter",
            "formed_year": 1988,
            "studio_albums": 5,
            "recorded_songs": 50,
            "members": [
                {
                    "name": "Mark Slaughter",
                    "instruments": ["vocals", "guitar"]
                },
                {
                    "name": "Dana Strum",
                    "instruments": ["bass", "backing vocals"]
                },
                {
                    "name": "Jeff Blando",
                    "instruments": ["guitar", "backing vocals"]
                },
                {
                    "name": "Zoltan Chaney",
                    "instruments": ["drums"]
                }
            ],
            "albums": [
                {
                    "title": "Stick It to Ya",
                    "year": 1990,
                    "songs": 12,
                    "sales": "2 million"
                },
                {
                    "title": "The Wild Life",
                    "year": 1992,
                    "songs": 12,
                    "sales": "1 million"
                },
                {
                    "title": "Fear No Evil",
                    "year": 1995,
                    "songs": 12,
                    "sales": "unknown"
                },
                {
                    "title": "Revolution",
                    "year": 1997,
                    "songs": 12,
                    "sales": "unknown"
                },
                {
                    "title": "Back to Reality",
                    "year": 1999,
                    "songs": 12,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/slaughter.jpg",
            "trivia": [
                "Slaughter's debut album, 'Stick It to Ya', featured the hit singles 'Up All Night' and 'Fly to the Angels'.",
                "The band was formed by Mark Slaughter and Dana Strum after their previous band, Vinnie Vincent Invasion, disbanded.",
                "Slaughter was one of the last bands of the glam metal era to achieve significant commercial success.",
                "The band's music videos were heavily played on MTV during the early 1990s.",
                "Slaughter continues to perform live, often appearing at rock festivals and nostalgic tours."
            ]
        },
        {
            "band_name": "Queen",
            "formed_year": 1970,
            "studio_albums": 15,
            "recorded_songs": 180,
            "members": [
                {
                    "name": "Freddie Mercury",
                    "instruments": ["vocals", "piano"]
                },
                {
                    "name": "Brian May",
                    "instruments": ["guitar", "vocals"]
                },
                {
                    "name": "Roger Taylor",
                    "instruments": ["drums", "vocals"]
                },
                {
                    "name": "John Deacon",
                    "instruments": ["bass"]
                }
            ],
            "albums": [
                {
                    "title": "A Night at the Opera",
                    "year": 1975,
                    "songs": 12,
                    "sales": "6 million"
                },
                {
                    "title": "News of the World",
                    "year": 1977,
                    "songs": 11,
                    "sales": "4 million"
                },
                {
                    "title": "The Game",
                    "year": 1980,
                    "songs": 10,
                    "sales": "4 million"
                },
                {
                    "title": "Innuendo",
                    "year": 1991,
                    "songs": 12,
                    "sales": "2 million"
                }
            ],
            "image": "/bandpix/queen.jpg",
            "trivia": [
                "Queen is known for their eclectic musical style, which includes rock, opera, and pop influences.",
                "Their 1975 song 'Bohemian Rhapsody' is widely considered one of the greatest rock songs of all time.",
                "Freddie Mercury, the band's iconic frontman, was known for his powerful voice and flamboyant stage presence.",
                "Queen's performance at Live Aid in 1985 is often cited as one of the greatest live performances in rock history.",
                "The band was inducted into the Rock and Roll Hall of Fame in 2001."
            ]
        },
        {
            "band_name": "Hans Zimmer",
            "formed_year": 1984,
            "studio_albums": 0,
            "recorded_songs": 500,
            "members": [
                {
                    "name": "Hans Zimmer",
                    "instruments": ["keyboards", "synthesizers"]
                }
            ],
            "albums": [
                {
                    "title": "The Lion King (Soundtrack)",
                    "year": 1994,
                    "songs": 12,
                    "sales": "10 million"
                },
                {
                    "title": "Inception (Soundtrack)",
                    "year": 2010,
                    "songs": 12,
                    "sales": "unknown"
                },
                {
                    "title": "Interstellar (Soundtrack)",
                    "year": 2014,
                    "songs": 24,
                    "sales": "unknown"
                },
                {
                    "title": "Dune (Soundtrack)",
                    "year": 2021,
                    "songs": 22,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/hanszimmer.jpg",
            "trivia": [
                "Hans Zimmer is a renowned film composer known for his work on over 150 films.",
                "He won an Academy Award for Best Original Score for 'The Lion King' in 1995.",
                "Zimmer's collaborations with director Christopher Nolan, including scores for 'Inception' and 'Interstellar', have been critically acclaimed.",
                "He is known for his innovative use of synthesizers and traditional orchestral music.",
                "Zimmer has received numerous awards and nominations, including Golden Globes and Grammy Awards."
            ]
        },
        {
            "band_name": "Tool",
            "formed_year": 1990,
            "studio_albums": 5,
            "recorded_songs": 50,
            "members": [
                {
                    "name": "Maynard James Keenan",
                    "instruments": ["vocals"]
                },
                {
                    "name": "Adam Jones",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Justin Chancellor",
                    "instruments": ["bass"]
                },
                {
                    "name": "Danny Carey",
                    "instruments": ["drums"]
                }
            ],
            "albums": [
                {
                    "title": "Undertow",
                    "year": 1993,
                    "songs": 10,
                    "sales": "3 million"
                },
                {
                    "title": "Ænima",
                    "year": 1996,
                    "songs": 15,
                    "sales": "3.5 million"
                },
                {
                    "title": "Lateralus",
                    "year": 2001,
                    "songs": 13,
                    "sales": "2.6 million"
                },
                {
                    "title": "10,000 Days",
                    "year": 2006,
                    "songs": 11,
                    "sales": "2.5 million"
                },
                {
                    "title": "Fear Inoculum",
                    "year": 2019,
                    "songs": 10,
                    "sales": "unknown"
                }
            ],
            "image": "/bandpix/tool.jpg",
            "trivia": [
                "Tool is known for their complex and lengthy song structures, often incorporating elements of progressive rock and metal.",
                "Their album 'Ænima' won the Grammy Award for Best Metal Performance in 1998.",
                "Maynard James Keenan is also the lead vocalist for A Perfect Circle and Puscifer.",
                "Tool's music videos often feature stop-motion animation and surreal visuals.",
                "The band is known for their emphasis on visual art, often collaborating with artists like Alex Grey."
            ]
        },
        {
            "band_name": "Pantera",
            "formed_year": 1981,
            "studio_albums": 9,
            "recorded_songs": 100,
            "members": [
                {
                    "name": "Phil Anselmo",
                    "instruments": ["vocals"]
                },
                {
                    "name": "Dimebag Darrell",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Rex Brown",
                    "instruments": ["bass"]
                },
                {
                    "name": "Vinnie Paul",
                    "instruments": ["drums"]
                }
            ],
            "albums": [
                {
                    "title": "Cowboys from Hell",
                    "year": 1990,
                    "songs": 12,
                    "sales": "2 million"
                },
                {
                    "title": "Vulgar Display of Power",
                    "year": 1992,
                    "songs": 11,
                    "sales": "2 million"
                },
                {
                    "title": "Far Beyond Driven",
                    "year": 1994,
                    "songs": 12,
                    "sales": "1.4 million"
                },
                {
                    "title": "The Great Southern Trendkill",
                    "year": 1996,
                    "songs": 12,
                    "sales": "1 million"
                }
            ],
            "image": "/bandpix/pantera.jpg",
            "trivia": [
                "Pantera's major breakthrough came with their fifth album, 'Cowboys from Hell', which marked a shift towards a heavier sound.",
                "Guitarist Dimebag Darrell is widely regarded as one of the greatest metal guitarists of all time.",
                "The band's 1994 album 'Far Beyond Driven' debuted at number one on the Billboard 200 chart.",
                "Pantera is credited with helping to pioneer the groove metal subgenre.",
                "The band disbanded in 2003, and in 2004, Dimebag Darrell was tragically killed during a live performance with his new band, Damageplan."
            ]
        },
        {
            "band_name": "Nine Inch Nails",
            "formed_year": 1988,
            "studio_albums": 11,
            "recorded_songs": 130,
            "members": [
                {
                    "name": "Trent Reznor",
                    "instruments": ["vocals", "multi-instrumentalist"]
                }
            ],
            "albums": [
                {
                    "title": "Pretty Hate Machine",
                    "year": 1989,
                    "songs": 10,
                    "sales": "3 million"
                },
                {
                    "title": "The Downward Spiral",
                    "year": 1994,
                    "songs": 14,
                    "sales": "4 million"
                },
                {
                    "title": "The Fragile",
                    "year": 1999,
                    "songs": 23,
                    "sales": "1 million"
                },
                {
                    "title": "With Teeth",
                    "year": 2005,
                    "songs": 13,
                    "sales": "1 million"
                }
            ],
            "image": "/bandpix/nineinchnails.jpg",
            "trivia": [
                "Nine Inch Nails is primarily the creative vision of Trent Reznor, who writes and performs nearly all the band's music.",
                "Their 1994 album 'The Downward Spiral' is considered one of the greatest industrial rock albums of all time.",
                "Trent Reznor and Atticus Ross won the Academy Award for Best Original Score for the film 'The Social Network' in 2010.",
                "The band's live performances are known for their intensity and elaborate visual setups.",
                "Nine Inch Nails was inducted into the Rock and Roll Hall of Fame in 2020."
            ]
        },
        {
            "band_name": "Ozzy Osbourne",
            "formed_year": 1979,
            "studio_albums": 12,
            "recorded_songs": 100,
            "members": [
                {
                    "name": "Ozzy Osbourne",
                    "instruments": ["vocals"]
                },
                {
                    "name": "Randy Rhoads",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Zakk Wylde",
                    "instruments": ["guitar"]
                },
                {
                    "name": "Tommy Clufetos",
                    "instruments": ["drums"]
                },
                {
                    "name": "Rob 'Blasko' Nicholson",
                    "instruments": ["bass"]
                },
                {
                    "name": "Adam Wakeman",
                    "instruments": ["keyboards"]
                }
            ],
            "albums": [
                {
                    "title": "Blizzard of Ozz",
                    "year": 1980,
                    "songs": 9,
                    "sales": "5 million"
                },
                {
                    "title": "Diary of a Madman",
                    "year": 1981,
                    "songs": 8,
                    "sales": "3 million"
                },
                {
                    "title": "Bark at the Moon",
                    "year": 1983,
                    "songs": 10,
                    "sales": "3 million"
                },
                {
                    "title": "No More Tears",
                    "year": 1991,
                    "songs": 11,
                    "sales": "4 million"
                }
            ],
            "image": "/bandpix/ozzyosbourne.jpg",
            "trivia": [
                "Ozzy Osbourne, known as the 'Prince of Darkness', began his solo career after being fired from Black Sabbath in 1979.",
                "Guitarist Randy Rhoads, known for his neoclassical metal style, played on Ozzy's first two solo albums and is considered one of the greatest guitarists of all time.",
                "Randy Rhoads tragically died in a plane crash in 1982 at the age of 25.",
                "Ozzy's hit single 'Crazy Train' is one of the most iconic metal songs and features a legendary guitar riff by Randy Rhoads.",
                "Ozzy was inducted into the Rock and Roll Hall of Fame as a member of Black Sabbath in 2006."
            ]
        }
    ]
};

export default function handler(req, res) {
    // Send the JSON data as response
    res.status(200).json(bandfacts);
}
