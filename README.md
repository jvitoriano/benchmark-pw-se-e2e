# TCC: Benchmark Playwright vs Selenium
Benchmark para comparar dois frameworks de automação de testes End-to-End

## Run Tests

```bash
# Executar os testes no Playwright
$ npm run playwright

# Executar os testes no Selenium
$ npm run selenium

```

## Core Build

```bash
# Instalar o NodeJs versão LTS
$ sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
$ curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
$ sudo apt -y install nodejs

# Instalar o gerenciador de pacotes NPM
$ sudo apt install npm

# Instalar o dotenv para usar o arquivo .env
$ npm install dotenv
```

## Build Playwright Setup

```bash
# Instalar o Playwright e Navegadores
$ npm i -D @playwright/test
$ npx playwright install

# Instalando todas as depêndencias
$ npx playwright install-deps
```

## Build Selenium Setup

```bash
# Instalação Selenium Webdriver com NPM:
$ npm install selenium-webdriver
$ npm install -g mocha
$ npm install --save-dev mocha

# 1) Verificar versão do navegador Google Chrome que está instalado na máquina
# 2) Realizar o download do chrome driver em: https://chromedriver.chromium.org/downloads de acordo com a versão verificada no passo 1
# 3) Inserir o executável que foi baixado no passo 2 no diretório /tests/selenium/drivers/chrome/
# 4) Criar variável de ambiente direcionando para o diretório do passo 3
```
