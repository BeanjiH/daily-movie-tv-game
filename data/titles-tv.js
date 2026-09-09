const tvTitles = [
  {
    "title": "Game of Thrones",
    "year": "2011–2019",
    "poster": "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg"
  },
  {
    "title": "Stranger Things",
    "year": "2016–2025",
    "poster": "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg"
  },
  {
    "title": "Money Heist",
    "year": "2017–2021",
    "poster": "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
  },
  {
    "title": "Breaking Bad",
    "year": "2008–2013",
    "poster": "https://image.tmdb.org/t/p/w500/anFx9aTOOYqgS3v7x3R84Kz67ly.jpg"
  },
  {
    "title": "The Walking Dead",
    "year": "2010–2022",
    "poster": "https://image.tmdb.org/t/p/w500/ng3cMtxYKt1OSQYqFlnKWnVsqNO.jpg"
  },
  {
    "title": "Squid Game",
    "year": "2021–2025",
    "poster": "https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg"
  },
  {
    "title": "Lucifer",
    "year": "2016–2021",
    "poster": "https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg"
  },
  {
    "title": "Riverdale",
    "year": "2017–2023",
    "poster": "https://image.tmdb.org/t/p/w500/d8mmn9thQ5dBk2qbv6BCqGUXWK3.jpg"
  },
  {
    "title": "The Boys",
    "year": "2019–2026",
    "poster": "https://image.tmdb.org/t/p/w500/in1R2dDc421JxsoRWaIIAqVI2KE.jpg"
  },
  {
    "title": "The Good Doctor",
    "year": "2017–2024",
    "poster": "https://image.tmdb.org/t/p/w500/luhKkdD80qe62fwop6sdrXK9jUT.jpg"
  },
  {
    "title": "WandaVision",
    "year": "2021",
    "poster": "https://image.tmdb.org/t/p/w500/ijWWwINc8h71NQ8j1LTJMFSj5wr.jpg"
  },
  {
    "title": "The Big Bang Theory",
    "year": "2007–2019",
    "poster": "https://image.tmdb.org/t/p/w500/euKFiO5M125rpngFRBbSW83beeI.jpg"
  },
  {
    "title": "Loki",
    "year": "2021–2023",
    "poster": "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg"
  },
  {
    "title": "The Flash",
    "year": "2014–2023",
    "poster": "https://image.tmdb.org/t/p/w500/yZevl2vHQgmosfwUdVNzviIfaWS.jpg"
  },
  {
    "title": "Rick and Morty",
    "year": "2013–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/owhkU6KRqdXoUQpjV8uyZGPtX58.jpg"
  },
  {
    "title": "Peaky Blinders",
    "year": "2013–2022",
    "poster": "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
  },
  {
    "title": "The Mandalorian",
    "year": "2019–2023",
    "poster": "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg"
  },
  {
    "title": "Euphoria",
    "year": "2019–2026",
    "poster": "https://image.tmdb.org/t/p/w500/ypmtwojDd751Peszi62DVLytqqC.jpg"
  },
  {
    "title": "Grey's Anatomy",
    "year": "2005–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/hjJkrLXhWvGHpLeLBDFznpBTY1S.jpg"
  },
  {
    "title": "The Simpsons",
    "year": "1989–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/uWpG7GqfKGQqX4YMAo3nv5OrglV.jpg"
  },
  {
    "title": "Wednesday",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"
  },
  {
    "title": "The Umbrella Academy",
    "year": "2019–2024",
    "poster": "https://image.tmdb.org/t/p/w500/qhcwrnnCnN8NE1N6XXKHFmveJR9.jpg"
  },
  {
    "title": "The Vampire Diaries",
    "year": "2009–2017",
    "poster": "https://image.tmdb.org/t/p/w500/b3vl6wV1W8PBezFfntKTrhrehCY.jpg"
  },
  {
    "title": "Elite",
    "year": "2018–2024",
    "poster": "https://image.tmdb.org/t/p/w500/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg"
  },
  {
    "title": "Friends",
    "year": "1994–2004",
    "poster": "https://image.tmdb.org/t/p/w500/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg"
  },
  {
    "title": "The Falcon and the Winter Soldier",
    "year": "2021",
    "poster": "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg"
  },
  {
    "title": "The 100",
    "year": "2014–2020",
    "poster": "https://image.tmdb.org/t/p/w500/wHIMMLFsk32wIzDmawWkYVbxFCS.jpg"
  },
  {
    "title": "Naruto: Shippuden",
    "year": "2007–2017",
    "poster": "https://image.tmdb.org/t/p/w500/kV27j3Nz4d5z8u6mN3EJw9RiLg2.jpg"
  },
  {
    "title": "Supernatural",
    "year": "2005–2020",
    "poster": "https://image.tmdb.org/t/p/w500/8iixmfGx5EIFPdpNvB2JvI3VIqX.jpg"
  },
  {
    "title": "Chernobyl",
    "year": "2019",
    "poster": "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg"
  },
  {
    "title": "Sex Education",
    "year": "2019–2023",
    "poster": "https://image.tmdb.org/t/p/w500/bc3bmTdnoKcRuO9xdQKgAbB7Y9Z.jpg"
  },
  {
    "title": "Vikings",
    "year": "2013–2020",
    "poster": "https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg"
  },
  {
    "title": "House",
    "year": "2004–2012",
    "poster": "https://image.tmdb.org/t/p/w500/3Cz7ySOQJmqiuTdrc6CY0r65yDI.jpg"
  },
  {
    "title": "Dark",
    "year": "2017–2020",
    "poster": "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg"
  },
  {
    "title": "Attack on Titan",
    "year": "2013–2022",
    "poster": "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg"
  },
  {
    "title": "Demon Slayer: Kimetsu no Yaiba",
    "year": "2019–2024",
    "poster": "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg"
  },
  {
    "title": "The Last of Us",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg"
  },
  {
    "title": "House of the Dragon",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg"
  },
  {
    "title": "Cobra Kai",
    "year": "2018–2025",
    "poster": "https://image.tmdb.org/t/p/w500/6GDW4EsgsXlYrL1ASb5eCHQK4er.jpg"
  },
  {
    "title": "The Witcher",
    "year": "2019–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/AoGsDM02UVt0npBA8OvpDcZbaMi.jpg"
  },
  {
    "title": "Better Call Saul",
    "year": "2015–2022",
    "poster": "https://image.tmdb.org/t/p/w500/zjg4jpK1Wp2kiRvtt5ND0kznako.jpg"
  },
  {
    "title": "Sherlock",
    "year": "2010–2017",
    "poster": "https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg"
  },
  {
    "title": "Black Mirror",
    "year": "2011–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/seN6rRfN0I6n8iDXjlSMk1QjNcq.jpg"
  },
  {
    "title": "Arrow",
    "year": "2012–2020",
    "poster": "https://image.tmdb.org/t/p/w500/u8ZHFj1jC384JEkTt3vNg1DfWEb.jpg"
  },
  {
    "title": "Westworld",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/ALlSU9du9iRiKIIoY1sREGNqQ5.jpg"
  },
  {
    "title": "Arcane",
    "year": "2021–2024",
    "poster": "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg"
  },
  {
    "title": "American Horror Story",
    "year": "2011–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/x2c3AvZeTyNehRZXabTojAxfDuR.jpg"
  },
  {
    "title": "Prison Break",
    "year": "2005–2017",
    "poster": "https://image.tmdb.org/t/p/w500/wnmNPaLvhnMeOqnWlhNkYCZxtda.jpg"
  },
  {
    "title": "Naruto",
    "year": "2002–2007",
    "poster": "https://image.tmdb.org/t/p/w500/xppeysfvDKVx775MFuH8Z9BlpMk.jpg"
  },
  {
    "title": "INVINCIBLE",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/4tblBrslcKSifMVZ3TmtT2ukMor.jpg"
  },
  {
    "title": "How I Met Your Mother",
    "year": "2005–2014",
    "poster": "https://image.tmdb.org/t/p/w500/b34jPzmB0wZy7EjUZoleXOl2RRI.jpg"
  },
  {
    "title": "Suits",
    "year": "2011–2019",
    "poster": "https://image.tmdb.org/t/p/w500/vQiryp6LioFxQThywxbC6TuoDjy.jpg"
  },
  {
    "title": "Dexter",
    "year": "2006–2013",
    "poster": "https://image.tmdb.org/t/p/w500/q8dWfc4JwQuv3HayIZeO84jAXED.jpg"
  },
  {
    "title": "The Queen's Gambit",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg"
  },
  {
    "title": "Mr. Robot",
    "year": "2015–2019",
    "poster": "https://image.tmdb.org/t/p/w500/kv1nRqgebSsREnd7vdC2pSGjpLo.jpg"
  },
  {
    "title": "One Piece",
    "year": "1999–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/dB4EDhre2dsC2kxYDavyKWqLQwi.jpg"
  },
  {
    "title": "The Office",
    "year": "2005–2013",
    "poster": "https://image.tmdb.org/t/p/w500/dg9e5fPRRId8PoBE0F6jl5y85Eu.jpg"
  },
  {
    "title": "My Hero Academia",
    "year": "2016–2025",
    "poster": "https://image.tmdb.org/t/p/w500/phuYuzqWW9ru8EA3HVjE9W2Rr3M.jpg"
  },
  {
    "title": "Marvel's Daredevil",
    "year": "2015–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2LjASknzYBvjMj.jpg"
  },
  {
    "title": "Dragon Ball Super",
    "year": "2015–2018",
    "poster": "https://image.tmdb.org/t/p/w500/qEUrbXJ2qt4Rg84Btlx4STOhgte.jpg"
  },
  {
    "title": "Lost",
    "year": "2004–2010",
    "poster": "https://image.tmdb.org/t/p/w500/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg"
  },
  {
    "title": "Fear the Walking Dead",
    "year": "2015–2023",
    "poster": "https://image.tmdb.org/t/p/w500/eKt4ELpQZUKGZCKIDobEbwHwk3I.jpg"
  },
  {
    "title": "Rebelde",
    "year": "2004–2006",
    "poster": "https://image.tmdb.org/t/p/w500/kQHXg2BOiODkF4yVI75NcodMmAJ.jpg"
  },
  {
    "title": "The Act",
    "year": "2019",
    "poster": "https://image.tmdb.org/t/p/w500/vb1sQLC2MqfCPOFqHd8SyVsyDVB.jpg"
  },
  {
    "title": "The Seven Deadly Sins",
    "year": "2014–2021",
    "poster": "https://image.tmdb.org/t/p/w500/gxTojpKEOtue85EEFlozwRbDXwJ.jpg"
  },
  {
    "title": "South Park",
    "year": "1997–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/1CGwZCFX2qerXaXQJJUB3qUvxq7.jpg"
  },
  {
    "title": "Death Note",
    "year": "2006–2007",
    "poster": "https://image.tmdb.org/t/p/w500/tCZFfYTIwrR7n94J6G14Y4hAFU6.jpg"
  },
  {
    "title": "Family Guy",
    "year": "1999–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/3PFsEuAiyLkWsP4GG6dIV37Q6gu.jpg"
  },
  {
    "title": "Avatar: The Last Airbender",
    "year": "2005–2008",
    "poster": "https://image.tmdb.org/t/p/w500/yaGt4GIutpbXHsv48tWceWg6s56.jpg"
  },
  {
    "title": "Dragon Ball Z",
    "year": "1989–1996",
    "poster": "https://image.tmdb.org/t/p/w500/oQ5CnVj3TRifXl2bIOri6H6rfNe.jpg"
  },
  {
    "title": "Anne with an E",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg"
  },
  {
    "title": "Malcolm in the Middle",
    "year": "2000–2006",
    "poster": "https://image.tmdb.org/t/p/w500/uftxEWbn3OSykTy4DX4BrdVeiuv.jpg"
  },
  {
    "title": "Teen Wolf",
    "year": "2011–2017",
    "poster": "https://image.tmdb.org/t/p/w500/wjKBTcNy1xihmExqJI8kM2qvavP.jpg"
  },
  {
    "title": "What If...?",
    "year": "2021–2024",
    "poster": "https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg"
  },
  {
    "title": "The Mentalist",
    "year": "2008–2015",
    "poster": "https://image.tmdb.org/t/p/w500/acYXu4KaDj1NIkMgObnhe4C4a0T.jpg"
  },
  {
    "title": "Miraculous: Tales of Ladybug & Cat Noir",
    "year": "2015–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/acrtAy8gmxcsEvrDP09MpMSCeDZ.jpg"
  },
  {
    "title": "13 Reasons Why",
    "year": "2017–2020",
    "poster": "https://image.tmdb.org/t/p/w500/nel144y4dIOdFFid6twN5mAX9Yd.jpg"
  },
  {
    "title": "JUJUTSU KAISEN",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/6qQzMJG27XOJsyAEEIisoJB45j2.jpg"
  },
  {
    "title": "Smallville",
    "year": "2001–2011",
    "poster": "https://image.tmdb.org/t/p/w500/mHZSq8LA5Dt48JjaOZ5tcPXQRVN.jpg"
  },
  {
    "title": "All of Us Are Dead",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg"
  },
  {
    "title": "Supergirl",
    "year": "2015–2021",
    "poster": "https://image.tmdb.org/t/p/w500/90mSQajf4STPROA6H7Hh8OvyWdK.jpg"
  },
  {
    "title": "Band of Brothers",
    "year": "2001",
    "poster": "https://image.tmdb.org/t/p/w500/pGzV187ogXzgJrvPRy2YPi29ofH.jpg"
  },
  {
    "title": "True Detective",
    "year": "2014–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/cuV2O5ZyDLHSOWzg3nLVljp1ubw.jpg"
  },
  {
    "title": "Law & Order: Special Victims Unit",
    "year": "1999–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/iofokHZoUB4Qhik4PflvJl8TT6a.jpg"
  },
  {
    "title": "Dark Desire",
    "year": "2020–2022",
    "poster": "https://image.tmdb.org/t/p/w500/uxFNAo2A6ZRcgNASLk02hJUbybn.jpg"
  },
  {
    "title": "FROM",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/pRtJagIxpfODzzb0T0NAvZSzErC.jpg"
  },
  {
    "title": "One-Punch Man",
    "year": "2015–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/dT10AxJIXVvRwFAew4tt2RhzJrD.jpg"
  },
  {
    "title": "Chucky",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/sdCJbGkvnIsIKLxaFQrviriODVq.jpg"
  },
  {
    "title": "Scorpion",
    "year": "2014–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/hzeirSF6bRjssDh5JFrm5WRwFLd.jpg"
  },
  {
    "title": "Criminal Minds",
    "year": "2005–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/hWSb4UnIjlTvnvrP98NbFSO60HA.jpg"
  },
  {
    "title": "Love, Death & Robots",
    "year": "2019–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/vL5BQvXH96cJzmNK5n7QliQxy90.jpg"
  },
  {
    "title": "Brooklyn Nine-Nine",
    "year": "2013–2021",
    "poster": "https://image.tmdb.org/t/p/w500/mpjlDzVjp7oyHUe2LaF9ltKe6f1.jpg"
  },
  {
    "title": "You",
    "year": "2018–2025",
    "poster": "https://image.tmdb.org/t/p/w500/oANi0vEE92nuijiZQgPZ88FSxqQ.jpg"
  },
  {
    "title": "Under the Dome",
    "year": "2013–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/fwH0ePhd7m3swtCuFeubtR49ZTd.jpg"
  },
  {
    "title": "The Lord of the Rings: The Rings of Power",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/kf5Hz70tjNAHg4swGDzOr9BfoZ1.jpg"
  },
  {
    "title": "Marvel's Agents of S.H.I.E.L.D.",
    "year": "2013–2020",
    "poster": "https://image.tmdb.org/t/p/w500/gHUCCMy1vvj58tzE3dZqeC9SXus.jpg"
  },
  {
    "title": "Futurama",
    "year": "1999–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/eM8bbTn8C8vUwwS6upzzm7gX31u.jpg"
  },
  {
    "title": "Hawkeye",
    "year": "2021",
    "poster": "https://image.tmdb.org/t/p/w500/ct5pNE5dDHryHLDnxyZPYcqO1sz.jpg"
  },
  {
    "title": "Chilling Adventures of Sabrina",
    "year": "2018–2020",
    "poster": "https://image.tmdb.org/t/p/w500/yxMpoHO0CXP5o9gB7IfsciilQS4.jpg"
  },
  {
    "title": "Gotham",
    "year": "2014–2019",
    "poster": "https://image.tmdb.org/t/p/w500/zLpSNnVoL2bjQdc1PcaHUPUzttP.jpg"
  },
  {
    "title": "Two and a Half Men",
    "year": "2003–2015",
    "poster": "https://image.tmdb.org/t/p/w500/xgfjxyV3g1S68opzuvG6G87muDp.jpg"
  },
  {
    "title": "Pablo Escobar: The Drug Lord",
    "year": "2012",
    "poster": "https://image.tmdb.org/t/p/w500/5u02bo70uzUFpEV9Pd0lFkLA9Es.jpg"
  },
  {
    "title": "The X-Files",
    "year": "1993–2018",
    "poster": "https://image.tmdb.org/t/p/w500/rcBx0p8h51LHceyhquYMxbspJQu.jpg"
  },
  {
    "title": "The Blacklist",
    "year": "2013–2023",
    "poster": "https://image.tmdb.org/t/p/w500/4HTfd1PhgFUenJxVuBDNdLmdr0c.jpg"
  },
  {
    "title": "Moon Knight",
    "year": "2022",
    "poster": "https://image.tmdb.org/t/p/w500/x6FsYvt33846IQnDSFxla9j0RX8.jpg"
  },
  {
    "title": "The End of the F***ing World",
    "year": "2017–2019",
    "poster": "https://image.tmdb.org/t/p/w500/f1OV9xEJCZVYcYSDRr5xOD8NJw3.jpg"
  },
  {
    "title": "The Sopranos",
    "year": "1999–2007",
    "poster": "https://image.tmdb.org/t/p/w500/rTc7ZXdroqjkKivFPvCPX0Ru7uw.jpg"
  },
  {
    "title": "The Originals",
    "year": "2013–2018",
    "poster": "https://image.tmdb.org/t/p/w500/keJOhJXGiLL54EW6QocbyvQGquA.jpg"
  },
  {
    "title": "El Señor de los Cielos",
    "year": "2013–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/Ag7VUdnrRz5Qpq3Yn3E5OCvFnu0.jpg"
  },
  {
    "title": "Grimm",
    "year": "2011–2017",
    "poster": "https://image.tmdb.org/t/p/w500/iOptnt1QHi6bIHmOq6adnZTV0bU.jpg"
  },
  {
    "title": "Gravity Falls",
    "year": "2012–2016",
    "poster": "https://image.tmdb.org/t/p/w500/qwi3p6PzKfQZ4YXBzv3CP5pO2dE.jpg"
  },
  {
    "title": "Yo soy Betty, la fea",
    "year": "1999–2001",
    "poster": "https://image.tmdb.org/t/p/w500/iEBOiXiDGaxVR6w8aKgG5MEusuO.jpg"
  },
  {
    "title": "Bones",
    "year": "2005–2017",
    "poster": "https://image.tmdb.org/t/p/w500/eyTu5c8LniVciRZIOSHTvvkkgJa.jpg"
  },
  {
    "title": "Peacemaker",
    "year": "2022–2025",
    "poster": "https://image.tmdb.org/t/p/w500/eYzbGcYnOUlvj2fa76pTgIXogd7.jpg"
  },
  {
    "title": "The Rookie",
    "year": "2018–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/70kTz0OmjjZe7zHvIDrq2iKW7PJ.jpg"
  },
  {
    "title": "Modern Family",
    "year": "2009–2020",
    "poster": "https://image.tmdb.org/t/p/w500/k5Qg5rgPoKdh3yTJJrLtyoyYGwC.jpg"
  },
  {
    "title": "Shameless",
    "year": "2011–2021",
    "poster": "https://image.tmdb.org/t/p/w500/ifo31fMWLmyOVpdak9K0kY4jldQ.jpg"
  },
  {
    "title": "Dragon Ball",
    "year": "1986–1989",
    "poster": "https://image.tmdb.org/t/p/w500/onCLyCOgszTIyyVs2XKYSkKPOPG.jpg"
  },
  {
    "title": "Doctor Who",
    "year": "2005–2021",
    "poster": "https://image.tmdb.org/t/p/w500/lHfmc6d8pOVFrD0eOKPiDbjeucG.jpg"
  },
  {
    "title": "Siren",
    "year": "2018–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/k906XXqqFMT93v2WMkIOtUcEAlV.jpg"
  },
  {
    "title": "Narcos",
    "year": "2015–2017",
    "poster": "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg"
  },
  {
    "title": "The Handmaid's Tale",
    "year": "2017–2025",
    "poster": "https://image.tmdb.org/t/p/w500/eGUT7j3n3rn5yGihlCgwUnD70HV.jpg"
  },
  {
    "title": "The Purge",
    "year": "2018–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/9CaS2XFd0Db42grzzVBnWcSkrbg.jpg"
  },
  {
    "title": "Fargo",
    "year": "2014–2024",
    "poster": "https://image.tmdb.org/t/p/w500/a3VW6khsyUVKrG0GBCWFG3NzWPX.jpg"
  },
  {
    "title": "Bridgerton",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/uXTg565ahu9RwonCX1V2Hex1NU6.jpg"
  },
  {
    "title": "It",
    "year": "1990",
    "poster": "https://image.tmdb.org/t/p/w500/4ybQ6gopB3H3cu0seVZLznDnIKo.jpg"
  },
  {
    "title": "Sons of Anarchy",
    "year": "2008–2014",
    "poster": "https://image.tmdb.org/t/p/w500/yPLkf4EiCkR0NOvMfmpHMA2zfN3.jpg"
  },
  {
    "title": "Marvel's The Punisher",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/tM6xqRKXoloH9UchaJEyyRE9O1w.jpg"
  },
  {
    "title": "Yellowstone",
    "year": "2018–2024",
    "poster": "https://image.tmdb.org/t/p/w500/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg"
  },
  {
    "title": "House of Cards",
    "year": "2013–2018",
    "poster": "https://image.tmdb.org/t/p/w500/hKWxWjFwnMvkWQawbhvC0Y7ygQ8.jpg"
  },
  {
    "title": "SpongeBob SquarePants",
    "year": "1999–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/5h0EU2lqBb03dp5vtRuUHJwqzem.jpg"
  },
  {
    "title": "Halo",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/4UmNhZCEu8Vt3byMvNxNEPyf8EY.jpg"
  },
  {
    "title": "Reacher",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/f1VCQIG2iCyOookdgOzwtUpwWC0.jpg"
  },
  {
    "title": "Adventure Time",
    "year": "2010–2018",
    "poster": "https://image.tmdb.org/t/p/w500/qk3eQ8jW4opJ48gFWYUXWaMT4l.jpg"
  },
  {
    "title": "Super Dragon Ball Heroes",
    "year": "2018–2024",
    "poster": "https://image.tmdb.org/t/p/w500/8jq6xv5c1WK7KAPOXCsodm8eUxp.jpg"
  },
  {
    "title": "Love Is in the Air",
    "year": "2020–2021",
    "poster": "https://image.tmdb.org/t/p/w500/bE71f9A3eztjcd5JT3MmHB8MbzA.jpg"
  },
  {
    "title": "Guardian: The Lonely and Great God",
    "year": "2016–2017",
    "poster": "https://image.tmdb.org/t/p/w500/sPkxHNw5BFvuCFGWw825TS7n6X3.jpg"
  },
  {
    "title": "Fallout",
    "year": "2024–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/c15BtJxCXMrISLVmysdsnZUPQft.jpg"
  },
  {
    "title": "MINDHUNTER",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/fbKE87mojpIETWepSbD5Qt741fp.jpg"
  },
  {
    "title": "The Book of Boba Fett",
    "year": "2021–2022",
    "poster": "https://image.tmdb.org/t/p/w500/gNbdjDi1HamTCrfvM9JeA94bNi2.jpg"
  },
  {
    "title": "Young Sheldon",
    "year": "2017–2024",
    "poster": "https://image.tmdb.org/t/p/w500/kidkbZRBGbsEIrX7pODRSKi9ipl.jpg"
  },
  {
    "title": "Legacies",
    "year": "2018–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/qTZIgXrBKURBK1KrsT7fe3qwtl9.jpg"
  },
  {
    "title": "Spartacus",
    "year": "2010–2013",
    "poster": "https://image.tmdb.org/t/p/w500/c2GKN4VHCj1dnjFMANRpGkCVBae.jpg"
  },
  {
    "title": "Hannibal",
    "year": "2013–2015",
    "poster": "https://image.tmdb.org/t/p/w500/pbV2eLnKSIm1epSZt473UYfqaeZ.jpg"
  },
  {
    "title": "Outlander",
    "year": "2014–2026",
    "poster": "https://image.tmdb.org/t/p/w500/oftZNfyTVNU7IfOqoGLoT8MGvNs.jpg"
  },
  {
    "title": "iZombie",
    "year": "2015–2019",
    "poster": "https://image.tmdb.org/t/p/w500/q4nqNwAhzVR7JuYctrWJvUWz3xR.jpg"
  },
  {
    "title": "BoJack Horseman",
    "year": "2014–2020",
    "poster": "https://image.tmdb.org/t/p/w500/6JFWzlChcGgLiIUo2COgNlWGFKy.jpg"
  },
  {
    "title": "Severance",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg"
  },
  {
    "title": "Sin senos sí hay paraíso",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/7lBJ6lOS0uQqsH13U9iMTikawQS.jpg"
  },
  {
    "title": "DAHMER - Monster: The Jeffrey Dahmer Story",
    "year": "2022",
    "poster": "https://image.tmdb.org/t/p/w500/f2PVrphK0u81ES256lw3oAZuF3x.jpg"
  },
  {
    "title": "See",
    "year": "2019–2022",
    "poster": "https://image.tmdb.org/t/p/w500/lKDIhc9FQibDiBQ57n3ELfZCyZg.jpg"
  },
  {
    "title": "The Expanse",
    "year": "2015–2022",
    "poster": "https://image.tmdb.org/t/p/w500/5vQlVWkIMPhZ88OWchJsgwGEK9.jpg"
  },
  {
    "title": "Fringe",
    "year": "2008–2013",
    "poster": "https://image.tmdb.org/t/p/w500/sY9hg5dLJ93RJOyKEiu1nAtBRND.jpg"
  },
  {
    "title": "Ozark",
    "year": "2017–2022",
    "poster": "https://image.tmdb.org/t/p/w500/pCGyPVrI9Fzw6rE1Pvi4BIXF6ET.jpg"
  },
  {
    "title": "Titans",
    "year": "2018–2023",
    "poster": "https://image.tmdb.org/t/p/w500/8e6QiSexmYKaiHGPvbhaFMmQEhc.jpg"
  },
  {
    "title": "Orange Is the New Black",
    "year": "2013–2019",
    "poster": "https://image.tmdb.org/t/p/w500/ekaa7YjGPTkFLcPhwWXTnARuCEU.jpg"
  },
  {
    "title": "9-1-1",
    "year": "2018–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/6njUqsd3By2mJsdZm1P0moPLzs3.jpg"
  },
  {
    "title": "The Haunting of Hill House",
    "year": "2018",
    "poster": "https://image.tmdb.org/t/p/w500/nWPZb800NCGiDPNGsKCfY0w44Z2.jpg"
  },
  {
    "title": "Pretty Little Liars",
    "year": "2010–2017",
    "poster": "https://image.tmdb.org/t/p/w500/aUPbHiLS3hCHKjtLsncFa9g0viV.jpg"
  },
  {
    "title": "Alice in Borderland",
    "year": "2020–2025",
    "poster": "https://image.tmdb.org/t/p/w500/Ac8ruycRXzgcsndTZFK6ouGA0FA.jpg"
  },
  {
    "title": "The Wire",
    "year": "2002–2008",
    "poster": "https://image.tmdb.org/t/p/w500/4lbclFySvugI51fwsyxBTOm4DqK.jpg"
  },
  {
    "title": "Tulsa King",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/rOYLWCdAifpUtPlTf1WHxyaxeMt.jpg"
  },
  {
    "title": "Superman & Lois",
    "year": "2021–2024",
    "poster": "https://image.tmdb.org/t/p/w500/vlv1gn98GqMnKHLSh0dNciqGfBl.jpg"
  },
  {
    "title": "Marvel's Iron Fist",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/4l6KD9HhtD6nCDEfg10Lp6C6zah.jpg"
  },
  {
    "title": "The Sandman",
    "year": "2022–2025",
    "poster": "https://image.tmdb.org/t/p/w500/q54qEgagGOYCq5D1903eBVMNkbo.jpg"
  },
  {
    "title": "True Beauty",
    "year": "2020–2021",
    "poster": "https://image.tmdb.org/t/p/w500/I9WCyKUbKAiu95tAitaHOx8EVO.jpg"
  },
  {
    "title": "Marvel's Jessica Jones",
    "year": "2015–2019",
    "poster": "https://image.tmdb.org/t/p/w500/oxnWofiE9fHOgUfs9NJa6nG6NTR.jpg"
  },
  {
    "title": "Homeland",
    "year": "2011–2020",
    "poster": "https://image.tmdb.org/t/p/w500/6GAvS2e6VIRsms9FpVt33PsCoEW.jpg"
  },
  {
    "title": "Twin Peaks",
    "year": "1990–2017",
    "poster": "https://image.tmdb.org/t/p/w500/lA9CNSdo50iQPZ8A2fyVpMvJZAf.jpg"
  },
  {
    "title": "Heroes",
    "year": "2006–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/lf0TcOkheYUZKpeh7c8lqJHNk5O.jpg"
  },
  {
    "title": "Lupin",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/h6Z2oogE4mJk2uffdtIlLhb0EHx.jpg"
  },
  {
    "title": "Ted Lasso",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/uRHsiw1wLxPHFXkkv4Ix1s0O6f4.jpg"
  },
  {
    "title": "Chicago P.D.",
    "year": "2014–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/bez40PgT36RUu4gstD2A6GSM0tP.jpg"
  },
  {
    "title": "Silo",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/gMYZZvnkVNTqSVnVCphWbPXwWwb.jpg"
  },
  {
    "title": "The Pacific",
    "year": "2010",
    "poster": "https://image.tmdb.org/t/p/w500/x9Y1IMFdY8Ma222KcQadFEau0EB.jpg"
  },
  {
    "title": "Tokyo Ghoul",
    "year": "2014–2018",
    "poster": "https://image.tmdb.org/t/p/w500/1m4RlC9BTCbyY549TOdVQ5NRPcR.jpg"
  },
  {
    "title": "She-Hulk: Attorney at Law",
    "year": "2022",
    "poster": "https://image.tmdb.org/t/p/w500/5xz2orV8f0usyrfGNshcoXHmiaV.jpg"
  },
  {
    "title": "Charmed",
    "year": "1998–2006",
    "poster": "https://image.tmdb.org/t/p/w500/z4bPJ1BWU2EtV69NII2GVvsugQ2.jpg"
  },
  {
    "title": "Blindspot",
    "year": "2015–2020",
    "poster": "https://image.tmdb.org/t/p/w500/4AeYzamQmd9Fa6hawDmYKbdvBSe.jpg"
  },
  {
    "title": "Fullmetal Alchemist: Brotherhood",
    "year": "2009–2010",
    "poster": "https://image.tmdb.org/t/p/w500/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg"
  },
  {
    "title": "NCIS",
    "year": "2003–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/mBcu8d6x6zB1el3MPNl7cZQEQ31.jpg"
  },
  {
    "title": "Once Upon a Time",
    "year": "2011–2018",
    "poster": "https://image.tmdb.org/t/p/w500/u95scYysMZvBoekSLmMNJjeqXcY.jpg"
  },
  {
    "title": "Locked Up",
    "year": "2015–2019",
    "poster": "https://image.tmdb.org/t/p/w500/1kH9u5DkoDUuIlhFFWjz9VSlKhC.jpg"
  },
  {
    "title": "Boruto: Naruto Next Generations",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/e0B6i48kxdRkMcK4tR4YNfXGWOc.jpg"
  },
  {
    "title": "The Fresh Prince of Bel-Air",
    "year": "1990–1996",
    "poster": "https://image.tmdb.org/t/p/w500/fJXzwxCVr2TEkhhKRKcih9o5DYK.jpg"
  },
  {
    "title": "DC's Legends of Tomorrow",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/qNgAcg4gNYbZ9mySLB9ZX4ehZb6.jpg"
  },
  {
    "title": "Firefly",
    "year": "2002–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/vZcKsy4sGAvWMVqLluwYuoi11Kj.jpg"
  },
  {
    "title": "The Wheel of Time",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/ihBi24EIr5kwAeY2PqmsgAcCj4n.jpg"
  },
  {
    "title": "American Dad!",
    "year": "2005–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/eb9sH2am9IUSQ8GhXTNAVoujk8W.jpg"
  },
  {
    "title": "Seinfeld",
    "year": "1989–1998",
    "poster": "https://image.tmdb.org/t/p/w500/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg"
  },
  {
    "title": "Chicago Fire",
    "year": "2012–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/r915sk2JpthZSjHEgZKifWxgo6L.jpg"
  },
  {
    "title": "Star Wars: The Clone Wars",
    "year": "2008–2020",
    "poster": "https://image.tmdb.org/t/p/w500/e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg"
  },
  {
    "title": "Good Omens",
    "year": "2019–2026",
    "poster": "https://image.tmdb.org/t/p/w500/nO68XVx5of8hlBwEOGOkPC8Mveu.jpg"
  },
  {
    "title": "The Legend of Korra",
    "year": "2012–2014",
    "poster": "https://image.tmdb.org/t/p/w500/dZgYvSfuh1YHDrJuILlVQ5oA2hF.jpg"
  },
  {
    "title": "The Crown",
    "year": "2016–2023",
    "poster": "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg"
  },
  {
    "title": "Altered Carbon",
    "year": "2018–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/AisK4uFsnwwmMkSynFpNl0VeGR.jpg"
  },
  {
    "title": "Control Z",
    "year": "2020–2022",
    "poster": "https://image.tmdb.org/t/p/w500/oEDU7EGbmS6f7kpMmViyGHMfhwp.jpg"
  },
  {
    "title": "Gossip Girl",
    "year": "2007–2012",
    "poster": "https://image.tmdb.org/t/p/w500/mRvSUuU1VQQkZZ578jKJpcUCuL8.jpg"
  },
  {
    "title": "SPY x FAMILY",
    "year": "2022–2025",
    "poster": "https://image.tmdb.org/t/p/w500/7NAvPYPAu7MeHwP8E9sn81PqsRh.jpg"
  },
  {
    "title": "Obi-Wan Kenobi",
    "year": "2022",
    "poster": "https://image.tmdb.org/t/p/w500/qJRB789ceLryrLvOKrZqLKr2CGf.jpg"
  },
  {
    "title": "Regular Show",
    "year": "2010–2017",
    "poster": "https://image.tmdb.org/t/p/w500/mS5SLxMYcKfUxA0utBSR5MOAWWr.jpg"
  },
  {
    "title": "Chainsaw Man",
    "year": "2022",
    "poster": "https://image.tmdb.org/t/p/w500/iFM1dyFi0rByvEomEkmm7NpQeeb.jpg"
  },
  {
    "title": "Seven Deadly Sins",
    "year": "2008–2009",
    "poster": "https://image.tmdb.org/t/p/w500/u7UUYOeMcQ62qHhRhWeGO09h8qH.jpg"
  },
  {
    "title": "Only Murders in the Building",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/1yjFVQZuW8aofZ5Cgol8iImsVFp.jpg"
  },
  {
    "title": "Bleach",
    "year": "2004–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/2EewmxXe72ogD0EaWM8gqa0ccIw.jpg"
  },
  {
    "title": "Pokémon",
    "year": "1997–2023",
    "poster": "https://image.tmdb.org/t/p/w500/lP4zwr0F7hWTbAFltfoFTc2AxRG.jpg"
  },
  {
    "title": "Fast & Furious Spy Racers",
    "year": "2019–2021",
    "poster": "https://image.tmdb.org/t/p/w500/cI7zYWuYTmKEdXITcUKPzjc2EW5.jpg"
  },
  {
    "title": "Andor",
    "year": "2022–2025",
    "poster": "https://image.tmdb.org/t/p/w500/khZqmwHQicTYoS7Flreb9EddFZC.jpg"
  },
  {
    "title": "Hunter x Hunter",
    "year": "2011–2014",
    "poster": "https://image.tmdb.org/t/p/w500/i2EEr2uBvRlAwJ8d8zTG2Y19mIa.jpg"
  },
  {
    "title": "Sex and the City",
    "year": "1998–2004",
    "poster": "https://image.tmdb.org/t/p/w500/jfLp8gTfdi9d8onEFJ60kp1Bl1e.jpg"
  },
  {
    "title": "Black Clover",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/kaMisKeOoTBPxPkbC3OW7Wgt6ON.jpg"
  },
  {
    "title": "Sword Art Online",
    "year": "2012–2020",
    "poster": "https://image.tmdb.org/t/p/w500/9m8bFIXPg26taNrFSXGwEORVACD.jpg"
  },
  {
    "title": "Neon Genesis Evangelion",
    "year": "1995–1996",
    "poster": "https://image.tmdb.org/t/p/w500/y2ah9t0navXyIvoHg1uIbIHO3tt.jpg"
  },
  {
    "title": "Community",
    "year": "2009–2015",
    "poster": "https://image.tmdb.org/t/p/w500/3KUjDt8XY7w2Ku70UE0SECmv1zP.jpg"
  },
  {
    "title": "Person of Interest",
    "year": "2011–2016",
    "poster": "https://image.tmdb.org/t/p/w500/f8aIvYk5h7Z8EP3dinCmVgQFYow.jpg"
  },
  {
    "title": "Castle",
    "year": "2009–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/diXBeMzvfJb2iJg3G0kCUaMCzEc.jpg"
  },
  {
    "title": "The Kardashians",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/pLeSPrwEmxwaV1vqzdVfAgnUvXc.jpg"
  },
  {
    "title": "Pasión de Gavilanes",
    "year": "2003–2022",
    "poster": "https://image.tmdb.org/t/p/w500/91UV7pNcDPhIzJl7EuK36sK5vRG.jpg"
  },
  {
    "title": "True Blood",
    "year": "2008–2014",
    "poster": "https://image.tmdb.org/t/p/w500/ktEp6fzL4xzCWsSVtrcH8JaQNQy.jpg"
  },
  {
    "title": "Desperate Housewives",
    "year": "2004–2012",
    "poster": "https://image.tmdb.org/t/p/w500/4qeI51jDzH81PpUUNaJCBrfm7f6.jpg"
  },
  {
    "title": "InuYasha",
    "year": "2000–2010",
    "poster": "https://image.tmdb.org/t/p/w500/rQHTNaynedeKurm0sNOsbAZg2oe.jpg"
  },
  {
    "title": "Dragon Ball GT",
    "year": "1996–1997",
    "poster": "https://image.tmdb.org/t/p/w500/rLHhDpv6rrhuzBjNzaMRNv2fng.jpg"
  },
  {
    "title": "Star Trek: Discovery",
    "year": "2017–2024",
    "poster": "https://image.tmdb.org/t/p/w500/xwpOHgym48Ftz7fbJq5te5xoiwu.jpg"
  },
  {
    "title": "Marvel's Luke Cage",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/yzM1hMB3PUJqbISX0f421b3xOjB.jpg"
  },
  {
    "title": "El Chavo del Ocho",
    "year": "1973–1980",
    "poster": "https://image.tmdb.org/t/p/w500/1TdBpVOASafzfWlnecwW17UL6a5.jpg"
  },
  {
    "title": "Rosario Tijeras (Mexico)",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/sqe3I68PRfHig0lgiDUrWVEVlsk.jpg"
  },
  {
    "title": "High School DxD",
    "year": "2012–2018",
    "poster": "https://image.tmdb.org/t/p/w500/5a9vaaLDAZTYjgfWIw7ZYhL1m1A.jpg"
  },
  {
    "title": "The Good Place",
    "year": "2016–2020",
    "poster": "https://image.tmdb.org/t/p/w500/qIhsuhoIYR5yTnDta0IL4senbeN.jpg"
  },
  {
    "title": "The Strain",
    "year": "2014–2017",
    "poster": "https://image.tmdb.org/t/p/w500/2BWErT9QcADpf2G4BZ769eSnFTP.jpg"
  },
  {
    "title": "Buffy the Vampire Slayer",
    "year": "1997–2003",
    "poster": "https://image.tmdb.org/t/p/w500/y7fVZkyheCEQHDUEHwNmYENGfT2.jpg"
  },
  {
    "title": "Marvel's Agent Carter",
    "year": "2015–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/fe79VYyLp5ZBstpJ4oukpuUT3B.jpg"
  },
  {
    "title": "Love Alarm",
    "year": "2019–2021",
    "poster": "https://image.tmdb.org/t/p/w500/hQ8Hobo1RpYuZVQJQOCycNMHAG.jpg"
  },
  {
    "title": "The Last Kingdom",
    "year": "2015–2022",
    "poster": "https://image.tmdb.org/t/p/w500/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg"
  },
  {
    "title": "The Game of Keys",
    "year": "2019–2024",
    "poster": "https://image.tmdb.org/t/p/w500/a2dhpxmBGfpSx6HaeUpSozR1Z9x.jpg"
  },
  {
    "title": "Silicon Valley",
    "year": "2014–2019",
    "poster": "https://image.tmdb.org/t/p/w500/4ptpmWBVD9HY9hMh8Cbs6SMiy7p.jpg"
  },
  {
    "title": "Cowboy Bebop",
    "year": "1998–1999",
    "poster": "https://image.tmdb.org/t/p/w500/xDiXDfZwC6XYC6fxHI1jl3A3Ill.jpg"
  },
  {
    "title": "Locked Up: The Oasis",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/7EOWkNGxXq2MBZxfV3ZxjRM4vlH.jpg"
  },
  {
    "title": "I Am Not Okay with This",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/kf3yX0ILNlLJ42X3lX2iYJ3QRp6.jpg"
  },
  {
    "title": "Drake & Josh",
    "year": "2004–2007",
    "poster": "https://image.tmdb.org/t/p/w500/udCvGctktHvvf8w51XyTPfcmzDa.jpg"
  },
  {
    "title": "Solo Leveling",
    "year": "2024–2025",
    "poster": "https://image.tmdb.org/t/p/w500/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg"
  },
  {
    "title": "La Reina del Sur",
    "year": "2011–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/1qCGOuNVOlaBb7MMDen6CLzp0UE.jpg"
  },
  {
    "title": "Cyberpunk: Edgerunners",
    "year": "2022",
    "poster": "https://image.tmdb.org/t/p/w500/lqcDVZ8pyk08AVftMBildDR3QUK.jpg"
  },
  {
    "title": "His Dark Materials",
    "year": "2019–2023",
    "poster": "https://image.tmdb.org/t/p/w500/g6tIKGc3f1H5QMz1dcgCwADKpZ7.jpg"
  },
  {
    "title": "Star Trek: Picard",
    "year": "2020–2023",
    "poster": "https://image.tmdb.org/t/p/w500/nIlAKIrLKxOeoEnc0Urb65yNCp.jpg"
  },
  {
    "title": "Never Have I Ever",
    "year": "2020–2023",
    "poster": "https://image.tmdb.org/t/p/w500/hd5fnBixab6IzfUwjC5wfdbX3eM.jpg"
  },
  {
    "title": "DARLING in the FRANXX",
    "year": "2018",
    "poster": "https://image.tmdb.org/t/p/w500/m6R8gI3brohD6izeVCXFmuGeV2m.jpg"
  },
  {
    "title": "Fleabag",
    "year": "2016–2019",
    "poster": "https://image.tmdb.org/t/p/w500/27vEYsRKa3eAniwmoccOoluEXQ1.jpg"
  },
  {
    "title": "Sense8",
    "year": "2015–2018",
    "poster": "https://image.tmdb.org/t/p/w500/kmyvlQ9QKzgdZY31rXaUlgCnzrB.jpg"
  },
  {
    "title": "ONE PIECE",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/blWCPEqDGLBuLB9u89CxP9ORQP4.jpg"
  },
  {
    "title": "Lost in Space",
    "year": "2018–2021",
    "poster": "https://image.tmdb.org/t/p/w500/y8NJnTXzb4rio9uvVYFVrXEMofU.jpg"
  },
  {
    "title": "The Bear",
    "year": "2022–2026",
    "poster": "https://image.tmdb.org/t/p/w500/eKfVzzEazSIjJMrw9ADa2x8ksLz.jpg"
  },
  {
    "title": "Record of Ragnarok",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/t6GEKms3JgLhC6pXjFHhDvPP65y.jpg"
  },
  {
    "title": "Jurassic World Camp Cretaceous",
    "year": "2020–2022",
    "poster": "https://image.tmdb.org/t/p/w500/pwte1p4ZySI1qAVSVdSTRKjuIAa.jpg"
  },
  {
    "title": "Parks and Recreation",
    "year": "2009–2015",
    "poster": "https://image.tmdb.org/t/p/w500/dDuzrl9rUIBYieZjqmtNCdncrmZ.jpg"
  },
  {
    "title": "Ghost Whisperer",
    "year": "2005–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/9ZtGupUFaHhws7mOcwhNTtRpRHC.jpg"
  },
  {
    "title": "Hawaii Five-0",
    "year": "2010–2020",
    "poster": "https://image.tmdb.org/t/p/w500/sIdCKlmM2nU4akIvFQaAIiU8YES.jpg"
  },
  {
    "title": "Stargate SG-1",
    "year": "1997–2007",
    "poster": "https://image.tmdb.org/t/p/w500/dQjmI7XxI47v8IM2MUysHG0LuU2.jpg"
  },
  {
    "title": "Elementary",
    "year": "2012–2019",
    "poster": "https://image.tmdb.org/t/p/w500/q9dObe29W4bDpgzUfOOH3ZnzDbR.jpg"
  },
  {
    "title": "Batman: The Animated Series",
    "year": "1992–1995",
    "poster": "https://image.tmdb.org/t/p/w500/lBomQFW1vlm1yUYMNSbFZ45R4Ox.jpg"
  },
  {
    "title": "Shōgun",
    "year": "2024–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg"
  },
  {
    "title": "Sex, Explained",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/nIwI7rlhVXlfDHNoLFfYzkz7TJ4.jpg"
  },
  {
    "title": "Tom Clancy's Jack Ryan",
    "year": "2018–2023",
    "poster": "https://image.tmdb.org/t/p/w500/cO4py3L3q5GNPrA0qr1wVDrosK1.jpg"
  },
  {
    "title": "24",
    "year": "2001–2014",
    "poster": "https://image.tmdb.org/t/p/w500/iq6yrZ5LEDXf1ArCOYLq8PIUBpV.jpg"
  },
  {
    "title": "We Bare Bears",
    "year": "2015–2019",
    "poster": "https://image.tmdb.org/t/p/w500/3xWzlLZ0kAD6SkVZTekFM9lxZyP.jpg"
  },
  {
    "title": "Manifest",
    "year": "2018–2023",
    "poster": "https://image.tmdb.org/t/p/w500/eTemCphrglLKrXOsNRhYezHA7H9.jpg"
  },
  {
    "title": "Boys Over Flowers",
    "year": "2009",
    "poster": "https://image.tmdb.org/t/p/w500/7nqNwwCoMB3IdMU9VKSPTg5SrfL.jpg"
  },
  {
    "title": "Star Trek: The Next Generation",
    "year": "1987–1994",
    "poster": "https://image.tmdb.org/t/p/w500/vkLzXddgUKH5VcpnYiRzpJFrZhz.jpg"
  },
  {
    "title": "Battlestar Galactica",
    "year": "2004–2009",
    "poster": "https://image.tmdb.org/t/p/w500/99PJSbcO2LeM10uOGWeFihNp77j.jpg"
  },
  {
    "title": "Raised by Wolves",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/mTvSVKMn2Npf6zvYNbGMJnYLtvp.jpg"
  },
  {
    "title": "The Owl House",
    "year": "2020–2023",
    "poster": "https://image.tmdb.org/t/p/w500/rhzwpJBhi2WkfihXndS1xUdQlzB.jpg"
  },
  {
    "title": "Ben 10",
    "year": "2005–2008",
    "poster": "https://image.tmdb.org/t/p/w500/eogRp6oAPK0SEvQmCrQ78LTlSdp.jpg"
  },
  {
    "title": "American Gods",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/3KCAZaKHmoMIN9dHutqaMtubQqD.jpg"
  },
  {
    "title": "Teresa",
    "year": "2010–2011",
    "poster": "https://image.tmdb.org/t/p/w500/5Thydptu5Ym3mq0XTGJXpdl624Y.jpg"
  },
  {
    "title": "Ginny & Georgia",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/vOwunzW4dx3n0J5mH40n9jTRSwY.jpg"
  },
  {
    "title": "Scream Queens",
    "year": "2015–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/yeayXZYSU8xdmC8i5g5jTdxeggp.jpg"
  },
  {
    "title": "Foundation",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/tg9I5pOY4M9CKj8U0cxVBTsm5eh.jpg"
  },
  {
    "title": "How to Get Away with Murder",
    "year": "2014–2020",
    "poster": "https://image.tmdb.org/t/p/w500/bJs8Y6T88NcgksxA8UaVl4YX8p8.jpg"
  },
  {
    "title": "Over the Garden Wall",
    "year": "2014",
    "poster": "https://image.tmdb.org/t/p/w500/m3lU8n7WxzMecxKZcqhq5y5ESy.jpg"
  },
  {
    "title": "Bates Motel",
    "year": "2013–2017",
    "poster": "https://image.tmdb.org/t/p/w500/xXKcfZE7ulYxgjjYv51s0zDG69s.jpg"
  },
  {
    "title": "Ash vs Evil Dead",
    "year": "2015–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/9tNtSk46s3f1ePr59p0JG6uacc8.jpg"
  },
  {
    "title": "11.22.63",
    "year": "2016",
    "poster": "https://image.tmdb.org/t/p/w500/1fH41ccMKvgDTbbcCxWWH6fznah.jpg"
  },
  {
    "title": "The Amazing World of Gumball",
    "year": "2011–2019",
    "poster": "https://image.tmdb.org/t/p/w500/VYnnyA2hyxi3VUPgCA71mMtt69.jpg"
  },
  {
    "title": "Dr. STONE",
    "year": "2019–2026",
    "poster": "https://image.tmdb.org/t/p/w500/xbZQ3fDl0y5mt0ARwfeyrgQ4JTw.jpg"
  },
  {
    "title": "2 Broke Girls",
    "year": "2011–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/wW1SDEoZ6pDfnSkVQuXwOo8ICep.jpg"
  },
  {
    "title": "The Boss Baby: Back in Business",
    "year": "2018–2020",
    "poster": "https://image.tmdb.org/t/p/w500/mUVZHkJPKDYgDy1dbDdi0Esj9eB.jpg"
  },
  {
    "title": "Heartstopper",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/dQc0QbDiHjGmWxTfKtBgYtS4bj5.jpg"
  },
  {
    "title": "Succession",
    "year": "2018–2023",
    "poster": "https://image.tmdb.org/t/p/w500/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg"
  },
  {
    "title": "Adolescence",
    "year": "2025",
    "poster": "https://image.tmdb.org/t/p/w500/20i4nShZZg1g1VFHSB8xpaYM4r7.jpg"
  },
  {
    "title": "Mare of Easttown",
    "year": "2021",
    "poster": "https://image.tmdb.org/t/p/w500/78aK4Msbr22A5PGa6PZV0pAvdwf.jpg"
  },
  {
    "title": "The Outsider",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/aMiPwPQjQI1EZN3xP2V0sSU37dc.jpg"
  },
  {
    "title": "CSI: Miami",
    "year": "2002–2012",
    "poster": "https://image.tmdb.org/t/p/w500/pNW64pjaHvf6purNaFhq4SHYRfl.jpg"
  },
  {
    "title": "Victorious",
    "year": "2010–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/2Jc4L48qEwN9HyzqsdaSX1BCGMJ.jpg"
  },
  {
    "title": "Arrested Development",
    "year": "2003–2019",
    "poster": "https://image.tmdb.org/t/p/w500/p4r4RD7RsNcJVoz0H6z3dBoTBtW.jpg"
  },
  {
    "title": "Big Little Lies",
    "year": "2017–2019",
    "poster": "https://image.tmdb.org/t/p/w500/zxGkno93ExrTMsJVllH6mzQ652z.jpg"
  },
  {
    "title": "Lie to Me",
    "year": "2009–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/2xpQxwsGYtdGDrmLvCosTZ0I54R.jpg"
  },
  {
    "title": "New Girl",
    "year": "2011–2018",
    "poster": "https://image.tmdb.org/t/p/w500/8oCqMlKKomCArVtyOjRzMN6g40Z.jpg"
  },
  {
    "title": "Cosmos",
    "year": "2014–2020",
    "poster": "https://image.tmdb.org/t/p/w500/5o07ps0QZ0bNoRYxTn9cPdRWlUu.jpg"
  },
  {
    "title": "The Magicians",
    "year": "2015–2020",
    "poster": "https://image.tmdb.org/t/p/w500/A66dZN98BPEYeFQAhNdNCIXa57d.jpg"
  },
  {
    "title": "Marvel's The Defenders",
    "year": "2017",
    "poster": "https://image.tmdb.org/t/p/w500/49XzINhH4LFsgz7cx6TOPcHUJUL.jpg"
  },
  {
    "title": "Insatiable",
    "year": "2018–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/lHZ4xqGQlmyiFTOVtwnNpTcZgkd.jpg"
  },
  {
    "title": "Your Honor",
    "year": "2020–2023",
    "poster": "https://image.tmdb.org/t/p/w500/1rWWgTEDFdV330aLgCoaq7I56lk.jpg"
  },
  {
    "title": "Mushoku Tensei: Jobless Reincarnation",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/gLKOYIMyKlUHW0SVdskhgf9C0yy.jpg"
  },
  {
    "title": "Dexter: New Blood",
    "year": "2021–2022",
    "poster": "https://image.tmdb.org/t/p/w500/9EBKgrFIsCFSV1RZKWhYUdbtGiv.jpg"
  },
  {
    "title": "The Boat",
    "year": "2011–2013",
    "poster": "https://image.tmdb.org/t/p/w500/tfifgKMWPCtEebp7wH9vBKkDpcx.jpg"
  },
  {
    "title": "Big Time Rush",
    "year": "2009–2013",
    "poster": "https://image.tmdb.org/t/p/w500/34y5JjZYj2paoxA0RXEppU5LRpb.jpg"
  },
  {
    "title": "The IT Crowd",
    "year": "2006–2010",
    "poster": "https://image.tmdb.org/t/p/w500/qtxL0ZLAZN1nd0kOpcu8V32bsU4.jpg"
  },
  {
    "title": "Watchmen",
    "year": "2019",
    "poster": "https://image.tmdb.org/t/p/w500/m8rWq3j73ZGhDuSCZWMMoE9ePH1.jpg"
  },
  {
    "title": "SEAL Team",
    "year": "2017–2024",
    "poster": "https://image.tmdb.org/t/p/w500/6iSnec83UEMgLOXAtGYwaVNHLjR.jpg"
  },
  {
    "title": "El Chapo",
    "year": "2017–2018",
    "poster": "https://image.tmdb.org/t/p/w500/3FzlvQ5Ea35Zdz71Ye7JSvB6VdB.jpg"
  },
  {
    "title": "This Is Us",
    "year": "2016–2022",
    "poster": "https://image.tmdb.org/t/p/w500/huxmY6Dmzwpv5Q2hnNft0UMK7vf.jpg"
  },
  {
    "title": "Courage the Cowardly Dog",
    "year": "1999–2002",
    "poster": "https://image.tmdb.org/t/p/w500/uJQsBgzlrgZpjeB5fHBtJQA04nS.jpg"
  },
  {
    "title": "Love, Victor",
    "year": "2020–2022",
    "poster": "https://image.tmdb.org/t/p/w500/pcT1vivabBnBk0tZgVBO1I8aK75.jpg"
  },
  {
    "title": "Constantine",
    "year": "2014–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/gQ3bA1DBKyZwkDCHJFEAT0MkKpu.jpg"
  },
  {
    "title": "Sweet Tooth",
    "year": "2021–2024",
    "poster": "https://image.tmdb.org/t/p/w500/rgMfhcrVZjuy5b7Pn0KzCRCEnMX.jpg"
  },
  {
    "title": "That '70s Show",
    "year": "1998–2006",
    "poster": "https://image.tmdb.org/t/p/w500/laEZvTqM80UaplUaDSCCbWhlyEV.jpg"
  },
  {
    "title": "Hazbin Hotel",
    "year": "2024–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/aVYHMW8pdzJ9qG1OGRMKyGy9xor.jpg"
  },
  {
    "title": "3 Body Problem",
    "year": "2024–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/ykZ7hlShkdRQaL2aiieXdEMmrLb.jpg"
  },
  {
    "title": "JoJo's Bizarre Adventure",
    "year": "2012–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/ogAWwbh3frWtiTyyXrZaVFtqCgp.jpg"
  },
  {
    "title": "IT: Welcome to Derry",
    "year": "2025–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/nyy3BITeIjviv6PFIXtqvc8i6xi.jpg"
  },
  {
    "title": "Mr. Bean",
    "year": "1990–1995",
    "poster": "https://image.tmdb.org/t/p/w500/pUNQV35kDaKuejnXGNiUeEBurNE.jpg"
  },
  {
    "title": "La Brea",
    "year": "2021–2024",
    "poster": "https://image.tmdb.org/t/p/w500/wEo5pzSZ3MF4EzNvY2R1OZNX266.jpg"
  },
  {
    "title": "La hija del Mariachi",
    "year": "2006–2018",
    "poster": "https://image.tmdb.org/t/p/w500/a9J1rl8X4klFNMLTFGIJIHIjXgf.jpg"
  },
  {
    "title": "Primal",
    "year": "2019–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/mf12pRakr3eYdJtv6klQtoznnbU.jpg"
  },
  {
    "title": "Defending Jacob",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/JTmkzwSDRiS9nvSPwpDB9fmZj2.jpg"
  },
  {
    "title": "Shadow and Bone",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/mS9O9mjPlwpLTne4JgQlDkgREWA.jpg"
  },
  {
    "title": "Sweet Home",
    "year": "2020–2024",
    "poster": "https://image.tmdb.org/t/p/w500/zcugNxDg59YwIf3dUHsrHmO7pc1.jpg"
  },
  {
    "title": "Gen V",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/tEv842Nd5uMSavURG4aQO1pNtst.jpg"
  },
  {
    "title": "Batwoman",
    "year": "2019–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/pBpxKiitMuYXvtsXNSzya8DKKzV.jpg"
  },
  {
    "title": "The Gifted",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/nshCqszjTNuqhrB53vrSqWO18sE.jpg"
  },
  {
    "title": "Castlevania",
    "year": "2017–2021",
    "poster": "https://image.tmdb.org/t/p/w500/WzFHnJY44uDERER0xi1jOdoafT.jpg"
  },
  {
    "title": "S.W.A.T.",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/1l7vsAIkqOzrqiPwjO27Cb5QdfJ.jpg"
  },
  {
    "title": "White Collar",
    "year": "2009–2014",
    "poster": "https://image.tmdb.org/t/p/w500/417XNiGvdzCsG9kDnnQJYaBsIrx.jpg"
  },
  {
    "title": "Kakegurui",
    "year": "2017–2019",
    "poster": "https://image.tmdb.org/t/p/w500/xsZOMx3ojsER12lRHNe7TcT7YqM.jpg"
  },
  {
    "title": "Legion",
    "year": "2017–2019",
    "poster": "https://image.tmdb.org/t/p/w500/xhJtYVTsdXQCIlB5hAXkMCPUG9y.jpg"
  },
  {
    "title": "The Rising of the Shield Hero",
    "year": "2019–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/yjq2n0agGJfmZQ9NpbYIhuBofcq.jpg"
  },
  {
    "title": "1899",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/gZleGu1MQVBArH2dlpZ9CGi0hhy.jpg"
  },
  {
    "title": "Selena: The Series",
    "year": "2020–2021",
    "poster": "https://image.tmdb.org/t/p/w500/yQ9liJVd07zSOFECJ0actCzaXZd.jpg"
  },
  {
    "title": "Emily in Paris",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/c0bkO416OU7YGdOFktk45H8REgL.jpg"
  },
  {
    "title": "Mad Men",
    "year": "2007–2015",
    "poster": "https://image.tmdb.org/t/p/w500/5jOedTeytYzlJZwU66MFjmLHhHX.jpg"
  },
  {
    "title": "The Queen of Flow",
    "year": "2018–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/fuVuDYrs8sxvEolnYr0wCSvtyTi.jpg"
  },
  {
    "title": "iCarly",
    "year": "2007–2012",
    "poster": "https://image.tmdb.org/t/p/w500/zswxst53aM8g2LysdVbtQNJAiKM.jpg"
  },
  {
    "title": "Fate: The Winx Saga",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/oHj6guMrLfQcBzo3uxwBJc8Y736.jpg"
  },
  {
    "title": "TONIKAWA: Over the Moon for You",
    "year": "2020–2023",
    "poster": "https://image.tmdb.org/t/p/w500/jJKTrIfZKoFV66HGMzSa4tkObK0.jpg"
  },
  {
    "title": "Rome",
    "year": "2005–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/1A1BwgWO3Sw379VEhR0vkTuE3XW.jpg"
  },
  {
    "title": "Station 19",
    "year": "2018–2024",
    "poster": "https://image.tmdb.org/t/p/w500/3gs9wBsvv1GJ3EzLheh5yGuTQis.jpg"
  },
  {
    "title": "Penny Dreadful",
    "year": "2014–2016",
    "poster": "https://image.tmdb.org/t/p/w500/hQSdrXBYTbLGHYDIseHkBOPXTgL.jpg"
  },
  {
    "title": "Star Trek",
    "year": "1966–1969",
    "poster": "https://image.tmdb.org/t/p/w500/f2wbC7fxiOJqzTb6HPr4N6bsjLF.jpg"
  },
  {
    "title": "Killing Eve",
    "year": "2018–2022",
    "poster": "https://image.tmdb.org/t/p/w500/4wKhTVw8aGq5AZMa0Q1spERdi7n.jpg"
  },
  {
    "title": "The Man in the High Castle",
    "year": "2015–2019",
    "poster": "https://image.tmdb.org/t/p/w500/xhoDZbMNeyCA0BGPZQsdIiO43Dp.jpg"
  },
  {
    "title": "Ranma ½",
    "year": "1989–1992",
    "poster": "https://image.tmdb.org/t/p/w500/qb1R5iLZcjIgdDIfXFQXmJadQPI.jpg"
  },
  {
    "title": "40 y 20",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/jS3N1pZpBAj8Ugqgv332oi20Til.jpg"
  },
  {
    "title": "Narcos: Mexico",
    "year": "2018–2021",
    "poster": "https://image.tmdb.org/t/p/w500/aXwMx8OvRFMfI1RmkbJm6Bq1jVg.jpg"
  },
  {
    "title": "Once",
    "year": "2017–2020",
    "poster": "https://image.tmdb.org/t/p/w500/d4vPg3QsTJJh6C5MHARTb5CyqOu.jpg"
  },
  {
    "title": "Taboo",
    "year": "2017",
    "poster": "https://image.tmdb.org/t/p/w500/om1wVOuEtwH3krHutIWO9sJzkS5.jpg"
  },
  {
    "title": "Star vs. the Forces of Evil",
    "year": "2015–2019",
    "poster": "https://image.tmdb.org/t/p/w500/dKFL1AOdKNoazqZDg1zq2z69Lx1.jpg"
  },
  {
    "title": "The White Lotus",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/gbSaK9v1CbcYH1ISgbM7XObD2dW.jpg"
  },
  {
    "title": "The Last Dance",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/oVf4xGGbDtwVHiKn8uTuSriY7PH.jpg"
  },
  {
    "title": "Black Sails",
    "year": "2014–2017",
    "poster": "https://image.tmdb.org/t/p/w500/mZcSwrDdw6cdOVgXm496DgwrQcQ.jpg"
  },
  {
    "title": "It's Okay to Not Be Okay",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/8XSJfLeImX8NszDUFnK1lbseCi8.jpg"
  },
  {
    "title": "Ms. Marvel",
    "year": "2022",
    "poster": "https://image.tmdb.org/t/p/w500/3HWWh92kZbD7odwJX7nKmXNZsYo.jpg"
  },
  {
    "title": "Locke & Key",
    "year": "2020–2022",
    "poster": "https://image.tmdb.org/t/p/w500/zuxGfRKziGHPogipnEXXykdDmyT.jpg"
  },
  {
    "title": "Lioness",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/rzpHPSEgPTpRs8EHbygwsOw7jC0.jpg"
  },
  {
    "title": "Lady, la vendedora de rosas",
    "year": "2015",
    "poster": "https://image.tmdb.org/t/p/w500/hkiNJTUqgltJvqEpFP1QpzuujO2.jpg"
  },
  {
    "title": "Doom Patrol",
    "year": "2019–2023",
    "poster": "https://image.tmdb.org/t/p/w500/nVN7Dt0Xr78gnJepRsRLaLYklbY.jpg"
  },
  {
    "title": "Elfen Lied",
    "year": "2004",
    "poster": "https://image.tmdb.org/t/p/w500/mYakikF9MYpiRRQKnXQD6ubRHwr.jpg"
  },
  {
    "title": "Upload",
    "year": "2020–2025",
    "poster": "https://image.tmdb.org/t/p/w500/6TPGDrU9MyWbn2TpggJphVAVXiq.jpg"
  },
  {
    "title": "Orphan Black",
    "year": "2013–2017",
    "poster": "https://image.tmdb.org/t/p/w500/tjFYkWMafg71sihs1aa7IDx17aS.jpg"
  },
  {
    "title": "Archer",
    "year": "2009–2023",
    "poster": "https://image.tmdb.org/t/p/w500/vhnrkTGYPqcB63ALcSJm0WoaKHT.jpg"
  },
  {
    "title": "Snowpiercer",
    "year": "2020–2024",
    "poster": "https://image.tmdb.org/t/p/w500/exKzfiKzMdQBHrdd7zNmKauJkbg.jpg"
  },
  {
    "title": "KONOSUBA - God's blessing on this wonderful world!",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/oRaOeQlwktbGSd2T31FYAcgHZlh.jpg"
  },
  {
    "title": "The Penguin",
    "year": "2024",
    "poster": "https://image.tmdb.org/t/p/w500/vOWcqC4oDQws1doDWLO7d3dh5qc.jpg"
  },
  {
    "title": "The Haunting of Bly Manor",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/vIXQ8UymmQ7zJEPrKJP3s3fSbhR.jpg"
  },
  {
    "title": "The Orville",
    "year": "2017–2022",
    "poster": "https://image.tmdb.org/t/p/w500/78xnHh9H5wYcUeZoB0bt1UgInAW.jpg"
  },
  {
    "title": "Parasyte -the maxim-",
    "year": "2014–2015",
    "poster": "https://image.tmdb.org/t/p/w500/cXBfjZSdJelu2r0wKD7qCxS71kb.jpg"
  },
  {
    "title": "Saint Seiya",
    "year": "1986–1989",
    "poster": "https://image.tmdb.org/t/p/w500/dhtiYYbob8saEUFWle3aWgVY28M.jpg"
  },
  {
    "title": "Knight Rider",
    "year": "1982–1986",
    "poster": "https://image.tmdb.org/t/p/w500/t57NXzTrwp5rnPXiaX4BThrDxt1.jpg"
  },
  {
    "title": "Secret Invasion",
    "year": "2023",
    "poster": "https://image.tmdb.org/t/p/w500/3rINdUPSy9AklJg74jWHOyUXuZd.jpg"
  },
  {
    "title": "Carnival Row",
    "year": "2019–2023",
    "poster": "https://image.tmdb.org/t/p/w500/jyhxT10e2z9IDsKoIQDKhyxSQJt.jpg"
  },
  {
    "title": "The OA",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/rueY4slMeKtTGitm0raFUJvgaa5.jpg"
  },
  {
    "title": "Banshee",
    "year": "2013–2016",
    "poster": "https://image.tmdb.org/t/p/w500/5nXFiz8Rn8eezVjSTZBd7HmnF1G.jpg"
  },
  {
    "title": "Xena: Warrior Princess",
    "year": "1995–2001",
    "poster": "https://image.tmdb.org/t/p/w500/qjUn6GVZVDifLHB7bvVrgZsOfzE.jpg"
  },
  {
    "title": "CSI: Crime Scene Investigation",
    "year": "2000–2015",
    "poster": "https://image.tmdb.org/t/p/w500/i5hmoRjHNWady4AtAGICTUXknKH.jpg"
  },
  {
    "title": "Skins",
    "year": "2007–2013",
    "poster": "https://image.tmdb.org/t/p/w500/3lINq40kw9T52ipjwN8Rht4rnrj.jpg"
  },
  {
    "title": "Veneno",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/rSMgruoizGda8Rqe9DsgD2Ln8Uq.jpg"
  },
  {
    "title": "Monsters at Work",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/2gxgwhcuSmI5xtexb0t9zGj43FS.jpg"
  },
  {
    "title": "Sex/Life",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/kfcJl5e8CRWDU7e4vX6uNABPRbS.jpg"
  },
  {
    "title": "X-Men",
    "year": "1992–1997",
    "poster": "https://image.tmdb.org/t/p/w500/2OFwsFhAobczgJWnVdwd9oZAF2N.jpg"
  },
  {
    "title": "It's Always Sunny in Philadelphia",
    "year": "2005–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/o0tMMK33JqmtpcWw0H41cEr9xQB.jpg"
  },
  {
    "title": "BAKI",
    "year": "2018–2020",
    "poster": "https://image.tmdb.org/t/p/w500/zILdYTEETOdaigYkoTvifxzdufN.jpg"
  },
  {
    "title": "Monarch: Legacy of Monsters",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/7LBbaEaLSbqdviBYaSS1rRPMnrs.jpg"
  },
  {
    "title": "The Night Of",
    "year": "2016",
    "poster": "https://image.tmdb.org/t/p/w500/q13XJHdnsmxQL9rXRcnNDrZGHjO.jpg"
  },
  {
    "title": "Without Breasts There Is No Paradise",
    "year": "2008",
    "poster": "https://image.tmdb.org/t/p/w500/pSsQ5rFalyT7ehwgeSlITgBSi5S.jpg"
  },
  {
    "title": "The Peripheral",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/2e5NNQu9B1fXBNllRj8fzysCguP.jpg"
  },
  {
    "title": "Normal People",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/tbKSsFd4ImzUgbYolttkq4pmOPQ.jpg"
  },
  {
    "title": "Falling Skies",
    "year": "2011–2015",
    "poster": "https://image.tmdb.org/t/p/w500/uP6p0aWcIpYwA0HjY4bYR4naz5g.jpg"
  },
  {
    "title": "Steven Universe",
    "year": "2013–2019",
    "poster": "https://image.tmdb.org/t/p/w500/8zRstOgaipruJPlsHK2diMx4lPy.jpg"
  },
  {
    "title": "What Life Took From Me",
    "year": "2013–2014",
    "poster": "https://image.tmdb.org/t/p/w500/qHPdvdPE0U2B4nuQaU0IrWtqoQ2.jpg"
  },
  {
    "title": "The Night Manager",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/1MccRnw41qQjREuZkovqP2UX1i3.jpg"
  },
  {
    "title": "Drawn Together",
    "year": "2004–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/xhshQ2WgAa5zyXqwRcxKMDwRBGd.jpg"
  },
  {
    "title": "Californication",
    "year": "2007–2014",
    "poster": "https://image.tmdb.org/t/p/w500/jPqOY8cq9KXQN4bD7zJGHCNvcb4.jpg"
  },
  {
    "title": "The Rain",
    "year": "2018–2020",
    "poster": "https://image.tmdb.org/t/p/w500/jtOuOpJwyEVfdaekwP1tGO8hAw7.jpg"
  },
  {
    "title": "Mob Psycho 100",
    "year": "2016–2022",
    "poster": "https://image.tmdb.org/t/p/w500/vR7hwaGQ0ySRoq1WobiNRaPs4WO.jpg"
  },
  {
    "title": "Teen Titans",
    "year": "2003–2006",
    "poster": "https://image.tmdb.org/t/p/w500/7DCq6XbJx5WGKPvSMBxYK9uJQWQ.jpg"
  },
  {
    "title": "Disenchantment",
    "year": "2018–2023",
    "poster": "https://image.tmdb.org/t/p/w500/1WynayCqKRzrl4cFZR8NOfiDwd6.jpg"
  },
  {
    "title": "De viaje con los Derbez",
    "year": "2019–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/uRGtSHP3tSQ2XsHhguCREWt7dXA.jpg"
  },
  {
    "title": "Dororo",
    "year": "2019",
    "poster": "https://image.tmdb.org/t/p/w500/mLSJO9lj2RMHdzHJMNMoksmwlbv.jpg"
  },
  {
    "title": "Preacher",
    "year": "2016–2019",
    "poster": "https://image.tmdb.org/t/p/w500/ey1WQajA25E5sFGHSApcqSWUSEc.jpg"
  },
  {
    "title": "Tokyo Revengers",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/arB3L9pZZBSzUPSC8BEv8c3X0bF.jpg"
  },
  {
    "title": "BEASTARS",
    "year": "2019–2026",
    "poster": "https://image.tmdb.org/t/p/w500/sh9iNWkleOjEHRHj8WPHhmMi8HL.jpg"
  },
  {
    "title": "The Resident",
    "year": "2018–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/2IkYQJlT26yXef2iot7dhRtavSC.jpg"
  },
  {
    "title": "Rascal Does Not Dream of Bunny Girl Senpai",
    "year": "2018–2025",
    "poster": "https://image.tmdb.org/t/p/w500/fbqDG7GjodvaNecgv1q8kfSNPl5.jpg"
  },
  {
    "title": "Warrior Nun",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/fLP0mA7FiERZhDP1NJUaHpm6XM8.jpg"
  },
  {
    "title": "The Nanny",
    "year": "1993–1999",
    "poster": "https://image.tmdb.org/t/p/w500/4syShXMjaPAP3mG81ekhruv94sd.jpg"
  },
  {
    "title": "Brazil Avenue",
    "year": "2012",
    "poster": "https://image.tmdb.org/t/p/w500/3wH4kZ0hdoizAcgqCgp3gUD1fFq.jpg"
  },
  {
    "title": "Boardwalk Empire",
    "year": "2010–2014",
    "poster": "https://image.tmdb.org/t/p/w500/zyHLWVmqS8m7bxABJjcDFMYLdF8.jpg"
  },
  {
    "title": "The Day of the Jackal",
    "year": "2024–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/tYLecM3WSEjlkKhkGiH5G68Dprm.jpg"
  },
  {
    "title": "The Promised Neverland",
    "year": "2019–2021",
    "poster": "https://image.tmdb.org/t/p/w500/oBgRCpAbtMpk1v8wfdsIph7lPQE.jpg"
  },
  {
    "title": "Power",
    "year": "2014–2020",
    "poster": "https://image.tmdb.org/t/p/w500/ctftzvyj8b0odco7EoS9VfJhf7K.jpg"
  },
  {
    "title": "Ahsoka",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/eiJeWeCAEZAmRppnXHiTWDcCd3Q.jpg"
  },
  {
    "title": "Monk",
    "year": "2002–2009",
    "poster": "https://image.tmdb.org/t/p/w500/3axGMbUecXXOPSeG47v2i9wK5y5.jpg"
  },
  {
    "title": "Midnight Mass",
    "year": "2021",
    "poster": "https://image.tmdb.org/t/p/w500/iYoMZYVD775MtBYJfv6OGY1FsnL.jpg"
  },
  {
    "title": "The Sinner",
    "year": "2017–2021",
    "poster": "https://image.tmdb.org/t/p/w500/rmibFGdqOe0kKKhPls0jVOdZCWw.jpg"
  },
  {
    "title": "Gilmore Girls",
    "year": "2000–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/gwtzCwU2wdLLf8oejQu2TINiWfQ.jpg"
  },
  {
    "title": "ERASED",
    "year": "2016",
    "poster": "https://image.tmdb.org/t/p/w500/EljUwZJhpuYfVuSfqY8Pt1xxpH.jpg"
  },
  {
    "title": "Planet Earth",
    "year": "2006",
    "poster": "https://image.tmdb.org/t/p/w500/bNcNxUtZ520d5de5s78onoiSiwQ.jpg"
  },
  {
    "title": "The Leftovers",
    "year": "2014–2017",
    "poster": "https://image.tmdb.org/t/p/w500/NKJdryIFHr245Umq6gXsf7oULW.jpg"
  },
  {
    "title": "Ratched",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/cDNxOIm6K5D2W21QyJWZ95sJzQt.jpg"
  },
  {
    "title": "Chicago Med",
    "year": "2015–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/9eym662FRJJb9wdgCiDKPDciZzf.jpg"
  },
  {
    "title": "Atypical",
    "year": "2017–2021",
    "poster": "https://image.tmdb.org/t/p/w500/kNif3eZAjQ7qU3Ol9E7zo0kjPMo.jpg"
  },
  {
    "title": "Kingdom",
    "year": "2019–2020",
    "poster": "https://image.tmdb.org/t/p/w500/AsICtiVtz4icMQQRwDvOzfaTzjK.jpg"
  },
  {
    "title": "Outer Banks",
    "year": "2020–2026",
    "poster": "https://image.tmdb.org/t/p/w500/ovDgO2LPfwdVRfvScAqo9aMiIW.jpg"
  },
  {
    "title": "El Capo",
    "year": "2009–2014",
    "poster": "https://image.tmdb.org/t/p/w500/hTwfFidPtRU3BUH8mK90jWyPyBr.jpg"
  },
  {
    "title": "NCIS: Los Angeles",
    "year": "2009–2023",
    "poster": "https://image.tmdb.org/t/p/w500/TIIgcznwNfNr3KOZvxn26eKV99.jpg"
  },
  {
    "title": "Married... with Children",
    "year": "1987–1997",
    "poster": "https://image.tmdb.org/t/p/w500/qxdOgESOkBMmfcWUizL01mbdqzl.jpg"
  },
  {
    "title": "ALF",
    "year": "1986–1990",
    "poster": "https://image.tmdb.org/t/p/w500/shRed7ZrCRjdIMEYNx2YBVFkkNu.jpg"
  },
  {
    "title": "Daughter from Another Mother",
    "year": "2021–2022",
    "poster": "https://image.tmdb.org/t/p/w500/lq0n5QzBA78ndUDb9SdN93P8hjY.jpg"
  },
  {
    "title": "The Night Agent",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/4c5yUNcaff4W4aPrkXE6zr7papX.jpg"
  },
  {
    "title": "Assassination Classroom",
    "year": "2015–2016",
    "poster": "https://image.tmdb.org/t/p/w500/qf0l0nQ2t06Es3cSXflqx6l6vsJ.jpg"
  },
  {
    "title": "Big Mouth",
    "year": "2017–2025",
    "poster": "https://image.tmdb.org/t/p/w500/1Zio9w1tAd3r5Gu4d9AzTSx2hnT.jpg"
  },
  {
    "title": "Akame ga Kill!",
    "year": "2014",
    "poster": "https://image.tmdb.org/t/p/w500/rMpvMbSlPbm5QYfFem9fx2Jnttq.jpg"
  },
  {
    "title": "Shadowhunters",
    "year": "2016–2019",
    "poster": "https://image.tmdb.org/t/p/w500/66YHvvVduC21xcMXPpBBF0ywyVZ.jpg"
  },
  {
    "title": "Young Justice",
    "year": "2010–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/zMJw34G4OJhcd9NjKSRjJdDqjbR.jpg"
  },
  {
    "title": "Chuck",
    "year": "2007–2012",
    "poster": "https://image.tmdb.org/t/p/w500/vEZvGVVMjk1TRs59nfypTI5lAXj.jpg"
  },
  {
    "title": "Downton Abbey",
    "year": "2010–2015",
    "poster": "https://image.tmdb.org/t/p/w500/cf9vkwFmwvdzBlcpAYEVQfsKoTp.jpg"
  },
  {
    "title": "Luther",
    "year": "2010–2019",
    "poster": "https://image.tmdb.org/t/p/w500/hDxOMX8zzH1FiqKWVBzNaYGBkle.jpg"
  },
  {
    "title": "Sabrina, the Teenage Witch",
    "year": "1996–2003",
    "poster": "https://image.tmdb.org/t/p/w500/nNhj3coHNVVJPVM7fm5PEYVTCMO.jpg"
  },
  {
    "title": "Baby Reindeer",
    "year": "2024",
    "poster": "https://image.tmdb.org/t/p/w500/tN9OcbkAOPwHSr1sgMornZtQZBx.jpg"
  },
  {
    "title": "9-1-1: Lone Star",
    "year": "2020–2025",
    "poster": "https://image.tmdb.org/t/p/w500/BOTITv548LYGB4xRD3rHfbwkqm.jpg"
  },
  {
    "title": "Fighting Spirit",
    "year": "2000–2014",
    "poster": "https://image.tmdb.org/t/p/w500/fEYVJu08En9A7n0e5TTpeoSjtIm.jpg"
  },
  {
    "title": "Who Killed Sara?",
    "year": "2021–2022",
    "poster": "https://image.tmdb.org/t/p/w500/o7uk5ChRt3quPIv8PcvPfzyXdMw.jpg"
  },
  {
    "title": "Young Royals",
    "year": "2021–2024",
    "poster": "https://image.tmdb.org/t/p/w500/6sr6hOeipKbiZEIsOKh9nTxeJhR.jpg"
  },
  {
    "title": "The Walking Dead: World Beyond",
    "year": "2020–2021",
    "poster": "https://image.tmdb.org/t/p/w500/6HanIV2hTLE2w7A5bI1KJb3bTL7.jpg"
  },
  {
    "title": "Stargate Atlantis",
    "year": "2004–2009",
    "poster": "https://image.tmdb.org/t/p/w500/l0JYr2iqwId6VOmCV8dHzlIM6Wd.jpg"
  },
  {
    "title": "Mi corazón es tuyo",
    "year": "2014–2015",
    "poster": "https://image.tmdb.org/t/p/w500/kMF4iYqlnsQMglOsr0C6KIVtB2X.jpg"
  },
  {
    "title": "Invasion",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/1PdNB3rYTcf8VXc8rcmZ0SeYxSq.jpg"
  },
  {
    "title": "Barry",
    "year": "2018–2023",
    "poster": "https://image.tmdb.org/t/p/w500/j1XpwD11f0BAEI7pX6UdMhUVX2F.jpg"
  },
  {
    "title": "Bodyguard",
    "year": "2018",
    "poster": "https://image.tmdb.org/t/p/w500/5DUJTrHTRLHLCKWriPhdusQogAv.jpg"
  },
  {
    "title": "12 Monkeys",
    "year": "2015–2018",
    "poster": "https://image.tmdb.org/t/p/w500/w5u1PqBYfDyfrlkxADTA38jYG3I.jpg"
  },
  {
    "title": "Wizards of Waverly Place",
    "year": "2007–2012",
    "poster": "https://image.tmdb.org/t/p/w500/spVI8Zns4Ep30zzxcoO7f7nwfck.jpg"
  },
  {
    "title": "The Terminal List",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/kIiFRP7MblxsBioEVPHCCYAJ4n5.jpg"
  },
  {
    "title": "Ben 10: Alien Force",
    "year": "2008–2010",
    "poster": "https://image.tmdb.org/t/p/w500/sEocAE3h5iu8CUNhdx1gHan7QJf.jpg"
  },
  {
    "title": "Surviving Escobar - Alias JJ",
    "year": "2017",
    "poster": "https://image.tmdb.org/t/p/w500/iaIFLYKIInDohWnq2Lm63PKipi6.jpg"
  },
  {
    "title": "The Great",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/tpz9UQ3hUwYufNcKWVW00FCjWyc.jpg"
  },
  {
    "title": "DC's Stargirl",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/JJxVsQPPiuLcArALotMHsCubeo.jpg"
  },
  {
    "title": "Merlin",
    "year": "2008–2012",
    "poster": "https://image.tmdb.org/t/p/w500/8eR5Jg7CxsuCOEBU5wW0opObxpi.jpg"
  },
  {
    "title": "Stairway to Heaven",
    "year": "2003–2004",
    "poster": "https://image.tmdb.org/t/p/w500/n5Yyw9aub94Nmxart8T9rqr0Ypk.jpg"
  },
  {
    "title": "Star Wars: The Bad Batch",
    "year": "2021–2024",
    "poster": "https://image.tmdb.org/t/p/w500/5mHus672nuinyaE0FtqvD0AddcY.jpg"
  },
  {
    "title": "Harley Quinn",
    "year": "2019–2025",
    "poster": "https://image.tmdb.org/t/p/w500/9Dm1SEh8Wxt8LNNg02exHQ595zg.jpg"
  },
  {
    "title": "Merlí",
    "year": "2015–2018",
    "poster": "https://image.tmdb.org/t/p/w500/wQaGnuwIHhmB1jgY6CM3rJgScYR.jpg"
  },
  {
    "title": "Scream: The TV Series",
    "year": "2015–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/cb2WD75HjajBmFtPzfU5ukGqfeo.jpg"
  },
  {
    "title": "Danny Phantom",
    "year": "2004–2007",
    "poster": "https://image.tmdb.org/t/p/w500/pBUOFBmZLaIxzjDjQP7d3QZrd4w.jpg"
  },
  {
    "title": "Designated Survivor",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/5R125JAIh1N38pzHp2dRsBpOVNY.jpg"
  },
  {
    "title": "Your Lie in April",
    "year": "2014–2015",
    "poster": "https://image.tmdb.org/t/p/w500/92P9cD5uOzLVgx0QDTnwkXffjEG.jpg"
  },
  {
    "title": "The Tom and Jerry Show",
    "year": "1975–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/um2758jtENjV7WwgP56aCPLfQGo.jpg"
  },
  {
    "title": "Trollhunters: Tales of Arcadia",
    "year": "2016–2018",
    "poster": "https://image.tmdb.org/t/p/w500/9VZmMzINVdO3ZYGsKItU39pNO2l.jpg"
  },
  {
    "title": "Henry Danger",
    "year": "2014–2020",
    "poster": "https://image.tmdb.org/t/p/w500/f3TEP5SROTpL6e520ohhSNbUv1E.jpg"
  },
  {
    "title": "My Name Is Earl",
    "year": "2005–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/57shLTTkHvhLUhyP1t0lNZPoAxD.jpg"
  },
  {
    "title": "Full House",
    "year": "1987–1995",
    "poster": "https://image.tmdb.org/t/p/w500/7g0EyKsIaYjYw3gCIBKMHHE0Kcu.jpg"
  },
  {
    "title": "Spider-Man",
    "year": "1994–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/1BX1HZZqDoLDx9Ry4oET6dA9293.jpg"
  },
  {
    "title": "Horimiya",
    "year": "2021",
    "poster": "https://image.tmdb.org/t/p/w500/iSOKGl5KIeOCAtigUDCfFZe2cOi.jpg"
  },
  {
    "title": "Six Feet Under",
    "year": "2001–2005",
    "poster": "https://image.tmdb.org/t/p/w500/sCgzLaVlFy8KxtxRPvt1V5MNTDb.jpg"
  },
  {
    "title": "A Knight of the Seven Kingdoms",
    "year": "2026–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/k8yARbD9iYn2nRX2HvsopfKDN2r.jpg"
  },
  {
    "title": "Star Trek: Voyager",
    "year": "1995–2001",
    "poster": "https://image.tmdb.org/t/p/w500/gNS5tRSG3UlXodCxznKKOKweqxh.jpg"
  },
  {
    "title": "Ragnarok",
    "year": "2020–2023",
    "poster": "https://image.tmdb.org/t/p/w500/9rWGgUJSuVEgaScOKbJPc9wkR3v.jpg"
  },
  {
    "title": "After Life",
    "year": "2019–2022",
    "poster": "https://image.tmdb.org/t/p/w500/6eJf4h9XcvqK64vbx27EFlLVURm.jpg"
  },
  {
    "title": "Amor Real",
    "year": "2003",
    "poster": "https://image.tmdb.org/t/p/w500/mOJvN5aEZ13a2E029O2StAYuOHZ.jpg"
  },
  {
    "title": "The Fairly OddParents",
    "year": "2001–2017",
    "poster": "https://image.tmdb.org/t/p/w500/3ryMj7tIvVtiXyI2tLvHYTjOjq4.jpg"
  },
  {
    "title": "Everybody Hates Chris",
    "year": "2005–2009",
    "poster": "https://image.tmdb.org/t/p/w500/zX0xZnyReJxtGAqDOS3WcsgpOgx.jpg"
  },
  {
    "title": "Moses and the Ten Commandments",
    "year": "2015–2016",
    "poster": "https://image.tmdb.org/t/p/w500/yAnTu7sdw77n15fj3EmF3do5F5V.jpg"
  },
  {
    "title": "Sleepy Hollow",
    "year": "2013–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/2RHj62XneYMCRPAyQrEIrKVij12.jpg"
  },
  {
    "title": "Scooby-Doo! Mystery Incorporated",
    "year": "2010–2013",
    "poster": "https://image.tmdb.org/t/p/w500/mu8zU2jQfPbGO5bC6RHYrSypxUd.jpg"
  },
  {
    "title": "The Summer I Turned Pretty",
    "year": "2022–2025",
    "poster": "https://image.tmdb.org/t/p/w500/xBIz53wYWsKfFpN0TaizVAjKJ0z.jpg"
  },
  {
    "title": "Alien: Earth",
    "year": "2025–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/yueXS3q8BtoWekcHOATFHicLl3e.jpg"
  },
  {
    "title": "Rosario Tijeras",
    "year": "2010",
    "poster": "https://image.tmdb.org/t/p/w500/13JdedQwxn9hhTM3wFbZL12aFfU.jpg"
  },
  {
    "title": "Bob's Burgers",
    "year": "2011–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/iIHsQe3Qjs3NH62HdamyQEPeqTR.jpg"
  },
  {
    "title": "Project Blue Book",
    "year": "2019–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/rqrzjT5nc7mTD5IKVMLRhLeyzgD.jpg"
  },
  {
    "title": "Soy Luna",
    "year": "2016–2018",
    "poster": "https://image.tmdb.org/t/p/w500/4JDmIzhNF7aMsDGlxVwkQ9kv9E6.jpg"
  },
  {
    "title": "Overlord",
    "year": "2015–2022",
    "poster": "https://image.tmdb.org/t/p/w500/K8ZUjxaj9F0t3AwJDz8ypzBynM.jpg"
  },
  {
    "title": "Sharp Objects",
    "year": "2018",
    "poster": "https://image.tmdb.org/t/p/w500/1SGovj2qDdkJexvhFiXllj9EYfu.jpg"
  },
  {
    "title": "The A-Team",
    "year": "1983–1987",
    "poster": "https://image.tmdb.org/t/p/w500/p2qWJJ7Wyaq2xvgIHuBw4zVNBij.jpg"
  },
  {
    "title": "Dinosaurs",
    "year": "1991–1995",
    "poster": "https://image.tmdb.org/t/p/w500/rcD2grjO6xAerWLkSgpmGkGhnTH.jpg"
  },
  {
    "title": "ThunderCats",
    "year": "1985–1989",
    "poster": "https://image.tmdb.org/t/p/w500/6TO2Ma9S6lhlZaXRNH7OVuPwh0U.jpg"
  },
  {
    "title": "New Amsterdam",
    "year": "2018–2023",
    "poster": "https://image.tmdb.org/t/p/w500/jsH4AeGZn5Q6h314A3OTUHKxHhR.jpg"
  },
  {
    "title": "The Wonder Years",
    "year": "1988–1993",
    "poster": "https://image.tmdb.org/t/p/w500/tkaduqdhFrF1vp8L55OJfB5jw8Z.jpg"
  },
  {
    "title": "The Americans",
    "year": "2013–2018",
    "poster": "https://image.tmdb.org/t/p/w500/w1UBlxEXhbKe8sp0fxFZh7MqTce.jpg"
  },
  {
    "title": "Vincenzo",
    "year": "2021",
    "poster": "https://image.tmdb.org/t/p/w500/qbkSS1cTjT4DzIwD44bdhTuYgdT.jpg"
  },
  {
    "title": "Ecomoda",
    "year": "2001–2002",
    "poster": "https://image.tmdb.org/t/p/w500/eQgvi0yufzRV8A3i4lVheMxU2RN.jpg"
  },
  {
    "title": "Daredevil: Born Again",
    "year": "2025–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/xDUoAsU8lQHOOoRkFiBuarmACDN.jpg"
  },
  {
    "title": "Vecinos",
    "year": "2005–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/aZRmvPsCO5MawSedQ1eeeDo1xia.jpg"
  },
  {
    "title": "My Name",
    "year": "2021",
    "poster": "https://image.tmdb.org/t/p/w500/gHozOomiA24DvlgNfjkYCB5NBiO.jpg"
  },
  {
    "title": "Vikings: Valhalla",
    "year": "2022–2024",
    "poster": "https://image.tmdb.org/t/p/w500/uCr7Ov7Rpzx0c0EPqbPcoEruTYl.jpg"
  },
  {
    "title": "Another",
    "year": "2012",
    "poster": "https://image.tmdb.org/t/p/w500/h3YyESKtOy7Rrv7zymyF9kfpz7T.jpg"
  },
  {
    "title": "Pluribus",
    "year": "2025–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/z7Nga7Q9IGFWs5OEduY2gGFxnX3.jpg"
  },
  {
    "title": "Swamp Thing",
    "year": "2019–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/dD3HcMczLC9wNvfNzx4pZVyl6q8.jpg"
  },
  {
    "title": "The Last Ship",
    "year": "2014–2018",
    "poster": "https://image.tmdb.org/t/p/w500/xH529hDtPxhslAEeCrN7gD64ZMX.jpg"
  },
  {
    "title": "Fullmetal Alchemist",
    "year": "2003–2004",
    "poster": "https://image.tmdb.org/t/p/w500/kKOQbCKbGB75h1d3Jlx9Gy4ZTfv.jpg"
  },
  {
    "title": "Zoey 101",
    "year": "2005–2008",
    "poster": "https://image.tmdb.org/t/p/w500/3eOM57RTccTSvqcYFhWwm9DAba8.jpg"
  },
  {
    "title": "American Crime Story",
    "year": "2016–2021",
    "poster": "https://image.tmdb.org/t/p/w500/dtIS3Qk8ny1FWQLiuJ77MTDX5bZ.jpg"
  },
  {
    "title": "La familia P. Luche",
    "year": "2002–2012",
    "poster": "https://image.tmdb.org/t/p/w500/fATxlzvUmut1WbewwUh6DKw65yq.jpg"
  },
  {
    "title": "Evil",
    "year": "2019–2024",
    "poster": "https://image.tmdb.org/t/p/w500/auRAAVxlyT6YACql96UdtnpFHy3.jpg"
  },
  {
    "title": "When They See Us",
    "year": "2019",
    "poster": "https://image.tmdb.org/t/p/w500/oPv3nNtkuc6EPEql5lgdOuQNHuG.jpg"
  },
  {
    "title": "Billions",
    "year": "2016–2023",
    "poster": "https://image.tmdb.org/t/p/w500/edwYPQdZE998d748AdwWLsfy0rl.jpg"
  },
  {
    "title": "KENGAN ASHURA",
    "year": "2019–2024",
    "poster": "https://image.tmdb.org/t/p/w500/tqR96OMBKzHNCNwJB3f3NsCkXbL.jpg"
  },
  {
    "title": "Guillermo del Toro's Cabinet of Curiosities",
    "year": "2022",
    "poster": "https://image.tmdb.org/t/p/w500/a91e9hpWwfCqxJI4xM9Q2RhuxgI.jpg"
  },
  {
    "title": "A Series of Unfortunate Events",
    "year": "2017–2019",
    "poster": "https://image.tmdb.org/t/p/w500/qg7WXAatXyQq6zO3SnWnRJEayeZ.jpg"
  },
  {
    "title": "The Twilight Zone",
    "year": "1959–1964",
    "poster": "https://image.tmdb.org/t/p/w500/7uY4pCOxbEdv4M8jTE4uMPVoSIW.jpg"
  },
  {
    "title": "Mucize Doktor",
    "year": "2019–2021",
    "poster": "https://image.tmdb.org/t/p/w500/29ifz2K8kqZD6eb2sTKBP9Hlc3N.jpg"
  },
  {
    "title": "Black Bird",
    "year": "2022",
    "poster": "https://image.tmdb.org/t/p/w500/qu312pwM61NPTr7nexvovCClDNP.jpg"
  },
  {
    "title": "Misfits",
    "year": "2009–2013",
    "poster": "https://image.tmdb.org/t/p/w500/pkGPHO7WxViedkOm6Xy1aWSS36l.jpg"
  },
  {
    "title": "Russian Doll",
    "year": "2019–2022",
    "poster": "https://image.tmdb.org/t/p/w500/1ju4vQ1EwlIkQxEgWiYmxOs3iBG.jpg"
  },
  {
    "title": "The Shannara Chronicles",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/yzoaoBSMww5D22Kfrd2LEJumIzl.jpg"
  },
  {
    "title": "Phineas and Ferb",
    "year": "2007–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/g6TidT7be954rrzPPBTIXkSmfXj.jpg"
  },
  {
    "title": "Resident Alien",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/5van3ktOTqWr5lcixh5aR8NlqqW.jpg"
  },
  {
    "title": "Fairy Tail",
    "year": "2009–2019",
    "poster": "https://image.tmdb.org/t/p/w500/AsfCVSHnFnUnbepLucvIB1N30Il.jpg"
  },
  {
    "title": "Marvel's Ultimate Spider-Man",
    "year": "2012–2017",
    "poster": "https://image.tmdb.org/t/p/w500/jK3pc8XOQT8UgdvSjMFk8xLQOxE.jpg"
  },
  {
    "title": "Yu-Gi-Oh! Duel Monsters",
    "year": "2000–2004",
    "poster": "https://image.tmdb.org/t/p/w500/mM6c5ISlyKWtie2hGiZWo6hmlhU.jpg"
  },
  {
    "title": "Redo of Healer",
    "year": "2021",
    "poster": "https://image.tmdb.org/t/p/w500/9T7TT0w92RbeRP5QSnNq81HHxde.jpg"
  },
  {
    "title": "What We Do in the Shadows",
    "year": "2019–2024",
    "poster": "https://image.tmdb.org/t/p/w500/wa3ZQE9kLnqwN3vQ0NNjg1NPsCa.jpg"
  },
  {
    "title": "Sailor Moon",
    "year": "1992–1997",
    "poster": "https://image.tmdb.org/t/p/w500/wz45BNOMLRZdxXm94P8NGevKubm.jpg"
  },
  {
    "title": "100 días para enamorarnos",
    "year": "2020–2021",
    "poster": "https://image.tmdb.org/t/p/w500/r13t1ohRQAlZpsjxgTKY7ypkWPc.jpg"
  },
  {
    "title": "The Terror",
    "year": "2018–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/fUVn5mScv83FfwrRUUR694yA7bd.jpg"
  },
  {
    "title": "Broadchurch",
    "year": "2013–2017",
    "poster": "https://image.tmdb.org/t/p/w500/2NhBFUTg5KVBmGwafxtLwVdsqrr.jpg"
  },
  {
    "title": "Maniac",
    "year": "2018",
    "poster": "https://image.tmdb.org/t/p/w500/kCNl4QPstAqChFD0NnLpbDFG8ul.jpg"
  },
  {
    "title": "For All Mankind",
    "year": "2019–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/JP3DItWMbrrLiKR5AYUfpsNf2b.jpg"
  },
  {
    "title": "Star Wars Rebels",
    "year": "2014–2018",
    "poster": "https://image.tmdb.org/t/p/w500/eLrScs6Bs26JMcS8hiZhf7YRROr.jpg"
  },
  {
    "title": "Psych",
    "year": "2006–2014",
    "poster": "https://image.tmdb.org/t/p/w500/fDI15gTVbtW5Sbv5QenqecRxWKJ.jpg"
  },
  {
    "title": "The Grim Adventures of Billy and Mandy",
    "year": "2001–2007",
    "poster": "https://image.tmdb.org/t/p/w500/kbFIKt6NGppNr7OOn288A8gBObs.jpg"
  },
  {
    "title": "Terminator: The Sarah Connor Chronicles",
    "year": "2008–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/vkMRWrVrNeX42ruRV5Q15mlBACG.jpg"
  },
  {
    "title": "Agatha All Along",
    "year": "2024",
    "poster": "https://image.tmdb.org/t/p/w500/mGsxKwXUjojitRv2E9qMTbxbBRd.jpg"
  },
  {
    "title": "Weeds",
    "year": "2005–2012",
    "poster": "https://image.tmdb.org/t/p/w500/gKUsBTa5b0GY7U4iWBseeBalfjO.jpg"
  },
  {
    "title": "The Powerpuff Girls",
    "year": "1998–2005",
    "poster": "https://image.tmdb.org/t/p/w500/468mmhMd21pY4Yx0S0woqeEcxtL.jpg"
  },
  {
    "title": "Angel",
    "year": "1999–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/y5COQHIM38bQETJK2m76jHItWwm.jpg"
  },
  {
    "title": "Little House on the Prairie",
    "year": "1974–1983",
    "poster": "https://image.tmdb.org/t/p/w500/eVpvlqKZfEVsBOttNFTUyfPoA6K.jpg"
  },
  {
    "title": "BEEF",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/25ih0Xq2zWbxhhKxwhvswKYQyEr.jpg"
  },
  {
    "title": "Yellowjackets",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/xRnGrn7Z7SC0KIBodocoU1QgDZF.jpg"
  },
  {
    "title": "Kamisama Kiss",
    "year": "2012–2015",
    "poster": "https://image.tmdb.org/t/p/w500/cRama3S1CMYXFu1LmUkMMPoC99O.jpg"
  },
  {
    "title": "Blue Bloods",
    "year": "2010–2024",
    "poster": "https://image.tmdb.org/t/p/w500/q1WlrxnCvNhBjJ4N7V0JQXjnIBN.jpg"
  },
  {
    "title": "Hellbound",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/5NYdSAnDVIXePrSG2dznHdiibMk.jpg"
  },
  {
    "title": "The Flintstones",
    "year": "1960–1966",
    "poster": "https://image.tmdb.org/t/p/w500/30P6ifagQ3fguTsI33KMmDLTAx6.jpg"
  },
  {
    "title": "Vinland Saga",
    "year": "2019–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/vUHlpA5c1NXkds59reY3HMb4Abs.jpg"
  },
  {
    "title": "1883",
    "year": "2021–2022",
    "poster": "https://image.tmdb.org/t/p/w500/waLbm384SQDwLTCn6ttPqQS5kfV.jpg"
  },
  {
    "title": "Star Trek: Deep Space Nine",
    "year": "1993–1999",
    "poster": "https://image.tmdb.org/t/p/w500/vE6138ykaEXQkCSEHyuBIgfGlUZ.jpg"
  },
  {
    "title": "Inside Job",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/qwJUDMJ4i3KBYjeUFK9Js87iJEa.jpg"
  },
  {
    "title": "Acapulco Shore",
    "year": "2014–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/81FW5jz4smr75wNYj1loJftzFrq.jpg"
  },
  {
    "title": "High School of the Dead",
    "year": "2010",
    "poster": "https://image.tmdb.org/t/p/w500/jaGpsfRddhzkZIlqxDnDqT3XBhr.jpg"
  },
  {
    "title": "Tales from the Crypt",
    "year": "1989–1996",
    "poster": "https://image.tmdb.org/t/p/w500/owrglhGpuB5eJVT3nED6U40NzmM.jpg"
  },
  {
    "title": "Ned's Declassified School Survival Guide",
    "year": "2004–2007",
    "poster": "https://image.tmdb.org/t/p/w500/3kUXoJFmj6vOdmqMMoiYZj0eY2F.jpg"
  },
  {
    "title": "The Fall",
    "year": "2013–2016",
    "poster": "https://image.tmdb.org/t/p/w500/fm7nN3nUADA7JGgnFNlOWpXn1tf.jpg"
  },
  {
    "title": "V",
    "year": "1983",
    "poster": "https://image.tmdb.org/t/p/w500/fV5U1eWPC8Dvxq0BUIoF7cvBK1o.jpg"
  },
  {
    "title": "Violet Evergarden",
    "year": "2018",
    "poster": "https://image.tmdb.org/t/p/w500/61EwFPqc0r1uJo6la49J55F8bQ8.jpg"
  },
  {
    "title": "The Last Man on Earth",
    "year": "2015–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/vONS5oceFmM93hsS3q3mvQ1iBC3.jpg"
  },
  {
    "title": "The Marvelous Mrs. Maisel",
    "year": "2017–2023",
    "poster": "https://image.tmdb.org/t/p/w500/zS7fQiOZiKCVH2vlYSiIsFWW8hh.jpg"
  },
  {
    "title": "Marvel's Runaways",
    "year": "2017–2019",
    "poster": "https://image.tmdb.org/t/p/w500/hnHEhbzh0F7kN3Ah1lzRjtQuW16.jpg"
  },
  {
    "title": "Steins;Gate",
    "year": "2011",
    "poster": "https://image.tmdb.org/t/p/w500/ce0kVdxBGdXBrWmQgawkHwdqFX9.jpg"
  },
  {
    "title": "Hey Arnold!",
    "year": "1996–2004",
    "poster": "https://image.tmdb.org/t/p/w500/c1Yv042okfvMdT1Ulwlat9Tj70B.jpg"
  },
  {
    "title": "American Horror Stories",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/8b9FGJ9WhpkeGFOHYgKjPT5AXS6.jpg"
  },
  {
    "title": "Cursed",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/wrLC5kx0nEq9U0MyJD7dnOT6m5F.jpg"
  },
  {
    "title": "Uzaki-chan Wants to Hang Out!",
    "year": "2020–2022",
    "poster": "https://image.tmdb.org/t/p/w500/kg7PD9mqKUlJulKTeHzVwHAKqqR.jpg"
  },
  {
    "title": "Dickinson",
    "year": "2019–2021",
    "poster": "https://image.tmdb.org/t/p/w500/dDdcAfHBZ6Aalv53iR6o35CSLWA.jpg"
  },
  {
    "title": "Deadwood",
    "year": "2004–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/fWwxYAuqY4Na7fKI3Qq2nFWCwG8.jpg"
  },
  {
    "title": "Rent-a-Girlfriend",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/6ZpDPUNtVw6UdJoStvVlRZ62yAi.jpg"
  },
  {
    "title": "Final Space",
    "year": "2018–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/cf4chvwB40cEpsagSrRaEIqBFoG.jpg"
  },
  {
    "title": "Z Nation",
    "year": "2014–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/gXfeDMkEcHoYBvtkbU11g3F81b.jpg"
  },
  {
    "title": "Slam Dunk",
    "year": "1993–1996",
    "poster": "https://image.tmdb.org/t/p/w500/nmmOKeydeeO4TKucpvyMA2o6gdD.jpg"
  },
  {
    "title": "MacGyver",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/2zAogx9dmSAu2HYxbWzHe4ZaNY5.jpg"
  },
  {
    "title": "She Was Pretty",
    "year": "2015",
    "poster": "https://image.tmdb.org/t/p/w500/sIsUgKIFYAASpvvV5Aaip2xa7Zd.jpg"
  },
  {
    "title": "Star Trek: Enterprise",
    "year": "2001–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/tsbBTABtNgu0ycsFpnIhiQ5woOM.jpg"
  },
  {
    "title": "Extraordinary Attorney Woo",
    "year": "2022",
    "poster": "https://image.tmdb.org/t/p/w500/zuNOQVI4rEaqwknrfQUVKtlKE2C.jpg"
  },
  {
    "title": "Maid",
    "year": "2021",
    "poster": "https://image.tmdb.org/t/p/w500/4brWcSXdH31BZUTtRTHj2BYFe6M.jpg"
  },
  {
    "title": "That Time I Got Reincarnated as a Slime",
    "year": "2018–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/pzujcdPAoH361NObVrtbA7zACE7.jpg"
  },
  {
    "title": "W",
    "year": "2016",
    "poster": "https://image.tmdb.org/t/p/w500/rBuCoS0VB9M6zkEUCvnVrfeF0J.jpg"
  },
  {
    "title": "Black Lightning",
    "year": "2018–2021",
    "poster": "https://image.tmdb.org/t/p/w500/h1xbvvO6oqchfLe6xh0yLNnQxeM.jpg"
  },
  {
    "title": "The Chosen",
    "year": "2019–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/dqVUFuNrMFWt7uGNWlpo91VKYOI.jpg"
  },
  {
    "title": "Limitless",
    "year": "2015–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/l5BERaKn3ozRTLhoylIiNwMDvax.jpg"
  },
  {
    "title": "How to Sell Drugs Online (Fast)",
    "year": "2019–2025",
    "poster": "https://image.tmdb.org/t/p/w500/xg7U76h1DNtwa0eBOIbFdiM80DR.jpg"
  },
  {
    "title": "Glee",
    "year": "2009–2015",
    "poster": "https://image.tmdb.org/t/p/w500/9WlKHB3lmqMmxO1SfL6MVOJxKPP.jpg"
  },
  {
    "title": "Curb Your Enthusiasm",
    "year": "2000–2024",
    "poster": "https://image.tmdb.org/t/p/w500/pjRRB1NCFJzCb0euvpia4rKDov1.jpg"
  },
  {
    "title": "Planet Earth II",
    "year": "2016",
    "poster": "https://image.tmdb.org/t/p/w500/5maYKYzWpE68ycxGh1luu4P2LOS.jpg"
  },
  {
    "title": "Crash Landing on You",
    "year": "2019–2020",
    "poster": "https://image.tmdb.org/t/p/w500/fgBNLPr6mC8pxuR79ENAJY4nBmj.jpg"
  },
  {
    "title": "Slow Horses",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/w2jauz2PeSjFQifDObI3qDen4f7.jpg"
  },
  {
    "title": "Continuum",
    "year": "2012–2015",
    "poster": "https://image.tmdb.org/t/p/w500/ckeF0gNdw9mvjiNEebNbeoKZcwt.jpg"
  },
  {
    "title": "The O.C.",
    "year": "2003–2007",
    "poster": "https://image.tmdb.org/t/p/w500/xDc6BMGDaeyalpSZ9KKk7RCBCz5.jpg"
  },
  {
    "title": "Weightlifting Fairy Kim Bok-joo",
    "year": "2016–2017",
    "poster": "https://image.tmdb.org/t/p/w500/iLF6Jz6nL8uD8jKo6EvQ3XutDcR.jpg"
  },
  {
    "title": "Girl from Nowhere",
    "year": "2018–2021",
    "poster": "https://image.tmdb.org/t/p/w500/9hDXqzN5l4lBmEtb8IstXr91k8z.jpg"
  },
  {
    "title": "ER",
    "year": "1994–2009",
    "poster": "https://image.tmdb.org/t/p/w500/fuS63AoFTkprf8PFeL1f8z68zJr.jpg"
  },
  {
    "title": "The Midnight Gospel",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/me3kxfiFRkdto6SmDQv0nczjfmP.jpg"
  },
  {
    "title": "Servant",
    "year": "2019–2023",
    "poster": "https://image.tmdb.org/t/p/w500/plsSSobmPSSz4hm8vYMXeIVkJJP.jpg"
  },
  {
    "title": "The Glory",
    "year": "2022–2023",
    "poster": "https://image.tmdb.org/t/p/w500/uUM4LVlPgIrww07OoEKrGWlS1Ej.jpg"
  },
  {
    "title": "Frieren: Beyond Journey's End",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/dqZENchTd7lp5zht7BdlqM7RBhD.jpg"
  },
  {
    "title": "The Pitt",
    "year": "2025–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/kvFSpESyBZMjaeOJDx7RS3P1jey.jpg"
  },
  {
    "title": "My Dress-Up Darling",
    "year": "2022–2025",
    "poster": "https://image.tmdb.org/t/p/w500/j5tZc3bbdxLQic4TmFATwSkTIPa.jpg"
  },
  {
    "title": "The Bible",
    "year": "2013",
    "poster": "https://image.tmdb.org/t/p/w500/cqGupIDrTHosdGTm5N0V4qMrZyf.jpg"
  },
  {
    "title": "Digimon: Digital Monsters",
    "year": "1999–2001",
    "poster": "https://image.tmdb.org/t/p/w500/vFJAiBNUlzEVa54mXgHGumr1z1s.jpg"
  },
  {
    "title": "Wayward Pines",
    "year": "2015–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/mK9MowBCPEn7RbsDXqN0MxyPc4.jpg"
  },
  {
    "title": "Van Helsing",
    "year": "2016–2021",
    "poster": "https://image.tmdb.org/t/p/w500/r8ODGmfNbZQlNhiJl2xQENE2jsk.jpg"
  },
  {
    "title": "FBI",
    "year": "2018–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/zfKS4WL0OZ9udpNoSYZw91VB3aH.jpg"
  },
  {
    "title": "The Morning Show",
    "year": "2019–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/y9x2R87yt2U616736NJrP0d56dt.jpg"
  },
  {
    "title": "Dan Da Dan",
    "year": "2024–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/6qfZAOEUFIrbUH3JvePclx1nXzz.jpg"
  },
  {
    "title": "Dirk Gently's Holistic Detective Agency",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/q8oMpXPEAUJJ0KztsRs5K51T2lo.jpg"
  },
  {
    "title": "The Order",
    "year": "2019–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/yMPjmuSd5Fac8YMNOwofGALQWjR.jpg"
  },
  {
    "title": "War of the Worlds",
    "year": "2019–2022",
    "poster": "https://image.tmdb.org/t/p/w500/yThmbQkxSzW4HHdAaoj8RYHFH3i.jpg"
  },
  {
    "title": "Banana Fish",
    "year": "2018",
    "poster": "https://image.tmdb.org/t/p/w500/d2TW5Rtd0uCasHlQygsDfWCROl2.jpg"
  },
  {
    "title": "The Spectacular Spider-Man",
    "year": "2008–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/dCNxOhXT7c4lqYuRpdM3m8s9XDp.jpg"
  },
  {
    "title": "Frasier",
    "year": "1993–2004",
    "poster": "https://image.tmdb.org/t/p/w500/gYAb6GCVEFsU9hzMCG5rxaxoIv3.jpg"
  },
  {
    "title": "Keeping Up with the Kardashians",
    "year": "2007–2021",
    "poster": "https://image.tmdb.org/t/p/w500/nddXOC8wYpIDv7giLzjjqIg8WDA.jpg"
  },
  {
    "title": "Samurai Jack",
    "year": "2001–2017",
    "poster": "https://image.tmdb.org/t/p/w500/ddZ7Q2WZ0xAHkVXYvcEgNGFgVkw.jpg"
  },
  {
    "title": "Code Geass: Lelouch of the Rebellion",
    "year": "2006–2008",
    "poster": "https://image.tmdb.org/t/p/w500/x316WCogkeIwNY4JR8zTCHbI2nQ.jpg"
  },
  {
    "title": "Shadow Hunter",
    "year": "2005–2006",
    "poster": "https://image.tmdb.org/t/p/w500/hOTaiR2qRDZtHgR2Kwz7RcAVqA6.jpg"
  },
  {
    "title": "Freaks and Geeks",
    "year": "1999–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/tPqV63zcW6ZV0Hd48DMGb5UzQIG.jpg"
  },
  {
    "title": "Slugterra",
    "year": "2012–2016",
    "poster": "https://image.tmdb.org/t/p/w500/hbAHSGKr0aJStev8w5ebWWZboh1.jpg"
  },
  {
    "title": "The King: Eternal Monarch",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/7SLlbkzOJb8v9wXVYIcqozx2hxe.jpg"
  },
  {
    "title": "The Walking Dead: Daryl Dixon",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/sP5QdW9FN18XWcA4ROz3MPAQBTx.jpg"
  },
  {
    "title": "RESIDENT EVIL: Infinite Darkness",
    "year": "2021",
    "poster": "https://image.tmdb.org/t/p/w500/wWwTjKER5a8LRUGHrw86VU0gUy1.jpg"
  },
  {
    "title": "Baby",
    "year": "2018–2020",
    "poster": "https://image.tmdb.org/t/p/w500/xswkOJni9tJYda2yN1QQtgBVaVJ.jpg"
  },
  {
    "title": "The House of Flowers",
    "year": "2018–2020",
    "poster": "https://image.tmdb.org/t/p/w500/zAIp0cT4Hy6faiPYcOPl1VsuGR.jpg"
  },
  {
    "title": "The Acolyte",
    "year": "2024–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/mztdt3y6GBsJR69zHtszFezTCLT.jpg"
  },
  {
    "title": "Dexter's Laboratory",
    "year": "1996–2003",
    "poster": "https://image.tmdb.org/t/p/w500/inJJn8lUPWdvdy2h259UnoHWVqC.jpg"
  },
  {
    "title": "Dynasty",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/rVQ35erLIoV8hyh7lIKAMiChmOO.jpg"
  },
  {
    "title": "Jane the Virgin",
    "year": "2014–2019",
    "poster": "https://image.tmdb.org/t/p/w500/DRRHgvsNEfBloMgIP8bBw4zi4E.jpg"
  },
  {
    "title": "Terra Nova",
    "year": "2011–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/y8dFONeUSXhMHiFecqFoaGI7S6y.jpg"
  },
  {
    "title": "Atrévete a Soñar",
    "year": "2009–2010",
    "poster": "https://image.tmdb.org/t/p/w500/5l9c4cjcauBpogEqaVbsITHA47K.jpg"
  },
  {
    "title": "Hanna",
    "year": "2019–2021",
    "poster": "https://image.tmdb.org/t/p/w500/iYUtjx1EN4SVTgxd2TB4cZTGSQb.jpg"
  },
  {
    "title": "Top Gear",
    "year": "2002–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/aqM6QnuhSXzjHlKbXyKUqxaGiWu.jpg"
  },
  {
    "title": "Ben 10: Ultimate Alien",
    "year": "2010–2012",
    "poster": "https://image.tmdb.org/t/p/w500/n4KwrlUKO9S4GvOdZzmnz4zOxx7.jpg"
  },
  {
    "title": "The Killing",
    "year": "2011–2014",
    "poster": "https://image.tmdb.org/t/p/w500/3yiwAUNGn1rsPSVmFgVwPVJFtYf.jpg"
  },
  {
    "title": "The Boarding School: Las Cumbres",
    "year": "2021–2023",
    "poster": "https://image.tmdb.org/t/p/w500/9KvN6eNNY9kbiWlZ8IS175xj4Ym.jpg"
  },
  {
    "title": "The Shield",
    "year": "2002–2008",
    "poster": "https://image.tmdb.org/t/p/w500/AfdZXqqlFsPUEfi6kWWWthxw7Nz.jpg"
  },
  {
    "title": "Travelers",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/aUVeyeyTrQrSFuUkqLCT8FtV7pp.jpg"
  },
  {
    "title": "A Discovery of Witches",
    "year": "2018–2022",
    "poster": "https://image.tmdb.org/t/p/w500/l7MUpFAE8UEWYnO2Uv7SFtdZ2OJ.jpg"
  },
  {
    "title": "Justice League Unlimited",
    "year": "2004–2006",
    "poster": "https://image.tmdb.org/t/p/w500/vRRvCUREeqqnp3hHdqep83eQjdP.jpg"
  },
  {
    "title": "Reign",
    "year": "2013–2017",
    "poster": "https://image.tmdb.org/t/p/w500/epNfFs0gPyrpekecpzyX0XTkZgI.jpg"
  },
  {
    "title": "The Undoing",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/3tDbJxobPN3EI2bBebL6zmusmw5.jpg"
  },
  {
    "title": "Jackie Chan Adventures",
    "year": "2000–2005",
    "poster": "https://image.tmdb.org/t/p/w500/by2GTFpd2BQ5uJxWPlfcmfrNrfB.jpg"
  },
  {
    "title": "My Holo Love",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/nLbKNyUKq6WMMoPuL712m43MVhc.jpg"
  },
  {
    "title": "The Grand Tour",
    "year": "2016–2024",
    "poster": "https://image.tmdb.org/t/p/w500/3Pcqu6QliBWJ8vsOVClVLddPnZw.jpg"
  },
  {
    "title": "The Gentlemen",
    "year": "2024–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/tw3tzfXaSpmUZIB8ZNqNEGzMBCy.jpg"
  },
  {
    "title": "Dark Matter",
    "year": "2015–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/oWYOFBvIMkW64n51uD4mdje6k2u.jpg"
  },
  {
    "title": "The Odyssey",
    "year": "1997",
    "poster": "https://image.tmdb.org/t/p/w500/wCiQ7XySqnz9X1REtDNZRGLfhpe.jpg"
  },
  {
    "title": "Justified",
    "year": "2010–2015",
    "poster": "https://image.tmdb.org/t/p/w500/ie1quhMk09lDtvtAyQAHTu09R9Z.jpg"
  },
  {
    "title": "Teach You a Lesson",
    "year": "2026",
    "poster": "https://image.tmdb.org/t/p/w500/fMECSPrTmRClSViMsXFYmiYIcWP.jpg"
  },
  {
    "title": "Miss Kobayashi's Dragon Maid",
    "year": "2017–2021",
    "poster": "https://image.tmdb.org/t/p/w500/aDJC9SBNqUFoGQ6uuxs0EfBsqct.jpg"
  },
  {
    "title": "Kaguya-sama: Love Is War",
    "year": "2019–2022",
    "poster": "https://image.tmdb.org/t/p/w500/5khbC6AuNgnvnoDbjIMKCOhEtIc.jpg"
  },
  {
    "title": "Kung Fu Panda: The Paws of Destiny",
    "year": "2018–2019",
    "poster": "https://image.tmdb.org/t/p/w500/x4yvmIVuXxYKfTlgRtSJnGC1Izs.jpg"
  },
  {
    "title": "Space Force",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/zgu3p4NvisS8CI68cUfBKbvAvu8.jpg"
  },
  {
    "title": "X-Men '97",
    "year": "2024–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/2HKBc5UiFw8JrruHq8S1Y7TnlW0.jpg"
  },
  {
    "title": "The Misfit of Demon King Academy",
    "year": "2020–2024",
    "poster": "https://image.tmdb.org/t/p/w500/xBNR7V4s5b0qQfRCiyEvIC5PS6v.jpg"
  },
  {
    "title": "Atlanta",
    "year": "2016–2022",
    "poster": "https://image.tmdb.org/t/p/w500/8HZyGMnPLVVb00rmrh6A2SbK9NX.jpg"
  },
  {
    "title": "The Fall of the House of Usher",
    "year": "2023",
    "poster": "https://image.tmdb.org/t/p/w500/2rl04pRCaGfz91lwfWdDQmOiGJp.jpg"
  },
  {
    "title": "Oz",
    "year": "1997–2003",
    "poster": "https://image.tmdb.org/t/p/w500/oTQ9PUnCgf9CimYeWuDGp8iaT07.jpg"
  },
  {
    "title": "The Adventures of Jimmy Neutron: Boy Genius",
    "year": "2002–2006",
    "poster": "https://image.tmdb.org/t/p/w500/dxUNSVBU03LuVSZ3rriui6a7Xvk.jpg"
  },
  {
    "title": "The L Word",
    "year": "2004–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/nuBhtv4P5nY9loJ6kXb1hsyc9EA.jpg"
  },
  {
    "title": "Mr. Pickles",
    "year": "2014–2019",
    "poster": "https://image.tmdb.org/t/p/w500/bSWmZnvXIOoqZ7eLderyInsouiF.jpg"
  },
  {
    "title": "Superstore",
    "year": "2015–2021",
    "poster": "https://image.tmdb.org/t/p/w500/2tpY5qIYwH85njvjI5BnH4VNA6p.jpg"
  },
  {
    "title": "Power Rangers",
    "year": "1993–2023",
    "poster": "https://image.tmdb.org/t/p/w500/qx3SJlAp2RK656TusqKx1qEqVMW.jpg"
  },
  {
    "title": "Devs",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/uv63iNWOh69bSJYJQZjiX6n8B3m.jpg"
  },
  {
    "title": "The Mist",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/iwDmsffJ5qYBxiGTPdwgIKTscKu.jpg"
  },
  {
    "title": "Ray Donovan",
    "year": "2013–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/cwJ6nLNvX62By0yoLYWFhRelPkF.jpg"
  },
  {
    "title": "Teenage Mutant Ninja Turtles",
    "year": "1987–1996",
    "poster": "https://image.tmdb.org/t/p/w500/AaihPizftZo5YCqzEgHMwkceaEo.jpg"
  },
  {
    "title": "Hijack",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/2C51clnxQdiqPDeqQlXcUx70hse.jpg"
  },
  {
    "title": "Mums Make Porn",
    "year": "2019",
    "poster": "https://image.tmdb.org/t/p/w500/pmdlcd07Yucete8YvEfZyDmzZrb.jpg"
  },
  {
    "title": "The Tudors",
    "year": "2007–2010",
    "poster": "https://image.tmdb.org/t/p/w500/7pdeNK1CUqj1yuG9VMDeynnq9xK.jpg"
  },
  {
    "title": "Rubi",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/sVh19iLGwTXp9fhIbzV33U9pmbh.jpg"
  },
  {
    "title": "Classroom of the Elite",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/yuHanbUUIv2UWRxxQFt9n8jtmOJ.jpg"
  },
  {
    "title": "Dracula",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/5SqUNnExnN7Cr8rzyTXJTWmEMHn.jpg"
  },
  {
    "title": "Revenge",
    "year": "2011–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/qx7XytRgg1F03NN5BoK8jx3Cyft.jpg"
  },
  {
    "title": "Santa Clarita Diet",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/5rBjNm2sRubaXKBnU904NInFi7P.jpg"
  },
  {
    "title": "Scooby-Doo, Where Are You!",
    "year": "1969–1978",
    "poster": "https://image.tmdb.org/t/p/w500/lTzUSCtXR77CmGmEHcaxpxu2b4h.jpg"
  },
  {
    "title": "Columbo",
    "year": "1971–2003",
    "poster": "https://image.tmdb.org/t/p/w500/2JCD8vab3fircOU8cM2HJCxfv4I.jpg"
  },
  {
    "title": "Berserk",
    "year": "1997–1998",
    "poster": "https://image.tmdb.org/t/p/w500/xctRBSZzvoHDHz38ZZUGxRYetvG.jpg"
  },
  {
    "title": "Unbelievable",
    "year": "2019",
    "poster": "https://image.tmdb.org/t/p/w500/jHOrNJNM03Lsjdw7nsw7TlqBOhd.jpg"
  },
  {
    "title": "Food Wars! Shokugeki no Soma",
    "year": "2015–2020",
    "poster": "https://image.tmdb.org/t/p/w500/eAQHqcJXP0FBzXvQkIV5g5ZueZb.jpg"
  },
  {
    "title": "Fawlty Towers",
    "year": "1975–1979",
    "poster": "https://image.tmdb.org/t/p/w500/tvTYIjujN87dcKAmSLqcvAahykH.jpg"
  },
  {
    "title": "Off Campus",
    "year": "2026–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/tcPc5ZMBO4y2BtCJMe3o2nwZb2B.jpg"
  },
  {
    "title": "30 Rock",
    "year": "2006–2013",
    "poster": "https://image.tmdb.org/t/p/w500/eYYQWACx7ttUzRwTNYuo6zveqpE.jpg"
  },
  {
    "title": "Mayans M.C.",
    "year": "2018–2023",
    "poster": "https://image.tmdb.org/t/p/w500/510A0upV9WRAynEgs1E2B3eBxi5.jpg"
  },
  {
    "title": "Beverly Hills, 90210",
    "year": "1990–2000",
    "poster": "https://image.tmdb.org/t/p/w500/b7BYfkhu653D894krwGO1ysIKTf.jpg"
  },
  {
    "title": "Merlí. Sapere Aude",
    "year": "2019–2021",
    "poster": "https://image.tmdb.org/t/p/w500/kMHA8Ya0dLjif2gnhdWEZ0TprIP.jpg"
  },
  {
    "title": "She-Ra and the Princesses of Power",
    "year": "2018–2020",
    "poster": "https://image.tmdb.org/t/p/w500/y6YLtlnV5FGh3Mhs5SUc80IQSV5.jpg"
  },
  {
    "title": "I Dream of Jeannie",
    "year": "1965–1970",
    "poster": "https://image.tmdb.org/t/p/w500/ljlyB3C3uU8Hd1krfEsYn2BVyaj.jpg"
  },
  {
    "title": "Into the Badlands",
    "year": "2015–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/jtceMKMxHSriLFUGAUfqHsW7uCo.jpg"
  },
  {
    "title": "Captain Tsubasa",
    "year": "1983–1986",
    "poster": "https://image.tmdb.org/t/p/w500/qHVVaYYlD509eh1V4LYE0M927uw.jpg"
  },
  {
    "title": "Star Trek: Strange New Worlds",
    "year": "2022–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/97TTJuqiSMfU0DuXx1B4NG5QNP7.jpg"
  },
  {
    "title": "1923",
    "year": "2022–2025",
    "poster": "https://image.tmdb.org/t/p/w500/zgZRJZvZn5cpsWAB0zMUdad3iZd.jpg"
  },
  {
    "title": "Last Week Tonight with John Oliver",
    "year": "2014–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/fuuEjEr69uvRtGaQw70JfvdrUwb.jpg"
  },
  {
    "title": "BLUE EYE SAMURAI",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/fXm3JT4WLQVnwukdvghtAblc1wc.jpg"
  },
  {
    "title": "Spider-Noir",
    "year": "2026–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/oD8WSVqz84ZRfelkr7JPeJwR9Iv.jpg"
  },
  {
    "title": "I Am Not a Robot",
    "year": "2017–2018",
    "poster": "https://image.tmdb.org/t/p/w500/2l1KTliFU7SjNT1OpTojbvjEnZe.jpg"
  },
  {
    "title": "Descendants of the Sun",
    "year": "2016",
    "poster": "https://image.tmdb.org/t/p/w500/xxGomfml0x9iyPBS4StBjbRRu65.jpg"
  },
  {
    "title": "Monster",
    "year": "2004–2005",
    "poster": "https://image.tmdb.org/t/p/w500/n5XNKXnoXpoXyfiCtXHOf8q8PFM.jpg"
  },
  {
    "title": "DON'T TOY WITH ME, MISS NAGATORO",
    "year": "2021–2023",
    "poster": "https://image.tmdb.org/t/p/w500/ogXmggjfiDHBOBwA3JyuEzCr814.jpg"
  },
  {
    "title": "Percy Jackson and the Olympians",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/bd5ZIqiz1PRiLC7FLexzVBf8qu1.jpg"
  },
  {
    "title": "MobLand",
    "year": "2025–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/abeH7n5pcuQcwYcTxG6DTZvXLP1.jpg"
  },
  {
    "title": "Rurouni Kenshin",
    "year": "1996–1998",
    "poster": "https://image.tmdb.org/t/p/w500/lQ4p6OF9KjagTfs8otZt0VTe3Al.jpg"
  },
  {
    "title": "My Love from the Star",
    "year": "2013–2014",
    "poster": "https://image.tmdb.org/t/p/w500/o5EYVYCVtDUdajP4rWfv6q0BTmm.jpg"
  },
  {
    "title": "Wynonna Earp",
    "year": "2016–2021",
    "poster": "https://image.tmdb.org/t/p/w500/qnIaDelA81dmFaXrhpz6M6dpGSD.jpg"
  },
  {
    "title": "Dragon Ball Z Kai",
    "year": "2009–2015",
    "poster": "https://image.tmdb.org/t/p/w500/ojsPI8fNwcecKLhVC4rB4ZZhFMc.jpg"
  },
  {
    "title": "Timeless",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/wFaS9kROwztTWNxIKBbOLwIgApV.jpg"
  },
  {
    "title": "PAW Patrol",
    "year": "2013–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/8HXkgUBO5OF8ZK9XbY69RM4S5rv.jpg"
  },
  {
    "title": "Stargate Universe",
    "year": "2009–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/dHOaOZGUhnoRXeK9mhYeSRPh59H.jpg"
  },
  {
    "title": "The Witcher: Blood Origin",
    "year": "2022",
    "poster": "https://image.tmdb.org/t/p/w500/vpfJK9F0UJNcAIIeC42oJyKMnZQ.jpg"
  },
  {
    "title": "Halo 4: Forward Unto Dawn",
    "year": "2012",
    "poster": "https://image.tmdb.org/t/p/w500/4SkLtiW3TCsd2reJbuXSBemSV3X.jpg"
  },
  {
    "title": "Alchemy of Souls",
    "year": "2022–2023",
    "poster": "https://image.tmdb.org/t/p/w500/gvOZN1NlAoL8iz9ghpES1zWA3w3.jpg"
  },
  {
    "title": "Ed, Edd n Eddy",
    "year": "1999–2008",
    "poster": "https://image.tmdb.org/t/p/w500/nfKenwmfmdtoXGhaYiDIftrBchw.jpg"
  },
  {
    "title": "The Watcher",
    "year": "2022",
    "poster": "https://image.tmdb.org/t/p/w500/6RrseODZo2e66XOzC1XMzMuecnf.jpg"
  },
  {
    "title": "Una familia de diez",
    "year": "2007–2025",
    "poster": "https://image.tmdb.org/t/p/w500/ds2t2T4dFGiCFo2PeP4hlwt9NRD.jpg"
  },
  {
    "title": "Ballers",
    "year": "2015–2019",
    "poster": "https://image.tmdb.org/t/p/w500/WyIazPyjmcFMC42nWEpI0jr56x.jpg"
  },
  {
    "title": "The Magnificent Century",
    "year": "2011–2014",
    "poster": "https://image.tmdb.org/t/p/w500/UDvmQWnmIr9U6ZRB1k9ULXBow3.jpg"
  },
  {
    "title": "Lethal Weapon",
    "year": "2016–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/grGOtTZ0OfNQoWnNtdJOiY1LB8e.jpg"
  },
  {
    "title": "Snowfall",
    "year": "2017–2023",
    "poster": "https://image.tmdb.org/t/p/w500/y7ntzl7msiaS6o7dvDbNG7XFYcR.jpg"
  },
  {
    "title": "Cardcaptor Sakura",
    "year": "1998–2018",
    "poster": "https://image.tmdb.org/t/p/w500/dj0uI34MOkZMTE233tfRebs0YYx.jpg"
  },
  {
    "title": "Samurai Champloo",
    "year": "2004–2005",
    "poster": "https://image.tmdb.org/t/p/w500/lYpHeSm7BcUxAbBx1ucuEH7oGAe.jpg"
  },
  {
    "title": "Kaiju No. 8",
    "year": "2024–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/83yDUQVpdhv8ePy3nbTRzFaKYuQ.jpg"
  },
  {
    "title": "given",
    "year": "2019",
    "poster": "https://image.tmdb.org/t/p/w500/gO4ntuWf5hTUNA76onzA62GVoBf.jpg"
  },
  {
    "title": "Lovecraft Country",
    "year": "2020–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/fz7bdjxPColvEWCGr5Kiclzc86d.jpg"
  },
  {
    "title": "High School Musical: The Musical: The Series",
    "year": "2019–2023",
    "poster": "https://image.tmdb.org/t/p/w500/2KmbFkZD42I8Q7IZy4WxmZm9W6O.jpg"
  },
  {
    "title": "xxxHOLiC",
    "year": "2006–2008",
    "poster": "https://image.tmdb.org/t/p/w500/5yY74hwLcG5rQSe6cEUW3HjO3J9.jpg"
  },
  {
    "title": "Quantum Leap",
    "year": "1989–1993",
    "poster": "https://image.tmdb.org/t/p/w500/ujIGP3e3V6kDQHRhjNYtUE3fHJi.jpg"
  },
  {
    "title": "Jupiter's Legacy",
    "year": "2021–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
  },
  {
    "title": "Bloodhounds",
    "year": "2023–2026",
    "poster": "https://image.tmdb.org/t/p/w500/uSQzD7TXsL96J5ggDrJFdUs8uXU.jpg"
  },
  {
    "title": "Business Proposal",
    "year": "2022",
    "poster": "https://image.tmdb.org/t/p/w500/iLh7L8ZuvgdxFaM9sImyv2iKYLe.jpg"
  },
  {
    "title": "The Walking Dead: Dead City",
    "year": "2023–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/wq3vuQzQgbS83zX3malAFWMsSwX.jpg"
  },
  {
    "title": "Marvel's Inhumans",
    "year": "2017–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/zKfGip55oJ9tdzhyd9ayGyFFhuo.jpg"
  },
  {
    "title": "Ninjago: Masters of Spinjitzu",
    "year": "2012–2022",
    "poster": "https://image.tmdb.org/t/p/w500/wz6ZqlyndVpdRayZi1gbYHWcqFi.jpg"
  },
  {
    "title": "Plunderer",
    "year": "2020",
    "poster": "https://image.tmdb.org/t/p/w500/A0XboGeodpGlj33QUtjPMMwrMkN.jpg"
  },
  {
    "title": "Codename: Kids Next Door",
    "year": "2002–2007",
    "poster": "https://image.tmdb.org/t/p/w500/9oTedS82oVnrjHp3BHIpHefuBCG.jpg"
  },
  {
    "title": "Scissor Seven",
    "year": "2018–2024",
    "poster": "https://image.tmdb.org/t/p/w500/mSLSrOndwNoompAARPHBaxF2E6E.jpg"
  },
  {
    "title": "The Avengers: Earth's Mightiest Heroes",
    "year": "2010–PRESENT",
    "poster": "https://image.tmdb.org/t/p/w500/r1JDhMrqCOZKh7lc0vQlRYQ46cE.jpg"
  },
  {
    "title": "Toilet-Bound Hanako-kun",
    "year": "2020–2025",
    "poster": "https://image.tmdb.org/t/p/w500/h1X1G8Q9Ba9Vy1YIgXHduenP8nv.jpg"
  },
  {
    "title": "I Am Not an Animal",
    "year": "2004",
    "poster": "https://image.tmdb.org/t/p/w500/zXhtWhYtlJVyyp5MdT7ggMJn5si.jpg"
  },
  {
    "title": "Animaniacs",
    "year": "1993–1998",
    "poster": "https://image.tmdb.org/t/p/w500/c1b2UtrhbMOdHKISB2ZvINo9eyc.jpg"
  }
];
