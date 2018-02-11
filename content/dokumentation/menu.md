---
title: "Navigation"
date: 2018-02-01T08:56:16+01:00

---


Hvis du vil oprette flere punkter i menuen, opretter du en ny sektion i config.toml filen. Og opretter mapper i content, med et tilsvarende navn og linker til dem fra toml filen.

ex. 

[[menu.main]] <br>

name= "Home" <br>
title= "Home section" <br>
weight= "1" <br>
indentifier="home" <br>
url="/" <br>