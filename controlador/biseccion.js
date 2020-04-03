//variables;
	var aux_Pm=0;
	var a,b,Pm,f_a,f_b,f_Pm,ecuacion,Ea,Ep,Er;


//1.Examinar la ecuacion
$('#guadar').on('submit',function(e){
	e.preventDefault();

	var dato_form_paso_1=$(this).serializeArray();

	console.log(dato_form_paso_1[1].value);
	a=parseFloat(dato_form_paso_1[1].value,8);

	console.log(dato_form_paso_1[2].value);
	b=parseFloat(dato_form_paso_1[2].value,8);


	//2. ===============Segundo paso Comprobar si exite una raizl del intervalo============
	//2. ===============Segundo paso Comprobar si exite una raizl del intervalo============
	//2. ===============Segundo paso Comprobar si exite una raizl del intervalo============
	console.log(dato_form_paso_1[0].value);
	ecuacion=dato_form_paso_1[0].value;

	//2.1 //Exmaninar el intervalo (A)
	f_a=calcular_ecuacion(ecuacion,a);
	console.log("f(a) : ",f_a);

	//2.2 //Exmaninar el intervalo (A)
	f_b=calcular_ecuacion(ecuacion,b);
	console.log("f(b) : ",f_b);

	$("input#eq").val($("input[name=ecuacion]").val());

	//2.3==============SI SE CUMPLE LA CONDICION PUEDE CREAR EL BLUCLE=============
	if((f_a*f_b)<0){
		$("#respuesta").append("<br><h2 style='color: red'> 2. Si existe una raiz en el intervalo f(a)f(b) : "+(f_a*f_b)+" < 0 </h2>");



			//3. ========================================Encontramos el Punto Medio====================
			//3. ========================================Encontramos el Punto Medio====================
			//3. ========================================Encontramos el Punto Medio====================
				Pm=punto_medio(a,b);
				console.log(Pm);

				$("#respuesta").append("<br><h3> 3 El Punto Medio es  : (Pm) = "+Pm+" </h3>");



				//Examnino la funcion en ese nuevo punto
				f_Pm=calcular_ecuacion(ecuacion,Pm);
				console.log("f_Pm: ",f_Pm);
				$("#respuesta").append("<br><h4> 3.1 Examino en  :F(Pm) = "+f_Pm+" </h4>");

				console.log("f_Pm*f_a ",f_Pm*f_a );

				//====================Aplico numero de Interaciones
				//====================Aplico numero de Interaciones
				//====================Aplico numero de Interaciones
			var interaccion=1;
			

			$("#respuesta").append("<br><h4> 3.2 Examino en  : F(Pm)*F(a) = "+( parseFloat(f_Pm) *f_a)+" < 0 </h4>");

			while(interaccion<50 && Pm!=0){
				
					if(interaccion==1){

						Ea=Math.abs(Pm);
						Er=Ea/Pm;
						Ep=Er*100;
					}

	               $("#insert").append(
	               			"<tr>"+
			                      
			                      "<td>"
			                        + interaccion
			                      +"</td>"+

			                      "<td>"
			                        +a.toFixed(2)
			                      +"</td>"+


			                      "<td>"
			                        +b
			                      +"</td>"+

			                      "<td>"
			                        +Pm.toFixed(5)
			                      +"</td>"+

			                      "<td>"
			                        +f_a
			                      +"</td>"+

			                      "<td>"
			                        +f_b
			                      +"</td>"+

			                      "<td>"
			                        +f_Pm
			                      +"</td>"+

			                      "<td>"
			                        +f_Pm*f_a
			                      +"</td>"+


			                      "<td>"
			                        +Ea
			                      +"</td>"+


			                      "<td>"
			                        +Er
			                      +"</td>"+

			                       "<td>"
			                        +Ep
			                      +" % </td>"+



		                      "</tr>"

	                	);

	               Ea=Pm;


					if(f_a*f_Pm<0){
						console.log("f(a)*f(pm)< 0: =>si");
						 b=Pm;

		               	 Pm=punto_medio(a,b);
		               	 console.log(Pm);


		               	 f_a=calcular_ecuacion(ecuacion,a);

		               	 f_b=calcular_ecuacion(ecuacion,b);

		               	 f_Pm=calcular_ecuacion(ecuacion,Pm);

						
		               //Ea
	               		Ea=Math.abs(Ea-Pm);

	               		//Er

	               		Er=Ea/Pm;

	               		//Ep
	               		Ep=Er*100;


						
		       


					}else{
						console.log("f(a)*f(pm)< 0: =>no");
						a=Pm;

						Pm=punto_medio(a,b);

		               	 f_a=calcular_ecuacion(ecuacion,a);

		               	 f_b=calcular_ecuacion(ecuacion,b);

		               	 f_Pm=calcular_ecuacion(ecuacion,Pm);

	               	  	//Ea
						Ea=Math.abs(Ea-Pm);

						//Er

	               		Er=Ea/Pm;

	               		//Ep
	               		Ep=Er*100;

						
					}

	               interaccion++;
				}// fin del ciclo


				

	}else{

		$("#respuesta").append("<br><h2> 2. No existe una raiz en el intervalo f(a)f(b) : "+( parseInt(f_Pm)*f_a )+" < 0 </h2>");
	}

	console.log("\n");






});
    //console.log(math.eval('2x^2-3',{x:1}).toString()) // '2 * x ^ 2 + x + 3'}



function calcular_ecuacion(cadena_ecuacion,contante){
	return math.eval(cadena_ecuacion,{x:contante}).toString();
}

function punto_medio(a,b){
	Pm=(a+b)/2;
	return Pm;
}

