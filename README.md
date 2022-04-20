# TCC - Benchmark: Playwright vs Selenium
Benchmark para comparar dois frameworks de automação end to end

## Build Playwright Setup

```bash
# Instalar o gerenciador de pacotes NPM
$ sudo apt install npm

# Instalar o NodeJs
$ sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
$ curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
$ sudo apt -y install nodejs

# Instalar o Playwright e Navegadores
$ npm i -D @playwright/test
$ npx playwright install

# Instalando todas as depêndencias
$ npx playwright install-deps
```

## Build Selenium Setup

```bash
# Verificar versão do navegador para realizar a instalção correta do webdriver
# Baixar chrome driver em: https://chromedriver.chromium.org/downloads

# Instalação Selenium Webdriver com NPM:
$ npm install selenium-webdriver
```
