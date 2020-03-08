<template>
    <body>
        <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto ml-5">
                        <li class="nav-item ">
                            <a class="nav-link " href="#sobre">Sobre <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#quemSomos">Quem Somos <span class="sr-only"></span></a>
                        </li>

                        <li class="nav-item ">
                            <a class="nav-link" href="#contatos">Contatos <span class="sr-only"></span></a>
                        </li>
                        <li>
                            <a class="nav-link" href="#prestador">Deseja ser um prestador de serviço?<span
                                    class="sr-only"></span></a>
                        </li>
                    </ul>
                    <form class="form-inline mt-2 mt-md-0">
                        <button class="btn btn-info mr-2 my-3 my-sm-0" type="submit">
                            <router-link to="/usuariosCadastro" id="colorButton">Cadastre-se</router-link>
                        </button>
                        <button class="btn btn-info my-2 my-sm-0" type="submit">
                            <router-link to="/loginUsuario" id="colorButton">Login</router-link>
                        </button>
                        <router-view />
                    </form>
                </div>
            </nav>
        </header>

        <main role="main">
            <div class="anime" id="sobre">
                <div class="container marketing">
                    <br />
                    <br />
                    <br />
                    <div class="row featurette">
                        <div class="col-md-7">
                            <h2 class="featurette-heading">Sobre a <span class="text-muted">HelpCar</span></h2>
                            <p class="lead"> HelpCar busca agilizar e facilitar o seu dia a dia com seu carro, estamos
                                acostumados a ir em oficinas
                                para manutenção e reparos e nos deparar com gigantes filas de espera para ser atendidos,
                                isso
                                está
                                com dias contados !! A HelpCar vem para te ajudar a escolher o melhor prestador do
                                serviço,
                                mais
                                próximo de você e o mais importante disposto para te atender na HORA!! Não é incrivel ??
                                Você
                                poderá ser socorrido em qualquer hora e qualquer lugar, ficando fora de acostamento por
                                horas a
                                espera de socorro!!! Faça seu cadastro já !! É simples, facil, rapido e de GRACHA!! Ops
                                de
                                Graça!!!!</p>
                        </div>
                        <div class="col-md-5">
                            <img class="d-block w-100" src="../assets/imagemSobre.jpg" alt="imagem1" />
                        </div>
                    </div>
                </div>
            </div>

            <hr class="featurette-divider">
            <div class="anime" id="quemSomos">
                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">Quem é <span class="text-muted"> HelpCar?</span></h2>
                        <p class="lead">HelpCar é uma empresa criada a partir de funcionários, desenvolvedores de
                            softwares,
                            foi idealizada a partir de uma situação no cotidiano, a empresa busca sempre trazer a
                            melhor
                            aplicação para seu usuário, tentando agilizar seu processo do cotidiano e resolver
                            situações
                            constrangedoras. </p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img class="d-block w-100" src="../assets/imagemQueme.jpg" alt="imagem2" />
                    </div>
                </div>
            </div>

            <hr class="featurette-divider">
            <div class="anime" id="contatos">
                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">Contatos <span class="text-muted"> HelpCar</span></h2>
                        <p class="lead"></p>

                    </div>
                    <div class="col-md-5">
                        <iframe width="100%" height="300px"
                            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=-23.5544039,-46.662423&amp;q=Av.%20Ang%C3%A9lica%2C%202565%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001227-200+(Universidade%20S%C3%A3o%20Judas)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            <a href="https://www.maps.ie/map-my-route/">Draw map route</a>
                        </iframe>
                    </div>
                </div>
            </div>

            <hr class="featurette-divider">
            <div class="anime" id="prestador">
                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">Você é<span class="text-muted"> Prestador de Serviço?</span>
                        </h2>
                        <p class="lead">Se você tem seu próprio negócio e deseja participar do HelpCar para
                            facilitar a
                            vida de muitas pessoas
                            com o melhor atendimento e total segurança ao cliente e fazer o seu próprio negócio
                            decolar
                            com clientes de todos os lugares
                            cadastre-se clicando no link a seguir e faça parte do teste dessa aplicação <router-link
                                to="/prestadoresServico">..Cadastre-se como prestador de serviço</router-link>
                        </p>

                        <p>Já é cadastrado ? Deseja fazer login? </p><button class="btn btn-info my-2 my-sm-0"
                            type="submit">
                            <router-link to="/loginPrestador" id="colorButton">Logar como prestador</router-link>
                        </button>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img class="d-block w-100" src="../assets/imagemQueme.jpg" alt="imagem2" />
                    </div>
                </div>
            </div>


            <hr class="featurette-divider">

            <footer class="container">
                <p>&copy; 2020 HelpCar </p>
            </footer>
        </main>
    </body>
</template>
<script>
    export default {
        name: 'Home'
    }

    /*$('nav a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top, 
            menuHeight = $('nav').innerHeight();
        $('body').animate({
            scrollTop: targetOffset - menuHeight
        },500);
    });

    debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    (function () {
        var $target = $('.anime'),
            animationClass = 'anime-start',
            offset = $(window).height() * 3 / 4;

        function animeScroll() {
            var documentTop = $(document).scrollTop();

            $target.each(function () {
                var itemTop = $(this).offset().top;
                if (documentTop > itemTop - offset) {
                    $(this).addClass(animationClass);
                } else {
                    $(this).removeClass(animationClass);
                }
            })
        }

        animeScroll();
        $(document).scroll(debounce(function () {
            animeScroll();
        }, 200));
    }());*/
</script>
<style>
    a:hover {
        text-decoration: none;
    }

    #colorButton {
        color: #fff;
    }
</style>