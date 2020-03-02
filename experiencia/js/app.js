	var cont = 0;
		var cantidadDepartamentos = 0;
		function raf() {

			if (cont == 0) {
				cont++;
				document.getElementById("colombia").style.transition = "all 1s";
				document.getElementById("colombia").style.opacity = "0";
				document.getElementById("colombia").style.zIndex = "-1"
				document.getElementById("escalada").style.transition = "all 1s";
				document.getElementById("escalada").style.opacity = "0";
				document.getElementById("escalada").style.zIndex = "-1"
				document.getElementById("canopy").style.transition = "all 1s";
				document.getElementById("canopy").style.opacity = "0";
				document.getElementById("canopy").style.zIndex = "-1"
				document.getElementById("rafting").style.transition = "all 1s";
				document.getElementById("rafting").style.opacity = "1";
				document.getElementById("rafting").style.zIndex = "-1"
				// ____________________________________________________
				document  .getElementById("textoDeporte").innerHTML= "El descenso de ríos o balsismo o rafting consiste en navegar río abajo, en una balsa neumática (raft), por ríos con secciones turbulentas o “rápidos”. \n práctica del rafting no exige gran preparación. Las balsas tienen capacidad para 4 a 8 personas y el nivel de dificultad y riesgo depende de las características del caudal; por lo tanto, lo que más cuenta es conocer a fondo el río. "


				let tops = [250, 310, 365, 450, 505]
				let lefts = [310, 180, 210, 130, -15]
				let names = ["Norte de Santander", "Antioquia", "Cundinamarca", "Tolima", "Nariño"]
				cantidadDepartamentos = names.length;
				for (let i = 1; i <= cantidadDepartamentos; i++) {

					let boton = document.createElement("button");
					boton.type = "button";
					// para onclick funciones
					boton.onclick=names+'()';

					boton.setAttribute("data-toggle", "modal");
					boton.setAttribute("data-target", "#exampleModal" + i)
					document.getElementById("botones").appendChild(boton)

					boton.style.position = "relative"
					boton.style.top = tops[i - 1] + "px";
					boton.style.left = lefts[i - 1] + "px";
					boton.id = "boton" + i;
					boton.style.backgroundImage = "url('https://www.stickpng.com/assets/thumbs/5888925dbc2fc2ef3a1860ad.png')"
					boton.style.backgroundSize = "cover"
					boton.style.backgroundColor = "rgba(255,255,255,0)"
					boton.style.border = "none";
					boton.style.height = "29px"
					boton.style.width = "30px"
					document.getElementById("boton"+i).style.transition="all 2s"
					boton.setAttribute("title", names[i - 1]);

				}
			}

			else {
				removeBoton();
				document.getElementById("colombia").style.transition = "all 1s";
				document.getElementById("colombia").style.opacity = "0";
				document.getElementById("colombia").style.zIndex = "-1"
				document.getElementById("escalada").style.transition = "all 1s";
				document.getElementById("escalada").style.opacity = "0";
				document.getElementById("escalada").style.zIndex = "-1"
				document.getElementById("canopy").style.transition = "all 1s";
				document.getElementById("canopy").style.opacity = "0";
				document.getElementById("canopy").style.zIndex = "-1"
				document.getElementById("rafting").style.transition = "all 1s";
				document.getElementById("rafting").style.opacity = "1";
				document.getElementById("rafting").style.zIndex = "-1"



				let tops = [250, 310, 365, 450, 505]
				let lefts = [310, 180, 210, 130, -15]
				let names = ["Norte de Santander", "Antioquia", "Cundinamarca", "Tolima", "Nariño"]
				cantidadDepartamentos = names.length;

				for (let i = 1; i <= cantidadDepartamentos; i++) {

					let boton = document.createElement("button");
					boton.type = "button";

					boton.setAttribute("data-toggle", "modal");
					boton.setAttribute("data-target", "#exampleModal" + i)
					document.getElementById("botones").appendChild(boton)

					boton.style.position = "relative"
					boton.style.top = tops[i - 1] + "px";
					boton.style.left = lefts[i - 1] + "px";
					boton.id = "boton" + i;
					boton.style.backgroundImage = "url('https://www.stickpng.com/assets/thumbs/5888925dbc2fc2ef3a1860ad.png')"
					boton.style.backgroundSize = "cover"
					boton.style.backgroundColor = "rgba(255,255,255,0)"
					boton.style.border = "none";
					boton.style.height = "29px"
					boton.style.width = "30px"
					document.getElementById("boton"+i).style.transition="all 2s"
					boton.setAttribute("title", names[i - 1]);

				}

			}
		}


		function can() {

			if (cont == 0) {
				cont++;
				document.getElementById("colombia").style.transition = "all 1s";
				document.getElementById("colombia").style.opacity = "0";
				document.getElementById("colombia").style.zIndex = "-1"
				document.getElementById("escalada").style.transition = "all 1s";
				document.getElementById("escalada").style.opacity = "0";
				document.getElementById("escalada").style.zIndex = "-1"
				document.getElementById("rafting").style.transition = "all 1s";
				document.getElementById("rafting").style.opacity = "0";
				document.getElementById("rafting").style.zIndex = "-1"
				document.getElementById("canopy").style.transition = "all 1s";
				document.getElementById("canopy").style.opacity = "1";
				document.getElementById("canopy").style.zIndex = "-1"


				let tops = [140, 343, 460]
				let lefts = [330, 110, 100]
				let names = ["Guajira", "Chocó", "Cauca"]
				cantidadDepartamentos = names.length;
				for (let i = 1; i <= cantidadDepartamentos; i++) {

					let boton = document.createElement("button");
					boton.type = "button";

					boton.setAttribute("data-toggle", "modal");
					boton.setAttribute("data-target", "#exampleModal" + (i + (Number(5))))
					document.getElementById("botones").appendChild(boton)

					boton.style.position = "relative"
					boton.style.top = tops[i - 1] + "px";
					boton.style.left = lefts[i - 1] + "px";
					boton.id = "boton" + i;
					boton.style.backgroundImage = "url('https://www.stickpng.com/assets/thumbs/5888925dbc2fc2ef3a1860ad.png')"
					boton.style.backgroundSize = "cover"
					boton.style.backgroundColor = "rgba(255,255,255,0)"
					boton.style.border = "none";
					boton.style.height = "29px"
					boton.style.width = "30px"
					document.getElementById("boton"+i).style.transition="all 2s"
					boton.setAttribute("title", names[i - 1]);

				}
			} else {
				removeBoton();
				document.getElementById("colombia").style.transition = "all 1s";
				document.getElementById("colombia").style.opacity = "0";
				document.getElementById("colombia").style.zIndex = "-1"
				document.getElementById("escalada").style.transition = "all 1s";
				document.getElementById("escalada").style.opacity = "0";
				document.getElementById("escalada").style.zIndex = "-1"
				document.getElementById("rafting").style.transition = "all 1s";
				document.getElementById("rafting").style.opacity = "0";
				document.getElementById("rafting").style.zIndex = "-1"
				document.getElementById("canopy").style.transition = "all 1s";
				document.getElementById("canopy").style.opacity = "1";
				document.getElementById("canopy").style.zIndex = "-1"


				let tops = [140, 343, 460]
				let lefts = [330, 110, 100]
				let names = ["Guajira", "Chocó", "Cauca"]
				cantidadDepartamentos = names.length;
				for (let i = 1; i <= cantidadDepartamentos; i++) {

					let boton = document.createElement("button");
					boton.type = "button";

					boton.setAttribute("data-toggle", "modal");
					boton.setAttribute("data-target", "#exampleModal" + (i + (Number(5))))
					document.getElementById("botones").appendChild(boton)

					boton.style.position = "relative"
					boton.style.top = tops[i - 1] + "px";
					boton.style.left = lefts[i - 1] + "px";
					boton.id = "boton" + i;
					boton.style.backgroundImage = "url('https://www.stickpng.com/assets/thumbs/5888925dbc2fc2ef3a1860ad.png')"
					boton.style.backgroundSize = "cover"
					boton.style.backgroundColor = "rgba(255,255,255,0)"
					boton.style.border = "none";
					boton.style.height = "29px"
					boton.style.width = "30px"
					document.getElementById("boton"+i).style.transition="all 2s"
					boton.setAttribute("title", names[i - 1]);

				}
			}
		}

		function esc() {

			if (cont == 0) {
				cont++;
				document.getElementById("colombia").style.transition = "all 1s";
				document.getElementById("colombia").style.opacity = "0";
				document.getElementById("colombia").style.zIndex = "-1"

				document.getElementById("rafting").style.transition = "all 1s";
				document.getElementById("rafting").style.opacity = "0";
				document.getElementById("rafting").style.zIndex = "-1"
				document.getElementById("canopy").style.transition = "all 1s";
				document.getElementById("canopy").style.opacity = "0";
				document.getElementById("canopy").style.zIndex = "-1"
				document.getElementById("escalada").style.transition = "all 1s";
				document.getElementById("escalada").style.opacity = "1";
				document.getElementById("escalada").style.zIndex = "-1"


				let tops = [190, 256, 445, 455, 490, 400, 600]
				let lefts = [240, 224, 160, 300, 350, 390, 260]
				let names = ["Magdalena", "Bolivar", "Huila", "Guaviare", "Vaupés", "Guainía", "Amazonas"]
				cantidadDepartamentos = names.length;
				for (let i = 1; i <= cantidadDepartamentos; i++) {

					let boton = document.createElement("button");
					boton.type = "button";

					boton.setAttribute("data-toggle", "modal");
					boton.setAttribute("data-target", "#exampleModal" + (i + (Number(8))))
					document.getElementById("botones").appendChild(boton)

					boton.style.position = "relative"
					boton.style.top = tops[i - 1] + "px";
					boton.style.left = lefts[i - 1] + "px";
					boton.id = "boton" + i;
					boton.style.backgroundImage = "url('https://www.stickpng.com/assets/thumbs/5888925dbc2fc2ef3a1860ad.png')"
					boton.style.backgroundSize = "cover"
					boton.style.backgroundColor = "rgba(255,255,255,0)"
					boton.style.border = "none";
					boton.style.height = "29px"
					boton.style.width = "30px"
					document.getElementById("boton"+i).style.transition="all 2s"
					boton.setAttribute("title", names[i - 1]);

				}
			} else {
				removeBoton()
				document.getElementById("colombia").style.transition = "all 1s";
				document.getElementById("colombia").style.opacity = "0";
				document.getElementById("colombia").style.zIndex = "-1"

				document.getElementById("rafting").style.transition = "all 1s";
				document.getElementById("rafting").style.opacity = "0";
				document.getElementById("rafting").style.zIndex = "-1"
				document.getElementById("canopy").style.transition = "all 1s";
				document.getElementById("canopy").style.opacity = "0";
				document.getElementById("canopy").style.zIndex = "-1"
				document.getElementById("escalada").style.transition = "all 1s";
				document.getElementById("escalada").style.opacity = "1";
				document.getElementById("escalada").style.zIndex = "-1"


				let tops = [190, 256, 445, 455, 490, 400, 600]
				let lefts = [240, 224, 160, 300, 350, 390, 260]
				let names = ["Magdalena", "Bolivar", "Huila", "Guaviare", "Vaupés", "Guainía", "Amazonas"]
				cantidadDepartamentos = names.length;
				for (let i = 1; i <= cantidadDepartamentos ; i++) {

					let boton = document.createElement("button");
					boton.type = "button";

					boton.setAttribute("data-toggle", "modal");
					boton.setAttribute("data-target", "#exampleModal" + (i + (Number(8))))
					document.getElementById("botones").appendChild(boton)

					boton.style.position = "relative"
					boton.style.top = tops[i - 1] + "px";
					boton.style.left = lefts[i - 1] + "px";
					boton.id = "boton" + i;
					boton.style.backgroundImage = "url('https://www.stickpng.com/assets/thumbs/5888925dbc2fc2ef3a1860ad.png')"
					boton.style.backgroundSize = "cover"
					boton.style.backgroundColor = "rgba(255,255,255,0)"
					boton.style.border = "none";
					boton.style.height = "29px"
					boton.style.width = "30px"
					document.getElementById("boton"+i).style.transition="all 2s"
					boton.setAttribute("title", names[i - 1]);

				}
			}

		}
		function removeBoton() {

			for (let i = 1; i <= cantidadDepartamentos; i++) {
				
					let boton = document.getElementById("boton" + i);
					boton.parentNode.removeChild(boton);
				
			}
		}
function norteSantander() {

	
}
