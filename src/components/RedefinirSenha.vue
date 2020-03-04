<template>

    <body>
        <div class="form">
            <div class="container">
                <div class="logo">
                    <img src="../assets/IconLogin.png" alt="some text" width=90 height=90>
                    <h3>Help-car</h3>
                </div>
                <form>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail"
                                value="email@example.com">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Senha</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword">
                        </div>
                    </div>
                </form>
                <button type="submit" class="btn btn-info mb-2" id="botaoConfirmar">Confirmar alteração de
                    senha</button>
            </div>
        </div>
    </body>
</template>
<style>
    body {
        height: 100%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #fff;
    }

    .logo {
        margin-bottom: 40px;
        width: 50%;
        margin: auto;
        padding: 10px;

    }

    .form {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
        border: 2px solid #50a3b8;
    }

    .form .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }

    .form .form-control:focus {
        z-index: 2;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    #botaoConfirmar {
        margin: auto;
        margin-top: 30px;
        width: 100%;
    }
</style>