from bs4 import BeautifulSoup

with open('arq.xml','r') as f:
    arqs = BeautifulSoup(f, 'xml')
    
arqs = arqs.find_all("ARQELEM")

i = 1
for arq in arqs:
    biblios = arq.find_all("BIBLIO")
    
    arq_html = f"""
<!DOCTYPE html>
<html>
    <head>
        <title>{arq.IDENTI.get_text()}</title>
        <meta charset="utf-8"/>
    </head>
    <body>
"""

    arq_html += f"""
    <h1>{arq.IDENTI.get_text()}</h1>
    <p><b>DESCRI: </b> {arq.DESCRI.get_text()} </p>
    <p><b>LUGAR: </b> {arq.LUGAR.get_text()} </p>
    <p><b>FREGUE: </b> {arq.FREGUE.get_text()} </p>
    <p><b>CONCEL: </b> {arq.CONCEL.get_text()} </p>
    <p><b>CODADM: </b> {arq.CODADM.get_text() if arq.CODADM else "MISSING"} </p>
    <p><b>LATITU: </b> {arq.LATITU.get_text() if arq.LATITU else "MISSING"} </p>
    <p><b>LONGIT: </b> {arq.LONGIT.get_text() if arq.LONGIT else "MISSING"} </p>
    <p><b>ALTITU: </b> {arq.ALTITU.get_text() if arq.ALTITU else "MISSING"} </p>
    <p><b>ACESSO: </b> {arq.ACESSO.get_text() if arq.ACESSO else "MISSING"} </p>
    <p><b>QUADRO: </b> {arq.QUADRO.get_text() if arq.QUADRO else "MISSING"} </p>
    <p><b>DESARQ: </b> {arq.DESARQ.get_text()} </p>
    <p><b>INTERP: </b> {arq.INTERP.get_text() if arq.INTERP else "MISSING"} </p>
    <p><b>DEPOSI: </b> {arq.DEPOSI.get_text() if arq.DEPOSI else "MISSING"} </p>
    <p><b>BIBLIO:</b></p>
    <ul>
"""
    for biblio in biblios:
        arq_html += f"""
        <li>
            <p>{biblio.get_text()} </p>
        </li>
"""

    arq_html += f"""
    </ul>
    <p><b>AUTOR: </b> {arq.AUTOR.get_text()} </p>
    <p><b>DATA: </b> {arq.DATA.get_text()} </p>
"""    
    
    arq_html += """
    </body>
</html>
"""

    with open(f'arqs/arq{i}.html','w') as f:
        f.write(arq_html)
    i += 1


pagina_web = """
<!DOCTYPE html>
<html>
    <head>
        <title>Arqueossitios</title>
        <meta charset="utf-8"/>
    </head>
    <body>
        <h1>Arqueossitios</h1>
        <a name="indice"/>
        <h3>Indice</h3>
        <!-- Lista com indice -->
        <ul>
"""
i = 1
for arq in arqs:
    pagina_web += f"""
            <li>
                <a href="{i}">{arq.IDENTI.get_text()}</a>
            </li>
    """
    i += 1

pagina_web += """
        </ul>
    </body>
</html>
"""

with open(f'index.html','w') as f:
    f.write(pagina_web)