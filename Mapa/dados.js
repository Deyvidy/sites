var dados = [
    {id: 1, r :128, g: 34, b: 64, a: 255, nome: "Stockholm"},
    {id: 2, r: 0, g: 36, b: 128, a: 255, nome: "�sterg�tland"},
    {id: 3, r: 128, g: 38, b: 192, a: 255, nome: "Sm�land"},
    {id: 4, r: 0, g: 40, b: 255, a: 255, nome: "Bergslagen"},
    {id: 5, r: 128, g: 42, b: 0, a: 255, nome: "V�rmland"},
    {id: 6, r: 0, g: 44, b: 64, a: 255, nome: "Sk�ne"},
    {id: 7, r: 129, g: 46, b: 128, a: 255, nome: "V�sterg�tland"},
    {id: 8, r: 1, g: 48, b: 192, a: 255, nome: "Dalaskogen"},
    {id: 9, r: 129, g: 50, b: 255, a: 255, nome: "H�lsingland"},
    {id: 10, r: 1, g: 52, b: 0, a: 255, nome: "J�mtland"},
    {id: 11, r: 129, g: 54, b: 64, a: 255, nome: "V�sterbotten"},
    {id: 12, r: 1, g: 56, b: 128, a: 255, nome: "Sj�lland"},
    {id: 13, r: 129, g: 58, b: 192, a: 255, nome: "Slesvig"},
    {id: 14, r: 2, g: 60, b: 255, a: 255, nome: "Fyn"},
    {id: 15, r: 130, g: 62, b: 0, a: 255, nome: "Midtjylland"},
    {id: 16, r: 2, g: 64, b: 64, a: 255, nome: "Bohusl�n"},
    {id: 17, r: 130, g: 66, b: 128, a: 255, nome: "Akershus"},
    {id: 18, r: 2, g: 68, b: 192, a: 255, nome: "Lappland"},
    {id: 19, r: 130, g: 70, b: 255, a: 255, nome: "�sterbotten"},
    {id: 20, r: 2, g: 72, b: 0, a: 255, nome: "Tr�ndelag"},
    {id: 21, r: 131, g: 74, b: 64, a: 255, nome: "H�logaland"},
    {id: 22, r: 3, g: 76, b: 128, a: 255, nome: "Eidsiva"},
    {id: 23, r: 131, g: 78, b: 192, a: 255, nome: "Bergenshus"},
    {id: 24, r: 3, g: 80, b: 255, a: 255, nome: "Agder"},
    {id: 25, r: 131, g: 82, b: 0, a: 255, nome: "Gotland"},
    {id: 26, r: 3, g: 84, b: 64, a: 255, nome: "Halland"},
    {id: 27, r: 131, g: 86, b: 128, a: 255, nome : "Finland"},
    {id: 28, r: 4, g: 88, b: 192, a: 255, nome : "Nyland"},
    {id: 29, r: 132, g: 90, b: 255, a: 255, nome : "Tavastland"},
    {id: 30, r: 4, g: 92, b: 0, a: 255, nome : "Viborg"},
    {id: 31, r: 132, g: 94, b: 64, a: 255, nome : "Savolax"},
    {id: 32, r: 4, g: 96, b: 128, a: 255, nome : "Kexholm"},
    {id: 33, r: 132, g: 98, b: 192, a: 255, nome : "Neva"},
    {id: 34, r: 4, g: 100, b: 255, a: 255, nome : "Ingermanland"},
    {id: 35, r: 133, g: 102, b: 0, a: 255, nome : "�sel"},
    {id: 36, r: 5, g: 104, b: 64, a: 255, nome : "Estland"},
    {id: 37, r: 133, g: 106, b: 128, a: 255, nome : "Livland"},
    {id: 38, r: 5, g: 108, b: 19, a: 2552, nome : "Riga"},
    {id: 39, r: 133, g: 110, b: 255, a: 255, nome : "Kurland"},
    {id: 40, r: 5, g: 112, b: 0, a: 255, nome : "Memel"},
];




41,133,114,64,Ostpreussen,x
42,6,116,128,Warmia,x
43,134,118,192,Danzig,x
44,6,120,255,Hamburg,x
45,134,122,0,L�beck,x
46,6,124,64,Mecklenburg,x
47,134,126,128,Vorpommern,x
48,6,128,192,Hinterpommern,x
49,135,130,255,Neumark,x
50,7,132,0,Brandenburg,x
51,135,134,64,Ruppin,x
52,7,136,128,Altmark,x
53,135,138,192,L�neburg,x
54,7,140,255,Bremen,x
55,135,142,0,Oldenburg,x
56,8,144,64,Osnabr�ck,x
57,136,146,128,Hannover,x
58,8,148,192,Anhalt,x
59,136,150,255,Meissen,x
60,8,152,0,Lausitz,x
61,136,154,64,Dresden,x
62,8,156,128,Leipzig,x
63,137,158,192,Erfurt,x
64,9,32,255,Niederbayern,x
65,137,34,0,M�nchen,x
66,9,36,64,Bamberg,x
67,137,38,128,Franken,x
68,9,40,192,Schwaben,x
69,137,42,255,Konstanz,x
70,10,44,0,W�rttemberg,x
71,138,46,64,Leiningen,x
72,10,48,128,Breisgau,x
73,138,50,192,Tirol,x
74,10,52,255,Baden,x
75,138,54,0,Elsass,x
76,10,56,64,Salzburg,x
77,139,58,128,Worms,x
78,11,60,192,Pfalz,x
79,139,62,255,W�rzburg,x
80,11,64,0,Trier,x
81,139,66,64,Hessen,x
82,11,68,128,Lippe,x
83,139,70,192,Nassau,x
84,12,72,255,Berg,x
85,140,74,0,K�ln,x
86,12,76,64,M�nster,x
87,140,78,128,Calais,x
88,12,80,192,Artois,x
89,140,82,255,Picardie,x
90,12,84,0,Vlaanderen,x
91,141,86,64,Hainault,x
92,13,88,128,Brabant,x
93,141,90,192,Li�ge,x
94,13,92,255,Luxemburg,x
95,141,94,0,Noord,x
96,13,96,64,Zeeland,x
97,141,98,128,Holland,x
98,14,100,192,Utrecht,x
99,142,102,255,Gelre,x
100,14,104,0,Friesland,x
101,142,106,64,Liguria,x
102,14,108,128,Nice,x
103,85,80,32,Niklas,x
104,14,112,255,Lombardia,x
105,143,114,0,Parma,x
106,15,116,64,Modena,x
107,143,118,128,Brescia,x
108,15,120,192,Verona,x
109,143,122,255,Mantua,x
110,15,124,0,Trent,x
111,143,126,64,Friuli,x
112,16,128,128,Venezia,x
113,144,130,192,Ferrara,x
114,16,132,255,Romagna,x
115,144,134,0,Pisa,x
116,16,136,64,Firenze,x
117,144,138,128,Siena,x
118,16,140,192,Roma,x
119,145,142,255,Ancona,x
120,17,144,0,Abbruzzi,x
121,145,146,64,Napoli,x
122,17,148,128,Apulia,x
123,145,150,192,Calabria,x
124,17,152,255,Messina,x
125,145,154,0,Palermo,x
126,18,156,64,Malta,x
127,146,158,128,Sardinia,x
128,18,32,192,K�rnten,x
129,146,34,255,Krain,x
130,18,36,0,Istria,x
131,146,38,64,Croatia,x
132,18,40,128,Steiermark,x
133,147,42,192,Linz,x
134,19,44,255,Wien,x
135,147,46,0,Sopron,x
136,19,48,64,Dalmatia,x
137,147,50,128,Ragusa,x
138,19,52,192,Zeta,x
139,147,54,255,Hum,x
140,20,56,0,Bosnia,x
141,148,58,64,Serbia,x
142,20,60,128,Corfu,x
143,148,62,192,Albania,x
144,20,64,255,Janina,x
145,148,66,0,Morea,x
146,20,68,64,Athens,x
147,149,70,128,Salonica,x
148,21,72,192,Macedonia,x
149,149,74,255,Edirne,x
150,21,76,0,Bulgaria,x
151,149,78,64,Thrace,x
152,21,80,128,Slavonia,x
153,149,82,192,Pecs,x
154,22,84,255,Ersekujvar,x
155,150,86,0,Szolnok,x
156,22,88,64,Banat,x
157,150,90,128,Partium,x
158,22,92,192,Transylvania,x
159,150,94,255,Silistria,x
160,22,96,0,Oltenia,x
161,151,98,64,Wallachia,x
162,23,100,128,Carpathia,x
163,151,102,192,Crete,x
164,23,104,255,Naxos,x
165,151,106,0,Bern,x
166,23,108,64,Schwyz,x
167,151,110,128,Caux,x
168,24,112,192,Normandie,x
169,152,114,255,Armor,x
170,24,116,0,Finist�re,x
171,152,118,64,Morbihan,x
172,24,120,128,Vend�e,x
173,152,122,192,Labourd,x
174,24,124,255,Gascogne,x
175,153,126,0,Armagnac,x
176,25,128,64,B�arn,x
177,153,130,128,Maine,x
178,25,132,192,Anjou,x
179,153,134,255,Berry,x
180,25,136,0,Poitou,x
181,153,138,64,Valenciennes,x
182,26,140,128,Vermandois,x
183,154,142,192,�le-de-France,x
184,26,144,255,Orl�annais,x
185,154,146,0,Nemours,x
186,26,148,64,Champagne,x
187,154,150,128,Barrois,x
188,26,152,192,Metz,x
189,155,154,255,Lothringen,x
190,27,156,0,Bourbon,x
191,155,158,64,Nevers,x
192,27,32,128,Bourgogne,x
193,155,34,192,Franche-Comt�,x
194,27,36,255,P�rigord,x
195,155,38,0,Limousin,x
196,28,40,64,Toulouse,x
197,156,42,128,Roussillon,x
198,28,44,192,Rouergue,x
199,156,46,255,Auvergne,x
200,28,248,0,Languedoc,x
201,156,50,64,Provence,x
202,28,52,128,Avignon,x
203,157,54,192,Lyonnais,x
204,29,56,255,Dauphin�,x
205,157,58,0,Savoie,x
206,29,60,64,Galicia,x
207,157,62,128,Asturias,x
208,29,64,192,Le�n,x
209,157,66,255,Vizcaya,x
210,30,68,0,Navarra,x
211,158,70,64,Pirineo,x
212,30,72,128,Girona,x
213,158,74,192,Barcelona,x
214,30,76,255,Arag�n,x
215,158,78,0,Castilla La Vieja,x
216,30,80,64,Salamanca,x
217,159,82,128,Madrid,x
218,31,84,192,Badajoz,x
219,159,86,255,Toledo,x
220,31,88,0,Val�ncia,x
221,159,90,64,Murcia,x
222,31,92,128,Almer�a,x
223,159,94,192,Granada,x
224,32,96,255,Andaluc�a,x
225,160,98,0,C�rdoba,x
226,32,100,64,Gibraltar,x
227,160,102,128,Lisboa,x
228,32,104,192,Beira,x
229,160,106,255,Alentejo,x
230,32,108,0,Algarve,x
231,161,110,64,Porto,x
232,33,112,128,Bragan�a,x
233,161,114,192,Cornwall,x
234,33,116,255,Wessex,x
235,161,118,0,Kent,x
236,33,120,64,London,x
237,161,122,128,Oxfordshire,x
238,34,124,192,Essex,x
239,162,126,255,Gloucestershire,x
240,34,128,0,Marches,x
241,162,130,64,Glamorgan,x
242,34,132,128,Gwynedd,x
243,162,134,192,Lincoln,x
244,34,136,255,Lancashire,x
245,163,138,0,Yorkshire,x
246,35,140,64,Northumberland,x
247,163,142,128,Cumbria,x
248,35,144,192,Lothian,x
249,163,146,255,Ayrshire,x
250,35,148,0,Fife,x
251,163,150,64,Aberdeen,x
252,36,152,128,Highlands,x
253,164,154,192,Western Isles,x
254,36,156,255,Poznan,x
255,164,158,0,Kalisz,x
256,36,32,64,Plock,x
257,164,34,128,Mazovia,x
258,36,36,192,Lodz,x
259,165,38,255,Sandomir,x
260,37,40,0,Galicien,x
261,165,42,64,Ruthenia,x
262,37,44,128,Krakow,x
263,165,46,192,Ratibor,x
264,37,48,255,Breslau,x
265,165,50,0,Moravia,x
266,38,52,64,Bohemia,x
267,166,54,128,Plsen,x
268,38,56,192,Bessarabia,x
269,166,58,255,Podlasia,x
270,38,60,0,Troki,x
271,166,62,64,Samogitia,x
272,38,64,128,Lithuania,x
273,167,66,192,Wenden,x
274,39,68,255,Pskov,x
275,167,70,0,Polotsk,x
276,39,72,64,Minsk,x
277,167,74,128,Grodno,x
278,39,76,192,Polesia,x
279,167,78,255,Volhynia,x
280,40,80,0,Kiev,x
281,168,82,64,Podolia,x
282,40,84,128,Yedisan,x
283,168,86,192,Zaporozhia,x
284,40,88,255,Crimea,x
285,168,90,0,Kaffa,x
286,40,92,64,Azow,x
287,169,94,128,Kouban,x
288,41,96,192,Cherkassk,x
289,169,98,255,Chernigov,x
290,41,100,0,Poltava,x
291,169,102,64,Kharkov,x
292,41,104,128,Mogilyov,x
293,169,106,192,Smolensk,x
294,42,108,255,Tver,x
295,170,110,0,Moskva,x
296,42,112,64,Kaluga,x
297,170,114,128,Bryansk,x
298,42,116,192,Kursk,x
299,170,118,255,Voronezh,x
300,42,120,0,Tula,x
301,171,122,64,Ryazan,x
302,43,124,128,Tambow,x
303,171,126,192,Saratow,x
304,43,128,255,Pensa,x
305,171,130,0,Perm,x
306,43,132,64,Nijni-Novgorod,x
307,171,134,128,Vladimir,x
308,44,136,192,Yaroslavl,x
309,172,138,255,Olonets,x
310,44,140,0,Novgorod,x
311,172,142,64,Kholm,x
312,44,144,128,Vologda,x
313,172,146,192,Archangelsk,x
314,44,148,255,Ustyug,x
315,173,150,0,Finnmark,x
316,45,152,64,Bithynia,x
317,173,154,128,Bursa,x
318,45,156,192,Smyrna,x
319,173,158,255,Antalya,x
320,45,32,0,Rhodes,x
321,173,34,64,Cyprus,x
322,46,36,128,Anatolia,x
323,174,38,192,Konya,x
324,46,40,255,Karaman,x
325,174,42,0,Kastamon,x
326,46,44,64,Angora,x
327,174,46,128,Adana,x
328,46,48,192,Sinope,x
329,175,50,255,Sivas,x
330,47,52,0,Trebizon,x
331,175,54,64,Erserum,x
332,47,56,128,Mus,x
333,175,58,192,The Baleares,x
334,47,60,255,Tangiers,x
335,175,62,0,Mellila,x
336,48,244,64,Tlemcen,x
337,176,66,128,Oran,x
338,48,68,192,Al-Djazair,x
339,176,70,255,Kabylia,x
340,48,72,0,Constantine,x
341,176,74,64,Tunis,x
342,48,76,128,Toubkhal,x
343,177,78,192,Fez,x
344,49,80,255,Marrakech,x
345,177,82,0,Safi,x
346,49,84,64,Figuig,x
347,177,86,128,Ifni,x
348,49,88,192,Sus,x
349,177,90,255,Atlas,x
350,50,92,0,Aures,x
351,178,94,64,Biskra,x
352,50,96,128,Gafsa,x
353,178,98,192,Gabes,x
354,50,100,255,Tripolitania,x
355,178,102,0,Sirt,x
356,50,104,64,Cyrenaica,x
357,179,106,128,Libya,x
358,51,108,192,Alexandria,x
359,179,110,255,Asyut,x
360,51,112,0,Nile,x
361,179,114,64,Cairo,x
362,51,116,128,Delta,x
363,179,118,192,Diamientia,x
364,52,120,255,Gaza,x
365,180,122,0,Sinai,x
366,52,124,64,The Canarias,x
367,180,126,128,The Azores,x
368,52,128,192,Madeira,x
369,180,130,255,Orkney,x
370,52,132,0,Reykjavik,x
371,181,134,64,Akureyri,x
372,53,136,128,Ulster,x
373,181,138,192,Meath,x
374,53,140,255,Leinster,x
375,181,142,0,Munster,x
376,53,144,64,Connaught,x
377,181,146,128,Aleppo,x
378,54,148,192,Beirut,x
379,182,150,255,Judea,x
380,54,152,0,Al Karak,x
381,182,154,64,Hawran,x
382,54,156,128,Damascus,x
383,182,158,192,Tabouk,x
384,54,32,255,Medina,x
385,183,34,0,Mecca,x
386,55,36,64,Asir,x
387,183,38,128,Mocha,x
388,55,40,192,Aden,x
389,183,42,255,Hadramut,x
390,55,44,0,Sana'a,x
391,183,46,64,Najran,x
392,56,48,128,Nejd,x
393,184,50,192,Jabal Shammar,x
394,56,52,255,Al Hasa,x
395,184,54,0,Qatar,x
396,56,56,64,Bahrain,x
397,184,58,128,Beni Yas,x
398,56,60,192,Qawasim,x
399,185,62,255,Suhar,x
400,57,64,0,Muscat,x
401,185,66,64,Dhofar,x
402,57,68,128,Mahra,x
403,185,70,192,Nizwa,x
404,57,72,255,Liwa,x
405,185,74,0,Al Jawf,x
406,58,76,64,Badiyat Ash Sham,x
407,186,78,128,Dayr Az Zor,x
408,58,80,192,Basra,x
409,186,82,255,Karbala,x
410,58,84,0,Iraq-i-Arab,x
411,186,86,64,Mosul,x
412,58,88,128,Khuzestan,x
413,187,90,192,Luristan,x
414,59,92,255,Hamadan,x
415,187,94,0,Sharizhor,x
416,59,96,64,Azerbaijan,x
417,187,98,128,Gilan,x
418,59,100,192,Van,x
419,187,102,255,Armenia,x
420,60,104,0,Qarabagh,x
421,188,106,64,Murgan,x
422,60,108,128,Imereti,x
423,188,110,192,Kartli,x
424,60,112,255,Shirva,x
425,188,114,0,Dagestan,x
426,60,116,64,Mazandaran,x
427,189,118,128,Gurgan,x
428,61,120,192,Ajam,x
429,189,122,255,Fars,x
430,61,124,0,Laristan,x
431,189,126,64,Hormuz,x
432,61,128,128,Kerman,x
433,189,130,192,Dash-i-Lut,x
434,62,132,255,Makran,x
435,190,134,0,Sistan,x
436,62,136,64,Khurasan,x
437,190,138,128,Atak,x
438,62,140,192,Kara Kum,x
439,190,142,255,Mangyshlak,x
440,62,144,0,Qaraqalpak,x
441,191,146,64,Khiva,x
442,63,148,128,Bukhara,x
443,191,150,192,Ust Yurt,x
444,63,152,255,Charjuy,x
445,191,154,0,Marv,x
446,63,156,64,Herat,x
447,191,158,128,Kandahar,x
448,64,32,192,Gazni,x
449,192,34,255,Gharchistan,x
450,64,36,0,Balkh,x
451,192,38,64,Kabulistan,x
452,64,40,128,Badakhshan,x
453,192,42,192,Qarshi,x
454,64,44,255,Samarkand,x
455,193,46,0,Kyrzyl-Kum,x
456,65,48,64,Turkestan,x
457,193,50,128,Tashkent,x
458,65,52,192,Kokand,x
459,193,54,255,Taraz,x
460,65,56,0,Uzkend,x
461,193,58,64,Zhetysu,x
462,66,60,128,Georgia,x
463,194,62,192,Alania,x
464,66,64,255,Astrakhan,x
465,194,66,0,Nogay,x
466,66,68,64,Sarai,x
467,194,70,128,Borisoglebsk,x
468,66,72,192,Khazaria,x
469,195,74,255,Ryn,x
470,67,76,0,Bayuly,x
471,195,78,64,Alimuly,x
472,67,80,128,Jetyru,x
473,195,82,192,Samara,x
474,67,84,255,Yaik,x
475,195,86,0,Bashkortostan,x
476,68,88,64,Kypshak,x
477,196,90,128,Nadym,x
478,68,92,192,Argyn,x
479,196,94,255,Kerey,x
480,68,96,0,Kulunda,x
481,196,98,64,Bermuda,x
482,68,100,128,Bahamas,x
483,197,102,192,Turks Islands,x
484,69,104,255,Havana,x
485,197,106,0,Moron,x
486,69,108,64,Guantamano,x
487,197,110,128,Jamaica,x
488,69,112,192,Les Cayes,x
489,197,114,255,Tortuga,x
490,70,116,0,Barahonas,x
491,198,118,64,Curacao,x
492,70,120,128,Puerto Rico,x
493,198,122,192,St. Thomas,x
494,70,124,255,St. Martin,x
495,198,126,0,St. Kitts,x
496,70,128,64,Antigua,x
497,199,130,128,Guadelopue,x
498,71,132,192,Dominica,x
499,199,134,255,Martinique,x
500,71,136,0,St. Lucia,x
501,199,138,64,Barbados,x
502,71,140,128,Trinidad,x
503,199,142,192,Kutch,x
504,72,144,255,Lower Sind,x
505,200,146,0,Upper Sind,x
506,72,148,64,Multan,x
507,200,150,128,Punjab,x
508,72,152,192,Kashmir,x
509,200,154,255,Kangra,x
510,72,156,0,Sirhind,x
511,201,158,64,Garhwal,x
512,73,32,128,Jangladesh,x
513,201,34,192,Jaisalmer,x
514,73,36,255,Marwar,x
515,201,38,0,Kathiawar,x
516,73,40,64,Gujarat,x
517,201,42,128,Surat,x
518,74,44,192,Mewar,x
519,202,46,255,Dundhar,x
520,74,48,0,Mewat,x
521,202,50,64,Rajkot,x
522,74,52,128,Upper Doab,x
523,202,54,192,Oudh,x
524,74,56,255,Central Doab,x
525,203,58,0,Gird,x
526,75,60,64,Mandu,x
527,203,62,128,Khandesh,x
528,75,64,192,Hadoti,x
529,203,66,255,North Konkan,x
530,75,68,0,Malvana,x
531,203,70,64,Kanara,x
532,76,72,128,Raichur Doab,x
533,204,74,192,Mysore,x
534,76,76,255,Malabar,x
535,204,78,0,Kochin,x
536,76,80,64,Madurai,x
537,204,82,128,Venad,x
538,76,84,192,Kongu,x
539,205,86,255,Tondainadu,x
540,77,88,0,Coromandel,x
541,205,90,64,Vijayanagar,x
542,77,92,128,Telingana,x
543,205,94,192,Kosta,x
544,77,96,255,Ahmadnagar,x
545,205,98,0,Maharastra,x
546,78,100,64,East Berar,x
547,206,102,128,Bastar,x
548,78,104,192,West Berar,x
549,206,106,255,Kalingandhra,x
550,78,108,0,Mahakoshal,x
551,206,110,64,Mandla,x
552,78,112,128,Rajabara,x
553,207,114,192,Garjat,x
554,79,116,255,Baisi Rayja,x
555,207,118,0,Jaunpur,x
556,79,120,64,Lower Doab,x
557,207,122,128,Katmandu,x
558,79,124,192,Bihar,x
559,207,126,255,Bundelkhand,x
560,80,128,0,Jharkand,x
561,208,130,64,Bangala,x
562,80,132,128,Koch,x
563,208,134,192,Gauda,x
564,80,136,255,Dacca,x
565,208,138,0,Bhutan,x
566,80,140,64,Assam,x
567,209,142,128,Sylhet,x
568,81,144,192,Chittagong,x
569,209,146,255,Bijapur,x
570,81,148,0,Naga,x
571,209,150,64,Darrang,x
572,81,152,128,Ceylon,x
573,209,154,192,Kachar,x
574,82,156,255,The Andamans,x
575,210,158,0,Baluchistan,x
576,82,32,64,Indus,x
577,210,34,128,Quetta,x
578,82,36,192,Khyber,x
579,210,38,255,Arakan,x
580,82,40,0,Chin,x
581,211,42,64,Sagaing,x
582,83,44,128,Kachin,x
583,211,46,192,Hsenwi,x
584,83,48,255,Kyuakse,x
585,211,50,0,Toungoo,x
586,83,52,64,Pegu,x
587,211,54,128,Keng Tung,x
588,84,56,192,Mongnai,x
589,212,58,255,Chiang Mai,x
590,84,60,0,Moulmein,x
591,212,62,64,Tenasserim,x
592,84,64,128,Ratchaburi,x
593,212,66,192,Ligore,x
594,84,68,255,Pattani,x
595,213,70,0,Perak,x
596,85,72,64,Malacca,x
597,213,74,128,Johor,x
598,85,76,192,Pahang,x
599,213,78,255,Kelantan,x
600,85,80,0,Ayutthaya,x
601,213,82,64,Sukthothai,x
602,86,84,128,Chian Rai,x
603,214,86,192,Rayong,x
604,86,88,255,Udong,x
605,214,90,0,Prei Nokoi,x
606,86,92,64,Panduranga,x
607,214,94,128,Vijaya,x
608,86,96,192,Champassak,x
609,215,98,255,Siem Reap,x
610,87,100,0,Binh Tri Thien,x
611,215,102,64,Thakhek,x
612,87,104,128,Khorat,x
613,215,106,192,Thang Long,x
614,87,108,255,Vientiane,x
615,215,110,0,Luang Prabang,x
616,88,112,64,Viet Bac,x
617,216,114,128,Aceh,x
618,88,116,192,Aru,x
619,216,118,255,Minangkabau,x
620,88,120,0,Siak,x
621,216,122,64,Benkulen,x
622,88,124,128,Palembang,x
623,217,126,192,Lampung,x
624,89,128,255,Banten,x
625,217,130,0,Priangan,x
626,89,132,64,Mataram,x
627,217,134,128,Blambangan,x
628,89,136,192,Surabaya,x
629,217,138,255,Demak,x
630,90,140,0,Sunda,x
631,218,142,64,Bali-Lombok,x
632,90,144,128,Sumbawa,x
633,218,146,192,Flores,x
634,90,148,255,Sumba,x
635,218,150,0,Timor,x
636,90,152,64,Brunei,x
637,219,154,128,Sabah,x
638,91,156,192,Kutei,x
639,219,158,255,Banjarmasin,x
640,91,32,0,Sukadane,x
641,219,34,64,Makassar,x
642,91,36,128,Bone,x
643,219,38,192,Pose,x
644,92,40,255,Menade,x
645,220,42,0,Buru,x
646,92,44,64,Ambom,x
647,220,46,128,Ceram,x
648,92,48,192,Halmahera,x
649,220,50,255,Ternate,x
650,92,52,0,Tidore,x
651,221,54,64,Sulu,x
652,93,56,128,Maguindanae,x
653,221,58,192,Tagoloan,x
654,93,60,255,Visayas,x
655,221,62,0,Palawan,x
656,93,64,64,Manila,x
657,221,66,128,Samtoy,x
658,94,68,192,Cagayan,x
659,222,70,255,Riau,x
660,94,72,0,Xishuan Banna,x
661,222,74,64,Dali,x
662,94,76,128,Yunnan,x
663,222,78,192,Wenshan,x
664,94,80,255,Guangxi,x
665,223,82,0,XXX,x
666,95,84,64,Hainan,x
667,223,86,128,Guangzhou,x
668,95,88,192,Macau,x
669,223,90,255,Fuzhou,x
670,95,92,0,Ganzhou,x
671,223,94,64,Changsha,x
672,96,96,128,Chenzhou,x
673,224,98,192,Bozhou,x
674,96,100,255,Guiyang,x
675,224,102,0,Liangshan,x
676,96,104,64,U-Tsang,x
677,224,106,128,Qamdo,x
678,96,108,192,Kham,x
679,225,110,255,Sichuan Pendi,x
680,97,112,0,Shenquing,x
681,225,114,64,Yichuan,x
682,97,116,128,Hanyang,x
683,225,118,192,Nanchang,x
684,97,120,255,Hangzhou,x
685,225,122,0,Huai'an,x
686,98,124,64,Anqing,x
687,226,126,128,Running,x
688,98,128,192,Kaifeng,x
689,226,130,255,Fengyuan,x
690,98,132,0,Shandong Bandao,x
691,226,134,64,Jinan,x
692,98,136,128,Handan,x
693,227,138,192,Sanguan,x
694,99,140,255,Changzhi,x
695,227,142,0,Beijing,x
696,99,144,64,Xuan Fu,x
697,227,146,128,Datong,x
698,99,148,192,Guyuan,x
699,227,150,255,Lanzhou,x
700,100,152,0,Shaanxi,x
701,228,154,64,Ordos,x
702,100,156,128,Ulaanchab,x
703,228,158,192,Chengde,x
704,100,32,255,Liaoxi,x
705,228,34,0,Dangla,x
706,100,36,64,Amdo,x
707,229,38,128,Yumen,x
708,101,40,192,Gansu,x
709,229,42,255,Ningxia,x
710,101,44,0,Hotan,x
711,229,46,64,Qarqan,x
712,101,48,128,Uighuristan,x
713,229,50,192,Kuruk Tag,x
714,102,52,255,Dzungaria,x
715,230,54,0,Urumqi,x
716,102,56,64,Tannu Tuva,x
717,230,58,128,Selenge,x
718,102,60,192,Govi Altay,x
719,230,62,255,Khangai,x
720,102,64,0,Dorno Govi,x
721,231,66,64,Dornod,x
722,103,68,128,Chahar,x
723,231,70,192,Xilin Gol,x
724,103,72,255,Yakesa,x
725,231,74,0,Hinggan,x
726,103,76,64,Liaodong,x
727,231,78,128,Heilongjiang,x
728,104,80,192,Sanxing,x
729,232,82,255,Wusuli,x
730,104,84,0,Haixi,x
731,232,86,64,Ninguta,x
732,104,88,128,Hamgyeong,x
733,232,90,192,Pyeongan,x
734,104,92,255,Gangwon,x
735,153,134,173,Gyeonggi,x
736,105,96,64,Gyeongsang,x
737,233,98,128,Jeolla,x
738,105,100,192,Taiwan,x
739,233,102,255,Kashgar,x
740,105,104,0,Malwa,x
741,233,106,64,Cumana,x
742,106,108,128,Guayana,x
743,234,110,192,Essequibo,x
744,106,112,255,Demerara,x
745,234,114,0,Suriname,x
746,106,116,64,Cayenne,x
747,234,118,128,Tucujulandia,x
748,106,120,192,Grao Para,x
749,235,122,255,Maranhao,x
750,107,124,0,Alpercatas,x
751,235,126,64,Ceara,x
752,107,128,128,Oeiras,x
753,235,130,192,Rio Grande,x
754,107,132,255,Itamaraca,x
755,235,134,0,Pernambuco,x
756,108,136,64,Bahia,x
757,236,138,128,Ilheus,x
758,108,140,192,Goias,x
759,236,142,255,Diamentina,x
760,108,144,0,Porto Seguro,x
761,236,146,64,Espirito Santo,x
762,108,148,128,Sao Tome,x
763,237,150,192,Rio de Janeiro,x
764,109,152,255,Santo Amaro,x
765,237,154,0,Minas Gerais,x
766,109,156,64,Sao Vicente,x
767,237,158,128,Mato Grosso,x
768,109,32,192,Guayra,x
769,237,34,255,Santana,x
770,110,36,0,Tape,x
771,238,38,64,Patos,x
772,110,40,128,Uruguay,x
773,238,42,192,Banda Oriente,x
774,110,44,255,Mbaracayu,x
775,238,46,0,Xeres,x
776,110,48,64,Itenines,x
777,239,50,128,Parana,x
778,111,52,192,Rio de la Plata,x
779,239,54,255,Serranos,x
780,111,56,0,Tehuelmapu,x
781,239,58,64,Patagonia Oriental,x
782,111,60,128,Tierra del Fuego,x
783,239,62,192,Patagonia Occidental,x
784,112,64,255,Huillimapu,x
785,240,66,0,Pehuenmapu,x
786,112,68,64,Salinas Grande,x
787,240,70,128,Pincunmapu,x
788,112,72,192,Cuyo,x
789,240,74,255,Pampas,x
790,112,76,0,Chaco Austral,x
791,241,78,64,Catamarca,x
792,113,80,128,Copiapo,x
793,241,82,192,Atacama,x
794,113,84,255,Jujuy,x
795,241,86,0,Chichas,x
796,113,88,64,Arica,x
797,241,90,128,Caracara,x
798,114,92,192,Charcas,x
799,242,94,255,Chaco Boreal,x
800,114,96,0,Chiquitos,x
801,242,98,64,Caranga,x
802,114,100,128,Chuquiabo,x
803,242,102,192,Moxos,x
804,114,104,255,Puno,x
805,243,106,0,Arequipa,x
806,115,108,64,Nazca,x
807,243,110,128,Huamanga,x
808,115,112,192,Cuzco,x
809,243,114,255,Lima,x
810,115,116,0,Huancavelica,x
811,243,118,64,Tarma,x
812,116,120,128,Chanchan,x
813,244,122,192,Cajamarca,x
814,116,124,255,Huanuco,x
815,244,126,0,Maynas,x
816,116,128,64,Tumbes,x
817,244,130,128,Cuenca,x
818,116,132,192,Canelos,x
819,245,134,255,Guayaquil,x
820,117,136,0,Quito,x
821,245,138,64,Quijos,x
822,117,140,128,Caqueta,x
823,245,142,192,Cauca,x
824,117,144,255,Mariquita,x
825,245,146,0,Bogota,x
826,118,148,64,Choco,x
827,246,150,128,Antioqu�a,x
828,118,152,192,Cartagena,x
829,246,154,255,Magdalena,x
830,118,156,0,Maracaibo,x
831,246,158,64,Caracas,x
832,118,32,128,Chiancon,x
833,247,34,192,Tunja,x
834,119,36,255,Barinas,x
835,128,34,79,Panama,x
836,0,36,126,Chorotega,x
837,128,38,173,Nicaragua,x
838,0,40,32,Mosquito,x
839,128,42,79,Pipil,x
840,0,44,126,Honduras,x
841,129,46,173,Guatemala,x
842,1,48,32,Pet�n,x
843,129,50,79,Belize,x
844,1,52,126,Zapotec,x
845,129,54,173,Campeche,x
846,1,56,32,Yucatan,x
847,129,58,79,Mixtec,x
848,2,60,126,Tohancapan,x
849,130,62,173,Tlapanec,x
850,2,64,32,Tlaxcala,x
851,130,66,79,Tarasco,x
852,2,68,126,Mexico,x
853,130,70,173,Huastec,x
854,2,72,32,Sayultecas,x
855,131,74,79,Huichol,x
856,3,76,126,Zacatecas,x
857,131,78,173,Guachichil,x
858,3,80,32,Tamaulipas,x
859,131,82,79,Sinaloa,x
860,3,84,126,Tepehuan,x
861,131,86,173,Coahuila,x
862,4,88,32,Yaqui,x
863,132,90,79,Suma,x
864,4,92,126,Concho,x
865,132,94,173,Cochimi,x
866,4,96,32,Guaycura,x
867,132,98,79,Mojave,x
868,4,100,126,Chumash,x
869,133,102,173,Salinan,x
870,5,104,32,Yorkuts,x
871,133,106,79,Pomo,x
872,5,108,126,Kalapuya,x
873,133,110,173,Chinook,x
874,5,112,32,Salish,x
875,133,114,79,Canyon,x
876,6,116,126,Yavapai,x
877,134,118,173,Pima,x
878,6,120,32,Navajo,x
879,134,122,79,Apache,x
880,6,124,126,Pueblo,x
881,134,126,173,Piro,x
882,6,128,32,Mescalero,x
883,135,130,79,Lipan,x
884,7,132,126,Karankawa,x
885,135,134,173,Comanche,x
886,7,136,32,Waco,x
887,135,138,79,Tonkawa,x
888,7,140,126,Atakapa,x
889,135,142,173,Arapaho,x
890,8,144,32,Kiowa,x
891,136,146,79,Jicarilla,x
892,8,148,126,Wichita,x
893,136,150,173,Chitimacha,x
894,8,152,32,Caddo,x
895,136,154,79,Arkansas,x
896,8,156,126,Ozark,x
897,137,158,173,Quapaw,x
898,9,32,32,Kansas,x
899,137,34,79,Osage,x
900,9,36,126,Tamaroa,x
901,137,38,173,Pawnee,x
902,9,40,32,Missouri,x
903,137,42,79,Omaha,x
904,10,44,126,Nakota,x
905,138,46,173,Iowa,x
906,10,48,32,Lakota,x
907,138,50,79,Dakota,x
908,10,52,126,Minnesota,x
909,138,54,173,Mandan,x
910,10,56,32,Chippewa,x
911,139,58,79,Menominee,x
912,11,60,126,Sauk,x
913,139,62,173,Fox,x
914,11,64,32,Winnebago,x
915,139,66,79,Illinois,x
916,11,68,126,Kaskaskia,x
917,139,70,173,Cahokia,x
918,12,72,32,Tennessee,x
919,140,74,79,Chickasaw,x
920,12,76,126,Choctaw,x
921,140,78,173,Bayougoula,x
922,12,80,32,Mobile,x
923,140,82,79,Pensacola,x
924,12,84,126,Alabama,x
925,141,86,173,Tuskegee,x
926,13,88,32,Seminole,x
927,141,90,79,Timucua,x
928,13,92,126,Apalachee,x
929,141,94,173,Muskogee,x
930,13,96,32,Yamasee,x
931,141,98,79,Chiaha,x
932,14,100,126,Santee,x
933,142,102,173,Catawba,x
934,14,104,32,Shawnee,x
935,142,106,79,Cherokee,x
936,14,108,126,Cheraw,x
937,142,110,173,Tuscarora,x
938,14,112,32,Pamlico,x
939,143,114,79,Pennyrile,x
940,15,116,126,Kentucky,x
941,143,118,173,Cumberland,x
942,15,120,32,Wea,x
943,143,122,79,Miami,x
944,15,124,126,Potawatomi,x
945,143,126,173,Michigan,x
946,16,128,32,Wyandot,x
947,144,130,79,Erie,x
948,16,132,126,Ohio,x
949,144,134,173,Monacan,x
950,16,136,32,Powhatan,x
951,144,138,79,Kanawha,x
952,16,140,126,Manahoac,x
953,145,142,173,Conoy,x
954,17,144,32,Allegheny,x
955,145,146,79,Susquehanna,x
956,17,148,126,Lenape,x
957,145,150,173,Delaware,x
958,17,152,32,Seneca,x
959,145,154,79,Cayuga,x
960,18,156,126,Onondaga,x
961,146,158,173,Oneida,x
962,18,32,32,Unami,x
963,146,34,79,Mahican,x
964,18,36,126,Mohawk,x
965,146,38,173,Manhattan,x
966,18,40,32,Connecticut,x
967,147,42,79,Narraganset,x
968,19,44,126,Massachusetts,x
969,147,46,173,Pocumtuk,x
970,19,48,32,Pennacook,x
971,147,50,79,Abnaki,x
972,19,52,126,Nootka,x
973,147,54,173,Squamish,x
974,20,56,32,Kwakiutl,x
975,148,58,79,Tsimshian,x
976,20,60,126,Tlingit,x
977,148,62,173,Yakutat,x
978,20,64,32,Kenai,x
979,148,66,79,Aleut,x
980,20,68,126,Beothuk,x
981,149,70,173,Taqamkuk,x
982,21,72,32,Unamakik,x
983,149,74,79,Epekwitk,x
984,21,76,126,Acadia,x
985,149,78,173,Micmac,x
986,21,80,32,Kespek,x
987,149,82,79,Niagara,x
988,22,84,126,Huron,x
989,150,86,173,Ontario,x
990,22,88,32,Kwedech,x
991,150,90,79,Ottawa,x
992,22,92,126,Algonquin,x
993,150,94,173,Hochelega,x
994,22,96,32,Stadacona,x
995,151,98,79,Atiamekw,x
996,23,100,126,Innu,x
997,151,102,173,Labrador,x
998,23,104,32,Ungava,x
999,151,106,79,Nunavik,x
1000,23,108,126,Cree,x
1001,151,110,173,Sault,x
1002,24,112,32,Abitbi,x
1003,152,114,79,Moose Cree,x
1004,24,116,126,Attawapiskat,x
1005,152,118,173,Swampy Cree,x
1006,24,120,32,Chipewyan,x
1007,152,122,79,Ojibwa,x
1008,24,124,126,Winnipeg,x
1009,153,126,173,Atikaki,x
1010,25,128,32,Manitoba,x
1011,153,130,79,Woods Cree,x
1012,25,132,126,Satsuma,x
1013,233,94,0,Chungcheong,x
1014,25,136,32,Bungo,x
1015,153,138,79,Okinawa,x
1016,26,140,126,Nghe An,x
1017,154,142,173,Nagato,x
1018,26,144,32,Izumo,x
1019,154,146,79,Harima,x
1020,26,148,126,Kyoto,x
1021,154,150,173,Settsu,x
1022,26,152,32,Amaravati,x
1023,155,154,79,Echizen,x
1024,27,156,126,Echigo,x
1025,155,158,173,Dewa,x
1026,27,32,32,Mutsu,x
1027,155,34,79,Hitachi,x
1028,27,36,126,Musachi,x
1029,155,38,173,Shinano,x
1030,28,40,32,Owari,x
1031,156,42,79,Kamikawa,x
1032,28,44,126,Kurils,x
1033,156,46,173,Sakhalin,x
1034,28,48,32,Kamchatka,x
1035,156,50,79,Penchisky,x
1036,28,52,126,Podzhiversk,x
1037,157,54,173,Nizhe-Kolymsk,x
1038,29,56,32,Anadyrsk,x
1039,157,58,79,Verkhoyansk,x
1040,29,254,126,Suntar Khayat,x
1041,157,62,173,Gizhiga,x
1042,29,64,32,Kamnuskoye,x
1043,157,66,79,Okhotsk,x
1044,30,68,126,Tauisk,x
1045,158,70,173,Yakutsk,x
1046,30,243,32,Butalsk,x
1047,158,174,79,Jugjur,x
1048,30,76,126,Udskoye,x
1049,158,78,173,Saghalian Oula,x
1050,30,80,32,Deren,x
1051,159,82,79,Uchurskoye,x
1052,31,84,126,Verkohzehkoye,x
1053,159,86,173,Albazinsky,x
1054,31,88,32,Ilimsk,x
1055,159,90,79,Verkne-Angarsky,x
1056,31,92,126,Barguzinsky,x
1057,159,94,173,Udinsky,x
1058,32,96,32,Nerchinsky,x
1059,160,98,79,Bratsk,x
1060,32,100,126,Irkutsk,x
1061,160,102,173,Yeniseysk,x
1062,32,104,32,Kachinsk,x
1063,160,106,79,Sayan,x
1064,32,108,126,Tomsk,x
1065,161,110,173,Kuznetsk,x
1066,33,112,32,Altai,x
1067,161,114,79,Narym,x
1068,33,116,126,Pegaya Orda,x
1069,161,118,173,Surgut,x
1070,33,120,32,Koda,x
1071,161,122,79,Tara,x
1072,34,124,126,Obdorsk,x
1073,162,226,173,Berezov,x
1074,34,228,32,Sibir,x
1075,162,130,79,Tyumen,x
1076,34,132,126,Kurgan,x
1077,162,134,173,Solikamsk,x
1078,34,136,32,Middle Urals,x
1079,163,138,79,Viatka,x
1080,35,140,126,North Urals,x
1081,163,142,173,Simbirsk,x
1082,35,144,32,Kazan,x
1083,163,146,79,Zavolochye,x
1084,35,148,126,Wadjuk,x
1085,163,150,173,Paredarerme,x
1086,36,152,32,Kaurna,x
1087,164,154,79,Woiworung,x
1088,36,156,126,Wergaia,x
1089,164,158,173,Wiradjuri,x
1090,36,232,32,Eora,x
1091,164,34,79,Kamilaroi,x
1092,36,36,126,Bundjalung,x
1093,165,38,173,Barunggam,x
1094,37,240,32,Gubbi Gubbi,x
1095,165,42,79,Falklands,x
1096,37,44,126,Cape Verde,x
1097,165,46,173,Fernando Po,x
1098,37,248,32,St. Helena,x
1099,165,50,79,Socotra,x
1100,38,52,126,Mahe,x
1101,166,54,173,Diego Garcia,x
1102,38,247,32,Mauritius,x
1103,166,58,79,Bourbon,x
1104,38,60,126,Eiriksfjord,x
1105,166,62,173,Vestbygden,x
1106,38,164,32,Whangarei,x
1107,167,66,79,Taranaki,x
1108,39,68,126,Wairoa,x
1109,167,70,173,Timaru,x
1110,39,72,32,Rio de Oro,x
1111,167,74,79,Arguin,x
1112,39,76,126,Trarza,x
1113,167,78,173,Cayor,x
1114,40,80,32,Gabu,x
1115,168,82,79,Brakna,x
1116,40,84,126,Wolof,x
1117,168,86,173,Futa Jallon,x
1118,40,88,32,Sierra Leone,x
1119,168,90,79,Grain Coast,x
1120,40,92,126,Bambuk,x
1121,169,94,173,Bure,x
1122,41,96,32,Konian,x
1123,169,98,79,Segu,x
1124,41,100,126,Wasuju,x
1125,169,102,173,Worodugu,x
1126,41,104,32,Ivory Coast,x
1127,169,106,79,Tuat,x
1128,42,108,126,Taodeni,x
1129,170,110,173,Azawadd,x
1130,42,112,32,Tadimekket,x
1131,170,114,79,Massina,x
1132,42,116,126,Timbuktu,x
1133,170,118,173,Gao,x
1134,42,120,32,Jenne,x
1135,171,122,79,Yatenga,x
1136,43,124,126,Gurma,x
1137,171,126,173,Wagadugi,x
1138,43,128,32,Kumasi,x
1139,171,130,79,Gold Coast,x
1140,43,132,126,Abomey,x
1141,171,134,173,Whydah,x
1142,44,136,32,Dendi,x
1143,172,138,79,Borgu,x
1144,44,140,126,Oyo,x
1145,172,142,173,Nupe,x
1146,44,144,32,Ife,x
1147,172,146,79,Benin,x
1148,44,148,126,Gobir,x
1149,173,150,173,Katsina,x
1150,45,152,32,Zamfara,x
1151,173,154,79,Bonny,x
1152,45,156,126,Idah,x
1153,173,158,173,Pindinga,x
1154,45,32,32,Zazzau,x
1155,173,34,79,Kano,x
1156,46,36,126,Damagaram,x
1157,174,38,173,Damasak,x
1158,46,40,32,Kanem,x
1159,174,42,79,Bagirmi,x
1160,46,44,126,Bornu,x
1161,174,246,173,Bauchi,x
1162,46,48,32,Wukari,x
1163,175,50,79,Calabar,x
1164,47,52,126,Cameroon,x
1165,175,54,173,Gabon,x
1166,47,236,32,Loango,x
1167,175,58,79,Luanda,x
1168,47,60,126,Kisarna,x
1169,175,62,173,Mayombe,x
1170,48,64,32,Kongo,x
1171,176,66,79,Ndongo,x
1172,48,68,126,Benguela,x
1173,176,70,173,Damaraland,x
1174,48,172,32,Greater Namaqualand,x
1175,176,74,79,Lesser Namaqualand,x
1176,48,76,126,Roggeveld,x
1177,177,78,173,Cape,x
1178,49,80,32,Great Karoo,x
1179,177,82,79,Little Karoo,x
1180,49,84,126,Transkei,x
1181,177,86,173,Natal,x
1182,49,88,32,Delagoa Bay,x
1183,177,90,79,Inhambane,x
1184,50,92,126,Zimbabwe,x
1185,178,94,173,Uteve,x
1186,50,96,32,Sofala,x
1187,178,98,79,Urungwe,x
1188,50,100,126,Tete,x
1189,178,202,173,Barwe,x
1190,50,104,32,Zumbo,x
1191,179,106,79,Sena,x
1192,51,108,126,Quelimane,x
1193,179,110,173,Menabe,x
1194,51,212,32,Boina,x
1195,179,114,79,Mozambique,x
1196,51,116,126,Kilwa,x
1197,179,118,173,Ujiji,x
1198,52,120,32,Tabora,x
1199,180,122,79,Bagamoyo,x
1200,52,124,126,Tanga,x
1201,180,126,173,Zanzibar,x
1202,52,128,32,Mombasa,x
1203,180,130,79,Malindi,x
1204,52,132,126,Chisimayo,x
1205,181,134,173,Mogadishu,x
1206,53,136,32,Mayertern,x
1207,181,138,79,Ogaden,x
1208,53,140,126,Haud,x
1209,181,142,173,Berbera,x
1210,53,144,32,Ifat,x
1211,181,146,79,Harer,x
1212,54,148,126,Zeila,x
1213,182,150,173,Shoa,x
1214,54,152,32,Awsa,x
1215,182,154,79,Tajura,x
1216,54,156,126,Dar Nuba,x
1217,182,158,173,Fazughli,x
1218,54,32,32,Kefa,x
1219,183,34,79,Kordofan,x
1220,55,36,126,Dar Ja'al,x
1221,183,38,173,Taqali,x
1222,55,40,32,Gezira,x
1223,183,42,79,Gojjam,x
1224,55,44,126,Gonder,x
1225,183,246,173,Butana,x
1226,56,48,32,Taka,x
1227,184,50,79,Tigre,x
1228,56,252,126,Dongola,x
1229,184,54,173,Berber,x
1230,56,56,32,Massawa,x
1231,184,58,79,Ibrim,x
1232,56,60,126,Suakin,x
1233,185,62,173,Kargah,x
1234,57,164,32,Nubia,x
1235,185,66,79,Guam,x
1236,57,68,126,Rabaul,x
1237,185,70,173,Papua,x
1238,57,172,32,Solomon Islands,x
1239,185,74,79,Vanuatu,x
1240,58,76,126,Hawaii,x
1241,186,78,173,Kiribati,x
1242,58,180,32,Fiji,x
1243,186,82,79,Samoa,x
1244,58,84,126,Tahiti,x
1245,186,86,173,Irian,x
1246,58,188,32,Aorangi,x
1247,187,90,79,Corsica,x
1248,59,92,126,Maldives,x
1249,187,94,173,Yola,x
1250,1,200,200,V�nern,x
1251,2,200,250,V�ttern,x
1252,3,220,250,Gulf of Bothnia,x
1253,4,250,250,�lands Hav,x
1254,5,200,200,Gulf of Finland,x
1255,6,200,250,Western Baltic Sea,x
1256,7,220,250,Gulf of Riga,x
1257,8,250,250,Southern Baltic Sea,x
1258,9,200,200,�resund,x
1259,10,200,250,Kattegat,x
1260,11,220,250,Peipsi J�rv,x
1261,12,250,250,Ladoga,x
1262,13,200,200,Onega,x
1263,14,200,250,Barents Sea,x
1264,15,220,250,Lofoten Sea,x
1265,16,250,250,Northern Norwegian Sea,x
1266,17,200,200,Southern Norwegian Sea,x
1267,18,200,250,Skagerrack,x
1268,19,220,250,Helgoland Bight,x
1269,20,250,250,Coast of Holland,x
1270,21,200,200,Dogger Bank,x
1271,22,200,250,Straits of Dover,x
1272,23,220,250,The Channel,x
1273,24,250,250,Lands End,x
1274,25,200,200,Coast of Britanny,x
1275,26,200,250,Quiberon Bay,x
1276,27,220,250,Cote D'Argent,x
1277,28,250,250,Bay of Biscay,x
1278,29,200,200,Cantabrian Sea,x
1279,30,200,250,Tyne,x
1280,31,220,250,Firth of Forth,x
1281,32,250,250,The North Sea,x
1282,33,200,200,Moray Firth,x
1283,34,200,250,North Channel,x
1284,35,220,250,Irish Sea,x
1285,36,250,250,St. George's Channel,x
1286,37,200,200,Donegal Bay,x
1287,38,200,250,Dingle Bay,x
1288,39,220,250,Celtic Sea,x
1289,40,250,250,Western Approaches,x
1290,41,200,200,Finisterre Bay,x
1291,42,200,250,Lusitanian Sea,x
1292,43,220,250,Gulf of Cadiz,x
1293,44,250,250,Straits of Gibraltar,x
1294,45,200,200,Gulf of Almeira,x
1295,46,200,250,Gulf of Valencia,x
1296,47,220,250,Gulf of Lion,x
1297,48,250,250,Cote D'Azur,x
1298,49,200,200,Ligurian Sea,x
1299,50,200,250,Gulf of Mallocra,x
1300,51,220,250,Western Mediterranean,x
1301,52,250,250,Barbary Coast,x
1302,53,200,200,Cape Bon,x
1303,54,200,250,Tyrrenean Sea,x
1304,55,220,250,Bay of Naples,x
1305,56,250,250,Gulf of Gabes,x
1306,57,200,200,Malta Channel,x
1307,58,200,250,Straits of Messina,x
1308,59,220,250,Gulf of Venice,x
1309,60,250,250,Adriatic Sea,x
1310,61,200,200,Straits of Otranto,x
1311,62,200,250,Gulf of Taranto,x
1312,63,220,250,Ionian Sea,x
1313,64,250,250,Gulf of Sirte,x
1314,65,200,200,Gulf of Tobruk,x
1315,66,200,250,Bay of Alexandrian,x
1316,67,220,250,Palestinian Coast,x
1317,68,250,250,Gulf of Cyprus,x
1318,69,200,200,Sea of Crete,x
1319,70,200,250,Aegean Sea,x
1320,71,220,250,Sea of Marmara,x
1321,72,250,250,Gulf of Varna,x
1322,73,200,200,Gulf of Odessa,x
1323,74,200,250,Sea of Azov,x
1324,75,220,250,Eastern Black Sea,x
1325,76,250,250,Lake Balaton,x
1326,77,200,200,Caspian Sea,x
1327,78,200,250,Aral Sea,x
1328,79,220,250,Gulf of Suez,x
1329,80,250,250,Red Sea,x
1330,81,200,200,Straits of Obokk,x
1331,82,200,250,Bal el Mandeb,x
1332,83,220,250,Coast of Mascate,x
1333,84,250,250,Mascate Coast,x
1334,85,200,200,Straits of Hormuz,x
1335,86,200,250,Persian Gulf,x
1336,87,220,250,Gulf of Indus,x
1337,88,250,250,Gulf of Gujarat,x
1338,89,200,200,Laquedive Islands,x
1339,90,200,250,Coast of Malabar,x
1340,91,220,250,Comorin Cape,x
1341,92,250,250,Coast of Caramandel,x
1342,93,200,200,Coast of Orissa,x
1343,94,200,250,Ganges Delta,x
1344,95,220,250,Akyab Bay,x
1345,96,250,250,Irrawady Delta,x
1346,97,200,200,Andaman Sea,x
1347,98,200,250,Mergui Archipelago,x
1348,99,220,250,Straits of Malacca,x
1349,100,250,250,Nicobar Isles,x
1350,101,200,200,Coast of Atjeh,x
1351,102,200,250,Coast of Sumatra,x
1352,103,220,250,Christmas Island,x
1353,104,250,250,Coast of Java,x
1354,105,200,200,Coast of Surabaya,x
1355,106,200,250,Straits of Lombok,x
1356,107,220,250,Timor Sea,x
1357,108,250,250,The Moluccas,x
1358,109,200,200,Java Sea,x
1359,110,200,250,Straits of Makassar,x
1360,111,220,250,Karimata Strait,x
1361,112,250,250,Straits of Johore,x
1362,113,200,200,Malayan Sea,x
1363,114,200,250,Coast of Sarawk,x
1364,115,220,250,Mekong Delta,x
1365,116,250,250,Gulf of Siam,x
1366,117,200,200,Cam Rah Bay,x
1367,118,200,250,South China Sea,x
1368,119,220,250,Coast of Brunei,x
1369,120,250,250,Coast of Annam,x
1370,121,200,200,Gulf of Tonkin,x
1371,122,200,250,Guanghou Bay,x
1372,123,220,250,Taiwan Strait,x
1373,124,250,250,Yang Tse Delta,x
1374,125,200,200,Yellow Sea,x
1375,126,200,250,Korea Bay,x
1376,127,220,250,South Korean Sea,x
1377,0,251,251,North Korean Sea,x
1378,1,201,201,Coast of Olga,x
1379,2,201,251,Tatar Straits,x
1380,3,221,251,Amur Delta,x
1381,4,251,251,Baj of Ayan,x
1382,5,201,201,Bay of Komenskoie,x
1383,6,201,251,Coast of Kamchatska,x
1384,7,221,251,Oktothsk Sea,x
1385,8,251,251,Coast Sahkalin,x
1386,9,201,201,Soya Strait,x
1387,10,201,251,Tsugaru Strait,x
1388,11,221,251,Yamato Basin,x
1389,12,251,251,Amakusa Sea,x
1390,13,201,201,Setto Inland Sea,x
1391,14,201,251,Tokai Sea,x
1392,15,221,251,Ryukyu Islands,x
1393,16,251,251,Luzon Strait,x
1394,17,201,201,Paracel Islands,x
1395,18,201,251,Manila Bay,x
1396,19,221,251,Coast of Luzon,x
1397,20,251,251,Gulf of Leyte,x
1398,21,201,201,Sulu Sea,x
1399,22,201,251,Sea of Celebes,x
1400,23,221,251,Sea of Ternete,x
1401,24,251,251,Sea of Banda,x
1402,25,201,201,Philipine Sea,x
1403,26,201,251,Palau Islands,x
1404,27,221,251,Biak Bay,x
1405,28,251,251,Vilian Strait,x
1406,29,201,201,Trobrian Islands,x
1407,30,201,251,Torres Strait,x
1408,31,221,251,Arafuam Sea,x
1409,32,251,251,Kolepom Bay,x
1410,33,201,201,Gulf of Carpentaria,x
1411,34,201,251,Great Barrier Reef,x
1412,35,221,251,Capricorn Bay,x
1413,36,251,251,Cape Howe,x
1414,37,201,201,Bass Strait,x
1415,38,201,251,Kangaroo Island,x
1416,39,221,251,Great Australian Bight,x
1417,40,251,251,Cape Leuwiin,x
1418,41,201,201,Shark Bay,x
1419,42,201,251,Northwest Cape,x
1420,43,221,251,King Sound,x
1421,44,251,251,Tasman Sea,x
1422,45,201,201,Southern Tasman Sea,x
1423,46,201,251,Cook Strait,x
1424,47,221,251,Northern Tasman Sea,x
1425,48,251,251,Cape Farwell,x
1426,49,201,201,Coast of New Zealand,x
1427,50,201,251,Cantebury Bight,x
1428,51,221,251,Sea of Antarctica,x
1429,52,251,251,New Caledonian Sea,x
1430,53,201,201,Coral Sea,x
1431,54,201,251,Gilbert Sea,x
1432,55,221,251,Solomon Sea,x
1433,56,251,251,Nauru Island,x
1434,57,201,201,Melanesia Sea,x
1435,58,201,251,Micronesia Sea,x
1436,59,221,251,Yap Islands,x
1437,60,251,251,Mariana Islands,x
1438,61,201,201,Tinian Sea,x
1439,62,201,251,Iwo Jima Sea,x
1440,63,221,251,Sanriku Coast,x
1441,64,251,251,The Kuriles,x
1442,65,201,201,Bay of Uka,x
1443,66,201,251,Bay of Oljut,x
1444,67,221,251,Bay of Anadyr,x
1445,68,251,251,Bering Sea,x
1446,69,201,201,Horn of Africa,x
1447,70,201,251,Coast of Pepper,x
1448,71,221,251,Zanzibar Strait,x
1449,72,251,251,Mozambique Channel,x
1450,73,201,201,Diego Suarez Bay,x
1451,74,201,251,Western Arabian Sea,x
1452,75,221,251,Eastern Arabian Sea,x
1453,76,251,251,The Seychelles,x
1454,77,201,201,Coast of Tamatave,x
1455,78,201,251,The Mascareignes,x
1456,79,221,251,Gulf of Zambeze,x
1457,80,251,251,Coast of Natal,x
1458,81,201,201,Coast of Transkei,x
1459,82,201,251,Coast of Ciskei,x
1460,83,221,251,Cape of Good Hope,x
1461,84,251,251,Coast of Namibia,x
1462,85,201,201,Coast of Angola,x
1463,86,201,251,Gulf of Kongo,x
1464,87,221,251,Coast of Cameroon,x
1465,88,251,251,Gulf of Nigeria,x
1466,89,201,201,Ivory Coast,x
1467,90,201,251,Gold Coast,x
1468,91,221,251,Coast of Gamvia,x
1469,92,251,251,Coast of Guinea,x
1470,93,201,201,Maueretanian Coast,x
1471,94,201,251,Canarian Sea,x
1472,95,221,251,Coast of Morocco,x
1473,96,251,251,Jan Mayen Sea,x
1474,97,201,201,Spitzberg Sea,x
1475,98,201,251,Icelandic Sea,x
1476,99,221,251,Shetland Straits,x
1477,100,251,251,Coast of Iceland,x
1478,101,201,201,Northeastern Atlantic,x
1479,102,201,251,Rockall,x
1480,103,221,251,Denmark Strait,x
1481,104,251,251,Eastern Coast of Greenland,x
1482,105,201,201,Western Coast of Greenland,x
1483,106,201,251,Labrador Strait,x
1484,107,221,251,Baffin Bay,x
1485,108,251,251,Hudson Straits,x
1486,109,201,201,James Bay,x
1487,110,201,251,Western Hudson Bay,x
1488,111,221,251,Eastern Hudson Bay,x
1489,112,251,251,Foxe Bassin,x
1490,113,201,201,Gulf of St. Lawrence,x
1491,114,201,251,Cabot Strait,x
1492,115,221,251,Bay of Fundy,x
1493,116,251,251,Strait of Belle Isle,x
1494,117,201,201,Fortune Bay,x
1495,118,201,251,Notre Dame Bay,x
1496,119,221,251,Labrador Sea,x
1497,120,251,251,Greenland Sea,x
1498,121,201,201,Northern Atlantic,x
1499,122,201,251,Masschusetts Bay,x
1500,123,221,251,Chesapaeake Bay,x
1501,124,251,251,Cape Hatteras,x
1502,125,201,201,Coast of Carolina,x
1503,126,201,251,Coast of Florida,x
1504,127,221,251,Sea of Sargassos,x
1505,0,252,252,Florida Straits,x
1506,1,202,202,Apalachee Bay,x
1507,2,202,252,Mobile Bay,x
1508,3,222,252,Galveston Bay,x
1509,4,252,252,Tampico Bay,x
1510,5,202,202,Yucatan Sea,x
1511,6,202,252,Gulf of Mexico,x
1512,7,222,252,Yucatan Channel,x
1513,8,252,252,Belize Bay,x
1514,9,202,202,Moscitos Coast,x
1515,10,202,252,Gulf of Darien,x
1516,11,222,252,Jamica Channel,x
1517,12,252,252,Central Carribean,x
1518,13,202,202,Northwestern Carribean,x
1519,14,202,252,Venezualan Gulf,x
1520,15,222,252,Venezuelan Sea,x
1521,16,252,252,Eastern Carribean,x
1522,17,202,202,Windward Islands,x
1523,18,202,252,Lesser Antilles,x
1524,19,222,252,Turks & Caicos Sea,x
1525,20,252,252,Coast of Cuba,x
1526,21,202,202,Coast of Hispaniola,x
1527,22,202,252,Guyana Coast,x
1528,23,222,252,Bay of Belem,x
1529,24,252,252,Amazonas Gulf,x
1530,25,202,202,Coast of Brazil,x
1531,26,202,252,Coast of Recife,x
1532,27,222,252,Coast of Pernambuc,x
1533,28,252,252,Todos Santos Bay,x
1534,29,202,202,Rio De Janeiro,x
1535,30,202,252,Baia Parangua,x
1536,31,222,252,Rio De La Plata,x
1537,32,252,252,Bahia Blanca,x
1538,33,202,202,Coast of Patagonia,x
1539,34,202,252,Magellan Strait,x
1540,35,222,252,South Chilean Coast,x
1541,36,252,252,Coast of Chile,x
1542,37,202,202,Atacama Coast,x
1543,38,202,252,Arica Gulf,x
1544,39,222,252,Arequipa Bay,x
1545,40,252,252,Coast of Peru,x
1546,41,202,202,Guayaguil Bay,x
1547,42,202,252,Coast of Ecuador,x
1548,43,222,252,Gulf of Panama,x
1549,44,252,252,Bay of Costa Rica,x
1550,45,202,202,Acapulco Bay,x
1551,46,202,252,Manzazilla Bay,x
1552,47,222,252,Mazatlan Bay,x
1553,48,252,252,Gulf of California,x
1554,49,202,202,Coast of Baja,x
1555,50,202,252,Coast of California,x
1556,51,222,252,Santa Catalina Islands,x
1557,52,252,252,Coast of Oregon,x
1558,53,202,202,Coast of Columbia,x
1559,54,202,252,Hecate Strait,x
1560,55,222,252,Gulf of Alaska,x
1561,56,252,252,Coast of Alaska,x
1562,57,202,202,Kuskowim Bay,x
1563,58,202,252,Hatton Bank,x
1564,59,222,252,Eastern Gibbs Fracture,x
1565,60,252,252,Western Gibbs Fracture,x
1566,61,202,202,Iberian Shelf,x
1567,62,202,252,Sea of Azores,x
1568,63,222,252,Corner Seamounts,x
1569,64,252,252,New England Seamounts,x
1570,65,202,202,Sable Island Bank,x
1571,66,202,252,Blake Plataeu,x
1572,67,222,252,West Bermuda Sea,x
1573,68,252,252,East Bermuda Sea,x
1574,69,202,202,Some Funny Seaname,x
1575,70,202,252,Northern Guiana Basin,x
1576,71,222,252,Guiana Basin,x
1577,72,252,252,Southern Guiana Basin,x
1578,73,202,202,Canary Approach,x
1579,74,202,252,Cap Verde Approach,x
1580,75,222,252,Central Atlantic #1,x
1581,76,252,252,Central Atlantic #2,x
1582,77,202,202,Central Atlantic #3,x
1583,78,202,252,Central Atlantic #4,x
1584,79,222,252,Romanche Gap,x
1585,80,252,252,East Guinea Basin,x
1586,81,202,202,West Guinea Basin,x
1587,82,202,252,Coast of Falklands,x
1588,83,222,252,New Georgia Islands,x
1589,84,252,252,Western Atlantic #1,x
1590,85,202,202,Western Atlantic #2,x
1591,86,202,252,Western Atlantic #3,x
1592,87,222,252,Western Atlantic #4,x
1593,88,252,252,Western Atlantic #5,x
1594,89,202,202,Western Atlantic #6,x
1595,90,202,252,East of Magellans,x
1596,91,222,252,Central Atlantic #5,x
1597,92,252,252,Central Atlantic #6,x
1598,93,202,202,Central Atlantic #7,x
1599,94,202,252,Central Atlantic #8,x
1600,95,222,252,Eastern Atlantic #1,x
1601,96,252,252,Eastern Atlantic #2,x
1602,97,202,202,Eastern Atlantic #3,x
1603,98,202,252,Eastern Atlantic #4,x
1604,99,222,252,Eastern Atlantic #5,x
1605,100,252,252,Eastern Atlantic #6,x
1606,101,202,202,Southern Atlantic #1,x
1607,102,202,252,Southern Atlantic #2,x
1608,103,222,252,Southern Atlantic #3,x
1609,104,252,252,Southern Atlantic #4,x
1610,105,202,202,Cape of Storms,x
1611,106,202,252,Gulf of Bengal,x
1612,107,222,252,Northen Bay of Bengal,x
1613,108,252,252,Southern Bay of Bengal,x
1614,109,202,202,Ceylon Sea,x
1615,110,202,252,Coast of Maldives,x
1616,111,222,252,Indian Ocean #1,x
1617,112,252,252,Indian Ocean #2,x
1618,113,202,202,Indian Ocean #3,x
1619,114,202,252,Indian Ocean #4,x
1620,115,222,252,Indian Ocean #5,x
1621,116,252,252,Indian Ocean #6,x
1622,117,202,202,Indian Ocean #7,x
1623,118,202,252,Indian Ocean #8,x
1624,119,222,252,Indian Ocean #9,x
1625,120,252,252,Indian Ocean #10,x
1626,121,202,202,Indian Ocean #11,x
1627,122,202,252,Indian Ocean #12,x
1628,123,222,252,Indian Ocean #13,x
1629,124,252,252,Indian Ocean #14,x
1630,125,202,202,Indian Ocean #15,x
1631,126,202,252,Indian Ocean #16,x
1632,127,222,252,Indian Ocean #17,x
1633,0,253,253,Indian Ocean #18,x
1634,1,203,203,Indian Ocean #19,x
1635,2,203,253,Indian Ocean #20,x
1636,3,223,253,Indian Ocean #21,x
1637,4,253,253,Indian Ocean #22,x
1638,5,203,203,Indian Ocean #23,x
1639,6,203,253,Indian Ocean #24,x
1640,7,223,253,Indian Ocean #25,x
1641,8,253,253,Indian Ocean #26,x
1642,9,203,203,Indian Ocean #27,x
1643,10,203,253,Indian Ocean #28,x
1644,11,223,253,Indian Ocean #29,x
1645,12,253,253,Indian Ocean #30,x
1646,13,203,203,Indian Ocean #31,x
1647,14,203,253,Indian Ocean #32,x
1648,15,223,253,Lake Tchad,x
1649,16,253,253,Lake Victoria,x
1650,17,203,203,Lake Tangayika,x
1651,18,203,253,Lake Malawi,x
1652,19,223,253,White Sea,x
1653,20,253,253,Lake Balchasj,x
1654,21,203,203,Lake Bajkal,x
1655,22,203,253,Poyang Lake,x
1656,23,223,253,Lake Titicaca,x
1657,24,253,253,Lake Nicaragua,x
1658,25,203,203,Everglades,x
1659,26,203,253,Lake Ontario,x
1660,27,223,253,Lake Erie,x
1661,28,253,253,Lake Huron,x
1662,29,203,203,Lake Michigan,x
1663,30,203,253,Lake Superior,x
1664,31,223,253,Lake Nipigon,x
1665,32,253,253,Lake Winnipeg,x
1666,33,203,203,Western Pacific #1,x
1667,34,203,253,Western Pacific #2,x
1668,35,223,253,Western Pacific #3,x
1669,36,253,253,Western Pacific #4,x
1670,37,203,203,Western Pacific #5,x
1671,38,203,253,Western Pacific #6,x
1672,39,223,253,Western Pacific #7,x
1673,40,253,253,Western Pacific #8,x
1674,41,203,203,Western Pacific #9,x
1675,42,203,253,Western Pacific #10,x
1676,43,223,253,Western Pacific #11,x
1677,44,253,253,Northern Pacific #1,x
1678,45,203,203,Northern Pacific #2,x
1679,46,203,253,Northern Pacific #3,x
1680,47,223,253,Northern Pacific #4,x
1681,48,253,253,Northern Pacific #5,x
1682,49,203,203,Northern Pacific #6,x
1683,50,203,253,Northern Pacific #7,x
1684,51,223,253,Northern Pacific #8,x
1685,52,253,253,Northern Pacific #9,x
1686,53,203,203,Northern Pacific #10,x
1687,54,203,253,Central Pacific #1,x
1688,55,223,253,Central Pacific #2,x
1689,56,253,253,Central Pacific #3,x
1690,57,203,203,Central Pacific #4,x
1691,58,203,253,Central Pacific #5,x
1692,59,223,253,Central Pacific #6,x
1693,60,253,253,Central Pacific #7,x
1694,61,203,203,Central Pacific #8,x
1695,62,203,253,Central Pacific #9,x
1696,63,223,253,Central Pacific #10,x
1697,64,253,253,Coast of Hawaii,x
1698,65,203,203,Central Pacific #11,x
1699,66,203,253,Central Pacific #12,x
1700,67,223,253,Eastern Pacific #1,x
1701,68,253,253,Eastern Pacific #2,x
1702,69,203,203,Eastern Pacific #3,x
1703,70,203,253,Eastern Pacific #4,x
1704,71,223,253,Eastern Pacific #5,x
1705,72,253,253,Eastern Pacific #6,x
1706,73,203,203,Eastern Pacific #7,x
1707,74,203,253,Eastern Pacific #8,x
1708,75,223,253,Eastern Pacific #9,x
1709,76,253,253,Eastern Pacific #10,x
1710,77,203,203,Eastern Pacific #11,x
1711,78,203,253,Eastern Pacific #12,x
1712,79,223,253,Eastern Pacific #13,x
1713,80,253,253,Eastern Pacific #14,x
1714,81,203,203,Eastern Pacific #15,x
1715,82,203,253,Eastern Pacific #16,x
1716,83,223,253,Eastern Pacific #17,x
1717,85,203,203,Southern Pacifc #1,x
1718,86,203,253,Southern Pacifc #2,x
1719,87,223,253,Southern Pacifc #3,x
1720,88,253,253,Southern Pacifc #4,x
1721,89,203,203,Southern Pacifc #5,x
1722,90,203,253,Southern Pacifc #6,x
1723,91,223,253,Southern Pacifc #7,x
1724,92,253,253,Southern Pacifc #8,x
1725,93,203,203,Southern Pacifc #9,x
1726,94,203,253,Southern Pacifc #10,x
1727,95,223,253,Southern Pacifc #11,x
1728,96,253,253,Southern Pacifc #12,x
1729,97,203,203,Southern Pacifc #13,x
1730,98,203,253,Southern Pacifc #14,x
1731,99,223,253,Southern Pacifc #15,x
1732,100,253,253,Southern Pacifc #16,x
1733,101,203,203,Southern Pacifc #17,x
1734,102,203,253,Southern Pacifc #18,x
1735,103,223,253,Southern Pacifc #19,x
1736,104,203,203,Southern Pacifc #20,x
1737,106,203,253,Southern Pacifc #22,x
1738,107,223,253,Southern Pacifc #23,x
1739,108,253,253,Southern Pacifc #24,x
1740,109,203,203,Southern Pacifc #25,x
1741,110,203,253,Southern Pacifc #26,x
1742,66,68,126,Limburg,x
1743,194,70,173,Cambray,x
1744,66,72,32,Antwerpen,x
1745,195,74,79,Cantabria,x
1746,67,76,126,Burgos,x
1747,195,78,173,Caceres,x
1748,67,80,32,La Mancha,x
1749,195,82,79,Cadiz,x
1750,67,84,126,Alicante,x
1751,195,86,173,Ceuta,x
1752,68,88,32,Rzhev,x
1753,196,90,79,Kostroma,x
1754,68,92,126,Orel,x
1755,196,94,173,Ustyug,x
1756,68,96,32,Budjak,x
1757,196,98,79,Oberpfalz,x
1758,68,100,126,Hannover,x
1759,197,102,173,Potsdam,x
1760,69,104,32,Koblenz,x
1761,197,106,79,Alzey,x
1762,69,108,126,Kassel,x
1763,197,110,173,Niederlausitz,x
1764,69,112,32,Burgas,x
1765,197,114,79,Nis,x
1766,70,116,126,Kosovo,x
1767,198,118,173,Osijek,x
1768,70,120,32,Lienz,x
1769,198,122,79,G�rz,x
1770,70,124,126,Ostmarch,x
1771,198,126,173,Erz,x
1772,70,128,32,Presburg,x
1773,199,130,79,Achaea,x
1774,71,132,126,Treviso,x
1775,199,134,173,Holstein,x
1776,71,136,32,Karelia,x
1777,199,138,79,Kola,x
1778,71,140,126,Kasimov,x
1779,199,142,173,Rub' al Khali,x
1780,72,144,32,Komi,x
1781,200,146,79,Western Siberia,x
1782,72,148,126,Eastern Siberia,x
1783,200,150,173,Koryak,x
1784,72,152,32,Tiam Shan,x
1785,200,154,79,Karakoram,x
1786,72,156,126,Takla Makan,x
1787,201,158,173,Himalaya,x
1788,73,32,32,Arunachal,x
1789,201,34,79,Maoke,x
1790,73,36,126,Western Australia,x
1791,201,38,173,Central Australia,x
1792,201,42,79,Antananarivo,x
1793,74,44,126,El Djouf,x
1794,202,46,173,Central Sahara,x
1795,74,48,32,East Sahara,x
1796,202,50,79,Central Africa,x
1797,74,52,126,Inner Kongo,x
1798,202,54,173,Uganda,x
1799,74,56,32,Malawi,x
1800,203,58,79,Zambia,x
1801,75,60,126,Kalahari,x
1802,203,62,173,Northern Amazonas,x
1803,75,64,32,Southern Amazonas,x
1804,203,66,79,Greenland,x
1805,75,68,126,Qu�bec,x
1806,203,70,173,Weagamow,x
1807,76,72,32,Baffin Island,x
1808,204,74,79,Great Basin,x
1809,76,76,126,Great Plains,x
1810,204,78,173,Alaska,x
1811,76,80,32,Nunavut,x
1812,204,82,79,Northwest Territories,x
1813,76,84,126,Saskatchewan,x
1814,205,86,173,Columbia,x
1815,77,88,32,Ayeyarwady,x
1816,205,90,79,Hejian,x
1817,77,92,126,Nan,x
1818,205,94,173,Chikuzen,x
1819,77,96,32,Tosa,x
1820,205,98,79,Awa,x
1821,78,100,126,Nanjing,x
1822,206,102,173,Shangai,x
1823,78,104,32,Stung Treng,x
1824,206,106,79,Wenzhou,x
1825,78,108,126,Aki,x
1826,206,110,173,Lika,x
1827,78,112,32,Raska,x
1828,207,114,79,Soli,x
1829,79,116,126,Xiamen,x
1830,207,118,173,Tajima,x
1831,79,120,32,Travunia,x
1832,207,122,79,Yamato,x
1833,79,124,126,Ji'an,x
1834,207,126,173,Dorpat,x
1835,80,128,32,Mino,x
1836,208,130,79,Nanyang,x
1837,80,132,126,Etchu,x
1838,208,134,173,Hefei,x
1839,80,136,32,Totomi,x
1840,208,138,79,Guilin,x
1841,80,140,126,Marienburg,x
1842,209,142,173,Narva,x
1843,81,144,32,Kozuke,x
1844,209,146,79,Xiankhouang,x
1845,81,148,126,Uiji,x
1846,209,150,173,Yozgat,x
1847,81,152,32,Shiribeshi,x
1848,209,154,79,Hamid,x
1849,82,156,126,Hamah ,x
1850,210,158,173,Mudanjiang,x
1851,82,32,32,Ribatejo,x
1852,210,34,79,Tokachi,x
1853,82,36,126,Kozani,x
1854,210,38,173,Negev,x
1855,82,40,32,Sidon,x
1856,211,42,79,Abkhazia,x
1857,83,44,126,Lauenburg,x
1858,211,46,173,Stettin,x
1859,83,48,32,Torun,x
1860,211,50,79,Norfolk,x
1861,83,52,126,Derby,x
1862,211,54,173,Cremona,x
1863,84,56,32,Graz,x
1864,212,58,79,Somogy,x
1865,84,60,126,Ghent,x
1866,212,62,173,Namur ,x
1867,84,64,32,Freiburg,x
1868,212,66,79,Augsburg,x
1869,84,68,126,Z�rich,x
1870,213,70,173,S:t Gallen,x
1871,85,72,32,Wallis,x
1872,86,84,126,Ulm,x
1873,85,76,126,Chur,x
1874,213,78,173,Bremen,x
1875,142,110,192,Turin,x
1876,213,82,79,Frankfurt,x
1877,86,92,126,Charolais,x
1878,214,86,173,Aachen,x
1879,86,88,32,Alencon,x
1880,214,90,79,Sundgau,x
1881,213,74,79,St. Barth�lemy,x
1882,214,94,173,B�ne,x
1883,0,0,232,Western Finish lakes,x
1884,1,0,236,East Finish lakes,x
1885,2,0,240,Central finish lakes,x
1886,3,0,244,Storavan,x
1887,4,0,248,Storsjon,x
1888,5,0,232,Kara Sea,x
1889,6,0,236,Lake geneva,x
1890,7,0,240,Bodensee,x
1891,8,0,244,Tuz Gola,x
1892,9,0,248,Lake Van,x
1893,10,0,232,Lake Daryacheh,x
1894,11,0,236,Sevan Lake,x
1895,12,0,240,Lake Taihu,x
1896,13,0,244,Lake Hongze,x
1897,14,0,248,Dongting,x
1898,15,0,232,Tonie Sap Lake,x
1899,16,0,236,Tana lake,x
1900,17,0,240,Lake Turkana,x
1901,18,0,244,Lake Volta,x
1902,19,0,248,Lake Poopo,x
1903,20,0,232,Lake Champlain,x
1904,21,0,236,Lac Saint Jean,x
1905,22,0,240,Lac Manicouagan,x
1906,23,0,244,Lac Michikamau,x
1907,24,0,248,Lac Bienville,x
1908,25,0,232,Lac Al Eau Claire,x
1909,26,0,236,Lac Minto,x
1910,27,0,240,La Grande Riviere,x
1911,28,0,244,Lake Island,x
1912,29,0,248,Lake Reindeer,x
1913,30,0,232,Wollaston Lake,x
1914,31,0,236,Great Slave Lake,x
1915,32,0,240,Lake Athabasca,x
1916,33,0,244,Dubawni Lake,x
1917,34,0,248,Yathkyed Lake,x
1918,35,0,232,Kasba Lake,x
1919,36,0,236,Nueltin Lake,x
1920,37,0,240,Wholdaia Lake,x
1921,38,0,244,Peter Pond Lake,x
1922,39,0,248,Great salt lake,x
1923,40,0,232,Williston Lake,x
1924,62,206,252,Greenland tip,x
1925,62,214,252,B�lt sound,x
1926,62,230,252,Northern baltic sea,x
1927,62,218,252,Eastern baltic sea,x
1928,62,234,252,Western Alands sea,x
1929,62,210,252,Western Norwegian Sea,x
1930,110,40,32,�land,x
1931,130,60,50,East Frisia,x
1932,49,150,248,Gulf of Satalia,x
1933,50,0,232,Bari,x
1934,251,0,36,Lucania,x
1935,52,0,240,Semigallia,x
1936,55,0,0,Kovno,x
1937,65,0,250,Grodno,x
1938,75,0,25,Wizna,x 
1939,85,0,225,Leczyca,x
1940,95,0,50,Belz,x
1941,105,0,200,Turov,x
1942,110,0,75,Zhytomyr,x
1943,115,0,175,Bratslav,x
1944,120,0,100,Cherkasy,x
1945,125,0,150,Novgorod-Seversky,x
1946,63,0,244,Desh,x
1947,64,0,248,Carnatic,x
1948,65,0,232,Bidar,x
1949,66,0,236,Rayalaseema,x
1950,67,0,240,Meghalaya,x
1951,68,0,244,Hunyad,x
1952,69,0,248,Maramaros,x
1953,70,0,232,Szabolcs,x
1954,71,0,236,Torontal,x
1955,72,0,240,Kholmogory,x
1956,73,0,244,Suzdal,x
1957,74,0,248,Galich,x
1958,75,0,232,Kargopol,x
1959,76,0,236,Torzhok,x
1960,77,0,240,Ostrov,x
1961,78,0,244,Ladoga,x
1962,79,0,248,Kudymkar,x
1963,80,0,232,Cherdyn,x
1964,81,0,236,Ust-Sysolsk,x
1965,88,116,126,Buzuluk,x
1966,216,118,173,Chelyaba,x
1967,217,126,173,Khujand,x
1968,89,128,32,Kulob,x
1969,216,122,79,Sozak,x
1970,88,120,32,Syghnak,x
1971,88,112,32,Tsaritsyn,x
1972,216,114,79,Udmurtia,x
1973,88,124,126,Urgench,x
1974,215,110,173,Yedishkul,x
1975,105,225,255,Sea of Jutland,x
1976,93,0,244,Dead Sea,x
1977,94,0,248,M�laren,x
1978,95,0,232,Shetlands,x
1979,96,0,236,F�r�arnax,x
1980,136,253,253,Sea of Japan,x
1981,98,0,244,Bornholm,x
1982,99,0,248,Blekinge,x
1983,100,0,232,Lolland,x
1984,101,0,236,Nordjylland,x
1985,102,240,0,N�rke,x
1986,103,0,244,New Caledonia,x
1987,104,0,248,Society Islands,x
1988,105,0,232,Rapa Nui,x
1989,106,0,236,Tonga,x
1990,107,0,240,Tuvalu,x
1991,108,0,244,Gilbert Islands,x
1992,109,0,248,Nauru,x
1993,110,0,232,Marshall Islands,x
1994,111,0,236,Wake,x
1995,112,0,240,Micronesia,x
1996,113,0,244,Palau,x
1997,114,0,248,Midway,x
1998,115,0,232,Christmas Island,x
1999,116,0,236,Cocos Island,x
2000,60,221,221,Qinghai Lake,x
2001,95,200,200,Siling Lake,x
2002,200,135,255,Gal�pagos Islands,x
2003,255,1,40,Djibouti,x
2004,255,2,120,Al Qusayr,x
2005,255,3,160,Lappland,x
2006,255,4,40,Suceava,x
2007,255,5,120,Salonica,x
2008,255,6,160,Singapore,x
2009,255,7,40,Sarawak,x
2010,255,8,120,Arlon,x
2011,255,9,160,Oujda,x
2012,255,10,40,Komotini,x
2013,255,11,120,Dobruja,x
2014,255,12,160,Hongkong,x
2015,255,13,40,Gambia,x
2016,255,14,120,Togo,x
2017,255,15,160,Ribe,x
2018,255,16,40,Oversticht,x
2019,255,17,120,Qingdao,x
2020,255,18,160,Dalian,x
2021,255,19,40,Swaziland,x
2022,255,20,120,Lesotho,x
2023,255,21,160,Mpumalanga,x
2024,91,32,32,Botswana,x
2025,219,34,79,Okavango,x
2026,91,36,126,Cuando Cubango,x
2027,219,38,173,Moxico,x
2028,92,40,32,Lusaka,x
2029,220,42,79,Niassa,x
2030,92,44,126,Mbeya,x
2031,220,46,173,Matabeleland,x
2032,92,48,32,Katanga,x
2033,220,50,79,Kivu,x
2034,92,52,126,Burundi,x
2035,221,54,173,Rwanda,x
2036,93,56,32,Uganda,x
2037,221,58,79,Kinshasa,x
2038,93,60,126,Ogooue,x
2039,221,62,173,Likouala,x
2040,93,64,32,Equatorial Guinea,x
2041,221,66,79,Maroua,x
2042,94,68,126,Cameroon,x
2043,222,70,173,Bangui,x
2044,94,72,32,Borena,x
2045,222,74,79,South Sudan,x
2046,94,76,126,Ouaddai,x
2047,222,78,173,West Darfur,x
2048,94,80,32,Tibesti,x
2049,223,82,79,Niger,x
2050,95,84,126,Ahaggar,x
2051,223,86,173,Fashoda,x
2052,95,88,32,Grand Erg,x
2053,223,90,79,Agadez,x
2054,95,92,126,Shamal Darfur,x
2055,223,94,173,Sabha,x
2056,96,96,32,Borkou,x
2057,224,98,79,Kisangani,x
2058,96,100,126,Kasai,x
2059,224,102,173,Bandundu,x
2060,96,104,32,Comores,x
2061,224,106,79,Adrar,x
2062,96,108,126,Tademait,x
2063,225,110,173,Tindouf,x
2064,97,112,32,Juba,x
2065,225,114,79,Logone,x
2066,97,116,126,Adamaoua,x
2067,225,118,173,Iquitos,x
2068,97,120,32,Inner Colombia,x
2069,225,122,79,Upper Orinoco,x
2070,98,124,126,Tucurui,x
2071,226,126,173,Roraima,x
2072,98,128,32,Tocantins,x
2073,226,130,79,Rondonia,x
2074,98,132,126,Manaus,x
2075,226,134,173,Para,x
2076,98,136,32,Acre,x
2077,227,138,79,South Georgia,x
2078,99,140,126,Washington,x
2079,227,142,173,Oregon,x
2080,99,144,32,Nevada,x
2081,227,146,79,Idaho,x
2082,99,148,126,Great Salt Lake,x
2083,227,150,173,Utah,x
2084,100,152,32,Colorado,x
2085,228,154,79,Wyoming,x
2086,100,156,126,Regina,x
2087,228,158,173,Alberta,x
2088,100,32,32,Yukon,x
2089,228,34,79,North Quebec,x
2090,100,36,126,West Greenland,x
2091,229,38,173,Rocky Mountains,x
2092,101,40,32,Calgary,x
2093,229,42,79,Saskatoon,x
2094,101,44,126,Edmonton,x
2095,229,46,173,West Timor,x
2096,101,48,32,Nyamal,x
2097,229,50,79,Nullarbor,x
2098,102,52,126,Watjarri,x
2099,230,54,173,Nawu,x
2100,102,56,32,Wudjari,x
2101,230,58,79,Nyikina,x
2102,102,60,126,Ngarinyin,x
2103,230,62,173,Larrakia,x
2104,102,64,32,Yolngu,x
2105,231,66,79,Kurtjar,x
2106,103,68,126,Kokowarra,x
2107,231,70,173,Djirbalngan,x
2108,103,72,32,Biri,x
2109,231,74,79,Kalaamaya,x
2110,103,76,126,Andyamathanha,x
2111,231,78,173,Wangkumara,x
2112,104,80,32,Kuungkari,x
2113,232,82,79,Yirandali,x
2114,104,84,126,Mudburra,x
2115,232,86,173,Uluru,x
2116,104,88,32,Warluwarra,x
2117,232,90,79,Wawula,x
2118,104,92,126,Nenets,x
2119,233,94,173,Norilsk,x
2120,105,96,32,St. Vincent,x
2121,233,98,79,Nis,x
2122,105,100,126,Jammu,x
2123,233,102,173,Sao Tome,x
2124,105,104,32,Ubykhia,x
2125,233,106,79,Lesbos,x
2126,106,108,126,Kalanga,x
2127,234,110,173,Ndola,x
2128,106,112,32,Bamenda,x
2129,234,114,79,Ouham,x
2130,106,116,126,Kuwait,x
2131,234,118,173,Ktunaxa,x
2132,106,120,32,Arikara,x
2133,235,122,79,Lakota,x
2134,107,124,126,Oglala,x
2135,235,126,173,Connecticut,x
2136,107,128,32,Manahoac,x
2137,235,130,79,Arsigantegok,x
2138,107,132,126,Kennebec,x
2139,235,134,173,Natchitoches,x
2140,108,136,32,Nipigon,x
2141,236,138,79,Bungi,x
2142,108,140,126,Nehiyawawin,x
2143,236,142,173,Miwok,x
2144,108,144,32,Apsaalooke,x
2145,236,146,79,Haida,x
2146,108,148,126,Munsee,x
2147,237,150,173,Ajuuraan,x
2148,109,152,32,Urmia,x
2149,237,154,79,Lida,x
2150,109,156,126,Nyanza,x
2151,237,158,173,Acre,x
2152,109,32,32,Nakhchivan,x
2153,237,34,79,Acholiland,x
2154,110,36,126,Bukovina,x
2155,238,38,173,Gdingen,x
2156,20,17,0,Euboea,x
2157,180,167,120,Chari,x
2158,200,197,160,Bouar,x
2159,220,17,0,Owando,x
2160,240,47,40,Kalemie,x
2161,20,77,80,Kolwezi,x
2162,40,107,120,Solwezi,x
2163,60,137,160,Luapula,x
2164,80,167,0,Lunda,x
2165,100,197,40,Mwanza,x
2166,120,17,80,Dodoma,x
2167,140,47,120,Kilimanjaro,x
2168,160,77,160,Ngamiland,x
2169,180,107,0,Karas,x
2170,200,137,40,Oshana,x
2171,220,167,80,Huambo,x
2172,240,197,120,Kasai Oriental,x
2173,20,17,160,Maniema,x
2174,40,47,0,Maymana,x
2175,60,77,40,Bamyan,x
2176,80,107,80,Kunduz,x
2177,100,137,120,Dakhshan,x
2178,120,167,160,Jalalabad,x
2179,140,197,0,Ladakh,x
2180,160,17,40,Margalla,x
2181,180,47,80,Sialkot,x
2182,200,77,120,Sind Sagar,x
2183,220,107,160,Derajat,x
2184,240,137,0,Cholistan,x
2185,20,167,40,Siwi,x
2186,40,197,80,Sehwan,x
2187,60,17,120,Bela,x
2188,80,47,160,Umarkot,x
2189,100,77,0,Doaba,x
2190,120,107,40,Bathlana,x
2191,140,137,80,Panipat,x
2192,160,167,120,Upper Doab,x
2193,180,197,160,Kumaon,x
2194,200,17,0,Shekhawati,x
2195,220,47,40,Nagaur,x
2196,240,77,80,Ajmer,x
2197,20,107,120,Gorwar,x
2198,40,137,160,Chittor,x
2199,60,167,0,Patan,x
2200,80,197,40,Girnar,x
2201,100,17,80,Bhavnagar,x
2202,120,47,120,Rewa Kantha,x
2203,140,77,160,Baroda,x
2204,160,107,0,Chanderi,x
2205,180,137,40,Bhilsa,x
2206,200,167,80,Mahakoshal,x
2207,220,197,120,Mahadeo,x
2208,240,17,160,Baglana,x
2209,20,47,0,Pune,x
2210,40,77,40,Chaul,x
2211,60,107,80,Savanaur,x
2212,80,137,120,North Kanara,x
2213,100,167,160,South Kanara,x
2214,120,197,0,Malenadu,x
2215,140,17,40,Tirunelveli,x
2216,160,47,80,Vanni,x
2217,180,77,120,Kandy,x
2218,200,107,160,Tanjore,x
2219,220,137,0,Gingee,x
2220,240,167,40,Arcot,x
2221,20,197,80,Morasanadu,x
2222,40,17,120,Kurnool,x
2223,60,47,160,Velanadi,x
2224,80,77,0,Colconda,x
2225,100,107,40,Gulbarga,x
2226,120,137,80,Mahur,x
2227,140,167,120,Chanda,x
2228,160,197,160,Konaseema,x
2229,180,17,0,Srikakulam,x
2230,200,47,40,Balasore,x
2231,220,77,80,Khurda,x
2232,240,107,120,Sambalpur,x
2233,20,137,160,Raipur,x
2234,40,167,0,Baghelkhand,x
2235,60,197,40,Kalpi,x
2236,80,17,80,Etawah,x
2237,100,47,120,Katehar,x
2238,120,77,160,Bahreich,x
2239,140,107,0,Chaubusi Rayjas,x
2240,160,137,40,Gorakhpur,x
2241,180,167,80,Varanasi,x
2242,200,197,120,Tirhut,x
2243,220,17,160,Limbuwan,x
2244,240,47,0,Bhagalpur,x
2245,20,77,40,Barind,x
2246,40,107,80,Damin,x
2247,60,137,120,Lakhnor,x
2248,80,167,160,Midnapore,x
2249,100,197,0,Sunderbans,x
2250,120,17,40,Nasirabad,x
2251,140,47,80,Koch Hajo,x
2252,160,77,120,Sadiya,x
2253,180,107,160,Manipur,x
2254,200,137,0,Tripura,x
2255,220,167,40,Thaungdut,x
2256,240,197,80,Tamanthi,x
2257,20,17,120,Hkamti Long,x
2258,40,47,160,Mong Kawng,x
2259,60,77,0,Hsipaw,x
2260,80,107,40,Circassia,x
2261,100,137,80,Kabardia,x
2262,120,167,120,Terek,x
2263,140,197,160,Tarki,x
2264,160,17,0,Khundzia,x
2265,180,47,40,Kakheti,x
2266,200,77,80,Guria,x
2267,220,107,120,Samtskhe,x
2268,240,137,160,Erzincan,x
2269,20,167,0,Diyarbakir,x
2270,40,197,40,Mush,x
2271,60,17,80,Cizre,x
2272,80,47,120,Sinjar,x
2273,100,77,160,As Sahiliyah,x
2274,120,107,0,Tikrit,x
2275,140,137,40,El Qatif,x
2276,160,167,80,Samayah,x
2277,180,197,120,Wasit,x
2278,200,17,160,Ilam,x
2279,220,47,0,Kirmanshah,x
2280,240,77,40,Ardalan,x
2281,20,107,80,Maragheh,x
2282,40,137,120,Melikates,x
2283,60,167,160,Zanjan,x
2284,80,197,0,Qazvin,x
2285,100,17,40,Markazi,x
2286,120,47,80,Semnan,x
2287,140,77,120,Ardakan,x
2288,160,107,160,Yasuj,x
2289,180,137,0,Sarvestan,x
2290,200,167,40,Rushehr,x
2291,220,197,80,Bandar Langeh,x
2292,240,17,120,Kizil-Su,x
2293,20,47,160,Konjikala,x
2294,40,77,0,Bojnord,x
2295,60,107,40,Qumis,x
2296,80,137,80,Sabzevar,x
2297,100,167,120,Birjand,x
2298,120,197,160,Rafsanjan,x
2299,140,17,0,Bam,x
2300,160,47,40,Quhistan,x
2301,180,77,80,Kharan,x
2302,200,107,120,Chagai,x
2303,220,137,160,Bust,x
2304,240,167,0,Ferah,x
2305,20,197,40,Tagant,x
2306,40,17,80,Termes,x
2307,60,47,120,Hodh,x
2308,80,77,160,Baghena,x
2309,100,107,0,Galam,x
2310,120,137,40,Tekrur,x
2311,140,167,80,Siine,x
2312,160,197,120,Kantor,x
2313,180,17,160,Beafada,x
2314,200,47,0,Wagadu,x
2315,220,77,40,Do,x
2316,240,107,80,Joma,x
2317,20,137,120,Sibiridugu,x
2318,40,167,160,Bagoe,x
2319,60,197,0,Bendugu,x
2320,80,17,40,Mema,x
2321,100,47,80,Bara,x
2322,120,77,120,Kala,x
2323,140,107,160,Haayre,x
2324,160,137,0,Hombori,x
2325,180,167,40,Karabara,x
2326,200,197,80,Kong,x
2327,220,17,120,Lobi,x
2328,240,47,160,Tenkodogo,x
2329,20,77,0,Bilanga,x
2330,40,107,40,Liptako,x
2331,60,137,80,Gyaaman,x
2332,80,167,120,Cape Coast,x
2333,100,197,160,Denkyira,x
2334,120,17,0,Bonoman,x
2335,140,47,40,Dagbon,x
2336,160,77,80,Atakora,x
2337,180,107,120,Moshi,x
2338,200,137,160,Ketu,x
2339,220,167,0,Ijebu,x
2340,240,197,40,Ondo,x
2341,20,17,80,Yawuri,x
2342,40,47,120,Kebbi,x
2343,60,77,160,Rano,x
2344,80,107,0,Biram,x
2345,100,137,40,Bedde,x
2346,120,167,80,Marghi,x
2347,140,197,120,Azawagh,x
2348,160,17,160,Zarmadanga,x
2349,180,47,0,Aribanda,x
2350,200,77,40,Dallol,x
2351,220,107,80,Ader,x
2352,240,137,120,Azbin,x
2353,20,167,160,Itesan,x
2354,40,197,0,Daura,x
2355,60,17,40,Muniyo,x
2356,80,47,80,Kawar,x
2357,100,77,120,Yao,x
2358,120,107,160,Kotoko,x
2359,140,137,0,Karou,x
2360,160,167,40,Saruhan,x
2361,180,197,80,Bolu,x
2362,200,17,120,Canik,x
2363,220,47,160,Bozok,x
2364,240,77,0,Kayseri,x
2365,20,107,40,Tekke,x
2366,40,137,80,Icel,x
2367,60,167,120,Antioch,x
2368,80,197,160,Malatya,x
2369,100,17,0,Biga,x
2370,120,47,40,Sandoway,x
2371,140,77,80,Pagan,x
2372,160,107,120,Mong Pai,x
2373,180,137,160,Martaban,x
2374,200,167,0,Tavoy,x
2375,220,197,40,Phra Bang,x
2376,240,17,80,Phitsanulok,x
2377,20,47,120,Chaiyaphum,x
2378,40,77,160,Nongbua Lamphu,x
2379,60,107,0,Luang Namtha,x
2380,80,137,40,Nong Khai,x
2381,100,167,80,Savannakhet,x
2382,120,197,120,Khukhan,x
2383,140,17,160,Song La,x
2384,160,47,0,Cao Bang,x
2385,180,77,40,Ha Tinh,x
2386,200,107,80,Tay Nguyen,x
2387,220,137,120,Kauthara,x
2388,240,167,160,Prek Ruisey,x
2389,20,197,0,Prek Khmao,x
2390,40,17,40,Kratie,x
2391,60,47,80,Phnom Penh,x
2392,80,77,120,Battambang,x
2393,100,107,160,Phetchaburi,x
2394,120,137,0,Chaiya,x
2395,140,167,40,Thalang,x
2396,160,197,80,Kedah,x
2397,180,17,120,Terengganu,x
2398,200,47,160,Selangor,x
2399,220,77,0,Pasai,x
2400,240,107,40,Peureulak,x
2401,20,137,80,Gayo,x
2402,40,167,120,Batak,x
2403,60,197,160,Rokan,x
2404,80,17,0,Pariamay,x
2405,100,47,40,South Pagaryung,x
2406,120,77,80,Indragiri,x
2407,140,107,120,Jambi,x
2408,160,137,160,Nias,x
2409,180,167,0,Bangka,x
2410,200,197,40,Sukabumi,x
2411,220,17,80,Cirebon,x
2412,240,47,120,Karia,x
2413,20,77,160,Surabaya,x
2414,40,107,0,Kediri,x
2415,60,137,40,Madura,x
2416,80,167,80,Lombok,x
2417,100,197,120,Sibu,x
2418,120,17,160,Pontianak,x
2419,140,47,0,Sampit,x
2420,160,77,40,Barito,x
2421,180,107,80,Samarinda,x
2422,200,137,120,Berau,x
2423,220,167,160,Bulungan,x
2424,240,197,0,Tarakan,x
2425,20,17,40,Lahad Datu,x
2426,40,47,80,Borneo,x
2427,60,77,120,Palopo,x
2428,80,107,160,Palu,x
2429,100,137,0,Gorontalo,x
2430,120,167,40,Kungirot,x
2431,140,197,80,Gurganj,x
2432,160,17,120,Atakent,x
2433,180,47,160,Shymkent,x
2434,200,77,0,Talas,x
2435,220,107,40,Naryn,x
2436,240,137,80,Orda,x
2437,20,167,120,Lower Yaik,x
2438,40,197,160,Utva,x
2439,60,17,0,Shekty,x
2440,80,47,40,Tortkara,x
2441,100,77,80,Alty-Kuduk,x
2442,120,107,120,Altyn,x
2443,140,137,160,Dzhaman-Kuduk,x
2444,160,167,0,Taraz,x
2445,180,197,40,Karamegdan,x
2446,200,17,80,Urzhar,x
2447,220,47,120,Tobykty,x
2448,240,77,160,Shegendyk,x
2449,20,107,0,Aksary,x
2450,40,137,40,Baganaly,x
2451,60,167,80,Lower Ishim,x
2452,80,197,120,Guge,x
2453,100,17,160,Shigatse,x
2454,120,47,0,Lhasa,x
2455,140,77,40,Nyingchi,x
2456,160,107,80,Markam,x
2457,180,137,120,Tachieilu,x
2458,200,167,160,Dege,x
2459,220,197,0,Sarig Yogir,x
2460,240,17,40,Kulun Shan,x
2461,20,47,80,Xining,x
2462,40,77,120,Liangzhou,x
2463,60,107,160,Taozhou,x
2464,80,137,0,Songqu,x
2465,100,167,40,Lijiang,x
2466,120,197,80,Dehong,x
2467,140,17,120,Pu'er,x
2468,160,47,160,Guangnan,x
2469,180,77,0,Namning,x
2470,200,107,40,Lianzhou,x
2471,220,137,80,Leizhou,x
2472,240,167,120,Yazhou,x
2473,20,197,160,Wuzhou,x
2474,40,17,0,Shiurwan,x
2475,60,47,40,Huizhou,x
2476,80,77,80,Chaozhou,x
2477,100,107,120,Tingzhou,x
2478,120,137,160,Jianning,x
2479,140,167,0,Jinhua,x
2480,160,197,40,Ningbo,x
2481,180,17,80,Shanyin,x
2482,200,47,120,Ningguo,x
2483,220,77,160,Huizhou,x
2484,240,107,0,Poyang,x
2485,20,137,40,Hengyang,x
2486,40,167,80,Yuanling,x
2487,60,197,120,Zhenyuan,x
2488,80,17,160,Umung,x
2489,100,47,0,Langzhong,x
2490,120,77,40,Xiangxang,x
2491,140,107,80,Yichang,x
2492,160,137,120,Luoyang,x
2493,180,167,160,Shangqiu,x
2494,200,197,0,Fuyang,x
2495,220,17,40,Xuzhou,x
2496,240,47,80,Fengyang,x
2497,20,77,120,Zhenjiang,x
2498,40,107,160,Yangzhou,x
2499,60,137,0,Qingzhou,x
2500,80,167,40,Wuding,x
2501,100,197,80,Yanzhou,x
2502,120,17,120,Daming,x
2503,140,47,160,Huaiqing,x
2504,160,77,0,Lu'an,x
2505,180,107,40,Taiyuan,x
2506,200,137,80,Yan'an,x
2507,220,167,120,Pingliang,x
2508,240,197,160,Tianshui,x
2509,40,47,40,Gaizhou,x
2510,180,47,120,Andong,x
2511,60,77,80,West Gyeongsang,x
2512,80,107,120,West Gangwon,x
2513,100,137,160,North Pyongan,x
2514,120,167,0,North Hamgyeong,x
2515,140,197,40,Yukjin,x
2516,160,17,80,Jeju,x
2517,200,77,160,Darnah,x
2518,220,107,0,Bardiyah,x
2519,240,137,40,Al Watah,x
2520,20,167,80,Wadi Halfa,x
2521,40,197,120,Sahra An Nubyah,x
2522,60,17,160,Halaib,x
2523,80,47,0,Asyut,x
2524,100,77,40,Minya,x
2525,120,107,80,Ras Gharib,x
2526,140,137,120,Al Gharbia,x
2527,160,167,160,Suez,x
2528,180,197,0,Ma'an,x
2529,200,17,40,Tayma,x
2530,220,47,80,Yanbu,x
2531,240,77,120,Ma'din Sulaym,x
2532,20,107,160,Unaizah,x
2533,40,137,0,Falaj,x
2534,60,167,40,Tamara,x
2535,80,197,80,Truba,x
2536,100,17,120,Jeddah,x
2537,120,47,160,Jazan,x
2538,140,77,0,Ahqaf,x
2539,160,107,40,Al Jawf,x
2540,180,137,80,Kinda,x
2541,200,167,120,Wusta,x
2542,220,197,160,Sharqiyah,x
2543,240,17,0,Abd Al-Qays,x
2544,20,47,40,Yabrin,x
2545,40,77,80,Hafar,x
2546,60,107,120,Latakia,x
2547,80,137,160,Tadmor,x
2548,100,167,0,Rahba,x
2549,120,197,40,Hohhot,x
2550,140,17,80,Ereen,x
2551,160,47,120,Chahar,x
2552,180,77,160,Yehe,x
2553,200,107,0,Hetu Ala,x
2554,220,137,40,Hunchun,x
2555,240,167,80,Cicigar,x
2556,20,197,120,Sartu,x
2557,40,17,160,Alchuka,x
2558,60,47,0,Mergen,x
2559,80,77,40,Aigun,x
2560,100,107,80,Birija,x
2561,120,137,120,Miyoo Gasan,x
2562,140,167,160,Kuru,x
2563,160,197,0,Iman,x
2564,180,17,40,Yaran,x
2565,200,47,80,Saguia el-Hamra,x
2566,220,77,120,Agadir,x
2567,240,107,160,Haha,x
2568,20,137,0,Gharb,x
2569,40,167,40,Meknes,x
2570,60,197,80,Tadla,x
2571,80,17,120,Ouarzazate,x
2572,100,47,160,Limpopo,x
2573,120,77,0,Saoura,x
2574,140,107,40,Kasdir,x
2575,160,137,80,Ouarsenis,x
2576,10,17,0,Dahra,x
2577,130,47,30,Titteri,x
2578,50,77,60,Hodna,x
2579,170,107,90,Mzab,x
2580,90,137,120,Touggourt,x
2581,210,167,150,Ouargla,x
2582,30,197,0,Bizerte,x
2583,150,17,30,Kef,x
2584,70,47,60,Souss,x
2585,190,77,90,Sfax,x
2586,110,107,120,Zuwarah,x
2587,10,137,150,Ghadames,x
2588,130,167,0,Jufra,x
2589,50,197,30,Thubaqt,x
2590,170,17,60,Djanet,x
2591,90,47,90,Ghat,x
2592,210,77,120,Tajarhi,x
2593,30,107,150,Djado,x
2594,150,137,0,Ennedi,x
2595,70,167,30,Khoikhoi,x
2596,190,197,60,Gauteng,x
2597,110,17,90,Zululand,x
2598,10,47,120,Narbonne,x
2599,130,77,150,Soria,x
2600,50,107,0,Cuenca,x
2601,170,137,30,La Mancha,x
2602,90,167,60,Przemysl,x
2603,210,197,90,Vidin,x
2604,30,17,120,Plovdiv,x
2605,150,47,150,Vitebsk,x
2606,70,77,0,Pereyaslav,x
2607,190,107,30,Ingil,x
2608,110,137,60,Theodoro,x
2609,10,167,90,Kyzyl-Yar,x
2610,130,197,120,Mansur,x
2611,50,17,150,Tyn,x
2612,170,47,0,Bahmut,x
2613,90,77,30,Lipetsk,x
2614,210,107,60,Mantrega,x
2615,30,137,90,Azaraba,x
2616,150,167,120,Majar,x
2617,70,197,150,Kuma,x
2618,190,17,0,Etkara,x
2619,110,47,30,Ukek,x
2620,10,77,60,Kanadey,x
2621,130,107,90,Alatyr,x
2622,50,137,120,Maguana,x
2623,170,167,150,Magua,x
2624,90,197,0,Baracoa,x
2625,210,17,30,Bayamo,x
2626,30,47,60,Camaguey,x
2627,150,77,90,Nicoya,x
2628,70,107,120,Managua,x
2629,190,137,150,Uluas,x
2630,110,167,0,Lenca,x
2631,10,197,30,Olancho,x
2632,130,17,60,Chortli,x
2633,50,47,90,Iximche,x
2634,170,77,120,Chacujal,x
2635,90,107,150,Uaymil,x
2636,210,137,0,Ecab,x
2637,30,167,30,Mani,x
2638,150,197,60,Ah Canul,x
2639,70,17,90,Champutun,x
2640,190,47,120,Xicallanco,x
2641,110,77,150,Chiapas,x
2642,10,107,0,Xocnochco,x
2643,130,137,30,Tehuantepec,x
2644,50,167,60,Mixe,x
2645,170,197,90,Tochtepec,x
2646,90,17,120,Coyolapan,x
2647,210,47,150,Coixtlahuacan,x
2648,30,77,0,Tepeacac,x
2649,150,107,30,Cuetlaxtlan,x
2650,70,137,60,Cholula,x
2651,190,167,90,Teloloapan,x
2652,110,197,120,Yopitzinco,x
2653,10,17,150,Cihuatlan,x
2654,130,47,0,Cutzamala,x
2655,50,77,30,Zacatula,x
2656,170,107,60,Apatzingan,x
2657,90,137,90,Colima,x
2658,210,167,120,Tizapan,x
2659,30,197,150,Cuitzeo,x
2660,150,17,0,Tuliucan,x
2661,70,47,30,Guamares,x
2662,190,77,60,Metztitlan,x
2663,110,107,90,Iziccoac,x
2664,10,137,120,Al-Junaynah,x
2665,130,167,150,Kobbe,x
2666,50,197,0,Kosti,x
2667,170,17,30,Soba,x
2668,90,47,60,Sennar,x
2669,210,77,90,Bahr el Ghazal,x
2670,30,107,120,Nuer,x
2671,150,137,150,Hamasien,x
2672,70,167,0,Mendefera,x
2673,190,197,30,Aksum,x
2674,110,17,60,Semien,x
2675,10,47,90,Dembiya,x
2676,130,77,120,Lasta,x
2677,50,107,150,Angot,x
2678,170,137,0,Wollo,x
2679,90,167,30,Agew,x
2680,210,197,60,Asosa,x
2681,30,17,90,Damot,x
2682,150,47,120,Illubabor,x
2683,70,77,150,Welayta,x
2684,190,107,0,Afder,x
2685,110,137,30,Ankober,x
2686,10,167,60,Arsi,x
2687,130,197,90,Dawaro,x
2688,50,17,120,Mora,x
2689,170,47,150,Degehabur,x
2690,90,77,0,Hargeisa,x
2691,210,107,30,Togdheer,x
2692,30,137,60,Sanaag,x
2693,150,167,90,Las Khoray,x
2694,70,197,120,Bosaso,x
2695,190,17,150,Hafun,x
2696,110,47,0,Qardho,x
2697,10,77,30,Garoowe,x
2698,130,107,60,Hobyo,x
2699,50,137,90,Meregh,x
2700,170,167,120,El Buur,x
2701,90,197,150,Warsheikh,x
2702,210,17,0,Beledweyne,x
2703,30,47,30,Afgooye,x
2704,150,77,60,Merca,x
2705,70,107,90,Bardera,x
2706,190,137,120,Barawa,x
2707,110,167,150,Kismayo,x
2708,10,197,0,Pate,x
2709,130,17,30,Tana,x
2710,50,47,60,Veraguas,x
2711,170,77,90,Darien,x
2712,90,107,120,Guajira,x
2713,210,137,150,Neiva,x
2714,30,167,0,Popayan,x
2715,150,197,30,Meta,x
2716,70,17,60,Puerto Carreno,x
2717,190,47,90,Guaviare,x
2718,110,77,120,Esmeraldas,x
2719,10,107,150,Piwra,x
2720,130,137,0,Tucume,x
2721,50,167,30,Wankapampa,x
2722,170,197,60,Chachapoyas,x
2723,90,17,90,Moyobamba,x
2724,210,47,120,Pisqupampa,x
2725,30,77,150,Huaraz,x
2726,150,107,0,Chimbote,x
2727,70,137,30,Ucayali,x
2728,190,167,60,Quero,x
2729,110,197,90,Ayaviri,x
2730,10,17,120,Camana,x
2731,130,47,150,Macaya,x
2732,50,77,0,Madre de Dios,x
2733,170,107,30,San Joaquin,x
2734,90,137,60,Santa Cruz de la Sierra,x
2735,210,167,90,Fuerte Borbon,x
2736,30,197,120,Sucre,x
2737,150,17,150,Tarija,x
2738,70,47,0,Potosi,x
2739,190,77,30,Quillacas,x
2740,110,107,60,Oruro,x
2741,10,137,90,Tiahuanaco,x
2742,130,167,120,Iquique,x
2743,50,197,150,Calama,x
2744,170,17,0,Coquimbo,x
2745,90,47,30,Chiloe,x
2746,210,77,60,Aysen,x
2747,30,107,90,Comodoro Rivadavia,x
2748,150,137,120,Rawson,x
2749,70,167,150,Chubut,x
2750,190,197,0,Poya,x
2751,110,17,30,Bahia Blanca,x
2752,10,47,60,Carmen,x
2753,130,77,90,Rio Negro,x
2754,50,107,120,Chanar,x
2755,170,137,150,Chiquiyami,x
2756,90,167,0,Mendoza,x
2757,210,197,30,San Luis,x
2758,30,17,60,Olavarria,x
2759,150,47,90,Querandi,x
2760,70,77,120,Rosario,x
2761,190,107,150,Quisquiscate,x
2762,110,137,0,Chepes,x
2763,10,167,30,La Rioja,x
2764,130,197,60,Santiago del Estero,x
2765,50,17,90,Tucuman,x
2766,170,47,120,Santa Catalina,x
2767,90,77,150,Matara,x
2768,210,107,0,Chaco Central,x
2769,30,137,30,Corrientes,x
2770,150,167,60,Yareyu,x
2771,70,197,90,Misiones,x
2772,190,17,120,Colonia,x
2773,110,47,150,Montevideo,x
2774,10,77,0,Salto,x
2775,130,107,30,Santiago,x
2776,50,137,60,Itapua,x
2777,170,167,90,Concepcion,x
2778,90,197,120,Melodia,x
2779,210,17,150,Santa Tecla,x
2780,30,47,0,Santa Catarina,x
2781,150,77,30,Castro,x
2782,70,107,60,Campinas,x
2783,190,137,90,Araquara,x
2784,110,167,120,Ofaie,x
2785,10,197,150,Corumba,x
2786,130,17,0,Caceres,x
2787,50,47,30,Vila Bela,x
2788,170,77,60,Cerejeiras,x
2789,90,107,90,Diamantino,x
2790,210,137,120,Rio das Mortes,x
2791,30,167,150,Vila Boa,x
2792,150,197,0,Luziana,x
2793,70,17,30,Araxas,x
2794,190,47,60,Sao Joao del Rel,x
2795,110,77,90,Vila Rica,x
2796,10,107,120,Serro,x
2797,130,137,150,Rio Contas,x
2798,50,167,0,Paratinga,x
2799,170,197,30,Campo Largo,x
2800,90,17,60,Santo Antonio da Manga,x
2801,210,47,90,Arrial dos Couros,x
2802,30,77,120,Conceicao,x
2803,150,107,150,Natividad,x
2804,70,137,0,Pastos Bons,x
2805,190,167,30,Parnagua,x
2806,110,197,60,Barra,x
2807,10,17,90,Inhambupe,x
2808,130,47,120,Jeremoabo,x
2809,50,77,150,Sergipe,x
2810,170,107,0,Pambu,x
2811,90,137,30,Crato,x
2812,210,167,60,Boroborema,x
2813,30,197,90,Paraiba,x
2814,150,17,120,Parnaiba,x
2815,70,47,150,Timon,x
2816,190,77,0,Alcantara,x
2817,110,107,30,Para,x
2818,10,137,60,Marajo,x
2819,130,167,90,Oiapoque,x
2820,50,197,120,Muturu,x
2821,170,17,150,Guyana,x
2822,90,47,0,Barcelos,x
2823,210,77,30,Rio Madeira,x
2824,30,107,60,Jurua,x
2825,150,137,90,Xingu,x
2826,70,167,120,Paramaribo,x
2827,190,197,150,Pirara,x
2828,110,17,0,Orinoco Delta,x
2829,10,47,30,Uyapari,x
2830,130,77,60,Angostura,x
2831,50,107,90,Zaraza,x
2832,170,137,120,Apure,x
2833,90,167,150,Llanos,x
2834,210,197,0,Coro,x
2835,30,17,30,Altagracia,x
2836,150,47,60,Merida,x
2837,70,77,90,Wystruc,x
2838,190,107,120,Veda-Suvar,x
2839,110,137,150,Ar-Chally,x
2840,10,167,0,Agyidel,x
2841,130,197,30,Bashgird,x
2842,50,17,60,Iglino,x
2843,170,47,90,Ostyaki,x
2844,90,77,120,Tikhvin,x
2845,210,107,150,Mbamba,x
2846,30,137,0,Mbata,x
2847,150,167,30,Griqualand,x
2848,70,197,60,Highveld,x
2849,190,17,90,Graaff-Reinet,x
2850,110,47,120,Chewa,x
2851,10,77,150,Shangwe,x
2852,130,107,0,Butua,x
2853,50,137,30,Buhera,x
2854,170,167,60,Angoche,x
2855,90,197,90,Lindi,x
2856,210,17,120,Mzizima,x
2857,30,47,150,Middag,x
2858,150,77,0,Kelam,x
2859,70,107,30,Pangasinan,x
2860,190,137,60,Tondo,x
2861,110,167,90,Bikol,x
2862,10,197,120,Panay,x
2863,130,17,150,Butuan,x
2864,50,47,0,Tagloc,x
2865,170,77,30,Sula,x
2866,90,107,60,Buton,x
2867,210,137,90,Yamdena,x
2868,30,167,120,Aru,x
2869,150,197,150,Fak-Fak,x
2870,70,17,0,Yos Sudarso,x
2871,190,47,30,Daru,x
2872,110,77,60,Kerema,x
2873,10,107,90,Lae,x
2874,130,137,120,Madang,x
2875,50,167,150,Asmat,x
2876,170,197,0,Gunditjmara,x
2877,90,17,30,Yuin,x
2878,210,47,60,Waitaha,x
2879,30,77,90,Ahuriri,x
2880,150,107,120,Kirikiriroa,x
2881,70,137,150,Yarkand,x
2882,190,167,0,Kuqa,x
2883,110,197,30,Korla,x
2884,10,17,60,Qakilik,x
2885,130,47,90,Hami,x
2886,50,77,120,Ejin,x
2887,170,107,150,Hoboksar,x
2888,90,137,0,Chuguchak,x
2889,210,167,30,Zasagt,x
2890,30,197,60,Govi,x
2891,150,17,90,Qaraqorum,x
2892,70,47,120,Tsetserleg,x
2893,190,77,150,Ih Huree,x
2894,110,107,0,Yugan,x
2895,10,137,30,Agan,x
2896,130,167,60,Vah,x
2897,50,197,90,Barnaul,x
2898,170,17,120,Altai,x
2899,90,47,150,Mangazea,x
2900,210,77,0,Baykha,x
2901,30,107,30,Uchamin,x
2902,150,137,60,Chulym,x
2903,70,167,90,Kan,x
2904,190,197,120,Ust-Kut,x
2905,110,17,150,Chara,x
2906,10,47,0,Nukhtui,x
2907,130,77,30,Chuna,x
2908,50,107,60,Seganka,x
2909,170,137,90,Urkan,x
2910,90,167,120,Kharya,x
2911,210,197,150,Yarmanka,x
2912,30,17,0,Kagyrgyn,x
2913,150,47,30,Huichol,x
2914,70,77,60,Borrado,x
2915,190,107,90,Cotoname,x
2916,110,137,120,Laguneros,x
2917,10,167,150,Cacaxtes,x
2918,130,197,0,Toboso,x
2919,50,17,30,Seri,x
2920,170,47,60,Nakipa,x
2921,90,77,90,Kumeyaay,x
2922,210,107,120,Tachi,x
2923,30,137,150,Maidu,x
2924,150,167,0,Shasta,x
2925,70,197,30,Yuki,x
2926,190,17,60,Klamath,x
2927,110,47,90,Kalapuya,x
2928,10,77,120,Chehalis,x
2929,130,107,150,Quileute,x
2930,50,137,0,Hualapai,x
2931,170,167,30,Hopi,x
2932,90,197,60,Zuni,x
2933,210,17,90,Chiricahua,x
2934,30,47,120,Acoma,x
2935,150,77,150,Jicarilla,x
2936,70,107,0,Lipiyanes,x
2937,190,137,30,Jumano,x
2938,110,167,60,Tuintsunde,x
2939,10,197,90,Coahuilteco,x
2940,130,17,120,Querecho,x
2941,50,47,150,Eyeish,x
2942,170,77,0,Hasinai,x
2943,90,107,30,Utsetha,x
2944,210,137,60,Kitkehaki,x
2945,30,167,90,Hinonoeino,x
2946,150,197,120,Baachinena,x
2947,70,17,150,Skiri,x
2948,190,47,0,Wahpekute,x
2949,110,77,30,Mdewankton,x
2950,10,107,60,Noquet,x
2951,130,137,90,Moingwena,x
2952,50,167,120,Kilatika,x
2953,170,197,150,Mengkonkia,x
2954,90,17,0,Michigamea,x
2955,210,47,30,Satuskhdin,x
2956,30,77,60,Adai,x
2957,150,107,90,Biloxi,x
2958,70,137,120,Natchez,x
2959,190,167,150,Yazoo,x
2960,110,197,0,Chickamauga,x
2961,10,17,30,Napochi,x
2962,130,47,60,Tohome,x
2963,50,77,90,Chatot,x
2964,170,107,120,Mayaimi,x
2965,90,137,150,Calusa,x
2966,210,167,0,Yustaga,x
2967,30,197,30,Mocama,x
2968,150,17,60,Hitchiti,x
2969,70,47,90,Yamasee,x
2970,190,77,120,Coweta,x
2971,110,107,150,Saluda,x
2972,10,137,0,Cusabo,x
2973,130,167,30,Waccamaw,x
2974,50,197,60,Chicora,x
2975,170,17,90,Waxhaw,x
2976,90,47,120,Yadkin,x
2977,210,77,150,Roanoke,x
2978,30,107,0,Tutelo,x
2979,150,137,30,Moratok,x
2980,70,167,60,Doeg,x
2981,190,197,90,Manahoac,x
2982,110,17,120,Monongahela,x
2983,10,47,150,Shatteras,x
2984,130,77,0,Wabash,x
2985,50,107,30,Piankeshaw,x
2986,170,137,60,Chillicothe,x
2987,90,167,90,Mascouten,x
2988,210,197,120,Okouara,x
2989,30,17,150,Honniasont,x
2990,150,47,0,Juniata,x
2991,70,77,30,Atrakwaye,x
2992,190,107,60,Potomac,x
2993,110,137,90,Nanticoke,x
2994,10,167,120,Raritan,x
2995,130,197,150,Espachomy,x
2996,50,17,0,Quinnipiac,x
2997,170,47,30,Wampanoag,x
2998,90,77,60,Adirondack,x
2999,210,107,90,Missisquoi,x
3000,30,137,120,Sokoki,x
3001,150,167,150,Merrimack,x
3002,70,197,0,Androscoggin,x
3003,190,17,30,Passamaquoddy,x
3004,110,47,60,Aroostook,x
3005,10,77,90,Kespukwitk,x
3006,130,107,120,Eskikewakik,x
3007,50,137,150,Wolystooq,x
3008,170,167,0,Madawaska,x
3009,90,197,30,Siknikt,x
3010,210,17,60,Maliseet,x
3011,30,47,90,Etchemins,x
3012,150,77,120,Loup,x
3013,70,107,150,Atikamekw,x
3014,190,137,0,Piekougami,x
3015,110,167,30,Manicouagan,x
3016,10,197,60,Mingan,x
3017,130,17,90,Anticosti,x
3018,50,47,120,Placentia,x
3019,170,77,150,Naskapi,x
3020,90,107,0,Sikumiut,x
3021,210,137,30,Tkaronto,x
3022,30,167,60,Tionontate,x
3023,150,197,90,Odawa,x
3024,70,17,120,Kichesipi,x
3025,190,47,150,Missisage,x
3026,110,77,0,Timiskaming,x
3027,10,107,30,Piscatang,x
3028,130,137,60,Kesagami,x
3029,50,167,90,Shaggami,x
3030,170,197,120,Outoulibi,x
3031,90,17,150,Cisapipi,x
3032,210,47,0,Omushkego,x
3033,30,77,30,Wappus,x
3034,150,107,60,Quennebigon,x
3035,70,137,90,Mahmikiwiniyak,x
3036,190,167,120,Hebina,x
3037,110,197,150,Sipiwininiwak,x
3038,10,17,10,Athabasca,x
3039,130,47,20,Nihithawak,x
3040,50,77,50,Siksikawa,x
3041,170,107,70,Sekani,x
3042,90,137,100,Dakelh,x
3043,210,167,110,Secwepemc,x
3044,30,197,130,Okanagan,x
3045,150,17,140,Heiltsuk,x
3046,70,47,10,Nisga'a,x
3047,190,77,20,Sitka,x
3048,110,107,50,Eyak,x
3049,10,137,70,Kodiak,x
3050,130,167,100,Yakima,x
3051,50,197,110,Spokane,x
3052,170,17,130,Palus,x
3053,90,47,140,Umatilla,x
3054,210,77,10,Bogohue,x
3055,30,107,20,Goshute,x
3056,150,137,50,Piegan,x
3057,70,167,70,Haaninin,x
3058,190,197,100,Ashshipite,x
3059,110,17,110,Eeelalapito,x
3060,10,47,130,Tsisistas,x
3061,130,77,140,Hidatsa,x
3062,50,107,10,Itscheabine,x
3063,170,137,20,Teush,x
3064,0,195,254,L�ngelm�vesi,x
3065,1,215,254,Vanajavesi,x
3066,2,235,254,P�ij�nne,x
3067,3,255,254,Puula,x
3068,4,195,254,Keitele,x
3069,5,215,254,Konnevesi,x
3070,6,235,254,Haukivesi,x
3071,0,255,254,Puruvesi,x
3072,1,195,254,Orivesi,x
3073,2,215,254,Pyh�j�rvi,x
3074,3,235,254,H�yti�inen,x
3075,4,255,254,Pielinen,x
3076,5,195,254,Kallavesi,x
3077,6,215,254,Ouluj�rvi,x
3078,0,235,254,Lake Inari,x
3079,1,255,254,Issyk Kul,x
3080,2,195,254,Alakol,x
3081,3,215,254,Lake Zaysan,x
3082,4,235,254,Lake Argyle,x
3083,5,255,254,Lake Mackay,x
3084,6,195,254,Lake Frome,x
3085,0,215,254,Lake Gairdner,x
3086,1,235,254,Lake Eyre,x
3087,2,255,254,Lake Torrens,x
3088,90,167,50,Sogn,x
3089,210,197,70,Lingga,x
3090,30,17,100,Belitung,x
3091,150,47,110,Mentawai,x
3092,70,77,130,Katl'odeeche,x
3093,190,107,140,Mizoram,x
3094,110,137,10,Notec,x
3095,10,167,20,Kolberg,x
3096,130,197,50,Sternberg,x
3097,50,17,70,Glogau,x
3098,170,47,100,Osterode,x
3099,90,77,110,Ortelsburg,x
3100,210,107,130,Landshut,x
3101,30,137,140,Straubing,x
3102,150,167,10,Ingolstadt,x
3103,70,197,20,Loon,x
3104,190,17,50,Kleve,x
3105,110,47,70,Meppen,x
3106,10,77,100,Hoya,x
3107,130,107,110,Paderborn,x
3108,50,137,130,Eger,x
3109,170,167,140,Budejovice,x
3110,90,197,10,Hradec Kralove,x
3111,210,17,20,Spis,x
3112,30,47,50,Nowy Sacz,x
3113,150,77,70,Tarnow,x
3114,70,107,100,Lwow,x
3115,190,137,110,Rowne,x
3116,110,167,130,Buzau,x
3117,10,197,140,Visoki,x
3118,130,17,10,Chemnitz,x
3119,50,47,20,Magdeburg,x
3120,170,77,50,Rostock,x
3121,90,107,70,Stralsund,x
3122,210,137,100,Strelitz,x
3123,30,167,110,Montferrat,x
3124,150,197,130,Novara,x
3125,70,17,140,Albenga,x
3126,190,47,10,Lucca,x
3127,110,77,20,Arezzo,x
3128,10,107,50,Urbino,x
3129,130,137,70,Umbria,x
3130,50,167,100,Foggia,x
3131,170,197,110,Salerno,x
3132,90,17,130,Cosenza,x
3133,210,47,140,Syracuse,x
3134,30,77,10,Sassari,x
3135,150,107,20,Forcalquier,x
3136,70,137,50,Rioja,x
3137,190,167,70,Teruel,x
3138,110,197,100,Tarragona,x
3139,10,17,110,Urgell,x
3140,130,47,130,Djerba,x
3141,50,77,140,Qeshm,x
3142,170,107,10,Garoua,x
3143,90,137,20,Maka,x
3144,210,167,50,Woleu-Ntem,x
3145,30,197,70,Toliara,x
3146,150,17,100,Toamasina,x
3147,70,47,110,Fianarantsoa,x
3148,190,77,130,Jan Mayen,x
3149,189,110,220,Unused1,
3150,190,110,220,Unused2,
3151,191,110,220,Unused3,
3152,192,110,220,Unused4
3153,193,110,220,Unused5
3154,194,110,220,Unused6
3155,195,110,220,Unused7
3156,196,110,220,Unused8
3157,197,110,220,Unused9
3158,199,110,220,Unused10
3159,200,110,220,Unused11
3160,201,110,220,Unused12
3161,202,110,220,Unused13
3162,203,110,220,Unused14
3163,204,110,220,Unused15
3164,205,110,220,Unused16
3165,206,110,220,Unused17
3166,207,110,220,Unused18
3167,207,110,221,Unused19
3168,207,110,222,Unused20
3169,207,110,223,Unused11
3170,207,110,224,Unused12
3171,207,110,225,Unused13
3172,207,110,226,Unused14
3173,207,110,227,Unused15
3174,207,110,228,Unused16
3175,207,110,229,Unused17
3176,207,110,230,Unused18
3177,207,110,231,Unused19
3178,207,110,232,Unused20
3179,207,110,233,Unused21
3180,207,110,234,Unused22
3181,207,110,235,Unused23
3182,207,110,236,Unused24
3183,207,110,237,Unused25
3184,207,110,238,Unused26
3185,207,110,239,Unused27
3186,207,110,240,Unused28
3187,207,110,241,Unused29
3188,207,110,242,Unused30
3189,207,110,243,Unused31
3190,207,110,244,Unused32
3191,207,110,245,Unused33
3192,207,110,246,Unused34
3193,207,110,247,Unused35
3194,207,110,248,Unused36
3195,207,110,249,Unused37
3196,207,110,250,Unused38
3197,208,110,1,Unused39
3198,207,110,2,Unused40
3199,207,110,3,Unused41
3200,207,110,4,Unused42
3201,207,110,5,Unused43
3202,207,110,6,Unused44
3203,207,110,7,Unused45
3204,207,110,8,Unused46
3205,207,110,9,Unused47
3206,207,110,10,Unused48
3207,207,110,11,Unused49
3208,207,110,12,Unused50
3209,207,110,13,Unused51
3210,207,110,14,Unused52
3211,207,110,15,Unused53
3212,207,110,16,Unused54
3213,207,110,17,Unused55
3214,207,110,18,Unused56
3215,207,110,19,Unused57
3216,207,110,20,Unused58
3217,207,110,21,Unused59
3218,207,110,22,Unused60
3219,207,110,23,Unused61
3220,207,110,24,Unused62
3221,207,110,25,Unused63
3222,207,110,26,Unused64
3223,207,110,27,Unused65
3224,207,110,28,Unused66
3225,207,110,29,Unused67
3226,207,110,30,Unused68
3227,207,110,31,Unused69
3228,207,110,32,Unused70
3229,207,110,33,Unused71
3230,207,110,34,Unused72
3231,207,110,35,Unused73
3232,207,110,36,Unused74
3233,207,110,37,Unused75
3234,207,110,38,Unused76
3235,207,110,39,Unused77
3236,207,110,40,Unused78
3237,207,110,41,Unused79
3238,207,110,42,Unused80
3239,207,110,43,Unused81
3240,207,110,44,Unused82
3241,207,110,45,Unused83
3242,207,110,46,Unused84
3243,207,110,47,Unused85
3244,207,110,48,Unused86
3245,207,110,49,Unused87
3246,207,110,50,Unused88
3247,207,110,51,Unused89
3248,207,110,52,Unused90
3249,207,110,53,Unused91
3250,207,110,54,Unused92
3251,207,110,55,Unused93
3252,207,110,56,Unused94
3253,207,110,57,Unused95
3254,207,110,58,Unused96
3255,207,110,59,Unused97
3256,207,110,60,Unused98
3257,207,110,61,Unused99
3258,207,110,62,Unused100
3259,207,110,63,Unused101
3260,207,110,64,Unused102
3261,207,110,65,Unused103
3262,207,110,66,Unused104
3263,207,110,67,Unused105
3264,207,110,68,Unused106
3265,207,110,69,Unused107
3266,207,110,70,Unused108
3267,207,110,71,Unused109
3268,207,110,72,Unused110
3269,207,110,73,Unused111
3270,207,110,74,Unused112
3271,207,110,75,Unused113
3272,207,110,76,Unused114
3273,207,110,77,Unused115
3274,207,110,78,Unused116
3275,207,110,79,Unused117
3276,207,110,80,Unused118
3277,207,110,81,Unused119
3278,207,110,82,Unused120
3279,207,110,83,Unused121
3280,207,110,84,Unused122
3281,207,110,85,Unused123
3282,207,110,86,Unused124
3283,207,110,87,Unused125
3284,207,110,88,Unused126
3285,207,110,89,Unused127
3286,207,110,90,Unused128
3287,207,110,91,Unused129
3288,207,110,92,Unused130
3289,207,110,93,Unused131
3290,207,110,94,Unused132
3291,207,110,95,Unused133
3292,207,110,96,Unused134
3293,207,110,97,Unused135
3294,207,110,98,Unused136
3295,207,110,99,Unused137
3296,207,110,100,Unused138
3297,207,110,101,Unused139
3298,207,110,102,Unused140
3299,207,110,103,Unused141
3300,207,110,104,Unused142
3301,207,110,105,Unused143
3302,207,110,106,Unused144
3303,207,110,107,Unused145
3304,207,110,108,Unused146
3305,207,110,109,Unused147
3306,207,110,110,Unused148
3307,207,110,111,Unused149
3308,207,110,112,Unused150
3309,207,110,113,Unused151
3310,207,110,114,Unused152
3311,207,110,115,Unused153
3312,207,110,116,Unused154
3313,207,110,117,Unused155
3314,207,110,118,Unused156
3315,207,110,119,Unused157
3316,207,110,120,Unused158
3317,207,110,121,Unused159
3318,207,110,122,Unused160
3319,207,110,123,Unused161
3320,207,110,124,Unused162
3321,207,110,125,Unused163
3322,207,110,126,Unused164
3323,207,110,127,Unused165
3324,207,110,128,Unused166
3325,207,110,129,Unused167
3326,207,140,130,Unused168
3327,207,140,131,Unused169
3328,207,140,132,Unused170
3329,207,140,133,Unused171
3330,207,140,134,Unused172
3331,207,140,135,Unused173
3332,207,140,136,Unused174
3333,207,140,137,Unused175
3334,207,140,138,Unused176
3335,219,32,0,UnusedLand0
3336,219,32,1,UnusedLand1
3337,219,32,2,UnusedLand2
3338,219,32,3,UnusedLand3
3339,219,32,4,UnusedLand4
3340,219,32,5,UnusedLand5
3341,219,32,6,UnusedLand6
3342,219,32,7,UnusedLand7
3343,219,32,8,UnusedLand8
3344,219,32,9,UnusedLand9
3345,219,32,10,UnusedLand10
3346,219,32,11,UnusedLand11
3347,219,32,12,UnusedLand12
3348,219,32,13,UnusedLand13
3349,219,32,14,UnusedLand14
3350,219,32,15,UnusedLand15
3351,219,32,16,UnusedLand16
3352,219,32,17,UnusedLand17
3353,219,32,18,UnusedLand18
3354,219,32,19,UnusedLand19
3355,219,32,20,UnusedLand20
3356,219,32,21,UnusedLand21
3357,219,32,22,UnusedLand22
3358,219,32,23,UnusedLand23
3359,219,32,24,UnusedLand24
3360,219,32,25,UnusedLand25
3361,219,32,26,UnusedLand26
3362,219,32,27,UnusedLand27
3363,219,32,28,UnusedLand28
3364,219,32,29,UnusedLand29
3365,219,32,30,UnusedLand30
3366,219,32,31,UnusedLand31
3367,219,32,32,UnusedLand32
3368,219,32,33,UnusedLand33
3369,219,32,34,UnusedLand34
3370,219,32,35,UnusedLand35
3371,219,32,36,UnusedLand36
3372,219,32,37,UnusedLand37
3373,219,32,38,UnusedLand38
3374,219,32,39,UnusedLand39
3375,219,32,40,UnusedLand40
3376,219,32,41,UnusedLand41
3377,219,32,42,UnusedLand42
3378,219,32,43,UnusedLand43
3379,219,32,44,UnusedLand44
3380,219,32,45,UnusedLand45
3381,219,32,46,UnusedLand46
3382,219,32,47,UnusedLand47
3383,219,32,48,UnusedLand48
3384,219,32,49,UnusedLand49
3385,219,32,50,UnusedLand50
3386,219,32,51,UnusedLand51
3387,219,32,52,UnusedLand52
3388,219,32,53,UnusedLand53
3389,219,32,54,UnusedLand54
3390,219,32,55,UnusedLand55
3391,219,32,56,UnusedLand56
3392,219,32,57,UnusedLand57
3393,219,32,58,UnusedLand58
3394,219,32,59,UnusedLand59
3395,219,32,60,UnusedLand60
3396,219,32,61,UnusedLand61
3397,219,32,62,UnusedLand62
3398,219,32,63,UnusedLand63
3399,219,32,64,UnusedLand64
3400,219,32,65,UnusedLand65
3401,219,32,66,UnusedLand66
3402,219,32,67,UnusedLand67
3403,219,32,68,UnusedLand68
3404,219,32,69,UnusedLand69
3405,219,32,70,UnusedLand70
3406,219,32,71,UnusedLand71
3407,219,32,72,UnusedLand72
3408,219,32,73,UnusedLand73
3409,219,32,74,UnusedLand74
3410,219,32,75,UnusedLand75
3411,219,32,76,UnusedLand76
3412,219,32,77,UnusedLand77
3413,219,32,78,UnusedLand78
3414,219,32,79,UnusedLand79
3415,219,32,80,UnusedLand80
3416,219,32,81,UnusedLand81
3417,219,32,82,UnusedLand82
3418,219,32,83,UnusedLand83
3419,219,32,84,UnusedLand84
3420,219,32,85,UnusedLand85
3421,219,32,86,UnusedLand86
3422,219,32,87,UnusedLand87
3423,219,32,88,UnusedLand88
3424,219,32,89,UnusedLand89
3425,219,32,90,UnusedLand90
3426,219,32,91,UnusedLand91
3427,219,32,92,UnusedLand92
3428,219,32,93,UnusedLand93
3429,219,32,94,UnusedLand94
3430,219,32,95,UnusedLand95
3431,219,32,96,UnusedLand96
3432,219,32,97,UnusedLand97
3433,219,32,98,UnusedLand98
3434,219,32,99,UnusedLand99
3435,219,32,100,UnusedLand100
3436,219,32,101,UnusedLand101
3437,219,32,102,UnusedLand102
3438,219,32,103,UnusedLand103
3439,219,32,104,UnusedLand104
3440,219,32,105,UnusedLand105
3441,219,32,106,UnusedLand106
3442,219,32,107,UnusedLand107
3443,219,32,108,UnusedLand108
3444,219,32,109,UnusedLand109
3445,219,32,110,UnusedLand110
3446,219,32,111,UnusedLand111
3447,219,32,112,UnusedLand112
3448,219,32,113,UnusedLand113
3449,219,32,114,UnusedLand114
3450,219,32,115,UnusedLand115
3451,219,32,116,UnusedLand116
3452,219,32,117,UnusedLand117
3453,219,32,118,UnusedLand118
3454,219,32,119,UnusedLand119
3455,219,32,120,UnusedLand120
3456,219,32,121,UnusedLand121
3457,219,32,122,UnusedLand122
3458,219,32,123,UnusedLand123
3459,219,32,124,UnusedLand124
3460,219,32,125,UnusedLand125
3461,219,32,126,UnusedLand126
3462,219,32,127,UnusedLand127
3463,219,32,128,UnusedLand128
3464,219,32,129,UnusedLand129
3465,219,32,130,UnusedLand130
3466,219,32,131,UnusedLand131
3467,219,32,132,UnusedLand132
3468,219,32,133,UnusedLand133
3469,219,32,134,UnusedLand134
3470,219,32,135,UnusedLand135
3471,219,32,136,UnusedLand136
3472,219,32,137,UnusedLand137
3473,219,32,138,UnusedLand138
3474,219,32,139,UnusedLand139
3475,219,32,140,UnusedLand140
3476,219,32,141,UnusedLand141
3477,219,32,142,UnusedLand142
3478,219,32,143,UnusedLand143
3479,219,32,144,UnusedLand144
3480,219,32,145,UnusedLand145
3481,219,32,146,UnusedLand146
3482,219,32,147,UnusedLand147
3483,219,32,148,UnusedLand148
3484,219,32,149,UnusedLand149
3485,219,32,150,UnusedLand150
3486,219,32,151,UnusedLand151
3487,219,32,152,UnusedLand152
3488,219,32,153,UnusedLand153
3489,219,32,154,UnusedLand154
3490,219,32,155,UnusedLand155
3491,219,32,156,UnusedLand156
3492,219,32,157,UnusedLand157
3493,219,32,158,UnusedLand158
3494,219,32,159,UnusedLand159
3495,219,32,160,UnusedLand160
3496,219,32,161,UnusedLand161
3497,219,32,162,UnusedLand162
3498,219,32,163,UnusedLand163
3499,219,32,164,UnusedLand164
3500,219,32,165,UnusedLand165
3501,219,32,166,UnusedLand166
3502,219,32,167,UnusedLand167
3503,219,32,168,UnusedLand168
3504,219,32,169,UnusedLand169
3505,219,32,170,UnusedLand170
3506,219,32,171,UnusedLand171
3507,219,32,172,UnusedLand172
3508,219,32,173,UnusedLand173
3509,219,32,174,UnusedLand174
3510,219,32,175,UnusedLand175
3511,219,32,176,UnusedLand176
3512,219,32,177,UnusedLand177
3513,219,32,178,UnusedLand178
3514,219,32,179,UnusedLand179
3515,219,32,180,UnusedLand180
3516,219,32,181,UnusedLand181
3517,219,32,182,UnusedLand182
3518,219,32,183,UnusedLand183
3519,219,32,184,UnusedLand184
3520,219,32,185,UnusedLand185
3521,219,32,186,UnusedLand186
3522,219,32,187,UnusedLand187
3523,219,32,188,UnusedLand188
3524,219,32,189,UnusedLand189
3525,219,32,190,UnusedLand190
3526,219,32,191,UnusedLand191
3527,219,32,192,UnusedLand192
3528,219,32,193,UnusedLand193
3529,219,32,194,UnusedLand194
3530,219,32,195,UnusedLand195
3531,219,32,196,UnusedLand196
3532,219,32,197,UnusedLand197
3533,219,32,198,UnusedLand198
3534,219,32,199,UnusedLand199
3535,219,32,200,UnusedLand200
3536,219,32,201,UnusedLand201
3537,219,32,202,UnusedLand202
3538,219,32,203,UnusedLand203
3539,219,32,204,UnusedLand204
3540,219,32,205,UnusedLand205
3541,219,32,206,UnusedLand206
3542,219,32,207,UnusedLand207
3543,219,32,208,UnusedLand208
3544,219,32,209,UnusedLand209
3545,219,32,210,UnusedLand210
3546,219,32,211,UnusedLand211
3547,219,32,212,UnusedLand212
3548,219,32,213,UnusedLand213
3549,219,32,214,UnusedLand214
3550,219,32,215,UnusedLand215
3551,219,32,216,UnusedLand216
3552,219,32,217,UnusedLand217
3553,219,32,218,UnusedLand218
3554,219,32,219,UnusedLand219
3555,219,32,220,UnusedLand220
3556,219,32,221,UnusedLand221
3557,219,32,222,UnusedLand222
3558,219,32,223,UnusedLand223
3559,219,32,224,UnusedLand224
3560,219,32,225,UnusedLand225
3561,219,32,226,UnusedLand226
3562,219,32,227,UnusedLand227
3563,219,32,228,UnusedLand228
3564,219,32,229,UnusedLand229
3565,219,23,120,RNW
3566,219,23,121,RNW
3567,219,23,122,RNW
3568,219,23,123,RNW
3569,219,23,124,RNW
3570,219,23,125,RNW
3571,219,23,126,RNW
3572,219,23,127,RNW
3573,219,23,128,RNW
3574,219,23,129,RNW
3575,219,23,130,RNW
3576,219,23,131,RNW
3577,219,23,132,RNW
3578,219,23,133,RNW
3579,219,23,134,RNW
3580,219,23,135,RNW
3581,219,23,136,RNW
3582,219,23,137,RNW
3583,219,23,138,RNW
3584,219,23,139,RNW
3585,219,23,140,RNW
3586,219,23,141,RNW
3587,219,23,142,RNW
3588,219,23,143,RNW
3589,219,23,144,RNW
3590,219,23,145,RNW
3591,219,23,146,RNW
3592,219,23,147,RNW
3593,219,23,148,RNW
3594,219,23,149,RNW
3595,219,23,150,RNW
3596,219,23,151,RNW
3597,219,23,152,RNW
3598,219,23,153,RNW
3599,219,23,154,RNW
3600,219,23,155,RNW
3601,219,23,156,RNW
3602,219,23,157,RNW
3603,219,23,158,RNW
3604,219,23,159,RNW
3605,219,23,160,RNW
3606,219,23,161,RNW
3607,219,23,162,RNW
3608,219,23,163,RNW
3609,219,23,164,RNW
3610,219,23,165,RNW
3611,219,23,166,RNW
3612,219,23,167,RNW
3613,219,23,168,RNW
3614,219,23,169,RNW
3615,219,23,170,RNW
3616,219,23,171,RNW
3617,219,23,172,RNW
3618,219,23,173,RNW
3619,219,23,174,RNW
3620,219,23,175,RNW
3621,219,23,176,RNW
3622,219,23,177,RNW
3623,219,23,178,RNW
3624,219,23,179,RNW
3625,219,23,180,RNW
3626,219,23,181,RNW
3627,219,23,182,RNW
3628,219,23,183,RNW
3629,219,23,184,RNW
3630,219,23,185,RNW
3631,219,23,186,RNW
3632,219,23,187,RNW
3633,219,23,188,RNW
3634,219,23,189,RNW
3635,219,23,190,RNW
3636,219,23,191,RNW
3637,219,23,192,RNW
3638,219,23,193,RNW
3639,219,23,194,RNW
3640,219,23,195,RNW
3641,219,23,196,RNW
3642,219,23,197,RNW
3643,219,23,198,RNW
3644,219,23,199,RNW
3645,219,23,200,RNW
3646,219,23,201,RNW
3647,219,23,202,RNW
3648,219,23,203,RNW
3649,219,23,204,RNW
3650,219,23,205,RNW
3651,219,23,206,RNW
3652,219,23,207,RNW
3653,219,23,208,RNW
3654,219,24,209,RNW
3655,219,24,210,RNW
3656,219,24,211,RNW
3657,219,24,212,RNW
3658,219,24,213,RNW
3659,219,24,214,RNW
3660,219,24,215,RNW
3661,219,24,216,RNW
3662,219,24,217,RNW
3663,219,24,218,RNW
3664,219,24,219,RNW
3665,219,24,220,RNW
3666,219,24,221,RNW
3667,219,24,222,RNW
3668,219,24,223,RNW
3669,219,24,224,RNW
3670,219,24,225,RNW
3671,219,24,226,RNW
3672,219,24,227,RNW
3673,219,24,228,RNW
3674,219,24,229,RNW
3675,219,24,230,RNW
3676,219,24,231,RNW
3677,219,24,232,RNW
3678,219,24,233,RNW
3679,219,24,234,RNW
3680,219,24,235,RNW
3681,219,24,236,RNW
3682,219,24,237,RNW
3683,219,24,238,RNW
3684,219,24,239,RNW
3685,219,24,240,RNW
3686,219,24,241,RNW
3687,219,24,242,RNW
3688,219,24,243,RNW
3689,219,24,244,RNW
3690,219,24,245,RNW
3691,219,24,246,RNW
3692,219,24,247,RNW
3693,219,24,248,RNW
3694,219,24,249,RNW
3695,219,24,150,RNW
3696,225,25,151,RNW
3697,225,25,152,RNW
3698,225,25,153,RNW
3699,225,25,154,RNW
3700,225,25,155,RNW
3701,225,25,156,RNW
3702,225,25,157,RNW
3703,225,25,158,RNW
3704,225,25,159,RNW
3705,225,25,160,RNW
3706,225,25,161,RNW
3707,225,25,162,RNW
3708,225,25,163,RNW
3709,225,25,164,RNW
3710,225,25,165,RNW
3711,225,25,166,RNW
3712,225,25,167,RNW
3713,225,25,168,RNW
3714,225,25,169,RNW
3715,225,25,170,RNW
3716,225,25,171,RNW
3717,225,25,172,RNW
3718,225,25,173,RNW
3719,225,25,174,RNW
3720,225,25,175,RNW
3721,225,25,176,RNW
3722,225,25,177,RNW
3723,225,25,178,RNW
3724,225,25,179,RNW
3725,225,25,180,RNW
3726,225,25,181,RNW
3727,225,25,182,RNW
3728,225,25,183,RNW
3729,225,25,184,RNW
3730,225,25,185,RNW
3731,225,25,186,RNW
3732,225,25,187,RNW
3733,225,25,188,RNW
3734,225,25,189,RNW
3735,225,25,190,RNW
3736,225,25,191,RNW
3737,225,25,192,RNW
3738,225,25,193,RNW
3739,225,25,194,RNW
3740,225,25,195,RNW
3741,225,25,196,RNW
3742,225,25,197,RNW
3743,225,25,198,RNW
3744,225,25,199,RNW
3745,225,25,200,RNW
3746,225,25,201,RNW
3747,225,25,202,RNW
3748,225,25,203,RNW
3749,225,25,204,RNW
3750,225,25,205,RNW
3751,225,25,206,RNW
3752,225,25,207,RNW
3753,225,25,208,RNW
3754,225,25,209,RNW
3755,225,25,210,RNW
3756,225,25,211,RNW
3757,225,25,212,RNW
3758,225,25,213,RNW
3759,225,25,214,RNW
3760,225,25,215,RNW
3761,225,25,216,RNW
3762,225,25,217,RNW
3763,225,25,218,RNW
3764,225,25,219,RNW
3765,100,10,120,RNW
3766,100,10,121,RNW
3767,100,10,122,RNW
3768,100,10,123,RNW
3769,100,10,124,RNW
3770,100,10,125,RNW
3771,100,10,126,RNW
3772,100,10,127,RNW
3773,100,10,128,RNW
3774,100,10,129,RNW
3775,100,10,130,RNW
3776,100,10,131,RNW
3777,100,10,132,RNW
3778,100,10,133,RNW
3779,100,10,134,RNW
3780,100,10,135,RNW
3781,100,10,136,RNW
3782,100,10,137,RNW
3783,100,10,138,RNW
3784,100,10,139,RNW
3785,100,10,140,RNW
3786,100,10,141,RNW
3787,100,10,142,RNW
3788,100,10,143,RNW
3789,100,10,144,RNW
3790,100,10,145,RNW
3791,100,10,146,RNW
3792,100,10,147,RNW
3793,100,10,148,RNW
3794,100,10,149,RNW
3795,100,10,150,RNW
3796,100,10,151,RNW
3797,100,10,152,RNW
3798,100,10,153,RNW
3799,100,10,154,RNW
3800,100,10,155,RNW
3801,100,10,156,RNW
3802,100,10,157,RNW
3803,100,10,158,RNW
3804,100,10,159,RNW
3805,100,10,160,RNW
3806,100,10,161,RNW
3807,100,10,162,RNW
3808,100,10,163,RNW
3809,100,10,164,RNW
3810,100,10,165,RNW
3811,100,10,166,RNW
3812,100,10,167,RNW
3813,100,10,168,RNW
3814,100,10,169,RNW
3815,100,10,170,RNW
3816,100,10,171,RNW
3817,100,10,172,RNW
3818,100,10,173,RNW
3819,100,10,174,RNW
3820,100,10,175,RNW
3821,100,10,176,RNW
3822,100,10,177,RNW
3823,100,10,178,RNW
3824,100,10,179,RNW
3825,100,10,180,RNW
3826,100,10,181,RNW
3827,100,10,182,RNW
3828,100,10,183,RNW
3829,100,10,184,RNW
3830,100,10,185,RNW
3831,100,10,186,RNW
3832,100,10,187,RNW
3833,100,10,188,RNW
3834,100,10,189,RNW
3835,100,10,190,RNW
3836,100,10,191,RNW
3837,100,10,192,RNW
3838,100,10,193,RNW
3839,100,10,194,RNW
3840,100,10,195,RNW
3841,100,10,196,RNW
3842,100,10,197,RNW
3843,100,10,198,RNW
3844,100,10,199,RNW
3845,100,11,100,RNW
3846,100,11,101,RNW
3847,100,11,102,RNW
3848,100,11,103,RNW
3849,100,11,104,RNW
3850,100,11,105,RNW
3851,100,11,106,RNW
3852,100,11,107,RNW
3853,100,11,108,RNW
3854,100,11,109,RNW
3855,100,11,110,RNW
3856,100,11,111,RNW
3857,100,11,112,RNW
3858,100,11,113,RNW
3859,100,11,114,RNW
3860,100,11,115,RNW
3861,100,11,116,RNW
3862,100,11,117,RNW
3863,100,11,118,RNW
3864,100,11,119,RNW
3865,100,11,120,RNW
3866,100,11,121,RNW
3867,100,11,122,RNW
3868,100,11,123,RNW
3869,100,11,124,RNW
3870,100,11,125,RNW
3871,100,11,126,RNW
3872,100,11,127,RNW
3873,100,11,128,RNW
3874,100,11,129,RNW
3875,100,11,130,RNW
3876,100,11,131,RNW
3877,100,11,132,RNW
3878,100,11,133,RNW
3879,100,11,134,RNW
3880,100,11,135,RNW
3881,100,11,136,RNW
3882,100,11,137,RNW
3883,100,11,138,RNW
3884,100,11,139,RNW
3885,100,11,140,RNW
3886,100,11,141,RNW
3887,100,11,142,RNW
3888,100,11,143,RNW
3889,100,11,144,RNW
3890,100,11,145,RNW
3891,100,11,146,RNW
3892,100,11,147,RNW
3893,100,11,148,RNW
3894,100,11,149,RNW
3895,100,11,150,RNW
3896,100,11,151,RNW
3897,100,11,152,RNW
3898,100,11,153,RNW
3899,100,11,154,RNW
3900,100,11,155,RNW
3901,100,11,156,RNW
3902,100,11,157,RNW
3903,100,11,158,RNW
3904,100,11,159,RNW
3905,100,11,160,RNW
3906,100,11,161,RNW
3907,100,11,162,RNW
3908,100,11,163,RNW
3909,100,11,164,RNW
3910,100,11,165,RNW
3911,100,11,166,RNW
3912,100,11,167,RNW
3913,100,11,168,RNW
3914,100,11,169,RNW
3915,100,11,170,RNW
3916,100,11,171,RNW
3917,100,11,172,RNW
3918,100,11,173,RNW
3919,100,11,174,RNW
3920,100,11,175,RNW
3921,100,11,176,RNW
3922,100,11,177,RNW
3923,100,11,178,RNW
3924,100,11,179,RNW
3925,100,11,180,RNW
3926,100,11,181,RNW
3927,100,11,182,RNW
3928,100,11,183,RNW
3929,100,11,184,RNW
3930,100,11,185,RNW
3931,100,11,186,RNW
3932,100,11,187,RNW
3933,100,11,188,RNW
3934,100,11,189,RNW
3935,100,11,190,RNW
3936,100,11,191,RNW
3937,100,11,192,RNW
3938,100,11,193,RNW
3939,100,11,194,RNW
3940,100,11,195,RNW
3941,100,11,196,RNW
3942,100,11,197,RNW
3943,100,11,198,RNW
3944,100,11,199,RNW
3945,100,12,100,RNW
3946,100,12,101,RNW
3947,100,12,102,RNW
3948,100,12,103,RNW
3949,100,12,104,RNW
3950,100,12,105,RNW
3951,100,12,106,RNW
3952,100,12,107,RNW
3953,100,12,108,RNW
3954,100,12,109,RNW
3955,100,12,110,RNW
3956,100,12,111,RNW
3957,100,12,112,RNW
3958,100,12,113,RNW
3959,100,12,114,RNW
3960,100,12,115,RNW
3961,100,12,116,RNW
3962,100,12,117,RNW
3963,100,12,118,RNW
3964,100,12,119,RNW
3965,100,12,120,RNW
3966,100,12,121,RNW
3967,100,12,122,RNW
3968,100,12,123,RNW
3969,100,12,124,RNW
3970,100,12,125,RNW
3971,100,12,126,RNW
3972,100,12,127,RNW
3973,100,12,128,RNW
3974,100,12,129,RNW
3975,100,12,130,RNW
3976,100,12,131,RNW
3977,100,12,132,RNW
3978,100,12,133,RNW
3979,100,12,134,RNW
3980,100,12,135,RNW
3981,100,12,136,RNW
3982,100,12,137,RNW
3983,100,12,138,RNW
3984,100,12,139,RNW
3985,100,12,140,RNW
3986,100,12,141,RNW
3987,100,12,142,RNW
3988,100,12,143,RNW
3989,100,12,144,RNW
3990,100,12,145,RNW
3991,100,12,146,RNW
3992,100,12,147,RNW
3993,100,12,148,RNW
3994,100,12,149,RNW
3995,100,12,150,RNW
3996,100,12,151,RNW
3997,100,12,152,RNW
3998,100,12,153,RNW
3999,100,12,154,RNW
4000,100,12,155,RNW
4001,100,12,156,RNW
4002,100,12,157,RNW
4003,100,12,158,RNW
4004,100,12,159,RNW
4005,100,12,160,RNW
4006,100,12,161,RNW
4007,100,12,162,RNW
4008,100,12,163,RNW
4009,100,12,164,RNW
4010,100,12,165,RNW
4011,100,12,166,RNW
4012,100,12,167,RNW
4013,100,12,168,RNW
4014,100,12,169,RNW
4015,100,12,170,RNW
4016,100,12,171,RNW
4017,100,12,172,RNW
4018,100,12,173,RNW
4019,100,12,174,RNW
4020,100,12,175,RNW
4021,100,12,176,RNW
4022,100,12,177,RNW
4023,100,12,178,RNW
4024,100,12,179,RNW
4025,100,12,180,RNW
4026,100,12,181,RNW
4027,100,12,182,RNW
4028,100,12,183,RNW
4029,100,12,184,RNW
4030,100,12,185,RNW
4031,100,12,186,RNW
4032,100,12,187,RNW
4033,100,12,188,RNW
4034,100,12,189,RNW
4035,100,12,190,RNW
4036,100,12,191,RNW
4037,100,12,192,RNW
4038,100,12,193,RNW
4039,100,12,194,RNW
4040,100,12,195,RNW
4041,100,12,196,RNW
4042,100,12,197,RNW
4043,100,12,198,RNW
4044,100,12,199,RNW
4045,100,13,100,RNW
4046,100,13,101,RNW
4047,100,13,102,RNW
4048,100,13,103,RNW
4049,100,13,104,RNW
4050,100,13,105,RNW
4051,100,13,106,RNW
4052,100,13,107,RNW
4053,100,13,108,RNW
4054,100,13,109,RNW
4055,100,13,110,RNW
4056,100,13,111,RNW
4057,100,13,112,RNW
4058,100,13,113,RNW
4059,100,13,114,RNW
4060,100,13,115,RNW
4061,100,13,116,RNW
4062,100,13,117,RNW
4063,100,13,118,RNW
4064,100,13,119,RNW
4065,100,13,120,RNW
4066,100,13,121,RNW
4067,100,13,122,RNW
4068,100,13,123,RNW
4069,100,13,124,RNW
4070,100,13,125,RNW
4071,100,13,126,RNW
4072,100,13,127,RNW
4073,100,13,128,RNW
4074,100,13,129,RNW
4075,100,13,130,RNW
4076,100,13,131,RNW
4077,100,13,132,RNW
4078,100,13,133,RNW
4079,100,13,134,RNW
4080,100,13,135,RNW
4081,100,13,136,RNW
4082,100,13,137,RNW
4083,100,13,138,RNW
4084,100,13,139,RNW
4085,100,13,140,RNW
4086,100,13,141,RNW
4087,100,13,142,RNW
4088,100,13,143,RNW
4089,100,13,144,RNW
4090,100,13,145,RNW
4091,100,13,146,RNW
4092,100,13,147,RNW
4093,100,13,148,RNW
4094,100,13,149,RNW
4095,100,13,150,RNW
4096,100,13,151,RNW
4097,100,13,152,RNW
4098,100,13,153,RNW
4099,100,13,154,RNW
4100,100,13,155,RNW
4101,100,13,156,RNW
4102,100,13,157,RNW
4103,100,13,158,RNW
4104,100,13,159,RNW
4105,100,13,160,RNW
4106,100,13,161,RNW
4107,100,13,162,RNW
4108,100,13,163,RNW
4109,100,13,164,RNW
4110,100,13,165,RNW
4111,100,13,166,RNW
4112,100,13,167,RNW
4113,100,13,168,RNW
4114,100,13,169,RNW
4115,100,13,170,RNW
4116,100,13,171,RNW
4117,100,13,172,RNW
4118,100,13,173,RNW
4119,100,13,174,RNW
4120,100,13,175,RNW
4121,100,13,176,RNW
4122,100,13,177,RNW
4123,100,13,178,RNW
4124,100,13,179,RNW
4125,100,13,180,RNW
4126,100,13,181,RNW
4127,100,13,182,RNW
4128,100,13,183,RNW
4129,100,13,184,RNW
4130,100,13,185,RNW
4131,100,13,186,RNW
4132,100,13,187,RNW
4133,100,13,188,RNW
4134,100,13,189,RNW
4135,100,13,190,RNW
4136,100,13,191,RNW
4137,100,13,192,RNW
4138,100,13,193,RNW
4139,100,13,194,RNW
4140,100,13,195,RNW
4141,100,13,196,RNW
4142,100,13,197,RNW
4143,100,13,198,RNW
4144,100,13,199,RNW
4145,100,14,100,RNW
4146,100,14,101,RNW
4147,100,14,102,RNW
4148,100,14,103,RNW
4149,100,14,104,RNW
4150,100,14,105,RNW
4151,100,14,106,RNW
4152,100,14,107,RNW
4153,100,14,108,RNW
4154,100,14,109,RNW
4155,100,14,110,RNW
4156,100,14,111,RNW
4157,100,14,112,RNW
4158,100,14,113,RNW
4159,100,14,114,RNW
4160,100,14,115,RNW
4161,100,14,116,RNW
4162,100,14,117,RNW
4163,100,14,118,RNW
4164,100,14,119,RNW
4165,100,14,120,RNW
4166,10,137,10,Mbata
4167,130,167,20,Matamba
4168,50,197,50,Kwanza
4169,170,17,70,North Kasanje
4170,90,47,100,Middle Kasanje
4171,210,77,110,South Kasanje
4172,30,107,130,Kwenge
4173,150,137,140,Bulungu
4174,70,167,10,Kuba
4175,190,197,20,North Lunda
4176,110,17,50,East Lunda
4177,10,47,70,Ishindi
4178,130,77,100,Pemba
4179,50,107,110,Kalundwe
4180,170,137,130,Luba
4181,90,167,140,Kusu
4182,210,197,10,Lega
4183,30,17,20,Bafuriru
4184,150,47,50,Mongu
4185,70,77,70,Luapala
4186,190,107,100,Tabwa
4187,110,137,110,Lenje
4188,10,167,130,Lala
4189,130,197,140,Nsenga
4190,50,17,10,Lunda
4191,170,47,20,Mukua
4192,90,77,50,Lomwe
4193,210,107,70,Ndingo
4194,30,137,100,Wayao
4195,150,167,110,Ibo
4196,70,197,130,Phangwa
4197,190,17,140,Makonde
4198,110,47,10,Kinga
4199,10,77,20,Rukwa
4200,130,107,50,Ngonde
4201,50,137,70,Tunsika
4202,170,167,100,Muhambwe
4203,90,197,110,Boyogoma
4204,210,17,130,Bushubi
4205,30,47,140,Karoowe
4206,150,77,10,Nyatura
4207,70,107,20,Shaga
4208,190,137,50,Toro
4209,110,167,70,Bunyoro
4210,10,197,100,Lango
4211,130,17,110,Basoga
4212,50,47,130,Turkana
4213,170,77,140,Kikuyu
4214,90,107,10,Ewaso Ngiro
4215,210,137,20,Dawa
4216,30,167,50,Urgoma
4217,150,197,70,Imatong
4218,70,17,100,Huila
4219,190,47,110,Cunene
4220,110,77,130,Bie
4221,10,107,140,Cuando
4222,130,137,10,Caprivi
4223,50,167,20,Otjozondjupa
4224,170,197,50,Hardap
4225,90,17,70,Bophuthatswana
4226,210,47,100,Tsonga
4227,30,77,110,Venda
4228,150,107,130,Mahalapye
4229,70,137,140,Chobe
4230,190,167,10,Tshuapa
4231,110,197,20,Mongo
4232,10,17,50,Vakaga
4233,130,47,70,Mbomou
4234,50,77,100,Uele
4235,170,107,110,Ituri
4236,90,137,130,Salamat
4237,210,167,140,Sligo
4238,30,197,10,Kildare
4239,150,17,20,Thomond
4240,70,47,50,Ulaid
4241,190,77,70,Donegal
4242,110,107,100,Sutherland
4243,10,137,110,Somerset
4244,130,167,130,Saintonge
4245,50,197,140,Cahors
4246,170,17,10,Shenkursk
4247,90,47,20,Odayev
4248,210,77,50,Szolnok
4249,30,107,70,Bacs
4250,150,137,100,Torda
4251,70,167,110,Kiralyfold
4252,190,197,130,Besalampy
4253,110,17,140,Antsalova
4254,10,47,10,Tsimhety
4255,130,77,20,Antankarana
4256,50,107,50,Maroantsetra
4257,170,137,70,Betsileo
4258,90,167,100,Antemoro
4259,210,197,110,Fiherana
4260,30,17,130,Antaifasy
4261,150,47,140,Limpopo
4262,70,77,10,Jokkmokk
4263,190,107,20,Birkaland
4264,110,137,50,Karelia
4265,10,167,70,Vlore
4266,130,197,100,Durres
4267,50,17,110,Aetolia
4268,170,47,130,Rif
4269,90,77,140,Mbamba
4270,210,107,10,Cabinda
4271,30,137,20,Nyanga
4272,150,167,50,Cook Islands
4273,70,197,70,Al Qadirif
4274,190,17,100,Mazyr
4275,110,47,110,Bezhetsk
4276,10,77,130,Ust-Vym
4277,130,107,140,Nanbu
4278,3,195,254,Lake Albert
4279,4,215,254,Lake Edward
4280,5,235,254,Lake Kivu
4281,6,255,254,Lake Mweru
4282,50,137,10,Aanaar
4283,170,167,20,Kainuu
4284,90,197,50,Evora
4285,210,17,70,Rostov
4286,30,47,100,Luki
4287,150,77,110,Ditmarschen
4288,70,107,130,Aarhus
4289,190,137,140,Kolding
4290,110,167,10,Smalenene
4291,10,197,20,Bratsberg
4292,130,17,50,Agdesiden
4293,50,47,70,Elfsborg
4294,170,77,100,Dal
4295,90,107,110,Goinge
4296,210,137,130,Tioharad
4297,30,167,140,Janjero
4298,150,197,10,Abarquh
4299,70,17,20,Syrmia
4300,190,47,50,Branicevo
4301,110,77,70,Iwo Jima
4302,10,107,100,Uvea
4303,0,194,254,Bohai Sea
4304,1,214,254,Kanto Sea
4305,2,234,254,Coast of Hokkaido
4306,3,254,254,North Japan Basin
4307,4,194,254,Molucca Sea
4308,5,214,254,Halmahera Sea
4309,6,234,254,Eastern Yellow Sea
4310,130,137,110,Hyuga
4311,50,167,130,Higo
4312,170,197,140,Hizen
4313,90,17,10,Iwami
4314,210,47,20,Bizen
4315,30,77,50,Tango
4316,150,107,70,Iyo
4317,70,137,100,Kii
4318,190,167,110,Shinano
4319,110,197,130,Sagami
4320,10,17,140,Shimousa
4321,130,47,10,Shimotsuke
4322,50,77,20,Ugo
4323,170,107,50,Oshima
4324,90,137,70,Yongping
4325,210,167,100,Zhending
4326,30,197,110,Haizhou
4327,150,17,130,Huangzhou
4328,70,47,140,Fengxiang
4329,190,77,10,Tongren
4330,110,107,20,Hulan
4331,10,137,50,Jiangzhou
4332,130,167,70,Taining
4333,50,197,100,Ju Ud
4334,170,17,110,Anding
4335,90,47,130,Nagchu
4336,210,77,140,Balikul
4337,30,107,10,Turpan
4338,150,137,20,Qurqara-usu
4339,70,167,50,Maralbexi
4340,190,197,70,Hetao
4341,110,17,100,Dazhou
4342,10,47,110,Jiazhou
4343,130,77,130,Luzhou
4344,50,107,140,Kalar
4345,170,137,10,Fudali
4346,90,167,20,Ulch
4347,210,197,50,Pijin
4348,30,17,70,Buteha
4349,150,47,100,Bayan Tumen
4350,70,77,110,Khiagt
4351,190,107,130,Dundgovi
4352,110,137,140,Ulaangom
4353,10,167,10,Sangju
4354,130,197,20,Naju
4355,50,17,50,Chungju
4356,170,47,70,Suwon
4357,90,77,100,Haeju
4358,210,107,110,Ganggye
4359,30,137,130,Trencin
4360,150,167,140,Olomouc
4361,70,197,10,Leignitz
4362,190,17,20,Belgrade
4363,110,47,50,Fejer
4364,7,254,254,Vistula Lagoon
4365,10,77,70,Wenden
4366,130,107,100,Ula
4367,50,137,110,Toropets
4368,170,167,130,Starodub
4369,90,197,140,Vyazma
4370,210,17,10,Mstislav
4371,30,47,20,Owrucz
4372,150,77,50,Kashin
4373,70,107,70,Zubtsov
4374,190,137,100,Mologa
4375,110,167,110,Mozhaisk
4376,10,197,130,Kolomna
4377,130,17,140,Yuriev
4378,50,47,10,Starodub
4379,170,77,20,Pronsk
4380,90,107,50,Solvychegodsk
4381,210,137,70,Mezen
4382,30,167,100,Onega
4383,150,197,110,Velsk
4384,70,17,130,Vyshny Volochyok
4385,190,47,140,Ustyuzhna
4386,110,77,10,Totma
4387,10,107,20,Sol Galitskaya
4388,130,137,50,Tetyushi
4389,50,167,70,Ar Chally
4390,170,197,100,Izhkar
4391,90,17,110,Bolgar
4392,210,47,130,Aqaba
4393,30,77,140,Al Wajh
4394,150,107,10,Azraq
4395,70,137,20,Suwaida
4396,190,167,50,Karaitan
4397,110,197,70,Sudayr
4398,10,17,100,Yamamah
4399,130,47,110,Taif
4400,50,77,130,Qunfudah
4401,170,107,140,Zabid
4402,90,137,10,Taiz
4403,210,167,20,Dhamar
4404,30,197,50,Sahda
4405,150,17,70,Shihr
4406,70,47,100,Al Ghayda
4407,190,77,110,Baraimi
4408,110,107,130,Sur
4409,10,137,140,Ibra
4410,130,167,10,Shatt
4411,50,197,20,Shushtar
4412,170,17,50,Hoveyzeh
4413,90,47,70,Qazania
4414,210,77,100,Mardin
4415,30,107,110,Arbil
4416,150,137,130,Sulimaniyeh
4417,70,167,140,Hisn Kayfa
4418,190,197,10,Bitlis
4419,110,17,20,Homs
4420,10,47,50,Ayntab
4421,130,77,70,Shamakhi
4422,50,107,100,Mianeh
4423,170,137,110,Kartli
4424,90,167,130,Bayazid
4425,210,197,140,Tao
4426,30,17,10,Khoy
4427,150,47,20,Shaki
4428,70,77,50,Lakia
4429,190,107,70,Aksaray
4430,110,137,100,Denizli
4431,10,167,110,Aydin
4432,130,197,130,Divrigi
4433,50,17,140,Karahisar
4434,170,47,10,Eskesehir
4435,90,77,20,Cangiri
4436,210,107,50,Kirsehir
4437,30,137,70,Tokat
4438,150,167,100,Mansura
4439,70,197,110,Bahiriya
4440,190,17,130,Atfih
4441,110,47,140,Isna
4442,10,77,10,Girga
4443,130,107,20,Farafreh
4444,50,137,50,Ghuriyan
4445,170,167,70,Sarakhs
4446,90,197,100,Nishapur
4447,210,17,110,Jask
4448,30,47,130,Chakhansur
4449,150,77,140,Fasa
4450,70,107,10,Darab
4451,190,137,20,Kazerun
4452,110,167,50,Siraf
4453,10,197,70,Tabas
4454,130,17,100,Kashan
4455,50,47,110,Tun
4456,170,77,130,Savah
4457,90,107,140,Soltanieh
4458,210,137,10,Rasht
4459,30,167,20,Astara
4460,150,197,50,Sari
4461,70,17,70,Malamir
4462,190,47,100,Termez
4463,110,77,110,Kish
4464,10,107,130,Saidabad
4465,130,137,140,Sisavan
4466,50,167,10,Jaffa
4467,0,204,254,Dahlek Archipelago
4468,1,224,254,Qamr Bay
4469,2,244,254,Pirate Coast
4470,3,204,254,Johnston Atoll
4471,4,224,254,Cuyu Archipelago
4472,5,244,254,Philippine Trench
4473,6,204,254,Kara Sea
4474,170,197,20,Ifugao
4475,90,17,50,Laguna
4476,210,47,70,Mindoro
4477,30,77,100,Buglas
4478,150,107,110,Cebu
4479,70,137,130,Leyte
4480,190,167,140,Zamboanga
4481,110,197,10,Caraga
4482,10,17,20,Taytay
4483,130,47,50,Ise
4484,50,77,70,Mikawa
4485,170,107,100,Baram
4486,90,137,110,East March
4487,210,167,130,West March
4488,30,197,140,Argyll
4489,150,17,10,Inner Hebrides
4490,70,47,20,Mann
4491,190,77,50,Montgomery
4492,110,107,70,Hull
4493,10,137,100,Scarborough
4494,130,167,110,Carmathen
4495,50,197,130,Cambridgeshire
4496,170,17,140,Sussex
4497,90,47,10,Coventry
4498,210,77,20,Devon
4499,30,107,50,Dorset
4500,150,137,70,Chester
4501,70,167,100,Leicester
4502,190,197,110,Ormond
4503,110,17,130,Kinsale
4504,10,47,140,Middlands
4505,130,77,10,Ommeland
4506,50,107,20,Haag
4507,170,137,50,Rennes
4508,90,167,70,Cotentin
4509,210,197,100,Vendee
4510,30,17,110,Angouleme
4511,150,47,130,Chartres
4512,70,77,140,Touraine
4513,190,107,10,Troyes
4514,110,137,20,Vivarais
4515,10,167,50,Auxerrois
4516,130,197,70,Tabayin
4517,50,17,100,Salin
4518,170,47,110,Yamethin
4519,90,77,130,Prome
4520,210,107,140,Yawnghwe
4521,30,137,10,Mawkmai
4522,150,167,20,Dagon
4523,70,197,50,Minsin
4524,190,17,70,Katha
4525,110,47,100,Mong Kung
4526,10,77,110,Ruhunu
4527,130,107,130,Salavata
4528,50,137,140,Trincomale
4529,170,167,10,Kumari
4530,90,197,20,Samana
4531,210,17,50,Dindigul
4532,30,47,70,Cannanore
4533,150,77,100,Salem
4534,70,107,110,Negapattam
4535,190,137,130,Tranqebar
4536,110,167,140,Kanchipuram
4537,10,197,10,Nelore
4538,130,17,20,Adanki
4539,50,47,50,Chandragiri
4540,170,77,70,Seringapatam
4541,90,107,100,Sira
4542,210,137,110,Gutti
4543,30,167,130,Adavani
4544,150,197,140,Kondavidu
4545,70,17,10,Chitaldurg
4546,190,47,20,Honnavara
4547,110,77,50,Mudgal
4548,10,107,70,Rajapur
4549,130,137,100,Daman
4550,50,167,110,Kolhapur
4551,170,197,130,Junir
4552,90,17,140,Nasik
4553,210,47,10,Dharangaon
4554,30,77,20,Sholapur
4555,150,107,50,Devarakonda
4556,70,137,70,Paithre
4557,190,167,100,Nander
4558,110,197,110,Khamammet
4559,10,17,130,Narayanpur
4560,130,47,140,Ganjam
4561,50,77,10,Washim
4562,170,107,20,Karanja
4563,90,137,50,Manidurg
4564,210,167,70,Kanker
4565,30,197,100,Kalahandi
4566,150,17,110,Patna
4567,70,47,130,Parlakhimedi
4568,190,77,140,Jammu
4569,110,107,10,Mayurbhanj
4570,10,137,20,Sonpur
4571,130,167,50,Ratanpur
4572,50,197,70,Thalner
4573,170,17,100,Porbandar
4574,90,47,110,Diu
4575,210,77,130,Jhalavad
4576,30,107,140,Cambay
4577,150,137,10,Narbada
4578,70,167,20,Saugor
4579,190,197,50,Handia
4580,110,17,70,Ujjain
4581,10,47,100,Vagad
4582,130,77,110,Bhatnair
4583,50,107,130,Bundi
4584,170,137,140,Ranthambore
4585,90,167,10,Mahoba
4586,210,197,20,Kalinjar
4587,30,17,50,Bandogarh
4588,150,47,70,Rohtasgarh
4589,70,77,100,Soumelpur
4590,190,107,110,Bishnupur
4591,110,137,130,Monghyr
4592,10,167,140,Sonargaon
4593,130,197,10,Fathabad
4594,50,17,20,Nadia
4595,170,47,50,Satgaon
4596,90,77,70,Haibitnagar
4597,210,107,100,Goraghat
4598,30,137,110,Mahikantha
4599,150,167,130,Punakha
4600,70,197,140,Sikkim
4601,190,17,10,Morang
4602,110,47,20,Makwanpur
4603,10,77,50,Palpa
4604,130,107,70,Purnia
4605,50,137,100,Saran
4606,170,167,110,Champaran
4607,90,197,130,Hajipur
4608,210,17,140,Ghazipur
4609,30,47,10,Dang
4610,150,77,20,Sirmur
4611,70,107,50,Khairabad
4612,190,137,70,Feyzabad
4613,110,167,100,Kora
4614,10,197,110,Kannauj
4615,130,17,130,Sambhal
4616,50,47,140,Bareily
4617,170,77,10,Bharatpur
4618,90,107,20,Bhilwara
4619,210,137,50,Merta
4620,30,167,70,Mansura
4621,150,197,100,Nasirpur
4622,70,17,110,Khairpur
4623,190,47,130,Barmer
4624,110,77,140,Churu
4625,10,107,10,Bahawalpur
4626,130,137,20,Karor
4627,50,167,50,Shorkot
4628,170,197,70,Bhera
4629,90,17,100,Bharuch
4630,210,47,110,Dipalpur
4631,30,77,130,Sakya
4632,150,107,140,Gyirong
4633,70,137,10,Purang
4634,190,167,20,Nedong
4635,110,197,50,Tsurphu
4636,10,17,70,Damxung
4637,130,47,100,Rutog
4638,50,77,110,Skardu
4639,170,107,130,Doti
4640,90,137,140,Himalaya
4641,210,167,10,Himalaya
4642,30,197,20,Gaoligong Mountains
4643,150,17,50,Kunlun Shan
4644,70,47,70,Taklamakan
4645,190,77,100,Pamir
4646,110,107,110,Pamir
4647,10,137,130,Grand Erg Occidental
4648,130,167,140,Grand Erg Oriental
4649,50,197,10,Erg Iguidi
4650,170,17,20,El Djouf
4651,90,47,50,Idehan Ubari
4652,210,77,70,Idehan Murzuk
4653,30,107,100,Ramlat Rebiana
4654,150,137,110,Great Sand Sea
4655,70,167,130,Awjila
4656,190,197,140,Caucasus
4657,110,17,10,Caucasus
4658,10,47,20,Air Massif
4659,0,224,254,Gulf of Kutch
4660,1,244,254,Gulf of Mannar
4661,2,204,254,Gorringe Ridge
4662,130,77,50,Central Greenland
4663,50,107,70,Inowroclaw
4664,170,137,100,Dobryzn
4665,90,167,110,Rawa
4666,210,197,130,Gniezno
4667,30,17,140,Checiny
4668,150,47,10,Kuyavia
4669,70,77,20,Iasi
4670,190,107,50,Birlad
4671,110,137,70,Giurgiu
4672,10,167,100,Severin
4673,130,197,110,Wielun
4674,50,17,130,Upita
4675,170,47,140,Wilkimierz
4676,90,77,10,Lida
4677,210,107,20,Nowogrodek
4678,30,137,50,Chelm
4679,150,167,70,Kremenets
4680,70,197,100,Winnica
4681,190,17,110,Drohobycz
4682,110,47,130,Lubnie
4683,10,77,140,Rylsk
4684,130,107,10,Bobrujsk
4685,50,137,20,Sluck
4686,170,167,50,Balti
4687,90,197,70,Pleven
4688,210,17,100,Varna
4689,30,47,110,Malaga
4690,150,77,130,Albacete
4691,70,107,140,Huelva
4692,190,137,10,Xativa
4693,110,167,20,Castellon
4694,10,197,50,Avila
4695,130,17,70,Palencia
4696,50,47,100,Zamora
4697,170,77,110,Lugo
4698,90,107,130,Vigo
4699,210,137,140,Aviero
4700,30,167,10,Calatayud
4701,150,197,20,Orense
4702,70,17,50,Minorca
4703,190,47,70,Ibiza
4704,110,77,100,Tetouan
4705,10,107,110,Saida
4706,130,137,130,Sale
4707,50,167,140,Anfa
4708,170,197,10,Tenerife
4709,90,17,20,Kairwan
4710,210,47,50,Sabha
4711,30,77,70,Demnate
4712,150,107,100,High Atlas
4713,70,137,110,Draa
4714,190,167,130,El Golea
4715,110,197,140,Reggane
4716,10,17,5,Abalessa
4717,130,47,15,Siwa
4718,50,77,25,Texcoco
4719,170,107,35,Tlacopan
4720,90,137,45,Malinalco
4721,210,167,55,Acambaro
4722,30,197,65,Ihuatzio
4723,150,17,75,Puruaran
4724,70,47,85,Amaxocotlan
4725,190,77,95,Tohono
4726,110,107,105,Tzapotzingo
4727,10,137,115,Sayula
4728,130,167,125,Tecoman
4729,50,197,135,Yohualtepec
4730,170,17,145,Teotitlan
4731,90,47,5,Xocotla
4732,210,77,15,Mitla
4733,30,107,25,Tzotzil
4734,150,137,35,Jakaltek
4735,70,167,45,Qumarkaj
4736,190,197,55,Kobox
4737,110,17,65,Moran
4738,10,47,75,Xiu
4739,130,77,85,Chikinchel
4740,50,107,95,Ulva
4741,170,137,105,Xicaque
4742,90,167,115,Tzul
4743,210,197,125,Guaymi
4744,30,17,135,Kuna
4745,150,47,145,Talamanca
4746,70,77,5,Cuauhtochco
4747,190,107,15,Sinu
4748,110,137,25,Magangue
4749,10,167,35,Chimila
4750,130,197,45,Motilones
4751,50,17,55,Moniquira
4752,170,47,65,Pastos
4753,90,77,75,Putumayos
4754,210,107,85,Chichitames
4755,30,137,95,Pijaos
4756,150,167,105,Achaguas
4757,70,197,115,Variquicimento
4758,190,17,125,Yukpa
4759,110,47,135,Wayuu
4760,10,77,145,Tacarigua
4761,130,107,5,Guanaguanare
4762,50,137,15,Tuneo
4763,170,167,25,Guanipa
4764,90,197,35,Anzoategui
4765,210,17,45,Atabapo
4766,30,47,55,Yaquimo
4767,150,77,65,Marien
4768,70,107,75,Ciguayo
4769,190,137,85,Higuey
4770,110,167,95,Canimar
4771,10,197,105,Escambrey
4772,130,17,115,Guane
4773,50,47,125,Mayaca
4774,170,77,135,Potano
4775,90,107,145,Tanu
4776,210,137,5,Nitahende
4777,30,167,15,Tel Kondaha
4778,150,197,25,Natahende
4779,70,17,35,Towa
4780,190,47,45,Keres
4781,110,77,55,Sobaipuri
4782,10,107,65,Tsekaadn
4783,130,137,75,Taaqtam
4784,50,167,85,Choinumni
4785,170,197,95,Ohlone
4786,90,17,105,Wintun
4787,210,47,115,Paipai
4788,30,77,125,Tecpatitlan
4789,150,107,135,Xilotepec
4790,70,137,145,Pame
4791,190,167,5,Xiconaque
4792,110,197,15,Jocome
4793,10,17,25,Xochipillan
4794,130,47,35,Tarahumara
4795,50,77,45,Xecora
4796,170,107,55,Acaxee
4797,90,137,65,Mayo
4798,210,167,75,Opata
4799,30,197,85,Montserrat
4800,150,17,95,Cayman Islands
4801,70,47,105,
4802,190,77,115,
4803,110,107,125,
4804,,137,135,
,,167,145,
,,197,,
