(() => {
  const photos = [
    'operacion-1.jpeg','operacion-2.jpeg','operacion-3.jpeg','operacion-4.jpeg',
    'operacion-5.jpeg','operacion-6.jpeg','operacion-7.jpeg','operacion-8.jpeg',
    'operacion-9.jpeg','operacion-10.jpeg','operacion-11.jpeg'
  ];
  const stock = {
    planting: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=82',
    pruning: 'https://images.unsplash.com/photo-1675726060825-3c12546247f0?auto=format&fit=crop&w=1200&q=82',
    irrigation: 'https://images.unsplash.com/photo-1770385433541-398a9ddb2668?auto=format&fit=crop&w=1200&q=82',
    recycling: 'https://images.unsplash.com/photo-1745530827360-036771a8b34f?auto=format&fit=crop&w=1200&q=82',
    safety: 'https://images.unsplash.com/photo-1667344970482-e939871e9f25?auto=format&fit=crop&w=1200&q=82',
    fire: 'https://images.unsplash.com/photo-1633092228879-d6a88c22e7bc?auto=format&fit=crop&w=1200&q=82'
  };
  const credits = {
    planting: ['Noah Buscher', 'https://unsplash.com/photos/hands-holding-small-plant-seedling-in-soil-x8ZStukS2PM'],
    pruning: ['Paulo Silva', 'https://unsplash.com/photos/a-man-in-a-safety-vest-is-using-a-tree-trimmer-PQy8hGujRHc'],
    irrigation: ['Zhen Yao', 'https://unsplash.com/photos/gardener-watering-plants-with-a-hose-in-a-park-cObAiqAJXHs'],
    recycling: ['Thomas Leblanc', 'https://unsplash.com/photos/colorful-recycling-bins-with-green-foliage-tAJLuu1eda0'],
    safety: ['Han Chenxu', 'https://unsplash.com/photos/a-man-wearing-a-hard-hat-and-protective-gear-working-on-a-piece-of-wood-cLaU96y3NT8'],
    fire: ['Chandler Cruttenden', 'https://unsplash.com/photos/a-group-of-firefighters-standing-around-a-fire-hydrant-bPUvUVxPzGE']
  };
  const fallbackByImage = {planting:'operacion-1.jpeg',pruning:'operacion-5.jpeg',irrigation:'operacion-2.jpeg',recycling:'operacion-7.jpeg',safety:'operacion-5.jpeg',emergency:'operacion-11.jpeg',dust:'operacion-7.jpeg',biodiversity:'operacion-2.jpeg',fire:'operacion-5.jpeg',terrain:'operacion-7.jpeg',vehicle:'operacion-8.jpeg',fds:'operacion-3.jpeg',chemicals:'operacion-3.jpeg',ergonomics:'operacion-4.jpeg',environment:'operacion-7.jpeg',uv:'operacion-1.jpeg',iperc:'operacion-5.jpeg',motivation:'operacion-6.jpeg'};
  const localThemes = {
    fds: ['./assets/photos/operacion-3.jpeg','Operario de SGAE realiza aplicación fitosanitaria con protección personal','Verifica etiqueta y FDS antes de aplicar'],
    chemicals: ['./assets/photos/operacion-3.jpeg','Operario de SGAE realiza aplicación fitosanitaria con protección personal','Manejo fitosanitario en campo'],
    ergonomics: ['./assets/photos/operacion-4.jpeg','Colaborador de SGAE traslada material de trabajo junto a una plantación','Preparación de suelo y movimiento de materiales'],
    emergency: ['./assets/photos/operacion-11.jpeg','Cuadrilla de SGAE realiza una práctica de traslado en camilla','Práctica de respuesta ante emergencias'],
    planting: ['./assets/photos/operacion-1.jpeg','Colaborador de SGAE instala un plantón en un terreno intervenido','Siembra de especies en campo'],
    pruning: ['./assets/photos/operacion-5.jpeg','Equipo de campo revisa herramientas y equipos de protección','Revisión de equipos y coordinación de la tarea'],
    irrigation: ['./assets/photos/operacion-2.jpeg','Cuadrilla de SGAE trabaja en un área revegetada con líneas de riego','Riego tecnificado en área de recuperación'],
    safety: ['./assets/photos/operacion-5.jpeg','Personal de SGAE con casco, protección auditiva y equipo de seguridad','Equipo de protección personal en campo'],
    biodiversity: ['./assets/photos/operacion-2.jpeg','Cuadrilla planta especies en una ladera en recuperación','Revegetación y cuidado del entorno'],
    environment: ['./assets/photos/operacion-7.jpeg','Área de rehabilitación ambiental en terreno de montaña','Recuperación de terreno intervenido'],
    fire: [stock.fire,'Práctica real de uso de extintor en un área exterior','Entrenamiento de respuesta ante incendios'],
    terrain: ['./assets/photos/operacion-7.jpeg','Cuadrilla trabaja en recuperación de terreno intervenido','Fotografía de terreno SGAE'],
    vehicle: ['./assets/photos/operacion-8.jpeg','Equipo de campo y maquinaria en un área de rehabilitación','Fotografía de operación SGAE'],
    uv: ['./assets/photos/operacion-1.jpeg','Colaborador de SGAE realiza labores de campo bajo exposición solar','Protección y pausas en trabajo al aire libre'],
    iperc: ['./assets/photos/operacion-5.jpeg','Cuadrilla de SGAE coordina una tarea y revisa el equipo','Conversación preventiva antes de iniciar'],
    dust: ['./assets/photos/operacion-7.jpeg','Personal trabaja en la preparación de suelo en una ladera seca','Polvo y condiciones del terreno'],
    motivation: ['./assets/photos/operacion-6.jpeg','Equipo de SGAE reunido en campo con sus implementos de seguridad','Equipo SGAE y colaboración']
  };
  const makeLesson=(visual,headline,objective,scenario,hazards,steps,example,question,wrong,right,commitment)=>({visual,headline,objective,scenario,hazards,steps,example,question,wrong,right,commitment});
  const lessonLibrary={
    'reconocer peligros antes de iniciar':makeLesson('iperc','Primero observa. Luego empiezas.','Identificar qué puede causar daño antes de iniciar la tarea.','El equipo llega al frente de trabajo y encuentra condiciones distintas a las del turno anterior.',['Cambios en el terreno o el clima','Cruce con personas o equipos','Herramientas o materiales fuera de lugar'],['Detente y observa el área completa.','Comenta los peligros con el equipo.','Acuerda controles y confirma que se puedan aplicar.'],'Antes de mover una herramienta, observa la ruta y libera los obstáculos.','¿Qué haces si el área cambió desde la última revisión?','Empiezo igual porque ya conozco la tarea.','Pauso, vuelvo a evaluar y coordino los controles con el equipo.','Antes de iniciar, observaré el área y comunicaré cualquier cambio.'),
    'verificar el estado de las herramientas':makeLesson('pruning','Una herramienta apta protege tus manos.','Reconocer defectos visibles antes de usar una herramienta.','Antes de una jornada de poda, una herramienta presenta una guarda floja.',['Cortes por filos expuestos','Proyección de partículas','Pérdida de control por defecto o desgaste'],['Inspecciona mango, filo, guarda y uniones.','Retira de uso lo defectuoso e informa al responsable.','Usa la herramienta indicada y conserva una posición estable.'],'Si una guarda está floja, deja la herramienta fuera de servicio según el procedimiento del área.','¿Qué haces cuando detectas un defecto antes de empezar?','La uso con cuidado para terminar rápido.','La retiro de uso, la identifico e informo para su revisión.','Revisaré mis herramientas antes de usarlas y reportaré defectos.'),
    'delimitar el área de trabajo':makeLesson('iperc','Una zona clara evita cruces inesperados.','Separar el área de trabajo de las rutas de tránsito según los controles definidos.','En una intervención de mantenimiento, otras personas necesitan pasar cerca de la tarea.',['Ingreso de terceros a la zona','Interacción con vehículos o equipos','Exposición a materiales desplazados'],['Define límites antes de comenzar.','Coloca la señalización o barrera que corresponda al procedimiento.','Mantén libre la ruta y vigila los accesos.'],'Coordina quién controla el acceso mientras se realiza la tarea.','¿Qué haces si la zona delimitada queda abierta?','Continúo y aviso al final.','Detengo la actividad hasta restablecer el control del área.','Mantendré delimitada y ordenada la zona de trabajo.'),
    'seleccionar el epp adecuado':makeLesson('safety','El EPP correcto depende de la tarea.','Relacionar la exposición de la tarea con el EPP definido en los documentos vigentes.','El equipo cambia de una tarea de riego a una actividad con herramientas.',['Protección insuficiente para la exposición','EPP deteriorado o mal ajustado','Falsa confianza por usar un elemento incorrecto'],['Revisa el análisis y el procedimiento de la tarea.','Verifica estado, compatibilidad y ajuste del EPP requerido.','Consulta al supervisor si la exposición o el EPP no están claros.'],'Antes de una actividad con proyección de partículas, confirma la protección ocular indicada.','¿Puedes usar el mismo EPP para todas las actividades?','Sí, mientras se vea en buen estado.','No siempre: se verifica el EPP que corresponde a cada exposición.','Confirmaré el EPP requerido para la tarea antes de iniciarla.'),
    'mantener orden y limpieza':makeLesson('recycling','El orden también es un control preventivo.','Mantener accesos y zonas de trabajo despejados durante la jornada.','Mangueras, herramientas y residuos se acumulan en la ruta hacia el área de riego.',['Tropiezos y caídas al mismo nivel','Bloqueo de accesos','Mezcla o dispersión de residuos'],['Define dónde guardar cada herramienta.','Retira obstáculos de las rutas y recoge derrames de forma segura.','Segrega y dispone los residuos según el procedimiento local.'],'Al cerrar una tarea, devuelve las herramientas y deja el paso libre.','¿Qué deberías hacer al encontrar una manguera atravesando un acceso?','La salto y continúo.','Aseguro el paso y comunico o corrijo la condición según el procedimiento.','Dejaré mi zona de trabajo limpia y con las rutas despejadas.'),
    'prevenir la exposición a radiación uv':makeLesson('uv','El sol también forma parte del riesgo.','Aplicar las medidas preventivas definidas para exposición solar y calor.','La jornada de campo continúa con cielo despejado y poca sombra disponible.',['Exposición solar prolongada','Fatiga o malestar por calor','Deshidratación'],['Revisa las alertas y medidas establecidas para el turno.','Usa la protección personal indicada y aprovecha las zonas de sombra.','Mantén agua disponible y comunica cualquier malestar.'],'Reorganiza la pausa o actividad de acuerdo con las indicaciones del responsable.','¿Qué haces si notas malestar por calor en ti o en un compañero?','Espero a terminar para comentarlo.','Pauso y lo comunico de inmediato para seguir la respuesta del área.','Seguiré las medidas frente al sol y comunicaré síntomas tempranamente.'),
    'proteger la biodiversidad del entorno':makeLesson('planting','Trabajamos en el entorno: cuidémoslo.','Evitar impactos innecesarios sobre flora y fauna durante el trabajo.','Al trasladar materiales, el equipo observa vegetación y fauna cerca del frente.',['Daño accidental a vegetación','Perturbación o contacto con fauna','Intervención fuera del área prevista'],['Respeta los límites de intervención señalados.','Evita tocar, alimentar o trasladar fauna.','Reporta hallazgos al responsable ambiental de acuerdo con el procedimiento.'],'Si aparece fauna en la zona, no la manipules; comunica el hallazgo.','¿Debes mover por tu cuenta un animal que encuentras en el área?','Sí, para retirarlo del frente.','No: mantén distancia, protege el área y avisa al personal competente.','Respetaré los límites de trabajo y reportaré hallazgos ambientales.'),
    'comunicar cambios en las condiciones':makeLesson('iperc','Si cambia la tarea, cambia la conversación.','Reevaluar la tarea cuando cambian sus condiciones o controles.','El viento aumenta durante una operación y el equipo modifica el modo de trabajo.',['Pérdida de estabilidad o control','Controles que ya no resultan suficientes','Falta de comunicación entre cuadrilla'],['Detén la actividad en un punto seguro.','Explica qué cambió y a quién afecta.','Revisa el análisis y reinicia solo con controles acordados.'],'Una variación del clima puede cambiar la exposición y el control necesario.','¿Debes continuar si el control acordado ya no funciona?','Sí, hasta la pausa programada.','No: pausa y vuelve a coordinar antes de continuar.','Comunicaré los cambios antes de que se conviertan en un incidente.'),
    'evitar sobreesfuerzos y posturas forzadas':makeLesson('ergonomics','Cuida tu cuerpo en cada movimiento.','Reducir sobreesfuerzos al mover herramientas y materiales.','Una persona intenta trasladar sola una bandeja pesada por terreno irregular.',['Sobrecarga física','Giro del tronco con carga','Pérdida de equilibrio en terreno irregular'],['Evalúa peso, agarre, ruta y espacio disponible.','Acerca la carga y evita giros forzados.','Pide ayuda o usa el medio auxiliar definido si lo necesitas.'],'Despeja el camino antes de mover una bandeja desde el vivero.','¿Qué haces si la carga supera lo que puedes mover con control?','La levanto de todos modos y avanzo despacio.','Pido apoyo o uso la ayuda prevista antes de levantarla.','Organizaré la carga y la ruta antes de mover materiales.'),
    'segregar correctamente los residuos':makeLesson('recycling','Cada residuo en el lugar indicado.','Segregar residuos siguiendo la identificación y el procedimiento del área.','Al cierre de una actividad quedan envases, restos vegetales y material de embalaje.',['Mezcla de residuos incompatibles','Exposición durante la manipulación','Dispersión por viento o escorrentía'],['Identifica el residuo y revisa las indicaciones locales.','Usa el recipiente o zona señalizada para ese residuo.','Mantén el almacenamiento temporal ordenado y reporta dudas.'],'No decidas solo por el color de un contenedor: verifica la etiqueta del área.','¿Qué haces si no reconoces un recipiente o residuo?','Lo deposito con el residuo que más se parece.','Lo mantengo separado y consulto el procedimiento o al responsable.','Verificaré la identificación antes de segregar cada residuo.'),
    'preparar una respuesta ante emergencias':makeLesson('emergency','Saber a quién avisar también salva tiempo.','Reconocer cómo activar la respuesta ante emergencias del área.','Durante una actividad en campo, alguien comunica una condición que requiere ayuda.',['Demora en activar el plan','Exposición de personas que se acercan sin control','Desorientación sobre rutas o puntos de reunión'],['Detén la tarea y alerta por el canal establecido.','Sigue las instrucciones y rutas del plan del sitio.','No te expongas ni intervengas fuera de tu capacitación.'],'En una emergencia, brinda ubicación clara y sigue las indicaciones del equipo responsable.','¿Debes intentar una respuesta para la que no estás entrenado?','Sí, si el problema parece pequeño.','No: alerta y actúa dentro de tu entrenamiento y del plan del sitio.','Conoceré el canal de aviso y la ruta indicada para mi área.'),
    'cuidar el agua durante las operaciones':makeLesson('irrigation','Cada fuga cuenta. El agua también es parte del trabajo.','Detectar pérdidas y usar agua de forma responsable en riego y mantenimiento.','Al inspeccionar el sistema, una conexión deja escapar agua fuera de la zona de plantación.',['Pérdida de agua','Superficie húmeda y riesgo de resbalón','Daño a plantas o erosión localizada'],['Identifica y comunica la pérdida.','Aísla o señaliza el punto solo si es seguro y está dentro de tu función.','Solicita la revisión y verifica el área tras la reparación.'],'Ajusta el riego a la indicación del plan del área, no a una estimación improvisada.','¿Qué haces al encontrar una fuga que no puedes reparar?','La dejo abierta y compenso regando más tiempo.','La comunico y evito alterar el sistema sin autorización.','Reportaré las pérdidas y evitaré el desperdicio de agua.'),
    'trabajar de forma segura en equipo':makeLesson('iperc','Antes de empezar, asegúrense de entenderse.','Coordinar roles, señales y cambios de la tarea con la cuadrilla.','Dos personas van a mover materiales mientras otras trabajan cerca.',['Instrucciones distintas entre integrantes','Movimiento inesperado de la carga','Pérdida de comunicación durante una maniobra'],['Acuerden quién dirige la maniobra.','Confirmen la ruta y las señales antes de mover.','Pausen si alguien pierde visibilidad o comunicación.'],'Antes de un movimiento conjunto, repitan la indicación acordada.','¿Qué haces si no escuchas o no entiendes la señal?','Sigo el movimiento y trato de adivinar.','Pido detener la maniobra hasta confirmar la señal.','Confirmaré roles y señales con mi equipo antes de actuar.'),
    'controlar derrames y fugas':makeLesson('chemicals','Un derrame requiere una respuesta controlada.','Reconocer una fuga o derrame y activar el procedimiento correspondiente.','Durante el almacenamiento, se observa líquido alrededor de un envase.',['Contacto con una sustancia desconocida','Contaminación de suelo o drenajes','Exposición al intentar limpiar sin preparación'],['Aléjate y evita el contacto.','Avisa y sigue la ficha y el procedimiento de respuesta del sitio.','No limpies ni uses absorbentes sin capacitación e instrucciones.'],'Señaliza o restringe el acceso solo si puedes hacerlo sin exponerte.','¿Qué haces si desconoces el producto derramado?','Lo limpio usando cualquier material disponible.','Evito el contacto, aviso y sigo la respuesta establecida para el sitio.','No improvisaré ante un derrame; activarė el procedimiento aplicable.'),
    'revisar equipos antes de operarlos':makeLesson('pruning','Una revisión breve evita una falla en plena tarea.','Verificar la condición del equipo y sus controles antes de operarlo.','Antes del mantenimiento de áreas verdes, un equipo presenta un cable desgastado.',['Contacto eléctrico o falla mecánica','Proyección de objetos','Operación con guarda ausente'],['Revisa el estado visible y los controles definidos.','No operes equipos con defectos o protecciones faltantes.','Informa y solicita la revisión por personal autorizado.'],'Separa de servicio el equipo defectuoso según el proceso del área.','¿Qué haces si el equipo no pasa la revisión visual?','Lo enciendo para confirmar si funciona.','No lo opero; lo identifico e informo para evaluación.','Verificaré el equipo antes de utilizarlo.'),
    'prevenir resbalones y caídas':makeLesson('iperc','La ruta segura se revisa paso a paso.','Mantener desplazamientos controlados en superficies irregulares o húmedas.','Después del riego, un sendero queda húmedo y hay mangueras cerca del paso.',['Pérdida de equilibrio','Obstáculos en la ruta','Visibilidad reducida por materiales'],['Observa la ruta antes de trasladarte.','Retira o señaliza obstáculos de acuerdo con el procedimiento.','Camina sin prisa y usa el acceso definido.'],'Si una superficie no ofrece apoyo estable, busca una ruta segura e informa.','¿Qué haces si encuentras una ruta mojada sin señalizar?','Cruzo con cuidado sin avisar.','Evito el paso inseguro y comunico la condición para controlarla.','Mantendré los pasos libres y reportaré superficies resbaladizas.'),
    'almacenar insumos de forma segura':makeLesson('chemicals','Almacenar bien empieza por identificar.','Conservar insumos de acuerdo con su etiqueta, compatibilidad y procedimiento local.','Al recibir materiales para una jornada, algunos recipientes no tienen ubicación definida.',['Envases sin identificación visible','Mezcla de productos incompatibles','Caída o derrame por apilado inestable'],['Confirma identificación y condición del recipiente.','Consulta la información y las reglas de almacenamiento aprobadas.','Mantén el área ordenada y reporta envases dañados o sin rótulo.'],'No trasvases un producto a un recipiente sin identificación aprobada.','¿Qué haces ante un envase sin rótulo legible?','Lo guardo junto a los productos conocidos.','Lo separo de forma segura e informo para su identificación.','Verificaré la identificación y ubicación antes de almacenar insumos.'),
    'detener el trabajo ante un riesgo crítico':makeLesson('iperc','Tienes autoridad para pausar y pedir ayuda.','Actuar cuando un peligro no está controlado o cambia durante la tarea.','Durante una actividad, el equipo observa que una barrera de protección se movió.',['Exposición inmediata al peligro','Ingreso de personas al área','Continuación con un control ineficaz'],['Pausa la actividad en una condición segura.','Comunica qué control dejó de funcionar.','Reinicia solo cuando el responsable confirme condiciones adecuadas.'],'Explica el motivo de la pausa de manera directa y respetuosa.','¿Qué haces si un peligro importante permanece sin controlar?','Continúo y dejo constancia después.','Pauso la tarea y aviso para establecer controles antes de reiniciar.','Pausaré y comunicaré los riesgos que no estén controlados.'),
    'proteger manos y ojos en tareas manuales':makeLesson('safety','Manos y ojos necesitan controles antes del contacto.','Prevenir lesiones al manipular herramientas y materiales.','Una tarea manual combina bordes, polvo y pequeñas partículas.',['Cortes o atrapamientos de manos','Partículas en los ojos','Contacto con superficies o materiales irritantes'],['Selecciona guantes y protección ocular según el riesgo definido.','Inspecciona herramientas y mantiene las manos fuera de puntos de atrapamiento.','Retira de uso elementos dañados y comunica la condición.'],'Ajusta la pieza antes de trabajar; no la sostengas donde puede deslizarse hacia la mano.','¿Basta con usar guantes para controlar cualquier peligro de manos?','Sí, cualquier guante sirve.','No: el guante se elige según el riesgo y no reemplaza otros controles.','Revisaré herramientas y usaré la protección indicada para la tarea.'),
    'aplicar buenas prácticas ambientales':makeLesson('planting','Un pequeño control protege el entorno.','Aplicar acciones cotidianas para prevenir impactos ambientales.','Una cuadrilla termina una actividad y observa sobrantes cerca de una zona vegetada.',['Residuos dispersos','Daño a suelo o vegetación','Uso innecesario de agua o materiales'],['Delimita el área de intervención.','Cuida recursos y evita dejar materiales en el entorno.','Separa residuos y reporta impactos o hallazgos.'],'Antes de retirarte, revisa el suelo alrededor del frente de trabajo.','¿Qué haces si observas una afectación que no estaba prevista?','La cubro y no la reporto para evitar retrasos.','La comunico para que el responsable evalúe y registre la acción necesaria.','Cerraré cada tarea dejando el entorno ordenado y reportaré impactos.'),
    'mantener rutas de evacuación despejadas':makeLesson('emergency','La ruta de salida debe permanecer libre.','Reconocer y mantener disponible la ruta de evacuación del área.','Materiales temporales se colocaron junto a una salida de campo.',['Obstrucción del paso','Tropiezos durante una evacuación','Demora para llegar al punto indicado'],['Ubica las salidas y rutas del sitio.','No almacenes materiales en los accesos.','Comunica y gestiona el retiro de obstáculos de forma segura.'],'Incluye el acceso en la verificación del orden del turno.','¿Qué haces al encontrar materiales bloqueando una salida?','Espero a que los retiren al final de la jornada.','Lo comunico y gestiono la liberación inmediata según el procedimiento.','Mantendré las rutas de evacuación despejadas.'),
    'verificar las condiciones del terreno':makeLesson('iperc','El terreno también cambia la tarea.','Revisar estabilidad, pendiente y condiciones de acceso antes de trabajar.','El equipo trasladará plantones por una ladera después de una lluvia.',['Pérdida de apoyo o deslizamiento','Carga que limita la visibilidad','Erosión o superficie blanda'],['Observa la ruta y los puntos de apoyo.','Ajusta el desplazamiento y la carga al trayecto previsto.','Pausa y coordina si no existe una ruta controlada.'],'Elige el acceso definido y evita cargar objetos que oculten el camino.','¿Qué haces si el suelo cede bajo tus pies?','Acelero para cruzar rápido.','Retrocedo a una zona estable y comunico la condición.','Comprobaré el terreno antes de trasladarme o instalarme.'),
    'reportar actos y condiciones subestandar':makeLesson('iperc','Reportar una observación abre la puerta a corregirla.','Comunicar actos o condiciones que podrían causar daño o impacto.','Un compañero trabaja cerca de una manguera cruzada y una herramienta sin guardar.',['Tropiezo o caída','Contacto con una herramienta','Repetición de la condición en otro turno'],['Describe lo que observaste, sin culpar a personas.','Comunica la ubicación y la tarea relacionada.','Da seguimiento por el canal establecido.'],'Una foto contextual puede ayudar si la política del sitio permite tomarla.','¿Cómo haces un reporte útil?','Solo digo que el área está mal.','Describo el peligro, la ubicación y una medida preventiva posible.','Haré observaciones claras y oportunas para facilitar la corrección.'),
    'evitar contacto con flora y fauna':makeLesson('planting','Observar sin alterar es una buena práctica.','Reducir interacciones innecesarias con especies presentes en el área.','Se encuentra un nido o animal silvestre próximo a la zona de trabajo.',['Contacto con fauna o plantas que irritan','Perturbación de hábitat','Intervención sin autorización'],['Mantén distancia y evita manipular especies.','Protege el límite del área sin acercarte al hallazgo.','Informa al responsable ambiental para recibir indicaciones.'],'Marca la ubicación desde un punto seguro, si el procedimiento lo permite.','¿Debes capturar o trasladar un animal por tu cuenta?','Sí, para alejarlo del personal.','No: mantén distancia y comunica el hallazgo al personal competente.','Respetaré la flora y fauna y comunicaré hallazgos.'),
    'conducir y desplazarse con precaución':makeLesson('safety','El trayecto también forma parte de la tarea.','Preparar desplazamientos de personal y materiales con atención al entorno.','El equipo se dirige a un frente por una ruta con visibilidad limitada.',['Distracción o fatiga al conducir','Tránsito de personas y equipos','Condiciones cambiantes de ruta'],['Sigue las reglas de conducción y rutas del sitio.','Verifica condiciones y comunica cambios antes de salir.','Detén el desplazamiento en un lugar seguro si pierdes condiciones de control.'],'Confirma destino y canal de comunicación antes del traslado.','¿Qué haces si el clima o la visibilidad empeoran?','Mantengo el ritmo para llegar a tiempo.','Reduzco la exposición y coordino la decisión según las reglas del sitio.','Planificaré mis desplazamientos y respetaré las reglas del lugar.'),
    'revisar etiquetas y fichas de seguridad':makeLesson('fds','La etiqueta identifica. La FDS ayuda a decidir cómo controlar.','Consultar la información aprobada del producto antes de manipularlo.','El envase de un producto fitosanitario tiene una etiqueta parcialmente dañada y hay varias fichas en el almacén.',['Confundir productos de aspecto parecido','Aplicar controles de otro producto','Exposición por almacenamiento o manipulación inadecuada'],['Verifica que el nombre del envase coincida con la ficha vigente.','Consulta peligros, manipulación, almacenamiento, protección y respuesta ante exposición.','Si la información no coincide o no se lee, no improvises: informa y sigue el procedimiento local.'],'Compara la identificación del recipiente con el documento controlado antes de preparar una aplicación.','¿Qué haces si la etiqueta del envase no coincide con la ficha disponible?','Uso la ficha del producto que más se parece.','Pauso la preparación e informo para confirmar la documentación correcta.','Confirmaré la etiqueta y la FDS aprobada antes de manipular el producto.'),
    'controlar polvo y material particulado':makeLesson('safety','Si el polvo cambia, revisa el control.','Reducir la exposición a polvo durante tareas de campo.','El tránsito y el movimiento de material levantan polvo cerca de la cuadrilla.',['Inhalación de partículas','Visibilidad reducida','Dispersión hacia otras zonas'],['Observa de dónde viene el polvo y a quién alcanza.','Aplica los controles definidos para la tarea y el lugar.','Usa la protección indicada e informa si el control no es suficiente.'],'Cambia el método o pausa según las instrucciones del responsable del área.','¿Qué haces si el control aplicado no reduce la exposición?','Sigo y me cubro con cualquier tela.','Pauso y comunico la condición para revisar controles adecuados.','Comunicaré el polvo visible y usaré los controles previstos.'),
    'usar herramientas de poda con seguridad':makeLesson('pruning','Planifica la poda antes de acercarte al corte.','Coordinar la poda y verificar controles antes de usar herramientas.','Una rama se encuentra cerca de una ruta transitada y el equipo prepara la intervención.',['Caída o proyección de ramas','Ingreso de personas a la zona de trabajo','Pérdida de control de una herramienta'],['Delimita el área y coordina roles antes de iniciar.','Verifica la herramienta y las condiciones definidas en el procedimiento.','Detén la tarea si cambian el entorno o el control.'],'Mantén a las personas fuera de la zona definida para la tarea.','¿Qué haces si alguien entra en el área delimitada?','Continúo mientras no pase cerca.','Pauso la actividad hasta recuperar el control de acceso.','Acordaré el área y la comunicación antes de iniciar una poda.'),
    'prevenir incendios en áreas de trabajo':makeLesson('emergency','Prevenir una fuente de ignición protege el frente.','Reconocer condiciones que pueden iniciar o propagar un incendio.','Material combustible se acumula junto a equipos y una fuente de calor.',['Ignición de vegetación o material','Propagación favorecida por viento','Respuesta tardía ante humo'],['Mantén fuentes de ignición bajo control según el procedimiento.','Conserva despejados los accesos y medios del sitio.','Ante humo o fuego, alerta y sigue el plan de emergencia.'],'Solo usa equipos de respuesta si estás capacitado y las condiciones son seguras.','¿Qué haces si detectas humo y no tienes formación para intervenir?','Intento apagarlo antes de avisar.','Alerto, me alejo y sigo el plan del sitio.','Mantendré ordenadas las zonas y reportaré fuentes de ignición.'),
    'cerrar la jornada con orden y limpieza':makeLesson('recycling','El cierre seguro prepara el siguiente turno.','Dejar el frente sin herramientas, obstáculos o residuos fuera de control.','Al terminar la jornada quedan materiales junto a una ruta y el sistema de riego sigue abierto.',['Tropiezos en el siguiente turno','Pérdida o deterioro de herramientas','Consumo de agua y residuos sin control'],['Guarda herramientas y materiales en su lugar.','Segrega los residuos y revisa el área.','Confirma que servicios y equipos queden en condición prevista.'],'Realiza una última revisión visual antes de liberar el frente.','¿Cuándo termina realmente la tarea?','Cuando se completa el trabajo principal.','Cuando el área queda ordenada y las condiciones se comunican al siguiente turno.','Entregaré el área limpia, ordenada y con novedades comunicadas.'),
    'participar activamente en la charla':makeLesson('iperc','Una buena observación mejora el plan de todos.','Aportar información práctica a la conversación preventiva.','El supervisor presenta el tema y pregunta qué puede cambiar durante la jornada.',['Peligros no mencionados','Dudas que quedan sin resolver','Acuerdos que nadie confirma'],['Cuenta una experiencia concreta relacionada con la tarea.','Pregunta si un control no está claro.','Repite el compromiso acordado y llévalo al trabajo.'],'Cada persona puede mencionar un cambio observado en el área.','¿Qué aporte ayuda más al equipo?','Guardar mi duda para no demorar la charla.','Compartir la duda o la observación para aclararla entre todos.','Participaré con una observación y confirmaré el control acordado.')
  };
  const referenceSpecialLessons={
    'el autocuidado, una actitud':makeLesson('uv','El autocuidado sostiene una jornada segura.','Reconocer señales del propio cuerpo y aplicar pausas, hidratación y protección según las condiciones del turno.','En una jornada al aire libre, una persona sigue trabajando con sed y cansancio para terminar antes.',['Deshidratación y malestar por calor','Fatiga que reduce la atención','Síntomas que no se comunican a tiempo'],['Ten agua disponible y sigue las pausas y medidas indicadas para el turno.','Presta atención a sed, dolor de cabeza, mareo o debilidad.','Detente en una zona segura y avisa si tú o un compañero presenta malestar.'],'Acuerden cómo pedir una pausa y a quién informar un síntoma durante el trabajo de campo.','¿Qué haces si notas mareo o debilidad en ti o en un compañero?','Espero a terminar la tarea para comentarlo.','Pauso en un punto seguro, aviso y sigo la respuesta indicada por el responsable.','Cuidaré mi estado físico y comunicaré temprano cualquier señal de malestar.'),
    'prevengamos la deshidratacion':makeLesson('uv','Hidratarse a tiempo previene complicaciones.','Prevenir la deshidratación durante tareas de campo y exposición al calor.','El equipo trabaja varias horas al sol y una persona deja de beber agua para no interrumpir la tarea.',['Pérdida de líquidos por calor y esfuerzo','Mareo o confusión que afecta la tarea','Demora en pedir apoyo'],['Confirma que el agua potable esté disponible antes de salir al frente.','Toma agua con regularidad según las indicaciones del sitio y las condiciones.','Ante síntomas, detén la tarea en lugar seguro e informa; no dejes sola a la persona afectada.'],'En la charla, identifiquen dónde está el agua y cómo se solicita una pausa en este frente.','¿Qué señal requiere avisar y buscar apoyo sin esperar al final del turno?','Sed intensa o mareo se ignoran si queda poco trabajo.','Se informa el malestar, se pausa en un lugar seguro y se sigue el protocolo del sitio.','Mantendré agua disponible y comunicaré de inmediato cualquier síntoma.'),
    'fatiga y somnolencia':makeLesson('safety','La fatiga también cambia el riesgo.','Identificar fatiga o somnolencia que pueda afectar la atención y el trabajo seguro.','Una persona llega somnolienta al turno y debe trasladar herramientas por una zona irregular.',['Menor atención a peligros y señales','Errores al usar herramientas o desplazarse','Respuesta más lenta ante un cambio'],['Reconoce el estado propio antes de iniciar una tarea crítica.','Comunica la fatiga al responsable y coordina una pausa o ajuste conforme a las reglas del sitio.','No conduzcas ni operes equipos si no estás en condiciones seguras.'],'Antes de asignar una labor, conversen sobre la condición del equipo y la tarea prevista.','¿Qué haces si notas que no puedes mantener la atención?','Oculto el cansancio y continúo para no afectar al equipo.','Lo comunico y sigo la decisión preventiva del responsable antes de continuar.','Avisaré si la fatiga puede afectar mi seguridad o la del equipo.'),
    'factores humanos que causan accidentes':makeLesson('iperc','La atención y las decisiones también se preparan.','Reconocer cómo la prisa, distracción, falta de instrucción o exceso de confianza afectan una tarea.','Una cuadrilla inicia una labor conocida mientras conversa y omite la revisión previa del área.',['Peligros que pasan inadvertidos','Decisiones precipitadas o instrucciones incompletas','Repetición de errores por no comunicarlos'],['Haz una pausa breve y confirma que todas las personas conocen la tarea y sus controles.','Evita distracciones durante desplazamientos y uso de herramientas.','Comunica errores y cambios con oportunidad, sin ocultarlos.'],'Cada integrante nombra una distracción posible y acuerda cómo reducirla durante el trabajo.','¿Qué haces si te das cuenta de que omitiste un control?','Lo dejo pasar si todavía no ocurrió un incidente.','Lo comunico y restablezco el control antes de seguir.','Mantendré la atención, pediré aclaración y reportaré los errores a tiempo.')
  };
  let slide = 0, slideTimer = null, slidePaused = false, simScore = 0, simStep = 0;
  const picture = (name) => `./assets/photos/${name}`;

  function installCarousel() {
    const hero = document.querySelector('.hero-card');
    if (!hero || hero.querySelector('.hero-slides')) return;
    clearInterval(slideTimer);
    const layer = document.createElement('div');
    layer.className = 'hero-slides';
    layer.setAttribute('aria-label','Carrusel de fotografías de las actividades de SGAE');
    layer.innerHTML = photos.map((file,i)=>`<div class="hero-slide ${i===slide?'active':''}" aria-hidden="${i!==slide}"><img src="${picture(file)}" alt="Actividad ambiental SGAE ${i+1} de ${photos.length}"></div>`).join('');
    const controls = document.createElement('div');
    controls.className = 'hero-carousel-controls';
    controls.innerHTML = `<span class="carousel-count" aria-live="polite">01 / ${String(photos.length).padStart(2,'0')}</span><button class="carousel-control" data-slide="prev" aria-label="Foto anterior">‹</button><button class="carousel-control" data-slide="pause" aria-label="Pausar carrusel">Ⅱ</button><button class="carousel-control" data-slide="next" aria-label="Foto siguiente">›</button>`;
    const progress = document.createElement('div');
    progress.className = 'carousel-progress';
    progress.innerHTML = photos.map((_,i)=>`<button class="${i===slide?'active':''}" data-slide-to="${i}" aria-label="Mostrar foto ${i+1}"></button>`).join('');
    hero.prepend(layer);
    hero.append(controls,progress);
    const show = (next) => {
      slide = (next + photos.length) % photos.length;
      layer.querySelectorAll('.hero-slide').forEach((el,i)=>{el.classList.toggle('active',i===slide);el.setAttribute('aria-hidden',String(i!==slide));});
      controls.querySelector('.carousel-count').textContent = `${String(slide+1).padStart(2,'0')} / ${String(photos.length).padStart(2,'0')}`;
      progress.querySelectorAll('button').forEach((el,i)=>el.classList.toggle('active',i===slide));
    };
    const restart = () => { clearInterval(slideTimer); if(!slidePaused) slideTimer=setInterval(()=>show(slide+1),5000); };
    controls.addEventListener('click',e=>{
      const action=e.target.closest('[data-slide]')?.dataset.slide;
      if(action==='next') show(slide+1);
      if(action==='prev') show(slide-1);
      if(action==='pause') {slidePaused=!slidePaused;e.target.textContent=slidePaused?'▶':'Ⅱ';e.target.setAttribute('aria-label',slidePaused?'Reanudar carrusel':'Pausar carrusel');}
      if(action!=='pause') restart(); else restart();
    });
    progress.addEventListener('click',e=>{const target=e.target.closest('[data-slide-to]');if(target){show(Number(target.dataset.slideTo));restart();}});
    restart();
  }

  const scenarios = [
    {kind:'pruning',fallback:'operacion-2.jpeg',label:'SIMULACIÓN 01 · PODA',title:'La tarea empieza antes del primer corte',question:'El equipo se prepara para iniciar una poda. ¿Cuál es el mejor primer paso?',answers:[['Revisar el área, acordar el alcance y confirmar los controles definidos para la tarea.',true],['Empezar por las ramas más fáciles y revisar el entorno después.',false],['Ubicarse bajo la zona de caída para observar mejor.',false]],good:'¡Bien observado! Planificar la tarea y coordinar los controles antes de comenzar ayuda a proteger a todo el equipo.',bad:'Pausa la simulación: primero revisa el área y coordina el trabajo con los controles establecidos.'},
    {kind:'safety',fallback:'operacion-4.jpeg',label:'SIMULACIÓN 02 · PRODUCTOS QUÍMICOS',title:'Antes de preparar la aplicación',question:'Se va a usar un producto fitosanitario. ¿Qué debe verificarse primero?',answers:[['Revisar la etiqueta y la ficha aprobada, además del EPP y los controles establecidos.',true],['Usar el producto según una aplicación anterior, aunque sea diferente.',false],['Preparar la mezcla junto a un drenaje para limpiar más rápido.',false]],good:'Correcto. Confirma la información específica del producto y el procedimiento vigente antes de manipularlo.',bad:'No improvises con productos químicos. La etiqueta, la ficha de seguridad y el procedimiento aplicable orientan la tarea.'},
    {kind:'irrigation',fallback:'operacion-5.jpeg',label:'SIMULACIÓN 03 · RIEGO',title:'Un detalle que ahorra recursos',question:'Durante una inspección notas agua saliendo de una conexión. ¿Qué acción aporta más?',answers:[['Señalizar o controlar el punto, informar al responsable y gestionar su revisión.',true],['Dejarlo para el final del turno sin comunicarlo.',false],['Aumentar el tiempo de riego para compensar la pérdida.',false]],good:'¡Buena decisión! Comunicar la pérdida permite atenderla y cuidar el recurso hídrico.',bad:'La pérdida merece atención: comunícala y sigue el proceso del área para corregirla.'}
  ];

  function simulationMarkup() {
    return `<section class="simulations" id="simulaciones"><div class="sim-wrap"><div class="section-head"><div><span class="eyebrow" style="color:var(--green)">Aprender haciendo</span><h2>Simulaciones de campo</h2></div><p>Elige una respuesta y descubre cómo anticipar el riesgo.</p></div><div class="sim-grid"><article class="sim-card" id="scenarioCard"></article><article class="sim-card secondary" id="recyclingCard"><div class="sim-visual" style="background-image:url('${stock.recycling}')"><span class="sim-orbit">♻</span><div><span class="sim-visual-label">RETO AMBIENTAL · 30 SEG</span><h3>Segrega con criterio</h3></div></div><div class="sim-body"><p>En una zona de trabajo hay residuos de distintos tipos. ¿Qué haces antes de depositarlos?</p><div class="sim-options"><button class="sim-option" data-recycle="wrong">Elegir el contenedor por el color que recuerdo de otro lugar.</button><button class="sim-option" data-recycle="right">Leer la identificación local y seguir el procedimiento del área.</button><button class="sim-option" data-recycle="wrong">Dejarlos mezclados para que otra persona los separe.</button></div><div class="sim-feedback" id="recycleFeedback" aria-live="polite"></div><div class="sim-score"><span>Reto de segregación</span><strong>+1 punto preventivo</strong></div></div></article></div></div></section>`;
  }

  function renderScenario() {
    const card=document.querySelector('#scenarioCard');
    if(!card)return;
    const s=scenarios[simStep%scenarios.length], credit=credits[s.kind];
    card.innerHTML=`<div class="sim-visual" style="background-image:url('${stock[s.kind]}')"><span class="sim-orbit">✦</span><div><span class="sim-visual-label">${s.label}</span><h3>${s.title}</h3></div></div><div class="sim-body"><p>${s.question}</p><div class="sim-options">${s.answers.map((a,i)=>`<button class="sim-option" data-choice="${i}">${a[0]}</button>`).join('')}</div><div class="sim-feedback" id="scenarioFeedback" aria-live="polite">Selecciona una opción para continuar.</div><div class="sim-score"><span>Tu marcador</span><strong>✦ ${simScore} aciertos</strong><button class="sim-replay" data-next-scenario>Siguiente escenario →</button></div></div>`;
    const img=new Image();img.src=stock[s.kind];img.onerror=()=>{card.querySelector('.sim-visual').style.backgroundImage=`url('${picture(s.fallback)}')`;};
    card.querySelector('.sim-options').addEventListener('click',e=>{
      const button=e.target.closest('[data-choice]');if(!button)return;
      const answer=s.answers[Number(button.dataset.choice)], feedback=card.querySelector('#scenarioFeedback');
      card.querySelectorAll('.sim-option').forEach(el=>{el.disabled=true;});
      button.classList.add(answer[1]?'correct':'incorrect');
      feedback.textContent=answer[1]?s.good:s.bad;
      if(answer[1]){simScore++;card.querySelector('.sim-score strong').textContent=`✦ ${simScore} aciertos`;}
    });
    card.querySelector('[data-next-scenario]').addEventListener('click',()=>{simStep++;renderScenario();});
  }

  function installSimulations() {
    const root=document.querySelector('#simulation-root');
    if(!root||document.querySelector('#simulaciones'))return;
    root.insertAdjacentHTML('beforeend',simulationMarkup());
    renderScenario();
    const recycleVisual=document.querySelector('#recyclingCard .sim-visual');
    const recycleImage=new Image();recycleImage.src=stock.recycling;
    recycleImage.onerror=()=>{recycleVisual.style.backgroundImage=`url('${picture('operacion-6.jpeg')}')`;};
    document.querySelector('#recyclingCard .sim-options').addEventListener('click',e=>{
      const button=e.target.closest('[data-recycle]');if(!button)return;
      const feedback=document.querySelector('#recycleFeedback');
      document.querySelectorAll('#recyclingCard .sim-option').forEach(el=>el.disabled=true);
      const good=button.dataset.recycle==='right';button.classList.add(good?'correct':'incorrect');
      feedback.textContent=good?'¡Correcto! La identificación del área y su procedimiento determinan la segregación adecuada.':'Revisa la identificación del área y sigue su procedimiento antes de disponer el residuo.';
      if(good){simScore++;const total=document.querySelector('#scenarioCard .sim-score strong');if(total)total.textContent=`✦ ${simScore} aciertos`;}
    });
  }

  const normalize=value=>(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  function talkGuide(talk,lesson){
    if(talk.isMotivational)return {title:'Conversación para fortalecer al equipo',detail:`${talk.motivation.message} Invita a cada persona a compartir un ejemplo cercano: una mejora, una ayuda recibida o un avance del servicio. Mantén la conversación abierta y reconoce aportes concretos sin comparar a los compañeros.`,actions:['Da espacio para que cada integrante participe, si desea hacerlo.','Reconoce una acción concreta que ayudó al equipo o al entorno.','Acuerden una acción pequeña y posible para aplicar durante la jornada.']};
    const topic=normalize(talk.topic);
    const guides=[
      [/polvo|material particulado/,'Polvo y partículas en campo','El polvo puede levantarse al mover suelo o materiales, transitar por caminos y usar equipos de desmalezado. Identifica la fuente, la dirección del viento y quién podría quedar expuesto. Usa los controles y la protección respiratoria indicados en el IPERC/PETS; si el polvo alcanza a otras personas, reduce la visibilidad o el control deja de ser eficaz, pausa y comunícalo.',['Ubica fuente y dirección de dispersión.','Verifica el control y el respirador definido para la tarea.','Detén y avisa si la exposición sale del área o persiste.']],
      [/ficha|etiqueta|quimic|fumig|plaguic|insumo|derrame|fuga/,'Productos: identificación, manejo y respuesta','Antes de preparar o aplicar un producto, confirma que el envase, la etiqueta, la Ficha de Datos de Seguridad y la ficha técnica correspondan al mismo producto. Revisa dosis, peligros, EPP, almacenamiento y respuesta ante exposición o derrame. En fumigación aplica las condiciones del PETS, incluida la dirección del viento; no mezcles ni trasvases por intuición y suspende ante condiciones ambientales no permitidas.',['Confirma el nombre y la información vigente del producto.','Prepara el área, EPP y bandeja de contención requeridos.','Ante derrame o discrepancia, evita contacto, avisa y sigue el procedimiento.']],
      [/epp|proteccion|guantes|manos y ojos/,'EPP elegido según la exposición','El EPP no se selecciona solo por costumbre ni reemplaza los controles de la tarea. Confirma qué exposición existe, revisa el PETS/IPERC y verifica que cada elemento esté íntegro, sea compatible y ajuste bien. Para motoguadaña, el procedimiento pide protecciones específicas para proyección de partículas y ruido; para fumigación, protección química y respiratoria definida para el producto.',['Nombra el peligro que quieres controlar con cada elemento.','Inspecciona estado, ajuste y compatibilidad antes de usarlo.','Cambia o reporta el elemento dañado; no improvises sustitutos.']],
      [/radiacion uv|exposicion a radiacion|solar|calor/,'Radiación solar, calor e hidratación','En labores al aire libre, la exposición se acumula durante el turno y el terreno puede ofrecer poca sombra. Revisa las condiciones del día y las medidas definidas por el responsable: protección solar, agua disponible, pausas o ajustes de horario cuando correspondan. Si una persona presenta malestar, la prioridad es detenerse en un punto seguro y comunicarlo; no se espera al final del trabajo.',['Revisa alerta, horario y disponibilidad de sombra y agua.','Aplica la protección y las pausas indicadas para el turno.','Comunica temprano cualquier signo de malestar.']],
      [/riego|agua/,'Riego eficiente y revisión del sistema','El riego seguro también exige revisar el sistema. Comprueba mangueras, válvulas, uniones y puntos de goteo; regula el caudal y el tiempo según la necesidad de la especie y la programación del área. El PETS de áreas verdes indica evitar encharcamientos, filtraciones y escurrimientos, purgar líneas cuando corresponda y cerrar las válvulas al terminar.',['Revisa tanque, líneas, conexiones y goteros antes de abrir el sistema.','Regula alcance y caudal; observa si el agua sale del área verde.','Cierra válvulas y reporta fugas que no puedas corregir.']],
      [/poda|herramient|equipo motorizado|revisar equipos/,'Herramientas, poda y equipos','En poda o desmalezado, una inspección evita que un defecto se convierta en una lesión. Revisa herramienta, protecciones y EPP antes de iniciar; delimita el área y mantén a las personas fuera de la zona de proyección. Para motoguadaña, el PETS establece una distancia de exclusión de 15 m, inspección de fauna oculta y apagar el motor antes de cambiar el elemento de corte.',['Inspecciona equipo y EPP según la tarea y el PETS.','Delimita el área; mantén despejada la zona de proyección.','Pausa si hay terceros, fauna oculta o un defecto sin controlar.']],
      [/sembr|plant|frutal|forestal|biodivers|flora|fauna|reveget|restauracion/,'Siembra, revegetación y cuidado de especies','El prendimiento depende de instalar la especie en condiciones adecuadas y sostener su cuidado. Prepara el terreno y el hoyo según la especie y el procedimiento; coloca el plantón vertical, rellena y afirma sin dañar el cuello. El abonamiento, riego, control de maleza y reposición deben responder al plan del área. Respeta límites de intervención y comunica cualquier hallazgo de fauna.',['Prepara el suelo y confirma especie, ubicación y materiales.','Instala sin dañar raíces y riega conforme al requerimiento.','Registra fallas de prendimiento, daños o hallazgos ambientales.']],
      [/residuo|segreg|limpieza|orden/,'Orden, residuos y cierre de tarea','El cierre de una labor incluye dejar el área y los materiales bajo control. Separa restos vegetales para compostaje cuando el procedimiento lo indique; clasifica envases, trapos, aceites y residuos de productos según el código vigente. El PETS indica recoger restos y accesorios, limpiar y guardar equipos y dejar libre el acceso para el siguiente turno.',['Identifica cada residuo antes de disponerlo.','Mantén rutas y zonas de trabajo despejadas durante la actividad.','Al cierre, recoge, segrega, limpia y comunica pendientes.']],
      [/buenas practicas ambientales|impacto ambiental|conservar recursos/,'Cuidado del entorno durante el servicio','Cada frente de trabajo tiene límites y componentes ambientales que deben conservarse. Mantén materiales, restos vegetales y productos dentro de las zonas previstas; evita afectar vegetación, suelo o agua y comunica cualquier impacto o hallazgo que no estaba contemplado. Al retirarte, revisa el entorno y deja las evidencias que solicite el responsable del servicio.',['Confirma límites y zonas de intervención.','Evita dispersión de residuos y pérdidas de agua o insumos.','Reporta impactos y deja el área en condición acordada.']],
      [/emergencia|incendio|fuego|evacuacion/,'Preparación y respuesta ante emergencias','En una emergencia, el primer objetivo es alertar sin aumentar la exposición. El equipo debe saber cuál es el canal de aviso, la ubicación de los medios y las rutas o puntos establecidos por el plan del sitio. No intervengas en una tarea para la que no estás capacitado; para equipos como extintores, actúa solo según tu entrenamiento y las instrucciones locales.',['Acuerda el canal y la información que comunicarás.','Ubica rutas y medios de respuesta antes de iniciar.','Alerta, aléjate del peligro y sigue instrucciones del plan.']],
      [/sobreesfuerzo|postura|caida|resbal|terreno/,'Cuerpo, carga y terreno','El terreno irregular, húmedo o inclinado cambia la forma segura de desplazarse y mover materiales. Antes de cargar, revisa el peso, el agarre y la ruta; usa carretilla o apoyo de otra persona cuando corresponda al PETS. Evita girar el tronco con la carga. En taludes, aplica el permiso, sistema anticaídas y controles definidos; no improvises anclajes ni continúes si cambia la estabilidad.',['Revisa ruta, superficie, peso y espacio de maniobra.','Usa el apoyo o equipo previsto y conserva una postura estable.','Pausa y consulta si hay talud, pérdida de apoyo o carga fuera de control.']],
      [/conduc|desplaz|vehicul|transito/,'Desplazamiento y convivencia en campo','Los desplazamientos ocurren cerca de cuadrillas, plantas, mangueras y equipos móviles. Confirma la ruta autorizada y las condiciones de visibilidad; respeta señalización y mantén comunicación con quien dirige la maniobra. Si aparece una persona en la ruta, el terreno no permite el paso o la visibilidad se reduce, detente en un lugar seguro y coordina antes de continuar.',['Confirma ruta, visibilidad y condiciones del terreno.','Mantén separación y comunicación con personas y equipos.','Detente ante obstáculos o cambios no previstos.']],
      [/comunicar|reportar|equipo|charla|riesgo|peligro|iperc|critico/,'Conversación preventiva y control de cambios','El IPERC continuo y la coordinación del equipo sirven para revisar condiciones reales, no para confirmar un plan que ya no aplica. Cada integrante puede señalar un cambio de terreno, clima, equipo, tránsito o presencia de terceros. Si el control no está disponible o no funciona, pausa la tarea de forma segura, informa al responsable y acuerda qué debe verificarse antes de reiniciar.',['Pide a cada persona identificar un cambio o peligro concreto.','Confirma quién aplica y verifica cada control.','No reinicies hasta recuperar el control y comunicar el acuerdo.']]
    ];
    const guide=guides.find(([pattern])=>pattern.test(topic));
    return guide?{title:guide[1],detail:guide[2],actions:guide[3]}:{title:'Aplicación a la tarea de hoy',detail:`Relaciona el tema “${talk.topic}” con la actividad de ${talk.activity}. Parte de la situación descrita en la charla, confirma los peligros que pueden presentarse en el frente y acuerda controles que el equipo pueda observar y verificar. Si las condiciones, el equipo o el alcance cambian, revisa el IPERC/PETS y consulta al responsable antes de continuar.`,actions:lesson.steps};
  }
  function currentTalk(){return window.getCurrentSgaeTalk?.()||{};}
  const referenceLessonAliases={
    'la seguridad es tarea de todos':'trabajar de forma segura en equipo',
    'analizo los peligros y riesgos de mi entorno':'reconocer peligros antes de iniciar',
    'la seguridad basada en el comportamiento':'reportar actos y condiciones subestandar',
    'por un trabajo sano y seguro':'seleccionar el epp adecuado',
    'el autocuidado, una actitud':'prevenir la exposicion a radiacion uv',
    'mantener limpio el lugar de trabajo':'mantener orden y limpieza',
    'el peligro de la rutina':'reconocer peligros antes de iniciar',
    'peligro en las superficies de transito':'prevenir resbalones y caidas',
    'uso mi equipo de proteccion personal':'seleccionar el epp adecuado',
    'proteccion de las manos':'proteger manos y ojos en tareas manuales',
    'proteccion de los pies':'seleccionar el epp adecuado',
    'proteccion de la cabeza':'seleccionar el epp adecuado',
    'tu participacion es importante':'participar activamente en la charla',
    'cuidado con las herramientas manuales':'verificar el estado de las herramientas',
    'no dejemos que el accidente nos encuentre':'detener el trabajo ante un riesgo critico',
    'tratamiento de residuos organicos':'segregar correctamente los residuos',
    'levantamiento correcto de cargas':'evitar sobreesfuerzos y posturas forzadas',
    'lesiones por movimientos repetitivos':'evitar sobreesfuerzos y posturas forzadas',
    'corregimos pequenos errores antes que se agranden':'reportar actos y condiciones subestandar',
    'la influencia de mis acciones en la seguridad del equipo':'trabajar de forma segura en equipo',
    'hojas de seguridad de productos quimicos':'revisar etiquetas y fichas de seguridad',
    'acompanemos a los trabajadores nuevos':'participar activamente en la charla',
    'prevengamos la deshidratacion':'prevenir la exposicion a radiacion uv',
    'factores humanos que causan accidentes':'reconocer peligros antes de iniciar',
    'guardas de seguridad de las maquinas':'revisar equipos antes de operarlos',
    'fatiga y somnolencia':'evitar sobreesfuerzos y posturas forzadas',
    'aspectos e impactos ambientales':'aplicar buenas practicas ambientales',
    'automotivacion':'trabajar de forma segura en equipo',
    'prevencion de lesiones en la espalda':'evitar sobreesfuerzos y posturas forzadas',
    'uno para todos y todos para uno':'trabajar de forma segura en equipo'
  };
  function resolveTalkTheme(talk){
    const topic=normalize(talk.topic),category=normalize(talk.category),activity=normalize(talk.activity);
    if(talk.isMotivational&&talk.motivation){const m=talk.motivation;return {kind:'motivation',lesson:makeLesson('motivation',m.title,m.objective,m.message,['La rutina puede hacer que pasen inadvertidos los avances.','La falta de reconocimiento puede debilitar la colaboración.','Las dudas no comunicadas pueden dejar a alguien sin apoyo.'],talk.controls,`Cada integrante comparte un aporte concreto que ayudará al equipo en la tarea de hoy.`,m.question,'Nadie del equipo influyó en el resultado.','Reconozco una contribución concreta y propongo cómo continuarla.',m.commitment)};}
    const referenceLesson=referenceSpecialLessons[topic]||lessonLibrary[referenceLessonAliases[topic]||topic];
    if(referenceLesson)return {lesson:referenceLesson,kind:referenceLesson.visual};
    if(/polvo|material particulado/.test(topic))return {lesson:lessonLibrary[topic]||null,kind:'dust'};
    if(/biodivers|flora|fauna/.test(topic))return {lesson:lessonLibrary[topic]||null,kind:'biodiversity'};
    if(/buenas practicas ambientales|medio ambiente/.test(topic))return {lesson:lessonLibrary[topic]||null,kind:'environment'};
    if(/incendio|fuego/.test(topic))return {lesson:lessonLibrary[topic]||null,kind:'fire'};
    if(/conduc|vehicul|transito/.test(topic))return {lesson:lessonLibrary[topic]||null,kind:'vehicle'};
    if(/condiciones del terreno|talud/.test(topic))return {lesson:lessonLibrary[topic]||null,kind:'terrain'};
    if(lessonLibrary[topic])return {lesson:lessonLibrary[topic],kind:lessonLibrary[topic].visual};
    const context=`${topic} ${category} ${activity}`;
    if(/ficha|hoja de seguridad|\bsds\b|\bmsds\b/.test(context))return {lesson:null,kind:'fds'};
    if(/quimic|fumig|plaguic|derrame|fuga/.test(context))return {lesson:null,kind:'chemicals'};
    if(/emergencia|incendio|fuego|evacuacion/.test(context))return {lesson:null,kind:'emergency'};
    if(/ergonomi|sobreesfuerzo|postura/.test(context))return {lesson:null,kind:'ergonomics'};
    if(/radiacion uv|exposicion solar|calor/.test(context))return {lesson:null,kind:'uv'};
    if(/riego|agua/.test(context))return {lesson:null,kind:'irrigation'};
    if(/residuo|segreg|recicl|desecho|orden y limpieza/.test(context))return {lesson:null,kind:'recycling'};
    if(/herramient|poda|equipo motorizado/.test(context))return {lesson:null,kind:'pruning'};
    if(/epp|guantes|proteccion|conducir|transporte/.test(context))return {lesson:null,kind:'safety'};
    if(/biodivers|flora|fauna|forestacion|plantacion|revegetacion|restauracion/.test(context))return {lesson:null,kind:'planting'};
    return {lesson:null,kind:'iperc'};
  }
  function putTextAfterHeading(container,label,value){
    const heading=[...container.querySelectorAll('h3')].find(el=>normalize(el.textContent)===normalize(label));
    const next=heading?.nextElementSibling;
    if(next&&next.matches('p'))next.textContent=value;
  }
  function applyDidacticContent(talk,lesson){
    const detail=document.querySelector('.talk-detail');if(!detail||!lesson)return;
    if(!detail.querySelector('.annual-motto')){const motto=document.createElement('div');motto.className='annual-motto';motto.textContent='SER SEGUROS Y PRODUCTIVOS, ES NUESTRA RESPONSABILIDAD';detail.querySelector('.talk-data')?.insertAdjacentElement('afterend',motto);}
    const headings=[...detail.querySelectorAll('h3')];
    const objective=headings.find(el=>normalize(el.textContent)==='objetivo')?.nextElementSibling;
    const intro=headings.find(el=>normalize(el.textContent)==='conversacion inicial')?.nextElementSibling;
    if(objective)objective.textContent=lesson.objective;
    if(intro)intro.textContent=lesson.scenario;
    const hazardHeading=headings.find(el=>normalize(el.textContent)==='peligros que debemos observar');
    const controlHeading=headings.find(el=>normalize(el.textContent)==='controles para la tarea');
    if(hazardHeading)hazardHeading.textContent=talk.isMotivational?'Retos que pueden debilitar al equipo':'Peligros que debemos observar';
    if(controlHeading)controlHeading.textContent=talk.isMotivational?'Acciones que nos fortalecen':'Controles para la tarea';
    const hazardList=hazardHeading?.nextElementSibling;
    const controlList=controlHeading?.nextElementSibling;
    if(hazardList)hazardList.innerHTML=lesson.hazards.map(x=>`<li>${x}</li>`).join('');
    if(controlList)controlList.innerHTML=lesson.steps.map(x=>`<li>${x}</li>`).join('');
    const example=detail.querySelector('.notice');if(example)example.textContent=`${talk.isMotivational?'Dinámica breve':'Ejemplo práctico'}: ${lesson.example}`;
    putTextAfterHeading(detail,'Pensemos en equipo',lesson.question);
    putTextAfterHeading(detail,'Compromiso del día',lesson.commitment);
    const questionPanel=detail.parentElement?.querySelector(':scope > .panel:nth-child(2)');
    if(questionPanel){
      const question=questionPanel.querySelector('p');if(question)question.textContent=lesson.question;
      const options=[...questionPanel.querySelectorAll('.quiz-option')];
      if(options[0])options[0].textContent=lesson.wrong;
      if(options[1])options[1].textContent=lesson.right;
      options.forEach(option=>option.addEventListener('click',()=>{
        const feedback=questionPanel.querySelector('#quizFeedback');
        if(feedback)feedback.textContent=option.dataset.answer==='good'?`Correcto. ${lesson.commitment}`:`Vuelve a intentarlo: ${lesson.right}`;
      }));
    }
    const talkData=detail.querySelector('.talk-data');
    if(talkData&&!detail.querySelector('.didactic-poster')){
      const poster=document.createElement('section');poster.className='didactic-poster';
      poster.innerHTML=`<header class="poster-ribbon"><span class="poster-brand"><img src="./assets/logo-sgae.png" alt="Logo SGAE">${talk.isMotivational?'CHARLA MOTIVACIONAL':'FICHA VISUAL · CONECTA SGAE'}</span><span>DÍA ${String(talk.day||'').padStart(3,'0')} / 365 · ${talk.duration||5} MIN</span></header><div class="poster-message"><span class="poster-kicker">IDEA CLAVE</span><h4>${lesson.headline}</h4><p>${lesson.scenario}</p></div><div class="poster-steps">${lesson.steps.map((step,i)=>`<article class="poster-step"><span class="poster-number">0${i+1}</span><strong>${['OBSERVA','DECIDE','ACTÚA'][i]}</strong><p>${step}</p></article>`).join('')}</div><div class="poster-hazards"><span>${talk.isMotivational?'PARA CONVERSAR':'OJO CON'}</span>${lesson.hazards.map(x=>`<i>${x}</i>`).join('')}</div><footer class="poster-footer">SER SEGUROS Y PRODUCTIVOS, ES NUESTRA RESPONSABILIDAD</footer>`;
      talkData.insertAdjacentElement('afterend',poster);
    }
    if(!detail.querySelector('.shareable-lesson')){
      const guide=talkGuide(talk,lesson);
      const shareScript=[
        `Charla del día ${String(talk.day||'').padStart(3,'0')}: ${talk.title}.`,
        `Lema 2026: SER SEGUROS Y PRODUCTIVOS, ES NUESTRA RESPONSABILIDAD.`,
        `Objetivo: ${lesson.objective}`,
        `Situación para abrir la conversación: ${lesson.scenario}`,
        `Desarrollo: ${guide.detail}`,
        `Peligros para revisar: ${lesson.hazards.join('; ')}.`,
        `Acciones acordadas: ${[...guide.actions,...lesson.steps].filter((step,index,items)=>items.indexOf(step)===index).join(' ')}`,
        `Pregunta al equipo: ${lesson.question}`,
        `Cierre: ${lesson.commitment}`
      ].join('\n\n');
      const expanded=document.createElement('section');expanded.className='shareable-lesson';
      expanded.innerHTML=`<div class="shareable-lesson-head"><span class="tag">Contenido ampliado para exponer</span><span>Contexto: ${talk.activity}</span></div><h3>${guide.title}</h3><p class="shareable-lesson-detail">${guide.detail}</p><div class="shareable-actions">${guide.actions.map((action,i)=>`<article><span>0${i+1}</span><p>${action}</p></article>`).join('')}</div><h4>Guion listo para compartir</h4><div class="share-script" data-share-content></div>`;
      expanded.querySelector('[data-share-content]').textContent=shareScript;
      detail.querySelector('.notice')?.insertAdjacentElement('afterend',expanded);
    }
  }
  function enrichTalk() {
    const original=document.querySelector('.talk-detail > div > img');
    if(!original||original.closest('.talk-photo-frame'))return;
    const talk=currentTalk(),category=normalize(talk.category||document.querySelector('.talk-detail .tag')?.textContent);
    const resolved=resolveTalkTheme(talk),lesson=resolved.lesson;let kind=resolved.kind;
    let media=localThemes[kind]||null;
    const photoDescriptions={planting:['Persona plantando un árbol en el suelo','Plantación de especies'],pruning:['Trabajador con EPP realiza poda con herramienta de corte','Poda segura en campo'],irrigation:['Jardinería y riego de plantas en un espacio verde','Riego de áreas verdes'],recycling:['Separación de residuos y reciclaje','Gestión de residuos'],safety:['Trabajador utiliza equipo de protección durante una labor manual','Protección personal en campo']};
    if(!media&&stock[kind])media=[stock[kind],...(photoDescriptions[kind]||['Trabajo de campo con controles preventivos',kind])];
    if(kind==='emergency'&&/preparar una respuesta/.test(normalize(talk.topic)))media=['./assets/photos/operacion-11.jpeg','Personal de SGAE traslada a un trabajador en camilla durante una práctica de respuesta','Respuesta ante emergencias en campo'];
    if(!media){kind='iperc';media=localThemes.iperc;}
    const frame=document.createElement('div');frame.className='talk-photo-frame';
    const image=document.createElement('img');image.src=media[0];image.alt=media[1];image.loading='lazy';
    image.onerror=()=>{image.onerror=null;image.src=picture(fallbackByImage[kind]||'operacion-1.jpeg');};
    if(credits[kind]&&media[0].startsWith('http')){const [author,source]=credits[kind];const credit=document.createElement('a');credit.className='talk-photo-credit';credit.href=source;credit.target='_blank';credit.rel='noreferrer';credit.textContent=`Foto: ${author} · Unsplash`;frame.append(credit);}
    else {const credit=document.createElement('span');credit.className='talk-photo-credit';credit.textContent=media[0].startsWith('./assets/photos/')?'Fotografía de SGAE':'Recurso didáctico';frame.append(credit);}
    const caption=document.createElement('span');caption.className='talk-photo-caption';caption.textContent=media[2]||media[1];
    frame.prepend(image);frame.append(caption);original.replaceWith(frame);
    applyDidacticContent(talk,lesson);
    const readButton=document.querySelector('[data-action="read-aloud"]');
    if(readButton&&!readButton.dataset.expandedRead){readButton.dataset.expandedRead='true';readButton.addEventListener('click',event=>{event.preventDefault();event.stopImmediatePropagation();if(!('speechSynthesis'in window)){toast('La lectura en voz alta no está disponible en este navegador');return;}speechSynthesis.cancel();const script=document.querySelector('[data-share-content]')?.innerText||`${talk.objective}. ${talk.intro}. ${lesson?.steps?.join('. ')||''}`;speechSynthesis.speak(new SpeechSynthesisUtterance(`${talk.title}. ${script}`));},true);}
  }

  function enrichAbout(){
    const target=document.querySelector('#nosotros');
    if(!target||target.classList.contains('sgae-about'))return;
    target.outerHTML=`<section class="section sgae-about" id="nosotros"><div class="about-inner">
      <div class="about-top"><div class="about-copy"><span class="eyebrow">Quiénes somos · SGAE</span><h2>Restauramos espacios.<br><span style="color:var(--green)">Cultivamos futuro.</span></h2><p>Servicios de Gestión Ambiental Eizaguirre S.A.C. desarrolla servicios de gestión, recuperación y mantenimiento de espacios con cobertura vegetal. Constituida en 2018, articula experiencia en campo con soporte administrativo para ejecutar proyectos ambientales, incluyendo la restauración y revegetación de áreas intervenidas por actividades mineras.</p><div class="about-facts"><div class="about-fact"><strong>Desde 2018</strong><small>Experiencia empresarial</small></div><div class="about-fact"><strong>Trabajo en campo</strong><small>Áreas operativas y administrativas</small></div><div class="about-fact"><strong>Enfoque sostenible</strong><small>Restauración y responsabilidad ambiental</small></div></div></div><div class="about-visual"><figure class="about-photo-main"><img src="./assets/photos/operacion-1.jpeg" alt="Colaborador de SGAE plantando una especie en un área intervenida"><figcaption>RECUPERAR · PLANTAR · CUIDAR</figcaption></figure><figure class="about-photo-inset"><img src="./assets/photos/operacion-7.jpeg" alt="Trabajo de recuperación ambiental realizado por SGAE"></figure><span class="about-stamp">SERVICIOS AMBIENTALES SGAE</span></div></div>
      <div class="about-values"><article class="about-principle"><span class="eyebrow">Nuestro propósito</span><h3>Misión</h3><p>Proteger el medio ambiente para las generaciones futuras, ofreciendo servicios integrales con un enfoque sostenible, técnico y comprometido con la restauración ambiental y la responsabilidad social.</p></article><article class="about-principle" style="background:#0c7775"><span class="eyebrow">Hacia dónde vamos</span><h3>Visión</h3><p>Consolidarnos como una empresa referente a nivel nacional en servicios ambientales especializados, destacando por la innovación tecnológica, las alianzas estratégicas, la excelencia operativa y la responsabilidad ambiental, contribuyendo a la sostenibilidad.</p></article><article class="about-values-card"><h3>Valores que guían el trabajo</h3><div class="values-list"><div class="value-item"><span class="value-dot">✓</span><span><strong>Honestidad</strong><small>Sinceridad, justicia y rectitud con nuestras partes interesadas.</small></span></div><div class="value-item"><span class="value-dot">◆</span><span><strong>Responsabilidad</strong><small>Cumplimos nuestras obligaciones y asumimos nuestras decisiones.</small></span></div><div class="value-item"><span class="value-dot">♡</span><span><strong>Respeto</strong><small>Reconocemos el valor de las personas y del medio ambiente.</small></span></div><div class="value-item"><span class="value-dot">↗</span><span><strong>Solidaridad</strong><small>Nos apoyamos para alcanzar objetivos compartidos.</small></span></div><div class="value-item"><span class="value-dot">✳</span><span><strong>Ética</strong><small>Actuamos de acuerdo con nuestros principios, incluso sin supervisión.</small></span></div></div></article></div>
      <div class="org-section"><div class="org-heading"><div><span class="eyebrow" style="color:var(--green)">Cómo nos organizamos</span><h3>Estructura que conecta gestión y trabajo de campo</h3></div><p>Dirección, administración, operaciones y gestión SSOMAC cumplen funciones complementarias para atender cada servicio.</p></div><div class="org-chart"><div class="org-top"><div class="org-card org-advisor"><strong>ASESOR CONTABLE</strong><small>Asesoramiento especializado</small></div><div class="org-card top"><strong>GERENCIA GENERAL</strong><small>Dirección y decisiones estratégicas</small></div></div><div class="org-branches"><div class="org-branch"><div class="org-card"><strong>ADMINISTRACIÓN</strong><small>Gestión y soporte administrativo</small></div><div class="org-sub"><div class="org-card"><strong>Asistente de Recursos Humanos</strong></div><div class="org-card"><strong>Asistente de Logística</strong></div></div></div><div class="org-branch"><div class="org-card"><strong>JEFATURA DE OPERACIONES</strong><small>Conducción de los servicios en campo</small></div><div class="org-sub"><div class="org-card"><strong>Supervisión de Operaciones</strong></div><div class="org-leaf">Personal operativo · ejecución de actividades</div></div></div><div class="org-branch"><div class="org-card"><strong>COORDINACIÓN SSOMAC</strong><small>Soporte especializado a la gestión</small></div><div class="org-leaf">Seguridad · Salud · Medio Ambiente · Calidad</div></div></div></div><p class="about-note"><strong>Fuente:</strong> Capítulo III, Marco Referencial de SGAE. Presentación resumida para consulta institucional.</p></div>
    </div></section>`;
  }

  const routeActivities=[
    {
      title:'Habilitación y mantenimiento de áreas verdes',icon:'♧',image:'areas-verdes-habilitacion.png',alt:'Área verde habilitada con césped, arbustos ornamentales y plantas sembradas',
      summary:'Preparamos, habilitamos y conservamos jardines, viveros y espacios con cobertura vegetal.',
      tasks:['Preparación y nivelación del terreno','Siembra de grass y plantas ornamentales','Riego manual y tecnificado: aspersores, goteo y tubería HDPE','Abonamiento y fertilización','Poda, perfilado y control de maleza','Aplicación fitosanitaria según el procedimiento y el producto'],
      phases:[]
    },
    {
      title:'Mantenimiento y siembra de especies frutales y forestales',icon:'🌱',image:'operacion-1.jpeg',alt:'Colaborador de SGAE plantando una especie en campo',
      summary:'Instalamos y cuidamos plantones, semillas y especies establecidas desde el vivero hasta su desarrollo en campo.',
      tasks:['Preparación de hoyos, suelos y sustratos','Siembra de plantones y semillas en campo o vivero','Riego y revisión de sistemas de goteo','Abonamiento y fertilización según el cultivo','Desmalezado, poda de formación y mantenimiento','Cosecha de frutales y manejo de restos vegetales'],
      phases:[]
    },
    {
      title:'Rehabilitación de áreas disturbadas y cierre de minas',icon:'⛰',image:'operacion-7.jpeg',alt:'Cuadrilla trabajando en la recuperación de un terreno intervenido',
      summary:'Recuperamos áreas intervenidas mediante cierre progresivo, cierre final y seguimiento post-cierre, según el alcance de cada proyecto.',
      tasks:['Retiro, conservación y manejo del suelo superficial; descompactación y enmiendas orgánicas','Revegetación con grass, semillas, plantones frutales y forestales, y trabajo de vivero','Riego temporal o tecnificado con sistemas HDPE y abonamiento','Instalación de cerco perimétrico para proteger el área rehabilitada','Monitoreo del prendimiento, reposición de plantas y control de maleza','Registro fotográfico e informe de hectáreas y plantas instaladas'],
      phases:['Cierre progresivo','Cierre final','Seguimiento post-cierre'],
      comparison:[['rehabilitacion-antes.png','Antes','Ladera con suelo expuesto y cobertura vegetal escasa.'],['rehabilitacion-despues.png','Después','Componente con revegetación y cobertura vegetal establecida.']]
    }
  ];
  window.landingPage=()=>`<main class="landing-page"><section class="hero"><div class="hero-card"><div class="hero-content"><span class="eyebrow">Nuestra cultura preventiva</span><h1>SEGURIDAD,<br>SALUD Y MEDIO<br>AMBIENTE</h1><p>365 días aprendiendo, previniendo y cuidando nuestro entorno. Una plataforma para fortalecer la cultura preventiva en cada actividad que realizamos.</p><div class="hero-ctas"><button class="btn btn-white" data-page="calendar">EXPLORAR CHARLAS SSOMA <b>→</b></button><button class="btn btn-outline" data-page="about">CONOCER SGAE</button></div></div><div class="hero-kpis"><div class="kpi-mini"><strong>365</strong><small>días para aprender</small></div><div class="kpi-mini"><strong>3</strong><small>pilares preventivos</small></div><div class="kpi-mini"><strong>1</strong><small>equipo que se cuida</small></div></div></div></section>${window.quick?.()||''}</main>`;
  window.aboutPage=()=>`<main class="about-route"><section id="nosotros"></section></main>`;
  window.activitiesPage=()=>`<main class="activities-page"><div class="page-bg activities-route-head"><div class="page-title-row"><div><a class="back-link" data-page="home">← Volver al inicio</a><h1>Nuestras actividades</h1><p>Servicios ambientales y labores de campo que forman parte de nuestra experiencia.</p></div></div></div><section class="activities" id="activities-catalog"><div class="activity-workflow" aria-label="Etapas del trabajo ambiental"><div><span>01</span><strong>Preparación</strong><small>Evaluación del terreno y organización de recursos.</small></div><div><span>02</span><strong>Implementación</strong><small>Siembra, habilitación y controles según la labor.</small></div><div><span>03</span><strong>Mantenimiento</strong><small>Riego, fertilización, poda y cuidado de las áreas.</small></div><div><span>04</span><strong>Seguimiento</strong><small>Monitoreo, reposición y registro de avances.</small></div></div><div class="activities-overview"><span class="eyebrow">Lo que hacemos</span><h2>Servicios que devuelven vida al entorno</h2><p>Experiencia que acompaña cada etapa: del establecimiento vegetal al mantenimiento y la recuperación.</p></div><div class="activity-grid">${routeActivities.map((a,i)=>`<article class="activity-card service-card"><div class="activity-photo"><img src="./assets/photos/${a.image}" alt="${a.alt}"><span class="service-number">0${i+1}</span></div><div class="activity-card-body"><h3><span class="about-activity-icon">${a.icon}</span>${a.title}</h3><p>${a.summary}</p>${a.comparison?`<div class="rehab-comparison" aria-label="Comparación de revegetación antes y después">${a.comparison.map(([image,label,alt])=>`<figure><img src="./assets/photos/${image}" alt="${alt}" loading="lazy"><figcaption><strong>${label}</strong><span>${alt}</span></figcaption></figure>`).join('')}</div>`:''}${a.phases.length?`<div class="service-phases" aria-label="Fases de cierre">${a.phases.map(phase=>`<span>${phase}</span>`).join('')}</div>`:''}<details class="service-scope"><summary>Ver tareas que comprende</summary><ul>${a.tasks.map(task=>`<li>${task}</li>`).join('')}</ul></details><a class="text-link" data-page="calendar">Ver charlas relacionadas →</a></div></article>`).join('')}</div></section></main>`;
  window.dynamicsPage=()=>`<main class="page-bg">${window.pageHead?.('Simulaciones preventivas','Practica decisiones de campo con situaciones de seguridad y cuidado ambiental.')||'<h1>Simulaciones preventivas</h1>'}<div id="simulation-root"></div></main>`;

  const monthNames=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const talkNormalize=value=>(value||'').toString().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const talkAreas=[
    ['Salud y ergonomía',/sobreesfuerzo|postura|radiacion uv|solar|calor|manos y ojos|epp|resbalones|caidas/],
    ['Herramientas y equipos',/herramienta|equipo|poda/],
    ['Productos químicos y FDS',/quimic|derrame|fuga|insumo|etiqueta|ficha de seguridad/],
    ['Emergencias y respuesta',/emergencia|evacuacion|incendio/],
    ['Medio ambiente y recursos',/biodiversidad|residuo|agua|ambiental|flora|fauna|polvo|particulado/]
  ];
  const talkArea=t=>talkAreas.find(([,pattern])=>pattern.test(talkNormalize(t.topic)))?.[0]||'Seguridad y prevención';
  window.renderTalks=function(){
    const talks=window.getSgaeTalks?.()||[],list=document.querySelector('#talkList');if(!list)return;
    const query=talkNormalize(document.querySelector('#searchTalk')?.value).trim();
    const tokens=query.split(/\s+/).filter(Boolean);
    const category=document.querySelector('#categoryFilter')?.value||'';
    const activity=document.querySelector('#activityFilter')?.value||'';
    const talkType=document.querySelector('#talkTypeFilter')?.value||'';
    const month=document.querySelector('#monthFilter')?.value??'';
    const filtered=talks.filter(t=>{
      const haystack=talkNormalize([t.day,t.title,t.topic,t.category,t.activity,t.objective,t.intro,t.isMotivational?'charla motivacional':'charla ssoma',t.motivation?.title,t.motivation?.message,t.motivation?.question,...(t.hazards||[]),...(t.controls||[])].join(' '));
      const expanded=tokens.map(term=>({fds:'ficha',sds:'ficha',sst:'seguridad',epp:'epp',iperc:'peligros',ats:'seguro'}[term]||term));
      const matchesText=expanded.every(term=>term.split(' ').every(word=>haystack.includes(word)));
      const matchesMonth=month===''||new Date(2026,0,t.day).getMonth()===Number(month);
      const matchesType=!talkType||(talkType==='motivational'?t.isMotivational:!t.isMotivational);
      return matchesText&&(!category||talkArea(t)===category)&&(!activity||t.activity===activity)&&matchesMonth&&matchesType;
    });
    const summary=document.querySelector('#talkResultsSummary');
    if(summary)summary.textContent=`${filtered.length} ${filtered.length===1?'charla encontrada':'charlas encontradas'} · ${talks.length} en el calendario`;
    if(!filtered.length){list.innerHTML=`<div class="panel talk-empty"><span class="talk-empty-icon">⌕</span><h2>No hay resultados con esta combinación</h2><p>Prueba otra palabra o actividad, o limpia los filtros para volver a ver las 365 charlas.</p><button class="btn btn-primary" data-clear-talk-filters>Limpiar filtros</button></div>`;return;}
    const anyFilter=Boolean(query||category||activity||month!==''||talkType);
    const firstResultMonth=filtered.length?new Date(2026,0,filtered[0].day).getMonth():-1;
    const openMonth=month!==''?Number(month):(anyFilter?firstResultMonth:-1);
    const matchedDays=new Set(filtered.map(t=>t.day));
    const talksByDay=new Map(talks.map(t=>[t.day,t]));
    const weekdays=['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'];
    list.innerHTML=monthNames.map((name,index)=>{
      const monthTalks=filtered.filter(t=>new Date(2026,0,t.day).getMonth()===index);
      if(!monthTalks.length)return '';
      const motivationalCount=monthTalks.filter(t=>t.isMotivational).length;
      const daysInMonth=new Date(2026,index+1,0).getDate();
      const firstWeekday=(new Date(2026,index,1).getDay()+6)%7;
      const firstDayOffset=Math.round((new Date(2026,index,1)-new Date(2026,0,1))/86400000);
      const blanks=Array.from({length:firstWeekday},()=>'<span class="calendar-day-empty" aria-hidden="true"></span>').join('');
      const dayCells=Array.from({length:daysInMonth},(_,offset)=>{
        const dayNumber=offset+1;
        const talk=talksByDay.get(firstDayOffset+dayNumber);
        const isAvailable=matchedDays.has(talk.day);
        const topic=talk.title.replace(/^Día\s*\d+\s*·\s*/,'');
        return `<button type="button" class="calendar-day${isAvailable?' is-available':''}${talk.isMotivational?' is-motivational':''}" data-talk="${talk.day}" aria-label="Día ${dayNumber}: ${topic}${talk.isMotivational?', charla motivacional':''}" ${isAvailable?'':'disabled'}><span class="calendar-day-number">${String(dayNumber).padStart(2,'0')}</span>${talk.isMotivational?'<span class="calendar-day-type">Motivacional</span>':''}<span class="calendar-day-topic">${topic}</span><span class="calendar-day-activity">${talk.activity}</span></button>`;
      }).join('');
      const monthDaysLabel=anyFilter?`${monthTalks.length} de ${daysInMonth} charlas coinciden`:`${daysInMonth} días · ${motivationalCount} motivacionales`;
      const calendar=`<div class="month-calendar-scroll"><div class="month-calendar"><div class="month-weekdays">${weekdays.map(day=>`<span>${day}</span>`).join('')}</div><div class="month-day-grid">${blanks}${dayCells}</div></div></div>`;
      return `<details class="talk-month-group" ${index===openMonth?'open':''}><summary><span class="talk-month-name">${name}</span><span class="talk-month-count">${monthDaysLabel}</span><span class="talk-month-chevron" aria-hidden="true">⌄</span></summary><div class="talk-month-items">${calendar}</div></details>`;
    }).join('');
  };
  window.calendarPage=()=>{const activities=window.getSgaeActivities?.()||[];const primary=activities.slice(0,3),related=activities.slice(3);return `<main class="page-bg calendar-page">${window.pageHead?.('Calendario 365','Busca por tema, peligro, control preventivo o actividad. Filtra las charlas según lo que tu equipo necesita.')||'<h1>Calendario 365</h1>'}<div class="filters calendar-filters"><label class="calendar-search-control"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7.2"></circle><path d="m16.5 16.5 4 4"></path></svg><input id="searchTalk" class="field" placeholder="Ej.: ficha de seguridad, EPP, radiación UV…" aria-label="Buscar entre los temas y contenidos de las charlas"></label><span class="calendar-filter-icon"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 6h16M7 12h10m-7 6h4"></path><circle cx="8" cy="6" r="1.5"></circle><circle cx="15" cy="12" r="1.5"></circle><circle cx="11" cy="18" r="1.5"></circle></svg><span>Filtrar</span></span><select id="categoryFilter" class="field" aria-label="Filtrar por área temática"><option value="">Todas las áreas temáticas</option>${[...new Set((window.getSgaeTalks?.()||[]).map(talkArea))].sort().map(c=>`<option value="${c}">${c}</option>`).join('')}</select><select id="activityFilter" class="field" aria-label="Filtrar por actividad"><option value="">Todas las actividades</option><optgroup label="Actividades principales">${primary.map(a=>`<option value="${a.label}">${a.label}</option>`).join('')}</optgroup><optgroup label="Labores relacionadas">${related.map(a=>`<option value="${a.label}">${a.label}</option>`).join('')}</optgroup></select><select id="talkTypeFilter" class="field" aria-label="Filtrar por tipo de charla"><option value="">Todos los tipos de charla</option><option value="ssoma">Charlas SSOMA</option><option value="motivational">Charlas motivacionales</option></select><select id="monthFilter" class="field" aria-label="Filtrar por mes"><option value="">Todo el año</option>${monthNames.map((m,i)=>`<option value="${i}">${m}</option>`).join('')}</select><button class="btn btn-outline" id="clearTalkFilters">Limpiar filtros</button></div><div class="calendar-results-head"><span id="talkResultsSummary" aria-live="polite"></span><span>Cada mes incluye dos charlas motivacionales. Puedes combinar tipo, actividad, tema y mes.</span></div><div id="talkList" class="talk-list"></div></main>`;};
  function clearCalendarFilters(){['searchTalk','categoryFilter','activityFilter','talkTypeFilter','monthFilter'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});window.renderTalks();document.querySelector('#searchTalk')?.focus();}
  function wireCalendarFilters(){
    const root=document.querySelector('#talkList');if(!root||root.dataset.wired)return;root.dataset.wired='true';
    ['searchTalk','categoryFilter','activityFilter','talkTypeFilter','monthFilter'].forEach(id=>{
      const control=document.getElementById(id);
      if(control)control.addEventListener(id==='searchTalk'?'input':'change',()=>window.renderTalks());
    });
    document.querySelector('#clearTalkFilters')?.addEventListener('click',clearCalendarFilters);
    root.addEventListener('click',event=>{const target=event.target instanceof Element?event.target:null;if(!target)return;const clear=target.closest('[data-clear-talk-filters]');if(clear){event.preventDefault();clearCalendarFilters();return;}const favorite=target.closest('[data-favorite]');if(favorite){event.preventDefault();event.stopImmediatePropagation();const day=Number(favorite.dataset.favorite),items=window.getSgaeFavorites?.()||[];window.saveSgaeFavorites?.(items.includes(day)?items.filter(x=>x!==day):[...items,day]);window.renderTalks();return;}const talk=target.closest('[data-talk]');if(talk){event.preventDefault();event.stopImmediatePropagation();window.openSgaeTalk?.(talk.dataset.talk);}},true);
  }
  function renderRoute(route){
    const content=({home:window.landingPage,about:window.aboutPage,activities:window.activitiesPage,dynamics:window.dynamicsPage,calendar:window.calendarPage})[route];
    if(!content)return;
    if(route!=='home')clearInterval(slideTimer);
    const root=document.querySelector('#app');
    root.innerHTML=`<div class="shell">${window.header()}${content()}${window.footer()}</div>`;
    if(route==='calendar'){window.renderTalks();wireCalendarFilters();const sourceNote=document.querySelector('.calendar-results-head span:last-child');if(sourceNote)sourceNote.textContent='Temas inspirados en Charlas Diarias SGAE de julio y ampliados a 365 días con actividades de la empresa. Cada mes incluye dos charlas motivacionales.';}
    window.bind?.();
    enhance();
  }
  const originalGo=window.go;
  window.go=function(route){originalGo(route);renderRoute(route);};
  document.addEventListener('click',event=>{
    const target=event.target instanceof Element?event.target:null;
    const footerBrand=target?.closest('.footer .brand');
    if(footerBrand){event.preventDefault();event.stopImmediatePropagation();window.go('home');return;}
    const link=target?.closest('[data-page]');
    if(!link||!['home','about','activities','dynamics','calendar'].includes(link.dataset.page))return;
    event.preventDefault();event.stopImmediatePropagation();window.go(link.dataset.page);
  },true);

  function enhance() {
    if(document.querySelector('.hero-card'))installCarousel();
    if(document.querySelector('#simulation-root'))installSimulations();
    if(document.querySelector('#nosotros'))enrichAbout();
    if(document.querySelector('.talk-detail'))enrichTalk();
  }
  const baseRender=window.render;
  if(typeof baseRender==='function')window.render=function(...args){baseRender.apply(this,args);enhance();};
  enhance();
  window.go('home');
})();
