<template>
  <div class="pl-7 pr-7">
    <div class="firstRow pb-6 flex justify-between">
      <div class="footerContainer flex gap-x-24">
        <div class="listContainer">
          <p>Empresa</p>
          <ul>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Empleo</a></li>
            <li><a href="#">For the Record</a></li>
          </ul>
        </div>
        <div class="listContainer">
          <p>Comunidades</p>
          <ul>
            <li><a href="#">Para artistas</a></li>
            <li><a href="#">Desarrolladores</a></li>
            <li><a href="#">Publicidad</a></li>
            <li><a href="#">Inversores</a></li>
            <li><a href="#">Proveedores</a></li>
          </ul>
        </div>
        <div class="listContainer">
          <p>Enlaces utiles</p>
          <ul>
            <li><a href="#">Asistencia</a></li>
            <li><a href="#">App gratis para movil</a></li>
          </ul>
        </div>
      </div>
      <div>
        <ul class="networksList flex gap-x-6">
          <li>
            <a href="#"
              ><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYklEQVR4nO2Zy04UQRSGe4GK4TouYauCcSGK7lTiTmIi+gSEiLyAF3QNsiUYlhJ8AS+JKxm87tS9gG4U3CoKiCv5TMlfsTKZ6a7u6Z4ek/mTSTrTVaf+03Xq3CoIGmggfwA9wDiwCCwBW6QHI8vILAI3gcNZKHASeEbtsQj0p6HAHmAW2JHgr8A94KJ2pyWVL7W7VotkDgFzWgutfRdoSiq4ADyXsJ/ABNCeFnGP9duBSWDb2Z3OJDthTemLMa3MGEdzOQZ8EpdXwN44k405GawCXZky9ePTBayJ00ycg70jczoe1AmAEzKz3+bZZ4I1qYmgzgDcEbdi1MAexzvV7GA761/QmTRmNFjmfQfwTRwPhQkywc5gLmvSFdZfc2LIaoUx83p/I0yQiaoGQ1kSrlKRy3q/ECZoRYMSpweKPyPAY2BZqceWnh/pXaHC3EEpY7zl+QjzXw4jsaFBbQkU2A/cBr57pB7rwC2gOcE6bZKxETboLxL6+XcO0afAqE1j9OvVfwvOuLdJ4hRRPJMoIiVW7XYDpz3mnHHMOHbQJW1FZE52J17EyYV0ll5q7ps4ZkYGipgzgeqIeAndP2XszoznoohI2IMdaU4hcgYcB1DIQ5ERe7Bj8I6KX8N5KGJigsGVGJwryboqWQ/yUMTadk8MzpVk9VqvF+SgyKaGt8bgXElWq2Rt/u+KmLLW4Ifn+IZphR320aBKAGN5HvaRyHTaE+qQ5OZ+CwpiBmdj8C6Vc04yjKzOmitSkqKs+EblMh/jQ2TFVwNFmpWKowTQWxngAPC6LpLGMmm8+boDgZ85faybNL5EGfNVLYryREcU7Fr1POYcbLsTmRRWG1WUus3qwlgHEIZ1XR3sy6rUXUmh+dBp3CjwUHXKpn5L+m84Se0St/mQazvIB047qHL5oO3OrUHnA+C+OF6r25ZpFLxbphpsvcpkUGcApiLNyhncr2uFba/2fY3A7nXHL10r9PlOMnd2qH3ZnTnLaD7dTl94Os7EJsfETJv/VKZMw7n0AZ+dQNuUJB5YZbZ1ydKRGePyB3tK5oRarcnij3ZmRnaJPIa5n7ikhkHVZa6zlkljehUn5h3vZNaeTnw9XbLIUeAJtUcxE4djfLepG7TNNv1IC0bWe3XyrwMHU1eggQaC2PgDcoKh50PBZGwAAAAASUVORK5CYII="
                width="20px"
                height="20px"
                alt="instagram-icon"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3klEQVR4nO2ZW4hNURiAzxjlbuQyYUpCJiYZ4YlyKbcyophQU7y5K8UoPIgnt9TMC1HexkTJC5N4kVxeeKCJEpLklmYmtzOX8+lv/qndbs/e++yz1tn71P5eznWvf3977b3+tf6VyaSkpKQUA2AmsBrYDqwHaoHyTCkAjAFOAG/w5htwSSQD2pkMLPH6YZ5NAY2xCfhKOP4Bp909BEwHmoG/wAJ3gCnAb2CrRYkjQI78uQUsBY4Cj4A+/f6GV5BD+mMWWGVBogGzfAYqvQLdcXXpZoMS04A/BiW+AzXa9mhgjTPYB9efpfsOGBK5ZlDiBVAP7AJagF/AWmewjkEOvA5UFCAxVnvYFH2uz4fdAb/4HPwOWBlRRK6eLc54BXwS4sCbMvTlKXLSgkAOODZYwHMhG5Hb5MrAwxZC5LJhiR5go1/AxRGuyj1gJzDep90mwyJdYa7eg4iNd+uxp4A6oAoocyRBk3SEEZlrcLzP6pD+HrN88hMoc7zf5jHEJYl2P5GhwEtgHzBJZUxmYpPcDbqtJO0P8DEgr8RJc5BIG6XBniCRg5QGtUEi44BOkk1nqGUw0EiyaQ2UUJHyApJiMagPJeIoDMhyMml0ySIqtIjKDAMuJiwxNuUl4RKq0dXdz5glckB1FIGFOmuVtcR5yaZAb4wiLVF7YgTwg2TQDcyKJKIye0kGFyJLOIbiuKctb4FRBYmoTAXwOCaJXmBZwRKu5+VqxFJnITQak3AJSe31ti7+bdPqXOzZEpKC2zqpKVlKmG2SkK1KqMgQnfJLqdI09+VWLoaAVEieYgeZQdjrCWAqsBt4bUmgx8iDTf+e3Xxghr4u16Kb7Ai1Y5dXwCJTV7xST1qmAsVCKv/HgeFGJJwAs3W/IWtZ4CwwIWMbYKJs8ADPDWboh8AOYKR1AS+AOcB+2XTUeU8uZIHgmW4vb/ErcMcG/dOVah0Q6vRENwArdA1TFfc5pqRkzPIfsUZoMTqx+w0AAAAASUVORK5CYII="
                width="20px"
                height="20px"
                alt="instagram-icon"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdUlEQVR4nO2Wu0oDQRhG06hgZ6PivY6FhdjpA1h4Q6zVIpUm+jpG1F6081ZaWGofA75AvIBZ0RATjwyMMFl2//x7EVLkg2mWOXN27pPJdNNpASaAPHADlIAPW0r22y4wnqZwFDgAGrRPEzgFppJKVwGP6KkCy3Gle7YHcWPYQpyeNiNI3oGvELmu58CYcngrwDYw4LB9wF3AsI9oxEcK6ScwHcLfBtQ/1GwZzeot+rgeYAaYBR4C6jfMSEpis0812XCYfqCsYHYk8bVSPO8wi0rmUhI/KhuZc5hNJVOSxF4M8ZaS8SSxOXvDshAKtrYRNt9VCXpKIgZ6ge8QviyBVwnFWYG/kMB9ATTX370tWYdZcr5LizMviSeBOukvrnrbuxo4+Qdxsd00/R2bbymKX8Xj0idfB35SEJs2VlRSp8GccCdrxIbNRZL6ev4SQ/wMrGWSBBgGjoGaQlyz9/lQImnADxSAc/cRYJ9JZ/aNNtgCddMJ+QUhA1R3vgYpAAAAAABJRU5ErkJggg=="
                width="20px"
                height="20px"
                alt="instagram-icon"
            /></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="secondRow">
      <div>
        <ul class="flex gap-6">
          <li><a href="#">Legales</a></li>
          <li><a href="#">Centro de privacidad</a></li>
          <li><a href="#">Politicas de Privacidad</a></li>
          <li><a href="#">Cookies</a></li>
          <li><a href="#">Informacion sobre anuncios</a></li>
          <li><a href="#">Accesibilidad</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterSection",
};
</script>
<style scoped>
.listContainer ul li {
  color: #b3b3b3;
  font-size: 1rem;
}
.listContainer p {
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
}

.listContainer ul li:hover {
  color: #fff;
  text-decoration: underline;
}
.networksList li {
  background: #292929;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
}
.firstRow {
  border-bottom: 1px solid hsl(360, 0%, 53%);
}
.secondRow {
  padding-top: 2rem;
  padding-bottom: 5rem;
}
.secondRow div ul li {
  color: #b3b3b3;
}
</style>
