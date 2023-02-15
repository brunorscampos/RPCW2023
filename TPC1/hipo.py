import json

with open('hipo.json','r') as f:
    hipo = json.load(f)

with open('extinct_hipo.json','r') as f:
    extinct_hipo = json.load(f)

pagina_web = """
<!DOCTYPE html>
<html>
    <head>
        <title>HyperPotamus</title>
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>HyperPotamus</h1>
        <table>
            <tr>
                <td width="20%" valign="top">
                    <a name="indice"/>
                    <h2>Index</h3>
                    <h4>Hippopotamus</h4>
                    <!-- Lista com indice -->
                    <ul>
"""

for c in hipo:
    pagina_web += f"""
        <li>
            <a href="#{c['id']}">{c['common_name']}</a>
        </li>
    """
    
pagina_web += """
        </ul>
                    <h4>Extinct Hippopotamus</h4>
                    <!-- Lista com indice -->
                    <ul>
"""

for c in extinct_hipo:
    pagina_web += f"""
        <li>
            <a href="#{c['id']}">{c['species']}</a>
        </li>
    """
    
pagina_web += """
</ul>
                </td>
                <td>
                <h2>Hippopotamus</h2>
"""

for c in hipo:
    pagina_web += f"""
                    <a name="{c['id']}"/>
                    <div class="wrapingimage">   
                    <img src="{c['img']}" alt="{c['species']}" height="200">
                    </div>
                    <h3>{c['common_name']}</h3>
                    <p><b>Species: </b> {c['species']} </p>
                    <p><b>Habitat: </b> {c['habitat']} </p>
                    <p><b>Conservation Status: </b> {c['conservation_status']} </p>
                    <p><b>Population Trend: </b> {c['population_trend']} </p>
                    <p><b>Average Weight(Kg): </b> {c['average_weight_kg']} </p>
                    <p><b>Average Length(m): </b> {c['average_length_m']} </p>
                    <p><b>Diet: </b> {c['diet']} </p>
                    <p><b>Description: </b> {c['description']} </p>
                    <address>[<a href="#indice">Voltar ao Indice</a>]</address>
"""

pagina_web += """
                <h2>Extinct Hippopotamus</h2>
"""

for c in extinct_hipo:
    pagina_web += f"""
                    <div class="wrapingimage">   
                    <img src="{c['img']}" alt="{c['species']}" height="200">
                    </div>
                    <a name="{c['id']}"/>
                    <h3>{c['species']}</h3>
                    <p><b>Habitat: </b> {c['habitat']} </p>
                    <p><b>Extinction Date: </b> {c['extinction_date']} </p>
                    <p><b>Average Weight(Kg): </b> {c['average_weight_kg']} </p>
                    <p><b>Average Length(m): </b> {c['average_length_m']} </p>
                    <p><b>Description: </b> {c['description']} </p>
                    <address>[<a href="#indice">Voltar ao Indice</a>]</address>
"""

pagina_web += """
                </td>
            </tr>
        </table>
    </body>
</html>
"""

with open('hipo.html','w') as f:
    f.write(pagina_web)


#<div className="serachApostadores"/>