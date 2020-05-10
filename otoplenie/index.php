<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"> 
	<title> Профессиональный монтаж систем отопления по передовым технологиям с экономией до 20 % </title>
	<link rel="stylesheet" href="assets/css/style.css?rev=@@hash22111">
	 <link rel="shortcut icon" href="assets/img/favicon32.ico" type="image/x-icon">
</head>
<style type="text/css">
	#main .question .img.three::before, #main .question .img.five::before{opacity: .3;}
	@media all and (max-width:420px){
		#main .timeToCall{opacity: .7;}
	}
</style>
<body class=" light_theme">

<div class="cutter">
	<section id="s01">
		<nav id="nav">
			<div class="wrap flex aic">
				<div class="col flex aic logo_block">
					<div class="logo">
						<div class="img">
							<img src="assets/img/logo.png">
						</div>
					</div>
					<!-- logo -->
				</div>
				<div class="center_col">
					<div class="logo_text">Проектирование и монтаж <br> систем отопления <br> и водоснабжения <br> в Воронеже с 2013 года</div>
					<div class="logo_text_2">Поставляем оборудование <br> для организаций нашего города, <br> в том числе Семилукская РБ, <br> ООО "ЛОС", ОАО "Экотехнологии"</div>
				</div>
				<div class="col contacts tar">
					<a href="tel:+7 (473) 222-39-09" class="phone">+7 (473) 222-39-09</a>
					<span class="online">сейчас работаем</span>
				</div>
			</div>
		</nav>

		<div class="wrap">
			<h1 class="h1">Подберем и установим отопление <br> в частном доме с гарантией 3 года <br> <span>Экономьте до 20%</span></h1>
			<hr class="hr">
			<p class="subtitle">за счет грамотного подбора <br> оборудования и оптовых цен <br> на материалы</p>
			<div class="numbers flex">
				<div class="block">
					<p class="number">3 варианта</p>
					<p class="number_text">подберем оборудование <br style="display: block !important"> в категориях   ”Эконом”, “Стандарт” и “Премиум” </p>
				</div>
				<div class="block">
					<p class="number">до 17%</p>
					<p class="number_text">экономия на счетах <br> за газ и электричество</p>
				</div>
			</div>
			<!-- numbers -->
			<div class="sub">
				<p class="mb1">Узнайте, на чем можно сэкономить именно в Вашем случае.</p>

				<p>Рассчитайте стоимость системы отопления в трех <br> вариантах: <strong>”Эконом” , “Стандарт” и “Премиум”</strong></p>
			</div>
			<div class="btn_wrapper"><a href="quiz.php#anchor" data-href="#anchor" class="btn scroll_to_anchor" onclick=" ym(30233479, 'reachGoal', ' goToQuiz');">рассчитать стоимость</a></div>
			<span id="anchor" ></span>
		</div>
	</section>

	<?php $dev = '<div class="dev">
							<a href="policy.html" target="_blank" class="upper">Политика конфиденциальности. </a>
							<a  class="tar">Разработано в Quiz24.ru</a>
						</div>'; ?>

	<?php if (!isset($_SERVER['HTTP_USER_AGENT']) || stripos($_SERVER['HTTP_USER_AGENT'], 'Chrome-Lighthouse') === false): ?>


	<main id="main">
		 <video class="bg_video" src="bg.mp4" width="100%" height="100%"  autoplay="1"   playsinline muted loop ></video>
		<!--  <video class="bg_video bg_video_2" src="bg.mp4" width="100%" height="100%"  autoplay="1"   playsinline muted loop ></video> -->
		<!-- <div class="player"> <div class="screen mute" id="player"></div> </div> -->


			<div class="header">
				<p class="header_title">Рассчитайте  стоимость вашей системы отопления в трех вариантах: <br> <br class="mob"> ”Эконом”, “Стандарт” и “Премиум” </p>
				<div class="progressBar">
					<div class="steps"><span id="current_step">1 </span> из 6</div>
					<div class="bar"></div>
				</div>
				<hr class="hr">
			</div>
			<!-- /.header -->
		<div class="wrap">
			<form action="spasibo.php" method="post" class="quiz" id="quiz">
				<div class="change_block active" data-step="1">
					<p class="question">
						<span class="img"><img src="assets/img/1.png"></span>
						<span class="text">
							<strong>Укажите  площадь дома</strong>
							Введите площадь дома, которую необходимо отапливать,  кв.м.
						</span>
					</p>
					<!-- question -->
					<div class="questions_block">
						<div class="col_left">
							<div class="column mt-05">
								<p class="label">Площадь, кв.м.</p>
								<input type="text" name="square" class="filled sizeInput">

								<div class="form_control">
									<div class="answer_block noImg">
										<input type="radio" name="square" id="size_1" value="Пока не знаю">
										<label for="size_1">Пока не знаю</label>
									</div>
									<!-- answer_block -->
								</div>
							</div>
							<!-- /.column -->
							<div class="column">
								<div class="img high_img">
									<img src="assets/img/question1.jpg?v=1">
								</div>
							</div>
							<!-- /.column -->
						</div>
						<!-- /.col_left -->
						<div class="col_right">
							<div class="present_block">
								<p>До результата теста  <br>  и выбора подарка осталось: <br> <strong>5 вопросов</strong></p>
								<img src="assets/img/present.png">
							</div>
						</div>
						<!-- /.col_right -->
					</div>

					<div class="buttons">
						<a href="#x" class="goBack">Назад</a>
						<a onclick='ym(30233479, "reachGoal", "step2");' href="#x" class="goNext" disabled="disabled">Следующий шаг <img src="assets/img/right.png"></a>
					</div>
					<!-- /.buttons -->
					<?php echo $dev ?>
					<!-- dev -->
				</div>
				<!-- /.change_block -->
				<div class="change_block nextInQueue" data-step="2">
					<p class="question">
						<span class="img"><img src="assets/img/2.png"></span>
						<span class="text">
							<strong>Какой вид топлива планируете использовать?</strong>
							 В зависимости от типа топлива, мы подберем тип котла.
						</span>
					</p>
					<!-- question -->
					<div class="questions_block">
						<div class="col_left">
							<div class="form_control">
								<div class="img "  >
									<img src="assets/img/qustion2_1.png">
								</div>
								<div class="answer_block">
									<input type="radio" name="toplivo" id="toplivo1" value="Газ">
									<label for="toplivo1">Газ</label>
								</div>
								<!-- answer_block -->
							</div>
							<!-- /.form_control -->
							<div class="form_control">
								<div class="img "  >
									<img src="assets/img/qustion2_2.png">
								</div>
								<div class="answer_block">
									<input type="radio" name="toplivo" id="toplivo2" value="Электричество">
									<label for="toplivo2">Электричество</label>
								</div>
								<!-- answer_block -->
							</div>
							<!-- /.form_control -->
							<div class="form_control">
								<div class="img "  >
									<img src="assets/img/qustion2_3.png">
								</div>
								<div class="answer_block">
									<input type="radio" name="toplivo" id="toplivo3" value="Дрова, уголь, пеллеты">
									<label for="toplivo3">Дрова, уголь, пеллеты</label>
								</div>
								<!-- answer_block -->
							</div>
							<!-- /.form_control -->
							<div class="form_control">
								<div class="img "  >
									<img src="assets/img/qustion2_4.png">
								</div>
								<div class="answer_block">
									<input type="radio" name="toplivo" id="toplivo4" value="Дизель">
									<label for="toplivo4">Дизель</label>
								</div>
								<!-- answer_block -->
							</div>
							<!-- /.form_control -->

							<div class="form_control">
								<div class="answer_block noImg">
									<input type="radio" name="toplivo" id="toplivo5" value="Пока не знаю">
									<label for="toplivo5">Пока не знаю</label>
								</div>
								<!-- answer_block -->
							</div>
						
						</div>
						<!-- /.col_left -->
						<div class="col_right">
							<div class="present_block">
								<p>До результата теста  <br>  и выбора подарка осталось: <br> <strong>4 вопроса</strong></p>
								<img src="assets/img/present.png">
							</div>
						</div>
						<!-- /.col_right -->
					</div>
					<!-- /.questions_block -->

					<div class="buttons">
							<a href="#x" class="goBack">Назад</a>
							<a onclick='ym(30233479, "reachGoal", "step3");' href="#x" class="goNext" disabled="disabled">Следующий шаг <img src="assets/img/right.png"></a>
						</div>
					<!-- /.buttons -->
					<?php echo $dev ?>
					<!-- dev -->
				</div>
				<!-- /.change_block -->
				<div class="change_block " data-step="3">
					<p class="question">
						<span class="img three"><img src="assets/img/3_1.png"></span>
						<span class="text">
							<strong>Сколько окон в доме? </strong>
							Укажите количество окон в помещениях, которые планируете отапливать, шт.
						</span>
					</p>
					<!-- question -->
					<div class="questions_block">
						<div class="col_left">
							<div class="column mt-05">
								<p class="label">Количество, шт.</p>
								<input type="text" name="windows" class="filled sizeInput">

								<div class="form_control">
									<div class="answer_block noImg">
										<input type="radio" name="windows" id="windows_1" value="Пока не знаю">
										<label for="windows_1">Пока не знаю</label>
									</div>
									<!-- answer_block -->
								</div>
							</div>
							<!-- /.column -->
							<div class="column">
								<div class="img high_img">
									<img src="assets/img/Rectangle36.png">
								</div>
							</div>
							<!-- /.column -->
						</div>
						<!-- /.col_left -->
						<div class="col_right">
							<div class="present_block">
								<p>До результата теста  <br>  и выбора подарка осталось: <br> <strong>3 вопроса</strong></p>
								<img src="assets/img/present.png">
							</div>
						</div>
						<!-- /.col_right -->
					</div>
					
					<div class="buttons">
							<a href="#x" class="goBack">Назад</a>
							<a onclick='ym(30233479, "reachGoal", "step4");' href="#x" class="goNext" disabled="disabled">Следующий шаг <img src="assets/img/right.png"></a>
						</div>
					<!-- /.buttons -->
					<?php echo $dev ?>
					<!-- dev -->
				</div>
				<!-- /.change_block -->
				<div class="change_block " data-step="4">
					<p class="question">
						<span class="img four"><img src="assets/img/4.png"></span>
						<span class="text">
							<strong>Вы планируете делать теплый пол? </strong>
							Укажите необходимую площадь теплого пола,  кв.м.
						</span>
					</p>
					<!-- question -->
					<div class="questions_block">
						<div class="col_left">
							<div class="column mt-05">
								<p class="label">Площадь, кв.м.</p>
								<input type="text" name="floor" class="filled sizeInput">

								<div class="form_control">
									<div class="answer_block noImg">
										<input type="radio" name="floor" id="floor_1" value="Ещё не решил/не нужен">
										<label for="floor_1">Ещё не решил/не нужен</label>
									</div>
									<!-- answer_block -->
								</div>
							</div>
							<!-- /.column -->
							<div class="column">
								<div class="img high_img">
									<img src="assets/img/floor.png">
								</div>
							</div>
							<!-- /.column -->
						</div>

						<div class="col_right">
							<div class="present_block">
								<p>До результата теста  <br>  и выбора подарка осталось: <br> <strong>2 вопроса</strong></p>
								<img src="assets/img/present.png">
							</div>
						</div>
						<!-- /.col_right -->
					</div>
					
					<div class="buttons">
							<a href="#x" class="goBack">Назад</a>
							<a onclick='ym(30233479, "reachGoal", "step5");' href="#x" class="goNext" disabled="disabled">Следующий шаг <img src="assets/img/right.png"></a>
						</div>
					<!-- /.buttons -->
					<?php echo $dev ?>
					<!-- dev -->
				</div>
				<!-- /.change_block -->
				<div class="change_block " data-step="5">
					<p class="question">
						<span class="img five"><img src="assets/img/5.png"></span>
						<span class="text">
							<strong>Требуется установка системы водоснабжения,  канализации?</strong>
							Выберите один или несколько вариантов
						</span>
					</p>
					<!-- question -->
					<div class="questions_block">
						<div class="col_left">
							<div class="form_control">
								<div class="img ">
									<img src="assets/img/image2.png" style="width: 200px;max-width:100%">
								</div>
								<div class="answer_block">
									<input type="checkbox" name="kanalizaciya[]" id="kanalizaciya_1" value="Водоснабжение, внутренняя канализация">
									<label for="kanalizaciya_1">Водоснабжение, внутренняя канализация</label>
								</div>
								<!-- answer_block -->
							</div>
							<!-- /.form_control -->
							<div class="form_control">
								<div class="img "  >
									<img src="assets/img/image3.png" style="width: 200px;max-width:100%">
								</div>
								<div class="answer_block">
									<input type="checkbox" name="kanalizaciya[]" id="kanalizaciya_2" value="Септик ">
									<label for="kanalizaciya_2">Септик </label>
								</div>
								<!-- answer_block -->
							</div>
							<!-- /.form_control -->


							<div class="form_control">
								<div class="answer_block noImg">
									<input type="radio" name="kanalizaciya" id="kanalizaciya_6" value="Ещё не решил.  Требуется больше  информации">
									<label for="kanalizaciya_6">Ещё не решил.  Требуется больше  информации</label>
								</div>
								<!-- answer_block -->
							</div>
							<!-- /.form_control -->
						</div>
						<!--col_left -->
						<div class="col_right">
							<div class="present_block">
								<p>До результата теста  <br>  и выбора подарка осталось: <br> <strong>1 вопрос</strong></p>
								<img src="assets/img/present.png">
							</div>
						</div>
						<!-- /.col_right -->
					</div>
					<!-- questions_block-->

					<div class="buttons">
							<a href="#x" class="goBack">Назад</a>
							<a onclick='ym(30233479, "reachGoal", "step6");' href="#x" class="goNext" disabled="disabled">Следующий шаг <img src="assets/img/right.png"></a>
						</div>
					<!-- /.buttons -->
					<?php echo $dev ?>
					<!-- dev -->
				</div>
				<!-- /.change_block -->



				<div class="change_block " data-step="6">
					<p class="question">
						<span class="img"><img src="assets/img/6.png"></span>
						<span class="text">
							<strong>Забронируйте подарок за прохождение теста</strong>
							Вы получите подарок, если решите заказать монтаж  отопления у нас.
						</span>
					</p>
					<!-- question -->
					<div class="questions_block">
						<div class="col_left presents">
							<div class="form_control">
								<div class="info_parent">
									<span class="info_icon">i</span>
									<div class="inform_block">
										<div class="scroll">
											<p>- Поддерживает заданную температуру в комнате</p>
										</div>
									</div>
								</div>
								<!-- inform_block -->
								<div class="img " >
									<img src="assets/img/p1.png" style="height: auto" class="mt1">
								</div>
								<div class="answer_block switchPresent">
									<input type="radio" name="present" id="present_1" value="Термостат управления котлом Teplocom (программируемый)">
									<label for="present_1">Термостат управления котлом Teplocom (программируемый)</label>
								</div>
								<!-- answer_block -->
								<div class="footer">
									<table>
										<tr>
											<td>Стоимость:</td>
											<td>3400 р.</td>
										</tr>
										<tr>
											<td>Осталось:</td>
											<td class="mnogo">Много</td>
										</tr>
									</table>
								</div>
							</div>
							<!-- /.form_control -->

							<div class="form_control">
								<div class="info_parent">
									<span class="info_icon">i</span>
									<div class="inform_block">
										<div class="scroll">
											<p>- контролирует давление</p>
											<p>- сбрасывает избыточное давление и воздух из системы</p>
										</div>
									</div>
								</div>
								<!-- inform_block -->
								<div class="img " >
									<img src="assets/img/p2.png" style="height: auto" class="mt1">
								</div>
								<div class="answer_block switchPresent">
									<input type="radio" name="present" id="present_2" value="Группа безопасности котла ">
									<label for="present_2">Группа безопасности котла </label>
								</div>
								<!-- answer_block -->
								<div class="footer">
									<table>
										<tr>
											<td>Стоимость:</td>
											<td>3000 р.</td>
										</tr>
										<tr>
											<td>Осталось:</td>
											<td class="malo">Мало</td>
										</tr>
									</table>
								</div>
							</div>
							<!-- /.form_control -->

							<div class="form_control presentBlock">
								<div class="present_header">Ваш подарок</div>
								<div class="img "  >
									<img src="" style="height: auto;" class="mt1">
								</div>
								<div class="present_name"></div>

								<div class="one_step">
									До результата теста: <strong>1 ШАГ</strong>
								</div>
							</div>
							<!-- /.form_control -->

							<div class="form_control">
								<div class="info_parent">
									<span class="info_icon">i</span>
									<div class="inform_block">
										<div class="scroll">
											<p>- Принудительная циркуляция жидкости в системе</p>
										</div>
									</div>
								</div>
								<!-- inform_block -->
								<div class="img " >
									<img src="assets/img/p3.png" style="height: auto" class="mt1">
								</div>
								<div class="answer_block switchPresent">
									<input type="radio" name="present" id="present_3" value="Циркуляционный насос UNIPUMP">
									<label for="present_3">Циркуляционный насос UNIPUMP</label>
								</div>
								<!-- answer_block -->
								<div class="footer">
									<table>
										<tr>
											<td>Стоимость:</td>
											<td>2900 р.</td>
										</tr>
										<tr>
											<td>Осталось:</td>
											<td class="mnogo">Много</td>
										</tr>
									</table>
								</div>
							</div>
							<!-- /.form_control -->

						</div>
						<!-- col_left -->

					</div>
					<!-- questions_block -->

					<div class="buttons">
							<a href="#x" class="goBack">Назад</a>
							<a onclick='ym(30233479, "reachGoal", "step7");' href="#x" class="goNext" disabled="disabled">Следующий шаг <img src="assets/img/right.png"></a>
						</div>
					<!-- /.buttons -->
					<?php echo $dev ?>
					<!-- dev -->

				</div>
				<!-- /.change_block -->

				<div class="change_block " data-step="6">
					<p class="weAreStarted">Мы уже приступили к расчету! </p>
					<div class="startedFlex">
						<div class="started_col">
							<p class="started_title">Как вам удобнее  <br> получить результат?</p>
							<ul class="radio_list">
								<li>
									<input type="radio" name="messenger" id="messenger_1" value="Пришлите мне расчет стоимости  на WhatsApp">
									<label for="messenger_1">Пришлите мне расчет стоимости  на WhatsApp</label>
								</li>
								<li>
									<input type="radio" name="messenger" id="messenger_2" value="Пришлите мне расчет стоимости в Viber" checked="">
									<label for="messenger_2">Пришлите мне расчет стоимости в Viber</label>
								</li>
								<li>
									<input type="radio" name="messenger" id="messenger_3" value="Пришлите SMS со стоимостью">
									<label for="messenger_3">Пришлите SMS со стоимостью</label>
								</li>
								<li>
									<input type="radio" name="messenger" id="messenger_4" value="Перезвоните мне, у меня остались вопросы">
									<label for="messenger_4">Перезвоните мне, у меня остались вопросы</label>
								</li>
							</ul>
						</div>
						<!-- started_col -->
						<div class="started_col">
							<div class="form_control presentBlock">
								<div class="present_header">Ваш подарок</div>
								<div class="img "  >
									<img src="" style="height: auto;" class="mt1">
								</div>
								<div class="present_name"></div>

								<div class="one_step">
									<nobr>подарок будет забронирован <br> за вашим номером</nobr>
								</div>
							</div>
						</div>
						<!-- started_col -->
					</div>
					<!-- startedFlex -->

					<div class="buttons phoneImg">
						<input type="tel" name="tel" class="top_phone" placeholder="_(___)___-__-__">
						<a href="#x" class="getResultBtn" disabled="disabled">Получить результат</a>
					</div>
					<!-- /.buttons -->

					<div class="spinner_block tac">
						<div class="blue"> <p class="percentage">0%</p> </div>
						<div class="progress_round">
					    <div class="bar_round" data-name="SVG Skill" data-percent="100%">
					        <svg id="white" viewBox="-10 -10 220 220" stroke-width="20">
					        <g fill="none" stroke-width="9" transform="translate(100,100)">
					        <path stroke-width="20" d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)"/>
					        <path stroke-width="20" d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)"/>
					        <path stroke-width="20" d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)"/>
					        <path stroke-width="20" d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)"/>
					        <path stroke-width="20" d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)"/>
					        <path stroke-width="20" d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)"/>
					        </g>
					        </svg>
					        <svg id="white2" viewBox="-10 -10 220 220" stroke-width="20">
					          <path stroke-width="20" d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"               stroke-dashoffset="629">
					          </path>
					        </svg>
					    </div>

							<!--  Defining Angle Gradient Colors  -->
							<svg width="0" height="0" stroke-width="20">
							<!-- <defs> -->
							<linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
							    <stop stop-color="#f48a3e"/>
							    <stop offset="100%" stop-color="#f69c3d"/>
							</linearGradient>
							<linearGradient id="cl2" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
							    <stop stop-color="#f48a3e"/>
							    <stop offset="100%" stop-color="#f69c3d"/>
							</linearGradient>
							<linearGradient id="cl2" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
							    <stop stop-color="#f7a43d"/>
							    <stop offset="100%" stop-color="#fbca3c"/>
							</linearGradient>
							<linearGradient id="cl3" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
							    <stop stop-color="#f7a43d"/>
							    <stop offset="100%" stop-color="#fbca3c"/>
							</linearGradient>
							<linearGradient id="cl4" gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
							    <stop stop-color="#fac23c"/>
							    <stop offset="100%" stop-color="#fac23c"/>
							</linearGradient>
							<linearGradient id="cl5" gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
							    <stop stop-color="#fac23c"/>
							    <stop offset="100%" stop-color="#feec3b"/>
							</linearGradient>
							<linearGradient id="cl6" gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
							    <stop stop-color="#fdde3c"/>
							    <stop offset="100%" stop-color="#feec3b"/>
							</linearGradient>

						
						</div>
						<!-- progress_round -->
					</div>
					<!-- spinner_block -->

					<p class="primernaya tac">Примерная стоимость системы отопления в  3-х ценовых категориях сформирована. <br> <!-- <strong>Она откроется сразу после регистрации</strong> --> </p>

					<?php echo $dev ?>
					<!-- dev -->
				</div>
				<!-- /.change_block -->


				<div class="change_block white_block " data-step="6">
					<p class="white_title">
						Стоимость системы отопления в 3-х ценовых категориях
					</p>
					<hr class="white_hr">
					<div class="master_information">
						<div class="master_left">
							<div class="master_image">
								<img src="assets/img/master.png">
							</div>
							<p class="master_name tac"> Бокарев Евгений Игоревич</p>
							<p class="master_status tac">Генеральный директор  <br> ООО «БОЯРГО»</p>
						</div>
						<div class="master_text">
							<p class="perfect">Отлично!</p>
							<p class="get">Мы получили заявку на расчет стоимости <br class="pc"> системы отопления для Вас</p>
							<p class="master_bold">Стоимость системы отопления складывается из:</p>
							<ul class="master_list">
								<li>   
									- стоимости оборудования,
								  <br style="display: block!important"> - стоимости материалов,
						   		<br style="display: block!important"> - работ по монтажу системы отопления. 
								</li>

								<li>Ниже приведены примерные сметы стоимости системы отопления  <br> в вариантах "Эконом" и “Премиум". </li>
								   
								<li>В тарифах указана ориентировочная стоимость для того, чтобы  <br> Вы смогли представить из каких частей состоит смета. А также,  <br> для демонстрации разницы в стоимости между  двумя вариантами.</li>
								<li>
									<strong>ЭКОНОМ</strong>
									Подразумевает минимальный уровень автоматизации управления 
									<br> отопительным оборудованием, комплектуется материалами хорошо 
									<br> зарекомендовавших себя российских и китайских производителей.
								</li>
								<li>
									<strong>ПРЕМИУМ</strong>
									Обеспечивает автоматическое включение и отключение систем, 
									<br> комплектуется оборудованием популярных российских и европейских 
									производителей (Чехия, Германия, Италия, Испания).
								</li>
							</ul>
						</div>
						<!-- /.master_text -->
					</div>
					<!-- /.master_information -->

					<div class="price_blocks">
						<div class="price_block">
							<div class="price_header">Эконом</div>
							<div class="price_body">
								<p class="price_body_title">Примерная стоимость для  двухэтажного дома: 8*9м</p>
								<ul class="price_list">
									<li class="head">
										<span>Оборудование: <br> Россия / Китай</span>
										<span>Комментарий</span>
										<span>Стоимость</span>
									</li>
									<li>
										<span>Котёл основной (газ)</span>
										<span>напольный</span>
										<span>14 т.р.</span>
									</li>
									<li>
										<span>Котёл резервный  <br> (электричество)</span>
										<span>нет</span>
										<span>-</span>
									</li>
									<li>
										<span>Бойлер</span>
										<span>электрический</span>
										<span>8 т.р.</span>
									</li>
									<li>
										<span>Обвязка котельной</span>
										<span>нет</span>
										<span>-</span>
									</li>
									<li>
										<span>Насосы</span>
										<span>1 шт.</span>
										<span>2 т.р.</span>
									</li>
									<li>
										<span>Радиаторы</span>
										<span>Китай</span>
										<span>40 т.р.</span>
									</li>
									<li>
										<span>Тёплые полы</span>
										<span>нет</span>
										<span>-</span>
									</li>
									<li>
										<span>Рециркуляция ГВС</span>
										<span>нет</span>
										<span>-</span>
									</li>
									<li>
										<span>Автоматика</span>
										<span>нет</span>
										<span>-</span>
									</li>
									<li>
										<span>Монтажные работы</span>
										<span></span>
										<span>80 т.р.</span>
									</li>
								</ul>
								<!-- /.price_list -->
								<p class="itogo">
									<span>ИТОГО:</span>
									<span>144 т.р.</span>
								</p>
							
							</div>
						</div>
						<!-- /.price_block -->
						<div class="price_block">
							<div class="price_header">Премиум</div>
							<div class="price_body">
								<p class="price_body_title">Примерная стоимость для двухэтажного дома: 8*9м</p>
								<ul class="price_list fz14">
									<li class="head">
										<span>Оборудование: <br> Россия / Италия / Германия </span>
										<span>Комментарий</span>
										<span>Стоимость</span>
									</li>
									<li>
										<span>Котёл основной (газ)</span>
										<span>конденсационный</span>
										<span>140 т.р.</span>
									</li>
									<li>
										<span>Котёл резервный  <br> (электричество)</span>
										<span>есть</span>
										<span>40 т.р.</span>
									</li>
									<li>
										<span>Бойлер</span>
										<span>косвенного  <br> нагрева,160 л.</span>
										<span>30 т.р.</span>
									</li>
									<li>
										<span>Обвязка котельной</span>
										<span>нержавейка</span>
										<span>30 т.р.</span>
									</li>
									<li>
										<span>Насосы</span>
										<span>с частотным  <br> регулированием</span>
										<span>25 т.р.</span>
									</li>
									<li>
										<span>Радиаторы</span>
										<span>Италия/Германия</span>
										<span>80 т.р.</span>
									</li>
									<li>
										<span>Тёплые полы</span>
										<span>50м<sup>2</sup></span>
										<span>80 т.р.</span>
									</li>
									<li>
										<span>Рециркуляция ГВС</span>
										<span>с “умным” <br> насосом</span>
										<span>20 т.р.</span>
									</li>
									<li>
										<span>Автоматика</span>
										<span>Россия/Европа</span>
										<span>80 т.р.</span>
									</li>
									<li>
										<span>Монтажные работы</span>
										<span></span>
										<span>150 т.р.</span>
									</li>
								</ul>
								<!-- /.price_list -->
								<p class="itogo">
									<span>ИТОГО:</span>
									<span>675 т.р.</span>
								</p>

							</div>
						</div>
						<!-- /.price_block -->
					</div>
					<!-- /.price_blocks -->

					<div class="for_calc">
						<strong style="font-family: 'Museo Sans Cyrl 900';">Что подойдет именно в Вашем случае?</strong>
					</div>
					<p class="for_calc mt1">Мы уже приступили к расчету 3-х вариантов стоимости <br> системы отопления для Вас. </p>
					<p class="for_calc mt1">Специалист должен задать несколько уточняющих вопросов, <br>
						<strong>чтобы определить какое необходимо оборудование</strong>
					</p>
					<div class="check_data">
						<span>Проверьте номер телефона и укажите удобное время  <br> для звонка специалиста</span>
					</div>
					<input type="tel" name="tel" required="" class="bottom_phone" placeholder="7 (905) 111-22-33">
					<input type="text" name="time" placeholder="Укажите удобное время для звонка" class="timeToCall">
					<button type="submit" class="submit">отправить</button>
					<a class="insta_block" target="_blank" href="https://instagram.com/boyargo_ru?igshid=84cnrrl3467g">
						<img src="assets/img/insta_logo.png">
						<p>Подписывайтесь на наш инстаграм</p>
					</a>
					<a href="http://boyargo.ru/" class="goToMain" target="_blank">перейти на основной сайт</a>



					<?php echo $dev ?>
					<!-- dev -->

				</div>
			</form>
		</div>
	</main>

</div>
<!-- cutter -->
<?php endif; ?>
<?php if (!isset($_SERVER['HTTP_USER_AGENT']) || stripos($_SERVER['HTTP_USER_AGENT'], 'Chrome-Lighthouse') === false): ?>
<div class="popup-bg" id="popup-bg">

	  <div class="popup" id="popup1">
	    <div class="head">
	      <div class="close" onclick="popup(-1)">&times;</div>
	      <span><strong>СПАСИБО!</strong> <br style="display: block !important"> Пока менеджер рассчитывает стоимость системы отопления, посмотрите больше информации о нашей компании на основном сайте</span>
	    </div>
	    <div class="content">
	      <a href="http://boyargo.ru/" target="_blank" class="goToMain">Перейти на основной сайт</a>
	      <a href="https://instagram.com/boyargo_ru?igshid=84cnrrl3467g" class="insta_logo" target="_blank"><img src="assets/img/insta_logo.png"></a>
	      <a href="https://instagram.com/boyargo_ru?igshid=84cnrrl3467g" target="_blank" class="mt1 subscribe">Подписывайтесь на наш инстаграм</a>
	    </div>    
	  </div>

	  <div class="popup" id="popup3">
	    <div class="head">
	      <div class="close" onclick="popup(-1)">&times;</div>
	      <span><strong>СПАСИБО!</strong> <br style="display: block !important"> В ближайшее время мы пришлём инструкцию на указаный Вами <br class="pc"> номер телефона</span>
	    </div>
	    <!-- <div class="content">
	      <a href="http://boyargo.ru/" target="_blank" class="goToMain">Перейти на основной сайт</a>
	      <a href="https://instagram.com/boyargo_ru?igshid=84cnrrl3467g" class="insta_logo" target="_blank"><img src="assets/img/insta_logo.png"></a>
	      <a href="https://instagram.com/boyargo_ru?igshid=84cnrrl3467g" target="_blank" class="mt1 subscribe">Подписывайтесь на наш инстаграм</a>
	    </div>     -->
	  </div>

	  <div class="popup" id="popup2">
	    <div class="head">
	      <div class="close" onclick="popup(-1)">&times;</div>
	    </div>
	    <div class="content aic">
	      <div class="img"><img src="assets/img/exit_book.png"></div>
	      <div class="text_block">
	      	<div class="popup_title">
	      		<p>Как выбрать надежный котел для дома и избежать ошибок и переплат?</p>
	      		<p style="font-weight: normal;font-family: 'Museo Sans Cyrl 500"><small>Инструкция по выбору котла по 4-м параметрам</small></p>
	      	</div>
	      	<p class="sub hidden">В какой мессенджер удобно получить инструкцию?</p>
	      	<button type="button" class="submit" id="submit">
		      		<img src="assets/img/download.png">
		      		Скачать
		      	</button>

	      	<div class="hidden">
	      		<form action="spasibo.php" method="post" id="popup_form" onsubmit='ym(30233479, "reachGoal", "exit");'>
		      		<div class="radios">
			      		<div class="form_control">
			      			<input type="radio" name="messenger" value="Whats app" id="mes_1" checked="">
			      			<label for="mes_1">
			      				<span class="label_img"><img src="assets/img/w.png"></span>
			      				<p>Whats app</p>
			      			</label>
			      		</div>
			      		<div class="form_control">
			      			<input type="radio" name="messenger" value="Viber" id="mes_2">
			      			<label for="mes_2">
			      				<span class="label_img"><img src="assets/img/v.png"></span>
			      				<p>Viber</p>
			      			</label>
			      		</div>
			      		<div class="form_control">
			      			<input type="radio" name="messenger" value="Telegram" id="mes_3">
			      			<label for="mes_3">
			      				<span class="label_img"><img src="assets/img/t.png"></span>
			      				<p>Telegram</p>
			      			</label>
			      		</div>
			      <!-- 		<div class="form_control">
			      			<input type="radio" name="messenger" value="SMS" id="mes_4">
			      			<label for="mes_4">
			      				<span class="label_img"><img src="assets/img/s.png"></span>
			      				<p>SMS</p>
			      			</label>
			      		</div> -->
			      	</div>
			      	<!-- radios -->
			      	<input type="tel" name="tel" placeholder="Введите ваш телефон" required="">
			      	<input type="hidden" name="comment" value="Скачать инструкцию">
			      	<button type="submit" class="submit">
			      		<img src="assets/img/download.png">
			      		Скачать
			      	</button>
		      	</form>
	      	</div>
	      	<!-- hidden -->
	      </div>
	      <!-- text_block-->
	    </div>    
	    <!-- content -->
	  </div>

</div>


	<div class="banner_wrap">
		<div class="wrap">
			<div class="img"><img src="assets/img/banner_img.png"></div>
			<div class="col_center">
				<p class="banner_title">
					<strong>Рассчитайте  стоимость системы 
						<br> отопления в трех вариантах:
					</strong>
					<br> “Эконом”, “Стандарт” и “Премиум”
				</p>
				<a href="//boyargo.ru/opros" class="goToQuiz">рассчитать стоимость</a>
			</div>
			<!-- /.col_center -->
			<div class="col_right">
				<div class="slideDown">Свернуть <img src="assets/img/down.png"></div>
				<a href="#x" class="permanent_close">
					Закрыть  <br> и не показывать
				</a>
			</div>
			<!-- /.col_right -->
		</div>
	</div>

<script src="assets/js/index.min.js?rev=@@hash"></script>
<script src="assets/js/viewport.js"></script>

<script type="text/javascript">
	anim = true;
	$clear_input 		= $('input');
	$clear_textarea = $('textarea');
	$clear_checkbox = $('[type="checkbox"]');
	$clear_radio 		= $('[type="radio"]');
	var banner_timer = '';

	// $.each($clear_checkbox, function(index, val) { $($clear_checkbox[index]).prop('checked', false) });
	// $.each($clear_radio, function(index, val) { $($clear_radio[index]).prop('checked', false) });
	// $.each($clear_textarea, function(index, val) { $($clear_textarea[index]).val('') });
	// $.each($clear_input, function(index, val) { $($clear_input[index]).val('') });


		const quizSteps = 6;
		let $progressBar_width = $('.progressBar').width();
		const step = $progressBar_width / quizSteps;

		$('.form_control').on('click', toggleInputProp);
		//$('.answer_block').on('click', toggleInputProp);
		$('.change_block textarea, .change_block input[type="text"]').on('click input blur focus change', setTextAreaValue);
		$('.top_phone').on('click input blur focus change keyup keydown', checkPhone);
		$(document).on('click', '.goNext, .getResultBtn',  goNext);
		$('.goBack').on('click', goBack);
		//$('.switchPresent').on('click', switchPresent);
		$('.presents .form_control').on('click', switchPresent);

		$(".scroll").niceScroll();

		document.addEventListener("mouseout", onMouseOut);

		function initQuizSlider () {
			$('.slider').slick({
				infinite: true,
			})
		}

		function setTextAreaValue () {
			if ( $(this).val().length > 1 ) {
				$(this).parents('.form_control').find('.fake_checkbox').addClass('checked');
				$(this).parents('.form_control').find('.fake_radio').addClass('checked');
				let radios = $(this).parents('.change_block').find('[type="radio"]');

				if ( $(radios).length > 0 ) {
					$.each(radios, function(index, val) {
						 $(radios[index]).prop('checked', false)
					});
				}
			}
			else{
				$(this).parents('.form_control').find('.fake_checkbox').removeClass('checked')
				$(this).parents('.form_control').find('.fake_radio').removeClass('checked')
			}
			toggleNextBtn ();
		}

		function toggleNextBtn () {
			r = false;
			c = false;
			t = false;
			i = false;
			let radios 				 = $('.change_block.active').find('input[type="radio"]');
			let checkboxes 		 = $('.change_block.active').find('input[type="checkbox"]');
			let textarea_block = $('.change_block.active').find('.textarea_block');
			let input_text 	   = $('.change_block.active').find('input[type="text"]');

			if ( radios.length > 0 ) {
				$.each(radios, function(index, val) {
					if ( $(radios[index]).prop('checked') ) {return r = true;}
				});
			}
			else{ r = true; }
			
			if ( radios.length > 0 ) {
				$.each(checkboxes, function(index, val) {
					if ( $(checkboxes[index]).prop('checked') ) {return c = true;}
				});
			}
			else{ c = true }

			if ( 
					r && c
					|| 
					(
						textarea_block.length > 0 
						&& $(textarea_block).find('textarea').val().length > 1
					) 
				) 
			{
				$('.change_block.active .goNext').removeAttr('disabled');
			}
			else{
				$('.change_block.active .goNext').attr('disabled', 'disabled')
			}
		}

		function counterAnimate () {
			$('.progress_round').css({ 'opacity' : '1' })
			$('.progress_round').addClass('animate');

			if ( !$('.percentage').hasClass('showArrow') && anim ){
				anim = false
				$('.percentage').each(function () {
				   $(this).prop('Counter',0).animate({
			        Counter: 100
			    	}, {
			        duration: 6e3,
			        easing: 'swing',
			        step: function (now) {
			            $(this).text(Math.ceil(now) + '%');
			        },
			        complete : function () {
		        		$('.percentage').html(' <img src="assets/img/count_done.png"> ');
		        		$('.percentage').addClass('showArrow');
		        		$('#main .primernaya').animate({ 'opacity' : '1' }, 'normal');
			        },
			        start: function () { console.log('start') },
			        fail: function () { console.log('fail') },
			    });
			   	return false;
				});
			}
		}


		function toggleInputProp (e) {
			if ( 
				e.target.className !== 'loopa' 
				&& e.target.className !== 'slick-prev slick-arrow' 
				&& e.target.className !== 'slick-next slick-arrow'  
				&& e.target.className !== 'info_icon'  
			) {  
				$this = $(this);
				setTimeout(function(){
					if ( $($this).find('input').prop('checked') === true ) {
						$($this).find('input').prop('checked', false);
					}
					else{
						$($this).find('input').prop('checked', true);
						$($this).parents('.change_block').find('.fake_radio').removeClass('checked');
					}
					toggleNextBtn ();
					let $radios = $($this).parents('.change_block').find('[type="radio"]');
					console.log('length')
					console.log($($this).parents('.change_block').find('[type="radio"]:checked').length)
					if ( $radios.length > 0 ) {
						$('.change_block.active').find('.goNext').removeAttr('disabled');
						setTimeout(function(){
							if ( 
								$($this).parents('.change_block')
									.find('[type="radio"]:checked').length > 0 
								) 
								{
								 $('.change_block.active').find('.goNext').click(); 
								}
						}, 100)
						//$('.change_block.active').find('.goNext').click();
						//return;
					}
				}, 100)
			} // if 
		}

		jQuery(function($){
	 		$.mask.definitions['q'] = '[1, 2, 3, 4, 5, 6, 9]';
		  $('input[type="tel"]').mask("+7(q99) 999-99-99");
		});

		var lastAnimateTime = 0;
		function nextStepProgressBar () {
			let $current_step = $('.change_block.nextInQueue').data('step');
			$('.progressBar #current_step').html( $current_step + '');

			if ( Date.now() - lastAnimateTime > 1000 ) {
				let $bar_width = $('.bar').width();
				$('.bar').animate({
					'width' : $bar_width + step + 'px'
				}, 500)
				lastAnimateTime = Date.now();
			}
		}

		function prevStepProgressBar () {
			let $current_step = $('.change_block.active').prev('.change_block').data('step');
			$('.progressBar #current_step').html( $current_step + '');

			if ( Date.now() - lastAnimateTime > 2000 ) {
				let $bar_width = $('.bar').width();
				$('.bar').animate({
					'width' : $bar_width - step + 'px'
				}, 500)
				lastAnimateTime = Date.now();
			}
		}



		function goNext () {
			//if ( $(this).hasClass('disabled') ) {return false;}

			if ( $(this).attr('disabled') === 'disabled' ) {
				if ( $(this).hasClass('goNext') ) {$(this).append('<span class="error">Пожалуйста, выберите вариант ответа<span>');}
				if ( $(this).hasClass('getResultBtn') ) {$(this).parents('.buttons.phoneImg').prepend('<span class="error">Чтобы получить результат, введите телефон<span>');}
				
				$('.goNext .error, .buttons.phoneImg .error').fadeIn();
				setTimeout(function(){ $('.goNext .error, .buttons.phoneImg .error').fadeOut().remove(); }, 3e3)
				return false;
			}

			$this = $(this);
			var destination = $('#anchor').offset().top;
	    $("html:not(:animated),body:not(:animated)").animate({  scrollTop: destination+120 }, 500);

			if ( $(this).hasClass('getResultBtn') ) { 
				$(this).parents('.wrap').css(
					{
						'overflow' : 'visible', 
						'z-index' : '999',
						'padding-bottom' : '0px'
					}
				)

				$(this).parents('.change_block').next('.change_block').addClass('openLock');
				let $phone = $('.top_phone').val();
				$('.top_phone').remove();
				$('.bottom_phone').val( $phone );
				
				$.ajax({
		        type: "POST",
		        url: 'spasibo.php',
		        data: $(this).parents('form').serialize()
		    }).done(function() { ym(30233479, "reachGoal", "form1"); } );
			}

			nextStepProgressBar ();

			$('.change_block.active').animate({ 'opacity' : '0' }, 2e3,)

			$(".change_block.nextInQueue").animate({ 
					'top' : '20px', 
					'opacity' : '1'
			}, 2e3);
			setTimeout(function(){
				$($this).parents('.change_block.active').removeClass('active').next('.change_block.nextInQueue').addClass('active').removeClass('nextInQueue').next('.change_block').addClass('nextInQueue');
				//$('.change_block.nextInQueue').addClass('active').removeClass('nextInQueue');
				$('.change_block.active').next('.change_block').addClass('nextInQueue');

				if ( $('.change_block.active.white_block').length > 0 ) {
					$('.bg_video').css({
						'height': '2200px',
						'width': '4000px'
					})
				}

				if ( $('.change_block.active .slider').length > 0 ) { initQuizSlider() }
				if ( $('.change_block.active .progress_round').length > 0 ) {

					if ( $(".progress_round:in-viewport").length > 0 && !$('.percentage').hasClass('showArrow') ) { counterAnimate (); }
					$(window).scroll(function() {
						setTimeout(function(){
							if ( $(".progress_round:in-viewport").length > 0 && !$('.percentage').hasClass('showArrow') ) { counterAnimate (); }
						}, 1000)
					});
				}
			}, 2.1e3)

			if ( document.documentElement.clientWidth < 800 ) {
		    var destination = $('#main').offset().top;
		    $("html:not(:animated),body:not(:animated)").animate({  scrollTop: destination }, 500);
			}

			$('.goNext').addClass('disabled');
			setTimeout(function(){ $('.goNext').removeClass('disabled'); }, 1.5e3)
		}
		// goNext

		$('.inform_block, .info_icon').hover(function(){
			$(".scroll").getNiceScroll().resize();
		}, function(){})

		function goBack () {
			//if ( $(this).hasClass('disabled') ) {return false;}
			if ( $(this).attr('disabled') === 'disabled' ) {return false;}

			var destination = $('#anchor').offset().top;
	    $("html:not(:animated),body:not(:animated)").animate({  scrollTop: destination }, 500);

    	prevStepProgressBar ();

			$('.change_block.active').animate({ 'opacity' : '0' }, 1e3,)
			$('.change_block.nextInQueue').removeClass('nextInQueue');
			$('.change_block.active').prev('.change_block').addClass('nextInQueue');

			$('.nextInQueue').animate({
				'top' : '20px', 'opacity' : '1'
			}, 1e3, function(){
				$('.change_block.active').removeClass('active');
				$('.change_block.nextInQueue').addClass('active').removeClass('nextInQueue');
				$('.change_block.active').next('.change_block').addClass('nextInQueue');

				$('.nextInQueue').attr('style', function(i, style){
				    return style && style.replace(/top[^;]+;?/g, '').replace(/opacity[^;]+;?/g, '');
				});

				if ( $('.change_block.active .slider').length > 0 ) { initQuizSlider() }
				if ( $('.change_block.active .progress_round').length > 0 ) {
					counterAnimate ();
				}
			})

			$('.goBack').addClass('disabled');
			setTimeout(function(){ $('.goBack').removeClass('disabled'); }, 1.5e3)

			//if ( document.documentElement.clientWidth < 800 ) {
		    //var destination = $('#anchor').offset().top;
		    //$("html:not(:animated),body:not(:animated)").animate({  scrollTop: destination }, 500);
			//}
		}

		function switchPresent () {
			$this = $(this);

			setTimeout(function(){
				let radio = $('.switchPresent input[type="radio"]:checked');
				let src = $(radio).parents('.form_control').find('.img img').attr('src');
				let name = $(radio).parents('.form_control').find('label').text();
				$('.presentBlock img').attr('src', src);
				$('.present_name').html( name );

			}, 100)
		}


		function checkPhone() {
			if ( $(this).val().length > 1 && !$(this).val().includes('_')  ) {
				$('.getResultBtn').removeAttr('disabled');
			}
			else{
				$('.getResultBtn').attr('disabled', 'disabled');
			}
		}


jQuery("a.scrollto").click(function() {
    var elementClick = jQuery(this).attr("href")
    var destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 500);
    return false;
});

jQuery("body:not(.home) a.scroll_to_anchor").click(function() {
    var elementClick = jQuery(this).data("href")
    var destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 500);
    return false;
});


window.onload = function(){
  document.getElementById('popup-bg').onclick = function(e) {if (e.target != this) { return true; } popup(-1);}
}
function popup(nm) {
    popupElm = document.getElementById("popup-bg");
    if (nm == -1) {
        popupElm.classList.remove('visible');
        document.querySelector('body').style.overflow = 'auto';
    } else {
        elm = popupElm.getElementsByClassName('popup');
        if (typeof nm != 'undefined')
            for (var i = elm.length - 1; i >= 0; i--) {
                if (elm[i].id == 'popup' + nm) {
                    elm[i].classList.add('visible');
                    popupElm.classList.add('visible');
                    document.querySelector('body').style.overflow = 'hidden';
                } else {
                    elm[i].classList.remove('visible');
                }
            }
        else {
            popupElm.classList.add('visible');
            document.querySelector('body').style.overflow = 'hidden';
        }
    }
}


$(document).ready(function() {  
  $("#quiz").submit(function() {
    $.ajax({
        type: "POST",
        url: 'spasibo.php',
        data: $(this).serialize()
    }).done(function() { 
    	popup(1); 
    	ym(30233479, "reachGoal", "form2"); 
    });
    return false;
  });

  $("#popup_form").submit(function() {
    $.ajax({
        type: "POST",
        url: 'spasibo.php',
        data: $(this).serialize()
    }).done(function() { popup(3) });
    return false;
  });
});

$('#submit').on('click', function(){
	$(this).parents('.content').find('.hidden').removeClass('hidden')
	$(this).remove();
})


			$('.home_slider').slick({
				infinite: true,
				draggable: false,
				dots: false,
				responsive: [
			    {
			      breakpoint: 800,
			      settings: {
			        dots: true
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        //slidesToShow: 2,
			        //slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			      	dots: true
			        //slidesToShow: 1,
			        //slidesToScroll: 1
			      }
			    }
			  ]
			});

			$('.sertificates').slick({
				infinite: true,
				dots: false,
				slidesToShow: 4,
				 responsive: [
			    {
			      breakpoint: 810,
			      settings: {
			        slidesToShow: 2,
			        infinite: true,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
			})


	// ПОПАП НА ВЫХОД
	function onMouseOut(event) {
	  // If the mouse is near the top of the window, show the popup
	  // Also, do NOT trigger when hovering or clicking on selects
	  if (
	    event.clientY < 50 &&
	    event.relatedTarget == null &&
	    event.target.nodeName.toLowerCase() !== 'select') {
	    // Remove this event listener
	    document.removeEventListener("mouseout", onMouseOut);

	    // Show the popup
	    popup(2)
	  }
	}


$(window).on('resize', function() {
    if ( document.documentElement.clientWidth > 480 ) {
    	setTimeout(function(){
    		//$(".home_slider.pc .twentytwenty-container").twentytwenty();
    	}, 1e3)
    }
});

// ДО/ПОСЛЕ + БАННЕР
if ( document.documentElement.clientWidth > 480 ) {
	jQuery(document).ready(function($) {
		//$(".home_slider.pc .twentytwenty-container").twentytwenty();
	});

	$(window).on('scroll', function(){
		if ( !$('body').hasClass('home') ) {return false;}
    var fromTop = $(document).scrollTop();
    var fourth_sect = $('#showBanner').offset().top
    var time_diff = Date.now() - banner_timer;
    if ((fromTop > fourth_sect) && time_diff > 30e3 ){
      $('.banner_wrap').show();
      if ( $('.banner_wrap').length > 0 ) {  
      	$('body').addClass('open_banner'); 
      }
    } else{
      $('.banner_wrap').hide();
      $('body').removeClass('open_banner');
    }
	});

}

		$(document).on('click', '.slideDown', function(){
		    $('.banner_wrap').slideToggle(300);
		    $('body').removeClass('open_banner');
		    banner_timer = Date.now();
		});
		$(document).on('click', '.permanent_close', function(){
		    $('body').removeClass('open_banner');
		    $('.banner_wrap').remove();
		});


$('.sizeInput').on('input blur change focus keyup keydown', function(){
	if ( $(this).val().length > 0 ) {
		$(this).addClass('filled');
		let inputs = $(this).parents('.column').find('.sizeInput');
		let input_counter = 0;
		$.each(inputs, function(index, val) {
			 if ( $(inputs[index]).val().length < 1 ) {
			 	$(inputs[index]).addClass('filled');
			 	return false;
			 }
			 else{
			 	++input_counter;
			 	if ( input_counter >= inputs.length) {
			 		$(this).parents('.change_block').find('.goNext').removeAttr('disabled');
			 	}
			 }
		});
	}
	else{
		$(this).removeClass('filled')
	}
})

$('#popup1').on('click', '.close', function(){
	$('#quiz .submit').attr('disabled', 'disabled');
	$('#quiz .submit').css({
		'cursor' : 'not-allowed',
		'background' : '#bbb7b7',
	});
})
	</script>
<style type="text/css">
	#main .question{background: #111f3f;}
</style>


<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(30233479, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/30233479" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<?php endif; ?>
</body>
</html>